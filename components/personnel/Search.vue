<template>
  <div>
    <v-form v-model="validForm" @submit.prevent="search" class="mt-5">
      <v-radio-group
        v-model="by_matricule"
        inline
        class="mx-2 mx-md-8"
        label="Rechercher par"
      >
        <v-radio label="Matricule" :value="true"></v-radio>
        <v-radio label="Nom & prénoms" :value="false"></v-radio>
      </v-radio-group>

      <div v-if="by_matricule">
        <v-text-field
          v-model="data.matricule"
          :rules="[Required]"
          label="Matricule *"
          variant="outlined"
          class="mx-2 mx-md-8"
        ></v-text-field>
      </div>
      <div v-else>
        <v-text-field
          v-model="data.lastname"
          :rules="[Required]"
          label="Nom ou (partie de nom) *"
          variant="outlined"
          class="mx-2 mx-md-8"
        ></v-text-field>
        <v-text-field
          v-model="data.firstname"
          :rules="[Required]"
          label="Prénoms ou (partie de prénoms) *"
          variant="outlined"
          class="mx-2 mx-md-8"
        ></v-text-field>
      </div>
      <v-col>
        <v-btn
          color="#1b3a4c"
          type="submit"
          class="mt-2 text-white"
          :disabled="validForm == false"
          block
        >
          Rechercher
        </v-btn>
      </v-col>
    </v-form>
    <p v-if="!welcom" style="text-align: center" class="mt-3 mb-3">
      <span v-if="search_result.length == 0"> Aucun résultat ! </span>
      <span v-else-if="search_result.length >= 1"
        >{{ search_result.length }}
        {{
          search_result.length == 1
            ? "agent retrouvé ! "
            : "agents retrouvés ! "
        }}
      </span>
    </p>
  </div>
</template>
<script setup>
const headers = useRequestHeaders(["cookie"]);
defineProps({
  modelValue: Array,
  body: Array,
  headers: Array,
});

// event

const emit = defineEmits(["update:modelValue"]);

// data
let by_matricule = ref(true);

let data = ref({});
let validForm = ref(false);

let search_result = ref([]);
let welcom = ref(true);
// WATCH
watch(search_result, (newValues) => {
  emit("update:modelValue", newValues);
});
// fonction
function Required(value) {
  if (value) return true;
  return "Champ obligatoire !";
}

async function search() {
  if (!validForm.value) return;

  let response = await useFetch("/api/personals/search", {
    params: {
      by_matricule: by_matricule.value,
      lastname: data.value.lastname,
      firstname: data.value.firstname,
      matricule: data.value.matricule,
    },
  });

  search_result.value = response.data.value;
  welcom.value = false;
}
</script>
