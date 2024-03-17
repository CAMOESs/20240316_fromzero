/** @format */

import prisma from "~/prisma/my_prisma";
import { definePrivateEventHandler } from "../..";
import { PrismaClient } from "@prisma/client";

export default definePrivateEventHandler(
  async (event, user) => {
    let body = await readBody(event);
    let where: any = {};
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
          ...where,
        },
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les diplômes des candidats"],
  }
);
