<!-- @format -->

<template>
  <div class="mt-4">
    <div>
      <v-btn
        class="mr-1"
        style="color: white"
        color="#1b3a4c"
        @click="open_edit_dialog(true)"
      >
        <v-icon>mdi-plus</v-icon>
        <span class="d-none d-xs-none d-sm-block">Ajouter</span>
      </v-btn>
      <v-btn
        class="mr-1"
        style="color: white"
        color="#1b3a4c"
        :disabled="selected.length != 1"
        @click="open_edit_dialog(false)"
      >
        <v-icon>mdi-pencil </v-icon
        ><span class="d-none d-xs-none d-sm-block">Modifier</span>
      </v-btn>
      <v-btn
        class="mr-1"
        style="color: white"
        color="#1b3a4c"
        :disabled="selected.length == 0"
        @click="open_delete_dialog()"
      >
        <v-icon>mdi-delete </v-icon
        ><span class="d-none d-xs-none d-sm-block">Supprimer</span>
      </v-btn>
    </div>
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
      <template #item(session)="{ elt_item }">
        <div style="text-align: center">
          {{
            elt_item.Month && elt_item.Month.name ? elt_item.Month.name : "-"
          }}
          {{ elt_item && elt_item.year ? elt_item.year : "-" }} 
        </div>
      </template>
      <template #item(date_of_pv)="{ elt_item }">
        <div style="text-align: center">
          {{ $dateformatFr(elt_item.date_of_pv) }}
        </div>
      </template>
    </MaTable>
    <div>
      <v-dialog v-model="dialog_edit" persistent max-width="500" >
        <v-card style="border-radius: 15px;" class="pt-4">
          <div></div>
          <v-card-title class="d-flex justify-space-between">
            <span class="text-h5" v-if="item.id">Modifier une session</span>
            <span class="text-h5" v-else>Enregistrer une session</span>

            <v-btn @click="dialog_edit = false" variant="plain" icon>
              <v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-form v-model="validForm" @submit.prevent="save()" class="mt-0 pt-0">
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
                density="compact"
              >
              </v-autocomplete>
              <v-text-field
                v-model="item.year"
                label="Année *"
                :rules="[(v) => !!v || required_message]"
                type="text"
                variant="outlined"
                density="compact"
              />
              <v-text-field
                v-model="item.reference"
                label="Reference"
                type="text"
                variant="outlined"
                density="compact"
              />
              <v-text-field
                v-model="item.description"
                label="Description"
                type="text"
                variant="outlined"
                density="compact"
              />
              <v-text-field
                v-model="item.date_of_pv"
                label="Date du pv"
                type="date"
                variant="outlined"
                density="compact"
              />

              <div class="d-flex justify-end pb-5">
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
      </v-dialog>
    </div>
  </div>
</template>

<script setup>
import { useSnackbar } from "@/store/snackbar";
const { $caxios, $dateformatFr } = useNuxtApp();

useHead({ title: "Liste des sessions" });
let sn = useSnackbar();
let selected = ref([]);
let items = ref([]);
let item = ref({});
let months = ref([]);
let dialog_edit = ref(false);
let delete_dialog = ref(false);
let loading_edit = ref(false);
let loading_delete = ref(false)
let loading_user_list = ref(false);
let validForm = ref(false);
let api = ref("/api/sessions/")
months.value = await $caxios(`/sessions/months`);
const headers = ref([
  {
    key: "numero",
    text: "N°",
    active_modif_column: true,
  },
  { key: "session", text: "Session", active_modif_column: true },
  { key: "reference", text: "Référence", active_modif_column: false },
  { key: "date_of_pv", text: "Date de PV", active_modif_column: true },
  { key: "description", text: "Description", active_modif_column: false },
]);
const required_message = ref("Veuillez renseigner ce champ.");

async function getItems() {
  let res = {};
  loading_user_list.value = true;
  selected.value = [];
  try {
    res = await useFetch(api);
    items.value = res.data.value;
  } catch (error) {
    console.log(error);
    sn.error(res.data.value?.error);
  }
  loading_user_list.value = false;
}
async function deleteItems() {
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
}

function open_delete_dialog() {
  delete_dialog.value = true;
}
function open_edit_dialog(create) {
  if (create) {
    item.value = {};
    dialog_edit.value = true;
  } else if (Array.isArray(selected.value) && selected.value[0]) {
    item.value = Object.assign({}, selected.value[0] );
    item.value.date_of_pv =  item.value.date_of_pv ? item.value.date_of_pv.split('T')[0] : null
    dialog_edit.value = true;
  }
}

await getItems();
</script>
