import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#006295",
          "50": "#f0f9ff",
          "100": "#dff2ff",
          "200": "#b9e6fe",
          "300": "#7bd3fe",
          "400": "#34bdfc",
          "500": "#0aa5ed",
          "600": "#0084cb",
          "700": "#0073b4",
          "800": "#055987",
          "900": "#0a4970",
          "950": "#072f4a",
        },
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
