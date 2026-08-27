import { StepTimelineProps } from "../types/types";
import MarginWrapper from "./MarginWrapper";
import SectionHeader from "./SectionHeader";

const StepTimeline = ({
  eyebrow,
  heading,
  backgroundColor = "bg-white",
  headingAccent,
  steps,
}: StepTimelineProps) => {
  return (
    <MarginWrapper outterWrapperClassName={`${backgroundColor}`}>
      {eyebrow && <SectionHeader text={eyebrow} textColor="text-green-1" />}

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

      <div
        className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8"
        style={{ ["--steps" as string]: steps.length }}
      >
        {steps.map((step, index) => (
          <div key={index}>
            {/* Number circle + connector line (desktop) */}
            <div className="flex items-center">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-green">
                <span className="font-serif text-sm italic text-yellow-green">
                  {index + 1}
                </span>
              </span>
              {index < steps.length - 1 && (
                <span className="mx-3 hidden h-px flex-1 border-t border-dashed border-pale-yellow sm:block" />
              )}
            </div>

            <h3 className="mt-4 text-base font-semibold text-dark-green">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-2 font-light">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </MarginWrapper>
  );
};

export default StepTimeline;
