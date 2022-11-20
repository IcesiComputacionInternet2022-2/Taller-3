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
      dropShadow: {
        'blur': '0 0 3px rgba(245, 147, 147, 0.80)',
        'shine': '0 0 1px rgba(255, 61, 61, 1)',
        'shineField': '0 0 5px rgba(255, 159, 69 1)'
      },
    },
  },
  plugins: [],
}
