"use client";

import React from "react";
import Image from "next/image";

const DVOXCard = () => (
  <div className="w-full lg:flex-[0_0_40%] h-[500px] sm:h-[534px]">
    <div className="relative rounded-3xl overflow-hidden h-full w-full">
      <div className="absolute inset-0 bg-[#12121B]">
        <Image
          src="/images/bento/bento-1-bg.png"
          alt="DVOX Background"
          width={600}
          height={534}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />

        <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 z-10">
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/products/3D-Coin.png"
                alt="DVOX 3D Coin"
                width={294}
                height={294}
                className="absolute top-1/2 left-1/2 w-[200px] sm:w-[250px] lg:w-[294px] h-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ease-in-out hover:scale-110 hover:brightness-120"
              />
            </div>
          </div>

          <div className="text-white">
            <h3 className="text-[28px] font-bold mb-2 leading-[40px]">
              DVOX Utility Token
            </h3>
            <p className="text-[16px] text-white leading-[24px] font-medium">
              The DVOX token unlocks access to ODN vaults and powers core
              ecosystem features. Designed as both a utility and growth driver,
              it fuels participation, staking rewards, and future governance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ODNCard = () => (
  <div className="w-full lg:flex-[0_0_60%] h-[560px] sm:h-[534px]">
    <div className="relative h-full w-full rounded-3xl overflow-hidden">
      <Image
        src="/images/bento/bento-2-bg.png"
        alt="ODN Background"
        width={761}
        height={534}
        className="absolute inset-0 h-full w-full object-cover hidden lg:block"
        priority
      />
      <Image
        src="/images/bento/bento-2-bgsm.png"
        alt="ODN Background"
        width={761}
        height={560}
        className="absolute inset-0 h-full w-full object-cover block lg:hidden"
        priority
      />

      <div className="sm:hidden relative z-10 h-full flex flex-col justify-between p-6 overflow-y-hidden">
        <div className="text-white mt-4">
          <h3 className="text-[28px] font-bold mb-2 leading-[40px]">ODN On-Chain Vaults</h3>
          <p className="text-[16px] text-white leading-[24px] font-medium">
            ODN Vaults are smart-contract programs that implement our systematic
            strategies. Participation can enable program-defined rewards per
            vault rules. Designed for on-chain transparency, automation and
            auditability.
          </p>
        </div>
        
        <div className="flex justify-center items-end relative -bottom-40">
          <Image
            src="/images/bento/bento-2-mobile.png"
            alt="ODN Mobile App"
            width={1000}
            height={1000}
            priority
            className="h-[420px] sm:h-[280px] w-auto object-contain hover:scale-105 transition-all duration-300 absolute"
          />
        </div>
      </div>

      <div className="hidden sm:block relative h-full">
        <div className="absolute top-1/2 -translate-y-[35%] left-10">
          <Image
            src="/images/bento/bento-2-mobile.png"
            alt="ODN Mobile App"
            width={1000}
            height={1000}
            priority
            className="h-[580px] w-auto object-contain hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="absolute bottom-0 right-0 z-10 px-12 pb-12">
          <div className="max-w-md text-white">
            <h3 className="text-[28px] font-bold mb-2 leading-[40px]">ODN On-Chain Vaults</h3>
            <p className="text-[16px] text-white leading-[24px] font-medium max-w-[340px]">
              ODN Vaults are smart-contract programs that implement our
              systematic strategies. Participation can enable program-defined
              rewards per vault rules. Designed for on-chain transparency,
              automation and auditability.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OROXAppCard = () => (
  <div className="w-full h-[560px] sm:h-[536px]">
    <div className="relative h-full w-full rounded-3xl overflow-hidden bg-[#0C2E74]">
      <Image
        src="/images/bento/bento-3-bg.png"
        alt="Background"
        fill
        className="object-cover hidden lg:block"
      />
      <Image
        src="/images/bento/bento-3-bgsm.png"
        alt="Background"
        fill
        className="object-cover block lg:hidden"
      />

      <div className="lg:hidden relative z-10 h-full flex flex-col justify-between p-6">
        <div className="text-white mt-4 text-left">
          <h3 className="text-[28px] font-bold mb-2 leading-[40px]">OROX+ App</h3>
          <p className="text-[16px] text-white leading-[24px] font-medium">
            Available on iOS and Android, the OROX+ app provides simple access
            to ecosystem programs and tools at your fingertips. Seamlessly
            integrating CeFi and DeFi, it delivers automated outcomes, risk
            controls and handles execution.
          </p>
        </div>

        <div className="block lg:hidden flex justify-center items-end pb-4 relative -mb-40">
          <Image
            src="/images/bento/bento-3-mobile.png"
            alt="OROX App Mobile"
            width={1000}
            height={1000}
            priority
            className="h-[420px] bottom-0 w-auto object-contain hover:scale-105 transition-all duration-300 z-10"
          />
        </div>
      </div>

      <div className="hidden lg:block h-full">
        <div className="absolute right-20 -bottom-[100px] z-10">
          <Image
            src="/images/bento/bento-3-mobile.png"
            alt="OROX App Mobile"
            width={1000}
            height={1000}
            priority
            className="h-[580px] w-auto object-contain hover:scale-105 transition-all duration-300"
          />
        </div>

        <div className="relative h-full flex items-center px-12 pb-12">
          <div className="text-white max-w-md md:max-w-2xl lg:max-w-md text-center">
            <h3 className="text-[28px] font-bold mb-2 leading-[40px]">OROX+ App</h3>
            <p className="text-[16px] text-white leading-[24px] font-medium">
              Available on iOS and Android, the OROX+ app provides simple access
              to ecosystem programs and tools at your fingertips. Seamlessly
              integrating CeFi and DeFi, it delivers automated outcomes, risk
              controls and handles execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const OpusMomentusCard = () => (
  <div className="w-full lg:flex-[0_0_60%] h-[500px] sm:h-[488px]">
    <div className="relative rounded-3xl overflow-hidden h-full w-full bg-[#0A0A0F] ">
      <div className="absolute top-0 left-0 right-0 h-52 lg:h-72 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
        <video
          src="/videos/OpusMomentus.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-[28px] font-bold text-white mb-2 leading-[40px]">
            Opus Momentus R&D
          </h3>

          <p className="text-[16px] text-white leading-[24px] font-medium">
            Our R&D hub for quantitative models and blockchain infrastructure.
            Opus Momentus develops tech solutions to drive innovation in the
            OROX ecosystem, enabling scalable participation and continuous
            improvement of platform capabilities.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const AlphaFundCard = () => (
  <div className="w-full lg:flex-[0_0_40%] h-[450px] sm:h-[488px]">
    <div className="relative rounded-3xl overflow-hidden h-full w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/bento/bento-5-bg.png"
          alt="Background"
          fill
          className="object-cover"
        />

        <div className="relative h-full flex flex-col items-start p-6 sm:p-8">
          <h3 className="text-[28px] font-bold text-white mb-2 leading-[40px]">
            OROX Global Alpha Fund
          </h3>
          <p className="text-[16px] text-white leading-[24px] font-medium">
            Professionally managed vehicle for qualified investors only. A
            traditional managed fund implementing systematic, quantitative
            methods; supported by risk controls, independent oversight, and
            clear operating policies.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const BentoGrid = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[16px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#4296E4] to-[#383699] text-center mb-[8px]">
            THE OROX ENGINE
          </p>
          <h2 className="text-[34px] md:text-[56px] font-bold text-[#19191B] leading-[48px] md:leading-[68px] mt-[8px]">
            Discover OROX and the components powering it
          </h2>
          <p className="text-[16px] md:text-[20px] text-[#19191B] leading-[24px] md:leading-[32px] mt-[24px] mb-[48px] max-w-[800px] mx-auto font-medium">
            OROX is built by specialists in finance, AI, and blockchain to
            create an ecosystem for accessing systematic, on-chain programs.
            It&apos;s built for clarity, control and compliance.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:hidden">
          <DVOXCard />
          <ODNCard />
          <OROXAppCard />
          <OpusMomentusCard />
          <AlphaFundCard />
        </div>

        <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-2">
          <div className="w-full flex justify-start items-center gap-2">
            <DVOXCard />
            <ODNCard />
          </div>

          <div className="w-full flex justify-center">
            <OROXAppCard />
          </div>

          <div className="w-full flex justify-start items-center gap-2">
            <OpusMomentusCard />
            <AlphaFundCard />
          </div>
        </div>
      </div>
    </section>
  );
};
