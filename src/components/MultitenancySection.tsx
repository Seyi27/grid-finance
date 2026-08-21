import { BiArrowToTop, BiBarChartSquare } from "react-icons/bi";
import { BsDiagram2, BsFillFileFill } from "react-icons/bs";
import MarginWrapper from "./MarginWrapper";

const features = [
  {
    icon: <BsFillFileFill color="#0E3B24" />,
    title: "Your brand, your platform",
    description:
      "Customers see your logo, your colors, your domain. They never need to know Grid Finance is underneath.",
  },
  {
    icon: <BiBarChartSquare color="#0E3B24" />,
    title: "Your rules, your products",
    description:
      "Interest rates, loan terms, savings plans, Rounds structures: you set them, independent of every other tenant on the platform.",
  },
  {
    icon: <BsDiagram2 color="#0E3B24" />,
    title: "Shared strength, separate data",
    description:
      "Every tenant runs on the same secure, compliant, constantly improving infrastructure, while customer data stays fully separated and protected.",
  },
  {
    icon: <BiArrowToTop color="#0E3B24" />,
    title: "Grow without rebuilding",
    description:
      "Add lending, savings, or Rounds whenever you're ready. No new platform. No new vendor to onboard.",
  },
];

const MultiTenancySection = () => {
  return (
    <MarginWrapper outterWrapperClassName="bg-white">
      {/* Eyebrow */}
      <div className="mb-6 flex items-center gap-2">
        <span className="h-px w-6 bg-yellow-green" />
        <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
          WHY MULTI-TENANCY MATTERS
        </span>
      </div>

      {/* Heading */}
      <h2 className="max-w-3xl text-4xl leading-13 text-dark-green sm:text-5xl">
        <span className="font-bold">One platform.</span>{" "}
        <span className="font-serif italic text-green-1">
          Every business runs its own show.
        </span>
      </h2>

      {/* Body copy */}
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-2 font-light">
        Grid Finance was built multi-tenant from day one. Your business, and
        every other business on Grid Finance, runs on its own isolated,
        independently branded instance of the same infrastructure.
      </p>

      {/* Feature cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-4">
        {features.map(({ icon, title, description }) => (
          <div key={title} className="rounded-2xl border border-pale-yellow p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-3">
              {icon}
            </div>
            <h3 className="mt-5 text-sm font-semibold text-forest-green">
              {title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </MarginWrapper>
  );
};

export default MultiTenancySection;
