import Image from "next/image";
import whyGridFinanceImg from "../assets/images/why-grid-finance-img.png";
import infrastructureImg3 from "../assets/images/infrastructure-img-3.png";
import MarginWrapper from "./MarginWrapper";

const reasons = [
  {
    number: "01",
    title: "Cost effective",
    description:
      "Launch at a fraction of what it would cost to build your own core banking, lending, and savings stack from scratch.",
  },
  {
    number: "02",
    title: "Faster time to market",
    description:
      "Go from signup to your first customer transaction in days, not the twelve to eighteen months it takes to build in-house.",
  },
  {
    number: "03",
    title: "Culturally native",
    description:
      "Rounds isn't a foreign fintech feature bolted onto local behavior. It's built around Ajo and Esusu as Nigerians actually practice them.",
  },
  {
    number: "04",
    title: "Compliant by design",
    description:
      "KYC, BVN/NIN verification, and CBN-aligned reporting come built into every product, so you scale without scaling your compliance risk.",
  },
  {
    number: "05",
    title: "Local support, always on",
    description:
      "A Nigeria-based team that understands your customers, your regulators, and your market. Not a ticket routed overseas.",
  },
];

const WhyGridFinanceSection = () => {
  return (
    <MarginWrapper
      outterWrapperClassName="border-y border-pale-yellow bg-white"
      innerWrapperClassName="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-20"
    >
      {/* Left: heading + image */}
      <div>
        <div className="mb-6 flex items-center gap-2">
          <span className="h-px w-6 bg-yellow-green" />
          <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
            WHY GRID FINANCE
          </span>
        </div>

        <h2 className="text-4xl leading-13 text-dark-green sm:text-5xl">
          <span className="font-bold">Built for the way </span>
          <span className="font-bold">Nigeria</span>{" "}
          <span className="font-serif italic text-green-1">
            actually moves money.
          </span>
        </h2>

        <div className="relative mt-5 aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl">
          <Image
            src={infrastructureImg3}
            alt="traditional"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right: numbered list */}
      <div>
        {reasons.map((reason, i) => (
          <div
            key={reason.number}
            className={`flex gap-6 py-8 ${
              i === 0 ? "pt-0" : ""
            } ${i !== reasons.length - 1 ? "border-b border-pale-yellow" : ""}`}
          >
            <span className="font-serif text-2xl italic text-green-1">
              {reason.number}
            </span>
            <div>
              <h3 className="text-base font-semibold text-dark-green">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-2 font-light">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MarginWrapper>
  );
};

export default WhyGridFinanceSection;
