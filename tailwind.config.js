// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Libre Baskerville 폰트 설정
        'libre-baskerville': ['var(--font-libre-baskerville)', 'serif'],
        // 기본 sans 폰트도 Libre Baskerville로 설정
        'sans': ['var(--font-libre-baskerville)', 'serif'],
      },
    },
  },
  plugins: [],
};
