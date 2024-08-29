import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full h-full opacity-30">
        <Image
          src={"/blog.webp"}
          alt="blog"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="absolute font-sans top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] sm:w-auto h-auto bg-primaryColor flex justify-center items-center sm:p-5 p-3 rounded-sm">
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
      <Link
        href={"https://aiesec.org/search"}
        className="absolute font-sans top-[80%]  left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto bg-primaryColor flex justify-center items-center py-2 px-3  text-white sm:text-2xl font-semibold rounded-md mt-5"
      >
        Let{"'"}s get started!
      </Link>
    </div>
  );
};

export default Hero;
