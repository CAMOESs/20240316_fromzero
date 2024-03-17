/** @format */

import prisma from "~/prisma/my_prisma";
import { definePrivateEventHandler } from "../../";
import { PrismaClient } from "@prisma/client";

export default definePrivateEventHandler(
  async (event, user) => {
    try {
      return (
        await prisma.session.findMany({
          select: {
            id: true,
            month: true,
            year: true,
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
        })
      ).map((v) => {
        return {
          id: v.id,
          name_: v.Month.name + " " + v.year,
        };
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats"],
  }
);
