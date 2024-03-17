import { definePrivateEventHandler } from "../../..";
import prisma from "../../../../prisma/my_prisma";

export default definePrivateEventHandler(async (event, user) => {
  console.log(event.context.params);
  let villages = [];
  try {
    if (!event.context.params?.id) throw "id de Departement manquant";
    villages = await prisma.village.findMany({
      where: {
        district_id: parseInt(event.context.params.id),
      },
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
      },
    });
    return villages;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un problème est survenue.",
    });
  }
},{ auth : false } );
