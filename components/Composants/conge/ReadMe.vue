<template>
    <div>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-title
            class="text-center bg-red-lighten-4 text-red-accent-4 font-weight-black"
          >
            <template v-slot:default="{}">
              <div style="width: 100%; font-size: medium" class="blank">
                CLIQUEZ ICI ET LISEZ MOI SVP !
              </div>
            </template>
            <template v-slot:actions="{}"> </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text class="border--red mx-md-4">
            <div class="mx-md-4">
          Les instructions qui suivent donnent des clarifications sur des champs qui parraitront ambigure dans cette configuration des types de congés. Merci de les lire et d'en tenir compte.
  
            <ol class="mx-md-4">
              <li>
                Délai butoir de traitement :
                <p> c'est le delai à parti du quel une demande de congé pour ce type n'est plus traitable .Il est definir par rapport à la date de debut du congé ou de la permissions</p>
                <p> <strong> Exemple :</strong>Si la date debut du congé du demandeur est 10/09/2023 et si le delai de traitement est defini sur 0 ,la demande n'est plus traitable dans la journée du début de congé  </p>
               
              </li>
              <li>
                Nombre minimal de jours avant date du début  :
                <p>C'est le nombre minimal de jours qui separe la date d'une demande de congé de la date début du congé </p>
                
               <p><b>Exemple : </b> Si le nombre minimal de jours avant date de début est 2 et la date du demande est 12/09/2023 alors la date minimal du début de congé serait 14/09/2023  </p>  ;
              </li>
  
              <li>
                Choisir le nom de la feuille (disponible une fois le fichier joint
                ) et indiquer le nombre de ligne avant le premier enregistrement
                (1 par défaut : si rien n'est indiqué) ;
              </li>
              <li>Cliquer sur le bouton « AFFICHER » ;</li>
  
              <li>Faire correspondre les entêtes de chaque colonne ;</li>
              <li>
                Vérifier s'il n'y a pas d'erreur puis cliquer sur « ENREGISTRER »
                pour finir l'importation.
              </li>
            </ol>
  
            <div>
              <br />
              <span style="font-weight: bold">NB</span> : <br />
              <ul class="mx-md-4">
                <li>
                  <span style="font-weight: bold">Sexe</span> <br />
                  <span
                    >M ou F sur le fichier excel, avec M pour masculin et F pour
                    Féminin ;</span
                  >
                </li>
  
                <li>
                  <span style="font-weight: bold">Nationalité (Pays)</span>
                  <br />
                  <span>Exemple : BENIN</span>
                </li>
                <li>
                  <span style="font-weight: bold"
                    >Date de naissance</span
                  >
                  <br />
                  1 -
                  <span
                    >La date de naissance est au format JJ/MM/AAAA (exemple :
                    23/05/2013) ;</span
                  >
                  <br />
                  2 -
                  <span
                    >Faites un clique droit sur la lettre de la colonne de dates
                    de naissance (lettre D ici) et allez sur "Formater cellule"
                    pour vérifier que : le champ catégorie est sur date et le
                    champ Type sur format jj/mm/aaaa (corriger si non).</span
                  >
                </li>
              </ul>
            </div>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </template>
  <style>
  .blank {
    animation: blankAnimation 1.5s forwards infinite;
  }
  @keyframes blankAnimation {
    0% {
      opacity: 1;
    }
    10% {
      opacity: 0.5;
    }
    20% {
      opacity: 1;
    }
    30% {
      opacity: 0.5;
    }
  
    40% {
      opacity: 1;
    }
  
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  .border--red {
    border: solid red 1px;
    border-top: none;
  }
  </style>
  