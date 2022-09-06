import React from "react";
import Jelena from "../assets/aboutme.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  grid sm:grid-cols-2 md:grid-cols-2 gap-4"
    >
      {/* Left Side */}
      <div className="justify-center items-center mx-auto p-8">
        <p className="text-5xl font-bold pb-8 ">I'm Jelena</p>
        <div>
          <img src={Jelena} className="" alt="Jelena" />
        </div>
      </div>
      <div className="p-4 sm:pt-[115px] ">
        <p className="text-[14px]">
          I tattoo out of a private studio in Richmond, VA. I began my tattoo
          journey in Long Island, NY. Over a 10 year period, I tattooed in NYC,
          Chicago, and St.Louis. During this time, I also traveled throughout
          the US, tattooing at conventions and on guest spots.
        </p>
        <p className="text-[14px] pt-4">
          I slowed down in my tattoo related travels a few years back, but still
          very much enjoy traveling recreationally. My favorite places I've
          traveled to are Costa Rica, Guatemala and Thailand. I can talk about
          traveling all day long!
        </p>
        <p className="text-[14px] pt-4">
        Aside from tattooing, my interests include Yoga, studying yoga philosophy, reading, and long walks with my dog.
        </p>
      </div>
    </div>
  );
};

export default About;

// import React from "react";
// import Jelena from "../assets/aboutme.png";

// const About = () => {
//   return (
//     <div
//       name="about"
//       className="w-full h-full grid sm:grid-cols-2 md:grid-cols-2 gap-4"
//     >
//       <div className="justify-center items-center mx-auto p-8">
//         <p className="text-5xl font-bold pb-8">I'm Jelena</p>
//         <p className="text-xl text-[#716040]">
//           I tattoo out of a private studio in Richmond, VA. I began my tattoo
//           journey in Long Island, NY. Over a 10 year period, I tattooed in NYC,
//           Chicago, and St.Louis. During this time, I also traveled throughout
//           the US, tattooing at conventions and on guest spots.
//         </p>
//         <p className="text-xl text-[#716040] pt-4">
//           I slowed down in my tattoo related travels a few years back, but still
//           very much enjoy traveling recreationally. My favorite places I've
//           traveled to are Costa Rica, Guatemala and Thailand. I can talk about
//           traveling all day long!
//         </p>
//       </div>
//       <div>
//         <img src={Jelena} className="mx-auto p-4" alt="" />
//       </div>
//     </div>
//   );
// };

// export default About;
