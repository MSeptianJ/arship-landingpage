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
        clr1: '#FFF48F',
        clr2: '#FFE790',
        clr3: '#FCD280'
      },
      fontFamily: {
        title: ['Inter', ...defaultTheme.fontFamily.sans],
        content: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        waveLeft: {
          '0%, 100%': {
            transform: 'translateX(-50%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(50%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
        },
        waveRight: {
          '0%, 100%': {
            transform: 'translateX(50%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(-50%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
        }
      },
      animation: {
        waveLeft: 'waveLeft 10s linear infinite',
        waveRight: 'waveRight 10s linear infinite',
      }
    },
  },
  plugins: [],
}

