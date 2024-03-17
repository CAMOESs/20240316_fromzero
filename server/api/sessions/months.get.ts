/** @format */

import prisma from "~/prisma/my_prisma";
import { definePrivateEventHandler } from "../../";
import { PrismaClient } from "@prisma/client";

export default definePrivateEventHandler(
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
      "Supprimer des sessions",
    ],
  }
);
