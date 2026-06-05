/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f3f7f4', 100: '#e3ede5', 200: '#c5dbc9', 300: '#9bc1a4',
          400: '#6ea27c', 500: '#4d855e', 600: '#3a6b49', 700: '#2f553b',
          800: '#284430', 900: '#1a3d2e', 950: '#0f2a20',
        },
        sand: {
          50: '#fbf8f1', 100: '#f5efde', 200: '#ebdfbb', 300: '#decb8e',
          400: '#d3b465', 500: '#c9a149', 600: '#b3863c', 700: '#8f6633',
          800: '#75522f', 900: '#62452a',
        },
        ember: {
          500: '#e87b1f', 600: '#d4691a', 700: '#b25515',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -10px rgba(15, 42, 32, 0.18)',
        soft: '0 1px 2px rgba(15,42,32,0.04), 0 8px 24px -12px rgba(15,42,32,0.15)',
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        bob: 'bob 2.4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        bob: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}
