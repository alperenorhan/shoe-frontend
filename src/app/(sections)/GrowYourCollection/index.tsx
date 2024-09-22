import Image from "next/image";
import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";

const listItems = [
  {
    icon: <AiFillAliwangwang />,
    text: "Bibendum tellus",
  },
  {
    icon: <AiFillAliwangwang />,
    text: "Cras eget",
  },
  {
    icon: <AiFillAliwangwang />,
    text: "Dolor pharetra",
  },
  {
    icon: <AiFillAliwangwang />,
    text: "Amet, fringilla",
  },
  {
    icon: <AiFillAliwangwang />,
    text: "Amet nibh",
  },
  {
    icon: <AiFillAliwangwang />,
    text: "Sed velit",
  },
];

const GrowYourCollection = () => {
  return (
    <div className="bg-[url('/img/bg.png')] bg-cover bg-bottom bg-no-repeat p-20">
      <h1 className="mb-8 text-5xl font-extrabold text-black">
        Grow your collection
      </h1>
      <p className="text-[#0F172A]">
        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet
        dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit
        rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin
        neque placerat at bibendum quam tellus.
      </p>
      <div className="mt-10 flex flex-col justify-center md:flex-row md:justify-start">
        <div className="w-3/12">
          <ul className="mt-7 flex flex-row md:flex-col">
            {listItems.map((x) => (
              <li
                className="my-5 flex items-center gap-2 text-xl text-[#0F172A]"
                key={x.text}
              >
                {x.icon}
                {x.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-9/12">
          <Image
            src="/img/Desktop2.png"
            alt="Desktop"
            width={1200}
            height={1200}
          />
        </div>
      </div>
    </div>
  );
};

export default GrowYourCollection;
