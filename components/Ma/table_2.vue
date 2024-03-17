
<template>
<!--Technique possible si on utilise pas computer-->
<input v-show="false"
    :value="items"
    @input="$emit('update:items', $event.target.value)"
  />
  <input v-show="false"
    :value="header"
    @input="$emit('update:header', $event.target.value)"
  />
  <input v-show="false"
    :value="selected"
    @input="$emit('update:selected', $event.target.value)"
  />
  <input v-show="false"
    :value="expanded"
    @input="$emit('update:expanded', $event.target.value)"
  />
  <input v-show="false"
    :value="filter"
    @input="$emit('update:filter', $event.target.value)"
  />
  <v-table  class="ma-5">

    <thead>
    <tr  style="background-color: #1b3a4c; color: white !important;" >
        <th v-if="with_selected" style="width:10px;" >
        <v-btn  variant="plain" @click="cliquer_sur_bouton_all()" :icon="tableau_est_vide()?'mdi mdi-checkbox-blank-outline':tableau_rempli()?'mdi mdi-checkbox-marked':'mdi mdi-minus-box'"></v-btn>      
        </th>
        <!-- <th class="text-left" style="color: white !important;">
        Details
        </th> -->
        <template v-for="(elt,index) in header"
                  :key="index">
          <th class="text-center" style="color: white !important;">
            <slot :name="`header(${elt.value?elt.value:elt.key})`">{{elt.text}}</slot>
          </th>
        </template>
    </tr>
    </thead>
    
    <tbody>
      <template v-if='items.length===0'>
        <tr>
          <td :colspan="with_selected?''+(header.length+1):''+(header.length)" class="px-5 pb-2 text-center">
            <slot
              name="noData"
            >
              {{no_data}}
            </slot>
          </td>
        </tr> 
      </template>
      <template v-else>
        <template v-if="items_display.length===0">
          <tr>
            <td :colspan="with_selected?''+(header.length+1):''+(header.length)" class="px-5 pb-2 text-center">
              <slot
                name="noDataToSearch"
              >
                {{no_data_to_search}}
              </slot>
            </td>
          </tr> 
        </template>
        <template v-else>
          <template
            v-for=" (element, i) in items_display"
            :key="element.id"
          >
            <tr> 
              <td v-if="with_selected">
                  <v-btn variant="plain" @click="cliquer_sur_un_element(element)" :icon="est_dans_le_tableau(element)?'mdi mdi-checkbox-marked':'mdi mdi-checkbox-blank-outline'"></v-btn>  
              </td>
              
              <template v-for="(elt,index) in header"
                        :key="index">
                <td v-if="elt.is_to_expanded" style="text-align:center; vertical-align: middle;"><v-btn variant="plain" @click="expanded_un_element(element)"  :icon="est_dans_expanded(element)?'mdi mdi-chevron-up':'mdi mdi-chevron-down'"></v-btn></td>
                <td v-else>
                  <slot :name="`item(${elt.value?elt.value:elt.key})`"  :item="element"  :index="i">{{getValueFromPropertyString(element,elt.value?elt.value:elt.key)}}</slot>
                </td>
              </template>
            </tr>
            <tr v-if="est_dans_expanded(element)" class="py-1">
              <td :colspan="with_selected?''+(header.length+1):''+(header.length)" class="px-5 pb-2">
                <slot
                  name="expanded"
                  :item="element"
                >
                </slot>
              </td>
            </tr>
          </template>
        </template>
        
      </template>

      
    
        
    
    </tbody>
  </v-table>
</template>
  
<script setup>

const headers = useRequestHeaders(["cookie"]);
defineEmits(['update:title','update:items','update:selected','update:expanded','update:filter'])
const props = defineProps([
  "header",
  "items",
  "selected",
  "expanded",
  "with_selected",
  "no_data",
  "filter",
  "no_data_to_search"
]);
  const school_types = ref([]);
  const select_all=ref(false);
  // const expanded=ref([]); 
  const search_text = ref("");
   
   /**
     * 
     * 
    */
  let items_display = computed(() => {
    if(props.filter){
      let tab_filt =[] 
      for(let i=0, l=props.header.length; i<l; i++){
        for(let j=0, m=props.items.length; j<m; j++){
          // console.log(props.header)
          // console.log(props.filter)
          // console.log(props.header[i].value?props.header[i].value:props.header[i].key)
          // console.log(getValueFromPropertyString(props.items[j], props.header[i].value?props.header[i].value:props.header[i].key).toString())
          let re = new RegExp(props.filter, 'i');
          // console.log(getValueFromPropertyString(props.items[j], props.header[i].value?props.header[i].value:props.header[i].key).toString().search(re))
          if(getValueFromPropertyString(props.items[j], props.header[i].value?props.header[i].value:props.header[i].key).toString().search(re)!==-1){
            tab_filt.push(props.items[j])
          }   
        } 
      } 
      // console.log(tab_filt)
      return tab_filt
    } else {
      console.log("abc")
      return [...props.items]  
    } 
  })
  function est_dans_le_tableau(item) {
    let length = props.selected.length;
    for(let i = 0; i<length; i++) {
      //les propriétés aussi dans le même ordre
      if(JSON.stringify(props.selected[i])==JSON.stringify(item)) return true;
    }
      return false;
  }

  function getValueFromPropertyString(object, propertyString) {
    // console.log("propertyString")
    // console.log(propertyString)
    // console.log("object")
    // console.log(object)
    // if(propertyString){
      let properties = propertyString.split("."); // Séparer les parties de la chaîne

      // Parcourir les parties de la chaîne pour accéder à la valeur finale
      let value = object;
      if(typeof value ==='object'){
        for (let property of properties) {
          if(typeof value ==='object'){
            value = value[property];
            // console.log("value");
            // console.log(value);
            if (value===undefined || value === null) {
              return undefined; // Propriété non trouvée
            }
          } else{
            return undefined;
          }  
        }

        return value;
      } else{
        // console.log("je suis à l'intérieur de value")
        // console.log(value)
        return undefined
      }
    // } else{
    //   return undefined
    // }  
  } 

  function mettre_dans_le_tableau(item){
    props.selected.push(item);
  }

  function enlever_du_tableau(item) {
  let length = props.selected.length;
    for(let i = 0; i<length; i++) {
      if(JSON.stringify(props.selected[i])==JSON.stringify(item)) {
        props.selected.splice(i, 1);
        break;
      }
    }
  }

  function remplir_le_tableau(){
    for(let i=0, l=props.selected.length ; i<l ; i++){
      props.selected.pop();
    }  
    for(let i=0, l=props.items.length ; i<l ; i++){
      props.selected.push(props.items[i]);
    }
  } 

  function vider_le_tableau(){
    for(let i=0, l=props.selected.length ; i<l ; i++){
      props.selected.pop();
    } 
  } 

  function tableau_est_vide(){
    if(props.selected.length == 0 ) return true;
    return false
  }
  
  function tableau_rempli(){
    if(props.selected.length==props.items.length) return true;
    return false;
  } 

  function cliquer_sur_un_element(element){
    if(est_dans_le_tableau(element)) enlever_du_tableau(element);
    else  mettre_dans_le_tableau(element);
  } 

  function cliquer_sur_bouton_all(){
    if(tableau_rempli()) vider_le_tableau();
    else {
      remplir_le_tableau()
    };
  }
  
  function est_dans_expanded(item){
    if(!Array.isArray(props.expanded)) return false 
    // console.log("props.expanded")
    // console.log(props.expanded)
    let length = props.expanded.length;
    for(let i = 0; i<length; i++) {
      //les propriétés aussi dans le même ordre
      if(JSON.stringify(props.expanded[i])==JSON.stringify(item)) return true;
    }
      return false;
  } 

  function mettre_dans_expanded(item){
    props.expanded.push(item);
  }

  function enlever_de_expanded(item) {
  let length = props.expanded.length;
    for(let i = 0; i<length; i++) {
      if(JSON.stringify(props.expanded[i])==JSON.stringify(item)) {
        props.expanded.splice(i, 1);
        break;
      }
    }
  }

  function expanded_un_element(element){
    if(est_dans_expanded(element)) enlever_de_expanded(element);
    else mettre_dans_expanded(element);
  }

</script>
  
<style>
.table-example--pagination {
  display: flex;
  justify-content: center;
}

table,th,td {
  border: 1px solid #1e1a1af2 !important;
  border-collapse: collapse !important;
} 
</style>
  