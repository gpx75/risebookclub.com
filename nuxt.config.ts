import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // build
  build: {
    transpile: ["@headlessui/vue", "@heroicons/vue"],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: ["@headlessui/vue", "@heroicons/vue/solid", "@heroicons/vue/outline", "vue"],
    },
  },
  css: ["~/assets/css/tailwind.css"],
});
