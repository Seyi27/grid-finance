import { NarrativeTextProps, TextSegment } from "../types/types";
import MarginWrapper from "./MarginWrapper";

const VARIANT_CLASSES: Record<TextSegment["variant"], string> = {
  primary: "text-white",
  muted: "text-white/50",
  accent: "italic text-green-1",
};

const NarrativeText = ({ segments }: NarrativeTextProps) => {
  // Group segments into paragraphs, starting a new one at each `break`.
  const paragraphs: TextSegment[][] = [];
  segments.forEach((segment) => {
    if (segment.break || paragraphs.length === 0) {
      paragraphs.push([segment]);
    } else {
      paragraphs[paragraphs.length - 1].push(segment);
    }
  });

  return (
    <MarginWrapper outterWrapperClassName={"bg-dark-green"}>
      {paragraphs.map((paragraph, pIndex) => (
        <p
          key={pIndex}
          className="text-sm leading-relaxed sm:text-[16px] [&:not(:first-child)]:mt-2"
        >
          {paragraph.map((segment, sIndex) => (
            <span key={sIndex} className={VARIANT_CLASSES[segment.variant]}>
              {segment.text}{" "}
            </span>
          ))}
        </p>
      ))}
    </MarginWrapper>
  );
};

export default NarrativeText;
