import React from "react";
import PartnerCard from "../components/PartnerCard";

const Partners = () => {
  return (
    <>
      <section className="p-5 bg-purple">
        <div className="space-y-[0.6rem] p-8 sm:text-left text-center">
          <h1 className="lg:text-[1.5rem] text-[1.25rem] font-semibold text-white">
            Partners
          </h1>
          <p className="md:text-[1rem] text-[0.9rem] text-white text-wrap">
            {`We're proud to partner with organizations that share our vision of empowering individuals and enhancing lives.`}
          </p>
        </div>
        <div>
          <div className="px-8">
            <h1 className="lg:text-[1.25rem] text-[1rem] font-semibold text-white">
              {" "}
              Our Partners Include:
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center items-center lg:py-[3.5rem] py-[2.5rem]  lg:px-[5rem] px-[1.5rem] lg:gap-[8rem] md:gap-[3rem] gap-[2rem]">
            <div> 
              <PartnerCard
                src="/images/Mind ful mind 3.jpg"
                heading="Mindful Minds"
                description="A leading mindfulness and wellness organization providing expert
                            guidance and resources."
              />
            </div>
            <div>
              <PartnerCard
                src="/images/grow hub2.webp"
                heading="GrowHub"
                description="A platform offering personalized growth plans and coaching to empower individuals in their development journey."
              />
            </div>
            <div>
              <PartnerCard
                src="/images/empowering.png"
                heading="Mindful Minds"
                description="A non-profit dedicated to enhancing education and fostering economic empowerment in communities."
              />
            </div>
            <div className="lg:hidden md:block hidden">
              <PartnerCard
                src="/images/empowering.png"
                heading="Mindful Minds"
                description="A non-profit dedicated to enhancing education and fostering economic empowerment in communities."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
