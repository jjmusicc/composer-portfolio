
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
    <div className="home-container">
      {/* 네비게이션 바 */}
      <NavBar />
      
      {/* 메인 컨테이너 - CSS Grid 사용 */}
      <div className="main-grid">
        {/* 스튜디오 이미지 - Grid Area 1 */}
        <div className="grid-area-studio">
          <div className="studio-container">
            <Image
              src="/studio.jpg"
              alt="작업실"
              width={555}
              height={436}
              className="studio-image"
              style={{
                borderRadius: 0,
                boxShadow: 'none',
              }}
            />
          </div>
        </div>
        
        {/* ABOUT US 섹션 - Grid Area 2 */}
        <div className="grid-area-about">
          <div className="about-container">
            <div className="about-header">
              <div className="about-subtitle">Aenean felis</div>
              <div className="about-title">ABOUT US</div>
              <div className="about-divider"></div>
            </div>
            
            <div className="about-content">
              <p>J&J Music에서는 애니메이션, 게임, 영화를 비롯한 다양한 영상에 음악을 디자인합니다.</p>
              <p>어떤 옷을 입느냐에 따라 사람의 분위기가 달라지듯</p>
              <p>똑같은 영상이라도 음악의 분위기, 속도, 악기에 따라 전혀 다른 느낌을 전달합니다.</p>
              <p>디테일한 영상 분석과 커뮤니케이션을 통해</p>
              <p>더 높은 수준의 영상으로 끌어올립니다.</p>
            </div>
          </div>
        </div>
        
        {/* Profile 섹션 - Grid Area 3 */}
        <div className="grid-area-profile">
          <div className="profile-container">
            <div className="profile-title">&lt;Profile&gt;</div>
            <div className="profile-list">
              {profile.map((item, i) => (
                <div key={i} className="profile-item">
                  <span className="profile-year">{item.year}</span>
                  <span className="profile-work">{item.work}</span>
                  <span className="profile-role">{item.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* 구분선 - Grid Area 4 */}
        <div className="grid-area-divider">
          <div className="divider-line"></div>
        </div>
        
        {/* 4단계 카드 그룹 - Grid Area 5 */}
        <div className="grid-area-cards">
          <div className="cards-container">
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
                className={`card-animation card-animation-${index + 1} process-card`}
                style={{
                  opacity: 0,
                  transform: 'translateX(-50px)',
                }}
              >
                <div className="card-number">{step.num}</div>
                <div className="card-title">{step.title}</div>
                <div className="card-line"></div>
                <div className="card-description">
                  {step.desc.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 푸터 */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-title">
              <div className="footer-line"></div>
              <span>GET IN MUSIC</span>
            </div>
          </div>
          <div className="footer-center">
            <div className="contact-item">
              <span className="contact-label">이메일</span>
              <span>jjmusicc@naver.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">연락처</span>
              <span>+ 82 010 2838 9404</span>
            </div>
          </div>
          <div className="footer-right">
            <div className="copyright">© 2021. J&J Music. Co. all rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}