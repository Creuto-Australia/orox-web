"use client";
import { Button } from "../ui/Button";
import { useState, useRef } from "react";
import { PausePlayButton } from "../ui/PausePlayButton";
import Link from "next/link";

const AboutHero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full">
      <div className="h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Content */}
          <div className="text-[#19191B] py-[48px] px-[16px] md:px-[60px] md:py-[80px] lg:px-[60px] xl:px-[80px] lg:py-[100px] xl:py-[147px] lg:w-1/2">
            <h1 className="text-[40px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-bold leading-[48px] md:leading-[64px] lg:leading-[68px]">
              About OROX
            </h1>
            <p className="text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] text-[#19191B] max-w-[600px] leading-[24px] md:leading-[28px] lg:leading-[30px] xl:leading-[32px] mt-[24px] md:mt-[28px] lg:mt-[30px] xl:mt-[32px] font-medium">
            OROX is an ecosystem of independent companies focused on making data-driven market participation simple and transparent. No hype, no guesswork; just structured access to systematic programs, delivered with compliance, guardrails and a global mindset.
            </p>
            <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-[32px] md:mt-[36px] lg:mt-[36px] xl:mt-[40px]">
              <Button variant="primary" className="text-[16px] md:text-[20px] font-bold w-full md:w-auto h-[48px] md:h-[64px] px-[32px] !py-2 md:py-4">
                <Link href="https://orox.app/join-waitlist" target="_blank" rel="noopener noreferrer">Join waitlist</Link>
              </Button>
              <Button variant="outline" className="!text-[#293483] whitespace-nowrap px-[32px] !py-2 md:py-4">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative lg:w-1/2 min-h-[400px] md:min-h-[500px] lg:min-h-[550px]">
            <video
              ref={videoRef}
              src="/videos/AboutNew.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover lg:rounded-l-[32px] rounded-t-[16px] lg:rounded-r-[0px]"
            />
            {/* <style>
              {`
                .peer::-webkit-media-controls {
                  display: none !important;
                }
              `}
            </style> */}
            <PausePlayButton
              isPlaying={isPlaying}
              onToggle={togglePlay}
              className="absolute bottom-[24px] right-[24px] h-9 w-9 md:h-11 md:w-11 lg:h-11 xl:h-12 lg:w-11 xl:w-12 text-[#293483] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
