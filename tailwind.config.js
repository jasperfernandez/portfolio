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
          // DEFAULT: '#0066b2',
          DEFAULT: '#0074d9',
        },
        foreground: {
          DEFAULT: '#3b3b3b',
        },
      },
    },
  },
  plugins: [],
};
