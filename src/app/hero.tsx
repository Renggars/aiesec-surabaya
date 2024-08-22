import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* Home */}
      <div className="flex justify-center h-screen">
        <div className="relative w-full max-sm:h-[calc(100vh-4rem)] h-[calc(100vh-7rem)] opacity-30 max-sm:top-16 top-28">
          <Image
            src={"/blog.webp"}
            alt="blog"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="absolute font-sans top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] sm:w-auto h-auto bg-primary flex justify-center items-center sm:p-5 p-3 rounded-sm">
          <p className="text-white font-bold sm:text-5xl text-lg">
            Welcome to AIESEC Surabaya
          </p>
        </div>
        <div className="absolute font-sans sm:top-[45%] top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full">
          <p className="text-[#1d2129] font-bold sm:text-7xl text-5xl text-center sm:mt-5">
            Leadership <br /> is for <br /> every young person
          </p>
        </div>
        <div className="absolute font-sans sm:top-[70%] top-[72%] left-1/2 -translate-x-1/2 -translate-y-1/2  justify-center items-center">
          <p className="text-gray-700 font-bold sm:text-xl text-lg text-center mt-3">
            <span className="max-sm:hidden">
              Take part in one of our programs in the city of Surabaya.
            </span>
            Start your leadership journey with AIESEC.
          </p>
        </div>
        <button className="absolute font-sans top-[80%]  left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto bg-primary flex justify-center items-center py-2 px-3  text-white sm:text-2xl font-semibold rounded-md mt-5">
          Let{"'"}s get started!
        </button>
      </div>

      {/* Our Programs */}
      <div id="programs" className="block mt-10">
        <div className="text-4xl sm:text-5xl font-bold text-center">
          Programs
        </div>
        <p className="text-lg max-sm:px-5 sm:text-2xl text-gray-700 mt-5 text-center">
          We aim to develop leadership qualities and capabilities in young
          people with these programs
        </p>
      </div>

      {/* programs internasional */}
      <div className="flex justify-center max-sm:flex-col sm:mt-20">
        <div className="text-3xl font-semibold text-center sm:text-3xl mt-9 sm:w-[50%] text-gray-600">
          Our Internasional Programs
        </div>
        <div className="flex justify-center mt-10 max-sm:px-5 sm:grid sm:grid-cols-2 sm:gap-5 sm:px-56 sm:w-[50%]">
          <div className="bg-[#0cb9c1] sm:h-80 sm:w-96 h-auto w-full flex justify-center items-center p-10">
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

      {/* program local */}
      <div className="flex justify-center max-sm:flex-col sm:mt-20">
        <div className="text-3xl font-semibold text-center sm:text-3xl mt-9 sm:w-[50%] text-gray-600">
          Our Local Programs
        </div>
        <div className="flex justify-center mt-10 max-sm:px-5 sm:grid sm:grid-cols-2 sm:gap-5 sm:px-56 sm:w-[50%]">
          <div className="bg-blue-500 sm:h-80 sm:w-96 h-auto w-full flex justify-center items-center p-10">
            <Image
              src={"/aiesecFuture.webp"}
              alt="global teacher"
              width={400}
              height={400}
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
      </div>

      {/* our event */}
      <div id="events" className="flex justify-center max-sm:flex-col sm:mt-20">
        <div className="text-3xl font-semibold text-center sm:text-3xl mt-9 sm:w-[50%] text-gray-600">
          Our Events
        </div>
        <div className="flex justify-center mt-10 max-sm:px-5 sm:grid sm:grid-cols-2 sm:gap-5 sm:px-56 sm:w-[50%]">
          {/* <div className="bg-blue-500 flex justify-center items-center">
            <Image
              src={"/impactCircle.webp"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div> */}
          <div className="bg-orange-400  h-auto w-full flex justify-center items-center p-10 sm:h-80 sm:w-96">
            <Image
              src={"/youthToday.webp"}
              alt="global teacher"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* blog */}
      <div id="blog" className="mt-20">
        <div className="text-3xl font-semibold text-center mt-9">Blog</div>
        <div className="flex justify-center mt-10">
          <Image src={"/blog.webp"} alt="blog" width={1200} height={500} />
        </div>
      </div>

      {/* Contact ? */}
      <div
        id="contact"
        className="flex max-sm:flex-col mt-14 sm:justify-center sm:gap-10 sm:mt-20 sm:px-44"
      >
        <div className="sm:w-1/2 px-8">
          <div className="text-3xl font-semibold text-center">
            Partner With Us?
          </div>
          <div className="mx-auto h-[2px] sm:h-1 w-48 bg-primary mt-2 mb-5" />
          <p>
            AIESEC is a global platform for young people to explore and develop
            their leadership potential. We are a non-political, independent,
            not-for-profit organization run by students and recent graduates of
            institutions of higher education.
          </p>
        </div>

        <div className="sm:w-1/2 mt-10">
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
              <div className="w-full px-8 mb-6">
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
          Out Partners
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
    </>
  );
};

export default Hero;
