This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

### 디자인 특징 분석
- **상단 중앙 로고(J&J Music.)**  
- **상단 네비게이션(가운데 정렬, HOME / PROJECTS / CONTACT)**
- **전체적으로 여백이 넓고, 흰색 배경, 검정 텍스트, 미니멀**
- **ABOUT US 제목(왼쪽 정렬, 굵은 글씨)**
- **소개글(왼쪽 정렬, 간결한 문단)**
- **프로필(연도/작품/역할, 표처럼 정렬)**
- **오른쪽에 큰 작업실 사진**
- **폰트: 세리프(로고), 산세리프(본문) 혼용**

---

## Next.js + Tailwind로 위 느낌을 재현하는 방법

### 1. 상단 레이아웃(로고/네비)
- 중앙 정렬, 로고는 세리프 폰트(예: `font-serif`, `text-3xl`, `font-bold`)
- 네비게이션은 `flex justify-center gap-8` 등으로 가운데 배치

### 2. 본문(About/프로필/사진)
- `max-w-3xl mx-auto` 등으로 넓은 여백
- `grid grid-cols-2`로 왼쪽(소개/프로필), 오른쪽(사진) 분할
- 프로필은 `<pre>` 또는 `grid`로 연도/작품/역할 정렬

---

## 예시 코드 (src/app/page.tsx)

```tsx
"use client";

const profile = [
  { year: "2020", work: "Sundance 영화제 초청작 <ScareCrow>", role: "Composer" },
  { year: "2020", work: "[ALIVE HALL] 박규리 뮤지컬 <RhythmZone>", role: "Assistant Director" },
  { year: "2020", work: "경기남부과학교육원 애니메이션 <포켓키움>", role: "Composer" },
  // ... (원하는 만큼 추가)
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* 상단 네비 */}
      <header className="border-b">
        <div className="max-w-3xl mx-auto flex flex-col items-center py-8">
          <div className="font-serif text-4xl font-bold mb-2">J&J Music.</div>
          <nav>
            <ul className="flex gap-8 text-sm tracking-widest font-light mt-2">
              <li><a href="#" className="hover:underline">HOME</a></li>
              <li><a href="#" className="hover:underline">PROJECTS</a></li>
              <li><a href="#" className="hover:underline">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* 본문 */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* 왼쪽: 소개/프로필 */}
          <div>
            <div className="text-xs text-gray-400 mb-2">Aenean felis</div>
            <h2 className="text-2xl font-bold mb-6">ABOUT US</h2>
            <div className="mb-6 leading-relaxed text-[1.05rem]">
              J&J Music에서는 애니메이션, 게임, 영화를 비롯한 다양한 영상에 음악을 디자인합니다.<br /><br />
              어떤 웃음 하나마다 사람의 분위기가 달라지듯<br />
              독립된 영상이어도 음악의 밝기, 속도, 악기에 따라 전혀 다른 느낌을 전달합니다.<br /><br />
              디테일한 영상 분석과 커뮤니케이션을 통해<br />
              더 높은 수준의 영상으로 끌어올립니다.
            </div>
            <div className="mb-2 font-semibold">&lt;Profile&gt;</div>
            <div className="text-sm">
              {profile.map((item, i) => (
                <div key={i} className="flex gap-2 mb-1">
                  <span className="w-16 text-gray-500">{item.year}</span>
                  <span className="flex-1">{item.work}</span>
                  <span className="w-32 text-right text-gray-400">{item.role}</span>
                </div>
              ))}
            </div>
          </div>
          {/* 오른쪽: 사진 */}
          <div className="flex justify-center">
            <img
              src="/studio.jpg"
              alt="작업실"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
```

---

### 3. 사진 파일
- `public/studio.jpg`로 작업실 이미지를 넣으세요.  
  (이미지 파일명/경로는 코드와 맞춰주세요.)

---

### 4. 폰트/색상
- 로고: `font-serif` (Tailwind 기본 세리프)
- 본문: `font-sans` (기본 산세리프)
- 필요시 글로벌 CSS에서 폰트 커스터마이징 가능

---

## 추가 안내
- **프로필 데이터, 소개글, 사진** 등 원하는 내용으로 맞춤 변경 가능
- **PROJECTS, CONTACT** 등 다른 페이지/섹션도 추가 가능
- 실제 jjmusic.co.kr의 다른 섹션(포트폴리오 등)도 똑같이 구현 가능

---

**원하는 부분(프로필, 소개글, 사진 등)만 구체적으로 말씀해주시면  
더 맞춤형으로 만들어드릴 수 있습니다!  
바로 적용해드릴까요?**

---

## Contact 페이지 설정

### Gmail SMTP 설정

Contact 페이지에서 메일 전송 기능을 사용하려면 Gmail SMTP 설정이 필요합니다:

1. **Gmail 앱 비밀번호 생성**:
   - Gmail 계정에서 2단계 인증을 활성화
   - Google 계정 설정 → 보안 → 앱 비밀번호 생성
   - 생성된 16자리 앱 비밀번호를 복사

2. **환경 변수 설정**:
   프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:
   ```
   GMAIL_USER=your-gmail@gmail.com
   GMAIL_APP_PASSWORD=your-gmail-app-password
   ```

3. **보안 주의사항**:
   - `.env.local` 파일은 절대 Git에 커밋하지 마세요
   - `.gitignore`에 `.env.local`이 포함되어 있는지 확인하세요

### Contact 페이지 기능
- 미니멀한 디자인의 연락처 폼
- 이름, 이메일, 메시지 입력 필드
- 폼 제출 시 jjmusicc@naver.com으로 메일 전송
- 성공/실패 상태 메시지 표시
