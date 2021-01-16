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
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      blue: colors.cyan,
      green: colors.green,
      red: colors.rose,
      white: colors.white,
      black: colors.black,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
