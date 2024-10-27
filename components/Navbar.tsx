"use client"
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "@/components/Dropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="max-w-7xl bg-purple">
        <div className="flex justify-between items-center lg:px-[2.8rem] px-[1.5rem] h-[3.75rem]">
          <div className="logo flex items-center">
            <h1 className="lg:text-[1.5rem] text-[1.25rem] font-black text-[#FFC436]">
              Rise <span className="text-white">Up</span>
            </h1>
            <div className="lg:w-[3.25rem] w-[2.25rem] lg:h-[2rem] h-[1.5rem]">
              <Image
                src="/images/arrow logo.png"
                width={500}
                height={400}
                alt="logo"
                className="w-full h-full"
              />
            </div>
          </div>
          <nav className="md:flex justify-center items-center lg:gap-[6rem] gap-[2rem] font-medium text-white text-[0.8rem] hidden">
            <div className="flex justify-center items-center lg:space-x-[2.6rem] space-x-[2rem]">
              <div>
                <Link href="/">Home </Link>
              </div>
              <div className="flex justify-center items-center space-x-2">
                {/* <Link href="/">Inspire</Link> */}
                <Dropdown
                  navitem="Inspire"
                  dropdown1="Inspirational Stories"
                  dropdown2="Quote Library"
                  dropdown3="Motivational Videos"
                  pageLink="/"
                />
                <FontAwesomeIcon icon={faChevronDown} width={9} height={9} />
              </div>
              <div className="flex justify-center items-center space-x-2">
                <Dropdown
                  navitem="Grow"
                  dropdown1="Goal-Setting Tools"
                  dropdown2="Productivity Tips"
                  dropdown3="Mindfulness and Self-Care"
                  pageLink="/"
                />
                <FontAwesomeIcon icon={faChevronDown} width={9} height={9} />
              </div>
              <div className="flex justify-center items-center space-x-2">
                <Dropdown
                  navitem="Connect"
                  dropdown1="Community Forum"
                  dropdown2="Podcast"
                  dropdown3="Events"
                  pageLink="/"
                />
                <FontAwesomeIcon icon={faChevronDown} width={9} height={9} />
              </div>
              <div className="flex justify-center items-center space-x-2">
                <Dropdown
                  navitem="Resources"
                  dropdown1="Blog"
                  dropdown2="E-books and Guides"
                  dropdown3="Webinars"
                  pageLink="/"
                />
                <FontAwesomeIcon icon={faChevronDown} width={9} height={9} />
              </div>
            </div>
            <div className="buttons space-x-[0.7rem] flex">
              <button className="lg:text-[0.75rem] tetx-[0.5rem] text-purple bg-white lg:py-2 py-[0.3rem] lg:px-5 px-3 font-semibold sm:hidden lg:block">
                Join the Community
              </button>
              <button className="text-[0.75rem] lg:block    text-purple bg-white py-2 px-5 font-semibold">
                Login
              </button>
            </div>
          </nav>
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden block text-white cursor-pointer" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} width={25} height={25} />
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-purple text-white px-8 md:hidden block ">
            <Link href="/" className="block py-5">Home</Link>
            <div className="flex flex-col space-y-5">
              <Dropdown
                navitem="Inspire"
                dropdown1="Inspirational Stories"
                dropdown2="Quote Library"
                dropdown3="Motivational Videos"
                pageLink="/"
              />
              <Dropdown
                navitem="Grow"
                dropdown1="Goal-Setting Tools"
                dropdown2="Productivity Tips"
                dropdown3="Mindfulness and Self-Care"
                pageLink="/"
              />
              <Dropdown
                navitem="Connect"
                dropdown1="Community Forum"
                dropdown2="Podcast"
                dropdown3="Events"
                pageLink="/"
              />
              <Dropdown
                navitem="Resources"
                dropdown1="Blog"
                dropdown2="E-books and Guides"
                dropdown3="Webinars"
                pageLink="/"
              />
            </div>
            <div className="buttons flex flex-col mt-10">
              <button className="text-[0.75rem] text-purple bg-white py-2 px-5 font-semibold mb-2">
                Join the Community
              </button>
              <button className="text-[0.75rem] text-purple bg-white py-2 px-5 font-semibold">
                Login
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
