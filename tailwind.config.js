/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056A0', // Brand color
        secondary: '#004080',
        accent: '#FFD700',   // Accent color (gold)
        background: '#F4F4F4',
        cardBackground: '#FFFFFF',
        text: '#333333',
        mutedText: '#7D7D7D',
        // Add any additional colors your project needs
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],  // Default body font
        heading: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'], // For headings
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        // Custom spacing for large elements
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',  // Light shadow for cards
        'custom-dark': '0 4px 6px rgba(0, 0, 0, 0.4)',   // Stronger shadow for pop-ups
      },
      screens: {
        '3xl': '1920px',  // Support for large screens
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out', // Animation for smooth fade-in effect
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),  // Typography plugin for rich text content
    require('@tailwindcss/forms'),       // For styling forms and inputs
    require('@tailwindcss/aspect-ratio'),  // For text clamping (Read more functionality)
  ],
}
