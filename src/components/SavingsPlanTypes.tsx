"use client";

import { useState } from "react";
import Image from "next/image";
import { BsCheck } from "react-icons/bs";
import locked from "../assets/images/locked.png";
import savingsImg1 from "../assets/images/savings-img-1.png";
import goalBased from "../assets/images/goal-based.png";
import MarginWrapper from "./MarginWrapper";
import { Tab } from "../types/types";

const TABS: Tab[] = [
  {
    key: "fixed",
    label: "Fixed savings",
    heading: "Locked until maturity",
    description:
      "Customers commit an amount for a fixed term at a rate you define. Early-withdrawal rules, penalties, and rollover behavior are all yours to configure.",
    checklist: [
      {
        title: "Terms you control",
        description: "30 days to 24 months, with your own rate table.",
      },
      {
        title: "Automatic maturity handling",
        description: "payout or rollover, customer's choice.",
      },
      {
        title: "Predictable liquidity",
        description: "you always know what's locked and until when.",
      },
    ],
    image: { src: locked, alt: "locked" },
  },
  {
    key: "flexible",
    label: "Flexible savings",
    heading: "Save and withdraw anytime",
    description:
      `A wallet-style plan for everyday saving. Top-ups by
transfer, card, or USSD; withdrawals on demand, with
interest and incentives you decide.`,
    checklist: [
      {
        title: "Instant liquidity",
        description: "customers keep full access to their money.",
      },
      {
        title: "Loyalty boosters",
        description: "streak bonuses and tiered rates keep balances growing.",
      },
      {
        title: "Every channel",
        description:
          "app, web, agent, or USSD top-ups.",
      },
    ],
    image: { src: savingsImg1, alt: "savings" },
  },
  {
    key: "goal",
    label: "Goal-based savings",
    heading: "Saving with a purpose",
    description:
      `Customers save toward school fees, rent, inventory, or
business growth, with locked or flexible plans and
automated contributions that make progress effortless.`,
    checklist: [
      {
        title: "Named goals",
        description: "a target, a deadline, and a visible progress bar.",
      },
      {
        title: "Automated contributions",
        description: "recurring debits and standing orders.",
      },
      {
        title: "Real-time visibility",
        description: "customers watch balances grow; you watch liquidity grow.",
      },
    ],
    image: { src: goalBased, alt: "goal based" },
  },
];

const SavingsPlanTypes = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].key);
  const tab = TABS.find((t) => t.key === activeTab) ?? TABS[0];

  return (
    <MarginWrapper outterWrapperClassName="bg-pale-pastel-yellow">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-6 bg-yellow-green" />
        <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
          Plan types
        </span>
      </div>

      <h2 className="text-3xl font-bold leading-tight text-dark-green sm:text-4xl">
        Three ways to save,{" "}
        <span className="font-serif italic font-normal text-green-1">
          you set the rules.
        </span>
      </h2>

      {/* Tabs */}
      <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-pale-cream p-1">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActiveTab(t.key)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              activeTab === t.key
                ? "bg-dark-green text-white"
                : "text-gray-2 hover:text-dark-green"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="text-2xl font-bold text-dark-green">{tab.heading}</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-gray-2 font-light">
            {tab.description}
          </p>

          <ul className="mt-6 space-y-4">
            {tab.checklist.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-yellow-green">
                  <BsCheck className="text-green-1" size={14} />
                </span>
                <p className="text-sm leading-6 text-gray-2 font-light">
                  <span className="font-semibold text-dark-green">
                    {item.title}
                  </span>{" "}
                  — {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl lg:aspect-auto lg:h-[420px]">
          <Image
            src={tab.image.src}
            alt={tab.image.alt}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </MarginWrapper>
  );
};

export default SavingsPlanTypes;
