/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff3f1',
          100: '#ffe4df',
          200: '#ffc9c0',
          300: '#ffaea1',
          400: '#ff8372',
          500: '#e04e3a', // main accent
          600: '#c84432',
          700: '#a93728',
          800: '#8a2a1f',
          900: '#6b1d16',
        },
        gold: {
          50: '#fffef5',
          100: '#fffceb',
          200: '#fff9d7',
          300: '#fff6c3',
          400: '#fff3af',
          500: '#d4af37',
          600: '#bf9f2f',
          700: '#aa8f27',
          800: '#957f1f',
          900: '#806f17',
        },
        neutral: {
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundColor: {
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
      },
    },
  },
  plugins: [],
}
