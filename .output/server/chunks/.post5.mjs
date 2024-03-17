import { d as definePrivateEventHandler, r as readBody, c as createError } from './.get.mjs';
import { PrismaClient, Prisma } from '@prisma/client';
import { hash } from 'bcrypt';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const prisma = new PrismaClient({
  log: ["query"]
});
const salt = process.env.SALT ? parseInt(process.env.SALT) : 10;
const _post = definePrivateEventHandler(
  async (event) => {
    var _a;
    const body = await readBody(event);
    let data = null;
    if (!!body.email && !/.@./.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email erron\xE9 ou non renseign\xE9"
      });
    }
    if (!body.lastname) {
      throw createError({
        statusCode: 400,
        statusMessage: "Nom obligatoire"
      });
    }
    if (!body.firstname) {
      throw createError({
        statusCode: 400,
        statusMessage: "Nom obligatoire"
      });
    }
    if (!(body.sex === "M" || body.sex === "F")) {
      throw createError({
        statusCode: 400,
        statusMessage: "Sexe erron\xE9"
      });
    }
    if (!body.date_of_birth) {
      throw createError({
        statusCode: 400,
        statusMessage: "La date de naissance est obligatoire"
      });
    }
    if (!body.place_of_birth) {
      throw createError({
        statusCode: 400,
        statusMessage: "Le lieu de naissance est obligatoire"
      });
    }
    if (!body.nationality) {
      throw createError({
        statusCode: 400,
        statusMessage: "La nationalit\xE9 est obligatoire"
      });
    }
    if (!body.phone_number) {
      throw createError({
        statusCode: 400,
        statusMessage: "Le num\xE9ro de t\xE9l\xE9phone est obligatoire"
      });
    }
    if (!(Array.isArray(body.Roles) && body.Roles.length > 0)) {
      throw createError({
        statusCode: 400,
        statusMessage: "Le choix de profil est obligatoire"
      });
    }
    try {
      if (body.id) {
        const user_to_do_update = await prisma.$queryRaw`SELECT users.username, people_id FROM users WHERE id=${body.id}`;
        const user_to_do_update_ = user_to_do_update[0];
        if (Array.isArray(user_to_do_update) && user_to_do_update.length > 0) {
          if (!!body.password && body.password === body.confirm_password) {
            await prisma.$executeRaw`UPDATE users, peoples SET email=${body.email},
                    password=${await hash(body.password, salt)},
                    peoples.firstname=${body.firstname} ,
                    peoples.lastname=${body.lastname} ,
                    peoples.phone_number=${body.phone_number} ,
                    peoples.nationality=${body.nationality} ,
                    peoples.place_of_birth=${body.place_of_birth} ,
                    peoples.date_of_birth=${new Date(body.date_of_birth)} ,
                    peoples.sex=${body.sex} 
                    WHERE users.id=${parseInt(body.id)} and peoples.id=${user_to_do_update_.people_id}`;
            await prisma.$executeRaw`DELETE FROM role_user WHERE username=${user_to_do_update_.username}`;
            const tab_insert_role_user = new Array(body.Roles.length);
            const length_body_Roles = body.Roles.length;
            for (let i = 0; i < length_body_Roles; ++i) {
              tab_insert_role_user[i] = Prisma.sql`(${Prisma.join([
                user_to_do_update_.username,
                body.Roles[i]
              ])})`;
            }
            await prisma.$executeRaw`INSERT INTO role_user (username, slug)  
                VALUES ${Prisma.join(tab_insert_role_user)}`;
          } else if (!!body.password && body.password !== body.confirm_password) {
            throw createError({
              statusCode: 400,
              statusMessage: '"Mot de passe" et "Confirmation de mot de passe" ne sont pas conforme'
            });
          } else {
            await prisma.$executeRaw`UPDATE users, peoples SET email=${body.email},
                    peoples.firstname=${body.firstname} ,
                    peoples.lastname=${body.lastname} ,
                    peoples.phone_number=${body.phone_number} ,
                    peoples.nationality=${body.nationality} ,
                    peoples.place_of_birth=${body.place_of_birth} ,
                    peoples.date_of_birth=${new Date(body.date_of_birth)} ,
                    peoples.sex=${body.sex} 
                    WHERE users.id=${parseInt(body.id)} and peoples.id=${user_to_do_update_.people_id}`;
            await prisma.$executeRaw`DELETE FROM role_user WHERE username=${user_to_do_update_.username}`;
            const tab_insert_role_user = new Array(body.Roles.length);
            const length_body_Roles = body.Roles.length;
            for (let i = 0; i < length_body_Roles; ++i) {
              tab_insert_role_user[i] = Prisma.sql`(${Prisma.join([
                user_to_do_update_.username,
                body.Roles[i]
              ])})`;
            }
            await prisma.$executeRaw`INSERT INTO role_user (username, slug)  
                VALUES ${Prisma.join(tab_insert_role_user)}`;
          }
        } else {
          throw createError({
            statusCode: 400,
            statusMessage: "Les informations de l'utilisateur choisi ne sont pas correctes"
          });
        }
      } else {
        if (!!body.password && body.password === body.confirm_password) {
          data = await prisma.people.create({
            data: {
              firstname: body.firstname,
              lastname: body.lastname,
              phone_number: body.phone_number,
              nationality: body.nationality,
              place_of_birth: body.place_of_birth,
              date_of_birth: new Date(body.date_of_birth),
              sex: body.sex
            }
          });
          let user = await prisma.user.create({
            data: {
              username: body.email,
              email: body.email,
              password: await hash(body.password, salt),
              can_auth: true,
              people_id: data.id
            }
          });
          await prisma.$executeRaw`DELETE FROM role_user WHERE username=${body.email}`;
          const tab_insert_role_user = new Array(body.Roles.length);
          console.log(body.Roles);
          const length_body_Roles = body.Roles.length;
          for (let i = 0; i < length_body_Roles; ++i) {
            tab_insert_role_user[i] = Prisma.sql`(${Prisma.join([
              body.email,
              body.Roles[i]
            ])})`;
          }
          await prisma.$queryRaw`INSERT INTO role_user (username, slug)  
                VALUES ${Prisma.join(tab_insert_role_user)}`;
        } else {
          throw createError({
            statusCode: 403,
            statusMessage: '"Mot de passe" et "Confirmation de mot de passe" ne sont pas les m\xEAmes'
          });
        }
      }
    } catch (e) {
      if (parseInt((_a = e == null ? void 0 : e.meta) == null ? void 0 : _a.code) === 1062 || e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
        return { error: "Cet email est d\xE9j\xE0 utilis\xE9 pour un autre compte" };
      } else {
        return { error: "Une erreur s'est produit" };
      }
    }
    return [];
  },
  { auth: true, can: ["Enregistrer un utilisateur"] }
);

export { _post as default };
//# sourceMappingURL=.post5.mjs.map
