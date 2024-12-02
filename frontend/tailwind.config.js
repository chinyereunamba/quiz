/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#FFFDF7",
            foreground: "#0a2342",
            content1: "#E8F3ED",
            content2: "#D1E8DD",
            content3: "#A2D2B7",
            content4: "#85BC9D",
            primary: {
              DEFAULT: "#4A90A0",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#A2D2B7",
              foreground: "#0a2342",
            },
            focus: "#4A90A0",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#0A1A2F",
            foreground: "#E1E7EC",
            content1: "#12261B",
            content2: "#1A3226",
            content3: "#234231",
            content4: "#2C523C",
            primary: {
              DEFAULT: "#4A90A0",
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#A2D2B7",
              foreground: "#0a2342",
            },
            focus: "#4A90A0",
          },
        },
      },
    }),
  ],
};
