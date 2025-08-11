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
      // fontFamily 부분을 찾아서 아래 내용을 추가합니다.
      fontFamily: {
        // 'sans'는 기본 폰트 설정 예시입니다.
        sans: ['var(--font-inter)'], // 만약 Inter 폰트를 쓴다면
        // 이 부분을 추가!
        librebaskerville: ['var(--font-libre-baskerville)'],
      },
      // 다른 설정들...
    },
  },
  plugins: [],
};