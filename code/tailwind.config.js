/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,tsx}',
    './src/**/**/*.{html,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': 'var(--color-background-default)',
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
      boxShadow: {
        "sm": "0 5px 5px 0 rgb(34 34 34 / 0.1)"
      },
      // Media queries reference points
      screens: {
        '2xl': {'min': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'min': '1280px'},
        // => @media (max-width: 1279px) { ... }

        'lg': {'max': '1279px'},

        'lgx': {'min': '767px', 'max': '1279px'},
      // => @media (min-width: 767px and max-width: 1279px) { ... }
  
        'sm': {'max': '767px'},
        // => @media (max-width: 639px) { ... }
        'sx': {'min': '768px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
}