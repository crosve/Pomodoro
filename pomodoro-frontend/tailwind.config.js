/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to bottom, #7F6E6E 0%, #E0C2C2 75%, #E2C4C4 100%)',
    },
    extend: {
      colors : {
        "custom-gray" : "#D9D9D9",
        'brown': {
          500: '#978686', // Medium brown
          700: '#5c3a21', // Dark brown
        },

      }
    }
  },
  plugins: [],
}

