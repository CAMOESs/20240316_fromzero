import { d as definePrivateEventHandler, r as readBody, p as prisma } from './.get.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _post = definePrivateEventHandler(
  async (event, user) => {
    let body = await readBody(event);
    let where = {};
    if (body.branch) {
      where.branch = body.branch;
    }
    if (body.centre) {
      where.centre = body.centre;
    }
    if (body.corps) {
      where.corps = body.corps;
    }
    if (body.metier) {
      where.metier = body.metier;
    }
    if (body.department) {
      where.department = body.department;
    }
    if (body.municipality) {
      where.municipality = body.municipality;
    }
    try {
      return await prisma.candidat.findMany({
        where: {
          session_id: Number(body.session_id),
          ...where
        }
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  }
);

export { _post as default };
//# sourceMappingURL=.post2.mjs.map
