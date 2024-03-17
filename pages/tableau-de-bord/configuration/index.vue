<!-- @format -->

<template>
    <div>
      <v-row class="mt-9 mx-6">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(item, index) in items"
          :key="index"
        >
          <v-btn
            height="60"
            color="#1b3a4c"
            class="text-white align-center btn-multiline ajust-font-size"
            max-width="250"
            style="width: 100%; text-align : center; "
            :to="item.to"
          >
            <!-- <v-icon>{{ item.icon }} </v-icon> -->
            <span class="text-wrap">
              <small style="white-space: wrap !important;"
                >{{ item.title }}
              </small></span
            >
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </template>
  <script setup>
  const headers = useRequestHeaders(["cookie"]);
  useHead({ title: "Configuration" });
    let items;
    let name= "configuration";
    ({data:items} = await useFetch("/api/my-menu/sub?name="+name))
  </script>
  <style>

.ajust-font-size{
  font-size : 2rem;
} 
@media only screen and (min-width: 700px) and (max-width: 600px)  {
  .ajust-font-size{

    font-size : 12px;
    /* font-size : 1rem !important; */
  } 

  /*  > <  */
} </style>