const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["lato", "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1160px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      "8xl": ["72px", "80px"],
      "7xl": ["64px", "68px"],
      "6xl": ["56px", "64px"],
      "5xl": ["48px", "56px"],
      "4xl": ["40px", "48px"],
      "3xl": ["32px", "44px"],
      "2xl": ["24px", "36px"],
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
        accent: "#006aff",
        // accent: "#645BFF",
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
