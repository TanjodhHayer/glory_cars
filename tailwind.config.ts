import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E60000',
        secondary: '#004AAD',
        light: '#ffffff',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;
