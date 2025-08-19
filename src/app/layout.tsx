// src/app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Local Libre Baskerville bundled with the app
const libreBaskerville = localFont({
  src: [
    { path: "./fonts/libre-baskerville/LibreBaskerville-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/libre-baskerville/LibreBaskerville-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/libre-baskerville/LibreBaskerville-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "J&J Music",
  description: "J&J Music - 애니메이션, 게임, 영화를 위한 음악 디자인",
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable}`}>
      <body className={`${libreBaskerville.variable}`}>{children}</body>
    </html>
  );
}