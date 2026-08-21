import Image from "next/image";
import {
  BsArrowRight,
  BsArrows,
  BsClock,
  BsGrid,
  BsShieldCheck,
} from "react-icons/bs";
import loanBookImg from "../assets/images/loan-book.png";
import Link from "next/link";
import MarginWrapper from "./MarginWrapper";

const features = [
  {
    icon: <BsShieldCheck size={18} />,
    title: "Loan origination and underwriting",
    description:
      "Configurable credit scoring, KYC/BVN/NIN verification, and decisioning rules built for the Nigerian credit landscape.",
  },
  {
    icon: <BsArrows size={18} />,
    title: "Disbursement and collections",
    description:
      "Direct debit, card, bank transfer, and USSD repayment channels that meet borrowers where they are.",
  },
  {
    icon: <BsGrid size={18} />,
    title: "Product flexibility",
    description:
      "Design payday loans, asset finance, SME loans, or salary-backed credit, all from one dashboard.",
  },
  {
    icon: <BsClock size={18} />,
    title: "Risk and compliance",
    description:
      "Built-in blacklist checks, CBN-aligned reporting, and credit bureau connections that keep your book clean.",
  },
];

const LendingAsAServiceSection = () => {
  return (
    <MarginWrapper
      outterWrapperClassName="bg-white"
      innerWrapperClassName="grid grid-cols-1 items-center gap-16 sm:grid-cols-2 sm:gap-20"
    >
      {/* Left: loan book card */}
      <div className="sm:sticky sm:top-24 sm:self-start w-full overflow-hidden rounded-2xl">
        <Image src={loanBookImg} alt="load book" className="object-cover" />
      </div>

      {/* Right: copy + features */}
      <div>
        <div className="mb-6 flex items-center gap-2">
          <span className="h-px w-6 bg-yellow-green" />
          <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
            LENDING AS A SERVICE
          </span>
        </div>

        <h2 className="text-4xl leading-13 text-dark-green sm:text-5xl">
          <span className="font-bold">Launch a full lending business</span>
          <br />
          <span className="font-serif italic text-green-1">
            without writing a line
          </span>{" "}
          <span className="font-bold">of core bankingcode.</span>
        </h2>

        <p className="mt-6 text-sm leading-relaxed text-gray-2 font-light">
          Grid Finance&apos;s Lending as a Service covers everything you need to
          originate, disburse, manage, and collect loans across web, mobile,
          USSD, and API, all under your own brand.
        </p>

        <div className="mt-10">
          {features.map(({ icon, title, description }, i) => (
            <div
              key={title}
              className={`flex gap-4 py-6 ${
                i === 0 ? "pt-8" : ""
              } border-t border-pale-yellow`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-3 text-forest-green">
                {icon}
              </span>
              <div>
                <h3 className="text-base font-semibold text-dark-green">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-2 font-light">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/products/lending-as-a-service"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-1 underline underline-offset-4"
        >
          Learn more about Lending as a Service
          <BsArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </MarginWrapper>
  );
};

export default LendingAsAServiceSection;
