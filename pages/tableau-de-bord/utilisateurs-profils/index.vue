<!-- @format -->

<template>
  <div >
    <v-row class="mt-9 mx-6">
      <v-col cols="0" sm="0" md="2"></v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-btn
          height="60"
          color="#1b3a4c"
          class="text-white align-center btn-multiline"
          max-width="250"
          style="width: 100%;text-align:center; font-size : 2rem;"
          :to="item.to"
          rounded="5"
        >
          <span class="text-wrap">
            <small style="white-space: wrap !important;"
              >{{ item.title }}
            </small></span
          >
        </v-btn>
      </v-col>
      <v-col cols="0" sm="0" md="2"></v-col>
    </v-row>
    <!--  <v-row class="mt-9 mx-6">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-btn
          height="60"
          color="#1b3a4c"
          class="text-white align-center btn-multiline"
          max-width="250"
          style="width: 100%;text-align:center; font-size : 2rem;"
          :to="item.to"
          rounded="5"
        >
          <span class="text-wrap">
            <small style="white-space: wrap !important;"
              >{{ item.title }}
            </small></span
          >
        </v-btn>
      </v-col>
    </v-row> -->
  </div>
</template>
<script setup>
const headers = useRequestHeaders(["cookie"]);
useHead({ title: "Utilisateurs & profils" });
  let items;
  let name= "utilisateur_profil";
  ({data:items} = await useFetch("/api/my-menu/sub?name="+name))
</script>
