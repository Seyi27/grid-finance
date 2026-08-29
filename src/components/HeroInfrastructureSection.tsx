"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { BsArrowDown, BsArrowRight, BsCheck } from "react-icons/bs";
import infrastructureImg1 from "../assets/images/infrastructure-img-1.png";
import infrastructureImg2 from "../assets/images/infrastructure-img-2.png";
import infrastructureImg3 from "../assets/images/infrastructure-img-3.png";
import { GalleryImagesProps } from "../types/types";
import MarginWrapper from "./MarginWrapper";
import WaitlistModal from "./WaitlistModal";
import { useRouter } from "next/navigation";

// Images that cross-fade in the right-hand panel. Add/remove/reorder freely.
const galleryImages: GalleryImagesProps = [
  {
    src: infrastructureImg1,
    alt: "infrastructure 1",
  },
  {
    src: infrastructureImg2,
    alt: "infrastructure 2",
  },
  {
    src: infrastructureImg3,
    alt: "infrastructure 3",
  },
];

const TRANSITION_INTERVAL_MS = 3000;

const checklist = [
  "Launch your own branded platform in days.",
  "Built for how Nigerians actually save and borrow.",
  "One infrastructure, unlimited tenants.",
];

const HeroInfrastructureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % galleryImages.length);
    }, TRANSITION_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <MarginWrapper
      outterWrapperClassName="bg-white overflow-x-hidden"
      innerWrapperClassName="grid gap-16 grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
      showBrDecorativelines
    >
      {/* Left: copy */}
      <div>
        <h1 className="text-[40px] leading-tight text-dark-green sm:text-[45px]">
          <span className="font-bold"> 
            The infrastructure behind Nigeria&apos;s next generation of
          </span>{" "}
          <span className="font-serif italic text-green-1">
            lenders, savers, and thrift collectors.
          </span>
        </h1>

        <p className="mt-6 text-[14px] leading-relaxed text-gray-2 font-light">
          Grid Finance is multi-tenant financial infrastructure. Any business, a
          bank, a fintech, a cooperative, an SME, can launch lending, savings,
          and digital Ajo or Esusu products under its own brand, in days rather
          than years.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-forest-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            onClick={() => setWaitlistOpen(true)}
          >
            Join the waitlist
            <BsArrowRight className="h-4 w-4" />
          </button>
          <button
            className="rounded-lg border border-pale-yellow px-6 py-3 text-sm font-semibold text-dark-green transition hover:bg-light-cream"
            onClick={() => router.push("/company/contact")}
          >
            Talk to Our Team
          </button>
        </div>

        <ul className="mt-10 space-y-3">
          {checklist.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-tint-green">
                <BsCheck className="h-3 w-3 text-green-1" />
              </span>
              <span className="text-sm text-gray-2 font-light">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: transitioning image gallery + floating stat cards */}
      <div className="relative mx-auto w-full max-w-xl">
        {/* Decorative line art, behind the image */}
        <Image
          src="/images/decorative-lines-bottom-right.svg"
          alt=""
          aria-hidden="true"
          width={600}
          height={400}
          className="pointer-events-none absolute -bottom-10 -right-10 w-3/4 opacity-70"
        />

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg">
          {galleryImages.map((image, i) => (
            <Image
              key={image.alt}
              src={image.src}
              alt={image.alt}
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                i === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Floating card: Active loans */}
        <div className="absolute left-0 -top-5 sm:-left-6 sm:top-8 rounded-xl border border-pale-yellow bg-white px-4 py-3 shadow-lg">
          <p className="text-xs text-gray-1">Active loans</p>
          <p className="mt-0.5 text-base font-bold text-dark-green">
            ₦3.1M{" "}
            <span className="text-xs font-semibold text-green-1">+4%</span>
          </p>
        </div>

        {/* Floating card: Payout sent */}
        <div className="absolute right-0 top-16 sm:-right-6 sm:top-16 flex items-start gap-3 rounded-xl border border-pale-yellow bg-white px-4 py-3 shadow-lg">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow-green">
            <BsCheck className="h-3.5 w-3.5 text-green-7" />
          </span>
          <div>
            <p className="text-sm font-semibold text-dark-green">
              Payout sent — ₦240,000
            </p>
            <p className="text-xs text-gray-1">
              Round 4 of 8 · Balogun Traders Circle
            </p>
          </div>
        </div>

        {/* Floating card: Contribution received */}
        <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-xl border border-pale-yellow bg-white px-4 py-3 shadow-lg">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-green">
            <BsArrowDown className="h-3.5 w-3.5 text-yellow-green" />
          </span>
          <div>
            <p className="text-sm font-semibold text-dark-green">
              Contribution received — ₦5,000
            </p>
            <p className="text-xs text-gray-1">Adaeze N. · Daily Ajo</p>
          </div>
        </div>
      </div>

      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </MarginWrapper>
  );
};

export default HeroInfrastructureSection;
