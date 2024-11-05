import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="text-white bg-purple  lg:p-10 p-5">
          <div className="lg:flex md:flex-row  md:flex-wrap flex-col justify-center gap-10 ">
            <div className="lg:text-left text-center">
              <div className="md:space-y-[2rem]  space-y-[1rem]">
                <h1 className="lg:text-[2rem] text-[1.5rem] font-black text-[#FFC436]">
                  Rise <span className="text-white">Up</span>
                </h1>
                <div className="text-sunshine lg:text-[1rem] text-[0.8rem] space-y-[0.6rem]">
                  <p>123 Main St, Anytown, USA 12345</p>
                  <p>Phone: 555-555-5555</p>
                  <p>Email: mailto:info@riseup.com</p>
                </div>
              </div>
              <div className="space-y-[1.6rem]">
                <div className="lg:pt-[3rem] pt-[1.5rem]">
                  <h1 className="lg:text-[1.5rem] text-[1rem] font-semibold text-[#FFC436]">
                    Connect with us
                  </h1>
                </div>
                <div className="flex lg:gap-4 gap-8 items-center lg:justify-start justify-center">
                  <FontAwesomeIcon icon={faFacebook} width={30} height={30} />
                  <FontAwesomeIcon icon={faLinkedin} width={30} height={30} />
                  <FontAwesomeIcon icon={faTwitter} width={30} height={30} />
                  <FontAwesomeIcon icon={faInstagram} width={30} height={30} />
                </div>
              </div>
              <div className="text-sunshine lg:text-[1.3rem] text-[1.1rem] font-semibold pt-[3rem] lg:space-y-[1rem] space-y-[0.5rem]">
                <p>Verified Non-Profit Organization</p>
                <p>BBB Accredited Charity</p>
              </div>
            </div>
            <div className="space-y-[1.4rem]  md:text-left text-center lg:pt-0 pt-8">
              <h1 className="lg:text-[1.5rem] text-[1.2rem] font-semibold">Explore Rise Up</h1>
              <div className="lg:text-[1rem] text-[0.8rem] font-normal lg:space-y-[1rem] space-y-[0.75rem]">
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>FAQ</p>
              </div>
            </div>
            <div className="space-y-[1.4rem] lg:pt-0 pt-10  md:text-left text-center">
              <h1 className="lg:text-[1.5rem] text-[1.2rem] font-semibold ">Resources</h1>
              <div className="lg:text-[1rem] text-[0.8rem] font-normal lg:space-y-[1rem] space-y-[0.75rem]">
                <p>Inspirational Stories</p>
                <p>Quote Library</p>
                <p>Motivational Videos</p>
                <p>E-books and Guides</p>
                <p>Webinars</p>
                <p>Blog</p>
              </div>
            </div>
            <div>
              <div className="space-y-[1.4rem] lg:pt-0 pt-10 md:text-left text-center">
                <h1 className="lg:text-[1.5rem] text-[1.2rem] font-semibold">
                  Community & Growth
                </h1>
                <div className="lg:text-[1rem] text-[0.8rem] font-normal lg:space-y-[1rem] space-y-[0.75rem]">
                  <p>Community Forum</p>
                  <p>Podcast</p>
                  <p>Events</p>
                  <p>Goal-Setting Tools</p>
                  <p>Productivity Tips</p>
                  <p>Mindfulness and Self-Care</p>
                </div>
              </div>
              <div className="space-y-[1rem]">
                <h1 className="lg:text-[2rem] text-[1.5rem] font-semibold pt-[2rem] lg:text-left text-center">
                  We Accept:
                </h1>
                <div className="md:w-[20rem] md:h-[7.5rem]">
                  <Image
                    src="/images/paypal-credit-card.png"
                    width={500}
                    height={500}
                    alt="payment-method"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-warmyello text-center p-5">
          <p className="lg:text-[1.5rem] text-[1rem] font-semibold">
            2024 Rise Up. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
