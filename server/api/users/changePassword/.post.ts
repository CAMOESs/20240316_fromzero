/** @format */

import { definePrivateEventHandler } from "../../..";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();
import { hash, compare } from "bcrypt";
const salt = process.env.SALT ? parseInt(process.env.SALT) : 10;

export default definePrivateEventHandler(async (event) => {
  let body = await readBody(event);
  try {
    if (!(body && body.id))
      return {
        error: "Informations manquantes veuillez réessayer plus tard",
        // code: 100,
      };
    if (!(body.password && body.password === body.confirm_password))
      return {
        error:
          "Les mots de passe ne correspondent pas. Veuillez vérifier votre saisie.",
      };
    // Verifier s'il le mot de passe correspond a l'ancien

    /* const users = await prisma.$queryRaw<
    User[]
  >`SELECT email, username, users.password, can_auth FROM users  where id=${parseInt(
    body.id
  )}`; */
    const user = await prisma.user.findUnique({
      select: {
        email: true,
        username: true,
        password: true,
        can_auth: true,
      },
      where: {
        id: parseInt(body.id),
      },
    });

    if (!user)
      return {
        error:
          "Compte inexistant. Veuillez vérifier les informations saisies et réessayer.",
      };
    if (user.can_auth == false)
      return {
        error:
          "Votre compte est actuellement désactivé, veuillez vous rapprocher de l'administrateur pour débloquer votre compte.",
      };

    if (await compare(body.password, user.password)) {
      // Mot de passe = ancien mot de passe
      return {
        message: `Pour des raisons de sécurité, veuillez noter que votre nouveau mot de passe
            doit différer du mot de passe initial que vous aviez.
            Nous vous prions de bien vouloir réessayer en choisissant un mot de passe distinct`,
      };
    } else {
      // Modification du mot de passe

      /* await prisma.$executeRawUnsafe(
      `UPDATE users SET users.password=?,users.is_change_password=true WHERE id=?`,
      await hash(body.password, salt),
      parseInt(body.id)
    ); */
      await prisma.user.update({
        data: {
          is_change_password: true,
          password: await hash(body.password, salt),
        },

        where: {
          id: parseInt(body.id),
        },
      });
    }

    return { status: 200 };
  } catch (error) {
    console.log(error);
    return { error: undefined };
  }
});
