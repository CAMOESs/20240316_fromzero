import { definePrivateEventHandler } from "../../../..";
import prisma from "../../../../../prisma/my_prisma";

export default definePrivateEventHandler(async (event, user) => {
  // console.log(event.context.params);
  let schools: unknown = [];
  try {
    // if (!event.context.params?.id) throw "id de Departement manquant";
    // schools = await prisma.school.findMany({
    //   where: {
    //     department_id: parseInt(event.context.params.id),
    //   },
    //   select: {
    //     id: true,
    //     name: true,
    //     acronym: true,
    //   },
    // });
    // return schools;

    if (!event.context.params?.id) throw "id de l'établissement manquant";


    let school_department = await prisma.school.findUnique({
      where: {
        id: parseInt(event.context.params.id),
      },
      select :{
       department_id:true,
      } 
    });

    if(school_department){
      schools = await prisma.$queryRawUnsafe(
        `SELECT schools.id, schools.name, schools.acronym
         FROM promotions_ouvertes 
         INNER JOIN schools ON promotions_ouvertes.school_id = schools.id
         INNER JOIN years ON promotions_ouvertes.year_id = years.id
         WHERE years.in_progress = 1 AND classe_id = 28 AND schools.department_id = ${school_department?.department_id}  ;`
      );
      return schools;
    } 
    else{
    return []; 
    } 
    
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un problème est survenue.",
    });
  }
});
