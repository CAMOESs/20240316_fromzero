const slugify = require("slugify")

function main() {
  const permissions = [
    // "Enroler les candidats temporairement à l'examen du BEPC"
    // "Autoriser l'enregistrement des fichiers log",
    // "Désincrire un candidat à l'examen du BEPC",
    // "Valider une demande d'autorisation au niveau départemental",
    // "Valider une demande d'autorisation au niveau national",
    // "Voir la liste des demandes d'autorisation",
    "Valider une demande addresser au directeur départemental"
  ]

  let collection = permissions.map((value) => ({
    name: value,
    slug: slugify(`${value}`, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    }),
  }));


  console.log(`INSERT INTO permissions(name, slug) VALUES 
  ${collection.map(v => `("${v.name}", "${v.slug}")`).join(',\n')};`)

  console.log(`INSERT INTO permission_role(permission_slug,role_slug)
  VALUES 
  ${collection.map(v => `("${v.slug}", "administrateur")`).join(',\n')};
  `);
}


main()