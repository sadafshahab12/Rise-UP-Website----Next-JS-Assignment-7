import Image from "next/image";
import React from "react";


interface TypePartnerCard {
  src: string;
  heading: string;
  description: string;
}
const PartnerCard = ({ src, heading, description }: TypePartnerCard) => {
  return (
    <div className="bg-none sm:w-[22rem] relative">
      <div className="lg:w-[9rem] w-[7rem] lg:h-[9rem] h-[7rem] rounded-full absolute md:top-20 top-12 lg:left-0 md:left-10 left-5 sm:block hidden ">
        <Image
          src={src}
          alt="partner-img"
          width={500}
          height={500}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
 
      <div className="bg-sunshine md:rounded-[2.3rem] rounded-[1.5rem] md:w-[17rem] w-full  lg:h-[18.75rem] md:h-[16rem] h-[14rem]   justify-self-end sm:py-0 py-5">
      <div className=" w-[5rem]  h-[5rem] mx-auto  rounded-full sm:hidden block">
        <Image
          src={src}
          alt="partner-img"
          width={500}
          height={500}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
        <div className=" grid grid-cols-1 justify-self-end lg:p-10 sm:p-7 p-4 ">
          
          <div className="sm:text-right text-center sm:space-y-[1.25rem] space-y-[0.5rem]">
            <h1 className="sm:text-[1.4rem] text-[1rem] font-semibold ">{heading}</h1>
            <p
              className={`sm:text-[1rem] text-[0.7rem] md:w-[10rem] w-[12rem] text-wrap sm:leading-[1.6rem] leading-[1rem]  `}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;
