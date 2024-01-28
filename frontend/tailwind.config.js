/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#273248",
        alt: "#101511",
      },
      colors: {
        main: "#FFA364",
      },
      borderColor: {
        main: "#717476",
      },
    },
  },
  plugins: [],
};
