import { d as definePrivateEventHandler, r as readBody } from './.get.mjs';
import { PrismaClient, Prisma } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const prisma = new PrismaClient({
  log: ["query"]
});
const _delete = definePrivateEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  try {
    console.log(await prisma.$executeRaw`DELETE FROM roles WHERE id IN (${Prisma.join(body)})`);
  } catch (error) {
    console.error(error);
  }
  return "Deleted successfully \u2705";
}, { auth: true, can: ["Supprimer les profils"] });

export { _delete as default };
//# sourceMappingURL=.delete3.mjs.map
