import tailwindcss from "@tailwindcss/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },

    modules: [
        "@nuxt/eslint",
        "@nuxt/hints",
        "@nuxt/image",
        "@nuxt/icon",
        "@nuxt/fonts",
        "@vueuse/nuxt",
        "@nuxtjs/html-validator",
        "@pinia/nuxt",
        "@nuxtjs/color-mode",
        "@nuxtjs/seo",
        "shadcn-nuxt",
        "lenis/nuxt",
        "vue-sonner/nuxt",
        "@nuxtjs/stylelint-module",
        "v-gsap-nuxt",
        "vue3-carousel-nuxt",
    ],

    eslint: {
        config: {
            stylistic: true,
        },
    },

    // Tailwind CSS Configuration -> use @nuxtjs/tailwindcss if v7 is released
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    fonts: {
        families: [
            { name: "Geist", provider: "google" },
            { name: "Geist Mono", provider: "google" },
        ],
    },

    site: {
        // DEV VALUES -> Override site defaults using environment variables - see template.env
        url: "http://localhost:3000",
        name: "Arthur Paucke Portfolio",
        env: "development",
    },

    runtimeConfig: {
        public: {
            // Can be overridden in environment variables using NUXT_PUBLIC_BUILD_DATE
            buildDate: new Date().toISOString(),
        },
    },

    carousel: {
        prefix: "Carousel",
    },

})
