/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "2xl" : { max: "1400px" },
      "xl" : { max: "1200px" },
      "lg" : { max: "992px" },
      "md" : { max: "768px" },
      "sm" : { max: "576px" },
      "xs" : { max: "450px" },
      "xxs" : { max: "375px" },
    },
    extend: {
      fontFamily: {
        'pro': ['Be Vietnam Pro', 'sans-serif'],
      },
      animation: {
        'fade': 'fade .7s linear',
      },
      keyframes: {
        'fade': {
          from: { top: '-100%' },
          to: { top: '20%)' },
        }
      }
    },
  },
}

