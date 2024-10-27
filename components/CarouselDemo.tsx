"use client";
import * as React from "react";
import slider from "@/app/slider.json";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-sm" plugins={[Autoplay({ delay: 2000 })]}>
      <CarouselContent>
        {slider.map((slider, index) => (
          <CarouselItem key={index}>
            <div className=" bg-papayawhip md:p-5 p-2 rounded-[0.9rem]">
              <Card className=" bg-transparent border-none shadow-none ">
                <div className="image flex justify-center items-center gap-3 pt-4">
                  <div className="sm:w-[8rem] w-[5rem] sm:h-[8rem] h-[5rem] rounded-full">
                    <Image
                      src={slider.src}
                      alt="featureimg"
                      width={500}
                      height={500}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="sm:w-[8.8rem] w-[7rem] sm:h-[6rem] h-[5rem] rounded-[0.5rem] shadow-downshadow ">
                    <div className="bg-white sm:space-y-4 space-y-2 p-2 rounded-[0.5rem] w-full h-full  ">
                      <p className="sm:text-[0.7rem] text-[0.6rem] text-[#5F5A5A]">
                        {slider.quotep1}
                      </p>
                      <p className="sm:text-[0.7rem] text-[0.6rem] font-semibold">
                        {slider.quotep2}
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="flex  items-center justify-center ">
                  <span >
                    <div className="space-y-[1.3rem] pt-[0.6rem] text-center">
                      <h1 className="sm:text-[1rem]  text-[0.8rem] font-semibold ">
                        {slider.cardH1}
                      </h1>
                      <p className="sm:text-[0.65rem] text-[0.5rem]">{slider.cardp}</p>
                      <button className="text-[0.6rem] bg-purple py-3 px-5 text-white">
                        {slider.cardButton}
                      </button>
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
  );
}
