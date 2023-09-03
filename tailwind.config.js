/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'br0': '425px',
      'br1': '580px',
      'br5': '600px',
      'br2': '768px',
      'br3': '850px',
      'br4': '1024px',

    }
  },
  plugins: [],
}
