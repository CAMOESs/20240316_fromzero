import { d as definePrivateEventHandler } from './.get.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _get = definePrivateEventHandler(
  async (event, user) => {
    return { name: "hello" };
  },
  { auth: false }
);

export { _get as default };
//# sourceMappingURL=.get5.mjs.map
