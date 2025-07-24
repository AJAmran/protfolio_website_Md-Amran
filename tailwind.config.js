/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0056A0",
        secondary: "#004080",
        accent: "#FFD700",
        background: "#F4F4F4",
        cardBackground: "#FFFFFF",
        text: "#333333",
        mutedText: "#7D7D7D",
      },
      fontFamily: {
        sans: ["DM Sans", "Helvetica", "Arial", "sans-serif"],
        heading: ["Space Grotesk", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [
    import("@tailwindcss/typography"),
    import("@tailwindcss/forms"),
    import("@tailwindcss/aspect-ratio"),
  ],
};
