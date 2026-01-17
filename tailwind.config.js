/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdfb',
          100: '#fdfaf5',
          200: '#faf5eb',
          300: '#f5ead6',
          400: '#eed8b8',
          500: '#e4c299',
          600: '#d4b080',
          700: '#b8956a',
          800: '#9a7a55',
          900: '#7d6145',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e9ede4',
          200: '#d3d9c9',
          300: '#b4bfa5',
          400: '#8f9f7a',
          500: '#72805f',
          600: '#5a6650',
          700: '#474f40',
          800: '#353930',
          900: '#242621',
        },
        taupe: {
          50: '#f7f6f4',
          100: '#edeae5',
          200: '#d9d3c9',
          300: '#c0b5a6',
          400: '#a6937f',
          500: '#8b7560',
          600: '#6f5d4d',
          700: '#574a3e',
          800: '#3f352d',
          900: '#2a221c',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
