// https://nuxt.com/docs/api/configuration/nuxt-config

// @ts-ignore
import { sutando } from "sutando";
import config from "./sutando.config.cjs";

export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: true,
    nitro: {
        preset: 'cloudflare-pages'
    },
    app: {
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no' },
                {
                    name: 'apple-mobile-web-app-status-bar-style',
                    content: 'black-translucent',
                }
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                // { rel: 'manifest', href: '/site.webmanifest' }
            ]
        },
    },

    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-fonts',
      '@nuxt/image',
      'nuxt-icon',
      'nuxt-auth-sanctum',
      '@formkit/auto-animate/nuxt'
    ],

    tailwindcss: {
        cssPath: '~/assets/css/base.scss',
        configPath: '~/tailwind.config.ts',
        viewer: false,
    },

    googleFonts: {
        families: {
            Poppins: [300, 400, 500, 600, 700],
        }
    },

    sanctum: {
        baseUrl: process.env.APP_URL,
        origin: process.env.SPA_URL,
        redirect: {
            keepRequestedRoute: true,
            onLogin: '/dashboard', // Custom route after successful login
        },
    },
})
