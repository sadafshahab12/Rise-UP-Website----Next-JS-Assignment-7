import Image from "next/image";
import React from "react";

const JoinMission = () => {
  return (
    <>
      <section className="max-w-7xl lg:p-14 p-7">
        <div>
          <div className="space-y-[0.8rem] text-center">
            <h1 className="sm:text-[1.5rem] text-[1rem] font-semibold">Join Our Mission</h1>
            <p className="sm:text-[1.125rem] text-[0.9rem] md:pb-[4rem] pb-[2rem]">
              Want to be part of our mission to empower individuals and enhance
              lives?
            </p>
          </div>
          <div className="lg:flex lg:justify-start justify-center lg:gap-[5rem] lg:flex-row flex-col gap-0 ">
            <div className="lg:w-[39rem] lg:h-[29rem] mx-auto lg:mx-0">
              <Image
                src="/images/join our.webp"
                width={500}
                height={500}
                alt="join-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[0.1rem] h-[29rem] bg-[#C3B7B7]  lg:block hidden rounded-full"></div>
            <div className="grid grid-rows-1 lg:gap-[3rem] gap-[1.5rem] ">
              <div className="lg:flex lg:mx-0 lg:my-0 block md:my-8 my-5 mx-auto justify-center items-center py-5 px-10 bg-black lg:w-[20rem] w-auto lg:h-[19rem] h-auto rounded-tr-[2rem] rounded-bl-[2rem]">
                <p className="text-white sm:text-[1.25rem] text-[0.9rem]  text-justify tracking-wide  sm:leading-[2.5rem] leading-[2rem]  ">
                  Join our community today and start making a difference in your
                  own life and the lives of others.
                </p>
              </div>
              <div className="h-[0.1rem] bg-[#C3B7B7] rounded-full "></div>
              <div className="text-center  ">
                <button className="text-[1rem] bg-[#D9D9D9] py-3 px-7">
                  Join Our Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinMission;
