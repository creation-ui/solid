import { withTailwindConfig } from '@creation-ui/core'

/** @type {import('tailwindcss').Config} */
module.exports = withTailwindConfig({
  content: ['./packages/solid/**/*.{html,js,jsx,ts,tsx}', './src/**/*.{html,js,jsx,ts,tsx}', './src/**/*.css'],
  theme: {
    extend: {},
  },
  plugins: [],
})
