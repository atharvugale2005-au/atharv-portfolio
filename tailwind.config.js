/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#2563eb', // Electric Cobalt Blue
          hover: '#1d4ed8',
          light: '#eff6ff',
          muted: '#93c5fd',
          dark: '#1e40af',
        },
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          800: '#0f172a',
          900: '#090d16',
          950: '#05070c',
        }
      }
    },
  },
  plugins: [],
}
