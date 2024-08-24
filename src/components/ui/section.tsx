"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = () => {
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
              className="flex justify-center max-sm:px-5 sm:w-[50%] pr-10 overflow-hidden"
              data-aos="fade-left"
            >
              <div className="bg-[#0cb9c1] sm:h-[500px] sm:w-[600px] h-[350px] w-[80%] flex justify-center items-center p-10 rounded-sm">
                <Image
                  src={"/globalTalent.png"}
                  alt="global teacher"
                  width={400}
                  height={400}
                />
              </div>
              {/* <div className="bg-[#f48924]">
          <Image
            src={"/globalTeacher.png"}
            alt="global teacher"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-[#037ef3]">
          <Image
            src={"/aiesecMember.webp"}
            alt="global teacher"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-[#f85a40]">
          <Image
            src={"/globalVolunteer.png"}
            alt="global teacher"
            width={400}
            height={400}
          />
        </div> */}
            </div>
          </div>
          {/* button */}
          <div className="mt-5 mr-5 flex sm:mr-36 justify-end gap-3 items-center sm:gap-5">
            <div className="flex h-10 w-10 rounded-full bg-gray-400 text-white">
              <i className="bx bx-chevron-left m-auto text-4xl"></i>
            </div>
            <div className="flex h-10 w-10 rounded-full bg-gray-400 text-white">
              <i className="bx bx-chevron-right m-auto text-4xl"></i>
            </div>
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
              className="flex justify-center max-sm:px-5 sm:w-[50%]  pr-10"
              data-aos="fade-right"
            >
              <div className="bg-blue-500 sm:h-[500px] sm:w-[600px] h-[350px] w-[80%] flex justify-center items-center p-10 rounded-sm">
                <Image
                  src={"/aiesecFuture.webp"}
                  alt="global teacher"
                  width={500}
                  height={500}
                />
              </div>
              {/* <div className="bg-orange-400">
          <Image
            src={"/locaProject.png"}
            alt="global teacher"
            width={400}
            height={400}
          />
        </div>
        <div className="bg-blue-500">
          <Image
            src={"/localVolunteer.webp"}
            alt="global teacher"
            width={400}
            height={400}
          />
        </div> */}
            </div>
            <div className="sm:text-6xl sm:text-start sm:w-[50%] text-gray-500 sm:pt-10 sm:pl-28 font-normal leading-relaxed max-sm:hidden">
              Our Local Programs
            </div>
          </div>
          <div className="mt-5 mr-5 flex justify-end sm:justify-start gap-3 sm:ml-36  items-center sm:gap-5">
            <div className="flex h-10 w-10 rounded-full bg-gray-400 text-white">
              <i className="bx bx-chevron-left m-auto text-4xl"></i>
            </div>
            <div className="flex h-10 w-10 rounded-full bg-gray-400 text-white">
              <i className="bx bx-chevron-right m-auto text-4xl"></i>
            </div>
          </div>
        </div>
      </div>

      {/* event */}
      <div className="flex justify-center items-center flex-col mt-10 sm:mt-20">
        {/* left */}
        <div className="text-4xl sm:text-5xl font-semibold sm:font-bold text-center">
          Events
        </div>

        {/* right */}
        <div
          id="events"
          className="flex justify-center max-sm:mt-5 max-sm:px-5 sm:mt-10"
        >
          {/* <div className="bg-blue-500 h-auto w-full flex justify-center items-center p-10 sm:h-80 sm:w-96">
          <Image
            src={"/impactCircle.webp"}
            alt="global teacher"
            width={400}
            height={400}
          />
        </div> */}
          <div className="bg-orange-400 h-[350px] w-[80%] rounded-sm flex justify-center items-center p-10 sm:h-[500px] sm:w-[700px]">
            <Image
              src={"/youthToday.webp"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      {/* button */}
      <div className="mt-5 mr-5 flex justify-end gap-3 items-center sm:gap-5">
        <div className="flex h-10 w-10 rounded-full bg-gray-400 text-white">
          <i className="bx bx-chevron-left m-auto text-4xl"></i>
        </div>
        <div className="flex h-10 w-10 rounded-full bg-gray-400 text-white">
          <i className="bx bx-chevron-right m-auto text-4xl"></i>
        </div>
      </div>

      {/* blog */}
      <div id="blog" className="mt-20">
        <div className="text-4xl sm:text-5xl font-semibold sm:font-bold text-center mt-10">
          Blog
        </div>
        <div className="flex justify-center mt-6">
          <div className="relative h-[660px] w-full">
            <Image
              src={"/blog.webp"}
              alt="blog"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="absolute text-gray-100 pt-5 px-7">
            AIESEC in Indonesia presents you with our blogs and press releases
            for you to know more about us and our programs. So prepare your
            devices, have your time, and enjoy our writings!
          </p>
          <div className="absolute bg-slate-100 h-[460px] w-[85%] translate-y-44 ">
            <div className="relative flex h-[150px] w-full">
              <Image
                src={"/blog/upnblog.webp"}
                alt="upnBlogImage"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="pt-5 px-5">
              <p className="text-sm font-bold text-gray-950">
                Supporting Health and Well-being with Local Project by AIESEC in
                UPNVJ’s Vitation: Stay Healthy Together, With You Wellness
              </p>
              <p className="text-sm text-gray-400">
                by AIESEC in UPNVJ | Aug 23, 2024 | Local Project, Youth
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Jakarta, 23 August 2024 - Hi, Change Makers! Have you ever
                participated in a volunteering project that not only contributes
                to the surrounding environment, but also offers training,
                international networking, and personal development focus? Let’s
                dive into the volunteer experience of “Vitation:...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact ? */}
      <div
        id="contact"
        className="flex max-sm:flex-col mt-14 sm:justify-center sm:gap-10 sm:mt-20 sm:px-44"
      >
        <div className="sm:w-1/2 px-8">
          <div className="text-4xl sm:text-5xl font-semibold sm:font-bold text-center">
            Partner With Us?
          </div>
          <div className="mx-auto h-[2px] sm:h-1 w-48 bg-primary mt-2 mb-7" />
          <p>
            AIESEC is a global platform for young people to explore and develop
            their leadership potential. We are a non-political, independent,
            not-for-profit organization run by students and recent graduates of
            institutions of higher education.
          </p>
        </div>

        <div className="sm:w-1/2 mt-6">
          <form
            action="https://getform.io/f/zazkpxob"
            method="POST"
            encType="multipart/form-data"
            target="_blank"
          >
            <div className="w-full lg:w-full">
              <div className="w-full px-8 mb-3">
                <label
                  htmlFor="name"
                  className="text-base font-bold text-green-main"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-slate-200 text-slate-700 p-2 rounded-md focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main"
                ></input>
              </div>
              <div className="w-full px-8 mb-3">
                <label
                  htmlFor="email"
                  className="text-base font-bold text-green-main"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-slate-200 text-slate-700 p-2 rounded-md focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main"
                ></input>
              </div>
              <div className="w-full px-8 mb-4">
                <label
                  htmlFor="message"
                  className="text-base font-bold text-green-main"
                >
                  Message
                </label>
                <textarea
                  typeof="text"
                  id="message"
                  name="message"
                  className="w-full bg-slate-200 text-slate-700 p-3 rounded-md focus:outline-none focus:ring-green-main focus:ring-1 focus:border-green-main h-44"
                ></textarea>
              </div>
              <div className="w-full px-8 text-center">
                <button className="bg-primary text-base font-semibold text-white bg-green-main py-1 px-9 rounded-md w-full sm:w-32 lg:w-60 xl:w-72 hover:opacity-80 hover:shadow-lg transition duration-500">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* partner list */}
      <div className="sm:mt-20 mt-14 px-8">
        <div className="text-3xl font-semibold text-center mt-10">
          Our Partners
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-7 gap-3 sm:gap-2 mt-10 sm:px-44 justify-center items-center">
          <Image src={"/goto.png"} alt="goto" width={100} height={100} />
          <Image src={"/indosatt.png"} alt="goto" width={100} height={100} />
          <Image src={"/bcaa.png"} alt="goto" width={100} height={100} />
          <Image src={"/permata.webp"} alt="goto" width={100} height={100} />
          <Image src={"/schoters.webp"} alt="goto" width={100} height={100} />
          <Image src={"/unilever.webp"} alt="goto" width={100} height={100} />
          <Image src={"/kraftHeinz.webp"} alt="goto" width={100} height={100} />
          <Image src={"/nestle.webp"} alt="goto" width={100} height={100} />
          <Image src={"/mondelez.webp"} alt="goto" width={100} height={100} />
          <Image src={"/danone.webp"} alt="goto" width={100} height={100} />
          <Image src={"/isnpigo.webp"} alt="goto" width={100} height={100} />
          <Image src={"/blibi.webp"} alt="goto" width={100} height={100} />
          <Image
            src={"/fourthValley.webp"}
            alt="goto"
            width={100}
            height={100}
          />
          <Image src={"/danamon.webp"} alt="goto" width={100} height={100} />
          <Image src={"/dbs.webp"} alt="goto" width={100} height={100} />
          <Image src={"/ecomatcher.webp"} alt="goto" width={100} height={100} />
          <Image src={"/paragon.webp"} alt="goto" width={100} height={100} />
          <Image src={"/goop.webp"} alt="goto" width={100} height={100} />
          <Image src={"/sasa.webp"} alt="goto" width={100} height={100} />
          <Image src={"/nabati.webp"} alt="goto" width={100} height={100} />
          <Image
            src={"/General_Electric.webp"}
            alt="goto"
            width={100}
            height={100}
          />
          <Image src={"/ef.webp"} alt="goto" width={100} height={100} />
          <Image
            src={"/commonwealth.png"}
            alt="goto"
            width={100}
            height={100}
          />
          <Image src={"/adb.webp"} alt="goto" width={100} height={100} />
          <Image src={"/telkomsel.webp"} alt="goto" width={100} height={100} />
          <Image src={"/shopee.webp"} alt="goto" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Section;
