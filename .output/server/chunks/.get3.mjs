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

const _get = definePrivateEventHandler(
  async (event, user) => {
    try {
      return await prisma.session.findMany({
        select: {
          id: true,
          month: true,
          year: true,
          reference: true,
          description: true,
          date_of_pv: true,
          Month: {
            select: {
              name: true
            }
          }
        },
        orderBy: [
          {
            year: "desc"
          },
          {
            Month: {
              order: "desc"
            }
          }
        ]
      });
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

export { _get as default };
//# sourceMappingURL=.get3.mjs.map
