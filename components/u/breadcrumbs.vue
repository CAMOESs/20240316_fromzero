<template>
  <div class="my-4 mx-3">
    <span v-for="(item, index) in items.slice(0, -1)" :key="index">
      <nuxt-link :to="item.to" 
      class="font-weight-black"
      style="color : #1b3a4c"
      >
        {{ item.text }}
      </nuxt-link>
      <span> <v-icon>mdi-chevron-right</v-icon> </span>
    </span>
    <span v-for="item in items.slice(-1)" :key="item.to">
      <nuxt-link
        style="text-decoration: none  width: 100%; white-space: nowrap!important; color : white!important"
        class="text-grey"
        disabled
      >
        {{ item.text }}
        
      </nuxt-link>
    </span>
  </div>
</template>
<script setup>
defineProps({
  items: Array,
});
</script>
