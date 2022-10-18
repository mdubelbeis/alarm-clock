/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        digital: ["digital", "sans-serif"],
      },
      colors: {
        "dull-orange": "#ffa346",
        "dull-yellow": "#ffd146",
      },
    },
  },
  plugins: [],
};
