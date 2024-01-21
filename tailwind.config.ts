/** @type {import('tailwindcss').Config} */
import { type Config } from 'tailwindcss';
const defaultTheme = require("tailwindcss/defaultTheme");

export default <Config> {
    content: [
        './app.{js,ts,vue}',
        './assets/**/*.{css,scss,sass,theme.ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './components/**/*.{vue,js,ts}',
        './node_modules/preline/preline.js',
    ],

    darkMode: 'class',

    safelist: [
        {
            pattern: /(col-span|grid-cols)-(1|2|3|4|5|6|7|8|9|10|11|12|full)/,
            variants: ['sm', 'md', 'lg', 'xl', '2xl'],
        },
    ],

    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                "2xs": ['0.625rem', { lineHeight: '0.75rem' }],
                "3xs": ['0.5rem', { lineHeight: '0.625rem' }],
            },
            lineHeight: {
                "extra-tight": '1.125',
            },
            spacing: {
                "safe-top": 'env(safe-area-inset-top)',
                "safe-bottom": 'env(safe-area-inset-bottom)',
                "safe-left": 'env(safe-area-inset-left)',
                "safe-right": 'env(safe-area-inset-right)',
            },
            colors: {
                parent: 'var(--parent-background-color, initial)',
                section: 'var(--section-background-color, initial)',
            },
        }
    },

    corePlugins: {
        container: false
    },
    plugins: [
        require('preline/plugin'),
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/typography'),
    ]
}