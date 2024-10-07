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
        first_Bc: "F9FEF9",
        second_Bc: "#B05555",
        text_one: '#333333'
      },
    },
  },
  plugins: [],
};
export default config;

