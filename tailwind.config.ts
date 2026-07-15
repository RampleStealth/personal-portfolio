import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        ink: "#1D2420",
        paper: "#F8F8F5",
        moss: "#315C4D",
        mist: "#E7ECE7",
        sand: "#EEEAE2",
      },
      boxShadow: {
        card: "0 1px 0 rgba(29,36,32,.06), 0 18px 40px rgba(29,36,32,.06)",
      },
    },
  },
  plugins: [],
};

export default config;
