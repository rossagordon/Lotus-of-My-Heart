import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  // Navbar Toggle
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#f9f4ef] text-[#020826]">
      <div>
        <h1 className="font-bold">Lotus of My Heart</h1>
      </div>

      {/* Navbar */}
      <ul className="hidden md:flex">
        <li className="px-4 hover:underline">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="px-4 hover:underline">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="px-4 hover:underline">
          <Link to="booking" smooth={true} duration={500}>
            Booking
          </Link>
        </li>
        <li className="px-4 hover:underline">
          <a href="https://lotusworld.bigcartel.com/" target="_blank">
            Store
          </a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#f9f4ef] text-[#020826] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:underline">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:underline">
          <Link to="booking" smooth={true} duration={500} onClick={handleClick}>
            Booking
          </Link>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl hover:underline">
          <a href="https://lotusworld.bigcartel.com/" target="_blank">
            Store
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;