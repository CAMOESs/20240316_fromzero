import { d as definePrivateEventHandler, p as prisma } from './.get.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const months_get = definePrivateEventHandler(
  async (event, user) => {
    try {
      return await prisma.month.findMany();
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: [
      "Voir la liste des sessions",
      "Enregistrer une session",
      "Supprimer des sessions"
    ]
  }
);

export { months_get as default };
//# sourceMappingURL=months.get.mjs.map
