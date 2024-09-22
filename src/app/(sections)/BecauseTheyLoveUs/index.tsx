"use client";
import TestimonialCard from "@/app/(components)/TestimonialCard";
import React, { useState } from "react";
import {
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
} from "react-icons/io5";

const BecauseTheyLoveUs = () => {
  const testimonials = [1, 2, 3, 4, 5, 6, 7, 8];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4;

  const handleNext = () => {
    if (currentIndex < testimonials.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="py-20">
      <div className="flex items-center justify-between px-20">
        <h2 className="mb-10 text-5xl font-extrabold">Because they love us</h2>
        <div className="flex items-center gap-2 text-4xl">
          <IoArrowBackCircleOutline
            onClick={handlePrev}
            className={`cursor-pointer ${currentIndex === 0 ? "cursor-not-allowed opacity-50" : ""}`}
          />
          <IoArrowForwardCircleOutline
            onClick={handleNext}
            className={`cursor-pointer ${currentIndex >= testimonials.length - itemsToShow ? "cursor-not-allowed opacity-50" : ""}`}
          />
        </div>
      </div>
      <div className="relative px-20">
        <div className="absolute inset-0 z-0 mx-0 mt-10 min-h-[15vw] bg-[#FDE68A] md:mx-20"></div>
        <div
          className="relative z-10 mx-0 flex gap-2 transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial} className="w-full flex-shrink-0 md:w-1/4">
              <TestimonialCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BecauseTheyLoveUs;
