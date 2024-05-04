/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'tl': 'top 60rem left -37rem',
      'm2-tr': 'top 35rem right -35rem',
      tr: 'top right -3rem',
      'm-tr': 'top -10rem right -3rem',
      r: 'right -15rem',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
    },
    screens : {
      "5xl" : { max: "1920px" },
      "4xl" : { max: "1870px" },
      "3xl" : { max: "1680px" },
      "2xl" : { max: "1400px" },
      "xl" : { max: "1200px" },
      "lg" : { max: "992px" },
      "md" : { max: "768px" },
      "sm" : { max: "576px" },
      "xs" : { max: "450px" },
      "xxs" : { max: "375px" },
    },
    extend: {
      backgroundImage: {
        'tablet': "url('/public/images/bg-tablet-pattern.svg')",
        'pattern': "url('/public/images/bg-simplify-section-desktop.svg')",
        'pattern-mobile': "url('/public/images/bg-simplify-section-mobile.svg')",
      },
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

