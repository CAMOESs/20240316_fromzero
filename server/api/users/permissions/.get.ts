import { definePrivateEventHandler } from "../../..";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default definePrivateEventHandler(
  async (event, user) => {
    //console.log("api roles");
    let data;
    
    try {
      // data = await prisma.$queryRawUnsafe(
      //   `SELECT id,name,slug,description
      //   FROM permissions`
      // );
    } catch (error) {
      console.error(error);
    }
    //debuger
    //console.log("roles: ", data )
    return ( 
      await prisma.permission.findMany({
      }));
  },
);
