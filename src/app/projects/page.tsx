/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import NavBar from "../components/NavBar";

const categories = ["전체", "영화", "VR", "광고"];
const projects = [
  {
    category: "영화",
    title: "단편영화 <제비>",
    youtube: "https://www.youtube.com/embed/iQ5kwOQogUg",
    desc: (
      <>
        <div className="italic text-gray-400 mb-3" style={{ fontFamily: 'Questrial, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}>
          "15년 전에 특별한 곳에 갔었어요."
        </div>
        <div className="mb-4" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.8' }}>
          민우는 참제비꽃을 구하기 위해 여러 곳을 다니다 인터넷의 도움으로 미정의 꽃집까지 다다른다.<br/>
          사람들이 잘 찾지 않는, 하지만 자신이 좋아하는,<br/>
          락스퍼를 찾는 민우에게 궁금증을 갖는 미정 그리고 민우의 특별한 이야기가 시작된다.
        </div>
        <div className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.7' }}>
          [제2회 국제화해영화제] 도쿄 와세다大 새로운 시점상 수상<br/>
          [KB청춘마루] 청마 영화 상영제 상영작
        </div>
      </>
    ),
  },
  {
    category: "VR",
    title: "VR 영화 <ScareCrow>",
    youtube: "https://www.youtube.com/embed/DVREQhBETc4",
    desc: (
      <>
        <div className="italic text-gray-400 mb-3" style={{ fontFamily: 'Questrial, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}>삽입곡 'Play with flower'</div>
        <div className="mb-4" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.8' }}>
          한국예술종합학교와 함께 제작되었으며<br/>
          작곡으로 참여하였습니다.
        </div>
        <div className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.7' }}>
          [2020 선댄스 영화제] VR 부분 초청작 선정<br/>
          [2020 레인댄스 영화제] 실감미디어 부문 최우수상 수상
        </div>
      </>
    ),
  },
  {
    category: "음악",
    title: "<My own Private Beach> Main Title Music #페루의 바다 #새벽",
    youtube: "https://www.youtube.com/embed/iOSlliKfJjk",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "애니메이션",
    title: "<마법천자문 시리즈 애니메이션> 00:30~00:45 및 SFX를 제외한 모든 음악 작곡 #애니메이션 #동양",
    youtube: "https://www.youtube.com/embed/7MLYDoqoaaA",
    desc: (
      <>

      </>
    ),
  },
  {
    category: "음악",
    title: "<초대> Main Title Music #재즈 #겨울",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/j-j-music-546543640/prqgdmpyq2fl&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "<순이> 조심스러운 성공 #신비로운 #살금살금",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/j-j-music-546543640/iiwr4ytfd6iq&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "<JIMICHOO> Title Music #보컬 #팝",
    youtube: "https://www.youtube.com/embed/ogs3jgqSTNA",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "Club Scene Music #힙합 #랩 #갱스터",
    youtube: "https://www.youtube.com/embed/sndPOp432dU",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "만남 Scene Music #우연한 #묘한",
    youtube: "https://www.youtube.com/embed/arC69m1zEF0",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "코믹 Scene Music #엉뚱한 #뻔뻔한",
    youtube: "https://www.youtube.com/embed/arC69m1zEF0",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },


  {
    category: "음악",
    title: "[순이] Time With Mom #일상 #평화로운",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/j-j-music-546543640/time-with-mom&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "Mom's coffee machine #호기심",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/j-j-music-546543640/moms-coffee-machine&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "그녀의 뒷모습 #쓸쓸한 #잔잔한",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/j-j-music-546543640/bty4gcevnhgd&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "Coffee Practice #따뜻한",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/j-j-music-546543640/coffee-practice&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "꿈을 좇아서 #Rock #거친 #강렬한",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/j-j-music-546543640/yyyhn3zfwjmm&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "환생 #신비로운 #몽환적인",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/j-j-music-546543640/un6aqx7vhm9z&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "개판 5분 전 #코믹 #엉뚱한 #정신없는",
    soundcloud: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/j-j-music-546543640/5a-1&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "애니메이션",
    title: "경기학생안전체험관 4D 애니메이션 <로봇키튼> 재난 대피 장면 삽입곡",
    youtube: "https://www.youtube.com/embed/t_TGpTZB3m0",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "음악",
    title: "자작곡 On Feelings (단편영화 삽입 예정)",
    youtube: "https://www.youtube.com/embed/z7ea4y6lUaI",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "VR",
    title: "STEAM Game <Fantasy Royal VR> Intro BGM",
    youtube: "https://www.youtube.com/embed/sNNhPV5gqyA",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "애니메이션",
    title: "경기학생안전체험관 4D 애니메이션 <로봇키튼> 평화로운 교실 장면 삽입곡",
    youtube: "https://www.youtube.com/embed/vyjmraqAwrc",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "애니메이션",
    title: "경기학생안전체험관 4D 애니메이션 <로봇키튼> 화재 대피 직전 장면 삽입곡",
    youtube: "https://www.youtube.com/embed/EF7NH-Ly8f4",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "애니메이션",
    title: "경기학생안전체험관 4D 애니메이션 <로봇키튼> 발화 장면 삽입곡",
    youtube: "https://www.youtube.com/embed/g2_-L1RQI6I",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
  {
    category: "애니메이션",
    title: "경기학생안전체험관 4D 애니메이션 <로봇키튼> 재난 대피 후 재회 장면 삽입곡",
    youtube: "https://www.youtube.com/embed/YNgiG9qZhwQ",
    desc: (
      <>
        <div className="mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px !important', lineHeight: '1.6' }}></div>
      </>
    ),
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState("전체");
  const filtered = selected === "전체" ? projects : projects.filter(p => p.category === selected);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* 네비게이션 바 추가 */}
      <NavBar />
      
      <div className="px-4 py-12">
        {/* 상단 타이틀/서브타이틀 */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="text-3xl md:text-4xl font-serif font-light mb-4 md:mb-0">Filmography & Me.</div>
          <div className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">Music Director / Producer / Composer</div>
        </div>
        {/* 카테고리 네비 */}
        <nav className="flex gap-12 justify-center mb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={
                "relative pb-2 text-lg font-light " +
                (selected === cat ? "font-semibold" : "")
              }
              style={{ letterSpacing: "0.08em" }}
            >
              {cat}
              {selected === cat && (
                <span className="block absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-[2px] bg-gray-300" style={{ opacity: 0.3, borderRadius: '4px' }}></span>
              )}
            </button>
          ))}
        </nav>
        {/* 구분선 */}
        <div className="h-px w-full max-w-[900px] bg-gray-200 opacity-60 mx-auto mb-12 mt-2"></div>
        {/* 프로젝트 리스트 */}
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {/* 2단 구조: 단편영화 <제비>, VR 영화 <ScareCrow> */}
          {filtered.filter(p => p.title.includes("제비") || p.title.includes("ScareCrow")).map((p, i) => (
            <div key={i} className="flex flex-row gap-8 items-start">
              <div className="w-[555px] flex-shrink-0 min-w-0">
                <div className="bg-gray-100 rounded overflow-hidden" style={{ width: '555px', height: '311.91px' }}>
                  <iframe
                    width={555}
                    height={311.91}
                    src={p.youtube}
                    title={p.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    style={{ width: '555px', height: '311.91px' }}
                  ></iframe>
                </div>
              </div>
              <div className="flex-1 min-w-0 font-sans">
                <div className="mb-4" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '23px', lineHeight: '1.3' }}>{p.title}</div>
                {p.desc}
              </div>
            </div>
          ))}
          {/* 2개 한 줄: My own~ & 마법천자문 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filtered.filter(p => p.title.includes("My own") || p.title.includes("마법천자문")).map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="bg-gray-100 rounded overflow-hidden" style={{ width: '555px', height: '311.91px' }}>
                  <iframe
                    width={555}
                    height={311.91}
                    src={p.youtube}
                    title={p.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    style={{ width: '555px', height: '311.91px' }}
                  ></iframe>
                </div>
                <div className="font-sans text-gray-700 mt-4">
                  {p.title && <div className="font-semibold mb-3" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px', lineHeight: '1.3' }}>{p.title}</div>}
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          
          {/* 사운드클라우드 음악 프로젝트들 - 첫 번째 줄 (2개) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filtered.filter(p => p.soundcloud && (p.title.includes("초대") || p.title.includes("아버지와 아들"))).map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="bg-gray-100 rounded overflow-hidden" style={{ width: '555px', height: '311.91px' }}>
                  <iframe
                    width={555}
                    height={311.91}
                    src={p.soundcloud}
                    title={p.title}
                    frameBorder="0"
                    allow="autoplay"
                    className="w-full h-full"
                    style={{ width: '555px', height: '311.91px' }}
                  ></iframe>
                </div>
                <div className="font-sans text-gray-700 mt-4 w-full">
                  <div className="font-semibold mb-3" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px', lineHeight: '1.3' }}>{p.title}</div>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          
          {/* 사운드클라우드 프로젝트들 - 첫 번째 줄 (3개: 조심스러운 성공, 커피, 잔잔한 웃음) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.filter(p => p.soundcloud && (p.title.includes("조심스러운 성공") || p.title.includes("커피") || p.title.includes("잔잔한 웃음"))).map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="bg-gray-100 rounded overflow-hidden" style={{ width: '100%', height: '166px' }}>
                  <iframe
                    width="100%"
                    height="166"
                    src={p.soundcloud}
                    title={p.title}
                    frameBorder="0"
                    allow="autoplay"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="font-sans text-gray-700 mt-4 w-full">
                  <div className="font-semibold mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px', lineHeight: '1.3' }}>{p.title}</div>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          
          {/* 사운드클라우드 프로젝트들 - 두 번째 줄 (3개: 정이로운 이들이여, 어항과 물고기, 희망의 바다) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.filter(p => p.soundcloud && (p.title.includes("정이로운 이들이여") || p.title.includes("어항과 물고기") || p.title.includes("희망의 바다"))).map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="bg-gray-100 rounded overflow-hidden" style={{ width: '100%', height: '166px' }}>
                  <iframe
                    width="100%"
                    height="166"
                    src={p.soundcloud}
                    title={p.title}
                    frameBorder="0"
                    allow="autoplay"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="font-sans text-gray-700 mt-4 w-full">
                  <div className="font-semibold mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px', lineHeight: '1.3' }}>{p.title}</div>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          
          {/* YouTube 프로젝트들 - 세 번째 줄 (JIMICHOO, Club Scene, 만남 Scene, 코믹 Scene) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filtered.filter(p => p.youtube && (p.title.includes("JIMICHOO") || p.title.includes("Club Scene") || p.title.includes("만남 Scene") || p.title.includes("코믹 Scene"))).map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="bg-gray-100 rounded overflow-hidden" style={{ width: '100%', height: '166px' }}>
                  <iframe
                    width="100%"
                    height="166"
                    src={p.youtube}
                    title={p.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="font-sans text-gray-700 mt-4 w-full">
                  <div className="font-semibold mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px', lineHeight: '1.3' }}>{p.title}</div>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          
          {/* 새로운 사운드클라우드 프로젝트들 - 4개 (Time With Mom, Mom's coffee machine, 그녀의 뒷모습, Coffee Practice) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filtered.filter(p => p.soundcloud && (p.title.includes("Time With Mom") || p.title.includes("Mom's coffee machine") || p.title.includes("그녀의 뒷모습") || p.title.includes("Coffee Practice"))).map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="bg-gray-100 rounded overflow-hidden" style={{ width: '100%', height: '166px' }}>
                  <iframe
                    width="100%"
                    height="166"
                    src={p.soundcloud}
                    title={p.title}
                    frameBorder="0"
                    allow="autoplay"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="font-sans text-gray-700 mt-4 w-full">
                  <div className="font-semibold mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px', lineHeight: '1.3' }}>{p.title}</div>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          
          {/* 새로운 사운드클라우드 프로젝트들 - 3개 (꿈을 좇아서, 환생, 개판 5분 전) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.filter(p => p.soundcloud && (p.title.includes("꿈을 좇아서") || p.title.includes("환생") || p.title.includes("개판 5분 전"))).map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="bg-gray-100 rounded overflow-hidden" style={{ width: '100%', height: '166px' }}>
                  <iframe
                    width="100%"
                    height="166"
                    src={p.soundcloud}
                    title={p.title}
                    frameBorder="0"
                    allow="autoplay"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="font-sans text-gray-700 mt-4 w-full">
                  <div className="font-semibold mb-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px', lineHeight: '1.3' }}>{p.title}</div>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          
          {/* 새로운 유튜브 프로젝트들 - 3개 (로봇키튼 재난 대피, On Feelings, Fantasy Royal VR) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filtered.filter(p => p.youtube && (p.title.includes("재난 대피 장면") || p.title.includes("On Feelings") || p.title.includes("Fantasy Royal VR"))).map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="bg-gray-100 rounded overflow-hidden" style={{ width: '100%', height: '166px' }}>
                  <iframe
                    width="100%"
                    height="166"
                    src={p.youtube}
                    title={p.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="font-sans text-gray-700 mt-4 w-full">
                  <div className="font-semibold mb-2" style={{ 
                    fontFamily: 'Noto Sans KR, sans-serif', 
                    fontSize: p.title.includes("경기학생안전체험관") ? '11px' : '13px', 
                    lineHeight: '1.3',
                    color: p.title.includes("경기학생안전체험관") ? '#888888' : 'inherit'
                  }}>{p.title}</div>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          
          {/* 새로운 유튜브 프로젝트들 - 4개 (로봇키튼 시리즈) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {filtered.filter(p => p.youtube && (p.title.includes("평화로운 교실") || p.title.includes("화재 대피 직전") || p.title.includes("발화 장면") || p.title.includes("재난 대피 후 재회"))).map((p, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="bg-gray-100 rounded overflow-hidden" style={{ width: '100%', height: '166px' }}>
                  <iframe
                    width="100%"
                    height="166"
                    src={p.youtube}
                    title={p.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="font-sans text-gray-700 mt-4 w-full">
                  <div className="font-semibold mb-2" style={{ 
                    fontFamily: 'Noto Sans KR, sans-serif', 
                    fontSize: '11px', 
                    lineHeight: '1.3',
                    color: '#888888'
                  }}>{p.title}</div>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
          
          {/* 크레딧 섹션 */}
          <div className="mt-8 mb-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* 왼쪽: 비상 포스터 이미지 */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <img 
                      src="/bisang-poster.jpg" 
                      alt="단편영화 비상 포스터" 
                      className="w-full max-w-md rounded-lg shadow-lg"
                      style={{ maxHeight: '600px', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                
                {/* 오른쪽: 크레딧 정보 */}
                <div className="space-y-6">
                  <div>
                    <h2 className="mb-4" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '23px', fontWeight: 'bold', color: '#212327' }}>
                      단편영화 &lt;비상&gt;
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '13px', lineHeight: '1.8' }}>
                      청소년기 꿈을 가진 학생들의 성장스토리를 영상으로 풀어낸 작품으로<br />
                      부모와의 갈등, 다양한 난관을 이겨내는<br />
                      학생들의 열정과 도전에 관한 이야기입니다.<br />
                      음악 감독으로 참여하였습니다.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="mb-4" style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', fontWeight: 'normal', color: '#666666' }}>
                      그 외 작품활동
                    </h3>
                    <div className="space-y-2">
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2020</span>    ·   Sundance 영화제 초청작 &lt;ScareCrow&gt;                 /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2020</span>    ·   [ALIVE HALL] 작곡가 류희천 &lt;Rhyzome&gt;               /Assistant Director
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2020</span>    ·   경기학생안전체험관 4D 애니메이션 ‌‌‌‌&lt;로봇키튼&gt;      /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2020</span>    ·   LG U+ AR 드라마  &lt;어린왕자&gt;                                      /Composer, Arrangement
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2021</span>    ·  [세종문화회관] 작곡가 류희천 &lt;Kaleidoscope&gt; (Personas for Modern) / Assistant Director
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2021</span>    ·   단편영화  &lt;비상&gt;                                                              /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2021</span>    ·   용감한 소방차 레이 동요 &lt;ABC, One Two Three&gt;  /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2021</span>    ·   동덕여자대학교 미디어디자인 국악 프로젝트 &lt;국악나래&gt; /Composer, Sound design
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2021</span>    ·   STEAM Game  &lt;Fantasy Royal VR&gt;                         /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;생일&gt;                                                              /Composer‌ 
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;JIMICHOO&gt;                                                 /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;초대&gt;                                                              /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;내 편이 필요할 때&gt;  (예정 )                         /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;꽃으로도&gt;   (예정)                                         /Composer‌
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   공모전       &lt;광주 지역 홍보영상&gt;                                     /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;My Playa Privada&gt;                                     /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;대화&gt;                                                                /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;제비&gt; 와세다大 국제화해영화제 수상            /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;순이&gt;                                                                /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;정이로운 이들이여&gt;                                       /Composer
                      </div>
                      <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '12px', color: '#666666', lineHeight: '1.6' }}>
                        <span style={{ fontWeight: 'bold' }}>2022</span>    ·   단편영화   &lt;주부해커단&gt;                                                    /Composer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 