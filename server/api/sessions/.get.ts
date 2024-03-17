/** @format */

import prisma from "~/prisma/my_prisma";
import { definePrivateEventHandler } from "../../";
import { PrismaClient } from "@prisma/client";

export default definePrivateEventHandler(
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
              name: true,
            },
          },
        },
        orderBy: [
          {
            year: "desc",
          },
          {
            Month: {
              order: "desc",
            },
          },
        ],
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
      "Supprimer des sessions",
    ],
  }
);
