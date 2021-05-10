module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#F2F4F3',
        red: '#49111C',
        black: '#0A0908'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
