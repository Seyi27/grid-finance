"use client"

import Link from "next/link";
import { BsCheck } from "react-icons/bs";
import WaitlistModal from "./WaitlistModal";
import { useState } from "react";

const PricingSection = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-yellow-green" />
            <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
              Pricing
            </span>
          </div>
          <h2 className="text-[35px] font-bold leading-tight text-dark-green sm:text-[40px] mx-auto max-w-2xl">
            Simple pricing,{" "}
            <span className="font-serif italic font-normal text-green-1">
              whatever you&apos;re launching.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-1 font-light">
            Every plan runs on the same multi-tenant infrastructure: lending,
            savings, and Rounds, fully branded as your own. Pick a tier to
            start; talk to us for volume pricing as you scale.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Starter */}
          <div className="flex h-full flex-col md:w-[50vw] md:mx-auto lg:w-full lg:m-0 rounded-3xl border border-pale-cream p-8">
            <h3 className="text-lg font-bold text-dark-green">Starter</h3>
            <p className="mt-1 text-sm text-gray-1 font-light">
              For a single product and a growing member base
            </p>

            <p className="mt-8 text-4xl font-extrabold text-dark-green">
              Contact us
            </p>
            <div className="mt-1 border-t-4 border-dashed border-green-2 pt-1 text-xs text-gray-1 font-extralight">
              Pay-as-you-transact pricing
            </div>

            <ul className="mt-6 flex-1 space-y-4">
              {[
                "One product: Lending, Savings, or Rounds",
                "KYC, BVN/NIN verification included",
                "Web and mobile channels",
                "Standard reporting dashboard",
                "Email support",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-tint-green">
                    <BsCheck className="text-green-1" size={14} />
                  </span>
                  <span className="text-sm text-gray-2 font-light">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href=""
              onClick={() => setWaitlistOpen(true)}
              className="mt-8 block rounded-xl border border-pale-cream py-3 text-center text-sm font-semibold text-dark-green transition-colors hover:bg-light-cream"
            >
              Get Started Free
            </Link>
          </div>

          {/* Growth — highlighted */}
          <div className="relative flex h-full flex-col md:w-[50vw] md:mx-auto lg:w-full lg:m-0 rounded-3xl bg-dark-green p-8 pt-10">
            <span className="absolute -top-3 left-8 rounded-full bg-yellow-green px-3 py-1 text-xs font-semibold text-dark-green">
              Most Popular
            </span>

            <h3 className="text-lg font-bold text-white">Growth</h3>
            <p className="mt-1 text-sm text-white/60 font-light">
              For teams launching multiple products
            </p>

            <p className="mt-8 text-4xl font-extrabold text-white">
              Contact us
            </p>
            <div className="mt-1 border-t-4 border-dashed border-yellow-green pt-1 text-xs text-white/60 font-extralight">
              Volume-based pricing, negotiated per tenant
            </div>

            <ul className="mt-6 flex-1 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-lime-green">
                  <BsCheck className="text-yellow-green" size={14} />
                </span>
                <span className="text-sm font-semibold text-white">
                  Everything in Starter
                </span>
              </li>
              {[
                "All three products: Lending, Savings, Rounds",
                "USSD and API channels",
                "Credit bureau & blacklist integrations",
                "Priority support",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <BsCheck className="text-yellow-green" size={14} />
                  </span>
                  <span className="text-sm text-white/80 font-light">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href=""
              onClick={() => setWaitlistOpen(true)}
              className="mt-8 block rounded-xl bg-yellow-green py-3 text-center text-sm font-semibold text-dark-green transition-colors hover:bg-[#b9d64f]"
            >
              Get Started Free
            </Link>
          </div>

          {/* Enterprise */}
          <div className="flex h-full flex-col md:w-[50vw] md:mx-auto lg:w-full lg:m-0 rounded-3xl border border-pale-cream p-8">
            <h3 className="text-lg font-bold text-dark-green">Enterprise</h3>
            <p className="mt-1 text-sm text-gray-1 font-light">
              For banks, large cooperatives & high-volume tenants
            </p>

            <p className="mt-8 text-4xl font-extrabold text-dark-green">
              Custom
            </p>
            <div className="mt-1 border-t-4 border-dashed border-yellow-green pt-1 text-xs text-gray-1 font-extralight">
              Tailored to your transaction volume
            </div>

            <ul className="mt-6 flex-1 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-tint-green">
                  <BsCheck className="text-forest-green" size={14} />
                </span>
                <span className="text-sm font-semibold text-dark-green">
                  Everything in Growth
                </span>
              </li>
              {[
                "Dedicated account manager",
                "Custom compliance & reporting workflows",
                "SLA-backed uptime guarantee",
                "24/7 local support line",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-tint-green">
                    <BsCheck className="text-forest-green" size={14} />
                  </span>
                  <span className="text-sm text-gray-2 font-light">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/company/contact"
              className="mt-8 block rounded-xl border border-pale-cream py-3 text-center text-sm font-semibold text-dark-green transition-colors hover:bg-light-cream"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>

        {/* <p className="mt-8 text-center text-sm italic text-gray-1">
          Placeholder tiers — final pricing structure to be confirmed with
          the commercial team before publishing.
        </p> */}
      </div>

      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </section>
  );
};

export default PricingSection;
