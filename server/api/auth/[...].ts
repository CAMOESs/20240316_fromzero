/** @format */

// file: ~/server/api/o/auth/[...].ts
import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";
import { existsSync } from "fs";
import bcrypt from "bcrypt";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient({
  // log: ['query']
});
let profil_image_dir = "users/profil/";

export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  // secret: process.env.AUTH_SECRET,

  secret:
    "tb9cGAReAAC6H9WXSJ5UKdCDNmjxZV9q6sJry76omhFdJ3S4muICbxsynXZ9lhFy7frDyEmwLrLJNyJcflyD8rxhDyLrGRjtrzDpOh4ynWaYNLURZ4Y4JAFIGi4K54WH",
  session: {
    maxAge: 2 * 60 * 60, //2 hours
    updateAge: 15 * 60, // 15 minutes
  },
  providers: [
    // @ts-expect-error You need to use .default here for it t²o work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      async authorize(credentials: any) {
        //console.log("credentials: ", credentials);
        // console.log("credentials");
        // console.log(credentials);
        // where username=${credentials?.username} OR email=${credentials?.username}
        try {
          const users = await prisma.$queryRaw<
            User[]
          >`SELECT email, username, users.password, can_auth FROM users 
        where username=${credentials?.username} OR email=${credentials?.username}
        `;
        console.log("Recherche par username" )
        // console.log(users[0] )

          if (!users || users.length === 0)
            throw new Error("Compte inexistant");
          if (users[0].can_auth == false)
            throw new Error(
              "Votre compte est actuellement désactivé, veuillez vous rapprocher de l'administrateur pour débloquer votre compte."
            );
            // console.log("Comparaison mot de passe");
            
          if (await bcrypt.compare(credentials?.password, users[0].password)) {
            // console.log("Succès !")
            await prisma.$executeRaw`UPDATE users SET login_at=now() WHERE username=${users[0].username}`;
            return {
              name: users[0].username ? users[0].username : "",
              email: users[0].email ? users[0].email : "",
            };
          } else {
            console.log("Echec !");
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async session({ session, token }) {
      // console.log("session1: ", session);
      //console.log("token");
      //console.log(token)
      if (token?.name) {
        session.user = (
          await prisma.$queryRaw<User[]>`SELECT 
            users.id, 
            users.username, 
            email, 
            is_change_password, 
            GROUP_CONCAT(roles.name SEPARATOR '#')  AS roles 
          FROM users 
            INNER JOIN role_user ON role_user.username = users.username
            INNER JOIN roles ON roles.slug = role_user.slug
          WHERE 
          users.username=${token.name}
          GROUP BY roles.id
          `
        )[0];
      }
      return session;
    },
  },
});
