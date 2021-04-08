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
      lg: ["18px", "24px"],
      base: ["16px", "24px"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#000",
            p: {
              color: "#1d1d1f",
            },
          },
        },
      },
      colors: {
        accent: "#4f50ff",
        gray: colors.trueGray,
        amber: colors.amber,
        rose: colors.rose,
      },
      boxShadow: {
        inset: "inset 0px 0px 100px rgba(0, 0, 0, 0.2)",
        consentbanner: "0 -8px 16px rgba(0,0,0,0.1)",
        subtle:
          "0 4px 8px 0 rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%), 0 0 0 1px rgb(0 0 0 / 4%)",
        popover:
          "0px 0px 24px rgba(0,0,0,0.1), 0 0 0 1px rgb(0 0 0 / 4%), 0 8px 16px 0 rgb(0 0 0 / 2%),",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
