import { d as definePrivateEventHandler, p as prisma, c as createError } from './.get.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _get = definePrivateEventHandler(async (event, user) => {
  let departments = [];
  try {
    departments = await prisma.department.findMany({
      select: {
        id: true,
        name: true,
        code: true
      },
      orderBy: { name: "asc" }
    });
    return departments;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
}, { auth: false });

export { _get as default };
//# sourceMappingURL=.get11.mjs.map
