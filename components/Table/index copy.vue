
<template>
  <slot name="top_form" :items="items" :selected="selected" :items_object="items_object" :object_display_table="object_display_table">
  </slot>
      
  <v-card class="mx-2 my-2" v-if="display_table">
    <v-card-text>
      
      <v-row>
        <!-- Ajouter, modifier, enregistrer-->

        <v-col cols="12" style="text-align: left">
          <!-- Ajouter -->
          <ButtonDialog
            :name_of_button="'Ajouter'"
            :disabled="selected.length!==0"
            v-if="add"
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
          <v-btn color="#1b3a4c" class="text-white" @click="search"  >Rechercher</v-btn>
        </v-col>
      </v-row>
    </div>

    <!--table-->
    <!-- selectable="true" -->
    <!-- sticky-header -->
 <!--     <va-data-table v-model="selected" :columns="columns" :items="items"
      selectable :filter="filter" @filtered="filtered = $event.items" class="mx-2"
      striped no-data-label="Aucune donnée disponible!" style="height:auto;"  > -->
    <va-data-table v-model="selected" :columns="columns" :items="items"
      selectable :filter="filter" class="mx-2"
      striped no-data-label="Aucune donnée disponible!" style="height:auto;"  >
      <!-- <template #cell:can_auth="{ row }">
      </template> -->
      <template v-for="element in columns_" #[`header(${element.key})`]>
        <slot  :name="`header(${element.key})`">
          {{element.text}} 
        </slot>
      </template>
      <template v-for="element in columns_" #[`cell(${element.active_modif_column?element.key:defaultSlot})`]="{value}" >
        <slot :name="`cell(${element.key})`" :value="value">
        </slot>
      </template>
    </va-data-table>
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
]);
const columns_ = ref([{}]); 
const defaultSlot=""
const showModal = ref(false);
const dialog = ref(false) /* item = ref({}), */ 
const perPage = ref(10)
const currentPage = ref(1)
const selected = ref([]) 
let items= ref([]);
let display_table=ref(true)
let object_display_table = ref({display_table:display_table});
//initialisation
 
let data ;

//search
const search_text= ref('');
const filter = ref('');
//console.log(items);
if(props.item_will_be_send){
  display_table.value= false;
  items.value=[];
} else{
  display_table.value= true;
  data = await (props.api);
    // console.log(data.data.value)
    items.value = Array.isArray(data.data.value)?data.data.value:[] 
} 

//search function
function search(){
  filter.value = search_text.value;
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
    // console.log("abdfsd");
    // console.log(props.destroy_route+"k");
    await useFetch(props.destroy_route, {
      method: "DELETE",
      body: selected_,
    });
    // console.log("items2");
    let tab= items.value.filter((v)=>{
       return !selected_.includes(v.id);
    }) 
    items.value=tab;
    // console.log("items1");
    selected.value=[]; 
    sn.success("Réussite de la suppression ! ");
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
  