/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1216px', 
    },
    fontFamily: {
      sans: ['"Suisse Intl"', 'helvetica' ,'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}

