/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '9/10': '90%',
        '7/10': '70%',
        '1/10': '10%',
      },
      width: {
        '9/10': '90%',
        '4/5': '80%',
        '7/10': '70%',
      },
      flexBasis: {
        '4/5': '80%',
        '1/5': '20%',
      },
    },
  },
  plugins: [],
};
