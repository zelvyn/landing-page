import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#383961",
        secondary: colors.gray,
      },
      fontFamily: {
        sans: ["ABeeZee", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
