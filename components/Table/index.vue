<!-- @format -->

<template>
  <input
    v-show="false"
    :value="columns"
    @input="$emit('update:columns', $event.target.value)"
  />
  <slot
    name="top_form"
    :items="items"
    :selected_object="selected_object"
    :selected="selected"
    :items_object="items_object"
    :object_display_table="object_display_table"
  >
  </slot>

  <v-card class="mx-2 my-2" v-if="display_table" elevation="0" style="background-color : inherit">
    <v-card-text>
      <v-row>
        <!-- Ajouter, modifier, enregistrer-->

        <v-col cols="12" style="text-align: left">
          <!-- Ajouter -->
          <ButtonDialog
          :width="add_dialog_width"
          :selected="selected"
            :name_of_button="name_of_button_add?name_of_button_add:'Ajouter'"
            :disabled="func_controle_disabled_add_button?func_controle_disabled_add_button(selected):selected.length !== 0"
            v-if="add"
            :icon_of_button="'mdi mdi-plus-outline'"
            :click_come_to_acess_update="click_come_to_acess_update"
          >
            <template #button_text="props">
              <slot name="save_replacement" :item="props.item"> </slot>
            </template>
            <template #button_button="props">
              <v-btn
                color="black white--text"
                @click="valid_add_function(props)"
              >
                Enregistrer
              </v-btn>
            </template>
          </ButtonDialog>

          <!-- Modifier -->

          <ButtonDialog
          :width="add_dialog_width"
            :selected="selected"
            v-if="update"
            :disabled="func_controle_disabled_update_button?func_controle_disabled_update_button(selected):selected.length !== 1"
            :name_of_button="name_of_button_edit?name_of_button_edit:'Modifier'"
            :icon_of_button="'mdi mdi-circle-edit-outline'"
            :click_come_to_acess_update="click_come_to_acess_update"
          >
            <template #button_text="props">
              <input id="id" v-model.number="props.item.id" type="hidden" />
              <slot name="edit_replacement" :item="props.item"> </slot>
            </template>
            <template #button_button="props">
              <v-btn
                color="black white--text"
                @click="valid_update_function(props)"
              >
                Enregistrer
              </v-btn>
            </template>
          </ButtonDialog>

          <!-- Supprimer -->
          <v-dialog transition="dialog-bottom-transition"  max-width="500">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                class="mr-1"
                style="color: white"
                color="#1b3a4c"
                v-if="destroy"
                :disabled="func_controle_disabled_delete_button?func_controle_disabled_delete_button(selected):!selected.length"
              >
                <v-tooltip activator="parent" location="top"
                  >{{name_of_button_delete?name_of_button_delete:'Supprimer'}}</v-tooltip
                >
                <v-icon> mdi mdi-delete-outline </v-icon
                ><span class="d-none d-xs-none d-sm-block">{{name_of_button_delete?name_of_button_delete:'Supprimer'}}</span>
              </v-btn>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card width="350">
                <v-card-text class="text-center">
                  Êtes-vous sûr ? <br />
                  Vous ne pourrez pas revenir en arrière ! </v-card-text
                ><br />
                <v-card-actions class="justify-center">
                  <!-- <v-spacer></v-spacer> -->
                  <v-btn variant="text" @click="isActive.value = false"
                    >Retour</v-btn
                  >
                  <v-btn
                    @click="
                      destroy_();
                      isActive.value = false;
                    "
                    style="color: white; background-color: red !important"
                    >{{text_of_validation_on_pop_up_confirm_delete?text_of_validation_on_pop_up_confirm_delete:'OUI, SUPPRIMER!'}} 
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>

        <!--Boutons complémentaires-->
        <v-col cols="12" class="pa-0">
          <slot
            name="table_buttons"
            :items="items"
            :selected_object="selected_object"
            :selected="selected"
            :items_object="items_object"
            :object_display_table="object_display_table"
          >
          </slot>
        </v-col>

        <!--titre-->
        <v-col cols="12">
          <div>
            {{ title }}
          </div>
        </v-col>
      </v-row>
    </v-card-text>

    <!--Rechercher-->
    <div class="row mx-3">
      <v-row>
        <v-col cols="12" class="pb-0">
          <v-text-field
            v-model="search_text"
            label="Rechercher"
            class=""
            variant="outlined"
          />
        </v-col>
        <v-col class="d-flex justify-center pt-1 mb-5" cols="12">
          <v-btn color="#1b3a4c" class="text-white" @click="search"
            >Rechercher</v-btn
          >
        </v-col>
      </v-row>
    </div>

    <!--table-->
    <!-- selectable="true" -->
    <!-- sticky-header -->
    <!--     <va-data-table v-model="selected" :columns="columns" :items="items"
      selectable :filter="filter" @filtered="filtered = $event.items" class="mx-2"
      striped no-data-label="Aucune donnée disponible!" style="height:auto;"  > -->
    <!--  <va-data-table
      v-model="selected"
      :columns="columns"
      :items="items"
      selectable
      :filter="filter"
      class="mx-2"
      striped
      no-data-label="Aucune donnée disponible!"
      style="height: auto"
      no-data-html="Aucun élément trouvé."
      no-data-filtered-html="Aucun élément correspondant."
    > -->
    <!-- <template #cell:can_auth="{ row }">
      </template> -->
    <!-- <template v-for="element in columns_" #[`header(${element.key})`]>
        <slot :name="`header(${element.key})`">
          {{ element.text }}
        </slot>
      </template>
      <template
        v-for="element in columns_"
        #[`cell(${element.active_modif_column?element.key:defaultSlot})`]="{
          value,
        }"
      >
        <slot :name="`cell(${element.key})`" 
        :value="value" 
        :items_object="items_object" 
        :selected_object="selected_object"
        :object_display_table="object_display_table"
        > </slot>
      </template>
    </va-data-table> -->
    <MaTable
      :with_selected="with_selected==false?false:true"
      v-model:selected="selected"
      v-model:items="items"
      :header="columns"
      v-model:filter="filter"
      no_data="Aucun élément trouvé."
      no_data_to_search="Aucun élément correspondant."
    >
      <template v-for="element in columns_" #[`header(${element.key})`]>
        <slot :name="`header(${element.key})`"> </slot>
      </template>
      <template
        v-for="element in columns_"
        #[`item(${element.active_modif_column?element.key:defaultSlot})`]="{item,elt_item}"
      >
        <slot
          :name="`cell(${element.key})`"
          :items_object="items_object"
          :value="item"
          :elt_item="elt_item"
          :selected_object="selected_object"
          :object_display_table="object_display_table"
        >
        </slot>
      </template>
    </MaTable>
  </v-card>
</template>

<script setup>
//import message from "./popup-message";
import { useSnackbar } from "@/store/snackbar";
import ButtonDialog from "./ButtonDialog.vue";

const headers = useRequestHeaders(["cookie"]);
defineEmits(['update:columns'])
const props = defineProps([
  "title",
  "api",
  "columns",
  "update",
  "add",
  "destroy",
  "destroy_route",
  "add_function",
  "update_function",
  "item_will_be_send",
  "click_come_to_acess_update",
  "destroy_function",
  "id_demande_conge",
  "name_of_button_add",
  "name_of_button_edit",
  "name_of_button_delete",
  "func_controle_disabled_add_button",
  "func_controle_disabled_delete_button",
  "func_controle_disabled_update_button",
  "text_of_validation_on_pop_up_confirm_delete",
  "with_selected",
  "add_dialog_width"

]);
const columns_ = ref([{}]);
const defaultSlot = "";
const showModal = ref(false);
const dialog = ref(false); /* item = ref({}), */
const perPage = ref(10);
const currentPage = ref(1);
const selected = ref([]);
const selected_object = ref({ selected: selected });
let items = ref([]);
let display_table = ref(true);
let object_display_table = ref({ display_table: display_table });
//initialisation
let sn = useSnackbar();
let data;

//search
const search_text = ref("");
const filter = ref("");
//console.log(items);



if (props.item_will_be_send) {
  display_table.value = false;
  items.value = [];
} else {
  display_table.value = true;
  data = await useFetch(props.api);
  // console.log("data");
  // console.log(data.data.value);
  items.value = Array.isArray(data.data.value) ? data.data.value : [];
}

if(!isNaN(parseInt(props.id_demande_conge?.year_id))){
  display_table.value = true;
  selected.value = []
  let req_params = props.id_demande_conge;
  let req_params_ = props.id_demande_conge.year_id;
  let params
  try {
    // console.log("req_params")
    // console.log(req_params)
    let res = await useFetch("/api/mes_conges_permissions/", {
      params: req_params,
    });
    // console.log("resres")
    // console.log(res)
    if (res.error.value) throw new Error(res.error.value);
      items.value = res.data.value.map((valu) => {
       return {
         ...valu,
       };
     });
    //  let ret = await useFetch("/api/demande-conge/personal-schools", {
    //               params: req_params,
    //              });
    //             if (ret.error.value) throw new Error(ret.error.value);

    //             else personal_schools.value = ret.data.value

  } catch (error) {
    // console.log(error)
    items.value = [];
  }
}


//search function
function search() {
  filter.value = search_text.value;
}
onMounted(async () => {
  columns_.value = props.columns;
  // items.value = [{id:1, email:"mamadoubahmbs4@gmail.com", firstname:"Mamadou", profil:"SuperClient"},
  // {id:2, email:"carlos@gmail.com", firstname:"Carlos", profil: "SuperClient1"},
  // {id:3, email:"habib@gmail.com", firstname:"Habib",profil: "SuperClient2"},
  // {id:4, email:"jules@gmail.com", b:[1,2],profil: "SuperClient3"}]

});

let snackbar = ref({
  status: false,
  type: "",
  text: "",
  timeout: -1,
});

const items_object = ref({ items: items });
async function valid_add_function(v) {
  // console.log("Fonction d'ajout. Avant test des données");
  if ((await v.form.validate()).valid) {
    // console.log("items_object 1");
    // console.log(items_object);
    //console.log("Fonction d'ajout.  test des données réussis.")
    if (typeof props.add_function == "function")
      await props.add_function(v.item, items_object,selected_object);
    else await default_add_function(v.item, items_object, selected_object);
    // console.log("item_object")
    // console.log(v.item_object.item_object)
    v.item_object.item_object = {};
    v.dialog.d = false;
  }
}

async function valid_update_function(v) {
  // console.log("Fonction de modification. Avant test des données");
  // console.log(v);
  console.log("selected_object")
  console.log(selected_object)
  if ((await v.form.validate()).valid) {
    // console.log("items_object 1");
    // console.log(items_object);
    // console.log("Fonction de modification.  test des données réussis.");
    if (typeof props.add_function == "function")
      await props.update_function(v.item, items_object);
    else await default_update_function(v.item, items_object,{item_object:v.item_object});
    for(const iterator in items_object.value.items){
      if(items_object.value.items[iterator].id == v.item_object.item_object.id ){
        selected.value = [items_object.value.items[iterator]];
      }
    }

    v.item_object.item_object = {};
    v.dialog.d = false;
  }
}
async function default_add_function(value, A /** correspond a items */) {
  let res_error;
  let data ;
  try {
    data =  await useFetch(props.api, {
      method: "POST",
      body: value,
    });


    console.log("data.data.value.error ==>>>")
    console.log(data.data.value.error)
    if (data.error.value  ) {
      res_error = data.error.value;
      throw "";
    }

    if(data.data.value.error) throw "";
    items_object.value.items.push(data.data.value);
    sn.success("Enregistrement réussi");
    value = {};
  } catch (error) {
    if (res_error) {
      // console.log("res_error");
      // console.log("res_error");
      // console.log(res_error);
    }

    console.error(error);
    if(data.data.value.error)
      sn.error(data.data.value.error)
    else
      sn.error("Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer.");
  }
}

async function default_update_function(value, A /** correspond a items */) {
  let res_error;
  try {
    let data = await useFetch(props.api, {
      method: "POST",
      body: value,
    });
    if (data.error.value) {
      res_error = data.error.value;
      throw "";
    }
    for (const iterator in items_object.value.items) {
      if (items_object.value.items[iterator].id == value.id) {
        items_object.value.items[iterator] = value;
      }
    }
    sn.success("Enregistrement réussi");
    value = {};
  } catch (error) {
    if (res_error) {
      // console.log("res_error");
      // console.log("res_error");
      // console.log(res_error);
    }

    console.error(error);
    sn.error("Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer.");
  }
}
async function destroy_() {
  if(!props.destroy_function){
    // console.log("aselected");
    const selected_ = selected.value.map((v) => v.id);
    // console.log(selected_);
    let ret_value
    try {
      // console.log("abdfsd");
      // console.log(props.destroy_route + "k");
      ret_value = await useFetch(props.destroy_route, {
        method: "DELETE",
        body: selected_,
      });

      if(ret_value.data.value.error) throw ""
      if (!ret_value.error.value) {
          let tab = items.value.filter((v) => {
            return !selected_.includes(v.id);
          });
          items.value = tab;
          // console.log("items1");
          selected.value = [];
          sn.success("Réussite de la suppression ! ");
      } else {
        if(ret_value.error.value?.data?.message==="Access interdit !"){
          sn.error("Vous n'avez pas le droit d'éffectuer cette suppression !")
        } else if(ret_value.error.value?.data?.message.startsWith("Authentification requise !")){
          sn.error("Votre session est expirée, veuillez réactualiser la page !")
        }
      }
      // console.log("items2");
    } catch (error) {
      // console.log(error);
      selected.value = [];
      if(ret_value.data.value.error) sn.error(ret_value.data.value.error)
      else
      sn.error();
    }

    // useRouter().push(props.index_route);
    // await navigateTo(props.index_route);
    // this.$router.replace("/dashboard");
    //this.$forceUpdate();
  } else{
    props.destroy_function(items_object, selected_object);
  }

}
</script>

<style>
.table-example--pagination {
  display: flex;
  justify-content: center;
}

.va-data-table__table,
.va-data-table__table-th,
.va-data-table__table-td {
  border: 1px solid #efe3e3f2 !important;
  border-collapse: collapse !important;
}
.va-data-table__table-thead {
  background-color: #1b3a4c;
  color: white !important;
}
.va-data-table__table-th {
  /* color: white !important; */
  font-weight: bold;
  text-align: center !important;
}
table,
th,
td {
  border: 1px solid #1e1a1af2 !important;
  border-collapse: collapse !important;
}
.va-checkbox .va-checkbox__square {
  border: 1px solid grey;
}
</style>
