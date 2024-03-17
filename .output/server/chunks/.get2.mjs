import { d as definePrivateEventHandler, c as createError } from './.get.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const prisma = new PrismaClient();
const _get = definePrivateEventHandler(async (event, user) => {
  try {
    const items = [
      {
        icon: "mdi-account-edit",
        title: "Mon compte",
        to: "/tableau-de-bord/mon-compte",
        can: ["Enregistrer mon compte"]
      },
      {
        icon: "mdi-account-supervisor",
        title: "Utilisateurs & profils",
        to: "/tableau-de-bord/utilisateurs-profils",
        can: [
          "Enregistrer un profil",
          "Supprimer les profils",
          "Voir les profils",
          "Enregistrer un utilisateur",
          "Supprimer les utilisateurs",
          "Voir les utilisateurs"
        ]
      },
      {
        icon: "mdi-clipboard-list",
        title: "Sessions",
        to: "/tableau-de-bord/sessions",
        can: [
          "Enregistrer une session",
          "Supprimer des sessions",
          "Voir la liste des sessions"
        ]
      },
      {
        icon: "mdi-school",
        title: "Candidats",
        to: "/tableau-de-bord/candidats",
        can: [
          "Voir la liste des candidats",
          "Imprimer les dipl\xF4mes des candidats"
        ]
      },
      {
        icon: "mdi-cog",
        title: "Configuration",
        to: "/tableau-de-bord/configuration",
        can: [
          "Enregistrer une branche",
          "Supprimer les branches",
          "Voir la liste des branches",
          "Enregistrer un corps de m\xE9tier",
          "Supprimer les corps de m\xE9tier",
          "Voir la liste des corps de m\xE9tier",
          "Enregistrer un m\xE9tier",
          "Supprimer les m\xE9tiers",
          "Voir la liste des m\xE9tiers",
          "Enregistrer un centre de composition",
          "Supprimer les centres de composition",
          "Voir la liste des centres de composition",
          "Enregistrer des signataires"
        ]
      }
    ];
    let user_username = user == null ? void 0 : user.username;
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

export { _get as default };
//# sourceMappingURL=.get2.mjs.map
