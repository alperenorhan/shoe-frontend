import Image from "next/image";
import React from "react";

const ShoesCollected = () => {
  return (
    <div className="relative flex min-h-[40vw] items-center justify-center bg-[#78350F] p-28 md:p-20">
      <Image
        className="absolute z-0"
        src="/img/chart.png"
        width={1000}
        height={1000}
        alt="chart"
      />
      <div className="z-10">
        <h1 className="text-center text-8xl font-extrabold text-white">
          11,658,457
        </h1>
        <h2 className="text-center text-5xl font-extrabold text-white">
          Shoes Collected
        </h2>
      </div>
    </div>
  );
};

export default ShoesCollected;
