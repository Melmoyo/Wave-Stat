/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        card: "#030304",
        sidebar: "#0f0f18",
        pink: "#ff4d8d",
        purple: "#a78bfa",
        teal: "#2dd4bf",
        amber: "#fbbf24",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
