/** @format */

import { definePrivateEventHandler } from "../..";
import { PrismaClient, Prisma, User } from "@prisma/client";
const prisma = new PrismaClient({
  log: ["query"],
});
import slugify from "slugify";
import { hash } from "bcrypt";

const salt = process.env.SALT ? parseInt(process.env.SALT) : 10;

export default definePrivateEventHandler(
  async (event) => {
    const body = await readBody(event);
    let data = null,
      user = null;
    if (!!body.email && !/.@./.test(body.email)) {
      return { error: "Email erroné ou non renseigné" };
    }
    if (!body.lastname) {
      return { error: "Nom obligatoire" };
    }
    if (!body.firstname) {
      return { error: "Le champ prénom est obligatoire" };
    }
    if (!(body.sex === "M" || body.sex === "F")) {
      return {
        error:
          "Le champ 'Sexe' doit être renseigné avec la valeur 'M' pour masculin ou 'F' pour féminin.",
      };
    }
    if (!body.date_of_birth) {
      return { error: "La date de naissance est obligatoire" };
    }
    if (!body.place_of_birth) {
      return { error: "Le lieu de naissance est obligatoire" };
    }
    if (!body.nationality) {
      return { error: "La nationalité est obligatoire" };
    }
    if (!body.phone_number) {
      return { error: "Le numéro de téléphone est obligatoire" };
    }
    if (!(Array.isArray(body.Roles) && body.Roles.length > 0)) {
      return { error: "Le choix de profil est obligatoire" };
    }
    try {
      if (body.id) {
        const user_to_do_update = await prisma.$queryRaw<
          User[]
        >`SELECT users.username, people_id FROM users WHERE id=${body.id}`;
        const user_to_do_update_ = user_to_do_update[0];
        if (Array.isArray(user_to_do_update) && user_to_do_update.length > 0) {
          if (!!body.password && body.password === body.confirm_password) {
            await prisma.$executeRaw`UPDATE users, peoples SET email=${
              body.email
            },
                    password=${await hash(body.password, salt)},
                    peoples.firstname=${body.firstname} ,
                    peoples.lastname=${body.lastname} ,
                    peoples.phone_number=${body.phone_number} ,
                    peoples.nationality=${body.nationality} ,
                    peoples.place_of_birth=${body.place_of_birth} ,
                    peoples.date_of_birth=${new Date(body.date_of_birth)} ,
                    peoples.sex=${body.sex} 
                    WHERE users.id=${parseInt(body.id)} and peoples.id=${
              user_to_do_update_.people_id
            }`;

            await prisma.$executeRaw`DELETE FROM role_user WHERE username=${user_to_do_update_.username}`;
            const tab_insert_role_user = new Array(body.Roles.length);
            const length_body_Roles = body.Roles.length;
            for (let i = 0; i < length_body_Roles; ++i) {
              tab_insert_role_user[i] = Prisma.sql`(${Prisma.join([
                user_to_do_update_.username,
                body.Roles[i],
              ])})`;
            }
            await prisma.$executeRaw`INSERT INTO role_user (username, slug)  
                VALUES ${Prisma.join(tab_insert_role_user)}`;
          } else if (
            !!body.password &&
            body.password !== body.confirm_password
          ) {
            return {
              error:
                '"Mot de passe" et "Confirmation de mot de passe" ne sont pas conforme',
            };
          } else {
            await prisma.$executeRaw`UPDATE users, peoples SET email=${
              body.email
            },
                    peoples.firstname=${body.firstname} ,
                    peoples.lastname=${body.lastname} ,
                    peoples.phone_number=${body.phone_number} ,
                    peoples.nationality=${body.nationality} ,
                    peoples.place_of_birth=${body.place_of_birth} ,
                    peoples.date_of_birth=${new Date(body.date_of_birth)} ,
                    peoples.sex=${body.sex} 
                    WHERE users.id=${parseInt(body.id)} and peoples.id=${
              user_to_do_update_.people_id
            }`;

            await prisma.$executeRaw`DELETE FROM role_user WHERE username=${user_to_do_update_.username}`;
            const tab_insert_role_user = new Array(body.Roles.length);
            const length_body_Roles = body.Roles.length;

            for (let i = 0; i < length_body_Roles; ++i) {
              tab_insert_role_user[i] = Prisma.sql`(${Prisma.join([
                user_to_do_update_.username,
                body.Roles[i],
              ])})`;
            }
            await prisma.$executeRaw`INSERT INTO role_user (username, slug)  
                VALUES ${Prisma.join(tab_insert_role_user)}`;
          }
        } else {
          return {
            error:
              "Les informations de l'utilisateur choisi ne sont pas correctes",
          };
        }
      } else {
        if (!(body.password && body.password === body.confirm_password)) {
          return {
            error:
              '"Mot de passe" et "Confirmation de mot de passe" ne sont pas les mêmes',
          };
        }

        data = await prisma.people.create({
          data: {
            firstname: body.firstname,
            lastname: body.lastname,
            phone_number: body.phone_number,
            nationality: body.nationality,
            place_of_birth: body.place_of_birth,
            date_of_birth: new Date(body.date_of_birth),
            sex: body.sex,
          },
        });
        /*await prisma.$executeRaw
                    `INSERT INTO users (username, email, password, can_auth, people_id) 
                    VALUES (${body.email},${body.email},${await hash(body.password, salt)},1,${data.id})`*/

        user = await prisma.user.create({
          data: {
            username: body.email,
            email: body.email,
            password: await hash(body.password, salt),
            can_auth: true,
            people_id: data.id,
          },
        });

        await prisma.$executeRaw`DELETE FROM role_user WHERE username=${body.email}`;
        const tab_insert_role_user = new Array(body.Roles.length);
        console.log(body.Roles);
        const length_body_Roles = body.Roles.length;
        for (let i = 0; i < length_body_Roles; ++i) {
          tab_insert_role_user[i] = Prisma.sql`(${Prisma.join([
            body.email,
            body.Roles[i],
          ])})`;
        }
        await prisma.$queryRaw`INSERT INTO role_user (username, slug)  
                VALUES ${Prisma.join(tab_insert_role_user)}`;
      }
    } catch (e) {
      console.log(e);

      if (
        parseInt(e?.meta?.code) === 1062 ||
        (e instanceof Prisma.PrismaClientKnownRequestError &&
          e.code === "P2002")
      ) {
        // The .code property can be accessed in a type-safe manner
        //console.log("this is error meta ", e?.meta)
        return { error: "Cet email est déjà utilisé pour un autre compte" };
      }
      //@ts-ignore
      else {
        return { error: "Une erreur s'est produite." };
      }
    }

    let role_to_one_user = "";
    let response;

    try {
      response = await prisma.user.findUnique({
        where: {
          id: body.id ? body.id : user?.id,
        },
        include: {
          Roles: {
            include: {
              Role: true,
            },
          },
          People: true,
        },
      });
    } catch (error) {
      console.log(error);
    }

    return {
      id: response?.id,
      updated_at: response?.updated_at,
      email: response?.email,
      login_at: response?.login_at,
      can_auth: response?.can_auth,
      lastname: response?.People?.lastname,
      firstname: response?.People?.firstname,
      sex: response?.People?.sex,
      place_of_birth: response?.People?.place_of_birth,
      date_of_birth: response?.People?.date_of_birth?.toLocaleDateString("af"),
      nationality: response?.People?.nationality,
      phone_number: response?.People?.phone_number,
      Roles: response?.Roles.map((u) => {
        role_to_one_user += u.Role.name + ",";
        return u.Role;
      }),
      role_to_one_user: role_to_one_user,
    };
  },
  { auth: true, can: ["Enregistrer un utilisateur"] }
);
