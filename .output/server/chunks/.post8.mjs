import { d as definePrivateEventHandler, r as readBody } from './.get.mjs';
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const prisma = new PrismaClient();
const _post = definePrivateEventHandler(async (event) => {
  const body = await readBody(event);
  let data = null;
  if (body.id) {
    await prisma.$executeRawUnsafe(
      `UPDATE roles SET name=?,slug=?,description=? WHERE id=?`,
      body.name,
      slugify(`${body.name}`, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g
      }),
      body.description,
      parseInt(body.id)
    );
  } else {
    await prisma.$executeRawUnsafe(
      `INSERT INTO roles(name,slug,description)
      VALUES(?, ?, ?)`,
      body.name,
      slugify(`${body.name}`, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g
      }),
      body.description
    );
  }
  data = await prisma.$queryRawUnsafe(
    `SELECT id,name,slug,description
    FROM roles
    WHERE slug=?`,
    slugify(`${body.name}`, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g
    })
  );
  await prisma.$executeRawUnsafe(
    `DELETE FROM role_role 
    WHERE parent_role_id=?`,
    //@ts-ignore
    data[0].id
  );
  if (body.Roles && body.Roles.length != 0) {
    for (let role of body.Roles) {
      if (role && role.id) {
        await prisma.$executeRawUnsafe(
          `INSERT INTO role_role(parent_role_id, role_id)
          VALUES(?, ?)`,
          //@ts-ignore
          data[0].id,
          role.id
        );
      } else {
        await prisma.$executeRawUnsafe(
          `INSERT INTO role_role(parent_role_id, role_id)
          VALUES(?, ?)`,
          //@ts-ignore
          data[0].id,
          role
        );
      }
    }
  }
  await prisma.$executeRawUnsafe(
    `DELETE FROM permission_role 
    WHERE role_slug=?`,
    //@ts-ignore
    data[0].slug
  );
  if (body.Permissions && body.Permissions.length != 0) {
    for (let permission of body.Permissions) {
      if (permission && permission.slug) {
        await prisma.$executeRawUnsafe(
          `INSERT INTO permission_role(role_slug, permission_slug)
          VALUES(?, ?)`,
          //@ts-ignore
          data[0].slug,
          permission.slug
        );
      } else {
        await prisma.$executeRawUnsafe(
          `INSERT INTO permission_role(role_slug, permission_slug)
          VALUES(?, ?)`,
          //@ts-ignore
          data[0].slug,
          permission
        );
      }
    }
  }
  return data[0];
}, { auth: true, can: ["Enregistrer un profil"] });

export { _post as default };
//# sourceMappingURL=.post8.mjs.map
