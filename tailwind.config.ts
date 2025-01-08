// @ts-nocheck

import type { Config } from "tailwindcss";

const withOpacityValue = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(${variable}), ${opacityValue})`
      : `rgb(var(${variable}))`;
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: withOpacityValue("--primary-color-rgb"),
        secondary: withOpacityValue("--secondary-color-rgb"),
        accent: withOpacityValue("--accent-color-rgb"),
      },
    },

    animation: {
      fly: "fly 8s ease-in-out 1",
      flyzindex: "flyzindex 8s ease-in-out 1",
    },
    keyframes: {
      flyzindex: {
        "0%": { zIndex: 0 },
        "30%": { zIndex: 30 },
        "86%": { zIndex: 30 },
        "87%": { zIndex: 0 },
      },
      fly: {
        "0%": { opacity: "0" },
        "30%": { opacity: "1" },
        "31%": {
          opacity: "1",
          filter: "blur(0px)",
          transform: "scale(1) translate(0, 0) skew(0, 0)",
        },
        "85%": {
          opacity: "0",
          filter: "blur(7px)",
          transform: "scale(2) translate(30px, 0) skew(20deg, -20deg)",
        },
        "86%": {
          opacity: "0",
          filter: "blur(0px)",
          transform: "scale(1) translate(0, 0) skew(0, 0)",
        },
        "200%": {
          opacity: "1",
          filter: "blur(0px)",
          transform: "scale(1) translate(0, 0) skew(0, 0)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
