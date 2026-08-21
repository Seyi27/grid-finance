import CtaBanner from "@/src/components/CtaBanner";
import FeatureGrid from "@/src/components/FeatureGrid";
import NarrativeText from "@/src/components/NarrativeText";
import SplitHero from "@/src/components/SplitHero";
import StepTimeline from "@/src/components/StepTimeline";
import React from "react";
import {
  BsArrowRight,
  BsBullseye,
  BsShieldCheck,
  BsWindow,
} from "react-icons/bs";
import shopkeeperImg from "../../../assets/images/sme-img-1.png";
import storefrontImg from "../../../assets/images/sme-img-2.png";
import marketImg from "../../../assets/images/sme-img-3.png";
import highFive from "../../../assets/images/high-five.png";
import SplitFeature from "@/src/components/SplitFeatures";

const SmesPage = () => {
  return (
    <div>
      <SplitHero
        eyebrow="For SMEs"
        heading={[
          { text: "Let your customers pay over time." },
          { text: "Let Grid Finance carry the mechanics.", variant: "accent" },
        ]}
        description="Retailers and distributors are financiers now, whether they planned to be or not."
        secondaryCta={{ label: "Talk to Our Team", href: "/company/contact" }}
        image={{ src: shopkeeperImg, alt: "Shopkeeper" }}
        collageImages={[
          { src: storefrontImg, alt: "storefront" },
          { src: marketImg, alt: "Market" },
        ]}
        floatingCard={{
          title: "Savings goal set — ₦25,000",
          subtitle: "Repeat customer · in-store",
          position: "bottom-left",
        }}
      />

      <NarrativeText
        segments={[
          {
            variant: "primary",
            text: 'Distributors already extend informal credit to retailers. Retailers already let regular customers pay "small small." Business owners already get asked for a savings plan toward a big order.',
          },
          {
            variant: "accent",
            break: true,
            text: "Grid Finance turns what SMEs are already doing informally into a structured product:",
          },
          {
            variant: "muted",
            break: true,
            text: "embedded financing or savings, sitting on top of a business that already sells something, without that business needing a lending license or a year of infrastructure work.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Two Ways to Grow"
        heading="Savings and credit, "
        headingAccent="right at the counter."
        items={[
          {
            icon: <BsArrowRight size={18} />,
            title: "Embedded checkout financing",
            description: `Offer installment or "buy now, pay small" options without extending
your own balance sheet to cover it.`,
          },
          {
            icon: <BsBullseye size={18} />,
            title: "Goal-based savings toward a purchase",
            description: `Customers save toward inventory, equipment, or a large order, with
your business as the destination for that money.`,
          },
          {
            icon: <BsWindow size={18} />,
            title: "One dashboard for every customer",
            description: `Balances, repayment status, and savings progress in one place
instead of a notebook or a spreadsheet.`,
          },
          {
            icon: <BsShieldCheck size={18} />,
            title: "Get paid on schedule",
            description: `Grid Finance handles collection and reconciliation so cash flow
doesn't depend on chasing customers.`,
          },
        ]}
      />

      <StepTimeline
        eyebrow="Getting started"
        heading="Live at the counter"
        headingAccent="in days."
        steps={[
          {
            title: "Set up your storefront",
            description:
              "Brand your savings or credit product with your shop's name and logo. Customers never see Grid Finance.",
          },
          {
            title: "Offer it at checkout",
            description:
              "Enroll customers into a savings plan or offer point-of-sale credit right when they're paying.",
          },
          {
            title: "Watch repeat visits grow",
            description:
              "Customers with money saved, or a credit line, at your shop keep coming back to spend it there.",
          },
        ]}
      />

      <SplitFeature
        imagePosition="left"
        eyebrow="Why It Works"
        heading={[
          { text: "Loyalty," },
          { text: "quantified.", variant: "accent" },
        ]}
        description="A customer with ₦40,000 saved toward their next purchase at your shop isn't going anywhere else.
Financial products turn casual buyers into your most predictable revenue."
        checklist={[
          {
            title: "",
            description: "No banking license or infrastructure required",
          },
          {
            title: "",
            description: "Set your own rates and terms per product",
          },
          {
            title: "",
            description:
              "One dashboard for every customer's balance and history",
          },
        ]}
        // action={{
        //   label:
        //     "Find out what financing your customers would actually use",
        //   href: "/rounds/cooperatives",
        //   style: "link",
        // }}
        image={{
          src: highFive,
          alt: "high five",
        }}
      />

      <CtaBanner
        eyebrow="FOR SMES"
        heading="Give your customers a reason "
        headingAccent="to come back."
        description="Launch a branded savings or credit product at the point of sale, with no banking infrastructure required."
      />
    </div>
  );
};

export default SmesPage;
