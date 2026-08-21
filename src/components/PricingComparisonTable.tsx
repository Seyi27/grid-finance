import { BsCheckLg, BsDashLg } from "react-icons/bs";
import MarginWrapper from "./MarginWrapper";
import { Cell, Row } from "../types/types";

const ROWS: Row[] = [
  { feature: "Products included", starter: "1", growth: "3", enterprise: "3" },
  {
    feature: "KYC / BVN / NIN verification",
    starter: "check",
    growth: "check",
    enterprise: "check",
  },
  {
    feature: "Web & mobile channels",
    starter: "check",
    growth: "check",
    enterprise: "check",
  },
  {
    feature: "USSD channel",
    starter: "dash",
    growth: "check",
    enterprise: "check",
  },
  {
    feature: "API access",
    starter: "dash",
    growth: "check",
    enterprise: "check",
  },
  {
    feature: "Credit bureau integration",
    starter: "dash",
    growth: "check",
    enterprise: "check",
  },
  {
    feature: "Dedicated account manager",
    starter: "dash",
    growth: "dash",
    enterprise: "check",
  },
  {
    feature: "Custom compliance workflows",
    starter: "dash",
    growth: "dash",
    enterprise: "check",
  },
  {
    feature: "Support",
    starter: "Email",
    growth: "Priority",
    enterprise: "24/7 dedicated line",
  },
];

const CellValue = ({ value }: { value: Cell }) => {
  if (value === "check") {
    return <BsCheckLg className="text-green-1" size={16} />;
  }
  if (value === "dash") {
    return <BsDashLg className="text-gray-1/50" size={14} />;
  }
  return <span>{value}</span>;
};

const PricingComparisonTable = () => {
  return (
    <MarginWrapper
      outterWrapperClassName="bg-pale-pastel-yellow"
      innerWrapperClassName="max-w-5xl!"
    >
      <div className="text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-6 bg-yellow-green" />
          <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
            Compare plans
          </span>
        </div>
        <h2 className="text-3xl font-bold text-dark-green sm:text-4xl">
          What&apos;s included,{" "}
          <span className="font-serif italic font-normal text-green-1">
            tier by tier.
          </span>
        </h2>
      </div>

      <div className="mt-12 overflow-x-auto rounded-2xl border border-pale-cream bg-white">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-pale-cream">
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-1 uppercase">
                Feature
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-1 uppercase">
                Starter
              </th>
              <th className="bg-lime-tint-green px-6 py-4 text-left text-xs font-semibold tracking-wider text-dark-green uppercase">
                Growth
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold tracking-wider text-gray-1 uppercase">
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, index) => (
              <tr
                key={row.feature}
                className={
                  index !== ROWS.length - 1 ? "border-b border-pale-cream" : ""
                }
              >
                <td className="px-6 py-4 text-dark-green">{row.feature}</td>
                <td className="px-6 py-4 text-gray-1">
                  <CellValue value={row.starter} />
                </td>
                <td className="bg-lime-tint-green px-6 py-4 text-dark-green">
                  <CellValue value={row.growth} />
                </td>
                <td className="px-6 py-4 text-gray-1">
                  <CellValue value={row.enterprise} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MarginWrapper>
  );
};

export default PricingComparisonTable;
