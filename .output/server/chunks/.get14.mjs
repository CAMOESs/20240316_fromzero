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

const DEFAULT_ERROR_MESSAGE = ` Nous n'avons pas pu effectuer l'op\xE9ration demand\xE9e. Veuillez actualiser la page et r\xE9essayer. `;
const EXAM_CLASS_ID = [28, 39];
const SLUG_PRIVILEGED_ROLE = "administrateur";
const STATUS_REQUEST_AUTHORIZATION = {
  REJETE: "REJETE",
  ACCEPTE: "ACCEPTE",
  SOUS_RESERVE: "SOUS_RESERVE"
};
const CONST_VAR = {
  DEFAULT_ERROR_MESSAGE,
  EXAM_CLASS_ID,
  STATUS_REQUEST_AUTHORIZATION,
  SLUG_PRIVILEGED_ROLE
};

const prisma = new PrismaClient();
const _get = definePrivateEventHandler(async (event, user) => {
  try {
    let tab_role_name = await prisma.$queryRaw`SELECT roles.name, role_user.slug  FROM roles 
      INNER JOIN role_user ON roles.slug = role_user.slug 
      WHERE role_user.username = ${user.username}`;
    let roles;
    if (tab_role_name.findIndex((v) => v.slug == CONST_VAR.SLUG_PRIVILEGED_ROLE) != -1) {
      roles = (await prisma.role.findMany({
        include: {
          Permissions: {
            include: {
              Permission: true
            }
          },
          ParentRoles: {
            include: {
              Role: true
            }
          }
        }
      })).map((role) => {
        return {
          ...role,
          Permissions: role.Permissions.map(
            (permission) => permission.Permission
          ),
          Roles: role.ParentRoles.map((rol) => rol.Role)
        };
      });
    } else {
      let tab_obj_child = await prisma.$queryRaw`SELECT roles.id, child_role.id child_role_id FROM roles 
      INNER JOIN role_user ON roles.slug = role_user.slug 
      
      INNER JOIN role_role ON role_role.parent_role_id = roles.id 
      INNER JOIN roles AS child_role ON role_role.role_id = child_role.id
      WHERE role_user.username= ${user.username}`;
      let tab_child = new Array(tab_obj_child.length);
      for (let i = 0, l = tab_obj_child.length; i < l; i++) {
        tab_child[i] = tab_obj_child[i].child_role_id;
      }
      roles = (await prisma.role.findMany({
        include: {
          Permissions: {
            include: {
              Permission: true
            }
          },
          ParentRoles: {
            include: {
              Role: true
            }
          }
        },
        where: {
          NOT: {
            slug: CONST_VAR.SLUG_PRIVILEGED_ROLE
          },
          id: {
            in: tab_child
          }
        }
      })).map((role) => {
        return {
          ...role,
          Permissions: role.Permissions.map(
            (permission) => permission.Permission
          ),
          Roles: role.ParentRoles.map((rol) => rol.Role)
        };
      });
    }
    return JSON.parse(JSON.stringify(roles));
  } catch (error) {
    console.error(error);
    return { error: "Une erreur s'est produite." };
  }
});

export { _get as default };
//# sourceMappingURL=.get14.mjs.map
