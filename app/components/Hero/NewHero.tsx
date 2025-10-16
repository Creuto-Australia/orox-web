import React from "react";
import Image from "next/image";
import { PartnersMarquee } from "../Partners/PartnersMarquee";

const NewHero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between">
      <div className="relative flex-1 w-full">
        <Image
          src="/images/hero/hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover hidden md:block"
        />
        <Image
          src="/images/hero/hero-mobile.png"
          alt="Hero Background Mobile"
          fill
          priority
          className="object-cover block md:hidden"
        />

        <div className="absolute bottom-[48px] md:bottom-[88px] left-0 w-full flex justify-center px-4 text-center">
          <p className="text-white text-[24px] font-medium max-w-3xl leading-[36px] md:hidden">
            <span className="text-white font-bold">OROX Global</span> is an
            ecosystem of independent companies building on quantitative
            strategies, AI and Web3 infrastructure.
          </p>
          <p className="text-white text-[32px] font-medium max-w-5xl leading-[40px] hidden md:block">
            <span className="text-white font-bold">OROX Global</span> is an
            ecosystem of independent companies building <br /> on quantitative
            strategies, AI and Web3 infrastructure.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <PartnersMarquee />
      </div>
    </section>
  );
};

export default NewHero;
