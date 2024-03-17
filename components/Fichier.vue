<template>
    <div>
     <input type="file" @change="handleFileUpload"> 

       <!--  <v-file-input v-model="props.item.photo" @change="handleFileUpload" label="Image" id="imgdemo" variant="outlined" prepend-icon="mdi-camera" ref="file"
            accept="image/*"></v-file-input>
        -->
    </div>
</template>
  
<script>
export default {
    name: 'Fichier',
    data() {
        return {
            file: null,
        }
    },
    methods: {
        handleFileUpload(event) {
            this.file = event.target.files[0]
        },
    },
}
</script>
  