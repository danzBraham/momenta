/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px',
      'lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        poppins: 'Poppins'
      },
      colors: {
        darkBrown: '#1C1209',
        brown: '#BD622A',
        conBrown: '#D69443',
        choco: '#924C20'
      },
      boxShadow: {
        'md': '0 3px 0 #E5E5E5'
      }
    },
  },
  plugins: [],
}
