import React from "react";
import { BsEnvelopeFill, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const Footer = () => {
  return (
    <div
      name="contact"
      className="w-full h-[270px] bg-[#f9f4ef] text-[#020826] flex justify-center items-center p-4"
    >
      {/* Container */}
      <div className="font-bold inline text-center">
        <p className="text-5xl py-y">Connect</p>
        <div className="flex flex-cols-2 mx-auto py-4">
          {/* Email */}
          <a
            className="text-5xl p-4 hover:text-[#8c7851]"
            href="mailto:tattoosandadventures@gmail.com"
          >
            <BsEnvelopeFill />
          </a>

          {/* Instagram */}
          <a
            className="text-5xl p-4 hover:text-[#8c7851]"
            href="https://www.instagram.com/lotusofmyheart/"
            target="_blank"
          >
            <BsInstagram />
          </a>

          {/* Tiktok */}
          <a
            className="text-5xl p-4 hover:text-[#8c7851]"
            href="https://www.tiktok.com/@jelenawolves"
            target="_blank"
          >
            <FaTiktok />
          </a>

          {/* LinkTree */}
          <a
            className="text-5xl p-4 hover:text-[#8c7851]"
            href="https://linktr.ee/Lotusofmyheart"
            target="_blank"
          >
            <SiLinktree />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;