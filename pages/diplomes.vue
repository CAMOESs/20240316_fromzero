<!-- @format -->

<template>
  <div class="mt-6 mb-0" style="background-color: #2685bc25;">
    <!-- {{ query }} -->
    <!-- <v-btn @click="getter" >AAA</v-btn> -->

    <div
      class="d-flex justify-center align-center"
      style="min-height: 80vh; height: auto;"
    >
      <v-card
        style="max-width: 400px; width: 100%; border: solid 1px #2685bc; border-radius: 25px;"
        class="px-md-5 px-3"
      >
        <div>
          <div v-if="loading">
            <v-btn :loading="loading" variant="text"> </v-btn>
          </div>
          <div v-else>
            <div v-if="!(candidat && candidat.id)">
              <div class="d-flex justify-center">
                <div class="mt-6 mb-6">
                  <v-icon style="font-size: 50px; color: red">
                    mdi-close-circle
                  </v-icon>
                </div>
              </div>
              Diplôme non retrouvé dans notre base de données.
            </div>
            <div v-else>
              <div class="d-flex justify-center mt-6">
                <div>
                  <v-icon style="font-size: 70px; color: green">
                    mdi-checkbox-marked-circle-outline
                  </v-icon>
                </div>
              </div>
              <div class="my-2 d-flex justify-space-between">
                <span class="font-weight-black">Nom : </span
                >{{ candidat.lastname }}
              </div>
              <div class="my-2 d-flex justify-space-between">
                <span class="font-weight-black">Prénoms : </span
                >{{ candidat.firstname }}
              </div>
              <div class="my-2 d-flex justify-space-between">
                <span class="font-weight-black">Métier : </span
                >{{ candidat.metier }}
              </div>
              <div class="my-2 d-flex justify-space-between">
                <span class="font-weight-black">Statut : </span>
                <span style="color: green">Admis</span>
              </div>
              <div class="my-2 d-flex justify-space-between">
                <span class="font-weight-black">Session : </span
                >{{
                  candidat.Session && candidat.Session.month 
                    ? candidat.Session.month
                    : "-"
                }}
                {{
                  candidat.Session && candidat.Session.year 
                    ? candidat.Session.year
                    : "-"
                }}
              </div>
              <div class="my-2 d-flex justify-space-between">
                <span class="font-weight-black">PV : </span
                >{{
                  candidat.Session && candidat.Session.date_of_pv
                    ? dateformatFr_long(candidat.Session.date_of_pv)
                    : "-"
                }}
              </div>
              <div class="my-2 d-flex justify-space-between">
                <!--#EXAM  -->
                <span class="font-weight-black">Examen : </span>
                CQM
              </div>
              <div
                style="color : red; font-weight: 100; font-size : 12px; font-style: italic;  text-align: justify;"
              >
                <v-icon>mdi-alert</v-icon>
                Merci de bien vouloir vérifier l'exactitude des informations
                présentées ci-dessus en les comparant avec celles figurant sur
                le document scanné.
              </div>
            </div>

            <hr color="#2685bc" />
          </div>
        </div>
        <div class="my-8">
          <div
            style="text-align: center!important; font-size: 18px; font-style: italic; color: #2685bc"
          >
            <span v-if="candidat && candidat.id"> Certifié</span>
            CMA-BENIN
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>
<script setup>
const headers = useRequestHeaders(["cookie"]);
import { useSnackbar } from "@/store/snackbar";
let sn = useSnackbar();
definePageMeta({
  layout: "home",
  preload: true,
  auth: false,
});
let candidat = ref({});
let loading = ref(false);
useHead({
  title: "Authenticité du diplôme",
});

let { query } = useRoute();

//
async function getter() {
  let res = {};
  loading.value = true;
  console.log("getter query");
  console.log(query);
  try {
    if (!(query && query.ref )) {
      candidat.value = {};
    } else {
      res = await useFetch(`/api/candidats/diplome/verify?ref=${query.ref}`);
      candidat.value = res.data.value;
    }
  } catch (error) {
    console.log(error);
    sn.error(res.data.value?.error);
  }
  loading.value = false;
}

/* dateformatFr: (
        date: string | null | undefined
      ): string | null | undefined => {

      }, */

function dateformatFr_long(date) {
  const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

  if (!date) return null;


        const [date_, time_] = date.replace(".000Z", "").split("T");
        const [year, month, day] = date_.split("-");

        // return `${day}/${month}/${year}`;

  return `${day} ${months[Number(month)]} ${year}`;
}
await getter();
//
//
//
//
</script>
<style></style>
