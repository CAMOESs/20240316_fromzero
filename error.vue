<template>
    <div>
        <div class="headers_">
            <div class="soso">
                <div class='line'>
                    <h1 class='' style="color:white">Désolé !</h1>
                </div>
            </div>
            <br>
            <v-row class="ma-0 pa-0">
              <v-col
                cols="4"
                style="background-color: rgb(0, 104, 40)"
                class="ma-0 pa-1"
              ></v-col>
              <v-col
                cols="4"
                style="background-color: rgb(255, 190, 0)"
                class="ma-0 pa-1"
              ></v-col>
              <v-col
                cols="4"
                style="background-color: rgb(235, 0, 0)"
                class="ma-0 pa-1"
              ></v-col>
            </v-row>
          
            <h3 style="color: white;">{{ error.statusCode && error.statusCode=='403' ? 'Vous n\'avez pas accès à cette page':'' }}{{ error.statusCode && error.statusCode=='404' ? 'la page que vous cherchez n\'existe pas':'' }} {{ error.statusCode && error.statusCode=='500' ? 'Problème serveur':'' }}</h3>
            <br>
            
           
             
          <p :text="replaceText(error.message)"> {{ texte }}
          </p> 
          <br>
          
             
            <a href="/" class="button" style="background-color: white; color: #1b3a4c; margin-right: 20px">Retourner à l'accueil</a>
        </div>
    </div>
    <v-row justify="center" no-gutters style="margin-top: 20px;" class="footer">
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} <strong>:  EducMaster/ MESTFP / République du bénin. Tous droits réservés. Plateforme réalisée par </strong> <a href="https://ticsmaster.bj/" target="_blank" style="text-decoration: none;">TICS MASTER SARL </a>
      </v-col>
    </v-row>
    
</template>

<script setup>
 
 definePageMeta({
  layout: "home",
  auth: false,
  preload: true,
});

 defineProps(['error']);
/*  function message_1(di){
  if (di='403'){
   return 'Accèss non authorisé';
  }else if(di='404'){
    return 'La page n\'existant pas';
  }else{
    return 'Erreur Server';
  } 
  }  */

  let texte= ref() 

  function replaceText(text) {
    if (text.includes("Page not found")) {
      texte=text.replace(/Page not found/g, 'Page non retrouvée');
    } else {
      texte=text
    }
  }

</script>

<style lang="scss">
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px; /* ajustez la hauteur selon vos besoins */
}
.p.h1.h2.h3.h4.h5.span.li {
    font-family: Montserrat;
}
.headers_ {
  padding: 70px;
  text-align: center;
  background-image: linear-gradient(to left top,
      rgba(46, 42, 42, 0.6),
      hsl(224, 53%, 55%)),
    url("/images/bga.jpeg");
  background-repeat: no-repeat;
  background-attachment: auto;
  background-size: cover;
  background-position: center;
  color: white;
  height: 500px;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
  }

.pop-outin {
  animation: 2s anim-popoutin ease infinite;
}
</style>