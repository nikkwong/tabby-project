import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ["MuseoModerno", "sans-serif"],
      body: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        "hue-2-primary": "var(--hue-2-primary)",
        "hue-2-secondary": "var(--hue-2-secondary)",
        "hue-2-tertiary": "var(--hue-2-tertiary)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
