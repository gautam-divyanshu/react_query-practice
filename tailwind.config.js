/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "starWars": "#ffd41e",
        "starWarsRed":"#db322a"
      },
    },
  },
  plugins: [],
};
