import { d as definePrivateEventHandler, g as getQuery, p as prisma } from './.get.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const _get = definePrivateEventHandler(async (event, user) => {
  console.log("Nous somme dans my-account get");
  let query = getQuery(event);
  console.log(query);
  let user_username = user == null ? void 0 : user.username;
  let data = await prisma.$queryRaw`SELECT users.email, peoples.firstname, peoples.lastname, peoples.place_of_birth, peoples.nationality,
    peoples.sex, peoples.phone_number, STR_TO_DATE(peoples.date_of_birth, "%Y-%m-%d") as date_of_birth FROM users INNER JOIN peoples ON peoples.id=users.people_id
    WHERE users.username=${user_username}`;
  console.log(data);
  return data;
});

export { _get as default };
//# sourceMappingURL=.get9.mjs.map
