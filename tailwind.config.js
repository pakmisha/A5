/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(to bottom, #80E3D0 0%, #18B195 100%)",
        "gradient-light":
          "linear-gradient(to bottom right, #C6C6C6 25%, #DADADA 50%, #D8D8D8 75%, #B1B1B1 100%)",
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        "brand-primary": "#1E2330",
        "brand-dark": "#364441",
        "brand-gold": "#EE9611",
        "brand-gray": "#F8F8F8",
        "brand-accent-first": "#80E3D0",
        "brand-accent-second": "#14836E",
      },
      fontFamily: {
        primary: ["Acumin Pro", "sans-serif"],
        secondary: ["Manrope", "sans-serif"],
      },
      transitionTimingFunction: {
        inQuad: "cubic-bezier(0, 0.55, 0.45, 1)",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        13: "4rem",
        14: "5rem",
        15: "6rem",
        16: "7rem",
        17: "8rem",
        18: "9rem",
        19: "10rem",
      },
    },
  },
  plugins: [],
};
