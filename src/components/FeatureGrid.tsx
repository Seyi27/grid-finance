"use client";

import { ReactNode } from "react";
import { FeatureGridProps } from "../types/types";
import MarginWrapper from "./MarginWrapper";
import SectionHeader from "./SectionHeader";

const FeatureGrid = ({
  eyebrow,
  heading,
  backgroundColor = "bg-pale-pastel-yellow",
  headingAccent,
  items,
  columns = 2,
  breakLine,
}: FeatureGridProps) => {
  const gridColsClass = columns === 3 ? "lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <MarginWrapper outterWrapperClassName={`${backgroundColor}`}>
      {eyebrow && <SectionHeader text={eyebrow} textColor="text-green-1" />}

      <h2 className="max-w-3xl text-3xl font-bold leading-tight text-dark-green sm:text-4xl">
        {heading}
        {breakLine && <br></br>}
        {headingAccent && (
          <>
            {" "}
            <span className="font-serif italic font-normal text-green-1">
              {headingAccent}
            </span>
          </>
        )}
      </h2>

      <div className={`mt-5 grid grid-cols-1 gap-6 ${gridColsClass}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className="border-1 border-pale-yellow rounded-2xl bg-white p-6 sm:p-8 shadow-sm shadow-black/[0.03]"
          >
            <div
              className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg"
              style={{
                backgroundColor: item.iconBgColor || "#E9F2E7",
                color: item.iconColor || "#0E3B24",
              }}
            >
              {item.icon}
            </div>

            <h3 className="text-base font-semibold text-dark-green">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-2 font-light">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </MarginWrapper>
  );
};

export default FeatureGrid;
