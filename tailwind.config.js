/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      custom: ['"Alegreya"', "serif"],
      custom1: ['"Cantarell"', "sans-serif"],
      custom2: ['"Bad Script"', "cursive"]
    },
  },
  plugins: [],
};