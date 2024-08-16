/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        mainoranage:"#FE4E15",
        maingreen:"#18A884",
        lightgreen:"#1EA384"
      }
    },
  },
  plugins: [],
}

