import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bouncex: {
            "0%, 100%": {
                "transform": "translateX(0)",
                "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)"
              },
              "50%": {
                "transform": "translateX(25%)",
                "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)"
              }
        },
      },
      animation: {
        bouncex: "bouncex 0.5s infinite"
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
};
export default config;
