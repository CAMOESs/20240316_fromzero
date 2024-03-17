/** @format */

import { definePrivateEventHandler } from "../..";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient({
  log: ["query"],
});

export default definePrivateEventHandler(
  async (event) => {
    const body = await readBody(event);
    console.log("body: ", body);
    try {
      // await prisma.$executeRaw`DELETE FROM users WHERE id IN ${Prisma.join(body)}`;
      await prisma.user.deleteMany({
        where: {
          id: { in: body },
        },
      });
    } catch (error) {
      console.error(error);
      return {
        error: "Une erreur s'est produite.",
      };
    }
    return "Deleted successfully ✅";
  },
  { auth: true, can: ["Supprimer les utilisateurs"] }
);
