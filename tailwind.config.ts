import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        spacing: {
          '88': '22rem', // Custom value
        },
        width: {
          30: "120px", // Adjust the value as needed
        },
        height: {
          120: "30rem",
        }
    },

  },
  plugins: [],
};
export default config;
