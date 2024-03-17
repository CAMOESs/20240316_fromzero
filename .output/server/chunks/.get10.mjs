import { d as definePrivateEventHandler } from './.get.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const prisma = new PrismaClient();
const _get = definePrivateEventHandler(
  async (event, user) => {
    return await prisma.permission.findMany({});
  }
);

export { _get as default };
//# sourceMappingURL=.get10.mjs.map
