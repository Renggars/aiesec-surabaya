"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  eventImageList,
  internasionalImageList,
  localImageList,
} from "@/data/ListData";

const Section = () => {
  const [currentIndexInternasional, setCurrentIndexInternasional] =
    useState<number>(0);
  const [currentIndexLocal, setCurrentIndexLocal] = useState<number>(0);
  const [currentIndexEvents, setCurrentIndexEvents] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = (setState: any, image: any) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setState((prevIndex: any) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500); // Durasi animasi
    }
  };

  const prevSlide = (setState: any, image: any) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setState((prevIndex: any) =>
          prevIndex === 0 ? image.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500); // Durasi animasi
    }
  };
  useEffect(() => {
    AOS.init();

    const element = document.getElementById("events");

    const updateAnimation = () => {
      if (window.innerWidth < 640) {
        element?.setAttribute("data-aos", "fade-left");
      } else {
        element?.setAttribute("data-aos", "zoom-in-up");
      }
      AOS.refresh();
    };

    updateAnimation();

    window.addEventListener("resize", updateAnimation);

    return () => {
      window.removeEventListener("resize", updateAnimation);
    };
  }, []);
  return (
    <div className="overflow-hidden">
      {/* Our Programs */}
      <div id="programs" className="mt-10 sm:mt-20 ">
        <div className="text-4xl sm:text-5xl font-semibold sm:font-bold text-center">
          Programs
        </div>
        <p className="text-lg max-sm:px-5 sm:text-2xl text-gray-700 mt-5 sm:mt-10 text-center">
          We aim to develop leadership qualities and capabilities in young
          people with these programs
        </p>
        {/* programs internasional */}
        <div className="mt-5">
          {/* main */}
          <div className="flex justify-center max-sm:flex-col sm:mt-14">
            {/* left */}
            <div className="text-3xl text-center sm:text-6xl sm:text-start sm:w-[50%] text-gray-500 sm:pt-10 sm:pl-28 font-medium sm:font-normal leading-relaxed mb-5">
              <p>
                <span className="max-sm:hidden">Our</span> Internasional{" "}
                <span className="sm:hidden">Programs</span>
              </p>
              <p className="max-sm:hidden mt-5">Programs</p>
            </div>

            {/* right */}
            <div
              className="relative flex justify-center sm:w-[50%] h-[350px] sm:h-[500px] overflow-hidden"
              data-aos="fade-left"
            >
              <div
                className="flex w-[80%] gap-5 sm:gap-10 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndexInternasional * 90}%)`,
                }}
              >
                {internasionalImageList.map((list, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 sm:h-[500px] h-full w-[90%] flex justify-center items-center p-10 rounded-sm "
                    style={{ background: list.bgColor }}
                  >
                    <Image
                      src={list.src}
                      alt={list.alt}
                      width={400}
                      height={400}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* button */}
          <div className="mt-5 mr-5 flex sm:mr-36 justify-end gap-3 items-center sm:gap-5">
            <button
              className="flex h-10 w-10 rounded-full bg-gray-400 text-white"
              onClick={() =>
                prevSlide(setCurrentIndexInternasional, internasionalImageList)
              }
              disabled={isAnimating}
            >
              <i className="bx bx-chevron-left m-auto text-4xl" />
            </button>
            <button
              className="flex h-10 w-10 rounded-full bg-gray-400 text-white"
              onClick={() =>
                nextSlide(setCurrentIndexInternasional, internasionalImageList)
              }
              disabled={isAnimating}
            >
              <i className="bx bx-chevron-right m-auto text-4xl" />
            </button>
          </div>
        </div>

        {/* program local */}
        <div className="mt-10">
          <div className="flex justify-center max-sm:flex-col sm:mt-24">
            {/* left */}
            <div className="sm:hidden text-3xl text-center text-gray-500 font-medium mb-5">
              Local Programs
            </div>
            {/* right */}
            <div
              className="relative flex justify-center sm:w-[50%] h-[350px] sm:h-[500px] overflow-hidden"
              data-aos="fade-right"
            >
              <div
                className="flex w-[80%] gap-5 sm:gap-10 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndexLocal * 90}%)`,
                }}
              >
                {localImageList.map((list, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 sm:h-[500px] h-full w-[90%] flex justify-center items-center p-10 rounded-sm"
                    style={{ background: list.bgColor }}
                  >
                    <Image
                      src={list.src}
                      alt={list.alt}
                      width={400}
                      height={400}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="sm:text-6xl sm:text-start sm:w-[50%] text-gray-500 sm:pt-10 sm:pl-28 font-normal leading-relaxed max-sm:hidden">
              Our Local Programs
            </div>
          </div>
          {/* button */}
          <div className="mt-5 mr-5 flex justify-end sm:justify-start gap-3 sm:ml-36  items-center sm:gap-5">
            <button
              className="flex h-10 w-10 rounded-full bg-gray-400 text-white"
              onClick={() => prevSlide(setCurrentIndexLocal, localImageList)}
              disabled={isAnimating}
            >
              <i className="bx bx-chevron-left m-auto text-4xl"></i>
            </button>
            <button
              className="flex h-10 w-10 rounded-full bg-gray-400 text-white"
              onClick={() => nextSlide(setCurrentIndexLocal, localImageList)}
              disabled={isAnimating}
            >
              <i className="bx bx-chevron-right m-auto text-4xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* event */}
      <div
        id="events"
        className="flex justify-center items-center flex-col mt-10 sm:mt-20"
      >
        {/* left */}
        <div className="text-4xl sm:text-5xl font-semibold sm:font-bold text-center">
          Events
        </div>

        {/* right */}
        <div className="realative flex justify-center mt-5 sm:mt-10 sm:w-[50%] h-[350px] sm:h-[500px] overflow-hidden">
          <div
            className="flex w-[80%] gap-5 sm:gap-10 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndexEvents * 90}%)`,
            }}
          >
            {eventImageList.map((list, index) => (
              <div
                key={index}
                className="flex-shrink-0 sm:h-[500px] h-full w-[90%] flex justify-center items-center p-10 rounded-sm "
                style={{ background: list.bgColor }}
              >
                <Image src={list.src} alt={list.alt} width={400} height={400} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* button */}
      <div className="mt-5 mr-5 flex justify-end gap-3 items-center sm:gap-5">
        <button
          className="flex h-10 w-10 rounded-full bg-gray-400 text-white"
          onClick={() => prevSlide(setCurrentIndexEvents, eventImageList)}
          disabled={isAnimating}
        >
          <i className="bx bx-chevron-left m-auto text-4xl"></i>
        </button>
        <button
          className="flex h-10 w-10 rounded-full bg-gray-400 text-white"
          onClick={() => nextSlide(setCurrentIndexEvents, eventImageList)}
          disabled={isAnimating}
        >
          <i className="bx bx-chevron-right m-auto text-4xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Section;
