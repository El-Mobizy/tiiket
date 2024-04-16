/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        og_blue: "#2262c6",
        og_blue_1: "#3b79de",
        og_blue_2: "#a4c1f1",
        blue: "#495CEF",
        yellow: "#FFC328",
        "gray-dark": "#8D8D8D",
        "gray-med": "#D9D9D9",
        "gray-light": "#F3F3F3",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
