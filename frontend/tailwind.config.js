/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  fontFamily: {
    sans: ["Bungee Spice", "sans-serif"],
    spice: ["Bungee Spice", "sans-serif"],
  },
};
