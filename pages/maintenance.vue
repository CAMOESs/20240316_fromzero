<template>
    <div>
        <div class="header_">
            <div class="soso">
                <div class='line'>
                    <h1>Site en Maintenance</h1>
                </div>
            </div>
            <br>
            <v-row class="ma-0 pa-0">
                <v-col cols="3" style="" class="ma-0 pa-1"></v-col>
                <v-col cols="2" style="background-color:rgb(0,104,40);" class="ma-0 pa-1"></v-col>
                <v-col cols="2" style="background-color:rgb(255,190,0);" class="ma-0 pa-1"></v-col>
                <v-col cols="2" style="background-color:rgb(235,0,0);" class="ma-0 pa-1"></v-col>
                <v-col cols="3" style="" class="ma-0 pa-1"></v-col>
            </v-row>
            <br>
            <p>{{ maintenance.message }}</p>
        </div>

    </div>
</template>

<script setup>
// import { redirect } from 'next/dist/server/api-utils';

definePageMeta({
    layout: "homemaintenance",
    auth: false,
    middleware:["maintenancesite"]  
   /*  middleware:[
   async function (to, from) {
    let response = await useFetch("/api/maintenance");
    let maintenance_ = response.data.value;
      if (maintenance_?.status == false) {
        //this.$router.push("/");
        //return navigateTo("/");
            return navigateTo('/connexion')
      }
    },
    ]  */
});
let maintenance=ref()

maintenance.value = (await useFetch("/api/systeme/maintenance")).data.value;

</script>

<style lang="scss">
.p.h1.h2.h3.h4.h5.span.li {
    font-family: Montserrat;
}

.pop-outin {
  animation: 2s anim-popoutin ease infinite;
}

@keyframes anim-popoutin {
  0% {
    color: black;
    transform: scale(0);
    opacity: 0;
    text-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  25% {
    color: rgb(255, 255, 255);
    transform: scale(2);
    opacity: 1;
    text-shadow: 3px 10px 5px rgb(63, 63, 63);
  }
  50% {
    color: rgb(255, 255, 255);
    transform: scale(1);
    opacity: 1;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    /* animate nothing to add pause at the end of animation */
    transform: scale(1);
    opacity: 1;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0);
  }
}

.fromtop {
  animation: 2s anim-fromtop linear infinite;
}
@keyframes anim-fromtop {
  0% { opacity: 0; transform: translateY(-100%);}
  25% { opacity: 1; transform: translateY(0%);}
  50% {
  }
  100% {
  }
}

.header_ {
    padding: 70px;
    text-align: center;
    background-image: linear-gradient(to left top, rgba(46, 42, 42, 0.6), hsl(224, 53%, 55%)), url('/images/bga.jpeg');
    background-repeat: no-repeat;
    background-attachment: auto;
    background-size: cover;
    background-position: center;
    color: white;
    height: 500px;
}

.soso {
    display: block;
    margin-left: auto;
    margin-top: 75px;
    margin-right: auto
}
</style>