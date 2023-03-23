/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#05b0d5',
          '50': '#ecfdff',
          '100': '#cff8fe',
          '200': '#a4f0fd',
          '300': '#66e4fa',
          '400': '#37d2f1',
          '500': '#05b0d5',
          '600': '#078cb3',
          '700': '#0d7091',
          '800': '#145b76',
          '900': '#154b64'
        }
      }
    },
  },
  plugins: [],
}
