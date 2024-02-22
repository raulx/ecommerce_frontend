/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        neutralgray: "#F5F5F6",
      },
    },
  },
  plugins: [],
};
