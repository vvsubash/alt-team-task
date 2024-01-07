// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ['@pinia/nuxt', "@nuxtjs/i18n"],
  pinia: {
    storesDirs: [
      './store/**s'
    ]
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/awsm.css/dist/awsm.min.css",
          type:"text/css"
        }
      ]
    }
  }
})