import { PrismaClient } from "@prisma/client";
import {hash}  from "bcrypt";
const prisma = new PrismaClient();
const salt = process.env.SALT ? parseInt(process.env.SALT) : 10;

async function main() {

  const user = await prisma.user.create({
    data: {
      username: "ticsad",
      email: "admin@ticsmaster.bj",
      password: await hash("T!cs@d_1000", salt),
      is_change_password : true,
      can_auth: true,
    },
    
  });
  await prisma.$executeRawUnsafe(
    `INSERT INTO role_user(slug,username)
    VALUES(?, ?)`,
    "administrateur","ticsad"
  )

}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });