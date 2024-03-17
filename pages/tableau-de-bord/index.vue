<template>
    <v-container class="" style=" min-height: 100vh;">
      <v-container>
        <!-- <v-row justify="center"> -->
        <v-card elevation="5" class="mt-16">
        <div>
          <div
            class="d-flex flex-column"
            style="padding-top: 2em; justify-content: center"
          >
            <div
              style="
                font-size: 24px;
                color: red;
                font-weight: bold;
                margin-left: 2em;
                margin-right: 4em;
                width: 90%;
              "
              text
            >
              <span>Prérequis nécessaires à l'utilisation de la plateforme</span>
            </div>
            <ul>
              <ol style="text-align: justify; margin-left: 2em; font-weight : bold; color: #0076b8" class="mt-2">
                <v-icon style="color: #0076b8" class="mr-4"
                  >mdi-book-open-page-variant</v-icon
                >
                Savoir Lire
              </ol>
              <ol style="text-align: justify; margin-left: 2em; font-weight : bold; color: #0076b8" class="mt-2">
                <v-icon style="color: #0076b8" class="mr-4"
                  >mdi-pencil-box-multiple</v-icon
                >
                Savoir écrire
              </ol>
              <br />
            </ul>
  
            <div
              class="container"
              style="
                justify-content: justify;
                margin-left: 2em;
                margin-right: 4em;
                width: 90%;
              "
            >
              <div style="margin-bottom: 4px; " class="d-flex mb-6">
                <v-icon style="color: #0076b8; margin-right: 2px"
                  >mdi-check-decagram</v-icon
                >
                <div class="ml-4" style="text-align:justify">Sans ces deux prérequis, vous aurez certainement besoin d’une
                assistance pour l’utilisation de la plateforme.</div>

              </div>
              <v-divider></v-divider>
              <div >
                <div style="color:black;text-align:justify" class="d-flex">
                  <v-icon
                    style="color: #0076b8; margin-right: 2px; margin-bottom: 6px"
                    >mdi-check-decagram</v-icon
                  >
                  <div class="ml-4">Aucune connaissance/compétence en informatique, quoique cela
                  puisse être un atout, n'est nécessaire pour l'utilisation de la
                  plateforme.</div>
                </div>
                <br />
                <div style="text-align: justify" class="d-flex">
                  <v-icon
                    style="color: #0076b8; margin-right: 2px; margin-bottom: 6px"
                    >mdi-check-decagram</v-icon
                  >
                  <div class="ml-4">Les menus sont intuitifs et laissez agir votre bon sens : Chaque
                  fois que cela est nécessaire vous disposez d'une aide
                  contextuelle avec un "LISEZ-MOI SVP" que nous vous conseillons
                  fortement de bien lire avant de continuer.</div>
                </div>
                <br />
               
              </div>
            </div>
            <br />
          </div>
        </div>
        </v-card>
        <!-- </v-row> -->
      </v-container>
    </v-container>
  </template>
  
  <script setup>
  
  
  /* const title = "Tableau de bord";
  export default {
    head: {
      title: title,
    },
    data() {
      return {
        expansion: null,
      };
    },
  };
   */
   </script>    
 