/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#121212', // Siyah ana renk
        rgba: 'rgba(0, 0, 0, 0.8)', // Daha opak siyah
        skeleton: '#1E1E1E', // Daha açık bir siyah tonu skeleton rengi
        text: '#E0E0E0', // Yazı rengi için açık gri
        accent: '#252525', // Vurgu rengi için koyu gri
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],

}
