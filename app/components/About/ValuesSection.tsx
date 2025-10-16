import Image from "next/image";

const values = [
  {
    icon: "/images/features/transparency.svg",
    title: "Transparency",
    description:
      "Clear language, on-chain visibility, and published rules with no hidden terms.",
  },
  {
    icon: "/images/features/accountability.svg",
    title: "Accountability",
    description:
      "We take responsibility for every decision, ensuring trust and reliability in all we do.",
  },
  {
    icon: "/images/features/challenge.svg",
    title: "Challenge the status quo",
    description:
      "Embracing innovation to create smarter, compliant and more secure solutions.",
  },
];

export const ValuesSection = () => {
  return (
    <section className="w-full bg-white px-[16px] md:px-[24px] lg:px-[32px] py-[48px] md:py-[88px]">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-[32px] font-bold text-[#19191B] md:text-[42px] lg:text-[56px] z-0">
              The values that drive OROX
              {/* <span className="relative z-0">
                <span className="absolute left-0 top-[35%] z-0 h-[80%] w-full rounded-[4px] bg-[#7878FA]/30"></span>
                <span className="relative z-10">OROX</span>
              </span>{" "} */}
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-[#19191B] leading-[24px] md:leading-[28px] lg:leading-[32px] font-medium">
              Built on trust, driven by responsibility.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center ${
                  index === 2
                    ? "md:col-span-2 md:mx-auto md:max-w-[50%] lg:col-span-1 lg:max-w-none"
                    : ""
                }`}
              >
                <div className="mx-auto relative h-24 w-24">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-[8px] text-[20px] md:text-[24px] lg:text-[28px] font-bold text-[#19191B] mt-[24px] leading-[32px] md:leading-[36px] lg:leading-[40px]">
                  {value.title}
                </h3>
                <p className="text-[#19191B] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[28px] lg:leading-[32px] mt-[8px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
