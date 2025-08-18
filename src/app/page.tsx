
import Image from "next/image";
import NavBar from "./components/NavBar";

const profile = [
  { year: "2020", work: "Sundance 영화제 초청작 <ScareCrow>", role: "Composer" },
  { year: "2020", work: "[ALIVE HALL] 작곡가 류희천 <Rhyzome>", role: "Assistant Director" },
  { year: "2020", work: "경기학생안전체험관 4D 애니메이션 <로봇키튼>", role: "Composer" },
  { year: "2020", work: "LG U+ AR 드라마 <어린왕자>", role: "Composer, Arrangement" },
  { year: "2021", work: "[세종문화회관] 작곡가 류희천 <Kaleidoscope> (Personas for Modern)", role: "Assistant Director" },
  { year: "2021", work: "단편영화 <비상>", role: "Composer" },
  { year: "2021", work: "용감한 소방차 레이 동요 <ABC, One Two Three>", role: "Composer" },
  { year: "2021", work: "동덕여자대학교 미디어디자인 국악 프로젝트 <국악나래>", role: "Composer, Sound design" },
  { year: "2021", work: "STEAM Game <Fantasy Royal VR>", role: "Composer" },
  { year: "2022", work: "단편영화 <생일>", role: "Composer" },
  { year: "2022", work: "단편영화 <JIMICHOO>", role: "Composer" },
  { year: "2022", work: "단편영화 <초대>", role: "Composer" },
  { year: "2022", work: "단편영화 <내 편이 필요할 때> (예정)", role: "Composer" },
  { year: "2022", work: "단편영화 <꽃으로도> (예정)", role: "Composer" },
  { year: "2022", work: "공모전 <광주 지역 홍보영상>", role: "Composer" },
  { year: "2022", work: "해외 단편영화 <My playa privada>", role: "Composer" },
  { year: "2022", work: "단편영화 <대화>", role: "Composer" },
  { year: "2022", work: "단편영화 <제비> 와세다大 국제화해영화제 수상", role: "Composer" },
  { year: "2022", work: "단편영화 <순이>", role: "Composer" },
  { year: "2022", work: "다큐멘터리 영화 <Covid 19>", role: "Composer" },
  { year: "2022", work: "단편영화 <정이로운 이들이여>", role: "Composer" },
  { year: "2022", work: "단편영화 <주부해커단>", role: "Composer" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* 네비게이션 바 */}
      <NavBar />
      
      {/* 본문 - 원래 2열 레이아웃 */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16">
          {/* 왼쪽 열: ABOUT US와 Profile */}
          <div className="max-w-4xl mx-auto lg:mx-0">
            {/* ABOUT US 섹션 */}
            <div className="text-center lg:text-left mb-8">
              <div className="text-xs text-gray-400 mb-2">Aenean felis</div>
              <div className="font-libre-baskerville text-2xl sm:text-3xl font-bold mb-4">ABOUT US</div>
              <div className="w-16 h-px bg-gray-300 mx-auto lg:mx-0 opacity-50"></div>
            </div>
            
            <div className="text-center lg:text-left mb-12">
              <div className="leading-relaxed text-[13px] sm:text-[14px] font-sans text-gray-500 space-y-3 max-w-3xl mx-auto lg:mx-0">
                <p>J&J Music에서는 애니메이션, 게임, 영화를 비롯한 다양한 영상에 음악을 디자인합니다.</p>
                <p>어떤 옷을 입느냐에 따라 사람의 분위기가 달라지듯</p>
                <p>똑같은 영상이라도 음악의 분위기, 속도, 악기에 따라 전혀 다른 느낌을 전달합니다.</p>
                <p>디테일한 영상 분석과 커뮤니케이션을 통해</p>
                <p>더 높은 수준의 영상으로 끌어올립니다.</p>
              </div>
            </div>
            
            {/* Profile 섹션 */}
            <div className="text-center lg:text-left">
              <div className="mb-6 font-semibold text-[18px] sm:text-[20px]">&lt;Profile&gt;</div>
              <div className="text-[11px] sm:text-[12px] max-w-4xl mx-auto lg:mx-0">
                {profile.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2">
                    <span className="w-16 text-gray-500 flex-shrink-0 text-left">{item.year}</span>
                    <span className="flex-1 px-4 text-center">{item.work}</span>
                    <span className="w-32 text-right text-gray-400 flex-shrink-0">{item.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 오른쪽 열: 스튜디오 사진 */}
          <div className="flex justify-center lg:justify-start items-start">
            <Image
              src="/studio.jpg"
              alt="작업실"
              width={555}
              height={436}
              className="object-contain w-full max-w-[555px] h-auto"
              style={{
                borderRadius: 0,
                boxShadow: 'none',
              }}
            />
          </div>
        </div>
        
        {/* 구분선 */}
        <div className="flex justify-center my-16">
          <div className="w-24 h-[1px] bg-gray-300 opacity-60"></div>
        </div>
        
        {/* 4단계 카드 그룹 */}
        <div className="card-group min-h-[320px] max-w-6xl mx-auto mt-0 mb-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                num: "01",
                title: "COMMUNICATE",
                desc: [
                  "클라이언트의 의도에 따라",
                  "다양한 방향성을 제시하여",
                  "음악의 분위기와 배치를 구상 및 설명합니다.",
                ],
              },
              {
                num: "02",
                title: "DESIGN",
                desc: [
                  "충분한 소통을 통해",
                  "조율 된 내용을 바탕으로",
                  "본격적인 제작을 진행합니다.",
                ],
              },
              {
                num: "03",
                title: "DEVELOP",
                desc: [
                  "완성된 음악을 전달하고,",
                  "다양한 변수에 따른",
                  "수정 및 보완 작업을 진행합니다.",
                ],
              },
              {
                num: "04",
                title: "COMPLETE",
                desc: [
                  "최종으로 마무리 된 음악을 영상에 입혀",
                  "클라이언트의 최종 점검을 받고",
                  "작업을 완료합니다.",
                ],
              },
            ].map((step, index) => (
              <div
                key={step.num}
                className={`card-animation card-animation-${index + 1} flex flex-col items-center`}
                style={{
                  opacity: 0,
                  transform: 'translateX(-50px)',
                }}
              >
                <div className="text-6xl text-gray-500 font-light mb-2">{step.num}</div>
                <div className="tracking-[0.25em] text-xs font-semibold mb-4 text-gray-700">{step.title}</div>
                <div className="w-8 h-[2px] bg-black mb-4" style={{ opacity: 0.5 }} />
                <div className="text-[15px] text-gray-700 leading-relaxed">
                  {step.desc.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* 푸터 */}
      <footer id="contact-footer" className="bg-black text-gray-300 py-12 mt-0">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
          {/* 왼쪽: 구분선 + 타이틀 */}
          <div className="flex flex-col gap-8 min-w-[220px]">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 h-[2px] bg-gray-400" />
              <span className="tracking-[0.25em] text-lg font-light text-gray-200">GET IN MUSIC</span>
            </div>
          </div>
          {/* 가운데: 연락처 */}
          <div className="flex flex-col gap-2 text-sm min-w-[220px]">
            <div className="flex gap-4"><span className="text-gray-400">이메일</span><span>jjmusicc@naver.com</span></div>
            <div className="flex gap-4"><span className="text-gray-400">연락처</span><span>+ 82 010 2838 9404</span></div>
          </div>
          {/* 오른쪽: 저작권 */}
          <div className="flex-1 flex items-end justify-end">
            <div className="text-xs text-gray-500">© 2021. J&J Music. Co. all rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}