<template>
  <div v-if="loading">
    <v-dialog persistent width="auto">
      <v-card>
        <v-card-text>
          Opération en cour veuillez patienter.
          <v-progress-linear
            indeterminate
            color="#001c39"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup>
let d = ref(true);
defineProps({
  loading: Boolean,
});
let dialog = computed(() => loading);
</script>
