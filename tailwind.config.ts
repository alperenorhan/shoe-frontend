import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fefbea",
        secondary: "#78350F",
        third: "#FEF3C7",
        white: "#ffffff",
        squareYellow: "#fabf22",
        cardBg: "#0e162b",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      clipPath: {
        triangle: "polygon(0 0, 100%, 0, 100%, 100%",
      },
    },
  },
  plugins: [],
};
export default config;
