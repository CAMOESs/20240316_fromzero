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

const _id_ = definePrivateEventHandler(async (event, user) => {
  var _a;
  console.log(event.context.params);
  let districts = [];
  try {
    if (!((_a = event.context.params) == null ? void 0 : _a.id))
      throw "id de commune manquant";
    districts = await prisma.district.findMany({
      where: {
        municipality_id: parseInt(event.context.params.id)
      },
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        code: true
      }
    });
    return districts;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
}, { auth: false });

export { _id_ as default };
//# sourceMappingURL=_id_3.mjs.map
