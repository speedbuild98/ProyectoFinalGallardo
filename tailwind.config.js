/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f1f100",
          "secondary": "#f4ff80",
          "accent": "#262626",
          "neutral": "#3d4451",
          "base-100": "#1a1a1a",
        },
      },
      "dark",
      "light",
    ],
  },
  plugins: [require("daisyui")],
}