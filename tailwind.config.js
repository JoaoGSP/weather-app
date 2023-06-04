/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        openSans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
