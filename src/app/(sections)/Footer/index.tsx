import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const footerItems = [
  {
    heading: "Product",
    items: ["Pricing", "Overview", "Browse", "Accesssibility", "Five"],
  },
  {
    heading: "Solutions",
    items: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"],
  },
  {
    heading: "Support",
    items: [
      "Contact Us",
      "Developers",
      "Documentation",
      "Integrations",
      "Reports",
    ],
  },
  {
    heading: "Get The App",
    items: ["img1", "img2", "Follow Us", "icons"],
  },
];

const socialLinks = [
  {
    icon: <FaYoutube />,
    href: "#",
  },
  {
    icon: <FaFacebook />,
    href: "#",
  },
  {
    icon: <FaTwitter />,
    href: "#",
  },
  {
    icon: <FaInstagram />,
    href: "#",
  },
  {
    icon: <FaLinkedin />,
    href: "#",
  },
];

const endItems = [
  {
    text: "Terms",
    href: "#",
  },
  {
    text: "Privacy",
    href: "#",
  },
  {
    text: "Contact",
    href: "#",
  },
  {
    icon: <TbWorld />,
    text: "EN",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#0F172A] p-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {footerItems.map((footerItem) => (
          <div key={footerItem.heading}>
            <h3 className="mb-4 text-center font-bold text-white md:text-start">
              {footerItem.heading}
            </h3>
            {footerItem.heading === "Get The App" ? (
              <div className="space-y-4">
                <div className="flex flex-col items-center space-y-2 md:items-start md:justify-start">
                  <Image
                    src="/img/appstore.png"
                    alt="App Store"
                    width={128}
                    height={128}
                  />
                  <Image
                    src="/img/googleplay.png"
                    alt="Google Play"
                    width={128}
                    height={128}
                  />
                </div>

                <div className="text-center font-bold text-white md:text-start">
                  Follow Us
                </div>

                <div className="flex items-center justify-center space-x-4 md:justify-start">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      className="text-xl text-white"
                      href={link.href}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {footerItem.items.map((item, index) => (
                  <li
                    key={index}
                    className="text-center text-white md:text-start"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <hr className="my-8 w-full border-gray-300" />
      <div className="flex flex-col items-center justify-between md:flex-row">
        <span className="mb-5 text-white md:mb-0">
          Collers @ 2023. All rights reserved
        </span>
        <div className="flex items-center gap-10 md:gap-2">
          {endItems.map((x) => (
            <a className="flex items-center text-white" href={x.href}>
              {x.icon ? x.icon : ""} {x.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
