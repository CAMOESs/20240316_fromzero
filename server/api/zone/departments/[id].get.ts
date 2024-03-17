import { definePrivateEventHandler } from "../../..";
import prisma from "../../../../prisma/my_prisma";

export default definePrivateEventHandler(async (event, user) => {
  // console.log(event.context.params);
  let municipalities: unknown = [];
  try {
    if (!event.context.params?.id) throw "id de Departement manquant";
    municipalities = await prisma.municipality.findMany({
      where: {
        department_id: parseInt(event.context.params.id),
      },
      select: {
        id: true,
        name: true,
        code: true,
      },
    });
    return municipalities;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un problème est survenue.",
    });
  }
},{auth : false } );
