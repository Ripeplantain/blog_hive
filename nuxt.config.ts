import { resolve } from "path"
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    '@': resolve(__dirname)
  },
  modules: [
    '@pinia/nuxt'
  ],
})
