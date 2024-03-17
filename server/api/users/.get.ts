/** @format */

import prisma from "~/prisma/my_prisma";
import { definePrivateEventHandler } from "../..";
import { PrismaClient, User, Prisma } from "@prisma/client";

const ITEM_PER_PAGE = 10;
async function get_role_of_current_user(username: string) {
  let data = await prisma.$queryRawUnsafe(
    `SELECT role_user.slug FROM users 
    INNER JOIN role_user ON role_user.username = users.username
    WHERE users.username LIKE  ? ;`,
    username
  );

  return Array.isArray(data) ? data.map((v) => v.slug) : [];
}
export default definePrivateEventHandler(
  async (event, user) => {
    let data;

    let { page, search_text } = getQuery(event);

    try {
      if (
        !(page && typeof page == "string") ||
        isNaN(parseInt(page)) ||
        parseInt(page) <= 0
      ) {
        return {
          error:
            "Le numéro de page est requise et doit être un nombre positif !",
        };
      }

      // Get user Roles

      page = parseInt(page);
      let tab_child;
      let current_user_role = await get_role_of_current_user(user.username);
      if (current_user_role.findIndex((v) => v == "administrateur") == -1) {
        let tab_obj_child = await prisma.$queryRaw<
          any[]
        >`SELECT roles.id, child_role.id child_role_id FROM roles 
        INNER JOIN role_user ON roles.slug = role_user.slug 
        INNER JOIN users ON users.username = role_user.username 
        INNER JOIN role_role ON role_role.parent_role_id = roles.id 
        INNER JOIN roles as child_role ON role_role.role_id = child_role.id
        WHERE users.id= ${user.id}`;

        tab_child = new Array(tab_obj_child.length);
        for (let i = 0, l = tab_obj_child.length; i < l; i++) {
          tab_child[i] = tab_obj_child[i].child_role_id;
        }
      } else {
        // Super administrator
        tab_child = await prisma.role.findMany({
          select: {
            id: true,
          },
        });
        tab_child = tab_child.map((v) => v.id);
      }

      if (!tab_child.length)
        return {
          error: "Vous n'avez pas le droit de voir la liste des utilisateurs",
        };
      if (search_text) {
        let length;
        let count = (
          await prisma.$queryRaw<
            User[]
          >`SELECT COUNT( distinct users.id) length FROM users
                LEFT JOIN peoples ON peoples.id=users.people_id 
                INNER JOIN role_user ON role_user.username=users.username
                INNER JOIN roles ON roles.slug=role_user.slug
                WHERE (peoples.lastname LIKE ${"%" + search_text + "%"} 
                OR peoples.firstname LIKE ${"%" + search_text + "%"}
                OR users.email LIKE ${"%" + search_text + "%"}
                OR roles.name LIKE ${"%" + search_text + "%"}
                OR (("actif" like ${
                  "%" + search_text + "%"
                }) AND users.can_auth=1)
                OR (("bloque" like ${
                  "%" + search_text + "%"
                }) AND users.can_auth=0)) 
                AND  roles.id in (${Prisma.join(tab_child)})`
        )[0];

        //@ts-ignore
        const count_length_number = Number(count.length);

        let tab_obj_id = await prisma.$queryRaw<
          User[]
        >`SELECT distinct users.id FROM users
                  LEFT JOIN peoples ON peoples.id=users.people_id 
                  INNER JOIN role_user ON role_user.username=users.username
                  INNER JOIN roles ON roles.slug=role_user.slug
                  WHERE (peoples.lastname LIKE ${"%" + search_text + "%"} 
                  OR peoples.firstname LIKE ${"%" + search_text + "%"}
                  OR users.email LIKE ${"%" + search_text + "%"}
                  OR roles.name LIKE ${"%" + search_text + "%"}
                  OR (("actif" like ${
                    "%" + search_text + "%"
                  }) AND users.can_auth=1)
                  OR (("bloque" like ${
                    "%" + search_text + "%"
                  }) AND users.can_auth=0))
                  AND  roles.id in (${Prisma.join(tab_child)})`;

        const length_tab = tab_obj_id.length;
        const tab_value = new Array(tab_obj_id.length);
        // console.log(tab_obj_id)
        for (let i = 0; i < length_tab; ++i) {
          tab_value[i] = tab_obj_id[i].id;
        }
        console.log(tab_value);
        //@ts-ignore
        length = Math.ceil(count_length_number / ITEM_PER_PAGE);

        if (length == 0) {
          return { data: [], length: 0 };
        }

        let debut =
          page <= length
            ? (page - 1) * ITEM_PER_PAGE
            : (length - 1) * ITEM_PER_PAGE;

        data = (
          await prisma.user.findMany({
            skip: debut,
            take: ITEM_PER_PAGE,
            where: {
              id: { in: tab_value },
            },
            include: {
              Roles: {
                include: {
                  Role: true,
                },
              },
              People: true,
            },
          })
        ).map((v) => {
          let role_to_one_user = "";
          return {
            id: v.id,
            updated_at: v.updated_at,
            email: v.email,
            login_at: v.login_at,
            can_auth: v.can_auth,
            lastname: v.People?.lastname,
            firstname: v.People?.firstname,
            sex: v.People?.sex,
            place_of_birth: v.People?.place_of_birth,
            date_of_birth: v.People?.date_of_birth?.toLocaleDateString("af"),
            nationality: v.People?.nationality,
            phone_number: v.People?.phone_number,
            Roles: v.Roles.map((u) => {
              role_to_one_user += u.Role.name + ",";
              return u.Role;
            }),
            role_to_one_user: role_to_one_user,
          };
        });
        return { data: JSON.parse(JSON.stringify(data)), length: length };
      } else {
        let length;
        let count = (
          await prisma.$queryRaw<
            User[]
          >`SELECT COUNT(users.id) length FROM users
                INNER JOIN role_user ON role_user.username=users.username
                INNER JOIN roles ON roles.slug=role_user.slug
                WHERE roles.id in (${Prisma.join(tab_child)})`
        )[0];

        let tab_obj_id = await prisma.$queryRaw<
          User[]
        >`SELECT distinct users.id FROM users
                  INNER JOIN role_user ON role_user.username=users.username
                  INNER JOIN roles ON roles.slug=role_user.slug
                  WHERE roles.id in (${Prisma.join(tab_child)})`;

        const length_tab = tab_obj_id.length;
        const tab_value = new Array(tab_obj_id.length);
        // console.log(tab_obj_id)
        for (let i = 0; i < length_tab; ++i) {
          tab_value[i] = tab_obj_id[i].id;
        }
        console.log("parseInt");
        //@ts-ignore
        const count_length_number = Number(count.length);
        console.log(count_length_number);
        //@ts-ignore
        length = Math.ceil(count_length_number / ITEM_PER_PAGE);

        if (length == 0) {
          return { data: [], length: length };
        }
        let debut =
          page <= length
            ? (page - 1) * ITEM_PER_PAGE
            : (length - 1) * ITEM_PER_PAGE;

        data = (
          await prisma.user.findMany({
            skip: debut,
            take: ITEM_PER_PAGE,
            where: {
              id: { in: tab_value },
            },
            include: {
              Roles: {
                include: {
                  Role: true,
                },
              },
              People: true,
            },
          })
        ).map((v) => {
          let role_to_one_user = "";
          return {
            id: v.id,
            updated_at: v.updated_at,
            email: v.email,
            login_at: v.login_at,
            can_auth: v.can_auth,
            lastname: v.People?.lastname,
            firstname: v.People?.firstname,
            sex: v.People?.sex,
            place_of_birth: v.People?.place_of_birth,
            date_of_birth: v.People?.date_of_birth?.toLocaleDateString("af"),
            nationality: v.People?.nationality,
            phone_number: v.People?.phone_number,
            Roles: v.Roles.map((u) => {
              role_to_one_user += u.Role.name + ",";
              return u.Role;
            }),
            role_to_one_user: role_to_one_user,
          };
        });
        return { data: JSON.parse(JSON.stringify(data)), length: length };
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  { auth: true, can: ["Voir les utilisateurs"] }
);
