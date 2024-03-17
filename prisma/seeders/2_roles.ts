import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  //log: ['query']
});
import slugify from "slugify";

const roles = ["Administrateur"];
// console.log('l\'établissement' );

let collection = roles.map((value) => ({
  name: value,
  slug: slugify(`${value}`, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  })
}));

async function main() {

  // await prisma.role.createMany({
  //   data: collection,
  // });

  for(let col of collection){

    await prisma.$executeRawUnsafe(
      `INSERT INTO roles(name,slug)
      VALUES(?, ?)`,
      col.name,
      slugify(`${col.name}`, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      }),
    )

  }

  // await prisma.role_user.create({
  //   data: {
  //     slug: "administrateur",
  //     username: "ticsad",
  //   },

  // });
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
