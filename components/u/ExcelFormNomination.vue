<template>
    <div>
      <v-form v-model="validForm" @submit.prevent="show_content" class="mt-5">
        <v-file-input
          v-model="data.excel_file"
          :rules="[Required]"
          label="Fichier à importer (excel) *"
          variant="outlined"
          class="mx-2 mx-md-8"
          accept=".xls,.xlsx,.csv,.ods"
          @update:modelValue="upload_sheet_names"
        ></v-file-input>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-autocomplete
              v-model="data.sheet"
              :rules="[Required]"
              label="Feuille *"
              variant="outlined"
              clearable
              class="mx-2 mx-md-8"
              :items="sheet_names"
              no-data-text="Aucune donnée"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="data.first_row"
              :rules="[Required]"
              label="Nombre de ligne avant le premier enregistrement *"
              variant="outlined"
              class="mx-2 mx-md-8"
              placeholder="1"
              persistent-hint
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col>
        
          <v-btn
                    color="#1b3a4c"
                    type="submit"  
                    class="mt-2 text-white" 
                    :disabled="validForm == false"
                    block
                    > Afficher
          </v-btn>
        </v-col>
      </v-form>
    </div>
  </template>
  <script setup>
  const headers = useRequestHeaders(["cookie"]);
  defineProps({
    modelValue: Array,
    body: Array,
    headers: Array,
    // afficher:Boolean,
    // continuer:Boolean
  });
  
  // event
  
  const emit = defineEmits(["update:modelValue",'update:continuer', 'update:afficher' ]);
  
  // data
  
  let data = ref({ first_row: 1 });
  let validForm = ref(false);
  let afficher = ref(false);
  let continuer = ref(false);
  let sheet_names = ref([]);
  let file_content = ref([]);
  
  // WATCH
  watch(file_content, (newValues) => {
    emit("update:modelValue", newValues);
  });
  watch(afficher, (newValues) => {
    emit("update:afficher", newValues);
    console.log(afficher.value);
  });
  watch(continuer, (newValues) => {
    emit("update:continuer", newValues);
  });
  // fonction
  function Required(value) {
    if (value) return true;
    return "Champ obligatoire !";
  }
  
  async function show_content(event) {
    // afficher.value = true;
    // continuer.value = false;
    const results = await event
    // console.log("results.valid");
    // console.log(results.valid);
    // alert(JSON.stringify(results, null, 2));  
          
    if (!validForm.value) return;
  
    let formData = new FormData();
    formData.append("excel_file", data.value.excel_file[0]);
    formData.append("sheet", data.value.sheet);
    formData.append("first_row", data.value.first_row);
    let { data: response } = await useFetch("/api/utils/excel/sheet-content", {
      method: "POST",
      body: formData,
    });
    file_content.value = response.value;
    // afficher.value = true;
    // continuer.value = false;
    emit("update:afficher", true);
    emit("update:continuer", false);
    // continuer.value = false;
  }
  
  async function upload_sheet_names() {
    data.value.sheet = null;
    if (!(data.value.excel_file && data.value.excel_file.length >= 1)) return;
    let formData = new FormData();
    formData.append("excel_file", data.value.excel_file[0]);
    let { data: response } = await useFetch("/api/utils/excel/sheet-names", {
      method: "POST",
      body: formData,
    });
    //   console.log(response.value);
    sheet_names.value = response.value;
  }
  </script>
  