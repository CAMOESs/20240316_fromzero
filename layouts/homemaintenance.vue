<template>
  <div>
      <Header_maintenance />
         <main style="margin-top: 40px;">
            <slot></slot>
         </main>
         <v-row justify="center" no-gutters style="margin-top: 20px;" class="footer">
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} <strong>:  EducMaster/ MESTFP / République du bénin. Tous droits réservés. Plateforme réalisée par </strong> <a href="https://ticsmaster.bj/" target="_blank" style="text-decoration: none;">TICS MASTER SARL </a>
      </v-col>
    </v-row>
   </div>
</template>
<script setup>
   import Header_maintenance from '~/components/Accueil/Header_maintenance.vue';
   import TheFooter from '~/components/Accueil/Footer.vue';
</script>
<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px; /* ajustez la hauteur selon vos besoins */
}
#nav{
  box-shadow: 0 0 7px rgb(0 0 0 / 11%) !important ;
  background-color: white
} 

</style>
