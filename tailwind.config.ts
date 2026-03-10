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
        primary: {
          DEFAULT: "#1e40af",
          dark: "#1e3a8a",
          light: "#3b82f6",
        },
        secondary: {
          DEFAULT: "#059669",
          dark: "#047857",
          light: "#10b981",
        },
        accent: {
          DEFAULT: "#f59e0b",
          dark: "#d97706",
          light: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
        "gradient-secondary": "linear-gradient(135deg, #059669 0%, #10b981 100%)",
        "gradient-accent": "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
        "gradient-hero": "linear-gradient(135deg, #1e40af 0%, #3b82f6 30%, #10b981 70%, #059669 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
