/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary: a deep evergreen with a hint of teal.
        evergreen: {
          50: '#effaf6',
          100: '#d8f1e7',
          200: '#b2e2d0',
          300: '#7fcab1',
          400: '#4bab8e',
          500: '#2b8f74',
          600: '#1e735e',
          700: '#1a5c4d',
          800: '#174a3f',
          900: '#123a32',
          950: '#08221d',
        },
        // Accent: sunbaked Texas terracotta.
        clay: {
          50: '#fdf5f0',
          100: '#fbe7db',
          200: '#f6cbb2',
          300: '#efa881',
          400: '#e6814f',
          500: '#dc6430',
          600: '#c24e22',
          700: '#a13d1e',
          800: '#82331f',
          900: '#6a2c1c',
        },
        // Neutral: warm limestone and sand.
        sand: {
          50: '#fbf9f5',
          100: '#f4efe6',
          200: '#e8dfcf',
          300: '#d6c8ae',
          400: '#bba98a',
          500: '#9f8c6c',
          600: '#7f6f55',
          700: '#625645',
          800: '#463e33',
          900: '#2c2721',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgb(8 34 29 / 0.04), 0 8px 24px rgb(8 34 29 / 0.06)',
        lift: '0 2px 4px rgb(8 34 29 / 0.06), 0 20px 48px rgb(8 34 29 / 0.14)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 0.4s ease-out both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
