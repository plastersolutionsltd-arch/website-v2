/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './*.html', './**/*.html'],
  theme: {
    extend: {
      colors: {
        lime: { 400: '#00FF00', 500: '#00E600', 600: '#00CC00' },
        charcoal: { 700: '#3d3d3d', 800: '#2d2d2d', 900: '#1a1a1a' },
        slate: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 700: '#334155', 800: '#1e293b' },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
