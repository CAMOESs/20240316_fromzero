<template>
      <!-- <div style="padding:20px">
        <v-btn 
                :elevation="0"
                class="mt-2 mx-2"
                color="#1b3a4c"
                @click="dialog = true"
                style="color:white"
                v-if="!auto"
            >
            Choisir un enfant
        </v-btn>
      </div> -->

      <v-dialog
                v-model="dialog"
                persistent
                :scrim="false"
                transition="dialog-bottom-transition"
              >
              <!-- <v-card class="px-10 py-10" color="#1b3a4c">
                  <v-card 
                          v-for="student in students"
                          :key="student.id"
                          elevation="5"
                          class="my-2"
                          
                  >
                    <v-card-text 
                        class="mx-2 my-2"
                        >
                      <div class="text-subtitle-2 font-weight-black">
                       
                        
                        <br />
                        <span style="font-weight: bold;">{{ student.Student && student.Student.lastname ? student.Student.lastname : "" }}  {{ student.Student && student.Student.firstname ? student.Student.firstname : "" }}</span>
                        <br />
                        {{ student.Student && student.Student.matricule ? "matricule : "+ student.Student.matricule : "" }}
                      </div>
                    </v-card-text>
                  </v-card>
              </v-card>  -->

              
                <v-card
                  class="mx-auto"
                  max-width="450"
                >
                  <v-toolbar color="#1b3a4c" style="font-weight:bold;color:white">
                    <v-toolbar-title style="text-align:center">Choisir un élève</v-toolbar-title>
                  </v-toolbar>

                  <v-list>
                  <v-list-item
                      v-for="student in students"
                      :key="student.id"
                      :title="student.Student && student.Student.lastname ? student.Student.lastname : ''"
                      :subtitle="student.Student && student.Student.matricule ? 'matricule : '+ student.Student.matricule : ''"
                      @click="choix_enfant(student.Student.id)" 
                    >
                      <template v-slot:prepend>
                        <v-avatar color="grey-lighten-1">
                          <v-icon color="white">mdi-account</v-icon>
                        </v-avatar>
                      </template>

                      <template v-slot:title >
                        <p
                          color="grey-lighten-1"
                          icon="mdi-information"
                          variant="text"
                        > {{ student.Student && student.Student.lastname ? student.Student.lastname : '' }}  
                        <br/> {{ student.Student && student.Student.firstname ? student.Student.firstname : "" }} </p> 
                      </template>
                  </v-list-item>
                  </v-list>
                </v-card>
      </v-dialog>
</template>
<script setup>
    import { storeToRefs } from 'pinia'
    import { useApprenant } from "@/store/apprenant";
    const props = defineProps([
      "auto",
    ]);
    const apprenantStore = useApprenant()
    const {apprenant} = storeToRefs(apprenantStore)
    const { addValueToApprenant } = apprenantStore
    const { data } = useSession();
    let items;
    let name= "apprenants";
    ({data:items} = await useFetch("/api/my-sub-menu?name="+name))

    let students = ref([]);
    let dialog = ref(false);
    search_function();
    if(data.value.user.student_id){
      search_function();
    
    } 
    async function search_function(){

      try {
              
              let response = await useFetch(`/api/apprenant_association/lassocier`, {
                  params: {id:data.value.user.id},
              }); 
              if(response.data.value){
                  students.value = response.data.value.students;
                  if(students.value.length >1){
                    dialog.value = true;
                  } 
                  // alert(JSON.stringify(students.value))
              } 
        
      }catch (error) {}
    }

    async function choix_enfant(id){
      addValueToApprenant({id:id});
      dialog.value = false;
    } 
     
</script>
  