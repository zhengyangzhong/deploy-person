module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.{js,jsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '100': '100px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
