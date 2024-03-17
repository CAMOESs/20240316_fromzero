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
  let municipalities = [];
  try {
    municipalities = await prisma.municipality.findMany({
      select: {
        id: true,
        name: true,
        code: true
      },
      orderBy: { name: "asc" }
    });
    return municipalities;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
});

export { _get as default };
//# sourceMappingURL=.get13.mjs.map
