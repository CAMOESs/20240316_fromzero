/** @format */

// plugins/vuetify.js
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
//import { VDataTable } from 'vuetify/labs/VDataTable'
import { createVuetify } from "vuetify";
// import * as labs from 'vuetify/labs/components'
// import * as components_basics from 'vuetify/components'
import {
  VCarouselItem,
  VCarousel,
  VProgressLinear,
  VCardSubtitle,
  VSelect,
  VMenu,
  VTable,
  VAlert,
  VAutocomplete,
  VRadioGroup,
  VRadio,
  VRow,
  VCol,
  VTextField,
  VTextarea,
  VContainer,
  VBtn,
  VCard,
  VCardActions,
  VCardTitle,
  VCardText,
  VToolbar,
  VToolbarTitle,
  VList,
  VListItem,
  VListItemTitle,
  VAvatar,
  VIcon,
  VTab,
  VTabs,
  VSheet,
  VDialog,
  VFileInput,
  VImg,
  VLayout,
  VSpacer,
  VApp,
  VAppBar,
  VForm,
  VTooltip,
  VSnackbar,
  VNavigationDrawer,
  VMain,
  VDivider,
  VCheckbox,
  VWindow,
  VWindowItem,
  VPagination,
  VSwitch,
  VChip,
} from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    // components: {
    //   ...labs, ...components_basics,
    //   /* VDataTable */
    // },
    components: {
      VCarouselItem,
      VCarousel,
      VProgressLinear,
      VCardSubtitle,
      VSelect,
      VMenu,
      VTable,
      VAlert,
      VAutocomplete,
      VRadioGroup,
      VRadio,
      VRow,
      VCol,
      VTextField,
      VTextarea,
      VContainer,
      VBtn,
      VCard,
      VCardActions,
      VCardTitle,
      VCardText,
      VToolbar,
      VToolbarTitle,
      VList,
      VListItem,
      VListItemTitle,
      VAvatar,
      VIcon,
      VTab,
      VTabs,
      VSheet,
      VDialog,
      VFileInput,
      VImg,
      VLayout,
      VSpacer,
      VApp,
      VAppBar,
      VForm,
      VTooltip,
      VSnackbar,
      VNavigationDrawer,
      VMain,
      VDivider,
      VCheckbox,
      VWindow,
      VWindowItem,
      VPagination,
      VSwitch,
      VChip,
    },
    directives,
    //defaultSet: 'mdi',
    // defaults: {
    //   VDataTable: {
    //     fixedHeader: true,
    //     noDataText: 'Results not found',
    //   },
    // },
  });

  nuxtApp.vueApp.use(vuetify);
});