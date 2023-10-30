/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [nextui({
    themes: {
      light: {
        layout: {},
        colors: {
          'background': '#FFFDF7',
          'foreground': '#0a2342',
          'content1': { DEFAULT: '#D9EDE2', foreground: '#0a2342' },
          'content2': '#A2D2B7',
          'content3': '#85BC9D', // used for card, modal, popover, etc.
          'content4': '#D9EDE2', // used for card, modal, popover, etc.
          primary: {
            DEFAULT: "#A2D2B7",
            foreground: "#0a2342",
          },
          focus: "#85BC9D",

          'secondary': {
            background: "#85bc9d",
            DEFAULT: "#85bc9d",
            foreground: "#0a2342"
          }
        }
      }
    },
    dark: {
      layout: {},
      colors: {
        'background': '#0A0800',
        'foreground': '#BCD6F5',
        'content1': '#12261B',
      }
    },
  })]

}
