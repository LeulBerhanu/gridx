/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #303030, #151515)",
      },
      borderRadius: {
        "4xl": "30px",
      },
    },
  },
  plugins: [],
};
