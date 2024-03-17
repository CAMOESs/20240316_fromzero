<template>
    <div class="row  mt-8">
        <div class="v-sheet theme--light">
            <div class="px-8 py-4" style="">
                <v-row class="article1">
                    <v-col>
                        <!--h3 style="font-weight:bold!important;text-decoration: underline;" align="left" class="v-card__title uppercase">
                                
                            </h3-->

                            <div class="v-card__title uppercase mb-4"  style="text-decoration: underline;"><strong class="text-break text-body-1 font-weight-bold">{{ donne.titre ? donne.titre : '' }} </strong></div>    
                        <p style="font-family:Arial, Helvetica, sans-serif;">{{ donne.description ?
                            donne.description : '' }}</p>
                        <div style="margin-top: 10px;">
                           <!--  <p style="color:#1b3a4c"> <em>publié le <v-icon icon="mdi-calendar-outline"
                                        style="color:#1b3a4c"></v-icon>: ({{ formatDate(donne.created_at) }})</em></p> -->
                        </div>
                    </v-col>
                    <v-col>
                        <img :src="`/api/image/article/${donne.id}`" style="height:300px;width: 98%;">
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    props: {
        donne: Array(),
    },
    data() {
        return {
            format: 'DD/MM/YYYY'
        }
    },

    methods: {
        formatDate(date) {
            return moment(date).format('DD/MM/YYYY');
        }
    }
}

</script>

<style lang="scss"></style>