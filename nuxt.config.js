export default {
  server: {
    port: 3003,
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dr.toros',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n', '@nuxtjs/markdownit'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  i18n: {
    locales: [
      {
        code: 'hu',
        name: 'Magyar',
        file: 'hu-HU.js',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en-GB.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'hu',
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    runtime: true,
  },

  googleFonts: {
    families: {
      'Source+Serif+Pro': [200, 400, 700],
    },
  },
}
