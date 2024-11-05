import HeroImg from "../components/HeroImg";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="max-w-7xl bg-purple ">
        <div className="hero-section grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center  md:p-[5rem] p-[3rem]">
          <div className="left lg:text-left text-center">
            <div className="md:space-y-12 sm:space-y-8 space-y-6 lg:w-[33rem] w-auto ">
              <h1 className="md:text-5xl sm:text-[1.5rem] xs:text-[1.2rem] text-[1.1rem]     text-wrap font-semibold text-white">Rise Up and Achieve Your Goals</h1>
              <p className="md:text-lg sm:text-[0.9rem]  text-[0.7rem] font-normal text-white text-wrap lg:w-[30rem] w-auto">
                Empowering individuals to rise above limitations, achieve goals,
                and connect with a supportive community
              </p>
              <div className="right lg:hidden block ">
            
            <HeroImg/>
         
          </div>
              <button className="md:text-lg sm:text-[1rem] text-[0.7rem] bg-sunshine py-2 px-5 font-semibold text-purple">Start Your Journey Today!</button>
            </div>
          </div>
          <div className="right lg:block hidden ">
            
            <HeroImg/>
         
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
