/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      vs: '320px',
      xs: '480px',
      ss: '620px',
      sm: '770px',
      md: '1060PX',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
}

