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
        'fade-in': 'fade-in .6s ease-in',
      },
      keyframes: {
        'fade': {
          from: { top: '-100%' },
          to: { top: '20%)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      }
    },
  },
}

