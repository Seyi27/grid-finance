import { ReactNode } from "react";
import MarginWrapper from "./MarginWrapper";
import { CardGridProps } from "../types/types";

const CardGrid = ({
  eyebrow,
  heading,
  backgroundColor = "bg-white",
  headingAccent,
  items,
}: CardGridProps) => {
  return (
    <MarginWrapper
      outterWrapperClassName={`${backgroundColor} py-10 sm:py-20`}
    >
      {eyebrow && (
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-6 bg-yellow-green" />
          <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="max-w-3xl text-3xl font-bold leading-tight text-dark-green sm:text-4xl">
        {heading}
        {headingAccent && (
          <>
            {" "}
            <span className="font-serif italic font-normal text-green-1">
              {headingAccent}
            </span>
          </>
        )}
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 ${
              item.highlighted
                ? "bg-dark-green"
                : "border border-pale-cream bg-white"
            }`}
          >
            <div
              className={`mb-5 flex h-10 w-10 items-center justify-center rounded-lg ${
                item.highlighted
                  ? "bg-white/10 text-yellow-green"
                  : "bg-green-3 text-dark-green"
              }`}
            >
              {item.icon}
            </div>

            <h3
              className={`text-base font-semibold ${
                item.highlighted ? "text-white" : "text-dark-green"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`mt-2 text-sm leading-6 font-light ${
                item.highlighted ? "text-white/70" : "text-gray-1"
              }`}
            >
              {item.description}
            </p>

            <a
              href={item.linkHref}
              className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
                item.highlighted
                  ? "text-yellow-green hover:text-green-2"
                  : "text-green-1 hover:text-dark-green"
              }`}
            >
              {item.linkLabel}
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </MarginWrapper>
  );
};

export default CardGrid;
