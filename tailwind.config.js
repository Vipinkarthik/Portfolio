/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        charcoal: {
          950: '#05070c',
          900: '#0a0e17',
          850: '#0e1422',
          800: '#151d30',
          700: '#1f2b46',
          600: '#2c3c61',
        },
        accent: {
          DEFAULT: '#00f0ff',
          hover: '#38bdf8',
          glow: 'rgba(0, 240, 255, 0.28)',
          muted: '#0284c7',
          dim: 'rgba(0, 240, 255, 0.12)',
        },
        violet: {
          accent: '#8b5cf6',
          glow: 'rgba(139, 92, 246, 0.25)',
        }
      },
      boxShadow: {
        'accent-glow': '0 0 25px rgba(0, 240, 255, 0.28)',
        'accent-glow-lg': '0 0 45px rgba(0, 240, 255, 0.35)',
      },
      keyframes: {
        'subtle-pulse': {
          '0%, 100%': { opacity: 0.85, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'subtle-pulse': 'subtle-pulse 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}