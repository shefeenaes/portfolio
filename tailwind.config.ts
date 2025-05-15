import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#111111", // Soft black
        backgroundSecondary: "#333333", // Dark gray
        textPrimary: "#f5f5f5", // Off-white
      },
      fontSize: {
        headlineBig: "clamp(3rem, 10vw, 15rem)",
        headlineSmall: "clamp(1rem, 1.2vw, 6rem)",
      },
      spacing: {
        "30p": "30%", // For padding-left: 30%
        "10p": "10%", // For padding-right: 10%
      },
      dropShadow: {
        custom: "0 0 0.06rem rgba(2, 2, 2)",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        cloudLoop: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        cloudLoop: "cloudLoop 80s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
