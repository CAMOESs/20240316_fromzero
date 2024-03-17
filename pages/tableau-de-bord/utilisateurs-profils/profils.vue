<!-- @format -->

<template>
  <v-card class="" style="background-color : inherit">
    <UBreadcrumbs :items="breadcrumbs" />
    <!-- <ULoading :loading="true" /> -->
    <!-- <ULoading :loading="true" /> -->

    <!-- <v-btn @click="sn.error('Je suis la')" >
      Open error
    </v-btn>
    <v-btn @click="sn.success('Je suis la')" >
      Open success
    </v-btn> -->
    <TableUnitEditSave
      :api="api"
      :title="title"
      :update="true"
      :update_function="update"
      :columns="columns"
      :add="true"
      :add_function="add"
      :destroy="true"
      :destroy_route="destroy_route"
    >
      <template #default="props">
        <v-card-title class="d-flex justify-space-between">
          <span class="text-h5" v-if="props.item.id">Modifier un profil</span>
          <span class="text-h5" v-else>Enregistrer un profil</span>
         <!--  <v-btn @click="dialog_edit = false" variant="plain" icon>
            <v-icon>mdi-close</v-icon></v-btn
          > -->
        </v-card-title>

        <v-card-text style="overflow: scroll">
          <v-text-field
            v-model="props.item.name"
            label="Profil *"
            :rules="[(v) => !!v || 'Le nom du profil est obligatoire']"
            required
            variant="outlined"
            type="text"
          />
          <v-autocomplete
            v-model="props.item.Permissions"
            :items="permissions"
            item-title="name"
            item-value="slug"
            label="Permissions *"
            no-data-text="Aucune donnée"
            :rules="[(v) => !!v || 'Champ obligatoire']"
            multiple
            closable-chips
            chips
            deletable-chips
            variant="outlined"
            auto
          >
          </v-autocomplete>
          <v-autocomplete
            v-model="props.item.Roles"
            :items="roles"
            item-title="name"
            item-value="id"
            label="Sous-profils ( les profils qui peuvent etre créés par ce profil )"
            no-data-text="Aucune donnée"
            multiple
            closable-chips
            chips
            deletable-chips
            variant="outlined"
            auto
          >
          </v-autocomplete>
          <v-textarea
            label="Description"
            variant="outlined"
            v-model="props.item.description"
          ></v-textarea>
        </v-card-text>
      </template>
    </TableUnitEditSave>
  </v-card>
</template>

<script setup>
import { useSnackbar } from '@/store/snackbar';
const headers = useRequestHeaders(["cookie"]);
useHead({ title: "Liste des profils" });
let sn = useSnackbar();
let roles = ref([]);
let permissions = ref([]);
(({ data: roles } = await useFetch("/api/users/profils")));
(({ data: permissions } = await useFetch("/api/users/permissions")));

//  = ref(await $fetch("/api/users/permissions"));
const columns = ref([{ key: "name", text: "Nom", active_modif_column: false }]);
const api = ref("/api/users/profils");
const role_filter = ref(null);
const title = ref("Liste des profils");
const sexe = ref(["Masculin", "Féminin"]);
const destroy_route = ref("/api/users/profils");
let breadcrumbs = ref([
  {
    text: "Utilisateurs & profils",
    to: "/tableau-de-bord/utilisateurs-profils",
  },
  {
    text: "Profils",
    //  to: "/tableau-de-bord/configuration/gestion-d-acceuil",
  },
]);
/* function a(value) {
  console.log(value);
} */
async function add(value, items) {
  try {
    let ret_value = await useFetch("/api/users/profils", {
      method: "POST",
      body: value,
    });
    if (!ret_value.error.value) {
          // console.log()
          items.value.items.push(value);
          sn.success("Enregistrement réussi");
          // dialog = false
    } else {
      if(ret_value.error.value?.data?.message==="Access interdit !"){
        sn.error("Vous n'avez pas le droit d'éffectuer cet ajout !")
      } else if(ret_value.error.value?.data?.message.startsWith("Authentification requise !")){
        sn.error("Votre session est expirée, veuillez réactualiser la page !")
      }
    }

  } catch (error) {
    // console.log(error);
    sn.warning("Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer.");
    //dialog = false
  }
}
async function update(value,items_object) {
  try {
    let ret_value = await useFetch("/api/users/profils", {
      method: "POST",
      body: value,
    });
    if (!ret_value.error.value) {
          for(const iterator in items_object.value.items){
          if(items_object.value.items[iterator].id == value.id ){
              items_object.value.items[iterator] = value;
          }
        }
        sn.success("Enregistrement réussi");
        // dialog = false
    } else {
      if(ret_value.error.value?.data?.message==="Access interdit !"){
        sn.error("Vous n'avez pas le droit d'éffectuer cette modification !")
      } else if(ret_value.error.value?.data?.message.startsWith("Authentification requise !")){
        sn.error("Votre session est expirée, veuillez réactualiser la page !")
      }
    }
  } catch (error) {
    // console.log(error);
    sn.warning("Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer.");
    //dialog = false
  }
}
</script>
