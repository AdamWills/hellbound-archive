/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hugo_stats.json"],
  darkMode: "class",
  theme: {},
  plugins: [require("@tailwindcss/typography")],
};
