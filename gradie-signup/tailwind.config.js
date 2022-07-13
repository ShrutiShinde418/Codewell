/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: "#013243",
        secondary: {
          100: "#86BFD3",
          200: "#8D8D8D",
        },
        grey: "#BCBCBC",
      },
      fontFamily: {
        body: ["Roboto"],
      },
      backgroundImage: {
        bgImage: "url('../Assets/Background.png')",
      },
    },
  },
  plugins: [],
};
