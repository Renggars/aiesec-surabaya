import { blogList } from "@/data/ListData";
import Image from "next/image";
import React from "react";

const SectionBlog = () => {
  return (
    <div id="blog" className="mt-20">
      <div className="text-4xl sm:text-5xl font-semibold text-center text-gray-800 mt-10">
        Blog
      </div>
      <div className="relative flex justify-center items-center mt-8">
        <div className="relative h-[660px] sm:h-[calc(100vh-14rem)] w-full flex justify-center overflow-hidden">
          <Image
            src={"/blog.webp"}
            alt="blog"
            layout="fill"
            objectFit="cover"
          />
          <p className="absolute sm:text-xl text-white pt-5 sm:pt-10 px-7 sm:w-1/2">
            AIESEC in Indonesia presents you with our blogs and press releases
            for you to know more about us and our programs. So prepare your
            devices, have your time, and enjoy our writings!
          </p>
          <div className="absolute grid grid-cols-1  sm:grid-cols-4 gap-5 sm:gap-16 h-[calc(100vh-17rem)] sm:h-[calc(100vh-26rem)] w-[85%] cursor-pointer overflow-auto mt-40 rounded-2xl">
            {blogList.map((list, index) => (
              <div
                key={index}
                className="bg-slate-100 min-h-[480px] sm:h-full h-full overflow-auto sm:scrollbar-hide  rounded-2xl"
              >
                <div className="relative flex h-[150px] w-full">
                  <Image
                    src={list.src}
                    alt={list.alt}
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                </div>
                <div className="pt-5 px-5">
                  <p className="text-sm font-bold text-gray-950 sm:text-base">
                    {list.title}
                  </p>
                  <p className="text-sm sm:text-base text-gray-400">
                    {list.date}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-4">
                    {list.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;
