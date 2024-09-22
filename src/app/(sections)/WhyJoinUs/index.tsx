import SignUpButton from "@/app/(components)/SignUpButton";
import Image from "next/image";
import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const WhyJoinUs = () => {
  return (
    <div className="relative p-20">
      <div className="flex flex-col items-center justify-center rounded-[30px] bg-[#fefeff] p-20 md:flex-row md:justify-between">
        <div
          className="z-1 absolute hidden -translate-x-1/2 -translate-y-1/2 transform rounded-[50px] bg-[#BE185D] opacity-75 md:block"
          style={{
            top: "31vw",
            left: "91vw",
            width: "210px",
            height: "210px",
          }}
        ></div>
        <div
          className="h-210 w-210 absolute z-0 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-[50px] bg-[#A21CAF] opacity-75 md:block"
          style={{
            top: "28vw",
            left: "86vw",
            width: "74px",
            height: "74px",
          }}
        ></div>
        <div
          className="absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-[50px] bg-[#15803D] opacity-75 md:block"
          style={{
            top: "28vw",
            left: "68vw",
            width: "86px",
            height: "86px",
          }}
        ></div>

        <div
          className="absolute z-0 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-[30px] bg-[#B45309] opacity-75 md:block"
          style={{
            top: "13vw",
            left: "63vw",
            width: "90px",
            height: "90px",
          }}
        ></div>

        <div
          className="absolute z-0 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-[50px] bg-[#0369A1] opacity-75 md:block"
          style={{
            top: "5vw",
            left: "88vw",
            width: "60px",
            height: "60px",
            zIndex: 10,
          }}
        ></div>

        <div
          className="absolute z-0 hidden -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-[#FDE68A] opacity-75 md:block"
          style={{
            top: "20vw",
            left: "74vw",
            width: "800px",
            height: "220px",
          }}
        ></div>
        <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
          <h2 className="mb-6 text-xl font-extrabold text-black md:text-5xl">
            Why join us
          </h2>
          <ul className="mb-6">
            <li className="flex items-center gap-2 text-xl">
              <IoCheckmarkOutline className="text-green-300" /> Est et in
              pharetra magna adipiscing ornare aliquam.
            </li>
            <li className="flex items-center gap-2 text-xl">
              <IoCheckmarkOutline className="text-green-300" /> Tellus arcu sed
              consequat ac velit ut eu blandit.
            </li>
            <li className="flex items-center gap-2 text-xl">
              <IoCheckmarkOutline className="text-green-300" /> Ullamcorper
              ornare in et egestas dolor orci.
            </li>
          </ul>
          <SignUpButton href="#" />
        </div>
        <div className="z-10 mt-10 md:mt-0">
          <Image
            src="/img/Desktop.png"
            width={600}
            height={600}
            alt="desktop"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyJoinUs;
