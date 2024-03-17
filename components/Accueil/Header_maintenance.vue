<template>
  <div>
    <v-layout>
      <ClientOnly>
        <v-app-bar elevation="4" id="nav" style="height: 77px;">
          <img
            class="lolo"
            src="/images/logo.png"
            alt="#"
          />

          <v-spacer> </v-spacer>
      
        </v-app-bar>
      </ClientOnly>
    </v-layout>

  </div>
</template>
<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss">
.lolo {
  margin-left: 10px;
 padding: 5px;
 height: 80px;
 
}

@media screen and (max-width: 900px) {
  .lolo {
    width: 120px;
    height: 50px;
  }
  .lolo {
    width: 120px;
    height: 60px;
    margin-left: 10px;
  margin-right: 5px;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .lolo {
    width: 150px;
    height: 70px;
    margin-left: 10px;
    margin-right: 5px;
  }
}

#nav{
  box-shadow: 0 0 7px rgb(0 0 0 / 11%) !important ;
  background-color: white
} 

</style>