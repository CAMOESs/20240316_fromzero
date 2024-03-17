<template>
    <TableExpandable
      :item_will_be_send="item_will_be_send" 
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
    <template v-slot:top_form="props">
        <slot name="top_form" :selected="props.selected" :items="props.items" :items_object="props.items_object" :object_display_table="props.object_display_table"></slot>
      </template>
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
      <template #cell(details)="{ row, isExpanded }">
        <slot :name="`cell(details)`" :row="row" :isExpanded="isExpanded"></slot>
      </template>
    <template #expandableRow="{ rowData }">
      <slot :name="`expandableRow`" :rowData="rowData">   
      </slot>
    </template>
      <template v-for="element in columns_" #[`cell(${element.key})`]="{value}">
        <slot :name="`cell(${element.key})`" :value="value"> 
        </slot>
      </template>
    </TableExpandable>
      
</template>

<script setup>
import TableExpandable from './TableExpandable/index.vue'
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
  "item_will_be_send"
]); 
const item=ref([])
const columns_ = ref([{}]); 
onMounted(()=>{
  columns_.value= props.columns;
} )
</script>
