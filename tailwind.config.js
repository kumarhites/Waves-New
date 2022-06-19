/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Fascinate Inline'],
      'body': ['Poppins'],
    },
    extend: {
      fontFamily : 'Fascinate Inline'
    },
  },
  plugins: [],
}