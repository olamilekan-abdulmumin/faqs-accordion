/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Work Sans", "sans"],
    },
    colors: {
      purple: "hsl(292, 16%, 49%)",
      "dark-purple": "hsl(292, 42%, 14%)",
      "light-pink": "hsl(275, 100%, 97%)",
    },
    extend: {},
  },
  plugins: [],
};
