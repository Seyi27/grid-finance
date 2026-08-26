import Image from "next/image";
import { MarginWrapperProps } from "../types/types";
import decorativeLineBottomLeft from "../assets/svg/decorative-lines-bl.svg";
import decorativeLineTopRight from "../assets/svg/decorative-lines-tr.svg";
import decorativeLineBottomRight from "../assets/svg/decorative-lines-br.svg";

const MarginWrapper = ({
  outterWrapperClassName,
  innerWrapperClassName,
  children,
  showTrBlDecorativelines,
  showBrDecorativelines,
}: MarginWrapperProps) => {
  return (
    <div
      className={`
      ${outterWrapperClassName} 
      ${(showTrBlDecorativelines || showBrDecorativelines) && "relative"} py-10 sm:py-20
      `}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 ${innerWrapperClassName} ${(showTrBlDecorativelines || showBrDecorativelines) && "relative z-1"}`}
      >
        {children}
      </div>

      {/* Decorative line art — top right */}
      {showTrBlDecorativelines && (
        <>
          <Image
            src={decorativeLineTopRight}
            alt=""
            aria-hidden="true"
            width={700}
            height={400}
            className="z-0 pointer-events-none absolute -top-0 right-0 w-[45%] max-w-xl opacity-90"
          />

          {/* Decorative line art — bottom left */}
          <Image
            src={decorativeLineBottomLeft}
            alt=""
            aria-hidden="true"
            width={700}
            height={400}
            className="z-0 pointer-events-none absolute bottom-0 left-0 w-[40%] max-w-lg opacity-90"
          />
        </>
      )}

      {/* Decorative line art — bottom right */}
      {showBrDecorativelines && (
        <Image
          src={decorativeLineBottomRight}
          alt=""
          aria-hidden="true"
          width={700}
          height={400}
          className="z-0 pointer-events-none absolute -bottom-0 right-0 w-[45%] max-w-xl opacity-90"
        />
      )}
    </div>
  );
};

export default MarginWrapper;
