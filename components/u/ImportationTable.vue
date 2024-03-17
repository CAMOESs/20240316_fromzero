<template>
  <div v-if="file_content && file_content.length">
   <!-- {{ colonne_fields }}  -->
    <v-table >
      <thead style="background-color: #1b3a4c!important;color: #ffffff!important;">
        <tr>
          <th
            class="text-left"
            v-for="(header, index_2) of file_content[0]"
            :key="index_2"
            style="padding-top:20px;color: white !important;"
          >
            <v-autocomplete
              v-model="colonne_fields[index_2]"
              :rules="[Required]"
              label="Feuille *"
              variant="outlined"
              
              menu-icon=""
              :items="headers"
              item-value="value"
              item-title="text"
              no-data-text="Aucune donnée"
            ></v-autocomplete>
          </th>
        </tr>
        <tr>
          <th
            class="text-left"
            v-for="(header, index_2) in file_content[0]"
            :key="index_2"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in file_content.slice(1)" :key="index">
          <td v-for="(value, index_2) in item" :key="index_2">
            {{ value }}
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
// PROPS
let props = defineProps({
  modelValue: Array,
  file_content: Array,
  headers: Array,
  colonne_fields : Array
});

// event

const emit = defineEmits(["update:modelValue"]);

// data
/* let colonne_fields = ref([
  "matricule",
  "id_anpe",
  "lastname",
  "firstname",
  "sex",
  "date_of_birth",
  "place_of_birth",
  "nationality",
  "phone_number", 
  "email",
  "start_date_service",
  "lastname",
  "lastname",
  "lastname",
]); */

watch(
  props.colonne_fields,
  (newValues) => {
    emit("update:modelValue", newValues);
  },
  {
    deep: true,
  }
);

/* watch(
props,
  (newValues) => {
    colonne_fields.value = newValues.value.headers
  },
  {
    deep: true,
  }
); */


// FUNCTION
function Required(value) {
  if (value) return true;
  return "Champ obligatoire !";
}
</script>
<style>
th {
  background-color: #1b3a4c;
  color: white !important;
}
</style>
