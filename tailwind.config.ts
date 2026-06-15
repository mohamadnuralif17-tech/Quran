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
        quran: {
          primary: '#1a472a',
          secondary: '#2d5a3d',
          accent: '#d4af37',
          light: '#f5f5f5',
          dark: '#0f1419',
        },
      },
    },
  },
  plugins: [],
};
export default config;
