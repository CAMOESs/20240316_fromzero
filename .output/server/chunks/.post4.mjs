import { d as definePrivateEventHandler, r as readBody } from './.get.mjs';
import fs__default from 'fs';
import 'node:http';
import 'node:https';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _post = definePrivateEventHandler(async (event) => {
  const body = await readBody(event);
  let data = null;
  try {
    fs__default.writeFileSync("server/json/maintenance.json", JSON.stringify(body));
    data = JSON.stringify(body);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export { _post as default };
//# sourceMappingURL=.post4.mjs.map
