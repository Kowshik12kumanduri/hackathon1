/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        fintech: {
          slate: '#0B0F19',
          card: '#111827',
          border: '#1F2937',
          indigo: '#6366F1',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#EF4444',
          cyan: '#06B6D4',
        }
      }
    },
  },
  plugins: [],
}
