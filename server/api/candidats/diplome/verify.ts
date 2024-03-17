/** @format */

import { definePrivateEventHandler } from "../../..";
import prisma from "../../../../prisma/my_prisma";
import jwt from "jsonwebtoken";
import fs from "fs";

/* SELECT 
 candidats.id,
 candidats.lastname AS l,
 candidats.firstname AS f,
 candidats.sex AS s,
 candidats.date_of_birth AS d,
 candidats.place_of_birth AS p,
 candidats.session_id AS session_id,
 candidats.branch AS bran,
 candidats.centre AS cen,
 candidats.corps AS corps,
 candidats.corps AS corps,
 candidats.corps AS corps,
 candidats.metier AS met
  


FROM `candidats` WHERE 1 */
export default definePrivateEventHandler(
  async (event, user) => {
    // console.log(event.context.params);
    //   event.context.params?.id
    let query = getQuery(event);

    if (!query.ref)
      return { error: "Données manqauntes", message: `${query.ref} value` };
    if (!process.env.DIPLOME_KEY) {
      return { error: "KEY_NOT_FOUND" };
    }
    let query_encode: unknown;
    try {
      query_encode = jwt.verify(String(query.ref), process.env.DIPLOME_KEY);
      if (!query_encode) return { error: "Reference non valide" };
    } catch (error) {
      console.log(error);
      return { error: "Reference non valide" };
    }

    try {
      // Existance du fichier
      // @ts-ignore
      let filePath = `server/json/diplomes/${query_encode.year}/${query_encode.month}/index.json`;
      if (!fs.existsSync(filePath)) {
        return { error: "Données non disponible", message: "inexistant" };
      }
      let diplomes = ReadJson(filePath);

      let data = diplomes.candidats.find(
        // @ts-ignore
        (diplome: any) => diplome.id == query_encode.id
      );
      /* let data = await prisma.candidat.findUnique({
        where: {
          // @ts-ignore
          id: Number(query_encode?.id),
        },
        include: {
          Session: {
            select: {
              id: true,
              date_of_pv: true,
              month: true,
              year: true,
            },
          },
        },
      }); */
      return {
        id: data.id,
        lastname: data.l,
        firstname: data.f,
        sex: data.s,
        date_of_birth: data.d,
        place_of_birth: data.p,
        branch: data.bran,
        cen: data.cen,
        corps: data.corps,
        metier: data.met,
        Session: diplomes.session,
      };
    } catch (error) {
      console.log(error);
      return { error: "Une erreur s'est produite" };
    }
  },
  { auth: false }
);
