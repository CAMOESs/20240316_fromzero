import { d as definePrivateEventHandler, r as readBody, p as prisma, c as createError } from './.get.mjs';
import { hash } from 'bcrypt';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';

const salt = process.env.SALT ? parseInt(process.env.SALT) : 10;
const _post = definePrivateEventHandler(async (event, user) => {
  let body = await readBody(event);
  console.log("nous sommes dans reset");
  console.log(body);
  try {
    if (body.password && body.password === body.confirm_password) {
      let users_people_id = (await prisma.$queryRaw`SELECT people_id FROM users WHERE users.id=${body.id}`)[0];
      if (users_people_id && users_people_id.people_id) {
        await prisma.$executeRaw`UPDATE users INNER JOIN peoples on users.people_id=peoples.id SET users.email = ${body.email},
        users.password=${await hash(body.password, salt)}, 
        peoples.firstname = ${body.firstname}, peoples.lastname = ${body.lastname}, peoples.phone_number = ${body.phone_number},
        peoples.nationality = ${body.nationality}, peoples.sex = ${body.sex}, peoples.user_id =${body.id},
        peoples.date_of_birth = ${new Date(body.date_of_birth)}, peoples.place_of_birth = ${body.place_of_birth}
        WHERE users.id=${body.id}`;
      } else {
        await prisma.people.create({
          data: {
            firstname: body.firstname,
            lastname: body.lastname,
            phone_number: body.phone_number,
            nationality: body.nationality,
            sex: body.sex,
            date_of_birth: new Date(body.date_of_birth),
            place_of_birth: body.place_of_birth,
            User: {
              connect: {
                id: body.id
              }
            }
          }
        });
        await prisma.$queryRaw`UPDATE users SET users.email = ${body.email}, users.password===${await hash(body.password, salt)}
         WHERE users.id = ${body.id}`;
      }
    } else if (body.password && body.password !== body.confirm_password) {
      throw createError({
        statusCode: 401,
        message: "Le mot de passe et la confirmation du mot de passe ne correspondent pas."
      });
    } else {
      console.log("update else");
      let users_people_id = (await prisma.$queryRaw`SELECT people_id FROM users WHERE users.id=${body.id}`)[0];
      if (users_people_id && users_people_id.people_id) {
        await prisma.$executeRaw`UPDATE users INNER JOIN peoples on users.people_id=peoples.id SET users.email = ${body.email},
        peoples.firstname = ${body.firstname}, peoples.lastname = ${body.lastname}, peoples.phone_number = ${body.phone_number},
        peoples.nationality = ${body.nationality}, peoples.sex = ${body.sex}, peoples.user_id =${body.id},
        peoples.date_of_birth = ${new Date(body.date_of_birth)}, peoples.place_of_birth = ${body.place_of_birth} 
        WHERE users.id=${body.id}`;
      } else {
        await prisma.people.create({
          data: {
            firstname: body.firstname,
            lastname: body.lastname,
            phone_number: body.phone_number,
            nationality: body.nationality,
            sex: body.sex,
            date_of_birth: new Date(body.date_of_birth),
            place_of_birth: body.place_of_birth,
            User: {
              connect: {
                id: body.id
              }
            }
          }
        });
        await prisma.$queryRaw`UPDATE users SET users.email = ${body.email} WHERE users.id = ${body.id}`;
      }
    }
    return [];
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
});

export { _post as default };
//# sourceMappingURL=.post7.mjs.map
