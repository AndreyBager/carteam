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
        surface: "#0c0e10",
        "surface-container-lowest": "#060708",
        "surface-container-low": "#111315",
        "surface-container-highest": "#1a1d21",
        primary: "#ce1021",
        "primary-container": "#e61225",
        secondary: "#8a8d91",
        "secondary-container": "#23262b",
        "on-surface": "#ffffff",
        "on-surface-variant": "#a1a5ab",
        "outline-variant": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        headline: ["'Montserrat'", "'Space Grotesk'", "sans-serif"],
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
