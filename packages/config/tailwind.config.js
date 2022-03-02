const colors = require('tailwindcss/colors')

module.exports = {
  content: ['../../packages/ui/**/*.{js,ts,jsx,tsx}', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        white: colors.white,
      },
    },
  },
  plugins: [],
}
