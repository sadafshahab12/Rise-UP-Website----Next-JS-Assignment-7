import Image from 'next/image'
import React from 'react'

const HeroImg = () => {
  return (
    <>
       <div className="grid grid-cols-2 space-x-2 space-y-2  relative justify-self-center self-center z-50 md:gap-4 gap-2">
              <div className="md:w-[13rem] md:h-[13rem] shadow-img1shadow rounded-[0.8rem]" >
                <Image
                  src="/images/bg.jpeg"
                  alt="hero-img"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover  rounded-[0.8rem]"
                />
              </div>
              <div className="md:w-[11rem] md:h-[11rem] self-end shadow-img2shadow rounded-[0.8rem]">
                <Image
                  src="/images/bg2.jpg"
                  alt="hero-img"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-[0.8rem]"
                />
              </div>
              <div className="md:w-[12rem] md:h-[12rem] self-start justify-self-end shadow-img3shadow rounded-[0.8rem]">
                <Image
                  src="/images/bg3.jpg"
                  alt="hero-img"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-[0.8rem]"
                />
              </div>
              <div className="md:w-[11rem] md:h-[11rem] self-start shadow-img4shadow rounded-[0.8rem]">
                <Image
                  src="/images/bg4.jpg"
                  alt="hero-img"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-[0.8rem]"
                />
              </div>
              <div className="hero-img-bg absolute left-[-7rem] top-[-5rem] -z-10 opacity-20 md:w-[34.25rem] md:h-[34.25rem]">
              <Image src="/images/star bg.webp" alt="star-bg" width={500} height={500} className="w-full h-full " />
            </div>
            </div>
    </>
  )
}

export default HeroImg
