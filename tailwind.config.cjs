/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      typing: 'typing 5s infinite steps(34)',
    },
    colors: {
      'ash':'#f6f9fc',
      'white': '#fff',
      'black': '#000',
      'purple': '#581c87',
      'light-blue': '#21A5FD',
      'dark-blue': '#005CB9',
      'yellow': '#FAAF40;',
      'green': '#8FC74B;',
      'pink':'#e924a4'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    minHeight: {
      '1/2': '50%',
    },
    keyframes: {
      typing: {
        '0%': {
          width: '0',
        },
        '80%': {
          width: '34ch',
        },
        '100%': {
          width: '34ch',
        },
      } 
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}