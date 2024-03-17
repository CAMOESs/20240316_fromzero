import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { N as NuxtAuthHandler } from './.get.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const prisma = new PrismaClient({
  // log: ['query']
});
const _____ = NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  // secret: process.env.AUTH_SECRET,
  secret: "tb9cGAReAAC6H9WXSJ5UKdCDNmjxZV9q6sJry76omhFdJ3S4muICbxsynXZ9lhFy7frDyEmwLrLJNyJcflyD8rxhDyLrGRjtrzDpOh4ynWaYNLURZ4Y4JAFIGi4K54WH",
  session: {
    maxAge: 2 * 60 * 60,
    //2 hours
    updateAge: 15 * 60
    // 15 minutes
  },
  providers: [
    // @ts-expect-error You need to use .default here for it t²o work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      async authorize(credentials) {
        console.log("credentials");
        console.log(credentials);
        const users = await prisma.$queryRaw`SELECT email, username, users.password, can_auth FROM users 
        where username=${credentials == null ? void 0 : credentials.username} OR email=${credentials == null ? void 0 : credentials.username}
        `;
        if (!users || users.length === 0)
          throw new Error("Compte inexistant");
        if (users[0].can_auth == false)
          throw new Error(
            "Votre compte est actuellement d\xE9sactiv\xE9, veuillez vous rapprocher de l'administrateur pour d\xE9bloquer votre compte."
          );
        if (await bcrypt.compare(credentials == null ? void 0 : credentials.password, users[0].password)) {
          await prisma.$executeRaw`UPDATE users SET login_at=now() WHERE username=${users[0].username}`;
          return {
            name: users[0].username ? users[0].username : "",
            email: users[0].email ? users[0].email : ""
          };
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/"
  },
  callbacks: {
    async session({ session, token }) {
      if (token == null ? void 0 : token.name) {
        session.user = (await prisma.$queryRaw`SELECT 
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
          `)[0];
      }
      return session;
    }
  }
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
