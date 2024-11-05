import Image from "next/image";
import React from "react";

interface TypeTeamCard {
  src: string;
  name: string;
  designation: string;
  intro: string;
}

const TeamCard = ({ src, name, designation, intro }: TypeTeamCard) => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-6 sm:grid-cols-1 xs:flex flex xs:flex-col flex-col justify-items-start items-center lg:gap-0 gap-5 p-5">
        <div className="sm:w-[7rem] w-[5rem] sm:h-[7rem] h-[5rem] rounded-full col-auto">
          <Image
            src={src}
            alt="team-img"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="lg:col-span-1 col-auto">
          <div className="md:text-left text-center">
            <h1 className="text-[1rem] font-semibold">{name}</h1>
            <p className={`text-[0.75rem] `}>{designation}</p>
          </div>
        </div>
        <div className="col-span-4 bg-gradient-to-r  text-wrap  from-[#FFE4A3] to-[#AB68FF]">
          <p className={`text-[0.75rem] leading-[1.25rem] p-4 md:text-left text-center `}>{intro}</p>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
