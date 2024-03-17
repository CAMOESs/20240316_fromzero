<template>
    <v-dialog  v-model="dialog" persistent  >
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" class="mr-1" :disabled="disabled" style="color:white;" color="#1b3a4c" @click="click_to_acess_update" >
                <v-icon> {{icon_of_button}}  </v-icon><span class="d-none d-xs-none d-sm-block">{{name_of_button}}</span>
            </v-btn>
        </template>
        <v-form @submit.prevent="submit"  ref="form" class="overflow-y-auto">
            <v-card class="px-6" style="width:300; text-align: center;">
            <slot name="button_text" :item="item" >
            </slot> 
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" text @click="close(); dialog=false" outlined>
                Fermer
                </v-btn>
               
                <slot name="button_button" :form="form" :item="item" :item_object="item_object" :dialog="d">
                </slot>
            </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
    
</template>

<script setup>
    const props = defineProps([
        "name_of_button",
        "icon_of_button",
        "disabled",
        "selected",
        "click_come_to_acess_update"
    ])
    const dialog = ref(false)
    const form = ref({});
    const item = ref({});
    let item_;
    const item_object= ref({item_object:item});
    const d = ref({d:dialog});
    function submit() {} 
    function close(){
        // console.log("item_")
        // console.log(item_)
        //     item.value= item_;
    } 
    async function click_to_acess_update(){
        if(!!props.click_come_to_acess_update){
            await props.click_come_to_acess_update(item_object);
        } else{
            if(Array.isArray(props.selected) && props.selected.length===1){
                item_= {...props.selected[0]} 
                // console.log("item_")
                // console.log(item_)  
                item.value = {...props.selected[0]}; 
                // console.log("a")
                // console.log(item.value)
            }
        }  
         
    } 
</script>

<style lang="scss" scoped>

</style>