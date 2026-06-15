import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'quran-primary': '#2d5016',
        'quran-secondary': '#1a3409',
        'quran-accent': '#d4af37',
        'quran-light': '#f5f1e8',
      },
      fontFamily: {
        'quran': ['"Traditional Arabic"', 'serif'],
        'sans': ['system-ui', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'var(--safe-area-inset-top)',
        'safe-bottom': 'var(--safe-area-inset-bottom)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
