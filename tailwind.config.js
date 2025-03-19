/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#34C063",
        secondary: "#F4F4F4",
        darkgray: "#4F5D75",
        mediumgrey: "#CACACA",
        lightgrey: "#F4F4F4",
        success: "#1AB800",
        warning: "#FFBA08",
        error: "#F15152",
      },
    },
    height:{
      '128': '32rem', // Adds a new height utility h-128
      'custom': '500px', // Adds a new height utility h-custom

    }
  },
  variants: {},

  plugins: [],
};