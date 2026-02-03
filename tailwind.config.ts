import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        "primary-light": "#A78BFA",
        dark: "#020617",
        bg: "#0F172A",
      },
    },
  },
  plugins: [],
};

export default config;
