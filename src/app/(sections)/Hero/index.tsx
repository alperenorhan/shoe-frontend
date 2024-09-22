import SignUpButton from "@/app/(components)/SignUpButton";
import Image from "next/image";
import React from "react";
import { FiPlayCircle } from "react-icons/fi";

const infoList = [
  {
    iconPath: "/img/iconlist1.png",
    iconHeading: "Nibh viverra",
    iconDesc:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
  },
  {
    iconPath: "/img/iconlist2.png",
    iconHeading: "Cursus amet",
    iconDesc:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
  },
  {
    iconPath: "/img/iconlist3.png",
    iconHeading: "Ipsum fermentum",
    iconDesc:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
  },
];

const Hero = () => {
  return (
    <div>
      <div
        className="bg-third absolute inset-0 top-24 z-0 hidden md:block"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%);" }}
      ></div>
      <div className="relative z-10 mt-20 p-4 md:p-10 md:px-20">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="left w-full md:w-8/12">
            <h1 className="text-center text-4xl font-extrabold text-black md:text-start md:text-7xl">
              Collectible Sneakers
            </h1>
            <p className="text-center text-lg md:text-start md:text-xl">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className="my-5 flex flex-row items-center justify-center gap-4 md:items-center md:justify-start">
              <SignUpButton href="#" />
              <a href="#" className="flex items-center gap-1">
                <FiPlayCircle className="text-secondary text-xl" />
                <p className="text-secondary">Watch Demo</p>
              </a>
            </div>
          </div>

          <div className="right flex w-full items-center justify-center md:w-4/12">
            <div className="relative h-[250px] w-[250px] md:h-[400px] md:w-[400px]">
              <div className="bg-squareYellow absolute left-6 top-6 h-[200px] w-[200px] rounded-lg md:left-12 md:top-12 md:h-[300px] md:w-[300px]"></div>

              <div className="absolute left-0 top-0">
                <Image
                  src="/img/Shoe.png"
                  alt="Shoe"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-8 md:mt-20 md:flex-row md:justify-between">
          {infoList.map((x) => (
            <div
              key={x.iconDesc}
              className="flex flex-col items-center pr-0 text-center md:items-start md:pr-4 md:text-left"
            >
              <Image src={x.iconPath} width={100} height={100} alt="icon" />
              <h6 className="text-xl font-medium">{x.iconHeading}</h6>
              <p className="mt-4 text-lg">{x.iconDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
