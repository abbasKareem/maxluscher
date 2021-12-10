module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      colors: {
        orange: "#FF6600",
        teal: "#336666",
        emerald: "#006666",
      },
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
