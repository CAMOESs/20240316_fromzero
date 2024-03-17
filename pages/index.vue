<!-- @format -->

<template>
  <div class="mt-6 mb-0">
    <div>
      <!-- <div style="background-color:white ;">
        <div class="sub-header body-containt">
          <div class="new_info">
            <span class="new_info__new"> NEW </span>
            <div class="px-3">
              Restez connecter pour suivre nos actualités 24/24
            </div>
          </div>
          <div class="sub-header__item-2">
            <v-row>
              <v-col md="5" cols="0">
                <div style="font-weight: bolder; font-size : 30px">
                  Obtenez vos attestations en quelques clics, sans tracas !
                </div>
              </v-col>
              <v-col md="7" cols="0">
                <div
                  style="font-size : 25px; height: 100%; display: flex; align-items: center;"
                >
                  <div>
                    Une solution moderne pour les artisans : Attestation en
                    ligne facile et rapide
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div> -->
      <!-- header-img -->
      <div style="background-color: #ecebeb ;margin-top: 50px;">
        <div style="text-align: center;">
          <span style="font-size: 2rem;font-family: Georgia, 'Times New Roman', Times, serif; font-weight: bold;">
          BLABLA 
        </span>
        <br>
        <span style="font-size: 1.2rem;">
          BLABLA 
        </span>
        </div>
        
      </div>
      <!-- Section 1 -->
      <div class="nav">
         <a href="#" class="navlink">ACCUEIL</a>
         <a href="#" class="navlink">BOUTIQUE</a>
         <a href="#" class="navlink">À PROPOS</a>
         <a href="#" class="navlink">CONTACT</a>
         <div class="carousel">
         sdfdsf
      </div>
      </div>
      <!-- Section 1 -->
     
      <!-- footer -->
      <!-- <div style="background-color:#dcf3ff ;">
        <div class=" body-containt footer_section ">
          <div class=" footer_cointainer ">
            <div class="footer_cointainer_item_i">
              <v-img class="logo" src="/images/logo.png" alt="#"></v-img>
            </div>
            <div class="footer_cointainer_item_i">
              <div class="d-flex">
                <div>
                  <v-icon color="#0171b0">mdi-phone</v-icon>
                </div>
                <div>
                  Téléphone <br />
                  <a href="tel:+22940687884" style="color:  inherit">(+229) 40 68 78 84</a>
                </div>
              </div>
              <div class="d-flex">
                <div>
                  <v-icon color="#0171b0">mdi-email</v-icon>
                </div>
                <div>
                  Adresse Email <br />
                  <a href="mailto:info@cmabenin.bj"  style="color:  inherit">info@cmabenin.bj</a>
                </div>
              </div>
            </div>
            <div class="footer_cointainer_item_i">
              <div class="d-flex">
                <div>
                  <v-icon color="#0171b0">mdi-map-marker</v-icon>
                </div>
                <div>
                  Adresse <br />
                  ZONE CEN-SAD/ Quatier Ahwanleko plage, à coté de la commission de l'UEMOA
                </div>
              </div>
            </div>
          </div>
          <div class="py-6" style="text-align: center; font-size : 11px">
            Copyright © 2024 -CMA-BENIN. Tous droits réservés. Plateforme
            réalisée par TICS MASTER SARL.
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script setup>
 const { $auth } = useNuxtApp();
const headers = useRequestHeaders(["cookie"]);
definePageMeta({
  layout: "home",
  preload: true,
  auth: false,
});
let items = ref([
  {
    src: '/images/home/carousel/1.jpg',
  },
  {
    src: '/images/home/carousel/2.webp',
  },
  {
    src: '/images/home/carousel/3.webp',
  }
])
let items_ = ref([
  {
    src: '/images/home/carousel/2.webp',
  },
  {
    src: '/images/home/carousel/3.webp',
  },
  {
    src: '/images/home/carousel/1.webp',
  },
]) 
 
</script>
<style type="scss">

body {
  background-color:#ecebeb ;
  
} 

.nav{
  text-align: center;
  margin-top: 80px;
 
} 
.navlink{
    text-decoration: none;
    padding: 10px 85px ;
    color: rgb(131, 124, 124);
    font-size: 1.3rem;
    border-top: 1px rgb(131, 124, 124) solid;
    border-bottom: 1px rgb(131, 124, 124) solid;
  } 
.navlink:hover{
  color: rgb(189, 169, 56);
} 
.carousel {
  margin-top: 35px;
  border: 1px rgb(131, 124, 124) solid;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
} 
.parent {
  position: relative;
  width: 100%;
  height: auto;
}

 .child1 {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: auto;
}

.child2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000006f;
  z-index: 1000;
  color: white;
  overflow : hidden;
}
.child2_item{
  position : absolute;
  bottom :0;
  left: 30px;
  width : 55%;
  height: 50%;
}






.body-containt {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  background-color: white;
  padding-bottom: 50px;
  padding-top: 50px;
  font-family:'quicksand';
}

.sub-header{
  background: inherit;
}
.new_info {
  background-color: #f2f2f2;
  padding: 10px;
  margin-left : 15px;
  width: 325px;
  border-radius: 10px;
  display: flex;
  align-items: center;
}

.new_info__new {
  color: #407fc9;
  background-color: white;
  text-transform: uppercase;
  padding: 5px 10px;
  font-weight : bold;
  height: 30px;
}

.sub-header__item-2 {
  text-decoration: underline;
  text-transform: uppercase;
}

.header-img-grey {
  background: #4d4d4d;
  height: 60px;
}

.header-img__images {
  border: solid black 1px;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  background: url("/images/home/2149259373.webp") ;
  background-position: 0 0;
}

.header-img__images_i {
  transform: skewX(-10deg) translateX(50px);

}

.header-img__images_1 {
  background: transparent;
  flex: 1;
}

.header-img__images_2 {
  /* background: yellow; */
  flex: 3;
}

.header-img__images_3 {
  /* background: red; */
  flex: 2;
}

.section-item-1 {
  background: inherit;

}

.section-item-1__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 100px;
  row-gap: 50px;

}
.footer_section{
  background: inherit;
}

.footer_cointainer {

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 100px;
  row-gap: 50px;
}

@media (max-width: 768px) {
  .sub-header{
    display: none;
  }
  .header-img__images {
    height: 200px;
  }

  .header-img__images_i {
    transform: skewX(-10deg) translateX(20px);

  }
  .section-item-1__container {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }

  .footer_cointainer {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }



}
</style>
