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
          50: '#f0f4f9',
          100: '#e1e9f3',
          200: '#c3d3e7',
          300: '#a5bddb',
          400: '#87a7cf',
          500: '#1e3a8a',
          600: '#1a2f6e',
          700: '#162452',
          800: '#122136',
          900: '#0e181a',
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
