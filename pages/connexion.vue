<!-- @format -->

<template>
  <div>
    <div id="app-content">
      <v-row>
        <v-col md="4" cols="12" class="app-content_item">
          <div class="app-content_item_1">
            <div class="pt-md-16 pt-6" style="width: 80%; margin: auto">
              <a href="/" style="">
                <img class="logo" src="/images/logo.png" alt="#" />
              </a>
              <div style=" height: 100%;">
                <div class="mb-4" style="text-align: start; color: black">
                  <h2>Connexion</h2>
                </div>
                <v-form @submit.prevent="submit" ref="form">
                  <v-text-field
                    id="email"
                    v-model.trim="email"
                    :rules="[(v) => !!v || required_message]"
                    outlined
                    label="Identifiant *"
                    required
                    style="background-color: white"
                    variant="outlined"
                    base-color="#a8c0c9"
                    bg-color="#f3f3f3"
                  ></v-text-field>
                  <!-- bg-color="black" -->
                  <v-text-field
                    label="Mot de passe *"
                    v-model.trim="password"
                    outlined
                    :append-inner-icon="
                      showPassword ? 'mdi-eye' : 'mdi-eye-off'
                    "
                    :type="showPassword ? 'text' : 'password'"
                    @click:append-inner="showPassword = !showPassword"
                    :rules="[(v) => !!v || required_message]"
                    variant="outlined"
                    base-color="#a8c0c9"
                    bg-color="#f3f3f3"
                  ></v-text-field>
                  <br />

                  <div style="text-align: center">
                    <v-btn
                      class="white--text"
                      @click="login"
                      style="color: white; background-color: #f2b246"
                    >
                    <!-- class="d-xs-block" -->
                      <span  style="color: white"
                        >Se Connecter</span
                      >
                    </v-btn>
                  </div>
                </v-form>
              </div>
            </div>
          </div>
        </v-col>
        <v-col md="8" class="app-content_item  element "   >
          <div class="app-content_item_2 d-flex align-center ">
            <div style="color: white;" class="ml-5">
              <div>
                <h1 style="font-size: xx-large;">
                  Le secteur de l'artisanat
                </h1>
                <h1
                  style="font-weight: 100; font-size: x-large; "
                >
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
definePageMeta({
  layout: "none",
  auth: false,
});

const submit = function () {};
useHead({
  title : "Connexion"
} )


const showPassword = ref(false);
const showConfirmPassword = ref(false);
const email = ref("");
const hidePassword = ref(true);
const password = ref("");
const form = ref(null);
const passwordFieldIcon = computed(() =>
  hidePassword.value ? "fa-eye" : "fa-eye-slash"
);
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const required_message = ref("Ce champ est obligatoire");

const doLogin = () => alert("Not implemented yet :O");
const { data, status, signIn, signOut } = useSession();
const mySignInHandler = async ({ username, password }) => {
  const { error, url } = await signIn("credentials", {
    username,
    password,
    redirect: false,
  });
  if (error) {
    // Do your custom error handling here
    const sn = useSnackbar();
    if (
      error ==
      "Votre compte est actuellement désactivé, veuillez vous rapprocher de l'administrateur pour débloquer votre compte."
    ) {
      sn.error(error);
    } else {
      sn.error("Identifiant, adresse email ou mot de passe incorrect.");
    }
  } else {
    // No error, continue with the sign in, e.g., by following the returned redirect:
    console.log("useSession().data.value?.user");
    console.log(useSession().data.value?.user);
    if (useSession().data.value?.user?.is_change_password) {
      return navigateTo("/tableau-de-bord");
    } else {
      return navigateTo("/change-password");
    }
  }
};

const login = async function () {
  //console.log(email, password)
  if ((await form.value.validate()).valid) {
    await mySignInHandler({ username: email.value, password: password.value });
  }
};
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
