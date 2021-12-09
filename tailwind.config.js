module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        white: "2px solid white",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
