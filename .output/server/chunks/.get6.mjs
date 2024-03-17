import { d as definePrivateEventHandler } from './.get.mjs';
import { PrismaClient } from '@prisma/client';
import fs__default from 'fs';
import 'node:http';
import 'node:https';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

new PrismaClient();
const _get = definePrivateEventHandler(
  async (event) => {
    let jsonData = "";
    jsonData = fs__default.readFileSync("server/json/maintenance.json", "utf8");
    const data = JSON.parse(jsonData);
    return data;
  },
  {
    auth: false
  }
);

export { _get as default };
//# sourceMappingURL=.get6.mjs.map
