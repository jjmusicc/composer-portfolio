"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const navs = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/" },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      // 메인 페이지에 있을 때는 푸터로 스크롤
      document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // 다른 페이지에 있을 때는 메인 페이지로 이동 후 푸터로 스크롤
      router.push('/');
      setTimeout(() => {
        document.getElementById('contact-footer')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header>
      <div className="max-w-3xl mx-auto flex flex-col items-center py-8">
        <div className="font-librebaskerville font-bold text-[44px] tracking-[-1px] mb-12 mt-8">J&J Music.</div>
        <nav>
          <ul className="flex gap-8 text-sm tracking-widest font-extralight mt-0">
            {navs.map((nav) => (
              <li key={nav.name} className="relative">
                {nav.name === "CONTACT" ? (
                  <button
                    onClick={handleContactClick}
                    className="hover:underline font-playfair font-thin tracking-wider text-[13px] opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                    style={{ color: "#212327" }}
                  >
                    {nav.name}
                  </button>
                ) : (
                  <Link
                    href={nav.href}
                    className="hover:underline font-playfair font-thin tracking-wider text-[13px] opacity-80 hover:opacity-100 transition-opacity"
                    style={{ color: "#212327" }}
                  >
                    {nav.name}
                  </Link>
                )}
                {nav.name === "CONTACT" ? (
                  // CONTACT는 버튼이므로 표시선을 표시하지 않음
                  null
                ) : (
                  pathname === nav.href && (
                    <span className="block absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-16 h-[0.5px] bg-black rounded opacity-30"></span>
                  )
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="h-px w-full max-w-[1120px] bg-gray-300 opacity-40 mx-auto mt-5"></div>
    </header>
  );
}
