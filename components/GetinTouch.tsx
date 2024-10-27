import {
  faEnvelope,
  faLocationDot,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const GetinTouch = () => {
  return (
    <>
      <section className="max-w-7xl bg-black">
        <div className=" p-10 ">
          <div className="text-center space-y-[0.5rem]">
            <h1 className="text-sunshine text-[1.5rem] font-semibold">
              Get in Touch
            </h1>
            <p className="text-white  text-[1rem]">{`We'd Love to Hear from You`}</p>
          </div>
          <div className="lg:flex lg:flex-row flex-col items-center justify-between lg:p-[5rem] p-[2rem] ">
            <div className="left">
              <div className="text-white lg:space-y-[2.5rem] space-y-[1.5rem] ">
                <div className="lg:text-left text-center">
                  <p className="text-white  lg:text-[1.25rem] text-[1rem] lg:w-[27rem] w-auto">
                    {` Have questions or feedback? Contact us today and we'll be
                    happy to assist.`}
                  </p>
                </div>
                <div className="flex gap-3 items-center lg:pl-0 md:pl-[16rem] sm:pl-32  ">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    width={30}
                    height={30}
                  />
                  <p className="lg:text-[1.125rem] text-[0.9rem]">
                    Address: 123 Main St, Anytown, USA
                  </p>
                </div>
                <div className="flex gap-3 items-center lg:pl-0 md:pl-[16rem] sm:pl-32">
                  <FontAwesomeIcon
                    icon={faMobileScreen}
                    width={30}
                    height={30}
                  />
                  <p className="lg:text-[1.125rem] text-[0.9rem]">
                    Phone: 555-555-5555
                  </p>
                </div>
                <div className="flex gap-3 items-center lg:pl-0 md:pl-[16rem] sm:pl-32">
                  <FontAwesomeIcon icon={faEnvelope} width={30} height={30} />
                  <p className="lg:text-[1.125rem] text-[0.9rem]">
                    Email: mailto:info@riseup.com
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="lg:w-[23rem] lg:h-[23rem] shadow-custom lg:mx-0 mx-auto lg:mt-0 mt-16">
                <Image
                  src="/images/contact.jpg"
                  width={500}
                  height={500}
                  alt="contact-img"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetinTouch;
