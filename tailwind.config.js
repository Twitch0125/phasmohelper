const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      blue: colors.cyan,
      green: colors.green,
      red: colors.rose,
      white: colors.white,
      black: colors.black,
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.100'),
            h1: {
              color: theme('colors.green.400')
            },
            h2: {
              color: theme('colors.green.400')
            },
            a: {
              color: theme('colors.green.400')
            },
            'hover:a': {
              color: theme('colors.green.300')
            },
            blockquote:{
              color: theme('colors.green.200'),
              background: theme('colors.gray.800')
            }
          }
        }
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
