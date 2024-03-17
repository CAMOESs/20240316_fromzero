/** @format */

import prisma from "~/prisma/my_prisma";
import { definePrivateEventHandler } from "../../";
// import { PrismaClient } from "@prisma/client";

export default definePrivateEventHandler(
  async (event, user) => {
    let query = getQuery(event);
    try {
      return await prisma.$queryRaw`SELECT metier AS name FROM candidats GROUP BY metier;`;
    } catch (error) {
      console.error(error);
      return [] 
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les diplômes des candidats"],
  }
);
