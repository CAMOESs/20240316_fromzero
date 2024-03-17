<!-- @format -->

<template>
  <div>
    <v-layout>
      <v-app-bar elevation="18" id="nav" style="height: 80px; ">
        <NuxtLink to="/">
          <img src="/images/logo.png" class="logo" alt="#" />
        </NuxtLink>
        <!-- <div id="teleport-target"></div> -->
        <v-btn
          class="btn_drawer_styleus"
          prepend-icon="mdi-menu"
          depressed
          text
          variant="plain"
          @click.stop="drawer = !drawer"
        >
          <span
            style="color: white"
            class="d-none d-xs-none d-sm-block btn-block"
            >&nbsp;&nbsp;</span
          >
        </v-btn>
        <v-spacer> </v-spacer>
        <!-- <v-btn
          class="white--text mr-4"
          variant="outlined"
          @click.stop="drawer = !drawer"
        >
          <span class="d-xs-block" style="color: black"
            ><v-icon>mdi-account-box</v-icon></span
          >
        </v-btn> -->
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <!-- <v-btn color="indigo" > Menu as Popover </v-btn> -->
            <v-btn class="white--text mr-4" variant="outlined" v-bind="props">
              <span class="d-xs-block" style="color: black"
                ><v-icon>mdi-account-box</v-icon></span
              >
            </v-btn>
          </template>

          <v-card width="300">
            <div style="text-align: center;">
              <!-- {{ session_information.data.value.user.username ? session_information.data.value.user.email : '' }} -->
              <h1 style="font-size : 18px">
                {{ $auth().username }}
              </h1>
              <p>
                {{ $auth().email }}
              </p>
              <p style="font-size : 10px">
                {{ get_roles($auth().roles) }}
              </p>
            </div>
            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item
                style="color:#1b3a4c"
                prepend-icon="mdi-account-edit"
                to="/tableau-de-bord/mon-compte"
                title="Mon compte"
                value="Mon compte"
              ></v-list-item>
              <v-list-item
                style="color:red"
                prepend-icon="mdi-logout"
                @click="logout"
                title="Déconnexion"
                value="Déconnexion"
              ></v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-app-bar>
      

      <!-- <v-app dark> -->
        <v-navigation-drawer
            v-model="drawer"
            style="background-color: #002337e4; color: white; height : 100vh; "
            :permanent="permanent"
            location="left"
            theme="dark"
            elevation="2"
          >
            <v-list nav class="mt-16 pt-7">
              <v-list-item
                v-for="(element, index) in items"
                :key="index"
                :prepend-icon="element.icon"
                :to="element.to"
                >{{ element.title }}</v-list-item
              >
            </v-list>
          </v-navigation-drawer>
        <v-main>
          <!--   <v-navigation-drawer
            style="margin-top: 80px;height: 220px"
            v-model="drawer"
            temporary
            location="right"
          >
            <v-list-item
              class="text-center"
              style="color:#1b3a4c;text-transform:uppercase"
            >
              {{ session_information.data.value.user.username ? session_information.data.value.user.email : ''
              }}AAA
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
              <v-list-item
                style="color:#1b3a4c"
                prepend-icon="mdi-home"
                to="/"
                title="Accueil"
                value="Accueil"
              ></v-list-item>
              <v-list-item
                style="color:#1b3a4c"
                prepend-icon="mdi-account-edit"
                to="/tableau-de-bord/mon-compte"
                title="Mon compte"
                value="Mon compte"
              ></v-list-item>
              <v-list-item
                v-if="$auth() && $auth()?.student_id"
                style="color:#1b3a4c"
                prepend-icon="mdi-refresh-circle"
                to="/tableau-de-bord"
                title="Choisir un autre enfant"
              ></v-list-item>
              <v-list-item
                style="color:#1b3a4c"
                prepend-icon="mdi-logout"
                @click="logout"
                title="Déconnexion"
                value="Déconnexion"
              ></v-list-item>
            </v-list>
          </v-navigation-drawer> -->
     
          <v-container
            fluid
            style="background-color: #06466a78; min-height:100vh ; "
          >
            <div class="v_container_styleus">
              <slot></slot>
            </div>
          </v-container>
        </v-main>
        <!-- <v-main style="height: 250px"></v-main> -->
      <!-- </v-app> -->
    </v-layout>
  </div>
</template>

<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
  const { $auth } = useNuxtApp();
  let {name} = useDisplay();
  let menu = ref(false)

  const permanent = computed(() => {
    return  name.value!== 'xs';
  })
  const { signOut } = useSession()
  function get_roles(txt ){
    if(!txt) return  "()"

    return  `(${txt.split('#').join(', ')})`
  }
  const logout = async function(){
    await signOut({redirect:"/"});
  }
  let items = ref([]);
  let drawer= ref(true)
  let res = await useFetch("/api/my-menu")
  items.value = res.data.value
</script>
<style scoped>


.v_container_styleus{
  padding-top: 60px;
  padding-left: 0 !important;
  padding-right: 0 !important;

}
.btn_drawer_styleus{
  background-color: inherit !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.v_app_bar_styleus{
  box-shadow: 0 0 7px rgb(0 0 0 / 11%) !important;
  background-color: white;
  color:white;
  height: 70px;
}
.footers {
  background-image: url("/binding_dark.png");
  background-color: #cccccc;
  height: 300px;
}

.c_ {
  width: 250px;
  height: 65px;
  padding: 5px;
  margin-top: 10px;
}

@media screen and (max-width: 900px) {
  .c_ {
    width: 150px;
    height: 300px;
    margin-left: 30px;
    margin-right: 30px;
    /*filter: contrast(0%) brightness(200%);*/
    object-fit: contain;
  }

}


/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .c_ {
    width: 150px;
    height: 300px;
    margin-left: 30px;
    margin-right: 30px;
    /*filter: contrast(0%) brightness(200%);*/
    object-fit: contain;
  }
}
</style>
