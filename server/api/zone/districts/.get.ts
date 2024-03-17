import { definePrivateEventHandler } from "../../..";
import { PrismaClient } from "@prisma/client";
import prisma from "../../../../prisma/my_prisma";

export default definePrivateEventHandler(async (event, user) => {
  let districts = [];
  try {
    districts = await prisma.district.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
      orderBy: { name: "asc" },
    });

    return districts;
    // return departments;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un problème est survenue.",
    });
  }
});
