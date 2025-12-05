/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // This section controls the global width of your website
    container: {
      center: true,       // Automatically centers the website
      padding: '2rem',    // Adds 2rem (32px) padding on the sides for mobile
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1152px',     // Locks width to 1152px on large screens
        '2xl': '1152px',  // KEEPS it at 1152px even on huge screens (This is the "80%" effect)
      },
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float-delayed 8s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-delayed': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}