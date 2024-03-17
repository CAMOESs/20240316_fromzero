/** @format */

import { H3Event } from "h3";
import { getServerSession } from "#auth";

import prisma from "../prisma/my_prisma";
import { Prisma } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
const file_path = "server/json/log.json";
async function can_access(can: string[], user: any): Promise<boolean> {
  /*  SELECT permissions.name 
	FROM users
    INNER JOIN role_user ON role_user.username = users.username
    INNER JOIN roles ON roles.slug  = role_user.slug
    INNER JOIN permission_role ON permission_role.role_slug = roles.slug
    INNER JOIN permissions ON permissions.slug = permission_role.permission_slug
    WHERE users.username = "ticsad" AND permissions.name IN ('Enregistrer un profil');*/
  if (!user || !user.username) return false;

  const result = await prisma.$queryRaw`
    SELECT permissions.name FROM users
        INNER JOIN role_user ON role_user.username = users.username
        INNER JOIN roles ON roles.slug  = role_user.slug
        INNER JOIN permission_role ON permission_role.role_slug = roles.slug
        INNER JOIN permissions ON permissions.slug = permission_role.permission_slug
    WHERE 
        users.username = ${user?.username} AND 
        permissions.name IN (${Prisma.join(can)})`;

  return Boolean(result && Array.isArray(result) && result.length > 0);
}

export function definePrivateEventHandler<T>(
  handler: (event: H3Event, cxt?: any) => T,
  options?: { auth?: boolean; can?: string[] }
) {
  let auth = options?.auth == undefined || options?.auth == true;

  return defineEventHandler(async (event) => {
    const session = await getServerSession(event);
    let user = session?.user;

    const url = event.node.req.url;

    //@ts-ignore
    const data = `${url}  username = ${user?.username}\n`;

    let res = ReadJson(file_path);
    if (res.status) {
      appendTextInLogFile(data);
    }
    if (!auth) {
      return await handler(event, user);
    }

    if (auth && !session) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authentification requise !" + event.node.req.url,
        message: "Authentification requise !" + event.node.req.url,
      });
    }

    if (!options?.can || options.can.length == 0)
      return await handler(event, user);

    if (!(await can_access(options.can, user))) {
      throw createError({
        statusCode: 403,
        statusMessage: "Access interdit !",
        message: "Access interdit !",
      });
    }

    return await handler(event, user);
  });
}
export function defineLogEventHandler<T>(
  handler: (event: H3Event, cxt?: any) => T,
  options?: { auth?: boolean; can?: string[] }
) {
  let auth = options?.auth == undefined || options?.auth == true;

  return defineEventHandler(async (event) => {
    // const session = await getServerSession(event);
    const session = { user: "z" };
    let user = session?.user;

    if (!auth) {
      await handler(event, user);
    }
  });
}
export function appendTextInLogFile(data: string) {
  const dir = ".log";
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const seconds = new Date().getSeconds().toString().padStart(2, "0");
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");

  const dirPath = path.join(".", dir, year.toString(), month, day);
  const filePath = path.join(dirPath, `${hour}h${minute}.log`);

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "");
  }
  fs.appendFileSync(filePath, `${seconds} : ${data}`);
}

export function errorHandler<T>(error: unknown): string {
  if (typeof error == "string") return error;
  if (typeof error == "object" && error == null) return "Erreur inconnu";
  //@ts-ignore
  if (typeof error == "object" && error != null && error.code) {
    //@ts-ignore
    switch (error.code) {
      case "P2002":
        return "Le champ doit etre unique";
        break;

      default:
        //@ts-ignore
        return "Code erreur  " + error.code;
        break;
    }
  }

  return "Une erreur s'est produite";
}
