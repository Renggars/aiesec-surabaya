"use client";
import { navLinks } from "@/data/ListData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        const fixedNav = header.offsetTop;
        if (window.scrollY > fixedNav) {
          header.classList.add("navbar-fixed");
        } else {
          header.classList.remove("navbar-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <header
        id="header"
        className="absolute w-full sm:py-5 py-3 sm:px-10 px-5 flex justify-between items-center border border-b-1 border-gray-300 sm:h-28 h-16 z-40 bg-white top-0"
      >
        <nav className="flex w-full relative">
          {/* logo desktop */}
          <Link href={"/"} className="ml-5 cursor-pointer max-sm:hidden">
            <Image
              src="/aiesecblue.webp"
              alt="AIESEC-Surabaya"
              width={250}
              height={190}
              priority
            />
          </Link>

          {/* nav links dekstop */}
          <div className="flex flex-1 max-sm:hidden items-center justify-end mr-20 sm:scroll-pt-28">
            {navLinks.map((link: navLinks) => (
              <a
                key={link.href}
                className="text-gray hover:text-primary px-5 transition-all cursor-pointer"
                href={link.href} // Masih menyertakan href untuk SEO
                onClick={(e) => handleScroll(e, link.href.slice(1))} // Menggunakan slice(1) untuk menghapus '#' dari href
              >
                {link.label}
              </a>
            ))}
            <div
              className="hover:text-primary transition-all cursor-pointer"
              onClick={() => setIsOpenMore(!isOpenMore)}
            >
              More
            </div>
          </div>

          {/* logo mobile */}
          <Link href={"/"} className="ml-5 cursor-pointer max-sm:block hidden">
            <Image
              src={"/logo/logo-mobile.svg"}
              alt="AIESEC-Surabaya"
              width={30}
              height={30}
            />
          </Link>

          {/* hamburger menu */}
          <div className="sm:hidden flex flex-1 justify-end text-4xl px-4">
            <i className="bx bx-menu" onClick={() => setIsOpen(true)} />
          </div>
        </nav>
      </header>

      {/* Hamburger Menu Content */}
      <div
        className={`fixed bg-gray-900 flex flex-col w-[65%] h-full top-0 right-0 bottom-0 z-50 sm:hidden transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* close button */}
        <div className="text-4xl text-right px-6 pt-4 text-gray-300">
          <i className="bx bx-x" onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex justify-center">
          <Image
            src={"/aiesecblue.webp"}
            alt="aiesec-logo"
            width={100}
            height={150}
          />
        </div>
        <div className="flex flex-col mt-3 cursor-pointer">
          {navLinks.map((link: navLinks) => (
            <a
              key={link.href}
              className="text-gray-200 hover:text-primary py-3 px-7 transition-all font-semibold mb-1"
              href={link.href} // Masih menyertakan href untuk SEO
              onClick={(e) => handleScroll(e, link.href.slice(1))} // Menggunakan slice(1) untuk menghapus '#' dari href
            >
              {link.label}
            </a>
          ))}
          <div
            className="flex justify-between items-center grouhover:text-blue-400 hover:border-y hover:border-gray-600 group"
            onClick={() => setIsOpenMore(!isOpenMore)}
          >
            <p className="text-gray-200 font-semibold transition-all cursor-pointer py-4 px-7 group-hover:text-primary">
              More
            </p>
            <p className="text-gray-500 mr-5 group-hover:text-primary">+</p>
          </div>
          {/* More Content */}
          {isOpenMore && (
            <div className="flex flex-col px-10 gap-5 text-gray-200 transition-all text-xl mt-5">
              <Link
                href={"https://aiesec.or.id/alumni/"}
                className="hover:text-primary"
              >
                Alumni
              </Link>
              <Link
                href={
                  "https://aiesec.or.id/board-of-advisors-and-supervisory-group/"
                }
                className="hover:text-primary"
              >
                BoA and SG
              </Link>
              <Link
                href={"https://aiesec.or.id/nationalboard/"}
                className="hover:text-primary"
              >
                National Board
              </Link>
              <Link
                href={"https://aiesec.or.id/partners/"}
                className="hover:text-primary"
              >
                Partners
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
