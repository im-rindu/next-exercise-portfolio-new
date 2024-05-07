import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0B0C0E",
        white: "#F4F7FA",
        "light-gray": "#C7D0D9",
        "dark-gray": "#3C3D3E",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
