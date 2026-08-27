import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsCheck } from "react-icons/bs";
import MarginWrapper from "./MarginWrapper";
import { HeadingSegment, SplitFeatureProps } from "../types/types";
import SectionHeader from "./SectionHeader";

const SplitFeature = ({
  eyebrow,
  heading,
  description,
  checklist,
  action,
  image,
  imagePosition = "right",
  backgroundColor = "bg-pale-pastel-yellow",
}: SplitFeatureProps) => {
  const paragraphs = Array.isArray(description) ? description : [description];

  // Group heading segments into lines, starting a new line at each `break`.
  const lines: HeadingSegment[][] = [];
  heading.forEach((segment) => {
    if (segment.break || lines.length === 0) {
      lines.push([segment]);
    } else {
      lines[lines.length - 1].push(segment);
    }
  });

  const imageBlock = (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        // sizes="(min-width: 1024px) 45vw, 90vw"
        className="object-cover"
      />
    </div>
  );

  const textBlock = (
    <div>
      <SectionHeader text={eyebrow} textColor="text-green-1" />

      <h2 className="text-3xl font-bold leading-tight text-dark-green sm:text-4xl">
        {lines.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.map((segment, segIndex) => (
              <span
                key={segIndex}
                className={
                  segment.variant === "accent"
                    ? "font-serif italic font-normal text-green-1"
                    : ""
                }
              >
                {segment.text}{" "}
              </span>
            ))}
          </span>
        ))}
      </h2>

      <div className="mt-5 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-sm leading-7 text-gray-2 font-light">
            {paragraph}
          </p>
        ))}
      </div>

      {checklist && checklist.length > 0 && (
        <ul className="mt-6 space-y-4">
          {checklist.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-green">
                <BsCheck className="text-green-1" size={14} />
              </span>
              <p className="text-sm leading-6 text-gray-2 font-light">
                <span className="font-semibold text-dark-green">
                  {item.title}
                </span>
                {item.title && <> — </>}
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      )}

      {action && (
        <div className="mt-6">
          {action.style === "link" ? (
            <Link
              href={action.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-green-1 hover:text-forest-green underline"
            >
              {action.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <Link
              href={action.href}
              className="inline-flex items-center rounded-xl border border-pale-cream px-6 py-3 text-sm font-semibold text-dark-green transition-colors hover:bg-light-cream"
            >
              {action.label}
            </Link>
          )}
        </div>
      )}
    </div>
  );

  return (
    <MarginWrapper outterWrapperClassName={`${backgroundColor}`}>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {imagePosition === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </MarginWrapper>
  );
};

export default SplitFeature;
