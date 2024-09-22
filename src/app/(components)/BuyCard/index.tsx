import Image from "next/image";
import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

interface BuyCardProps {
  imagePath: string;
  cardTitle: string;
  cardDesc: string;
  buttonHref: string;
}

const BuyCard: React.FC<BuyCardProps> = ({
  imagePath,
  cardTitle,
  cardDesc,
  buttonHref,
}) => {
  return (
    <div className="bg-cardBg mb-5 max-w-lg rounded-xl shadow-[0_2px_20px_rgba(255,255,255,0.3)] md:mb-0">
      <Image
        src={imagePath}
        alt="card-image"
        width={500}
        height={500}
        className="w-full rounded-t-xl"
      />
      <div className="p-8">
        <h6 className="pb-4 text-2xl font-bold text-white">{cardTitle}</h6>
        <p className="pb-4 text-lg text-white">{cardDesc}</p>
        <a
          href={buttonHref}
          className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-white"
        >
          <RiShoppingCartLine /> Buy Now
        </a>
      </div>
    </div>
  );
};

export default BuyCard;
