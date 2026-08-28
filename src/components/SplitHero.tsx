"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { HeadingSegment, SplitHeroProps } from "../types/types";
import MarginWrapper from "./MarginWrapper";
import WaitlistModal from "./WaitlistModal";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const SplitHero = ({
  eyebrow,
  heading,
  description,
  secondaryCta,
  image,
  collageImages,
  floatingCard,
}: SplitHeroProps) => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  // Group heading segments into lines, starting a new line at each `break`.
  const lines: HeadingSegment[][] = [];
  heading.forEach((segment) => {
    if (segment.break || lines.length === 0) {
      lines.push([segment]);
    } else {
      lines[lines.length - 1].push(segment);
    }
  });

  return (
    <MarginWrapper
      outterWrapperClassName="bg-white"
      innerWrapperClassName="grid grid-cols-1 gap-12 md:grid-cols-1 lg:grid-cols-2"
    >
      {/* <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2 sm:gap-16"> */}
      {/* Text column */}
      <div>
        <SectionHeader text={eyebrow} textColor="text-green-1" />

        <h1 className="text-[35px] font-bold leading-12 text-dark-green sm:text-[40px]">
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
        </h1>

        <p className="mt-3 max-w-lg text-sm leading-7 text-gray-2 font-light">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <button
            className="inline-flex items-center gap-2 rounded-xl bg-forest-green px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-jungle-green"
            onClick={() => setWaitlistOpen(true)}
          >
            Join the waitlist
            <span aria-hidden="true">&rarr;</span>
          </button>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center rounded-xl border border-pale-cream px-6 py-3.5 text-sm font-semibold text-dark-green transition-colors hover:bg-light-cream"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>

      {/* Image column */}
      <div className="relative">
        {collageImages && collageImages.length > 0 ? (
          <div className="grid grid-cols-[1.6fr_1fr] gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              {collageImages.slice(0, 2).map((img, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 30vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        {floatingCard && (
          <div
            className={`absolute z-10 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg shadow-black/10 ${
              floatingCard.position === "top-right"
                ? "-top-4 right-4"
                : "-bottom-4 left-4"
            }`}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-green">
              {floatingCard.icon ?? (
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
                  <path
                    d="M3 8l3 3 7-7"
                    stroke="#0C2217"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <div>
              <p className="text-xs font-semibold text-dark-green">
                {floatingCard.title}
              </p>
              <p className="text-xs text-gray-1">{floatingCard.subtitle}</p>
            </div>
          </div>
        )}
      </div>
      {/* </div> */}

      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </MarginWrapper>
  );
};

export default SplitHero;
