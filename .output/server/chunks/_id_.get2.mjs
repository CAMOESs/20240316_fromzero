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
  let schools = [];
  try {
    if (!((_a = event.context.params) == null ? void 0 : _a.id))
      throw "id de l'\xE9tablissement manquant";
    let school_department = await prisma.school.findUnique({
      where: {
        id: parseInt(event.context.params.id)
      },
      select: {
        department_id: true
      }
    });
    if (school_department) {
      schools = await prisma.$queryRawUnsafe(
        `SELECT schools.id, schools.name, schools.acronym
         FROM promotions_ouvertes 
         INNER JOIN schools ON promotions_ouvertes.school_id = schools.id
         INNER JOIN years ON promotions_ouvertes.year_id = years.id
         WHERE years.in_progress = 1 AND classe_id = 28 AND schools.department_id = ${school_department == null ? void 0 : school_department.department_id}  ;`
      );
      return schools;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
});

export { _id__get as default };
//# sourceMappingURL=_id_.get2.mjs.map
