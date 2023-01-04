/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
     extend:{
       boxShadow: {
        '5xl': '20px 20px50px rgba(0, 0, 0, 0.5)',
       }
      },
    fontFamily: {
      custom: ['"Alegreya"', "serif"],
      custom1: ['"Cantarell"', "sans-serif"],
      custom2: ['"Bad Script"', "cursive"]
    },
  },
  plugins: [],
};