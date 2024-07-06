/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,tsx}',
    './src/**/**/*.{html,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('./src/assets/239884819_1409526429430543_3468945226487686512_n.jpg')",
      },
      colors: {
        'blue': '#A8E3EB',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      // Media queries reference points
      screens: {
        '2xl': {'min': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'min': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'min': '767px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'sm': {'max': '767px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}