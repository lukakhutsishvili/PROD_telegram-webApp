export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    extend: {
      screens: {
        'h-sm': { raw: '(max-height: 667px)' }, 
      },
    },
  },
  plugins: [],
};