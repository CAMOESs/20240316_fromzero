/** @format */

//npm run seed
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const slugify = require("slugify");

const permissions = [
  /*  "Enregistrer mon compte",
  "Enregistrer un profil",
  "Supprimer les profils",
  "Voir les profils",
  "Enregistrer un utilisateur",
  "Supprimer les utilisateurs",
  "Voir les utilisateurs", */
  /* "Enregistrer une branche",
  "Supprimer les branches",
  "Voir la liste des branches",
  "Enregistrer un corps de métier",
  "Supprimer les corps de métier",
  "Voir la liste des corps de métier",
  "Enregistrer un métier",
  "Supprimer les métiers",
  "Voir la liste des métiers",
  "Enregistrer un centre de composition",
  "Supprimer les centres de composition",
  "Voir la liste des centres de composition", */
  // "Enregistrer une session",
  // "Supprimer des sessions",
  // "Voir la liste des sessions",
  // "Voir la liste des candidats",
  // "Imprimer les diplômes des candidats",
  "Enregistrer des signataires",
];

const roles = ["Administrateur"];

let collection_role = roles.map((value) => ({
  name: value,
  slug: slugify(`${value}`, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  }),
}));

let collection = permissions.map((value) => ({
  name: value,
  slug: slugify(`${value}`, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  }),
}));

async function main() {
  // await prisma.permission.createMany({
  //   data: collection,
  // });

  /*  for (let col of collection_role) {
    await prisma.$executeRawUnsafe(
      `INSERT INTO roles(name,slug)
      VALUES(?, ?)`,
      col.name,
      slugify(`${col.name}`, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      })
    );
  }
 */
  // console.log(permissions);
  for (let col of collection) {
    // console.log(col.name);

    await prisma.$executeRawUnsafe(
      `INSERT INTO permissions(name,slug)
      VALUES(?, ?)`,
      col.name,
      slugify(`${col.name}`, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      })
    );
    await prisma.$executeRawUnsafe(
      `INSERT INTO permission_role(permission_slug,role_slug)
      VALUES(?, ?)`,
      slugify(`${col.name}`, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      }),
      "administrateur"
    );
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    // process.exit(1);
  });
