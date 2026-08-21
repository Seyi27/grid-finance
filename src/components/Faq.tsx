"use client";

import { useState } from "react";
import MarginWrapper from "./MarginWrapper";
import { FaqProps } from "../types/types";
import { BsPlus } from "react-icons/bs";

const Faq = ({
  eyebrow,
  heading,
  backgroundColor = "bg-white",
  items,
  allowMultipleOpen = false,
}: FaqProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(index);
      if (allowMultipleOpen) {
        return isOpen ? prev.filter((i) => i !== index) : [...prev, index];
      }
      return isOpen ? [] : [index];
    });
  };

  return (
    <MarginWrapper
      outterWrapperClassName={`${backgroundColor}`}
      innerWrapperClassName="max-w-3xl!"
    >
      <div className="text-center">
        {eyebrow && (
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-yellow-green" />
            <span className="text-1xl font-semibold tracking-widest text-green-1 uppercase">
              {eyebrow}
            </span>
          </div>
        )}
        <h2 className="text-[22px] font-bold text-dark-green">{heading}</h2>
      </div>

      <div className="mt-10 border-t border-pale-cream">
        {items.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div key={index} className="border-b border-pale-cream">
              <button
                type="button"
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-[16px] font-semibold text-dark-green">
                  {item.question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-pale-cream">
                  <BsPlus
                    size={20}
                    className={`transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </span>
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-200 ${
                  isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0">
                  <p className="text-sm leading-6 text-gray-1 font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MarginWrapper>
  );
};

export default Faq;
