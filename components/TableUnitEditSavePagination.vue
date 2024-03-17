<template>
    <Table
      :columns="columns"
      :title="title"
      :api="api"
      :update="update"
      :update_function="update_function"
      :add="add"
      :add_function="add_function"
      :destroy="destroy"
      :destroy_route="destroy_route"
    >
      
      <template v-slot:table_buttons="props">
        <slot name="table_buttons" :selected="props.selected" :items="props.items" :items_object="props.items_object"></slot>
      </template>
     <!--  <template v-slot:item.file="{ item }">
      <v-img :src="(`/images/accueil/${item.id}.jpg`)" style="width: 100px; height:100px"></v-img>
    </template> -->
      <template #save_replacement="props">
        <slot :item="props.item" ></slot>
      </template>

      <template #edit_replacement="props">
        <slot :item="props.item" ></slot>
      </template>
      <template v-for="element in columns_" #[`header(${element.key})`]>
        <slot :name="`header(${element.key})`">
        </slot>
      </template>
    
      <template v-for="element in columns_" #[`cell(${element.key})`]="{value}">
        <slot :name="`cell(${element.key})`" :value="value"> 
        </slot>
      </template>
    </Table>
      
</template>

<script setup>
import Table from './TablePagination/index.vue'
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
]); 
const item=ref([])
const columns_ = ref([{}]); 
onMounted(()=>{
  columns_.value= props.columns;
} )
</script>
