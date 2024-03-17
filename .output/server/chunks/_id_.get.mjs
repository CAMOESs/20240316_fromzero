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

const _id__get = definePrivateEventHandler(async (event, user) => {
  var _a;
  let municipalities = [];
  try {
    if (!((_a = event.context.params) == null ? void 0 : _a.id))
      throw "id de Departement manquant";
    municipalities = await prisma.municipality.findMany({
      where: {
        department_id: parseInt(event.context.params.id)
      },
      select: {
        id: true,
        name: true,
        code: true
      }
    });
    return municipalities;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
}, { auth: false });

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
