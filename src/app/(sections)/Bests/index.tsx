import BuyCard from "@/app/(components)/BuyCard";
import SignUpButton from "@/app/(components)/SignUpButton";
import React from "react";

const buyLinks = [
  {
    imagePath: "/img/cards/card1.png",
    cardTitle: "Title",
    cardDesc:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    buttonHref: "#",
  },
  {
    imagePath: "/img/cards/card2.png",
    cardTitle: "Title",
    cardDesc:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    buttonHref: "#",
  },
  {
    imagePath: "/img/cards/card3.png",
    cardTitle: "Title",
    cardDesc:
      "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    buttonHref: "#",
  },
];

const Bests = () => {
  return (
    <div className="z-1 bg-cardBg relative p-20">
      <div className="relative z-10 flex flex-col items-center justify-center md:flex-row md:justify-between">
        <h1 className="mb-3 text-center text-5xl font-extrabold text-white md:mb-0 md:text-start">
          The best of the best
        </h1>
        <SignUpButton href="#" type="secondary" />
      </div>
      <div className="w-100 z-10 mt-20 flex flex-col items-center justify-between md:flex-row">
        {buyLinks.map((x) => (
          <BuyCard
            key={x.cardTitle}
            imagePath={x.imagePath}
            cardTitle={x.cardTitle}
            cardDesc={x.cardDesc}
            buttonHref={x.buttonHref}
          />
        ))}
      </div>
    </div>
  );
};

export default Bests;
