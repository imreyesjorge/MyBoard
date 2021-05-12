module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#6C5DD3",
        background: "#1E1C21",
        backalt: "#322F35",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
