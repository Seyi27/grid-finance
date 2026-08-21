import Image, { StaticImageData } from "next/image";
import MarginWrapper from "./MarginWrapper";
import { TestimonialProps } from "../types/types";

const TestimonialPage = ({ quote, name, role, avatar }: TestimonialProps) => {
  return (
    <MarginWrapper
      outterWrapperClassName="bg-white"
      innerWrapperClassName="max-w-3xl! text-center"
    >
      <span
        className="font-serif text-6xl italic leading-none text-yellow-green"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="mt-2 font-serif text-2xl italic leading-relaxed text-dark-green sm:text-3xl">
        {quote}
      </p>

      <div className="mt-8 flex items-center justify-center gap-3">
        <div className="relative h-11 w-11 overflow-hidden rounded-full">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-dark-green">{name}</p>
          <p className="text-sm text-gray-1">{role}</p>
        </div>
      </div>
    </MarginWrapper>
  );
};

export default TestimonialPage;
