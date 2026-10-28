/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      colors: {
        navy: {
          50: "#f0f4fa",
          100: "#d9e2f0",
          200: "#b3c5e1",
          300: "#8098c8",
          400: "#536fab",
          500: "#34518f",
          600: "#284176",
          700: "#1f3460",
          800: "#16244a",
          900: "#0e1835",
          950: "#070e20",
        },
        copper: {
          50: "#fef7ed",
          100: "#fdedd3",
          200: "#fad7a5",
          300: "#f5bb6d",
          400: "#ef9737",
          500: "#e87a1a",
          600: "#d35e10",
          700: "#b04710",
          800: "#8d3913",
          900: "#722f14",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-left": "slide-left 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
