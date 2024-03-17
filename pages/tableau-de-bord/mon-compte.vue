<!-- @format -->

<template>
  <div class="pt-10">
    <v-btn
      class="mx-2  mt-6"
      style="color:white;"
      @click="click_edit()"
      v-if="disabled_card"
      color="#1b3a4c"
    >
      <v-icon> mdi mdi-pencil </v-icon
      ><span class="d-none d-xs-none d-sm-block">Modifier</span>
    </v-btn>
    <v-card class="mx-2 mb-6 mt-3" style="background: inherit;"  elevation="0">
      <v-form
        ref="form"
        class="ma-3"
        :disabled="disabled_card"
      >
        <template v-if="have_access_to_people()">
          <v-text-field
            v-model="item.lastname"
            label="Nom *"
            variant="outlined"
            type="text"
            :rules="[(v)=>!!v || required_message]"
            bg-color="white"
          />
          <v-text-field
            v-model="item.firstname"
            label="Prénoms *"
            variant="outlined"
            type="text"
            :rules="[(v)=>!!v || required_message]"
            bg-color="white"
          />
          <v-text-field
            v-model="item.email"
            label="Email *"
            variant="outlined"
            type="text"
            :rules="[(v)=>!!v || required_message]"
            bg-color="white"
          />
          <v-select
            v-model="item.sex"
            :items="['M','F']"
            :rules="[v=>!!v||required_message]"
            clearable
            deletable-chips
            variant="outlined"
            label="Sexe *"
            bg-color="white"
          />
          <v-text-field
            v-model="item.phone_number"
            label="Numéro de téléphone *"
            variant="outlined"
            type="text"
            :rules="[(v)=>!!v || required_message]"
            bg-color="white"
          />
          <v-text-field
            v-model="item.place_of_birth"
            label="Lieu de naissance *"
            variant="outlined"
            type="text"
            :rules="[(v)=>!!v || required_message]"
              bg-color="white"
          />
          <v-text-field
            v-model="item.nationality"
            label="Nationalité *"
            variant="outlined"
            type="text"
            :rules="[(v)=>!!v || required_message]"
            bg-color="white"
          />
          <v-text-field
            v-model="item.date_of_birth"
            label="Date de naissance *"
            variant="outlined"
            type="date"
            :rules="[(v)=>!!v || required_message]"
            bg-color="white"
          />
        </template>

        <v-text-field
          v-model.trim="item.password"
          label="Mot de passe"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append-inner="showPassword = !showPassword"
          variant="outlined"
          :messages="'Les espaces au début et à la fin ne sont pas considérés'"
          @update:modelValue="item.password?'':item.confirm_password = ''"
          bg-color="white"
        />
        <v-text-field
          v-if="item.password?.trim()"
          :append-inner-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showConfirmPassword ? 'text' : 'password'"
          v-model="item.confirm_password"
          label="Confirmation du mot de passe *"
          variant="outlined"
          @click:append-inner="showConfirmPassword = !showConfirmPassword"
          :rules="[(v)=> (v===item.password) || 'Le mot de passe ne correspond pas']"
          :color="item.confirm_password==item.password?'green':'blue'"
          bg-color="white"
        />

        <v-btn
          @click="save()"
          v-show="!disabled_card"
          :elevation="5"
          block
          class="mt-2"
          style="color:white;"
          color="#1b3a4c"
          >Enregistrer</v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>

<script setup>
import { useSnackbar } from '@/store/snackbar';
  let sn = useSnackbar();
  const session_information = await useSession();
  const item = ref({});
  const do_display_password = ref("");
  const disabled_card = ref(true);
  const form = ref(null)
  const required_message = ref('Ce champ est obligatoire')
  const showPassword = ref(false)
  const showConfirmPassword = ref(false)
  const phone = ref({number:'',valid:true})
  const is_tel_valid = ref(true)

  item.value.id = session_information.data.value.user.personal_id
  //function
  function click_edit(){
      disabled_card.value = false;

  }

  function have_access_to_people (){
    return !(session_information && session_information.data && session_information.data.value &&
        session_information.data.value.user && (session_information.data.value.user.student_id || session_information.data.value.user.personal_id  ))
  }
  function handlePhoneNumberInput(info, phone_object) {
    phone.value.number = phone_object.number;
    phone.value.valid = phone_object.valid;
    is_tel_valid.value = phone_object.valid;
  }
  async function initialize(){
    try{
      if(have_access_to_people()) {
        if(session_information && session_information.data && session_information.data.value &&
        session_information.data.value.user && session_information.data.value.user.id){
            // console.log("présentation de items")
            const {error, data} = await useFetch('/api/users/my-account?id='+session_information.data.value.user.id)
            // console.log(data);
            if(!error || !error.value){
              if(data.value.length>0){
                data.value[0].date_of_birth = (new Date(data.value[0].date_of_birth)).toLocaleDateString('af')
                item.value = data.value[0] ;

              }
              else
                sn.error("Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer. ")
              //sn.success('Enregistrement éffectué avec succès')
            } else{
                // console.log(error.value);
              sn.error("Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer. ")
            }
        }
      }
    } catch(error){
        // console.log(error);
    }
  }
  await initialize();

  async function save(){

      if((await form.value.validate()).valid){
          try{
              if((session_information && session_information.data && session_information.data.value &&
              session_information.data.value.user && session_information.data.value.user.school_id) || !have_access_to_people()){
                  const {error, data} =await useFetch('/api/my-account-school', {
                      method: "POST",
                      body:{...item.value,password:item.value.password, confirm_password: item.value.confirm_password}
                  } )
                  if(!error || !error.value){
                      disabled_card.value = true;
                    sn.success('Enregistrement éffectué avec succès')
                  } else{
                      console.log(error.value);
                    sn.error('Enregistrement échoué')
                  }
              } else if(session_information && session_information.data && session_information.data.value &&
              session_information.data.value.user && session_information.data.value.user.id){
                  // console.log("présentation de items")
                  const {error, data} = await useFetch('/api/users/my-account', {
                      method: "POST",
                      body:{...item.value, id: session_information.data.value.user.id}
                  })
                  if(!error || !error.value){
                    disabled_card.value = true;
                    sn.success('Enregistrement éffectué avec succès')
                  } else{
                      // console.log(error.value);
                    sn.error('Enregistrement échoué')
                  }
              }
          } catch(error){
              // console.log(error);
          }

      }
  }
</script>

<style lang="scss" scoped></style>
