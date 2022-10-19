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
        gradient2: '#bd5762',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 33% 33%, #FF6978, #404040)',
        'gradient-radial2': 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 50%)',
        'gradient-radial3': 'radial-gradient(circle at 50% 0px, #ffffff, rgba(255, 255, 255, 0) 58%)',
      },
    },
  },
  plugins: [],
}
