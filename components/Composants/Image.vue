<template>
    <div class="column">
        <div class="card">
            <div class="card-title">
                <h4></h4>
            </div>
            <div class="card-body"><img class="img-responsive" :src="`/images/albums/${image.id}.png`"
                    style="height: 300px;width: 100%;" alt="#" />
            </div>
            <div class="card-footer"> 
                {{image.titre}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: Array,
    },

}
</script>
<style lang="scss"></style>