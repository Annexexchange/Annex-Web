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
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      height: {
        68: '272px'
      },
      width: {
        68: '272px'
      },
      lineHeight: {
        1: '0.25rem'
      }
    },
  },
  plugins: [],
}