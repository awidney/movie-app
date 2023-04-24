/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        background: "#10141E",
        accent: "#887190",
      },
    },
  },
  plugins: [],
};
