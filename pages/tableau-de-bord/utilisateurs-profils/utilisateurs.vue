<!-- @format -->

<template>
  <div class="mt-4">
    <UBreadcrumbs :items="breadcrumbs" />
    <div
      style=" 
      position: -webkit-sticky;
      position: sticky;
      top: 100px;"
    >
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
      <!-- <template></template> -->
      <template #item(numero)="{ index }">
        <div style="text-align: center">{{ index + 1 }}</div>
      </template>
      <template #item(role_user)="{ elt_item }">
        <div style="text-align: center">{{ elt_item.role_to_one_user }}</div>
      </template>
    </MaTable>
    <template>
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination
                  v-model="page"
                  class="my-4"
                  :length="2"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </template>
    <div>
      <v-dialog v-model="dialog_edit" persistent max-width="500">
        <v-card style="border-radius: 15px" class="pt-4">
          <div></div>
          <v-card-title class="d-flex justify-space-between">
            <span class="text-h5" v-if="item.id">Modifier un utilisateur</span>
            <span class="text-h5" v-else>Enregistrer un utilisateur</span>

            <v-btn
              @click="dialog_edit = false"
              variant="plain"
              icon
              :disabled="loading_save"
            >
              <v-icon>mdi-close</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-form v-model="validForm" @submit.prevent="save()" class="mt-2">
              <v-text-field
                v-model="item.email"
                label="Email *"
                :rules="[(v) => /.@./.test(v) || required_message]"
                placeholder="email@gmail.com"
                type="email"
                variant="outlined"
              />
              <!-- :items="[{slug:'a', name:'b'}]" -->
              <v-autocomplete
                v-model="item.Roles"
                :items="roles"
                item-title="name"
                item-value="slug"
                label="Profils *"
                no-data-text="Aucune donnée"
                multiple
                closable-chips
                chips
                clearable
                deletable-chips
                variant="outlined"
                :rules="[(v) => v.length > 0 || required_message]"
              >
              </v-autocomplete>
              <v-text-field
                v-model="item.lastname"
                label="Nom *"
                :rules="[(v) => !!v || required_message]"
                type="text"
                variant="outlined"
              />
              <v-text-field
                v-model="item.firstname"
                label="Prénom(s) *"
                :rules="[(v) => !!v || required_message]"
                type="text"
                variant="outlined"
              />
              <v-select
                v-model="item.sex"
                :items="sexe"
                :rules="[(v) => !!v || required_message]"
                clearable
                deletable-chips
                variant="outlined"
                label="Sexe *"
              ></v-select>
              <v-text-field
                v-model="item.date_of_birth"
                label="Date de naissance *"
                :rules="[(v) => !!v || required_message]"
                type="date"
                variant="outlined"
              />
              <v-text-field
                v-model="item.place_of_birth"
                label="Lieu de naissance *"
                :rules="[(v) => !!v || required_message]"
                type="text"
                variant="outlined"
              />
              <!-- <v-text-field
                v-model="item.nationality"
                label="Nationalité *"
                placeholder="Bénin"
                :rules="[(v) => !!v || required_message]"
                type="text"
                variant="outlined"
              /> -->
              <v-autocomplete
                v-model="item.nationality"
                :items="countries"
                label="Nationalité *"
                no-data-text="Aucune donnée"
                closable-chips
                clearable
                variant="outlined"
                :rules="[(v) => !!v || required_message]"
              >
              </v-autocomplete>
              <v-text-field
                v-model="item.phone_number"
                label="Téléphone *"
                :rules="[(v) => !!v || required_message]"
                type="text"
                variant="outlined"
              />
              <v-text-field
                v-model="item.password"
                :label="item.id ? 'Mot de passe' : 'Mot de passe *'"
                :rules="item.id ? [] : [(v) => !!v || required_message]"
                type="password"
                variant="outlined"
              />
              <v-text-field
                v-model="item.confirm_password"
                :label="
                  item.id
                    ? item.password
                      ? 'Confirmation du mot de passe *'
                      : 'Confirmation du mot de passe'
                    : 'Confirmation du mot de passe *'
                "
                :rules="[
                  (v) =>
                    item.password === v ||
                    (item.confirm_password
                      ? 'Le mot de passe ne correspond pas'
                      : required_message),
                ]"
                type="password"
                variant="outlined"
              />
              <div class="d-flex justify-end pb-3">
                <v-btn
                  color="secondary"
                  text
                  @click="dialog_edit = false"
                  variant="outlined"
                  class="mr-2"
                  :disabled="loading_save"
                >
                  Fermer
                </v-btn>
                <v-btn
                  :disabled="validForm == false"
                  color="#1b3a4c"
                  type="submit"
                  class="text-white"
                  :loading="loading_save"
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
              >
                Fermer
              </v-btn>
              <v-btn
                color="red"
                type="submit"
                class="text-white"
                @click="destroy()"
              >
                <!--   -->
                Supprimer
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

useHead({ title: "Liste des utilisateurs" });
let sn = useSnackbar();
let selected = ref([]);
let items = ref([]);
let item = ref({});
let roles = ref([]);
let dialog_edit = ref(false);
let delete_dialog = ref(false);
let loading_user_list = ref(false);
let loading_save = ref(false);
let validForm = ref(false);
let total_page = ref(1);
let page = ref(1);
let breadcrumbs = ref([
  {
    text: "Utilisateurs & profils",
    to: "/tableau-de-bord/utilisateurs-profils",
  },
  {
    text: "Utilisateurs",
    //  to: "/tableau-de-bord/configuration/gestion-d-acceuil",
  },
]);
let countries = ref([]);
const headers = ref([
  {
    key: "numero",
    text: "N°",
    active_modif_column: true,
  },
  { key: "lastname", text: "Nom", active_modif_column: false },
  { key: "firstname", text: "Prénom(s)", active_modif_column: false },
  { key: "phone_number", text: "Téléphone", active_modif_column: false },
  { key: "email", text: "Email", active_modif_column: false },
  { key: "role_user", text: "Profil", active_modif_column: true },
  { key: "login_at", text: "Dernier accès", active_modif_column: true },
  /* {key:"is_change_password",text:"A changé son mot de passe", active_modif_column:true}, */
  { key: "can_auth", text: "Statut", active_modif_column: true },
]);
const api = ref("/api/users-pagination");

const title = ref("Liste des utilisateurs");
const sexe = ref(["M", "F"]);
const required_message = ref("Veuillez renseigner ce champ.");

({ data: roles } = await useFetch("/api/users/profils"));
({ data: countries } = await useFetch("/api/zone/countries"));

async function getUsers(page_) {
  let res = {};
  loading_user_list.value = true;
  selected.value = [];
  try {
    res = await useFetch("/api/users/", {
      params: {
        page: page_,
      },
    });
    if (res.data.value?.error) throw "";
    items.value = res.data.value.data;
    total_page.value = res.data.value.length;
    page.value = page_;
    // items.value = res.data.value;
  } catch (error) {
    console.log(error);
    sn.error(res.data.value?.error);
  }
  loading_user_list.value = false;
}

async function save() {
  if (!validForm.value) return;
  loading_save.value = true;

  let res,
    tab = [];
  try {
    if (Array.isArray(item.value.Roles) && item.value.Roles.length) {
      tab = item.value.Roles.map((v) => {
        return v?.slug ? v.slug : v;
      });
    }

    res = await useFetch("/api/users", {
      method: "POST",
      body: {
        ...item.value,
        Roles: tab,
      },
    });

    if (res?.data?.value?.error) throw "";

    // item.value.role_to_one_user = item.value.Roles.join() + ",";
    if (!item.value?.id) {
      items.value.push(res.data.value);
    } else {
      // Replace
      const index = items.value.findIndex((v) => v.id == selected.value[0]);
      if (index !== -1) {
        items.value = res.data.value;
      }
    }
    dialog_edit.value = false;
    sn.success("Enregistrement réussi");
  } catch (error) {
    console.log(error);
    sn.error(res?.data?.value?.error);
  }
  loading_save.value = false;
}
async function destroy() {
let res
  try{

    res = await useFetch("/api/users/", {
      method : "DELETE",
      body : [ ...selected.value.map(v=> v.id)]
    });
    if(res.data.value?.error) throw ""
    for (const s of selected.value) {
      items.value = items.value.filter(v => v.id != s.id)
    }



    sn.success("Suppression effectuée avec succès.")
    delete_dialog.value = false
  } catch(error){
    console.log(error)
    sn.error(res.data.value?.error)
  }
}
async function lock(value, items_object) {
  try {
    const length_value = value.length;
    const tab_value = new Array(value.length);
    for (let i = 0; i < length_value; ++i) {
      tab_value[i] = value[i].id;
    }
    let ret_value = await useFetch("/api/lock-user", {
      method: "POST",
      body: tab_value,
    });

    if (!ret_value.error || !ret_value.error.value) {
      //console.log("here")
      for (const iterator in items_object.items) {
        for (const iter of tab_value) {
          if (items_object.items[iterator].id == iter) {
            items_object.items[iterator].can_auth = "false";
          }
        }
      }
      sn.success("Réussite du blockage");
    } else {
      if (ret_value.error.value?.data?.message === "Access interdit !") {
        sn.error(
          "Vous ne disposez pas des droits pour effectuer un blockage de compte !"
        );
      } else if (
        ret_value.error.value?.data?.message.startsWith(
          "Authentification requise !"
        )
      ) {
        sn.error("Votre session est expirée, veuillez réactualiser la page !");
      }
    }
  } catch (error) {
    // console.log(error)
    sn.error(
      "Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer."
    );
  }
}
async function lock_open(value, items_object) {
  try {
    const length_value = value.length;
    const tab_value = new Array(value.length);
    for (let i = 0; i < length_value; ++i) {
      tab_value[i] = value[i].id;
    }
    let ret_value = await useFetch("/api/lock-open-user", {
      method: "POST",
      body: tab_value,
    });

    if (!ret_value.error || !ret_value.error.value) {
      //    console.log("here")
      for (const iterator in items_object.items) {
        for (const iter of tab_value) {
          if (items_object.items[iterator].id == iter) {
            items_object.items[iterator].can_auth = "true";
          }
        }
      }
      sn.success("Réussite de l'activation");
    } else {
      if (ret_value.error.value?.data?.message === "Access interdit !") {
        sn.error(
          "Vous ne disposez pas des droits pour effectuer une activation de compte !"
        );
      } else if (
        ret_value.error.value?.data?.message.startsWith(
          "Authentification requise !"
        )
      ) {
        sn.error("Votre session est expirée, veuillez réactualiser la page !");
      }
    }
  } catch (error) {
    // console.log(error)
    sn.error(
      "Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer."
    );
  }
}
function momentFromNow(v) {
  let value = new Date(v);
  // console.log(value)
  let d_now = new Date();
  // console.log(d_now.getTime() - value.getTime())
  let years_ = Math.floor(
    (d_now.getTime() - value.getTime()) / (86400000 * 365)
  );
  // console.log("years_")
  // console.log(years_)
  if (years_ >= 1) {
    return years_ == 1 ? years_ + " an" : years_ + " ans";
  } else {
    let month_ = Math.floor(
      (d_now.getTime() - value.getTime()) / (86400000 * 30)
    );
    if (month_ >= 1) {
      return month_ + " mois";
    } else {
      let day_ = Math.floor((d_now.getTime() - value.getTime()) / 86400000);
      if (day_ >= 1) {
        return day_ == 1 ? day_ + " jour" : day_ + " jours";
      } else {
        let hours_ = Math.floor((d_now.getTime() - value.getTime()) / 3600000);
        if (hours_ >= 1) {
          return hours_ == 1 ? hours_ + " heure" : hours_ + " heures";
        } else {
          let minutes_ = Math.floor(
            (d_now.getTime() - value.getTime()) / 60000
          );
          if (minutes_ >= 1) {
            return minutes_ == 1 ? minutes_ + " minute" : minutes_ + " minutes";
          } else {
            return "Il y a quelques secondes";
          }
        }
      }
    }
  }
}
function open_delete_dialog() {
  delete_dialog.value = true;
}
function open_edit_dialog(create) {
  console.log("create");
  console.log(create);
  if (create) {
    dialog_edit.value = true;
    item.value = {
      Roles: [],
    };
  } else if (Array.isArray(selected.value) && selected.value[0]) {
    item.value = selected.value[0];
    dialog_edit.value = true;
  }
}
async function add(value, items_object) {
  try {
    let ret_value = await $fetch("/api/users", {
      method: "POST",
      body: value,
    });

    if (!ret_value.error || !ret_value.error.value) {
      value.role_to_one_user = value.Roles.join() + ",";
      items_object.value.items.push(value);
      sn.success("Enregistrement réussi");
    } else {
      if (ret_value.error.value?.data?.message === "Access interdit !") {
        sn.error("Vous n'avez pas le droit d'éffectuer cet ajout !");
      } else if (
        ret_value.error.value?.data?.message.startsWith(
          "Authentification requise !"
        )
      ) {
        sn.error("Votre session est expirée, veuillez réactualiser la page !");
      } else if (ret_value.error.value?.data?.message.startsWith("unicity")) {
        sn.error("Un utilisateur existe déjà avec cet e-mail!");
      }
    }
  } catch (error) {
    // console.log(error)
    sn.error(
      "Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer."
    );
  }
}

async function update(value, items_object) {
  // console.log(value)
  try {
    if (
      Array.isArray(value.Roles) &&
      value.Roles.length &&
      typeof value.Roles[0] === "object"
    ) {
      let tab = value.Roles.map((v) => v.slug);
      value.Roles = tab;
    }
    let ret_value = await useFetch("/api/users", {
      method: "POST",
      body: value,
    });
    if (!ret_value.error || !ret_value.error.value) {
      value.role_to_one_user = value.Roles.join() + ",";
      for (const iterator in items_object.value.items) {
        if (items_object.value.items[iterator].id == value.id) {
          items_object.value.items[iterator] = value;
        }
      }
      // console.log("value")
      // console.log(value)
      sn.success("Enregistrement réussi");
    } else {
      if (ret_value.error.value?.data?.message === "Access interdit !") {
        sn.error("Vous n'avez pas le droit d'éffectuer cet ajout !");
      } else if (
        ret_value.error.value?.data?.message.startsWith(
          "Authentification requise !"
        )
      ) {
        sn.error("Votre session est expirée, veuillez réactualiser la page !");
      }
    }
  } catch (error) {
    // console.log(error)
    sn.error(
      "Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer."
    );
  }
}

await getUsers(1);
</script>
