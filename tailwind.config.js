/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        'brand-primary':'#3BB77E'
      }
    }
  },
  plugins: [],
}
