import React from "react";
import { Link } from "react-scroll";
import { BsArrowDown } from "react-icons/bs";
import Tattoos from "../assets/Tattoos.png";

const Hero = () => {
  return (
    <div name="home" className="w-full h-[screen] bg-[#ffffff] text-[#272343]">
      {/* Container */}
      <div className="max-w-[1000px] h-full items-center text-center mx-auto py-[175px]">
        <h1 className="text-[#020826] text-4xl sm:text-7xl font-bold uppercase p-4">
          Lotus of my Heart
        </h1>
        <h2 className="font-bold text-2xl sm:text-5xl text-[#020826]">
          Tattoos With Intention
        </h2>
        <div className="display-flex text-center">
          <button className="text-black font-bold bg-[#dabfff] border-2 rounded-full border-black group px-3 py-3 mt-8 content-center hover:scale-110 duration-500">
            <Link to="booking" smooth={true} duration={500}>
              Booking
            </Link>
          </button>
        </div>

        {/* Cards */}

        <div className="max-w-[1000px] h-full mx-auto pt-[30px] flex flex-col justify-center w-full ">
          {/* Cards */}
          <div className="w-full mx-auto">
            <img
              src={Tattoos}
              className="rounded-lg shadow-lg mx-auto p-4"
              alt="Tattoos"
            />

            {/* Card 1 */}
            {/* <div
              style={{ backgroundImage: `url(${Scorpion})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div> */}

            {/* Card 2 */}
            {/* <div
              style={{ backgroundImage: `url(${Dragon})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div> */}

            {/* Card 3 */}
            {/* <div
              style={{ backgroundImage: `url(${Sun})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div> */}

            {/* Card 4 */}
            {/* <div
              style={{ backgroundImage: `url(${Rose})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div> */}

            {/* Card 5 */}
            {/* <div
              style={{ backgroundImage: `url(${Snake})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div> */}

            {/* Card 6 */}
            {/* <div
              style={{ backgroundImage: `url(${Portal})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;