"use client";

import Image from "next/image";
import ctaBanner from "../assets/images/cta_banner.png";
import CustomButton from "./CustomButton";
import { BsArrowRight } from "react-icons/bs";
import { CtaBannerProps } from "../types/types";
import MarginWrapper from "./MarginWrapper";
import { useRouter } from "next/navigation";
import WaitlistModal from "./WaitlistModal";
import { useState } from "react";

const CtaBanner = ({
  eyebrow,
  heading,
  headingAccent,
  description,
}: CtaBannerProps) => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const router = useRouter();

  return (
    <MarginWrapper outterWrapperClassName="bg-white">
      <div className="relative w-full h-fit overflow-hidden rounded-3xl">
        {/* Background image — fills the container */}
        <Image
          src={ctaBanner}
          alt="Grid Finance team"
          fill
          className="object-cover"
          priority={false}
        />

        {/* Content sits on top of the image + overlay */}
        <div className="relative flex h-full items-center p-6 sm:p-10">
          <div className="max-w-xl">
            {eyebrow && (
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-6 bg-yellow-green" />
                <span className="text-[10px] sm:text-[14px] font-semibold tracking-widest text-yellow-green uppercase">
                  {eyebrow}
                </span>
              </div>
            )}

            <h2 className="text-[30px] font-bold leading-tight text-white sm:text-[40px]">
              {heading}
              {headingAccent && (
                <>
                  <br />
                  <span className="font-serif italic font-normal text-yellow-green">
                    {headingAccent}
                  </span>
                </>
              )}
            </h2>

            {description && (
              <p className="my-5 leading-7 text-white/70 text-[14px] font-light">
                {description}
              </p>
            )}

            <div className="flex items-center gap-4 w-full sm:w-100">
              <CustomButton
                label="Join the waitlist"
                width={"100%"}
                height="45px"
                bgColor="#c8e06a"
                textColor="#092718"
                borderRadius="10px"
                fontSize={14}
                fontWeight={600}
                icon={<BsArrowRight color="#092718" />}
                onClick={() => setWaitlistOpen(true)}
              />

              <CustomButton
                label="Talk to our team"
                width={"100%"}
                height="45px"
                bgColor="transparent"
                textColor="white"
                borderColor="white"
                borderWidth="1px"
                borderRadius="10px"
                fontSize={14}
                fontWeight={600}
                onClick={() => router.push("/company/contact")}
              />
            </div>
          </div>
        </div>

        <WaitlistModal
          isOpen={waitlistOpen}
          onClose={() => setWaitlistOpen(false)}
        />
      </div>
    </MarginWrapper>
  );
};

export default CtaBanner;
