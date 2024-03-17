<template>
   <v-row class="mt-9 mx-6">
    <v-col cols="12" sm="6" md="4" v-for="(item, index) in items" :key="index">
      <v-btn
        height="100"
        color="#1b3a4c"
        class="text-white align-center btn-multiline"
        max-width="250"
        style="width: 100%;text-align:center"
        :to="item.to"
      >
        <span class="text-wrap">
          <small style="white-space: wrap !important;">{{ item.title }} </small></span
        >
      </v-btn>
    </v-col>
  </v-row>
  
</template>
<script setup>
defineProps({
  items: Array,
});
</script>
