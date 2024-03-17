/** @format */

import { definePrivateEventHandler } from "../../..";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import CONST_VAR from '~/server/utils/variable' 

export default definePrivateEventHandler(async (event, user) => {
  // console.log("api roles");
  let data;
  try {
    let tab_role_name = await prisma.$queryRaw<
      any[]
    >`SELECT roles.name, role_user.slug  FROM roles 
      INNER JOIN role_user ON roles.slug = role_user.slug 
      WHERE role_user.username = ${user.username}`;
    let roles;
    if (tab_role_name.findIndex((v) => v.slug == CONST_VAR.SLUG_PRIVILEGED_ROLE) != -1) {
      // console.log("je suis dans  profil")
      roles = (
        await prisma.role.findMany({
          include: {
            Permissions: {
              include: {
                Permission: true,
              },
            },
            ParentRoles: {
              include: {
                Role: true,
              },
            },
          },
        })
      ).map((role) => {
        return {
          ...role,
          Permissions: role.Permissions.map(
            (permission) => permission.Permission
          ),
          Roles: role.ParentRoles.map((rol) => rol.Role),
        };
      });
    } else {
      // console.log("je suis dans  profil")
      let tab_obj_child = await prisma.$queryRaw<
        any[]
      >`SELECT roles.id, child_role.id child_role_id FROM roles 
      INNER JOIN role_user ON roles.slug = role_user.slug 
      
      INNER JOIN role_role ON role_role.parent_role_id = roles.id 
      INNER JOIN roles AS child_role ON role_role.role_id = child_role.id
      WHERE role_user.username= ${user.username}`;

      let tab_child = new Array(tab_obj_child.length);
      for (let i = 0, l = tab_obj_child.length; i < l; i++) {
        tab_child[i] = tab_obj_child[i].child_role_id;
      }
      roles = (
        await prisma.role.findMany({
          include: {
            Permissions: {
              include: {
                Permission: true,
              },
            },
            ParentRoles: {
              include: {
                Role: true,
              },
            },
          },
          where: {
            NOT: {
              slug: CONST_VAR.SLUG_PRIVILEGED_ROLE,
            },
            id: {
              in: tab_child,
            },
          },
        })
      ).map((role) => {
        return {
          ...role,
          Permissions: role.Permissions.map(
            (permission) => permission.Permission
          ),
          Roles: role.ParentRoles.map((rol) => rol.Role),
        };
      });
    }

    return JSON.parse(JSON.stringify(roles));
  } catch (error) {
    console.error(error);
    return { error: "Une erreur s'est produite." };
  }
  // return data;
});
