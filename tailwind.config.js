/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      colors: {
        // Deep evergreen: dark sections, headings and body text.
        pine: {
          50: "#f6f5ef",
          100: "#e8ebe0",
          200: "#cdd6c6",
          300: "#a5b69f",
          400: "#7a9378",
          500: "#58735a",
          600: "#425c45",
          700: "#324836",
          800: "#22372a",
          900: "#15271d",
          950: "#0b1811",
        },
        // Burnished gold: accents, calls to action and highlights.
        gold: {
          50: "#fbf8ef",
          100: "#f5ecd3",
          200: "#ebd8a6",
          300: "#e0c07a",
          400: "#d4a955",
          500: "#c08f3a",
          600: "#9a6b24",
          700: "#7d5520",
          800: "#664520",
          900: "#553a1f",
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
