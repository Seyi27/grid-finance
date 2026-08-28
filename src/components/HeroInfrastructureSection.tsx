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


      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </MarginWrapper>
  );
};

export default HeroInfrastructureSection;
