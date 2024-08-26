import Image from "next/image";
import React from "react";

const SectionBlog = () => {
  return (
    <div id="blog" className="mt-20">
      <div className="text-4xl sm:text-5xl font-semibold sm:font-bold text-center mt-10">
        Blog
      </div>
      <div className="flex justify-center mt-6">
        <div className="relative h-[660px] sm:h-[calc(100vh-13rem)] w-full">
          <Image
            src={"/blog.webp"}
            alt="blog"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="absolute text-xl text-white pt-5 sm:pt-10 px-7 sm:w-1/2">
          AIESEC in Indonesia presents you with our blogs and press releases for
          you to know more about us and our programs. So prepare your devices,
          have your time, and enjoy our writings!
        </p>
        <div className="absolute grid grid-cols-4 gap-16 h-[460px] sm:h-[calc(100vh-25rem)] w-[85%] -mt-7 cursor-pointer">
          <div className=" bg-slate-100 h-full translate-y-44 overflow-auto rounded-2xl">
            <div className="relative flex h-[150px] w-full">
              <Image
                src={"/blog/upnblog.webp"}
                alt="upnBlogImage"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="pt-5 px-5">
              <p className="text-sm font-bold text-gray-950 sm:text-base">
                Supporting Health and Well-being with Local Project by AIESEC in
                UPNVJ’s Vitation: Stay Healthy Together, With You Wellness
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                by AIESEC in UPNVJ | Aug 23, 2024 | Local Project, Youth
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-4">
                Jakarta, 23 August 2024 - Hi, Change Makers! Have you ever
                participated in a volunteering project that not only contributes
                to the surrounding environment, but also offers training,
                international networking, and personal development focus? Let’s
                dive into the volunteer experience of “Vitation:...
              </p>
            </div>
          </div>
          <div className=" bg-slate-100 h-full translate-y-44 overflow-auto rounded-2xl">
            <div className="relative flex h-[150px] w-full">
              <Image
                src={"/blog/2.webp"}
                alt="upnBlogImage"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="pt-5 px-5">
              <p className="text-sm sm:text-base font-bold text-gray-950">
                Kesuksesan AIESEC Future Leaders di AIESEC in Surabaya: “Sesi
                Induksi yang Berdayakan Lebih dari 160 Mahasiswa dalam
                Pengembangan Kepemimpinan”
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                by AIESEC in Surabaya | Aug 12, 2024 | AIESEC Future Leaders,
                Leadership, Press Release, Youth
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-4">
                Surabaya, 12 Agustus 2024 - AIESEC Future Leaders (AFL) dari
                AIESEC in Surabaya berhasil menyelesaikan rangkaian program
                leadership development (pengembangan kepemimpinan), tepatnya
                sesi induction (induksi) bersama lebih dari 160 peserta di
                berbagai universitas di...
              </p>
            </div>
          </div>
          <div className=" bg-slate-100 h-full translate-y-44 overflow-auto rounded-2xl">
            <div className="relative flex h-[150px] w-full">
              <Image
                src={"/blog/3.jpeg"}
                alt="upnBlogImage"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="pt-5 px-5">
              <p className="text-sm sm:text-base font-bold text-gray-950">
                Volunteering in Turkey with AIESEC: Maira’s Inspiring Global
                Adventure
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                by AIESEC in UPNVJ | Aug 17, 2024 | Exchange Stories, Global
                Volunteer, Leadership, Youth
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-4">
                Volunteering in Turkey with AIESEC: Maira’s Inspiring Global
                Adventure Jakarta, 17 Agustus 2024 - Have you ever wondered what{" "}
                {`it's`} like to volunteer? To dedicate your time and energy to
                a cause bigger than yourself? Volunteering can be a profoundly
                rewarding experience, offering opportunities for personal
                growth, skill development, and making a tangible impact on
                society. What about...
              </p>
            </div>
          </div>
          <div className=" bg-slate-100 h-full translate-y-44 overflow-auto rounded-2xl">
            <div className="relative flex h-[150px] w-full">
              <Image
                src={"/blog/4.webp"}
                alt="upnBlogImage"
                layout="fill"
                objectFit="cover"
              ></Image>
            </div>
            <div className="pt-5 px-5">
              <p className="text-sm sm:text-base font-bold text-gray-950">
                Press Release of Impact Circle 6.0 “From Burnout to Balance:
                Synchronizing Wellness For Optimal Performance and Growth” by
                AIESEC in UPNVJ
              </p>
              <p className="text-sm sm:text-base text-gray-400">
                by AIESEC in UPNVJ | Aug 10, 2024 | Impact Circle, Press
                Release, Youth
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-4">
                Jakarta, 10 Agustus 2024 - In this summer, AIESEC in UPNVJ
                successfully held a hybrid Impact Circle. This year marked the
                6th edition of AIESEC in UPNVJ’s Impact Circle, themed “Impact
                Circle 6.0: From BtoB”. The event provided a platform for young
                individuals to expand their understanding of mental...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;
