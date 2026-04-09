/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        softWhite: "#FAF9F6",
        lightGrey: "#EAE7E2",
        pastelGreen: "#D1E2C4",
        goldAccent: "#D4AF37"
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        cursive: ['"Great Vibes"', 'cursive']
      }
    },
  },
  plugins: [],
}
