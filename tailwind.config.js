/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        accent: '#FFC700',
        accentdark: '#F19601',
      },
      fontFamily: {
        title: ['Inter', ...defaultTheme.fontFamily.sans],
        content: ['Roboto', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

