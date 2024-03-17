<template>
   <Suspense>
  <div>
  <!-- <v-row class="ma-0 pa-0" > 
    <v-col
      cols="4"
      style="background-color: rgb(0, 104, 40)"
      class="ma-0 pa-1"
    ></v-col>
    <v-col
      cols="4"
      style="background-color: rgb(255, 190, 0)"
      class="ma-0 pa-1"
    ></v-col>
    <v-col
      cols="4"
      style="background-color: rgb(235, 0, 0)"
      class="ma-0 pa-1"
    ></v-col>
  </v-row>
  <footer class="footers d-flex flex-column">
    <v-row class="d-flex flex-column ma-0 pa-0">
      <v-row justify="center" class="mt-4 ma-0 pa-0"  >
        <img
          src="/images/mestf_13.png"
          alt="#"
          style="
            filter: contrast(0%) brightness(200%);
            object-fit: contain;
            height: 91px;
            width: 300px;
          "
        />
      </v-row>

      <div v-if="(accueilc && accueilc.statut=='Publié')" align="center" class="mb-16 pb-4 ml-4">
        <p class="p-small text-white">
         {{accueilc && accueilc.institution ? accueilc.institution :'EducMaster/Ministère des Enseignements Secondaire, Technique et de la Formation Professionnelle' }} 
        </p>
        <p class="p-small text-white" v-if="accueilc">
          Copyright © 2023 - Tous droits réservés. {{accueilc && accueilc.concepteur ? 'Plateforme réalisée par TICS MASTER SARL':'' }}  
        </p>
      </div>

      <div v-if="(accueilc && accueilc.statut=='Brouillon')"  align="center" class="mb-16 pb-4 ml-4">
        <p class="p-small text-white">
          EducMaster/Ministère des Enseignements Secondaire, Technique et de la Formation Professionnelle 
        </p>
        <p class="p-small text-white">
          Copyright © 2023 - Tous droits réservés.Plateforme réalisée par TICS MASTER SARL  
        </p>
      </div>
    </v-row>
  </footer> -->
  <v-row class="ma-0 pa-0">
    <v-col
      cols="4"
      style="background-color: rgb(0, 104, 40)"
      class="ma-0 pa-1"
    ></v-col>
    <v-col
      cols="4"
      style="background-color: rgb(255, 190, 0)"
      class="ma-0 pa-1"
    ></v-col>
    <v-col
      cols="4"
      style="background-color: rgb(235, 0, 0)"
      class="ma-0 pa-1"
    ></v-col>
  </v-row>
</div>
</Suspense>
</template>
<script>
export default {
  name: "TheFooter",
  props: {
        accueilc:  Array()
    }
};
</script>
<style lang="scss">
.footers {
  background-image: url("/binding_dark.png");
  background-color: #cccccc;
  background-size: cover;
  height: 300px;
}
</style>
