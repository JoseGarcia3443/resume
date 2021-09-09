module.exports = {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Resume José Ángel García Márquez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'mask-icon', color: '#5bbad5', href: '/safari-pinned-tab.svg' },
      { name: 'msapplication-TileColor', content: '#00b9e3' },
      {
        rel: 'preconnect',
        href:
          'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href:
          'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,500&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#00B9E3' },
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css/normalize.css',
    '~css/main.scss',
    '~css/simple-grid/bootstrap-grid',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-lazysizes.client.js',
    '~/plugins/locomotiveScroll.client.js',
    '~/plugins/vuex-persist.client.js',
    '~/plugins/vue-awesome-swiper.client.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/gtm-module
    '@nuxtjs/gtm',
    // Doc: https://aceforth.com/docs/nuxt-optimized-images/
    '@aceforth/nuxt-optimized-images'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // https://i18n.nuxtjs.org/es/basic-usage
    '@nuxtjs/i18n'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  pwa: {
    manifest: {
      lang: 'es',
      theme_color: '#00B9E3'
    }
  },
  /*
   ** Sitemap module configuration
   ** See https://github.com/nuxt-community/sitemap-module#sitemap-options
   */
  sitemap: {
    hostname: 'http://example.com',
    gzip: true,
    exclude: ['/admin/**']
  },


  /* i18n configuration */
  i18n: {
    locales: [
      {
        code: 'es',
        file: 'es-ES.js'
      },
      {
        code: 'en',
        file: 'en-EN.js'
      }
    ],
    strategy: 'no_prefix',
    langDir: 'lang/',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'  // recommended
    }
  },
  /*
   ** Gtm module configuration
   ** See https://github.com/nuxt-community/gtm-module#options
   */
  gtm: {
    id: 'GTM-MW75VD4'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Optimized Images module configuration
   ** See https://aceforth.com/docs/nuxt-optimized-images/configuration
   */
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },
  /*
   ** Build configuration
   */
  generate: {
    dir: 'dist'
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      vue.transformAssetUrls.img = ['data-src', 'src']
      vue.transformAssetUrls.source = ['data-srcset', 'srcset']
    },
    transpile: ['gsap']
  }
}
