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

const min_get = definePrivateEventHandler(
  async (event, user) => {
    try {
      return (await prisma.session.findMany({
        select: {
          id: true,
          month: true,
          year: true,
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
      })).map((v) => {
        return {
          id: v.id,
          name_: v.Month.name + " " + v.year
        };
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats"]
  }
);

export { min_get as default };
//# sourceMappingURL=min.get.mjs.map
