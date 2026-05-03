/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dash-purple': '#1a0b2e',
        'dash-card': '#2d1b4d',
        'neon-cyan': '#00f2ff',
        'neon-pink': '#ff00d4',
      },
    },
  },
  plugins: [],
}