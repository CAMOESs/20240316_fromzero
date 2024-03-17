import { definePrivateEventHandler } from "../../..";
import { PrismaClient } from "@prisma/client";
import prisma from "../../../../prisma/my_prisma";

export default definePrivateEventHandler(async (event, user) => {
  let municipalities = [];
  try {
    municipalities = await prisma.municipality.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
      orderBy: { name: "asc" },
    });

    return municipalities;
    // return departments;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un problème est survenue.",
    });
  }
});
