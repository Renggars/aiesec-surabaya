"use client";

import { Open_Sans } from "next/font/google";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 600, // Durasi animasi
      easing: "ease-in-out", // Gaya easing
      once: true, // Apakah animasi hanya terjadi sekali
    });
  }, []);

  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
