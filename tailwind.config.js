/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        'header': '#222428',
        'section':'#1B1B1B',
      },
      width:{
        'scrol':'600px',
      }
      
      
    },
  },
  plugins: [],
}

