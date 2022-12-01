// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  srcDir: "src",
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL ?? "http://localhost:8000",
    },
  },
  css: ["@/assets/styles/global.css"],
  modules: ["@pinia/nuxt"],
});
