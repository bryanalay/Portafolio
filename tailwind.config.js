/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      },
      colors: {
        platinum: {
          DEFAULT: '#dee5e5',
          100: '#273232',
          200: '#4f6565',
          300: '#789595',
          400: '#aabdbd',
          500: '#dee5e5',
          600: '#e4e9e9',
          700: '#eaefef',
          800: '#f1f4f4',
          900: '#f8fafa'
        },
        cambridge_blue: {
          DEFAULT: '#9dc5bb',
          100: '#1a2c28',
          200: '#345950',
          300: '#4e8577',
          400: '#6faa9c',
          500: '#9dc5bb',
          600: '#afd0c8',
          700: '#c3dcd6',
          800: '#d7e8e3',
          900: '#ebf3f1'
        },
        mint: {
          DEFAULT: '#17b890',
          100: '#05251d',
          200: '#094a3a',
          300: '#0e7057',
          400: '#129574',
          500: '#17b890',
          600: '#29e5b6',
          700: '#5eebc8',
          800: '#94f2da',
          900: '#c9f8ed'
        },
        hookers_green: {
          DEFAULT: '#5e807f',
          100: '#131a1a',
          200: '#263433',
          300: '#394d4d',
          400: '#4c6766',
          500: '#5e807f',
          600: '#7c9e9d',
          700: '#9cb6b5',
          800: '#bdcece',
          900: '#dee7e6'
        },
        dark_green: {
          DEFAULT: '#082d0f',
          100: '#020903',
          200: '#031106',
          300: '#051a09',
          400: '#06230b',
          500: '#082d0f',
          600: '#157928',
          700: '#23c741',
          800: '#63e37b',
          900: '#b1f1bd'
        }
      }
    }
  },
  plugins: []
}
