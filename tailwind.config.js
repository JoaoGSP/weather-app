/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-moon': 'radial-gradient(134% 134% at 50% 50%, rgba(199, 199, 231, 0.85) 0%, #C7C7E7 54.17%)',
        'gradient-sun-clear': 'linear-gradient(135deg, #FF9900 18.23%, #FAFF00 72.92%)',
        'gradient-sun-cloudy': 'linear-gradient(180deg, #FF6B00 -3.99%, #FF9900 28.19%, #FAFF00 85.96%)',
      },
    },
  },
  plugins: [],
};
