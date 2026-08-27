import React from "react";

const SectionHeader = ({
  text,
  textColor,
  outterClassName,
}: {
  text: string;
  textColor: string;
  outterClassName?: string;
}) => {
  return (
    <div className={`mb-6 flex items-center gap-2 ${outterClassName}`}>
      <span className="h-px w-6 bg-yellow-green" />
      <span
        className={`text-[12px] font-semibold tracking-widest ${textColor} uppercase`}
      >
        {text}
      </span>
    </div>
  );
};

export default SectionHeader;
