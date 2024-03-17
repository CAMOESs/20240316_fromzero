<template>
  <div>
    <TheHeader />
    <main> 
      <v-container
        fluid
        style="
          padding-top: 60px;
          padding-left: 0 !important;
          padding-right: 0 !important;
          padding-bottom: 0;
          margin-bottom: 0;
        "
      >
      <slot></slot>
      </v-container>
    </main>

  </div>
</template>
 <script setup>
import TheHeader from "~/components/Accueil/Header.vue";
</script>
