/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        washi: '#f5f0e8',
        sumi: '#1a1a1a',
        ai: '#1e3a5f',
        asagi: '#4a8fa8',
        beni: '#c0392b',
        kin: '#c9a84c',
      },
    },
  },
  plugins: [],
};
