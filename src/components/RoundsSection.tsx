import Image from "next/image";
import type { ReactNode } from "react";
import {
  BsArrowRight,
  BsCheck,
  BsFileText,
  BsPeople,
  BsRecordCircle,
  BsShieldCheck,
} from "react-icons/bs";
import {
  HeadingSegment,
  RoundsFeature,
  RoundsSectionProps,
} from "../types/types";
import handsTogether from "../assets/images/hands-together.png";
import roundsImg from "../assets/images/rounds-img.png";
import MarginWrapper from "./MarginWrapper";
import SectionHeader from "./SectionHeader";

const defaultFeatures: RoundsFeature[] = [
  {
    icon: <BsRecordCircle className="text-yellow-green" />,
    title: "Digital contribution circles",
    description:
      "Members join a round, contribute on a set schedule, and receive payouts in rotation. No notebooks, no guesswork.",
  },
  {
    icon: <BsShieldCheck className="text-yellow-green" />,
    title: "Trust, built in",
    description:
      "Every contribution and every payout is logged and visible to the whole circle in real time.",
  },
  {
    icon: <BsPeople className="text-yellow-green" />,
    title: "Flexible group sizes",
    description:
      "A five-person family circle or a five-hundred-member trade association. Rounds scales either way.",
  },
  {
    icon: <BsFileText className="text-yellow-green" />,
    title: "Collector tools",
    description:
      "Cooperatives and thrift collectors get automated reconciliation, defaulter tracking, and digital records, without losing the community feel that makes Ajo work in the first place.",
  },
];

const RoundsSection = ({
  eyebrow,
  heading,
  description,
  list,
}: RoundsSectionProps) => {
  const lines: HeadingSegment[][] = [];
  heading.forEach((segment) => {
    if (segment.break || lines.length === 0) {
      lines.push([segment]);
    } else {
      lines[lines.length - 1].push(segment);
    }
  });

  return (
    <MarginWrapper outterWrapperClassName="bg-green-7">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader text={eyebrow} textColor="text-yellow-green" />

          <h1 className="text-[40px] font-bold leading-13 text-white sm:text-[45px]">
            {lines.map((line, lineIndex) => (
              <span key={lineIndex} className="block">
                {line.map((segment, segIndex) => (
                  <span
                    key={segIndex}
                    className={
                      segment.variant === "accent"
                        ? "font-serif italic font-normal text-yellow-green"
                        : ""
                    }
                  >
                    {segment.text}{" "}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="mt-3 text-[14px] leading-7 text-white/70 font-light">
            {description}
          </p>

          {list && list.length > 1 && (
            <ul className="mt-6 flex-1 space-y-4">
              {list.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-6">
                    <BsCheck className="text-yellow-green" size={14} />
                  </span>
                  <span className="text-[14px] text-white/70 font-light">
                    <span className="text-white font-semibold">
                      {feature.title}
                    </span>{" "}
                    - {feature.body}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <a
            href={"/products/rounds"}
            className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-yellow-green"
          >
            Learn more about Rounds
            <BsArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Rounds diagram — treated as a static image, not a built component */}
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <Image
            src={roundsImg}
            alt={"rounds-image"}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Feature cards */}
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {defaultFeatures.map(({ icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/10 bg-green-6 p-6"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-5">
              {icon}
            </div>
            <h3 className="mt-5 text-[14px] font-semibold text-white">
              {title}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/70 font-light">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom photo + caption */}
      <div className="mt-8">
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl bg-green-9">
          <Image
            src={handsTogether}
            alt={"hands-together"}
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-4 text-[14px] text-white/70">
          <span className="font-semibold text-white">
            This is the circle Rounds digitizes.
          </span>{" "}
          The same traders, the same trust, now with a ledger nobody can
          dispute.
        </p>
      </div>
    </MarginWrapper>
  );
};

export default RoundsSection;
