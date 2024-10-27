import React from "react";
import stories from "@/app/stories.json";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SuccessStories = () => {
  return (
    <>
      <section>
        <div className="max-w-7xl ">
          <div className="p-8">
            <div>
              <h1 className="md:text-[1.5rem] text-[1rem] font-semibold text-center pb-[1.3rem]">
                Success Stories
              </h1>
              <div className="text-center ">
                <p className="md:text-[1rem] text-[0.8rem] py-2 px-5 bg-purple rounded-[5rem] mx-auto text-center text-white inline-block">
                  {` Don't just take our word for it!`}
                </p>
              </div>
            </div>
            <div className="md:py-[3.25rem] py-[1.5rem] ">
              <p className="lg:text-[1.5rem] text-[1rem] italic lg:text-left text-center ">
                {`Here's what our community members have to say:`}
              </p>
            </div>
          </div>
          <div className="bg-[#D9D9D9] sm:grid md:grid-cols-2 grid-cols-1 py-12 px-14 gap-10 hidden">
            <div className="bg-white border border-[#D7C5C5] rounded-[2.7rem] py-10  px-10 space-y-[2rem] shadow-downshadow">
              <h1 className="text-[1.25rem] text-purple text-center font-semibold">
                -- Rachel Patel --
              </h1>
              <p className={`text-[1.125rem] text-purple text-center px-6 `}>
                Rise Up has been instrumental in helping me achieve my goals.
                The resources and support are invaluable.
              </p>
            </div>
            <div className="bg-white border border-[#D7C5C5] rounded-[2.7rem] py-10  px-10 space-y-[2rem] shadow-downshadow ">
              <h1 className="text-[1.25rem] text-purple text-center font-semibold">
                -- David Kim --
              </h1>
              <p className={`text-[1.125rem] text-purple text-center px-8`}>
                {`I've never felt more connected to a community. Rise Up truly
                cares about its members.`}
              </p>
            </div>
          </div>

          <div className="flex justify-center sm:hidden  ">
            <Carousel className="w-full sm:max-w-xs max-w-[14rem] ">
              <CarouselContent>
                {stories.map((stories, index) => (
                  <CarouselItem key={index}>
                    <div>
                      <Card className="border-none">
                        <CardContent className="flex  items-center justify-center ">
                          <span>
                            <div className="bg-white border border-[#D7C5C5] md:rounded-[2.7rem] rounded-[1.5rem] py-5  px-5 space-y-[2rem] shadow-downshadow">
                              <h1 className="sm:text-[1.1rem] text-[0.9rem] text-purple text-center font-semibold">
                                {stories.personName}
                              </h1>
                              <p
                                className={`sm:text-[1rem] text-[0.7rem]  text-purple text-center px-3 `}
                              >
                                {stories.personStory}
                              </p>
                            </div>
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
