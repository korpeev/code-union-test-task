/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      green: "#32C076",
      grey: "#C1C1CB"
    },
    extend: {
      boxShadow: {
        default: '-30px 30px 50px 0px rgba(28, 28, 30, 0.10);'
      }
    },
  },
  plugins: [],
}

