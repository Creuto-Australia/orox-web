"use client";
import { BlogCard } from "./BlogCard";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const articles = [
  {
    image: "/images/blog/BNYMellon.png",
    title: "BNY Mellon Trials Blockchain Deposits to Overhaul $2.5T Payments...",
    description:
      "The effort aims to enable near-instant settlement and potentially reduce transaction costs, with tokenized deposits moving over a blockchain...",
    link: "https://www.coindesk.com/business/2025/10/07/bny-mellon-trials-blockchain-deposits-to-overhaul-usd2-5t-payments-processing",
  },
  {
    image: "/images/blog/tokenisedMonetary.png",
    title: "BIS Sets Out Vision for Tokenised Monetary System",
    description:
      "The Bank for International Settlements (BIS) has set out a comprehensive vision for the future of the monetary and financial system, centred...",
    link: "https://fintechnews.ch/blockchain_bitcoin/bis-tokenised-monetary-system-blueprint/77081/",
  },
  {
    image: "/images/blog/ripplesToWaves.png",
    title:
      "From ripples to waves: The transformational power of tokenizing assets",
    description:
      "Tokenization, the process of creating a unique digital representation of an asset on a blockchain network, has reached a tipping point after...",
    link: "https://www.mckinsey.com/industries/financial-services/our-insights/from-ripples-to-waves-the-transformational-power-of-tokenizing-assets",
  },
  {
    image: "/images/blog/quantHedgeFunds.png",
    title: "Quant hedge funds ride whiplash markets to first-half riches",
    description:
      "Strong performers included Marshall Wace's TOPS, Renaissance Institutional Equities Fund and AQR Delphi Long-Short Equity, which all climbed...",
    link: "https://www.bloomberg.com/news/articles/2025-07-03/quant-hedge-funds-ride-whiplash-markets-to-first-half-riches",
  },
  {
    image: "/images/blog/positive.png",
    title: "Positive Signs for Institutional Investment in Crypto…",
    description:
        "President Trump’s second administration painted a new landscape for digital assets and…",
    link: "https://www.forbes.com/sites/digital-assets/2025/01/24/positive-signs-for-institutional-investment-in-cryptocurrencies/",
  },
  {
    image: "/images/blog/institutional.jpg",
    title:
        "Institutional sentiment points to increased adoption of digital as…",
    description:
        "The digital asset industry experienced significant volatility in 2023 with sustained regulator…",
    link: "https://www.ey.com/en_us/insights/financial-services/evolving-digital-assets-sentiment-among-investors",
  },
  {
    image: "/images/blog/volatality.jpg",
    title: "Controlling Volatility through Market Neutral Investing",
    description:
        "Newcomers to share market investing can be surprised to learn there are more ways to tur…",
    link: "https://thebull.com.au/trading-guides/market-neutral-investment-strategies/",
  },
  {
    image: "/images/blog/investment-magazine.jpg",
    title: "Why quant investing is having a renaissance with asset owners",
    description:
        "Often touted as the data-based approach to reaping alpha by exploiting human biases, quantit…",
    link: "https://www.investmentmagazine.com.au/2024/03/why-quant-investing-is-having-a-renaissance-with-asset-owners/",
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
  const STEP = isMobile ? 315 : 385;
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
                {articles?.map((article, index) => {
                  return (
                      <BlogCard
                          key={article?.title + index}
                          image={article.image}
                          title={article.title}
                          description={article.description}
                          link={article.link}
                      />
                  )
                })}
                {/*<BlogCard*/}
                {/*  image={articles[1].image}*/}
                {/*  title={articles[1].title}*/}
                {/*  description={articles[1].description}*/}
                {/*  link={articles[1].link}*/}
                {/*/>*/}
                {/*<BlogCard*/}
                {/*  image={articles[2].image}*/}
                {/*  title={articles[2].title}*/}
                {/*  description={articles[2].description}*/}
                {/*  link={articles[2].link}*/}
                {/*/>*/}
                {/*<BlogCard*/}
                {/*  image={articles[3].image}*/}
                {/*  title={articles[3].title}*/}
                {/*  description={articles[3].description}*/}
                {/*  link={articles[3].link}*/}
                {/*/>*/}
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
