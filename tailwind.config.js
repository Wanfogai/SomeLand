/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',   
      md: '1024px',  
      lg: '1920px',
      'md-lg': { 'min': '1024px', 'max': '1920px' },
    },
  },
  plugins: [],
}
