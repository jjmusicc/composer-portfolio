"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navs = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // 모바일 메뉴 닫기
    router.push('/contact');
  };

  const handleNavClick = () => {
    setIsMenuOpen(false); // 모바일 메뉴 닫기
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* 로고 */}
        <Link href="/" className="navbar-logo" onClick={handleNavClick}>
          J&J Music.
        </Link>
        
        {/* 데스크톱 네비게이션 */}
        <nav className="navbar-desktop">
          <ul className="navbar-list">
            {navs.map((nav) => (
              <li key={nav.name} className="navbar-item">
                {nav.name === "CONTACT" ? (
                  <button
                    onClick={handleContactClick}
                    className="navbar-link"
                  >
                    {nav.name}
                  </button>
                ) : (
                  <Link
                    href={nav.href}
                    className="navbar-link"
                    onClick={handleNavClick}
                  >
                    {nav.name}
                  </Link>
                )}
                {nav.name === "CONTACT" ? (
                  // CONTACT는 버튼이므로 표시선을 표시하지 않음
                  null
                ) : (
                  pathname === nav.href && (
                    <span className="navbar-active-line"></span>
                  )
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* 모바일 햄버거 버튼 */}
        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        {/* 모바일 네비게이션 메뉴 */}
        <nav className={`navbar-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-mobile-list">
            {navs.map((nav) => (
              <li key={nav.name} className="navbar-mobile-item">
                {nav.name === "CONTACT" ? (
                  <button
                    onClick={handleContactClick}
                    className="navbar-mobile-link"
                  >
                    {nav.name}
                  </button>
                ) : (
                  <Link
                    href={nav.href}
                    className="navbar-mobile-link"
                    onClick={handleNavClick}
                  >
                    {nav.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* 구분선 */}
      <div className="navbar-divider"></div>
    </header>
  );
}
