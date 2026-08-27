import Image from "next/image";
import problemImg from "../assets/images/problem-img.png";
import MarginWrapper from "./MarginWrapper";
import SectionHeader from "./SectionHeader";

const TheProblemSection = () => {
  return (
    <MarginWrapper
      outterWrapperClassName="bg-green-8 py-10! sm:py-0! "
      innerWrapperClassName="grid grid-cols-1 items-center gap-5 sm:grid-cols-2 sm:gap-20"
      showTrBlDecorativelines
    >
      {/* Left: copy */}
      <div>
        <SectionHeader text="the problem" textColor="text-yellow-green" />

        <p className="text-[14px] leading-relaxed text-white md:text-[20px]">
          Every day, millions of Nigerians save in Ajo and Esusu circles, borrow
          from cooperatives, and hand thrift collectors money that never touches
          a bank.{" "}
          <span className="font-serif italic text-yellow-green">
            That trust is real.
          </span>{" "}
          The tools around it aren&apos;t. Grid Finance gives any business the
          rails to formalize, protect, and scale that trust digitally.
        </p>
      </div>

      {/* Right: photo with caption overlay */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl flex items-center justify-center">
        <Image
          src={problemImg}
          alt="A busy market street in Lagos, Nigeria"
          className="sm:max-h-[70%] sm:max-w-[70%] object-contain"
        />
      </div>
    </MarginWrapper>
  );
};

export default TheProblemSection;
