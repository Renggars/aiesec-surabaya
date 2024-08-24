import { partnerList } from "@/data/ListData";
import Image from "next/image";
import React from "react";

const SectionPartner = () => {
  return (
    <div className="sm:mt-20 mt-14 px-8">
      <div className="text-3xl font-semibold text-center mt-10">
        Our Partners
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-7 gap-3 sm:gap-2 mt-10 sm:px-44 justify-center items-center">
        {partnerList.map((list: partnerList) => (
          <Image
            src={list.src}
            alt={list.alt}
            width={100}
            height={100}
            key={list.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionPartner;
