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

const _delete = definePrivateEventHandler(
  async (event, user) => {
    const body = await readBody(event);
    try {
      await prisma.session.deleteMany({
        where: {
          id: {
            in: body.ids
          }
        }
      });
    } catch (error) {
      console.error(error);
      return { error: "Une erreur s'est produite." };
    }
    return { status: "ok" };
  },
  {
    can: [
      "Voir la liste des sessions",
      "Enregistrer une session",
      "Supprimer des sessions"
    ]
  }
);

export { _delete as default };
//# sourceMappingURL=.delete.mjs.map
