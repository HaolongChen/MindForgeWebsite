import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  content: {
    experimental: { nativeSqlite: true },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ['~/assets/css/main.css', 'github-markdown-css/github-markdown.css', '~/assets/css/github-markdown-light.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@clerk/nuxt',
    '@nuxt/eslint',
  ],

  // Auto-import configuration
  imports: {
    presets: [
      {
        from: '@clerk/nuxt',
        imports: ['useAuth', 'SignedIn', 'SignedOut', 'SignInButton', 'UserButton'],
      },
    ],
  },

  // App configuration
  app: {
    head: {
      title: 'MindForge - Where Ideas Take Shape',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Transform your thoughts into organized knowledge with AI-powered journals and intelligent conversations.' },
        { name: 'theme-color', content: '#3b82f6' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  shadcn: {
    // prefix: "Shadcn",
    prefix: '',
    componentDir: '@/components/ui',
  },
  colorMode: {
    classSuffix: '',
  },
  routeRules: {
    '/api/m/**': {
      // eslint-disable-next-line node/prefer-global/process
      proxy: `${process.env.NUXT_API_URL}api/**`,
      cors: true,
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
