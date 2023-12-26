/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px"
    },
    extend: {
      colors: {
        primary: "#f14e95",
        secondary: "#64748b",
        blc: "#0f172a",
        bg: "#020617",
      },
      screens: {
        "2xl": "1320px"
      }
    },
  },
  plugins: [],
};
