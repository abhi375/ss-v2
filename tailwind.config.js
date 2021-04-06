const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      "7xl": ["72px", "80px"],
      "6xl": ["64px", "68px"],
      "5xl": ["48px", "56px"],
      "4xl": ["40px", "48px"],
      "3xl": ["32px", "44px"],
      "2xl": ["24px", "32px"],
      xl: ["21px", "28px"],
      base: ["16px", "24px"],
    },
    extend: {
      colors: {
        accent: "#4f50ff",
        gray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
