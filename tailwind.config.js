/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#011520",
        "surface-container-lowest": "#00101a",
        "surface-container-low": "#081e29",
        "surface-container-highest": "#243743",
        primary: "#ffb3ad",
        "primary-container": "#ce1021",
        secondary: "#b0bec5",
        "secondary-container": "#3e4b51",
        "on-surface": "#d0e5f5",
        "on-surface-variant": "#b0bec5",
        "outline-variant": "rgba(208, 229, 245, 0.15)",
      },
      fontFamily: {
        headline: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        label: ["'Inter'", "sans-serif"]
      },
      borderRadius: {
        "sm": "4px",
        "DEFAULT": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "24px",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
