const baseConfig = require('config/tailwind.config')

module.exports = {
  ...baseConfig,
  content: ['../../packages/ui/**/*.{js,ts,jsx,tsx}', './**/*.{js,ts,jsx,tsx}'],
  plugins: [],
}
