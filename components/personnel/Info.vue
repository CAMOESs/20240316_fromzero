<template>
  <div>
    <v-row>
              <v-col
                cols="12"
                md="6"
                class="font-weight-black d-flex justify-space-between"
              >
                <span>Matricule</span>
                <span>:</span>
              </v-col>
              <v-col cols="12" md="6">
                {{ agent.matricule }}
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="font-weight-black d-flex justify-space-between"
              >
                <span>Nom</span>
                <span>:</span>
              </v-col>
              <v-col cols="12" md="6">
                {{ agent.lastname }}
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="font-weight-black d-flex justify-space-between"
              >
                <span>Prénoms</span>
                <span>:</span>
              </v-col>
              <v-col cols="12" md="6">
                {{ agent.firstname }}
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="font-weight-black d-flex justify-space-between"
              >
                <span>Sexe</span>
                <span>:</span>
              </v-col>
              <v-col cols="12" md="6">
                {{ agent.sex }}
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="font-weight-black d-flex justify-space-between"
              >
                <span>Numéro de téléphone</span>
                <span>:</span>
              </v-col>
              <v-col cols="12" md="6">
                {{ agent.phone_number }}
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="font-weight-black d-flex justify-space-between"
              >
                <span>Email</span>
                <span>:</span>
              </v-col>
              <v-col cols="12" md="6">
                {{ agent.email }}
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="font-weight-black d-flex justify-space-between"
              >
                <span>Date et lieu de naissance </span>
                <span>:</span>
              </v-col>
              <v-col cols="12" md="6">
                {{ $dateformatFr(agent.date_of_birth) }} à
                {{ agent.place_of_birth }}
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="font-weight-black d-flex justify-space-between"
              >
                <span>Nationalilé (Pays)</span>
                <span>:</span>
              </v-col>
              <v-col cols="12" md="6">
                {{ agent.nationality }}
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                md="6"
                class="font-weight-black d-flex justify-space-between"
              >
                <span>Date de première prise de service</span>
                <span>:</span>
              </v-col>
              <v-col cols="12" md="6">
                {{ $dateformatFr(agent.start_date_service) }}
              </v-col>
            </v-row>
  </div>
</template>

<script setup>
const { $dateformatFr } = useNuxtApp();
let props = defineProps({
  agent: Object,
});
</script>

<style></style>
