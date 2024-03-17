/** @format */

import { definePrivateEventHandler } from "../..";
import { PrismaClient, Permission } from "@prisma/client";
import { my_menu } from "~/server/utils/menu";

const prisma = new PrismaClient();
export default definePrivateEventHandler(async (event, user) => {
  try {
    const items = my_menu;
    //  console.log(items)
    //@ts-ignore
    let user_username = user?.username;

    const permissions_of_user = await prisma.$queryRaw<
      Permission[]
    >`SELECT permissions.name FROM permissions INNER JOIN permission_role on
            permission_role.permission_slug=permissions.slug INNER JOIN roles on roles.slug=permission_role.role_slug
            INNER JOIN role_user on role_user.slug=roles.slug WHERE role_user.username=${user?.username}`;
    let items_of_user = [];
    for (const key in items) {
      if (
        items[key].can.some(
          (v) => !!permissions_of_user.find((element) => element.name === v)
        )
      ) {
        // console.log("aa")
        items_of_user.push({
          icon: items[key].icon,
          title: items[key].title,
          to: items[key].to,
        });
      }
      // console.log(key);
    }
    // console.log("permissions_of_user: ", permissions_of_user)
    // console.log("items_of_user", items_of_user)

    await prisma.$disconnect();
    return items_of_user;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 403,
      statusMessage: "Un problème est survenue.",
    });
  }
});