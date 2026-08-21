import CtaBanner from "@/src/components/CtaBanner";
import Faq from "@/src/components/Faq";
import FeatureGrid from "@/src/components/FeatureGrid";
import NarrativeText from "@/src/components/NarrativeText";
import React from "react";
import { BsArrow90DegRight, BsBullseye, BsEye, BsStar } from "react-icons/bs";
import savingsImg1 from "../../../assets/images/savings-img-1.png";
import SplitHero from "@/src/components/SplitHero";
import cooperativeMembers from "../../../assets/images/cooperative-members.png";
import SplitFeature from "@/src/components/SplitFeatures";
import SavingsPlanTypes from "@/src/components/SavingsPlanTypes";

const SavingsAsAServicePage = () => {
  return (
    <div>
      <SplitHero
        eyebrow="Savings as a Service"
        heading={[
          {
            text: `Give your customers a 
reason to save with you, `,
          },
          {
            text: "not under their mattress.",
            break: true,
            variant: "accent",
          },
        ]}
        description="Savings only works if people can see it working."
        secondaryCta={{ label: "Talk to Our Team", href: "/company/contact" }}
        image={{ src: savingsImg1, alt: "savings" }}
      />

      <NarrativeText
        segments={[
          {
            variant: "primary",
            text: `The goals people actually save toward are specific: school fees for next term, restocking a shop, next 
year's rent, not an abstract savings balance.`,
          },
          {
            variant: "accent",
            text: "Grid Finance's Savings as a Service is built around that:",
          },
          {
            variant: "muted",
            break: true,
            text: `locked or flexible plans tied to a real goal, funded automatically, visible to the customer the moment a contribution lands.`,
          },
        ]}
      />

      <SavingsPlanTypes />

      <FeatureGrid
        eyebrow="Built In"
        heading="Everything a savings product needs"
        backgroundColor="bg-white"
        items={[
          {
            icon: <BsBullseye size={18} />,
            title: "Goal-based savings",
            description: `Customers save toward school fees, rent, inventory, or business
growth, with locked or flexible plans depending on the goal.`,
          },
          {
            icon: <BsArrow90DegRight size={18} />,
            title: "Automated contributions",
            description: `Recurring debits, standing orders, and wallet top-ups, so saving
doesn't depend on someone remembering to do it manually.`,
          },
          {
            icon: <BsStar size={18} />,
            title: "Interest and incentives",
            description: `Set your own rates, bonuses, and loyalty rewards to keep customers
saving with you instead of moving funds elsewhere.`,
          },
          {
            icon: <BsEye size={18} />,
            title: "Real-time visibility",
            description: `Customers see their balance and progress the moment a contribution
lands, not after a monthly statement.`,
          },
        ]}
      />

      <SplitFeature
        eyebrow="Built For Real Savers"
        heading={[
          { text: "Saving that fits" },
          { text: "around a real income.", variant: "accent" },
        ]}
        description="Most saving in Nigeria happens in small, frequent
amounts: a few thousand naira after a good market
day, not a fixed sum on the 1st. Grid Finance's savings
rails are built for that rhythm."
        checklist={[
          {
            title: "Micro-contributions",
            description:
              "save in amounts as small as ₦500, as often as daily.",
          },
          {
            title: "Agent and USSD top-ups",
            description: "no smartphone or bank app required.",
          },
          {
            title: "Visible progress",
            description:
              "every naira saved shows up against the goal, instantly.",
          },
        ]}
        image={{
          src: cooperativeMembers,
          alt: "Women meeting at a cafe table",
        }}
      />

      <Faq
        eyebrow="FAQ"
        heading="Common questions"
        items={[
          {
            question: "Who sets the interest rates?",
            answer: "You do. As the licensed business or financial institution, you set your own interest rates. Grid Finance provides the infrastructure (loan origination, disbursement, repayment tracking), but pricing decisions like interest rates stay entirely in your control, since you carry the regulatory and credit risk.",
          },
          {
            question: "Does Grid Finance hold customer funds?",
            answer: "No. Grid Finance is a technology provider, not a deposit-taking institution. We do not hold or custody your customers' funds at any point. Instead, we give you the infrastructure to move, track, and manage your customers' deposits and repayments securely within your own regulated structure.",
          },
          {
            question: "Can savings and lending share one customer profile?",
            answer: "Yes. Grid Finance uses a unified customer data model, so a single profile can carry both a savings relationship and a lending relationship. Deposit history, repayment behavior, and balances all sit under one record, which also makes cross-product underwriting and reporting far simpler.",
          },
        ]}
      />

      <CtaBanner
        eyebrow="Savings as a Service"
        heading="Launch savings your customers"
        headingAccent="actually keep."
        description="Fixed, flexible, and goal-based savings, fully branded, fully compliant, live in days."
      />
    </div>
  );
};

export default SavingsAsAServicePage;
