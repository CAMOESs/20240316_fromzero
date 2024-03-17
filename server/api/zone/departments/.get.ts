import { definePrivateEventHandler } from "../../..";
import { PrismaClient } from "@prisma/client";
import prisma from "../../../../prisma/my_prisma";

export default definePrivateEventHandler(async (event, user) => {
  let departments = [];
  try {
    
    departments = await prisma.department.findMany({
      select: {
        id: true,
        name: true,
        code: true,
      },
      orderBy: { name: "asc" },
    });

    return departments;
    // return departments;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un problème est survenue.",
    });
  }
},{ auth : false} );
