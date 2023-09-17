const { withTailwindConfig } = require('@creation-ui/core')

/** @type {import('tailwindcss').Config} */
const config = withTailwindConfig({
  content: [
    //
    './**/*.{js,ts,jsx,tsx,mdx}',
    './**/*.css',
  ],
  extend: {
    transitionDelay: {
      0: '0ms',
    },
  },
  plugins: [require('@tailwindcss/typography')],
})

module.exports = config
