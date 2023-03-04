/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-annex': '#5600AB'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      borderRadius: {
        '4xl': '40px'
      },
      height: {
        17: '272px'
      },
      width: {
        17: '272px'
      },
      lineHeight: {
        1: '0.25rem'
      }
    },
  },
  plugins: [],
}