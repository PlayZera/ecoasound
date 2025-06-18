import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#7C3AED', // Roxo principal
          700: '#5F2AC9', // Roxo mais escuro (hover)
        },
        gray: {
          100: '#F5F5F5', // Fundo claro
          200: '#D0D0D0', // Borda/inputs
          700: '#3D3D3D', // Texto dark mode
        },
      },
    },
  },
  plugins: [],
};

export default config;