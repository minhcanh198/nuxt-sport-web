export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-sport-web',
    htmlAttrs: {
      lang: 'vi-VN'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
    script: [
      {type: "text/javascript", charset: "utf-8", src: "/js/lib/require33d0.js"},
      {type: "text/javascript", charset: "utf-8", src: "/js/lib/jquery.min33d0.js", "data-requiremodule": "jquery"},
      {type: "text/javascript", charset: "utf-8", src: "/js/common/header33d0.js"},
      {type: "text/javascript", charset: "utf-8", src: "/js/common/macro-menu33d0.js"},
      {type: "text/javascript", charset: "utf-8", src: "/js/common/cms-upcoming-events33d0.js"},
      {type: "text/javascript", charset: "utf-8", src: "/js/common/dynamic-content33d0.js"},
      {type: "text/javascript", charset: "utf-8", src: "/js/common/countdown33d0.js"},
      {type: "text/javascript", charset: "utf-8", src: "/js/common/casino-home-page33d0.js"},
      {type: "text/javascript", charset: "utf-8", src: "/js/common/side-menu33d0.js"},
      {type: "text/javascript", charset: "utf-8", src: "/js/common/loyalty.js"},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/master.css',
    '~/assets/css/proactiveliveengage.css',
    '~/assets/css/header.css',
    '~/assets/css/color-definitions.css',
    '~/assets/css/dropdownmenu.css',
    '~/assets/css/slickcarousel.css',
    '~/assets/css/index.css',
    '~/assets/css/dynamic-content.css',
    '~/assets/css/swiper.css',
    '~/assets/css/casino-modals.css',
    '~/assets/css/side-menu.css',
    '~/assets/css/footer.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [],
    chunk: true
  }
}
