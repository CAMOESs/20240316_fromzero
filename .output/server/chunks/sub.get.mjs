import { d as definePrivateEventHandler, g as getQuery, c as createError } from './.get.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const utilisateur_profil = [
  {
    icon: "mdi mdi-account-multiple-plus",
    title: "Utilisateurs",
    to: "/tableau-de-bord/utilisateurs-profils/utilisateurs",
    can: [
      "Enregistrer un utilisateur",
      "Supprimer les utilisateurs",
      "Voir les utilisateurs"
    ]
  },
  {
    icon: "mdi mdi-account-multiple-plus",
    title: "Profils",
    to: "/tableau-de-bord/utilisateurs-profils/profils",
    can: ["Enregistrer un profil", "Supprimer les profils", "Voir les profils"]
  }
];
const configuration = [
  {
    icon: "mdi mdi-account-multiple-plus",
    title: "Signataires",
    to: "/tableau-de-bord/configuration/signataires",
    can: [
      "Enregistrer des signataires"
    ]
  }
];
const prisma = new PrismaClient();
const sub_get = definePrivateEventHandler(async (event, user) => {
  try {
    let items = [];
    const { name } = getQuery(event);
    switch (name) {
      case "utilisateur_profil":
        items = utilisateur_profil;
        break;
      case "configuration":
        items = configuration;
        break;
      default:
        break;
    }
    const permissions_of_user = await prisma.$queryRaw`SELECT permissions.name FROM permissions INNER JOIN permission_role on
            permission_role.permission_slug=permissions.slug INNER JOIN roles on roles.slug=permission_role.role_slug
            INNER JOIN role_user on role_user.slug=roles.slug WHERE role_user.username=${user == null ? void 0 : user.username}`;
    let items_of_user = [];
    for (const key in items) {
      if (items[key].can.some(
        (v) => !!permissions_of_user.find((element) => element.name === v)
      )) {
        items_of_user.push({
          icon: items[key].icon,
          title: items[key].title,
          to: items[key].to
        });
      }
    }
    await prisma.$disconnect();
    return items_of_user;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 403,
      statusMessage: "Un probl\xE8me est survenue."
    });
  }
});

export { sub_get as default };
//# sourceMappingURL=sub.get.mjs.map
