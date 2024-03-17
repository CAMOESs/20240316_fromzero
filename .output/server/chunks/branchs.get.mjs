import { d as definePrivateEventHandler, g as getQuery, p as prisma } from './.get.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const branchs_get = definePrivateEventHandler(
  async (event, user) => {
    getQuery(event);
    try {
      return await prisma.$queryRaw`SELECT branch AS name FROM candidats GROUP BY branch;`;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  }
);

export { branchs_get as default };
//# sourceMappingURL=branchs.get.mjs.map
