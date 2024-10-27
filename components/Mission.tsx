import Image from "next/image";
import React from "react";
import TeamCard from "@/components/TeamCard";
const Mission = () => {
  return (
    <>
      <section className="md:p-10 p-5">
        <div>
          <div className="space-y-4">
            <h1 className="lg:text-[1.5rem] text-[1.25rem] font-semibold text-center">
              Our Mission
            </h1>
            <p className="lg:text-[1rem] text-[0.8rem]  text-wrap text-center lg:w-[40rem] w-auto mx-auto leading-[1.6rem]">
              Rise Up aims to empower individuals to overcome obstacles, achieve
              success, and live a fulfilling life. Our community provides
              resources, support, and inspiration to help you unlock your
              potential.
            </p>
          </div>
          <div className="lg:p-12 p-6">
            <div className="grid lg:grid-cols-2 grid-cols-1  place-items-center">
              <div className="lg:w-[40rem]  lg:h-[25rem]  ">
                <Image
                  src="/images/team photo.jpg"
                  alt="team-img"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:space-y-[3rem] space-y-[2rem] lg:justify-self-end justify-self-center">
                <h1 className="lg:text-[1.5rem] text-[1.25rem] lg:pt-0 pt-5  font-semibold lg:text-right text-center">
                  Our Story
                </h1>
                <p className="lg:text-[1.125rem] sm:text-[1rem] text-[0.8rem] lg:text-right text-center lg:w-[21rem] w-auto font-light md:leading-[2.2rem] leading-[1.5rem]">
                  At Rise Up, we believe that everyone deserves to live a life
                  of purpose and fulfillment. Our mission is to provide the
                  tools, resources, and support necessary to empower individuals
                  to achieve their goals.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="sm:text-[1.5rem] text-[1rem] font-semibold">Meet the Team:</h1>
          </div>
          <div>
            <div>
              <TeamCard
                src="/images/sara.webp"
                name="Emily Chen"
                designation="Founder & CEO"
                intro="Emily Chen is a passionate entrepreneur and life coach with over 10
            years of experience in personal development. She founded Rise Up to
            provide accessible resources and support for individuals seeking
            growth."
              />
            </div>
            <div>
              <TeamCard
                src="/images/team2.jpeg"
                name="Ryan Thompson"
                designation="Content Manager"
                intro="Ryan Thompson is a seasoned writer and editor specializing in self-improvement content. He curates valuable resources and inspiring stories for the Rise Up community."
              />
            </div>
            <div>
              <TeamCard
                src="/images/sara.webp"
                name="Ava Morales"
                designation="Community Manager"
                intro="Ava Morales is a dedicated community builder with expertise in fostering meaningful connections. She ensures the Rise Up community remains supportive and inclusive."
              />
            </div>
            <div>
              <TeamCard
                src="/images/team 4.jpg"
                name="Ethan Lee"
                designation="Development Lead"
                intro="Ethan Lee is a skilled developer with extensive experience in creating innovative digital solutions. He leads the development of Rise Up's tools and resources."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
