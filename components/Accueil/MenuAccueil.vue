<template>

<v-card style="color:white; margin:10px; margin-bottom:50px;"  >
    <v-tabs style="color: black; " next-icon="mdi-arrow-right-bold-box-outline" prev-icon="mdi-arrow-left-bold-box-outline"
      show-arrows>
      <v-tab v-for="(element,index) in items" :key="index" :to="element.to"  >

          {{element.title}} 

      </v-tab>
    </v-tabs>
  </v-card>
</template>
<script setup>
    const props = defineProps(['items'])

</script>
<style lang="scss">
#nav{
  box-shadow: 0 0 7px rgb(0 0 0 / 11%) !important;
  background-color: white !important;
} 
</style>
