import Image from "next/image";
import React from "react";

const SectionBlog = () => {
  return (
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
          AIESEC in Indonesia presents you with our blogs and press releases for
          you to know more about us and our programs. So prepare your devices,
          have your time, and enjoy our writings!
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
  );
};

export default SectionBlog;
