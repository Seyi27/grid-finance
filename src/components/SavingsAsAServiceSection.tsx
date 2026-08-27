import Image from "next/image";
import {
  BsArrow90DegRight,
  BsArrowRight,
  BsBullseye,
  BsEye,
  BsStar,
} from "react-icons/bs";
import goalBasedSavings from "../assets/images/goal-based-savings.png";
import Link from "next/link";
import MarginWrapper from "./MarginWrapper";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: <BsBullseye size={18} />,
    title: "Goal-based savings",
    description:
      `Customers save toward school fees, rent, inventory, or business
growth, with locked or flexible plans.`,
  },
  {
    icon: <BsArrow90DegRight size={18} />,
    title: "Automated contributions",
    description:
      `Recurring debits, standing orders, and wallet top-ups that make
saving effortless.`,
  },
  {
    icon: <BsStar size={18} />,
    title: "Interest and incentives",
    description:
      `Set your own interest rates, bonuses, and loyalty rewards to keep
customers saving longer.`,
  },
  {
    icon: <BsEye size={18} />,
    title: "Real-time visibility",
    description:
      `Customers watch their balance grow. You watch your liquidity
grow. Same dashboard.`,
  },
];

const SavingsAsAServiceSection = () => {
  return (
    <MarginWrapper
      outterWrapperClassName="bg-pale-white"
      innerWrapperClassName="grid grid-cols-1 gap-16 md:grid-cols-1 lg:grid-cols-2"
    >
      {/* Left */}
      <div>
        <SectionHeader text="saving as a service" textColor="text-green-1" />

        <h2 className="text-[40px] leading-13 text-dark-green sm:text-[45px]">
          <span className="font-bold">Give your customers a </span>
          <br />
          <span className="font-bold">reason to save with you, </span>
          <span className="font-serif italic text-green-1">
            not under their mattress.
          </span>{" "}
        </h2>

        <p className="mt-6 text-[14px] leading-relaxed text-gray-2 font-light">
          Grid Finance's Savings as a Service lets you launch fixed, flexible,
          and goal-based savings products. Fully branded, fully compliant, and
          connected to the same infrastructure powering your lending.
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
                <p className="mt-1 text-[14px] leading-relaxed text-gray-2 font-light">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/products/savings-as-a-service"
          className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-green-1 underline underline-offset-4"
        >
          Learn more about Savings as a Service
          <BsArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Right */}
      <div className="sm:sticky sm:top-24 sm:self-start w-full overflow-hidden rounded-2xl">
        <Image src={goalBasedSavings} alt="load book" className="object-cover" />
      </div>
    </MarginWrapper>
  );
};

export default SavingsAsAServiceSection;
