import Image from "next/image";
import React from "react";
import { SiLightning } from "react-icons/si";

const TestimonialCard = () => {
  return (
    <div className="translate-y-32 transform overflow-hidden rounded-[20px] bg-white px-8 py-12">
      <div className="user mb-2 flex items-center gap-2">
        <SiLightning className="select-none" />
        <span className="select-none">Zoomerr</span>
      </div>
      <span className="select-none">
        Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus,
        viverra turpis lorem. Varius a turpis urna id porttitor.
      </span>
      <div className="user2 mt-4 flex items-center gap-2">
        <Image
          className="select-none rounded-full"
          src="/img/testimonial/Thumb-1.png"
          alt="user-thumb"
          width={64}
          height={64}
        />
        <div>
          <h6 className="select-none text-lg text-black">Hellen Jummy</h6>
          <span className="select-none text-[#475569]">Team Lead</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
