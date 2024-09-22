"use client";
import SignUpButton from "@/app/(components)/SignUpButton";
import React, { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const navItems = [
  {
    text: "Products",
    href: "#",
  },
  {
    text: "Solutions",
    href: "#",
  },
  {
    text: "Pricing",
    href: "#",
  },
  {
    text: "Resources",
    href: "#",
  },
  {
    text: "Log In",
    href: "#",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="z-10 flex items-center justify-between bg-transparent px-6 py-5 md:px-20">
        <div className="heading">
          <h1 className="text-secondary text-3xl font-bold">Collers</h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary focus:outline-none"
          >
            {isOpen ? " " : <RxHamburgerMenu className="text-4xl" />}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-0 h-screen w-full items-center justify-end bg-transparent md:static md:flex md:h-auto`}
        >
          <div className="flex items-center justify-end p-5 md:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="text-secondary focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <ul className="mt-10 flex flex-col items-center gap-6 md:mr-5 md:mt-0 md:flex-row">
            {navItems.map((x) => (
              <li key={x.text} className="text-secondary list-none">
                {x.text}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center md:mt-0">
            <SignUpButton href="#" />
          </div>
        </div>
      </nav>

      <div
        className={`transition-all duration-300 ${isOpen ? "mt-96" : "mt-0"}`}
      ></div>
    </>
  );
}

export default Navbar;
