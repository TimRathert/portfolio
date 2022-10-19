/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       color1: '#FF6978',  
       color2: '#FFFCF9',
       color3: '#B1EDE8',
       color4: '#8F98A1',
       color5: '#6D435A',
       color6: '#352D39',  
      },
    },
  },
  plugins: [],
}
