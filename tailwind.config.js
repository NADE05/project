/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'albert': ['Albert Sans', 'sans-serif'],
      },
      colors: {
        'brand-blue': '#7DBAFF',
        'brand-purple': '#8C8EFF',
        'brand-green': '#8CFFB2',
        'brand-orange': '#FFC58C',
      }
    },
  },
  plugins: [],
}
