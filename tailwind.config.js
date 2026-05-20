/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        garden: {
          background: "#F8F4EC",
          green: "#8FAF9A",
          deep: "#4F6F52",
          lavender: "#C8B6D8",
          pink: "#E7B7A5",
          gold: "#D8A84F",
          dark: "#2F3A32",
          muted: "#7C857B",
          warning: "#D8897A",
        },
      },
      boxShadow: {
        paper: "0 18px 45px rgba(79, 111, 82, 0.14)",
        petal: "0 10px 18px rgba(79, 111, 82, 0.12)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-1deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        fadeIn: "fadeIn 420ms ease-out both",
      },
    },
  },
  plugins: [],
};
