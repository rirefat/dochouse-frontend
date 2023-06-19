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
          "primary": "#07332F",
          "secondary": "#F7A582",
          "transparent": "#ffffff00",
          "btn-hover": "#F2871D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}


