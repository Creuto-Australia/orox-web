"use client";
import { BlogCard } from "./BlogCard";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const articles = [
  {
    image: "/images/blog/positive.png",
    title: "BNY Mellon Trials Blockchain Deposits to...",
    description:
      "The effort aims to enable near-instant settlement and potentially reduce transaction costs, with tokenized deposits moving over a blockchain.",
    link: "https://www.coindesk.com/business/2025/10/07/bny-mellon-trials-blockchain-deposits-to-overhaul-usd2-5t-payments-processing",
  },
  {
    image: "/images/blog/institutional.jpg",
    title: "BIS Sets Out Vision for Tokenised Monetary System",
    description:
      "Unified ledger combining central bank money, bank deposits and government bonds aims to modernise global finance",
    link: "https://fintechnews.ch/blockchain_bitcoin/bis-tokenised-monetary-system-blueprint/77081/",
  },
  {
    image: "/images/blog/volatality.jpg",
    title:
      "From ripples to waves: The transformational power of tokenizing assets",
    description:
      "Tokenized financial assets are moving from pilot to at-scale deployment",
    link: "https://www.mckinsey.com/industries/financial-services/our-insights/from-ripples-to-waves-the-transformational-power-of-tokenizing-assets",
  },
  {
    image: "/images/blog/investment-magazine.jpg",
    title: "Quant hedge funds ride whiplash markets to first-half riches",
    description:
      "From Treasury market reversals to trade threats, the first half of 2025 was dominated by policy upheaval and Wall Street angst",
    link: "https://www.bloomberg.com/news/articles/2025-07-03/quant-hedge-funds-ride-whiplash-markets-to-first-half-riches",
  },
];

export const HomeBlog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const CARD_WIDTH = isMobile ? 315 : 392;
  // const CARD_GAP = isMobile ? 24 : 48;
  const STEP = isMobile ? 315 : 280;
  const VISIBLE = isMobile ? 1 : 3;
  const MAX_SLIDE = Math.max(0, articles.length - VISIBLE);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= MAX_SLIDE ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? MAX_SLIDE : prev - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    swipeDuration: 250,
    preventScrollOnSwipe: true,
    trackMouse: true,
    trackTouch: true,
    delta: 10,
  });

  return (
    <section className="relative z-10 w-full bg-white px-[16px] py-[48px] md:px-[80px] md:py-[88px] overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-[48px]">
          {/* Header */}
          <h2 className="text-[34px] md:text-[56px] font-bold text-[#19191B] text-center leading-[40px] md:leading-[68px]">
            Insights, trends and smart investing
          </h2>

          {/* Articles Slider */}
          <div className="relative touch-pan-y" {...handlers}>
            <div
              className="flex gap-6 md:gap-8 will-change-transform"
              style={{
                transform: `translate3d(-${currentSlide * STEP}px, 0, 0)`,
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
              }}
            >
              {/* keep your manual list of cards unchanged */}
              <div className="flex flex-row gap-[24px] md:gap-[48px]">
                <BlogCard
                  image={articles[0].image}
                  title={articles[0].title}
                  description={articles[0].description}
                  link={articles[0].link}
                />
                <BlogCard
                  image={articles[1].image}
                  title={articles[1].title}
                  description={articles[1].description}
                  link={articles[1].link}
                />
                <BlogCard
                  image={articles[2].image}
                  title={articles[2].title}
                  description={articles[2].description}
                  link={articles[2].link}
                />
                <BlogCard
                  image={articles[3].image}
                  title={articles[3].title}
                  description={articles[3].description}
                  link={articles[3].link}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-[40px] md:mt-[80px] flex justify-center space-x-4">
              <button
                onClick={prevSlide}
                className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-gray-100 text-[#293483] hover:text-[#212A69] hover:bg-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px] rotate-180"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#293483] hover:bg-[#212A69] text-white transform transition-transform duration-300 ease-in-out hover:scale-110"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-[24px] h-[24px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
