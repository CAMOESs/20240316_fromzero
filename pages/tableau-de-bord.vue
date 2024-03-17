<template>
  <div>
   <!--  <teleport v-if="isLoaded" to="#teleport-target">
      <v-btn
        class="btn_drawer_styleus"
        prepend-icon="mdi-menu"
        depressed
        text
        variant="plain"
        @click.stop="drawer = !drawer"
      >
        <span style="color: white" class="d-none d-xs-none d-sm-block btn-block"
          >&nbsp;&nbsp;</span
        >
      </v-btn>
    </teleport> -->
   <!--  <v-navigation-drawer
      v-model="drawer"
      style="background-color: #002337e4; margin-top: 60px; color: white"
      :permanent="permanent"
      location="left"
      theme="dark"
      elevation="2"
    >
      <v-list nav class="mt-16 pt-7">
        <v-list-item
          v-for="(element, index) in items"
          :key="index"
          :prepend-icon="element.icon"
          :to="element.to"
          >{{ element.title }}</v-list-item
        >
      </v-list>
    </v-navigation-drawer> -->
    <NuxtPage />
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";

const headers = useRequestHeaders(["cookie"]);
let { name } = useDisplay();
let drawer = ref(true);
let items = ref([]);
const permanent = computed(() => {
  return name.value !== "xs";
});
({ data: items } = await useFetch("/api/my-menu"));
//console.log(items.value);
const isLoaded = ref(false);
onMounted(() => {
  isLoaded.value = true;
});
</script>
<style>
  
.Sds{
  color : #002337e4
} 
</style>