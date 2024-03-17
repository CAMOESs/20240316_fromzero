/** @format */

import prisma from "~/prisma/my_prisma";
import { definePrivateEventHandler } from "../..";
import { PrismaClient } from "@prisma/client";

export default definePrivateEventHandler(
  async (event, user) => {
    const body = await readBody(event);
    try {
      await prisma.session.deleteMany({
        where: {
          id: {
            in: body.ids,
          },
        },
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
      "Supprimer des sessions",
    ],
  }
);
