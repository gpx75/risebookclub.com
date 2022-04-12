const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: {
    files: ["./components/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./app.vue", "./plugins/**/*.{js,ts}"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        heading: ["Jeko-Medium"],
        cursive: ["Shadows Into Light", "cursive"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        riseTheme: {
          primary: "#25AFAA",

          secondary: "#FDAAC7",

          accent: "#F9DE73",

          neutral: "#291334",

          "base-100": "#FAF7F5",

          info: "#3ABFF8",

          success: "#6DDFDD",

          warning: "#FFAB77",

          error: "#FF7676",
        },
      },
    ],
  },
  darkMode: "class",
  content: ["./components/**/*.{vue,js}", "./composables/**/*.{js,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./utils/**/*.{js,ts}", "./app.vue"],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/line-clamp"), require("@tailwindcss/aspect-ratio"), require("daisyui")],
};
