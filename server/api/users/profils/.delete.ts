import { definePrivateEventHandler } from "../../..";
import { PrismaClient,Prisma } from "@prisma/client";
const prisma = new PrismaClient({
  log: ['query']
});

export default definePrivateEventHandler(async event => {
  const body = await readBody(event);
  console.log(body);
  // console.log("body: ", body);
  try {
    console.log(await prisma.$executeRaw`DELETE FROM roles WHERE id IN (${Prisma.join(body)})`);
  } catch (error) {
    console.error(error);
  }
  return ("Deleted successfully ✅") ;
},{auth:true, can:["Supprimer les profils"]} )