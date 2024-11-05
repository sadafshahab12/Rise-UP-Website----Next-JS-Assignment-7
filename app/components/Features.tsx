import React from "react";
import FeatureCard from "./FeatureCard";
import { CarouselDemo } from "../components/CarouselDemo";

const Features = () => {
  return (
    <>
      <section className="max-w-7xl p-12 bg-black">
        <div>
          <div>
            <div className="space-y-[1.25rem]">
              <h1 className="md:text-[2rem] sm:text-[1.5rem] text-[1rem] font-semibold text-center text-white">
                Empowering Tools for Success
              </h1>
              <p className="md:text-[1rem] sm:text-[0.8rem] text-[0.7rem] text-center text-white">
                Discover how Rise Up can help you achieve your goals
              </p>
            </div>
          </div>
          <div className="Card">
            <div className="md:hidden text-center flex  justify-center mt-8 px-2">
              <CarouselDemo />
            </div>
            <div className="lg:flex gap-[1.6rem] pt-10 md:grid grid-cols-2 jus hidden">
              <FeatureCard
                src="/images/sara.webp"
                quotep1="Fall seven times, stand up eight."
                quotep2="Japanese Proverb"
                cardH1="Inspirational Story of the Month"
                cardp="From adversity to artistic triumph, Sarah's determination shines.Her thriving business inspires others to pursue their passions."
                cardButton="Read Sarah's Full Story"
              />
              <FeatureCard
                src="/images/calm.jpg"
                quotep1="The mind is everything; what you think, you become."
                cardH1="5 Mindfulness Techniques to Boost Productivity"
                cardp="Enhance productivity with mindfulness techniques like deep breathing and gratitude. Transform your workday and reduce stress."
                cardButton="Read the Full Article"
              />
              <FeatureCard
                src="/images/upcoming.jpg"
                quotep1="Saturday, March 21st
                          9:00 AM - 5:00 PM
                        Downtown Convention Center"
                cardH1="Rise Up: Empowerment Conference"
                cardp="Join us for a day of inspiration and connection. Hear from experts, network with peers, and leave empowered to achieve your goals."
                cardButton="Register Now"
              />
              <div className="lg:hidden md:block hidden">
              <FeatureCard 
                src="/images/calm.jpg"
                quotep1="The mind is everything; what you think, you become."
                cardH1="5 Mindfulness Techniques to Boost Productivity"
                cardp="Enhance productivity with mindfulness techniques like deep breathing and gratitude. Transform your workday and reduce stress."
                cardButton="Read the Full Article"
              />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
