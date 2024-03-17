<!-- @format -->

<template>
  <v-form @submit.prevent>
    <v-text-field
      label="Nombre de signataire "
      v-model.trim="item.nbr_sign"
      type="number"
      min="1"
      max="3"
      variant="outlined"
      class="mx-2 "
    />
    <v-alert
      class="mx-2 "
      v-if="item.nbr_sign > 3 || item.nbr_sign <= 0 && item.nbr_sign"
      density="compact"
      type="error"
      title="ALERTE MESSAGE"
      variant="outlined"
      text="Veuillez noter s'il vous plaît que le nombre de signataires doit être non nul et ne peut excéder trois."
      style="margin-bottom: 18px;"
    ></v-alert>
    <div class="mx-2 mb-14">
      <v-btn
        variant="flat"
        type="submit"
        block
        color="#1b3a4c"
        :disabled="item.nbr_sign > 3 || item.nbr_sign <= 0 || !item.nbr_sign"
        @click="handler"
        >Valider</v-btn
      >
    </div>
  </v-form>

  <v-form @submit.prevent v-if="show">
    <v-card class="ma-2" v-for="(item, index) in convert_nbr_sign" :key="index">
      <v-toolbar
        class="text-center "
        :title="`Signataire N° ${index + 1}`"
      ></v-toolbar>

      <v-card-text>
        <div>
          <v-text-field
            label="Titre, prénoms et nom *"
            v-model.trim="items['signataire_' + index].first_name"
            type="text"
            variant="outlined"
          />
          <!-- <v-text-field label="Prénom(s) *" v-model.trim="items['signataire_' + index].last_name" type="text"
            variant="outlined" /> -->
          <v-text-field
            label="Fonction *"
            v-model.trim="items['signataire_' + index].title_of_sign"
            type="text"
            variant="outlined"
          />
          <v-file-input
            v-model="items['signataire_' + index].sign"
            accept="image/png, image/jpeg, image/bmp"
            prepend-inner-icon="mdi-camera"
            prepend-icon=""
            :label="label"
            :id="'signataire_' + index"
            ref="imageFile"
            @change="handleImageUpload"
          ></v-file-input>
          <div v-if="nbr > 0">
            <v-btn
              @click="showImgs(items['signataire_' + index])"
              color="#1b3a4c"
              variant="flat"
              v-if="items['signataire_' + index].signature_url"
            >
              cliquez ici pour voir l'image enregistrée
            </v-btn>
            <v-img
              :src="`/api/showphoto?t=signataire_${index}.${items['signataire_' + index].exe}&z=${z}`"
              v-if="items['signataire_' + index].showimg"
              style="  width: 300px;  height: 300px; margin-left: auto;  margin-right: auto; "
            >
            </v-img>
          </div>

          <v-switch
            v-model="items['signataire_' + index].showed"
            class="mt-0 ml-2 custom-switch"
            color="#00e676"
            density="compact"
            label="Afficher la signature"
            label-placement="right"
          ></v-switch>
        </div>
      </v-card-text>
    </v-card>
    <v-card-actions>
      <v-row>
        <v-col cols="12" sm="12">
          <v-btn
            variant="flat"
            type="submit"
            block
            color="#1b3a4c"
            :disabled="disable(items,!hideInputImg)"
            @click="posted"
            
            >Enregistrer</v-btn
          >
        </v-col>
      </v-row>
    </v-card-actions>
  </v-form>
</template>

<script setup>
const { $caxios } = useNuxtApp();
import { useSnackbar } from "@/store/snackbar";
let sn = useSnackbar();
let z= ref(0)
let item = ref({

})
let items = ref({})
let btn_afficher = ref(true)

let document = ref(null);
let formData = ref();
let reload_img = ref(1);
async function handleImageUpload(event) {
  document = event.target.files[0];
  items.value[`${event.target.id}`].sign = event.target.files[0]

}

let msg = ref('')
let inputRules = {
  required: value => {
    msg.value = 'Champ obligatoire.'
    const isValueTruthy = !!value;

    if (!isValueTruthy) {
      return msg.value
    }

  },
  tails: v => v.length == 3 || "taille = 3",
  email: (v) => {
    indic = 1
    if ((/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(v))) return true
    message.value = 'Doit être un e-mail valide.'
    return message.value
  }
}

let item_final = ref({})
let convert_nbr_sign = ref(0)
const datajson = ref([])
datajson.value = await $caxios('/signataire/')
let nbr = ref()
nbr.value = datajson.value ? datajson.value.length : 0
let label = nbr.value > 0? 'Signature image à télécharger'  :'Signature image à télécharger *'
let show = ref(false)
let voirImg = ref(false)
let hideInputImg = ref(false)
let errors = ref()
 errors.value = nbr.value>0 ? true: false
 let full_name = ref('')

let posted = async (event) => {
  voirImg.value = false
  let tableauDeValeurs = Object.keys(items.value);
  formData = new FormData();
  if (nbr.value > 0) {
    datajson.value.forEach(e => {
      formData.append(`signature_url_${e.signataire - 1}`, e.signature_url);
    })
  }
  if (nbr.value != item.value.nbr_sign) {
    nbr.value = item.value.nbr_sign
  }
  tableauDeValeurs.forEach((e) => {
    formData.append(`first_name${e}`, items.value[e].first_name);
    formData.append(`last_name${e}`, items.value[e].last_name);
    formData.append(`title_of_sign_${e}`, items.value[e].title_of_sign);
    formData.append(`showed_${e}`, items.value[e].showed);
    formData.append(`nbr`, nbr.value);
    if (items.value[e].sign) {
      formData.append(`items.value[${e}].sign`, items.value[e].sign);
    }
    item_final.value[e] = items.value[e]
  })
  let data = await useFetch('/api/signataire/', {
    method: "POST",
    body: formData
  })
  sn.success("Enregistrement effectué avec succès");
  datajson.value = await $caxios('/signataire/')
  nbr.value =  datajson.value.length
  errors.value = true
  hideInputImg.value = true
  entershow()
}

function showImgs(items) {
  z.value=z.value+1
  items.showimg=!items.showimg
}

let entershow = async()=>{

  if (nbr.value > 0) {
    hideInputImg.value = true
  datajson.value = await $caxios('/signataire/')
  item.value.nbr_sign = nbr.value
  convert_nbr_sign.value = nbr.value
  show.value = true
  for (let i = 0; i < convert_nbr_sign.value; i++) {
    items.value['signataire_' + i] = {
      first_name: (nbr.value != 0 && datajson.value[i]) ? datajson.value[i].full_name : '',
      last_name: (nbr.value != 0 && datajson.value[i]) ?  datajson.value[i].full_name : '',
      title_of_sign: (nbr.value != 0 && datajson.value[i]) ? datajson.value[i].title_of_sign : '',
      showed: (nbr.value != 0 && datajson.value[i]) ? datajson.value[i].showed == 'true' : false,
      signature_url: (nbr.value != 0 && datajson.value[i]) ? datajson.value[i].signature_url : '',
      exe: (nbr.value != 0 && datajson.value[i]) ? datajson.value[i].exe : '',
      showimg: false,

    }

  }
}
}

entershow()

let handler = async () => {
  show.value = true
  msg.value = ''

  //  si un nouvel champ d'enregistrement est pris alors eviter d'afficher le bouton d'uplead sans image
  if(nbr.value > 0){
    datajson.value = await $caxios('/signataire/')
    if(nbr.value < item.value.nbr_sign){
      errors.value = false
    } else {
      errors.value = true

    }
  } else {
    datajson.value = []
    errors.value = false
  }

  items.value = {}
  convert_nbr_sign.value = parseInt(item.value.nbr_sign) || 0

  for (let i = 0; i < convert_nbr_sign.value; i++) {
    items.value['signataire_' + i] = {
      first_name: (nbr.value != 0 && datajson.value[i]) ? datajson.value[i].full_name : '',
      last_name: (nbr.value != 0 && datajson.value[i]) ?  datajson.value[i].full_name : '',
      title_of_sign: (nbr.value != 0 && datajson.value[i]) ? datajson.value[i].title_of_sign : '',
      showed: (nbr.value != 0 && datajson.value[i]) ? datajson.value[i].showed == 'true' : false,
      signature_url: (nbr.value != 0 && datajson.value[i]) ? datajson.value[i].signature_url : '',
      exe: (nbr.value != 0 && datajson.value[i]) ? datajson.value[i].exe : '',
      showImg: false,
    }

  }

}

let disable = (item,isDisabled) => {
  let valeur = Object.values(item);
  let aff = ref(false)
  if (isDisabled) {
    for (let j = 0; j < valeur.length; j++) {
    if (!valeur[j].title_of_sign || !valeur[j].sign || !valeur[j].first_name) {
      aff.value = true;  // Si la condition est réalisée pour au moins un élément, aff.value devient true
      break;  // Briser la boucle si la condition est réalisée
    }
  }

  return aff.value;
  } else {
    for (let j = 0; j < valeur.length; j++) {
    if (!valeur[j].title_of_sign || !valeur[j].first_name  || !(valeur[j].showed || valeur[j].sign ) ) {
      aff.value = true;  // Si la condition est réalisée pour au moins un élément, aff.value devient true
      break;  // Briser la boucle si la condition est réalisée
    } 
  }

  return aff.value;
  }

};
</script>

<style lang="scss">
.custom-switch .v-label {
  text-align: left;
  order: -1;
  /* Mettez le label avant le contrôle du switch */
  margin-right: 15px;
  /* Ajoutez une marge entre le label et le switch */
}
</style>
