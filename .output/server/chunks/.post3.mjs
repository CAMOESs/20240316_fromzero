import { d as definePrivateEventHandler, r as readBody, p as prisma } from './.get.mjs';
import { Prisma } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const _post = definePrivateEventHandler(
  async (event, user) => {
    const body = await readBody(event);
    console.log("body");
    console.log(body);
    let data = {};
    try {
      if (body.id) {
        data = await prisma.session.update({
          where: {
            id: Number(body.id)
          },
          data: {
            month: body.month,
            year: body.year,
            reference: body.reference,
            description: body.description,
            date_of_pv: new Date(body.date_of_pv),
            user_id: user.id
          }
        });
      } else {
        data = await prisma.session.create({
          data: {
            month: body.month,
            year: parseInt(body.year),
            reference: body.reference,
            description: body.description,
            date_of_pv: new Date(body.date_of_pv),
            user_id: user.id
          }
        });
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return { error: "Cette session existe d\xE9j\xE0." };
        }
      }
      return { error: "Une erreur s'est produite" };
    }
    return data;
  },
  {
    can: ["Enregistrer une session"]
  }
);

export { _post as default };
//# sourceMappingURL=.post3.mjs.map
