import CardGrid from "@/src/components/CardGrid";
import CtaBanner from "@/src/components/CtaBanner";
import FeatureGrid from "@/src/components/FeatureGrid";
import NarrativeText from "@/src/components/NarrativeText";
import SplitHero from "@/src/components/SplitHero";
import React from "react";
import {
  BsArrowRight,
  BsBan,
  BsClock,
  BsCreditCard,
  BsRecordCircle,
  BsShieldExclamation,
} from "react-icons/bs";
import handshakeImg from "../../../assets/images/handshake.png";
import SplitFeature from "@/src/components/SplitFeatures";
import cooperativeMembers from "../../../assets/images/cooperative-members.png";

const MfbsPage = () => {
  return (
    <div>
      <SplitHero
        eyebrow="For MFBs, Cooperatives & Thrift Groups"
        heading={[
          { text: "The register your treasurer keeps in an exercise book," },
          { text: "digitized.", variant: "accent", break: true },
        ]}
        description="Every cooperative eventually outgrows a notebook. Grid
Finance is what it grows into."
        secondaryCta={{ label: "Talk to Our Team", href: "/company/contact" }}
        image={{ src: handshakeImg, alt: "Partners shaking hands" }}
      />

      <NarrativeText
        segments={[
          {
            variant: "primary",
            text: "Most cooperatives and thrift groups run on trust plus a physical ledger: members contributing by cash or bank transfer, screenshots dropped in a WhatsApp group as proof, a treasurer reconciling everything by hand at month end.",
          },
          {
            variant: "accent",
            break: true,
            text: "It works, until membership grows past what one person can track,",
          },
          {
            variant: "muted",
            text: "or someone asks a question no one can answer fast enough. Grid Finance puts the same contribution structure online: every contribution logged, every payout visible, without asking your group to change how it already operates.",
          },
        ]}
      />

      <FeatureGrid
        eyebrow="The reality today"
        heading="Notebooks fail in ways"
        headingAccent="members remember."
        columns={3}
        breakLine
        items={[
          {
            icon: <BsShieldExclamation size={18} />,
            title: "Disputes with no record",
            description: `A missed page, a smudged entry, a
disagreement about who paid what, and
no independent record to settle it.`,
            iconBgColor: "#FCE9E7",
            iconColor: "#C24A3B",
          },
          {
            icon: <BsClock size={18} />,
            title: "Manual reconciliation",
            description: `Hours spent every week tallying
contributions and loan repayments by
hand instead of growing the cooperative.`,
            iconBgColor: "#FBEEDC",
            iconColor: "#B87A1E",
          },
          {
            icon: <BsBan size={18} className="rotate-[40deg]" />,
            title: "No path to scale",
            description: `A cooperative that works for 200 members
at a notebook's pace breaks down
completely at 2,000.`,
            iconBgColor: "#FBEEDC",
            iconColor: "#B87A1E",
          },
        ]}
      />

      <SplitFeature
        backgroundColor="bg-white"
        imagePosition="left"
        eyebrow="What Changes"
        heading={[
          { text: "Same cooperative," },
          { text: "digital ledger.", variant: "accent", break: true },
        ]}
        description="Grid Finance doesn't replace your cooperative's structure. It gives your existing structure a ledger nobody can dispute, a dashboard for the executive committee, and channels members already know how to use."
        checklist={[
          {
            title: "Digitize your existing structure",
            description:
              "Rounds keeps your order of collection, your members, and your pot. It doesn't force anyone onto a generic savings app.",
          },
          {
            title: "Visibility for every member",
            description:
              'No one has to ask "did my contribution go through" in the group chat. It\'s logged the moment it lands.',
          },
          {
            title: "Lending tools for co-ops that also lend",
            description:
              "The same underwriting and collections engine used by licensed MFBs, sized for a member-lending cooperative.",
          },
          {
            title: "Your name on every screen",
            description:
              "Members see your association's brand. Grid Finance runs underneath, out of view.",
          },
        ]}
        // action={{
        //   label:
        //     "See how a cooperative goes digital without losing what makes it work",
        //   href: "/rounds/cooperatives",
        //   style: "link",
        // }}
        image={{
          src: cooperativeMembers,
          alt: "Women meeting at a cafe table",
        }}
      />

      <CardGrid
        eyebrow="Built for this"
        heading="Start with Rounds."
        backgroundColor="bg-pale-pastel-yellow"
        headingAccent="Add lending when ready."
        items={[
          {
            icon: <BsRecordCircle size={18} />,
            title: "Rounds",
            description:
              "Digital Ajo and Esusu: the fastest way for an existing group to go digital without changing how it operates.",
            linkLabel: "Explore Rounds",
            linkHref: "/products/rounds",
            highlighted: true,
          },
          {
            icon: <BsArrowRight size={18} />,
            title: "Lending as a Service",
            description:
              "Automate the loan book your cooperative already runs: from origination and disbursement to CBN-aligned reporting.",
            linkLabel: "Explore Lending",
            linkHref: "/products/lending-as-a-service",
          },
          {
            icon: <BsCreditCard size={18} />,
            title: "Savings as a Service",
            description:
              "Offer fixed and goal-based savings products alongside your thrift operations, on the same dashboard.",
            linkLabel: "Explore Savings",
            linkHref: "/products/savings-as-a-service",
          },
        ]}
      />

      <CtaBanner
        eyebrow="For MFBs & Cooperatives"
        heading="Give your notebook a"
        headingAccent="digital backbone."
        description="Keep every member relationship exactly as it is today, just with records
nobody can dispute and reconciliation that happens automatically."
      />
    </div>
  );
};

export default MfbsPage;
