import CardGrid from "@/src/components/CardGrid";
import CtaBanner from "@/src/components/CtaBanner";
import FeatureGrid from "@/src/components/FeatureGrid";
import NarrativeText from "@/src/components/NarrativeText";
import SplitHero from "@/src/components/SplitHero";
import React from "react";
import {
  BsArrowRight,
  BsClock,
  BsCreditCard,
  BsRecordCircle,
  BsShieldExclamation,
  BsWindow,
} from "react-icons/bs";
import handshakeImg from "../../../assets/images/handshake.png";
import SplitFeature from "@/src/components/SplitFeatures";
import hrImg1 from "../../../assets/images/hr-img-1.png";

const FintechsPage = () => {
  return (
    <div>
      <SplitHero
        eyebrow="For Fintechs"
        heading={[
          { text: "Ship the lending product" },
          { text: "your roadmap has been putting off.", variant: "accent" },
        ]}
        description="Your engineers shouldn't be rebuilding a loan ledger. They should be shipping your app."
        // secondaryCta={{ label: "Read the Docs", href: "/docs" }}
        image={{ src: handshakeImg, alt: "Partners shaking hands" }}
      />

      <NarrativeText
        segments={[
          {
            variant: "primary",
            text: "Most fintechs already have the users, the wallet, maybe a card. What they don't have is twelve to eighteen months to build loan origination, underwriting, collections, and regulatory reporting in-house, or the compliance hire to run it once it's built.",
          },
          {
            variant: "accent",
            text: "Grid Finance sits underneath your product as infrastructure,",
          },
          {
            variant: "muted",
            break: true,
            text: "fully white-labeled, so lending or savings ships as a feature inside your app instead of a separate build.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Built for Your Stack"
        heading="What you get"
        headingAccent="underneath your app."
        items={[
          {
            icon: <BsWindow size={18} />,
            title: "Plug into your existing stack",
            description: `API-first, with webhooks for loan status, disbursement, and
repayment events, so your app stays the system of record your users
already trust.`,
          },
          {
            icon: <BsClock size={18} />,
            title: "Underwriting built for Nigerian data",
            description: `BVN and NIN verification with configurable scoring rules, instead of a
credit model built for a market with a functioning credit bureau.`,
          },
          {
            icon: <BsArrowRight size={18} />,
            title: "Collections across real channels",
            description: `Direct debit, card, bank transfer, and USSD, so repayment doesn't
depend on a user having a smartphone or a card.`,
          },
          {
            icon: <BsShieldExclamation size={18} />,
            title: "Reporting your compliance team won't dread",
            description: `CBN-aligned reporting and audit trails built in, so an audit pulls from a
system already structured for it.`,
          },
        ]}
      />

      <CardGrid
        eyebrow="What you can launch"
        heading="Three products,"
        headingAccent="one integration."
        items={[
          {
            icon: <BsArrowRight size={18} />,
            title: "Lending as a Service",
            description:
              "Payday, SME, asset finance, or salary-backed credit, with origination, disbursement, and collections under your brand.",
            linkLabel: "Explore Lending",
            linkHref: "/products/lending-as-a-service",
          },
          {
            icon: <BsRecordCircle size={18} />,
            title: "Rounds",
            description:
              "The culturally-native wedge product no foreign stack offers: digital Ajo and Esusu your market already understands.",
            linkLabel: "Explore Rounds",
            linkHref: "/products/rounds",
            highlighted: true,
          },
          {
            icon: <BsCreditCard size={18} />,
            title: "Savings as a Service",
            description:
              "Fixed, flexible, and goal-based savings that deepen engagement and fund your lending flywheel.",
            linkLabel: "Explore Savings",
            linkHref: "/products/savings-as-a-service",
          },
        ]}
      />

      <SplitFeature
        imagePosition="right"
        eyebrow="Ship Faster"
        heading={[
          { text: "Your engineers, back on" },
          { text: "your actual roadmap.", variant: "accent", break: true },
        ]}
        description="Every sprint spent on ledger reconciliation or KYC plumbing is a sprint not spent on the features that make your product worth switching to. Grid Finance's API gives your team back that time."
        // action={{ label: "Read the Docs", href: "/docs", style: "button" }}
        image={{ src: hrImg1, alt: "Team planning on a whiteboard" }}
      />

      <CtaBanner
        eyebrow="For fintech"
        heading="Talk to our team about"
        headingAccent="your fintech's lending roadmap."
        description="Whether you're launching a lending business, a savings product, or digitizing your Ajo or Esusu group, Grid Finance gives you the infrastructure to do it under your own brand, faster and cheaper than building it yourself."
      />
    </div>
  );
};

export default FintechsPage;
