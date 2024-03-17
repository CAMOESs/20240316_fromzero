/** @format */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s | CQM",
      title: "Accueil",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      // script: [
      //  "/public/dflipOffline/dflip/js/libs/jquery.min.js",
      //   "/public/dflipOffline/dflip/js/dflip.js"
      // ],

      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon-32x32.png",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/style__.css",
  ],
  modules: ["@sidebase/nuxt-auth", "@vuestic/nuxt", "@pinia/nuxt"],

  build: {
    transpile: ["vuetify", "@vuepic/vue-datepicker"],
  },

  plugins: [],
  auth: {
    basePath: "/api/auth",
    origin: process.env.AUTH_HOSTNAME,
    enableGlobalAppMiddleware: true,
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  imports: {
    dirs: ["./stores"],
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  /*  experimental: {
    renderJsonPayloads: true,
  }, */
});
