import Image from "next/image";
import React from "react";

interface TFeatureCard {
  src: string;
  quotep1: string;
  quotep2?: string | null;
  cardH1: string;
  cardp: string;
  cardButton: string;
}
const FeatureCard = ({
  src,
  quotep1,
  quotep2,
  cardH1,
  cardp,
  cardButton,
}: TFeatureCard) => {
  return (
    <>
      <div className="bg-papayawhip p-7 rounded-[0.9rem]">
        <div className="image flex justify-center items-center gap-3">
          <div className="w-[9.2rem] h-[9.2rem] rounded-full">
            <Image
              src={src}
              alt="featureimg"
              width={500}
              height={500}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="w-[8.8rem] h-[6rem] rounded-[0.5rem] shadow-downshadow ">
            <div className="bg-white space-y-4 p-2 rounded-[0.5rem] w-full h-full  ">
              <p className="text-[0.8rem] text-[#5F5A5A]">{quotep1}</p>
              <p className="text-[0.8rem] font-semibold">{quotep2}</p>
            </div>
          </div>
        </div>
        <div className="space-y-[1.3rem] pt-[0.6rem]">
          <h1 className="text-[1.25rem] font-semibold">{cardH1}</h1>
          <p className="text-[0.75rem] text-wrap">{cardp}</p>
          <button className="text-sm bg-purple py-3 px-5 text-white">
            {cardButton}
          </button>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
