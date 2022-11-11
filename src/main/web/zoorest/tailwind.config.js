/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      colors: {
        'blue-sapphire': '#006992',
        'baby-blue-eyes': '#9dcaff',
        'indigo-dye': '#27476e',
        'oxford-blue': '#001D4A',
        'pale-spring-bud': '#EAF8BF'
      },
      dropShadow: {
        'blur': '0 0 3px rgba(245, 147, 147, 0.80)',
        'shine': '0 0 5px rgba(255, 61, 61, 1)'
      }
    },
  },
  plugins: [],
}
