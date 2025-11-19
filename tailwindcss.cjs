/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/(public)/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        tattooBlack: "#0a0a0a",
        tattooPanel: "#0f0f0f",
        tattooMuted: "#a9a9a9",
        tattooGold: "#c9a56b",
        tattooGoldDark: "#a88955",
      },
      fontFamily: {
        chicano: ["var(--font-chicano)", "serif"],
        title: ["Cinzel", "serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'tattoo-lg': '0 18px 40px rgba(0,0,0,0.75)',
      }
    },
  },
  plugins: [],
};
