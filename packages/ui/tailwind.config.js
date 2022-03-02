const baseConfig = require('config/tailwind.config')
const colors = require('tailwindcss/colors')

module.exports = {
  ...baseConfig,
  // theme: {
  //   colors: {
  //     primary: colors.blue,
  //   },
  // },
  content: ['../../packages/ui/**/*.{js,ts,jsx,tsx}', './**/*.{js,ts,jsx,tsx}'],
  // plugins: [],
}
