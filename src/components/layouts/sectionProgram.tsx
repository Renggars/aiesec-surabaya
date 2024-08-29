"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  eventImageList,
  internasionalImageList,
  localImageList,
} from "@/data/ListData";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Section = () => {
  useEffect(() => {
    AOS.init();

    const element = document.getElementById("event-aos");

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
        <div className="text-4xl sm:text-5xl font-semibold text-center text-gray-800">
          Programs
        </div>
        <p className="text-lg max-sm:px-5 sm:text-2xl text-gray-500 mt-5 sm:mt-10 text-center">
          We aim to develop leadership qualities and capabilities in young
          people with these programs
        </p>
        {/* programs internasional */}
        <div className="mt-8">
          {/* main */}
          <div className="flex justify-center max-sm:flex-col sm:mt-14">
            {/* left */}
            <div className="text-3xl text-center sm:text-6xl sm:text-start sm:w-[50%] text-gray-700 sm:text-gray-500 sm:pt-10 sm:pl-28 font-medium sm:font-normal leading-relaxed mb-5">
              <p>
                <span className="max-sm:hidden">Our</span> Internasional{" "}
                <span className="sm:hidden">Programs</span>
              </p>
              <p className="max-sm:hidden mt-5">Programs</p>
            </div>

            {/* right */}
            <div
              className="sm:w-[50%] flex justify-center max-sm:px-16 "
              data-aos="fade-left"
            >
              <Carousel className="w-full max-w-2xl">
                <CarouselContent>
                  {internasionalImageList.map((list, index) => (
                    <CarouselItem key={index}>
                      <div
                        className="rounded-xl cursor-pointer"
                        style={{ backgroundColor: list.bgColor }}
                      >
                        <Card
                          key={index}
                          className="flex-shrink-0 sm:h-[600px] h-[300px]  flex justify-center items-center"
                          style={{ background: list.bgColor }}
                        >
                          <CardContent>
                            <Image
                              src={list.src}
                              alt={list.alt}
                              width={400}
                              height={400}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>

        {/* program local */}
        <div className="mt-10">
          <div className="flex justify-center max-sm:flex-col sm:mt-24">
            {/* left */}
            <div className="sm:hidden text-3xl text-center text-gray-700 sm:text-gray-500 font-medium mb-5">
              Local Programs
            </div>
            {/* right */}
            <div
              className="sm:w-[50%] flex justify-center mt-5 max-sm:px-16 "
              data-aos="fade-right"
            >
              <Carousel className="w-full max-w-2xl">
                <CarouselContent>
                  {localImageList.map((list, index) => (
                    <CarouselItem key={index}>
                      <div
                        className="rounded-xl cursor-pointer"
                        style={{ backgroundColor: list.bgColor }}
                      >
                        <Card
                          key={index}
                          className="flex-shrink-0 sm:h-[600px] h-[300px]  flex justify-center items-center"
                          style={{ background: list.bgColor }}
                        >
                          <CardContent>
                            <Image
                              src={list.src}
                              alt={list.alt}
                              width={400}
                              height={400}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="sm:text-6xl sm:text-start sm:w-[50%] text-gray-500 sm:pt-10 sm:pl-28 font-normal leading-relaxed max-sm:hidden">
              Our Local Programs
            </div>
          </div>
        </div>
      </div>

      {/* event */}
      <div
        id="events"
        className="flex justify-center items-center flex-col mt-14 sm:mt-28"
      >
        {/* left */}
        <div className="text-4xl sm:text-5xl font-semibold text-center text-gray-800">
          Events
        </div>

        {/* right */}
        <div
          id="event-aos"
          className="sm:w-[50%] flex justify-center max-sm:px-16 mt-5 sm:mt-10"
        >
          <Carousel className="w-full sm:max-w-3xl ">
            <CarouselContent>
              {eventImageList.map((list, index) => (
                <CarouselItem key={index}>
                  <div
                    className="rounded-xl cursor-pointer"
                    style={{ backgroundColor: list.bgColor }}
                  >
                    <Card
                      key={index}
                      className="flex-shrink-0 sm:h-[600px] h-[300px]  flex justify-center items-center"
                      style={{ background: list.bgColor }}
                    >
                      <CardContent>
                        <Image
                          src={list.src}
                          alt={list.alt}
                          width={400}
                          height={400}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Section;
