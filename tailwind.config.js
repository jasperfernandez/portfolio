/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0066b2',
          // DEFAULT: '#0074d9',
        },
        background: {
          DEFAULT: 'hsl(220, 11%, 94%)',
        },
        foreground: {
          DEFAULT: '#3b3b3b',
        },
      },
      keyframes: {
        'border-expand': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'border-expand': 'border-expand 0.3s ease forwards',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      animation: ['hover'],
    },
  },
  plugins: [],
};
