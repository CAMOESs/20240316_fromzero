<template>
    <div>
        <v-card class="mt-3" shaped>
              <v-card-title class="bg-gradient-to-r from-opacity-60 via-teal-500 to-white text-white">
                <strong style="color:black">{{ types.name }}</strong>
              </v-card-title>
              <v-divider class="mt-0"></v-divider>
              <v-card-text>
                <v-row align="center" class="mx-0 mb-2" color="amber">
                  <span>  ({{ types.nombre_documents }} )documents</span> 
                </v-row>
              </v-card-text>
              <v-card-actions class="text-center">
                <v-spacer></v-spacer>
                <v-btn small class="px-5" @click="docCategory(types.id)" color="primary" dark>
                  Afficher
                </v-btn> 
              </v-card-actions>
            </v-card> 
            <!--v-container> 
              <v-row class="mx-6 mt-6 mb-16" v-if="is_doc == 1">
          <v-col cols="12" sm="6" v-for="(document, index) in documents" :key="index">
            
            <div class="book-store" style="background-color: #eee">
              <img 
                class="_df_thumb book-card-img" 
                :src="`/api/image/document/${document.id}`" 
                :id="`df_manual_thumb-${document.id}`" 
                :source="`/api/image/documentpdf/${document.id}`" 
                style="height:250px;width:100%" 
                alt="#"
              /> 
              <div class="book-cards" style="padding: 0px">

                <div class="content-wrapper">

                  <div class="card-content">
                      <div class="book-name">{{ document.title }}</div>
                      <div class="rate">
                        <span class="book-voters card-vote">Type : {{ document.categorie_name ? document.categorie_name : '' }}
                        </span>
                      </div>
                      <div class="book-sum card-sum">
                        {{ document.abstract }}
                      </div>
                    </div>
                  </div>
                  <div class="likes"></div>
              </div>
            </div>
          </v-col>
        </v-row>
            </v-container-->
    </div>
</template>
<script>
export default {
    props: {
        types:  Array()
    },
   

  }


</script>

<style>

</style>