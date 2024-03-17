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
const _id_ = definePrivateEventHandler(
  async (event, user) => {
    let data;
    let id = parseInt(event.context.params.id);
    try {
      data = await prisma.$queryRawUnsafe(
        `SELECT ro.id,ro.name,ro.description,GROUP_CONCAT(DISTINCT ro_ro.role_id SEPARATOR" ") as Roles,GROUP_CONCAT(DISTINCT pe_ro.permission_slug SEPARATOR"'") as Permissions 
        FROM roles ro 
        LEFT JOIN role_role ro_ro ON ro.id=ro_ro.parent_role_id 
        LEFT JOIN permission_role pe_ro ON ro.slug=pe_ro.role_slug 
        WHERE ro.id=?`,
        id
      );
      data[0].Roles ? data[0].Roles = data[0].Roles.split(" ").map((i) => Number(i)) : "";
      data[0].Permissions ? data[0].Permissions = data[0].Permissions.split("'") : "";
      console.log("data: ", data[0]);
      return data[0];
    } catch (error) {
      console.error(error);
    }
  }
);

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
