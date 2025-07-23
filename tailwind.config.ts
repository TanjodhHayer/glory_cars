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
        secondary: '#0504aa',
        light: '#ffffff',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  variants: {
    extend: {
      scrollSnapType: ['responsive'],
    },
  },
};

export default config;
