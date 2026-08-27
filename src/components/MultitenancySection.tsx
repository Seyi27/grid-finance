import { BiArrowToTop, BiBarChartSquare } from "react-icons/bi";
import { BsDiagram2, BsFillFileFill } from "react-icons/bs";
import MarginWrapper from "./MarginWrapper";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: <BsFillFileFill className="text-forest-green" />,
    title: "Your brand, your platform",
    description:
      "Customers see your logo, your colors, your domain. They never need to know Grid Finance is underneath.",
  },
  {
    icon: <BiBarChartSquare className="text-forest-green" />,
    title: "Your rules, your products",
    description:
      "Interest rates, loan terms, savings plans, Rounds structures: you set them, independent of every other tenant on the platform.",
  },
  {
    icon: <BsDiagram2 className="text-forest-green" />,
    title: "Shared strength, separate data",
    description:
      "Every tenant runs on the same secure, compliant, constantly improving infrastructure, while customer data stays fully separated and protected.",
  },
  {
    icon: <BiArrowToTop className="text-forest-green" />,
    title: "Grow without rebuilding",
    description:
      "Add lending, savings, or Rounds whenever you're ready. No new platform. No new vendor to onboard.",
  },
];

const MultiTenancySection = () => {
  return (
    <MarginWrapper outterWrapperClassName="bg-white">
      {/* Eyebrow */}
      <SectionHeader
        text="why multi-tenancy matters"
        textColor="text-green-1"
      />

      {/* Heading */}
      <h2 className="max-w-3xl text-[40px] leading-13 text-dark-green sm:text-[45px]">
        <span className="font-bold">One platform.</span>{" "}
        <span className="font-serif italic text-green-1">
          Every business runs its own show.
        </span>
      </h2>

      {/* Body copy */}
      <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-gray-2 font-light">
        Grid Finance was built multi-tenant from day one. Your business, and
        every other business on Grid Finance, runs on its own isolated,
        independently branded instance of the same infrastructure.
      </p>

      {/* Feature cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-pale-yellow p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-3">
              {icon}
            </div>
            <h3 className="mt-5 text-[14px] font-semibold text-forest-green">
              {title}
            </h3>
            <p className="mt-1 text-[12px] leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </MarginWrapper>
  );
};

export default MultiTenancySection;
