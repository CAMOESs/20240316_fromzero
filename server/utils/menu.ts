/**
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * *********************************** MY MENU ***************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 *
 * @format
 */

const my_menu = [
  {
    icon: "mdi-account-edit",
    title: "Mon compte",
    to: "/tableau-de-bord/mon-compte",
    full_to: "/tableau-de-bord/mon-compte",
    can: ["Enregistrer mon compte"],
  },
  {
    icon: "mdi-account-supervisor",
    title: "Utilisateurs & profils",
    to: "/tableau-de-bord/utilisateurs-profils",
    full_to: "/tableau-de-bord/utilisateurs-profils",
    can: [
      "Enregistrer un profil",
      "Supprimer les profils",
      "Voir les profils",
      "Enregistrer un utilisateur",
      "Supprimer les utilisateurs",
      "Voir les utilisateurs",
    ],
  },
  {
    icon: "mdi-clipboard-list",
    title: "Sessions",
    to: "/tableau-de-bord/sessions",
    full_to: "/tableau-de-bord/sessions",
    can: [
      "Enregistrer une session",
      "Supprimer des sessions",
      "Voir la liste des sessions",
    ],
  },
  {
    icon: "mdi-school",
    title: "Candidats",
    to: "/tableau-de-bord/candidats",
    full_to: "/tableau-de-bord/candidats",
    can: ["Voir la liste des candidats", "Imprimer les diplômes des candidats"],
  },
  {
    icon: "mdi-cog",
    title: "Configuration",
    to: "/tableau-de-bord/configuration",
    full_to: "/tableau-de-bord/configuration",
    can: [
      "Enregistrer une branche",
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
      "Voir la liste des centres de composition",
      "Enregistrer des signataires",
    ],
  },
];

/**
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * *********************************** MY SUB MENU ************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 */

const my_sub_menu = {
  utilisateur_profil: [
    {
      icon: "mdi mdi-account-multiple-plus",
      title: "Utilisateurs",
      to: "/tableau-de-bord/utilisateurs-profils/utilisateurs",
      can: [
        "Enregistrer un utilisateur",
        "Supprimer les utilisateurs",
        "Voir les utilisateurs",
      ],
    },
    {
      icon: "mdi mdi-account-multiple-plus",
      title: "Profils",
      to: "/tableau-de-bord/utilisateurs-profils/profils",
      can: [
        "Enregistrer un profil",
        "Supprimer les profils",
        "Voir les profils",
      ],
    },
  ],
  configuration: [
    {
      icon: "mdi mdi-account-multiple-plus",
      title: "Signataires",
      to: "/tableau-de-bord/configuration/signataires",
      can: ["Enregistrer des signataires"],
    },
  ],
};

/**
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * *********************************** MY SUB MENU CARD********************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 */

const my_sub_menu_card = {};

/**
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * *********************************** OTHER PATH ***************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 */
// tableau - de - bord / dec - primaire / liste - des - candidats

const other_path: {
  to: string;
  can: string[];
}[] = [
  /* 
    to: "/tableau-de-bord/",
    can :[
        "Enregistrer un ...."
    ]  
 
 */
];

/**
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * *********************************** FUNCTION ***************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 * ************************************************************************************************
 */

function main() {
  let tab = my_menu.map((v) => {
    return { to: v.to, can: v.can };
  });
  // console.log("tab.length");
  // console.log(tab.length);
  for (const menu_item of [my_sub_menu, my_sub_menu_card]) {
    for (const key in menu_item) {
      if (Object.hasOwnProperty.call(my_sub_menu, key)) {
        //@ts-ignore
        for (let i = 0; i < my_sub_menu[key].length; i++) {
          //@ts-ignore
          const element = my_sub_menu[key][i];
          tab.push({
            to: element.to,
            can: element.can,
          });
        }
      }
    }
  }

  tab.push(...other_path);
  return tab;
}

let all_path: {
  to: string;
  can: string[];
}[] = [];
all_path = main();

export { my_menu, my_sub_menu, my_sub_menu_card, all_path };
