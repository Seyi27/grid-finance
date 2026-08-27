import Image from "next/image";
import { BsArrowRight, BsCheck } from "react-icons/bs";
import whoGridFinanceIsForImg from "../assets/images/who-grid-finance-is-for-img.png";
import MarginWrapper from "./MarginWrapper";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const audiences = [
  {
    title: "Fintech startups",
    description:
      "Skip the eighteen-month infrastructure build. Launch lending, savings, or Rounds and put your energy into growing your customer base.",
    href: "/solutions/fintechs",
  },
  {
    title: "Microfinance banks and cooperatives",
    description:
      "Digitize the thrift, Ajo, and loan operations you already run, without disrupting the trust you've built with members.",
    href: "/solutions/mfbs",
  },
  {
    title: "SMEs and merchants",
    description:
      "Offer savings or credit at the point of sale and turn one-time buyers into repeat, loyal customers.",
    href: "/solutions/smes",
  },
  {
    title: "HR and payroll platforms",
    description:
      "Give employees salary-backed loans and automated savings, deducted right at payroll.",
    href: "/solutions/hr-payroll",
  },
  {
    title: "Trade associations and thrift collectors",
    description:
      "Formalize your Ajo or Esusu group with digital records and automated payouts. No more worrying that the collector runs off with the money.",
    href: "/products/rounds",
  },
];

const WhoGridFinanceIsForSection = () => {
  return (
    <MarginWrapper
      outterWrapperClassName="bg-white"
      innerWrapperClassName="grid grid-cols-1 gap-5 lg:gap-16 md:grid-cols-1 lg:grid-cols-2"
    >
      {/* Top row: heading (left) + CTA (right) */}
      <div>
        <SectionHeader
          text="why grid finance is for"
          textColor="text-green-1"
        />

        <h2 className="text-4xl leading-13 text-dark-green sm:text-5xl">
          <span className="font-bold">One infrastructure,</span>
          <br />
          <span className="font-serif italic text-green-1">
            many kinds of builders.
          </span>
        </h2>

        {/* Image with floating card */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl mt-10">
          <Image
            src={whoGridFinanceIsForImg}
            alt="hand shake"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right column: CTA + list */}
      <div>
        <div className="flex justify-end">
          <button className="rounded-full border border-pale-yellow px-6 py-3 text-[14px] font-medium text-dark-green hover:bg-pale-white cursor-pointer">
            Get Started Free
          </button>
        </div>

        <div className="mt-10">
          {audiences.map((audience, i) => (
            <div
              key={audience.title}
              className={`flex flex-col sm:flex-row items-start justify-between gap-6 py-8 ${
                i === 0 ? "pt-8" : ""
              } border-t border-pale-yellow ${
                i === audiences.length - 1 ? "border-b" : ""
              }`}
            >
              <h3 className="w-40 shrink-0 text-base font-semibold text-dark-green">
                {audience.title}
              </h3>
              <p className="flex-1 text-[14px] leading-relaxed text-gray-2 font-light">
                {audience.description}
              </p>
              <Link
                href={audience.href}
                aria-label={`Learn more about ${audience.title}`}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-pale-yellow text-dark-green transition hover:bg-pale-white cursor-pointer"
              >
                <BsArrowRight className="h-4 w-4" />
                {/* </button> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MarginWrapper>
  );
};

export default WhoGridFinanceIsForSection;
