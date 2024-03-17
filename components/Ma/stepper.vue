<!-- MyStepper.vue -->
<template>
  <div class="stepper">
    <div v-for="(step, index) in steps" :key="index" :class="{ actif: etapeCourante === index }">
      {{ step }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: Array,
    etapeCourante: Number,
  },
};
</script>

<style scoped>
.stepper {
  display: flex;
}

.stepper > div {
  flex: 1;
  text-align: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.stepper > div.actif {
  background-color: #3498db;
  color: white;
}
</style>
