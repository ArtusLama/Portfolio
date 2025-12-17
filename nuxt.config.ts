// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    '@nuxtjs/html-validator',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo',
    'shadcn-nuxt',
    'lenis/nuxt',
    'vue-sonner/nuxt'
  ]
})