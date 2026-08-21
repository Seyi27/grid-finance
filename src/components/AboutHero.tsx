import Image from "next/image";
import aboutImgHero from "../assets/images/about-img-hero.png";
import MarginWrapper from "./MarginWrapper";

const AboutHero = () => {
  return (
    <div>
      <MarginWrapper
        outterWrapperClassName="bg-white"
        innerWrapperClassName="max-w-3xl!"
      >
        {/* Centered intro */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-yellow-green" />
            <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
              About Grid Finance
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-dark-green sm:text-4xl">
            We didn&apos;t invent how <br />
            Nigerians save and borrow.
            <br />
            <span className="font-serif italic font-normal text-green-1">
              We built the rails under it.
            </span>
          </h1>

          <p className="mx-auto mt-3 text-sm leading-7 text-gray-1 font-light">
            Ajo, Esusu, and cooperative lending already work. They were just
            never built for scale.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative mt-14 aspect-[16/7] mx-auto w-full overflow-hidden rounded-3xl">
          <Image
            src={aboutImgHero}
            alt="Lagos waterfront skyline"
            fill
            className="object-cover"
            priority
          />
        </div>
      </MarginWrapper>

      <MarginWrapper outterWrapperClassName="bg-white py-0! pb-10!">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-yellow-green" />
              <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
                Why we exist
              </span>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-dark-green sm:text-3xl">
              A huge amount of financial activity in Nigeria already moves
              through systems that <br />
              <span className="font-serif italic font-normal text-green-1">
                work on trust.
              </span>
            </h2>
          </div>

          <div className="space-y-3 leading-7 text-sm text-gray-1 font-light">
            <p>
              Market associations, cooperatives, salary advances between
              colleagues, a thrift collector who&apos;s been doing the rounds
              for years. Grid Finance started from a simple decision, the
              opportunity wasn&apos;t to replace those systems with another app,
              but to give any business, bank, fintech, cooperative, or SME, the
              infrastructure to run them digitally, under their own name, in
              days instead of years.
            </p>
            <p>
              Every tenant on Grid Finance runs on the same secure, compliant
              infrastructure, with their own brand, their own rules, and their
              customer data kept fully separate from every other tenant on the
              platform.
            </p>
          </div>
        </div>
      </MarginWrapper>
    </div>
  );
};

export default AboutHero;
