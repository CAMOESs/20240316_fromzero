<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar.status"
      location="top"
      :color="snackbar.type"
      :timeout="snackbar.timeout"
    >
      <!-- <v-icon>{{ icon }} </v-icon> -->
      {{ snackbar.text }}
      <template v-slot:actions>
        <v-btn class="text-white bg-black" @click="snackbar.close()">
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script setup>
import { useSnackbar } from "@/store/snackbar";

let snackbar = useSnackbar();
</script>

<style></style>
