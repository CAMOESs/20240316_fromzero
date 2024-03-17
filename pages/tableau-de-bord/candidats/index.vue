<!-- @format -->

<template>
  <div class="mt-4">
    <div class="mx-md-4 mx-2 pt-5">
      <v-form v-model="validForm" @submit.prevent="getItems()" class="mt-5">
        <!--#EXAM  -->
        <v-autocomplete
          v-model="search.session_id"
          :items="sessions"
          color="blue-grey-lighten-2"
          item-title="name_"
          item-value="id"
          label="Session *"
          variant="outlined"
          :rules="[(v) => !!v || required_message]"
          clearable
          bg-color="white"
        >
          <template v-slot:selection="{ item }">
            <!-- <v-chip v-bind="props" :text="item.raw.name_"></v-chip> -->
            {{ item.raw.name_ }}
          </template>
          <!-- :subtitle="item.raw.group" -->
          <template v-slot:item="{ props, item }">
            <v-list-item v-bind="props" :title="item.raw.name_"></v-list-item>
          </template>
        </v-autocomplete>

        <div v-if="show_form">
          <v-autocomplete
            v-model="search.branch"
            :items="branches"
            color="blue-grey-lighten-2"
            item-title="name"
            item-value="name"
            label="Branche"
            variant="outlined"
            clearable
            bg-color="white"
          >
          </v-autocomplete>
          <v-autocomplete
            v-model="search.centre"
            :items="centres"
            color="blue-grey-lighten-2"
            item-title="name"
            item-value="name"
            label="Centre"
            variant="outlined"
            clearable
            bg-color="white"
          >
          </v-autocomplete>
          <v-autocomplete
            v-model="search.corps"
            :items="corps"
            color="blue-grey-lighten-2"
            item-title="name"
            item-value="name"
            label="Corps"
            variant="outlined"
            clearable
            bg-color="white"
          >
          </v-autocomplete>
          <v-autocomplete
            v-model="search.metier"
            :items="metiers"
            color="blue-grey-lighten-2"
            item-title="name"
            item-value="name"
            label="Métier"
            variant="outlined"
            clearable
            bg-color="white"
          >
          </v-autocomplete>
          <v-autocomplete
            v-model="search.department"
            :items="departments"
            color="blue-grey-lighten-2"
            item-title="name"
            item-value="name"
            label="Département"
            variant="outlined"
            bg-color="white"
          >
          </v-autocomplete>
        </div>
        <div>
          <v-btn @click="show_form = !show_form">
            <span v-if="show_form"> Moins d'options</span>
            <span v-else>Plus options</span></v-btn
          >
          <v-btn
            :disabled="validForm == false"
            color="#1b3a4c"
            type="submit"
            class="text-white"
            :loading="loading_item_list"
          >
            Afficher
          </v-btn>
        </div>
      </v-form>
    </div>
    <div class="mt-6 mx-md-4 mx-2">
      <!-- <v-btn
        class="mr-1"
        style="color: white"
        color="#1b3a4c"
        @click="open_edit_dialog(true)"
      >
        <v-icon>mdi-plus</v-icon>
        <span class="d-none d-xs-none d-sm-block">Ajouter</span>
      </v-btn> -->
      <!-- <v-btn
        class="mr-1"
        style="color: white"
        color="#1b3a4c"
      >
        <v-icon>mdi-excel </v-icon
        ><span class="d-none d-xs-none d-sm-block">Importer</span>
      </v-btn> -->
      <!-- <v-btn
        class="mr-1"
        style="color: white"
        color="#1b3a4c"
        :disabled="selected.length != 1"
        @click="open_edit_dialog(false)"
      >
        <v-icon>mdi-pencil </v-icon
        ><span class="d-none d-xs-none d-sm-block">Modifier</span>
      </v-btn> -->
      <!-- <v-btn
        class="mr-1"
        style="color: white"
        color="#1b3a4c"
        :disabled="selected.length == 0"
        @click="open_delete_dialog()"
      >
        <v-icon>mdi-delete </v-icon
        ><span class="d-none d-xs-none d-sm-block">Supprimer</span>
      </v-btn> -->

      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <!--  <v-btn
              icon
              
            >
              <v-icon color="grey-lighten-1">
                mdi-cart
              </v-icon>
            </v-btn> -->
          <v-btn
            v-bind="props"
            class="mr-1"
            style="color: white"
            color="#1b3a4c"
            :disabled="selected.length == 0"
            :loading="loading_download"
            @click="get_diplome()"
          >
            <v-icon>mdi-download </v-icon>
            <span class="d-none d-xs-none d-sm-block">Diplômes</span>
          </v-btn>
        </template>
        <span>Télécharger diplômes</span>
      </v-tooltip>
    </div>
    <div>
      <MaTable
        :with_selected="true"
        v-model:selected="selected"
        v-model:items="items"
        :header="headers"
        :expanded="false"
        no_data="Aucune donnée disponible!"
      >
        <template #item(numero)="{ index }">
          <div style="text-align: center">{{ index + 1 }}</div>
        </template>
        <template #item(date_of_birth)="{ elt_item }">
          <div style="text-align: center">
            {{ $dateformatFr(elt_item.date_of_birth) }}
          </div>
        </template>
      </MaTable>
    </div>
    <div>
      <!-- <v-dialog v-model="dialog_edit" persistent>
        <v-card>
          <div></div>
          <v-card-title class="d-flex justify-space-between">
            <span class="text-h5" v-if="item.id">Modifier un candidat</span>
            <span class="text-h5" v-else>Enregistrer un candidat</span>

            <v-btn @click="dialog_edit = false" variant="plain" icon>
              <v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-form v-model="validForm" @submit.prevent="save()" class="mt-5">
              <v-autocomplete
                v-model="item.month"
                :items="months"
                item-title="name"
                item-value="slug"
                label="Mois *"
                no-data-text="Aucune donnée"
                closable-chips
                chips
                clearable
                deletable-chips
                variant="outlined"
                :rules="[(v) => !!v || required_message]"
              >
              </v-autocomplete>
              <v-text-field
                v-model="item.year"
                label="Année *"
                :rules="[(v) => !!v || required_message]"
                type="text"
                variant="outlined"
              />
              <v-text-field
                v-model="item.reference"
                label="Reference"
                type="text"
                variant="outlined"
              />
              <v-text-field
                v-model="item.description"
                label="Description"
                type="text"
                variant="outlined"
              />
              <v-text-field
                v-model="item.date_of_pv"
                label="Date du pv"
                type="date"
                variant="outlined"
              />

              <div class="d-flex justify-end">
                <v-btn
                  color="secondary"
                  text
                  @click="dialog_edit = false"
                  variant="outlined"
                  class="mr-2"
                  :disabled="loading_edit"
                >
                  Fermer
                </v-btn>
                <v-btn
                  :disabled="validForm == false"
                  color="#1b3a4c"
                  type="submit"
                  class="text-white"
                  :loading="loading_edit"
                >
                  Enregistrer
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog v-model="delete_dialog" persistent max-width="500">
        <v-card>
          <div></div>
          <v-card-title class="d-flex justify-space-between">
            <span class="text-h5">Suppression </span>

            <v-btn @click="delete_dialog = false" variant="plain" icon>
              <v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text>
            Etes vous sur de vouloir supprimer votre sélection ?
          </v-card-text>
          <div class="pb-5 px-3">
            <div class="d-flex justify-end">
              <v-btn
                color="#1b3a4c"
                text
                @click="delete_dialog = false"
                variant="outlined"
                class="mr-2"
                :disabled="loading_delete"
              >
                Non
              </v-btn>
              <v-btn
                color="red"
                type="submit"
                class="text-white"
                @click="deleteItems()"
                :loading="loading_delete"
              >
                Oui
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-dialog> -->
    </div>
  </div>
</template>

<script setup>
import { useSnackbar } from "@/store/snackbar";
const { $caxios /* $dateformatFr */ } = useNuxtApp();

useHead({ title: "Liste des candidats" });
let sn = useSnackbar();
let selected = ref([]);
let items = ref([]);
let search = ref({});
// let item = ref({});
let sessions = ref([]);
let branches = ref([]);
let centres = ref([]);
let corps = ref([]);
let departments = ref([]);
let municipalities = ref([]);
let metiers = ref([]);

// let dialog_edit = ref(false);
// let delete_dialog = ref(false);
// let loading_edit = ref(false);
// let loading_delete = ref(false)
let show_form = ref(true);
let validForm = ref(false);
let loading_item_list = ref(false);
let loading_download = ref(false);
let api = ref("/api/candidats/");
sessions.value = await $caxios(`/sessions/min`);
branches.value = await $caxios(`/systeme/branchs`);
centres.value = await $caxios(`/systeme/centres`);
corps.value = await $caxios(`/systeme/corps`);
// server/api/systeme/departments.get.ts
departments.value = await $caxios(`/systeme/departments`);
// municipalities.value = await $caxios(`/zone/municipalities`);
metiers.value = await $caxios(`/systeme/metiers`);

const headers = ref([
  {
    key: "numero",
    text: "N°",
    active_modif_column: true,
  },
  { key: "lastname", text: "Nom", active_modif_column: true },
  { key: "firstname", text: "Prénoms", active_modif_column: false },
  { key: "sex", text: "Sexe", active_modif_column: false },
  {
    key: "date_of_birth",
    text: "Date de naissance",
    active_modif_column: true,
  },
  {
    key: "place_of_birth",
    text: "Lieu de naissance",
    active_modif_column: false,
  },
  { key: "branch", text: "Branche", active_modif_column: false },
  { key: "corps", text: "Corps", active_modif_column: false },
  { key: "metier", text: "Métier", active_modif_column: false },
  { key: "centre", text: "Centre", active_modif_column: false },
  { key: "municipality", text: "Commune", active_modif_column: false },
  { key: "department", text: "Département", active_modif_column: false },
]);
const required_message = ref("Veuillez renseigner ce champ.");

async function get_diplome() {
  let res, filename = 'diplome.pdf';
  loading_download.value = true;
  // console.log('GET___')
  let tab = selected.value.map((v) => v.id);
  tab.push(0);
  try {
    res = await useFetch("/api/candidats/diplome", {
      params: {
        ids: tab,
        session_id: search.value.session_id,
      },
      onResponse({ response }) {
        // authorizationHeader.value = context.response.headers.get('authorization')
        if (response.headers) {
          filename = response.headers.get("filename");
          //  console.log(response.headers.get("filename"));
        }
      },
    });
    let file_URL = window.URL.createObjectURL(new Blob([res.data.value]));
    let file_link = document.createElement("a");
    file_link.href = file_URL;

    

    file_link.setAttribute("download", filename);
    document.body.appendChild(file_link);
    file_link.click();
    console.log(file_link);
  } catch (error) {
    console.log(error);
    sn.error(res.data.value?.error);
  }
  loading_download.value = false;
}

async function getItems() {
  let res = {};
  loading_item_list.value = true;
  selected.value = [];
  show_form.value = false;
  try {
    res = await useFetch(api, {
      body: { ...search.value },
      method: "POST",
    });
    items.value = res.data.value;
  } catch (error) {
    console.log(error);
    sn.error(res.data.value?.error);
  }
  loading_item_list.value = false;
}
/* async function deleteItems() {
  let res ={}
  loading_delete.value = true;
  try {
    res = await useFetch(api, {
      method: "DELETE",
      body: {
        ids: selected.value.map(v=>v.id)
      },
    });
    if (res.data.value?.error) throw "";

    await getItems()
    delete_dialog.value = false
    sn.success()

  } catch (error) {
    console.log(error);
    sn.error(res?.data?.value?.error);
  }
  loading_delete.value = false;
}
async function save() {
  if (!validForm.value) return;
  loading_edit.value = true;
  let res = {};
  try {
    res = await useFetch(api, {
      method: "POST",
      body: item,
    });
    if (res.data.value?.error) throw "";

    if (!item.id) {
      // Push
      // items.value.unshift(res.data.value);
    } else {
      // update
    }
    await getItems();
    dialog_edit.value = false;
    selected.value =[]
    sn.success();
  } catch (error) {
    console.log(error);
    sn.error(res?.data?.value?.error);
  }
  loading_edit.value = false;
} */

/* function open_delete_dialog() {
  delete_dialog.value = true;
} */
/* function open_edit_dialog(create) {
  if (create) {
    item.value = {};
    dialog_edit.value = true;
  } else if (Array.isArray(selected.value) && selected.value[0]) {
    item.value = Object.assign({}, selected.value[0] );
    item.value.date_of_pv =  item.value.date_of_pv ? item.value.date_of_pv.split('T')[0] : null
    dialog_edit.value = true;
  }
} */

// await getItems();
</script>
