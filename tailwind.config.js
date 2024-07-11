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
      sans: ['Inter Var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        secondary: '#5C9EAD',
        primary: '#326273',
        accent: '#f2a831',
      },
    },
  },
  plugins: [],
}

