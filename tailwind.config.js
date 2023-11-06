/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        PopUp: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        PopUp: "PopUp 700ms ease-in-out 1 forwards normal",
      }
    },
  },
  plugins: [],
}

