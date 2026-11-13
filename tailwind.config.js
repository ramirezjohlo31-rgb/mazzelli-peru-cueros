/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        plomo: {
          DEFAULT: '#333333',
          light: '#4A4D52',
          dark: '#252628',
        },
        vino: {
          DEFAULT: '#800020',
          light: '#722F37',
        },
        accion: {
          DEFAULT: '#E53935',
          hover: '#C62828',
          active: '#B71C1C',
        },
        marfil: '#FDFBF7',
        crema: '#F5EFE6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.18)',
      },
    },
  },
  plugins: [],
}
