<template>
  <v-table id="table-validation">
    <thead style="background-color: #1b3a4c!important;color: #ffffff!important;">
      <tr>
        <th>
          <v-checkbox style="width: 50px" v-model="check_all"></v-checkbox>
        </th>
        <th
          class="text-left"
          v-for="(header, index_2) in headers"
          :key="index_2"
        >
          {{ header.text }}
        </th>
      </tr>
    </thead>

    <tbody>
      <template v-for="(item, index) in body" :key="index">
        <tr>
          <td>
            <v-checkbox :value="item" v-model="interm"></v-checkbox>
          </td>
          <td v-for="(header, index_2) in headers" :key="index_2">
            {{ item[header.value] }}
          </td>
        </tr>
        <tr v-if="item[simultude] && item[simultude].length" class="simultude">
          <td :colspan="headers.length + 1">
            <ul>
              <li
                v-for="(item, index_5) in item[simultude].split('#')"
                :key="index_5"
              >
                {{ item }}
              </li>
            </ul>
          </td>
        </tr>
      </template>
    </tbody>
  </v-table>
</template>

<script setup>
// props

let props = defineProps({
  modelValue: Array,
  body: Array,
  headers: Array,
  simultude: String,
  selected: Array,
});

// event

const emit = defineEmits(["update:modelValue"]);

// data

let interm = ref([]);
let check_all = ref(null);
watch(interm, (newValues) => {
  emit("update:modelValue", newValues);
});

watch(check_all, (newValues) => {
  if (newValues) {
    interm.value = props.body;
  } else interm.value = [];
});
watch(
  () => props.selected,
  (newValue) => {
    // console.log("Selected est change chez enfant");
    // console.log(newValue );
    interm.value = newValue;
  },
  {
    /* deep: true, */
  }
);
</script>
<style>
th {
  background-color: #1b3a4c !important;
  color: white !important;
}
.simultude {
  background-color: #ef9a9a;
  color: black;
  box-shadow: inset 3px 0px 5px #000;
}
#table-validation {
  overflow: scroll;
}
</style>
