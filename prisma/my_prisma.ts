/** @format */

import { PrismaClient } from "@prisma/client";
import slugify from "slugify";
import * as fs from "fs";
import { appendTextInLogFile } from "~~/server";
const file_path = "server/json/log.json";
function stringifyQueryEvent(e: any) {
  return `Query: ${e.query}
  Params: ${e.params}
  Duration: ${e.duration}ms\n`;
}
function stringifyLogEvent(e: any) {
  return `Error: ${e.message}
  Target: ${e.target}\n`;
}
const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});
/* prisma.$use(async (params, next) => {
  if (params.model == 'Post' && params.action == 'create') {
    params.args.data.language = contextLanguage
  }

  return next(params)
}) */
/* prisma.$use(async (params, next) => {
  if (params.action === "create" || params.action === "createMany") {
    let {
      args: { data },
    } = params;
    // Check if slug exists by `findUnique` (did not test)
    data.slug = slugify(`${data.name}`, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });
  }
  const result = await next(params);
  return result;
}); */
prisma.$on("warn", (e) => {
  // console.log(e);
  let res = ReadJson(file_path);
  if (res.status) {
    appendTextInLogFile(stringifyLogEvent(e));
  }

  // console.log("JOURNAL DES WARNING PRISMA");
});

prisma.$on("info", (e) => {
  // console.log(e);
  let res = ReadJson(file_path);
  if (res.status) {
    appendTextInLogFile(stringifyLogEvent(e));
  }

  // console.log("JOURNAL DES INFO PRISMA");
});

prisma.$on("error", (e) => {
  // console.log(e);
  let res = ReadJson(file_path);
  if (res.status) {
    appendTextInLogFile(stringifyLogEvent(e));
  }

  // console.log("JOURNAL DES ERREURS PRISMA");
});
prisma.$on("query", (e) => {
  let res = ReadJson(file_path);
  if (res.status) {
    appendTextInLogFile(stringifyQueryEvent(e));
  }

  // console.log("JOURNAL DES REQUETES PRISMA - qurery");
});

export default prisma;
