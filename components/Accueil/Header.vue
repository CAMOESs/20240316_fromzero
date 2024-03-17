<template>
  
  <div>
    <v-layout>
      <v-app-bar elevation="4" id="nav" style="height: 80px;">
        <a href="/">
          <!-- <img
            class="logo"
            src="/images/logo.png"
            alt="#"
           
          /> -->

        </a> 
        <v-spacer> </v-spacer>
        <v-btn
        v-if="!access_dashbord"
          to="/connexion"
          class="btn btn-sm btn-primary btn-create"
          style="color: black; margin-right: 20px"
          rounded="xl"
          variant="outlined"
        >
         Se connecter
        </v-btn>
        <v-btn
          v-else
          to="/tableau-de-bord"
          class="btn btn-sm btn-primary btn-create"
          style="background-color: white; color: #1b3a4c; margin-right: 20px"
          variant="outlined"
        >
          Tableau de bord
        </v-btn>
      </v-app-bar>
    </v-layout>
  </div>
</template>
<script>
  export default {
    name: 'TheHeader',
  }
</script>
<script setup>
  const {status}= useSession() ;
  let access_dashbord = ref(false);
  if(status) {
    if(useSession().data.value && useSession().data.value.user && useSession().data.value.user.is_change_password){
      access_dashbord.value = true;
    } 
  } 

</script>

<style lang="scss">
.logo {
  margin-left: 10px;
 padding: 5px;
 height: 67px;
 
}

@media screen and (max-width: 900px) {
  .logo {
    // width: 120px;
    height: 60px;
    margin-left: 10px;
  margin-right: 5px;
  }
  #nav{
    width: 376px;
  height: 77px;

 }  
}


/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .logo {
    // width: 130px;
    height: 60px;
    margin-left: 10px;
  margin-right: 5px;
  }

  #nav{
    width: 376px;
  height: 64px;

 }  
}
</style>