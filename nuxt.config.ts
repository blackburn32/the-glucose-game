// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxthub/core',
    '@nuxt/content',
  ],

  $production: {
    runtimeConfig: {
      public: {
        authCallbackUrl: 'https://glucose.games/confirm',
      },
    },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      authCallbackUrl: 'http://localhost:3000/confirm',
    },
  },
  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'cloudflare-pages',
    // experimental: {
    //   openAPI: true,
    // },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: [
        '/about',
        '/confirm',
        '/login',
        '/privacy',
        '/tos',
        '/',
      ],
      cookieRedirect: true,
    },
  },
})
