import { definePrivateEventHandler } from "../../..";
import prisma from "../../../../prisma/my_prisma";

export default definePrivateEventHandler(async (event, user) => {
  console.log(event.context.params);
  let districts = [];
  try {
    if (!event.context.params?.id) throw "id de commune manquant";
    districts = await prisma.district.findMany({
      where: {
        municipality_id: parseInt(event.context.params.id),
      },
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
    return districts;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un problème est survenue.",
    });
  }
},{ auth : false } );
