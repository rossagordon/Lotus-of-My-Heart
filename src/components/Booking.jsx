import React from "react";

const Booking = () => {
  return (
    <div name="booking" className="bg-[#ffffff] text-[#272343] w-full">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col w-full pb-[-50px] ">
        <div className="justify-center p-2 mt-[25px] ">
          <p className="text-5xl text-center mt-[40px]">Booking</p>
          <p className="text-[14px] p-3 pt-5">
            Thank you so much for your interest in booking. Tattooing is an
            ancient and healing practice, and I approach it with the utmost love
            and respect. I kindly ask that you do as well.
          </p>
          <p className="text-[14px] p-3">
            Whether you are looking to get a piece just because you love the
            image, or looking to get a design that serves as a symbol of healing
            and empowerment, the practice of tattooing deserves our respect and
            admiration.
          </p>
          <p className="text-[14px] p-3">
            {" "}
            I would love to tattoo you! However, I am just one person, so my
            schedule can be limited at times. I will respond to all requests,
            but please do not feel discouraged if I cannot take on your request.
            I priorotize booking pieces from my own pre-drawn flash, or
            traditional pieces that are similar in style and subject.
          </p>
          <p className="text-[14px] p-3">
            I truly feel that there is a right tattooer for everyone. If I
            feel as though I am not the right fit for the tattoo you are looking
            to get, I will be able to recommend another local tattooer who would
            be.
          </p>
          <p className="text-[14px] p-3">
            Tattooing goes beyond a give-and-take experience. It is a
            collaborative effort at creation, and I am looking forward to
            creating with you.
          </p>
          <div className="p-8 text-center">
            <button className="bg-[#dabfff] border-2 rounded-full border-black group px-6 py-3 mt-8 content-center hover:scale-110 duration-500">
              <a href="mailto:tattoosandadventures@gmail.com">
                Book Appointment
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;