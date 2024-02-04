import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dunk: ["BNDunk", "sans-serif"],
      },
      colors: {
        accent: "#fff2e0",
        background: "#1e1f1e",
      },
    },
  },
  plugins: [],
};
export default config;
