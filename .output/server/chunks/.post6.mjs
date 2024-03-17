import { d as definePrivateEventHandler, r as readBody } from './.get.mjs';
import { PrismaClient } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const prisma = new PrismaClient();
const salt = process.env.SALT ? parseInt(process.env.SALT) : 10;
const _post = definePrivateEventHandler(async (event) => {
  let body = await readBody(event);
  console.log("body: ", body);
  if (body && body.id) {
    if (body.password && body.password === body.confirm_password) {
      const users = await prisma.$queryRaw`SELECT email, username, users.password, can_auth FROM users  where id=${parseInt(
        body.id
      )}`;
      if (!users || users.length === 0)
        return { message: "Compte inexistant" };
      if (users[0].can_auth == false)
        return {
          message: "Votre compte est actuellement d\xE9sactiv\xE9, veuillez vous rapprocher de l'administrateur pour d\xE9bloquer votre compte."
        };
      if (await compare(body.password, users[0].password)) {
        return {
          message: `Pour des raisons de s\xE9curit\xE9, veuillez noter que votre nouveau mot de passe
            doit diff\xE9rer du mot de passe initial que vous aviez.
            Nous vous prions de bien vouloir r\xE9essayer en choisissant un mot de passe distinct`
        };
      } else {
        await prisma.$executeRawUnsafe(
          `UPDATE users SET users.password=?,users.is_change_password=true WHERE id=?`,
          await hash(body.password, salt),
          parseInt(body.id)
        );
      }
    }
  }
  return { status: 200 };
});

export { _post as default };
//# sourceMappingURL=.post6.mjs.map
