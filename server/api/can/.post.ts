import { definePrivateEventHandler } from "../..";
import { Prisma } from "@prisma/client";
import prisma from "../../../prisma/my_prisma";


export default definePrivateEventHandler(async (event, user) => {
  const body = await readBody(event);

  let user_permissions = await prisma.$queryRaw`
    SELECT permissions.name 
    FROM users
        INNER JOIN role_user ON role_user.username = users.username
        INNER JOIN roles ON roles.slug = role_user.slug
        INNER JOIN permission_role ON permission_role.role_slug  = role_user.slug
        INNER JOIN permissions ON permissions.slug = permission_role.permission_slug
    WHERE 
        users.username = ${user.username} AND 
        permissions.name IN (${Prisma.join(body)})`;

  if (!Array.isArray(user_permissions)) return [];

  let user_permission_name = new Array(user_permissions.length);
  let response: Boolean[] = new Array(body);
  for (let index = 0; index < user_permissions.length; index++) {
    user_permission_name[index] = user_permissions[index].name;
  }

  for (let index = 0; index < body.length; index++) {
    response[index] = user_permission_name.includes(body[index]);
  }
  return response;
});
