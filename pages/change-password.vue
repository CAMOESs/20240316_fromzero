<!-- @format -->

<template>
  <div>
    <div id="app-content">
      <v-row>
        <v-col md="4" cols="12" class="app-content_item">
          <div class="app-content_item_1">
            <div class="pt-md-16 pt-6" style="width: 80%; margin: auto">
              <a href="/" style="">
                <img class="logo mx-0  px-0" src="/images/logo.png" alt="#" />
              </a>
              <div style="height: 100%">
                <div class="mb-4" style="text-align: start; color: black">
                  <h1 style="font-size: 1rem" class="mx-0">
                    Modifier votre mot de passe
                  </h1>
                  <!-- <h3 class="text-color">CONNEXION RÉUSSIE</h3> -->
                  <p style="color: black; text-align: justify; font-size: 10px">
                    Pour des raisons de sécurité, veuillez changer votre mot de
                    passe actuel avant de pouvoir continuer. Saisissez le
                    nouveau mot de passe dans les deux champs prévus, puis
                    cliquez sur "Valider".

                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <!-- <v-btn icon v-bind="props"> -->
                        <v-icon
                          v-bind="props"
                          large
                          style="
                            font-size: 20px;
                            color: red;
                            padding-bottom: 5px;
                          "
                          >mdi-help-circle-outline</v-icon
                        >
                        <!-- </v-btn> -->
                      </template>
                      <div>
                        Le mot de passe doit respecter les critères suivants :
                        <ul>
                          <li>Longueur minimale de 8 caractères.</li>
                          <li>
                            Au moins une lettre majuscule (par exemple : A, B,
                            C).
                          </li>
                          <li>
                            Au moins une lettre minuscule (par exemple : a, b,
                            c).
                          </li>
                          <li>Au moins un chiffre (par exemple : 1, 2, 3).</li>
                          <li>
                            Au moins un caractère non alphanumérique (par
                            exemple : !, @, #).
                          </li>
                        </ul>
                      </div>
                    </v-tooltip>
                  </p>
                </div>
                <v-form @submit.prevent="changePassword" ref="form">
                  <v-text-field
                    label="Nouveau mot de passe *"
                    v-model.trim="user.password"
                    variant="outlined"
                    :append-inner-icon="
                      showPassword ? 'mdi-eye' : 'mdi-eye-off'
                    "
                    :type="showPassword ? 'text' : 'password'"
                    @click:append-inner="showPassword = !showPassword"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Confirmation de mot de passe *"
                    v-model.trim="user.confirm_password"
                    variant="outlined"
                    :append-inner-icon="
                      showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
                    "
                    :type="showConfirmPassword ? 'text' : 'password'"
                    @click:append-inner="
                      showConfirmPassword = !showConfirmPassword
                    "
                    required
                  ></v-text-field>
                  <br />

                  <div style="text-align: center">
                    <v-btn
                      class="white--text"
                      type="submit"
                      style="
                        color: white;
                        background-color: #f2b246;
                        width: 200px;
                        margin-bottom: 10px;
                      "
                      :disabled="
                        user.password != user.confirm_password ||
                        user.password == ''
                      "
                    >
                      <!-- class="d-xs-block" -->
                      <span style="color: white">Valider</span>
                    </v-btn>
                  </div>

                  <!--       <div style="text-align: center">
                    <v-btn
                      class="white--text"
                      @click="changePassword"
                      style="
                        color: white;
                        background-color: #f2b246;
                        width: 200px;
                        margin-bottom: 10px;
                      "
                      rounded
                      :disabled="
                        user.password != user.confirm_password ||
                        user.password == ''
                      "
                    >
                      <span class="d-xs-block" style="color: white"
                        >Valider</span
                      >
                    </v-btn>
                  </div> -->
                </v-form>
              </div>
            </div>
          </div>
        </v-col>
        <v-col md="8" class="app-content_item element">
          <div class="app-content_item_2 d-flex align-center">
            <div style="color: white" class="ml-5">
              <div>
                <h1 style="font-size: xx-large">Le secteur de l'artisanat</h1>
                <h1 style="font-weight: 100; font-size: x-large">
                  Un pilier du dévéloppement économique pour le BENIN
                </h1>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script setup>
import { useSnackbar } from "@/store/snackbar";
let sn = useSnackbar();
// import { computed, ref } from "vue";
definePageMeta({
  layout: "none",
  auth: false,
});
useHead({
  title : "Modifier mon mot de passe"
} )



const showPassword = ref(false);
const showConfirmPassword = ref(false);
const user = ref({});
//   const confirm_password = ref("");
const form = ref(null);

const required_message = ref("Ce champ est obligatoire");

const { data, status, signIn, signOut } = useSession();

const mySignInHandler = async ({ username, password }) => {
  const { error, url } = await signIn("credentials", {
    username,
    password,
    redirect: false,
  });
  if (error) {
    // Do your custom error handling here
    // const sn = useSnackbar();
    // if (
    //   error ==
    //     "Votre compte est actuellement désactivé, veuillez vous rapprocher de l'administrateur pour débloquer votre compte."
    // ) {
    //   sn.error(error);
    // } else {
    //   sn.error("Identifiant, adresse email ou mot de passe incorrect.");
    // }
  } else {
    // No error, continue with the sign in, e.g., by following the returned redirect:
    if (
      useSession().data.value &&
      useSession().data.value.user &&
      useSession().data.value.user.is_change_password
    ) {
      return navigateTo("/tableau-de-bord");
    } else {
      return navigateTo("/change-password");
    }
  }
};

async function changePassword() {
  let response 
  try {
    const { valid } = await form.value.validate();
    if (valid) {
      user.value.username =
        useSession()?.data?.value?.user?.username
          ? useSession().data.value.user.username
          : "";
      user.value.id =
        useSession()?.data?.value?.user?.id
          ? useSession().data.value.user.id
          : "";
      // console.log("user: ", user.value)

      response = await useFetch(`/api/users/changePassword`, {
        method: "POST",
        body: {
          ...user.value,
        },
      });
      if(response.data.value.error) throw ""

      if (response.data.value.status == 200) {
        sn.success("Mot de passe changé avec succès.");
        await signOut({ redirect: false });
        await mySignInHandler({
          username: user.value.username,
          password: user.value.password,
        });
      } 
    }
  } catch (error) {
    // console.log(error)
    sn.error(response.data.value.error);
    /* sn.error(
      "Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer."
    ); */
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  font-family: Verdana, sans-serif;
}
#app-content {
  width: 100%;
  height: 100vh;
  background: url("/images/login/bg.webp") no-repeat;
  background-size: cover;
}
.app-content_item {
  padding: 0 !important;
}
.app-content_item_1 {
  height: 100vh;
  overflow: scroll;
  background: white;
}
.app-content_item_2 {
  height: 100vh;
  overflow: hidden;
  background: #00000097;
}
.element {
  display: block;
}

@media (max-width: 575px) {
  .element {
    display: none;
  }
}
</style>
