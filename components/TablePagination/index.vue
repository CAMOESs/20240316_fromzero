
<template>
  <v-card class="mx-2 my-2">
    <v-card-text>
      <v-row>
        <!-- Ajouter, modifier, enregistrer-->
        <v-col cols="12" style="text-align: left">
          <!-- Ajouter -->
          <ButtonDialog
            :name_of_button="'Ajouter'"
            :disabled="selected.length!==0"
            :icon_of_button="'mdi mdi-plus-outline'"
          > 
            <template #button_text="props" >
              <slot name="save_replacement" :item="props.item">
              </slot>
            </template> 
            <template #button_button="props"> 
              <v-btn color="black white--text"  @click="valid_add_function(props)" >
                Enregistrer
              </v-btn>
            </template>
          </ButtonDialog>

          <!-- Modifier -->  
          
          <ButtonDialog
            :selected="selected"
            v-if="update"
            :disabled="selected.length!==1"
            :name_of_button="'Modifier'"
            :icon_of_button="'mdi mdi-circle-edit-outline'"
            :click_come_to_acess_update="click_come_to_acess_update"
          >
            <template #button_text="props"> 
              <input id="id" v-model.number="props.item.id" type="hidden" />
              <slot name="edit_replacement" :item="props.item">
              </slot>
            </template> 
            <template #button_button="props">
              <v-btn color="black white--text" @click="valid_update_function(props) "  >
                Enregistrer
              </v-btn>
            </template> 
          </ButtonDialog>
          
          <!-- Supprimer -->
          <v-dialog transition="dialog-bottom-transition" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="mr-1" style="color:white;" color="#1b3a4c" v-if="destroy" :disabled="!selected.length">
                <v-tooltip activator="parent" location="top">Supprimer</v-tooltip>
                <v-icon> mdi mdi-delete-outline </v-icon><span class="d-none d-xs-none d-sm-block">Supprimer</span>
              </v-btn>
            </template>
            <template v-slot:default="{ isActive }">
              <v-card width="350">
                <v-card-text class="text-center">
                  Êtes-vous sûr ? <br />
             Vous ne pourrez pas revenir en arrière ! </v-card-text><br />
                <v-card-actions class="justify-center">
                  <!-- <v-spacer></v-spacer> -->
                  <v-btn variant="text" @click="isActive.value = false">Retour</v-btn>
                  <v-btn @click="destroy(); isActive.value=false;" style="color: white; background-color: red!important">OUI, SUPPRIMER!
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>

        <!--Boutons complémentaires-->
         <v-col cols="12" class="pa-0">
        <slot name="table_buttons" :items="items" :selected="selected" :items_object="items_object">
        </slot>
        </v-col>

        <!--titre-->
        <v-col cols="12" >
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
          <v-text-field v-model="search_text" label="Rechercher" class="" variant="outlined" />
        </v-col>
        <v-col class="d-flex justify-center pt-1 mb-5" cols="12">
          <v-btn color="#1b3a4c" class="text-white" @click="search" >Rechercher</v-btn>
        </v-col>
      </v-row>
    </div>

    <!--table-->
    <!-- selectable="true" -->
    <!-- sticky-header -->
     <!-- <va-data-table v-model="selected" :columns="columns" :items="items"
      selectable  class="mx-2"
      striped no-data-label="Aucune donnée disponible!" style="height: 100vh;" virtual-scroller 
     :wrapper-size="500"  > -->
      <!-- <template #cell:can_auth="{ row }">
      </template> -->
      <!-- <template v-for="element in columns_" #[`header(${element.key})`]>
        <slot  :name="`header(${element.key})`">
          {{element.text}} 
        </slot>
      </template>
      <template v-for="element in columns_" #[`cell(${element.active_modif_column?element.key:defaultSlot})`]="{value}" >
        <slot :name="`cell(${element.key})`" :value="value">
        </slot>
      </template>
    </va-data-table> -->
    
    <MaTable 
        :with_selected="true"
        v-model:selected="selected"
        v-model:items="items"
        :header="columns"
        no_data="Aucune donnée disponible!"
    >
      <template v-for="element in columns_" #[`header(${element.key})`]>
        <slot  :name="`header(${element.key})`">
        </slot>
      </template>
      <template v-for="element in columns_" #[`item(${element.active_modif_column?element.key:defaultSlot})`]="{item}" >
        <slot :name="`cell(${element.key})`" :value="item">
        </slot>
      </template>
    </MaTable>
    <v-pagination v-model="page" @update:modelValue="pagination" :length="length"></v-pagination>
  </v-card>
</template>
  
<script setup>
//import message from "./popup-message";
import { useSnackbar } from '@/store/snackbar'
import ButtonDialog from './ButtonDialog.vue'

const headers = useRequestHeaders(["cookie"]);

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
  "items_of_parent",
  "click_come_to_acess_update"
]);
const columns_ = ref([{}]); 
const defaultSlot=""
const showModal = ref(false);
const dialog = ref(false) /* item = ref({}), */ 
const perPage = ref(10)
const currentPage = ref(1)
const filter = ref("")
const selected = ref([]) 

//recherche
const search_text=ref("")
//pagination
const length=ref(1);
const page = ref(1);
// console.log("page:",page.value)
let items= ref([]);
//initialisation
 
let data;
//console.log(items);
if(props.item_will_be_send){
  items.value=props.items_of_parent;
} else{
  // console.log(props.api+"?page="+page.value+"&search_text="+search_text.value)
  data = await useFetch(props.api+"?page="+page.value+"&search_text="+search_text.value);
    // console.log("data")
    // console.log(data.data.value)
    items.value = Array.isArray(data.data.value.data)?data.data.value.data:[] 
    length.value=data.data.value.length
} 

//function pagination
async function pagination(){
  // console.log(props.api+"?page="+page.value+"&search_text="+search_text.value)
  data = await useFetch(props.api+"?page="+page.value+"&search_text="+search_text.value);
    // console.log("data")
    // console.log(data.data.value)
    items.value = Array.isArray(data.data.value.data)?data.data.value.data:[] 
    // console.log(items.value);
    length.value=data.data.value.length
    await nextTick();
} 
//function search
async function search(){
  page.value=1
  // console.log(props.api+"?page="+page.value)
  data = await useFetch(props.api+"?page="+page.value+"&search_text="+search_text.value);
    // console.log("data")
    // console.log(data.data.value)
    items.value = Array.isArray(data.data.value.data)?data.data.value.data:[] 
    // console.log(items.value);
    length.value=data.data.value.length
    await nextTick();
} 
onMounted(()=>{
  columns_.value= props.columns;
  // items.value = [{id:1, email:"mamadoubahmbs4@gmail.com", firstname:"Mamadou", profil:"SuperClient"},
  // {id:2, email:"carlos@gmail.com", firstname:"Carlos", profil: "SuperClient1"},
  // {id:3, email:"habib@gmail.com", firstname:"Habib",profil: "SuperClient2"}, 
  // {id:4, email:"jules@gmail.com", b:[1,2],profil: "SuperClient3"}] 
} )

let snackbar = ref({
  status: false,
  type: "",
  text: "",
  timeout: -1,
});


const items_object = ref({items:items}); 
async function valid_add_function(v){
  // console.log("Fonction d'ajout. Avant test des données")
  if((await v.form.validate()).valid){
    // console.log("items_object 1");
    // console.log(items_object);
    //console.log("Fonction d'ajout.  test des données réussis.")
    await props.add_function(v.item, items_object);
    // console.log("item_object")
    // console.log(v.item_object.item_object)
    v.item_object.item_object={}; 
    v.dialog.d=false;
  } 
}

async function valid_update_function(v){
  // console.log("Fonction de modification. Avant test des données")
  // console.log(v);
  if((await v.form.validate()).valid){
    // console.log("items_object 1");
    // console.log(items_object);
    // console.log("Fonction de modification.  test des données réussis.")
    await props.update_function(v.item, items_object);
    selected.value=[v.item_object.item_object];
    v.item_object.item_object={};  
    v.dialog.d=false;
  } 
}

async function destroy() {
  let sn = useSnackbar();
  // console.log("aselected")
  const selected_ = selected.value.map((v)=>v.id);
  // console.log(selected_)
  try {
    let ret_value = await useFetch(props.destroy_route, {
      method: "DELETE",
      body: selected_,
    });

    if (!ret_value.error.value) {
        let tab= items.value.filter((v)=>{
          return !selected_.includes(v.id);
        }) 
        items.value=tab;
        selected.value=[]; 
        sn.success("Réussite de la suppression ! ");
      } else {
        if(ret_value.error.value?.data?.message==="Access interdit !"){
          sn.error("Vous n'avez pas le droit d'éffectuer cette suppression !")
        } else if(ret_value.error.value?.data?.message.startsWith("Authentification requise !")){
          sn.error("Votre session est expirée, veuillez réactualiser la page !")
        } 
      }
  } catch (error) {
    // console.log(error);
    selected.value=[]; 
    sn.error("Echec de la suppression ! ");
  }

  // useRouter().push(props.index_route);
  // await navigateTo(props.index_route);
  // this.$router.replace("/dashboard");
  //this.$forceUpdate();
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
.va-data-table__table-thead{
  background-color: #1b3a4c;
  color: white !important;
} 
.va-data-table__table-th{
  /* color: white !important; */
  font-weight: bold;
  text-align: center !important;
} 
table,th,td {
  border: 1px solid #1e1a1af2 !important;
  border-collapse: collapse !important;
}
.va-checkbox .va-checkbox__square{
  border: 1px solid grey
} 
</style>
  