<template>
    <div>
        <div class="row mx-6 mt-6" >
            <div class="col col-12">
              <h4 class="mt-5" style="font-weight: bold !important;color:#1b3a4c" align="center"><strong>ANNONCES OFFICIELLES</strong></h4>
              <hr class="red title-hr">
            </div>
            <div class="col-sm-6 col-12 " >
              <div class="mt-3 v-card v-sheet v-sheet--outlined v-sheet--shaped theme--light" style="padding: 10px;">
                <div class="v-card__title uppercase"  ><strong class="text-break text-body-1 font-weight-bold">{{ communique.titre ? communique.titre :'' }}  </strong></div>
                <hr role="separator" aria-orientation="horizontal" class="mt-0 v-divider theme--light">
                <div class="v-card__text">
                  <div color="amber" class="row mx-0 mb-2 align-center"><span>
                    {{ communique.description ? communique.description :'' }}
                    </span></div>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
export default {
    props: {
        communique:  Array()
    }
}
</script>

<style>

</style>