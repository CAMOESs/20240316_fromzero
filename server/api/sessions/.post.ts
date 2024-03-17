/** @format */

import prisma from "~/prisma/my_prisma";
import { definePrivateEventHandler } from "../..";
import { PrismaClient, Prisma } from "@prisma/client";

export default definePrivateEventHandler(
  async (event, user) => {
    const body = await readBody(event);
    console.log("body");
    console.log(body);

    let data = {};
    try {
      if (body.id) {
        data = await prisma.session.update({
          where: {
            id: Number(body.id),
          },
          data: {
            month: body.month,
            year: body.year,
            reference: body.reference,
            description: body.description,
            date_of_pv: new Date(body.date_of_pv),
            user_id: user.id,
          },
        });
      } else {
        data = await prisma.session.create({
          data: {
            month: body.month,
            year: parseInt(body.year),
            reference: body.reference,
            description: body.description,
            date_of_pv: new Date(body.date_of_pv),
            user_id: user.id,
          },
        });
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === "P2002") {
          return { error: "Cette session existe déjà." };
        }
      }

      return { error: "Une erreur s'est produite" };
    }
    return data;
  },
  {
    can: ["Enregistrer une session"],
  }
);
