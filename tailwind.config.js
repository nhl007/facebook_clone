/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#18191a',
        black_faded: '#242526',
        blue: '#1877f2',
        blue_faded: '#74a4f2',
        ash: '#8a8d91',
        ash_faded: '#b0b3b8',
        white: '#ffffff',
        white_faded: '#e4e6eb',
        red: '#e41e3f',
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
