/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      head: ["calc(1.375rem + 1.5vw)"],
    },
    extend: {},
  },
  plugins: [],
  mode: "jit",
};
