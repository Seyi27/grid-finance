import CtaBanner from "@/src/components/CtaBanner";
import Faq from "@/src/components/Faq";
import FeatureGrid from "@/src/components/FeatureGrid";
import NarrativeText from "@/src/components/NarrativeText";
import SplitHero from "@/src/components/SplitHero";
import StepTimeline from "@/src/components/StepTimeline";
import React from "react";
import { BsArrows, BsClock, BsGrid, BsShieldCheck } from "react-icons/bs";
import lendingImg1 from "../../../assets/images/lending-img-1.png";
import SplitFeature from "@/src/components/SplitFeatures";
import cardPayment from "../../../assets/images/card-payment.png";

const LendingAsAServicePage = () => {
  return (
    <div>
      <SplitHero
        eyebrow="Lending as a Service"
        heading={[
          {
            text: `Launch a full lending business`,
          },
          {
            text: "without writing a line.",
            break: true,
            variant: "accent",
          },
          {
            text: "of core banking code.",
            break: true,
          },
        ]}
        description="Configurable enough to be yours. Solid enough to pass an audit."
        secondaryCta={{ label: "Talk to Our Team", href: "/company/contact" }}
        image={{ src: lendingImg1, alt: "lending" }}
      />

      <NarrativeText
        segments={[
          {
            variant: "primary",
            text: `A "full lending business" means origination and underwriting, disbursement, collections, and reporting, not just an approval screen.`,
          },
          {
            variant: "accent",
            text: "Grid Finance covers all four, end to end, across web, mobile, USSD, and API, with ",
          },
          {
            variant: "muted",
            break: true,
            text: `every borrower's KYC, BVN, and NIN verification handled before a naira moves.`,
          },
        ]}
      />

      <FeatureGrid
        eyebrow="Everything Included"
        heading="The whole lending stack,"
        headingAccent="one dashboard."
        items={[
          {
            icon: <BsShieldCheck size={18} />,
            title: "Loan origination and underwriting",
            description: `Configurable credit scoring, KYC/BVN/NIN verification, and
decisioning rules built for the Nigerian credit landscape. Set your
own risk tiers and approval thresholds per loan product instead of
accepting one fixed model.`,
          },
          {
            icon: <BsArrows size={18} />,
            title: "Disbursement and collections",
            description: `Direct debit, card, bank transfer, and USSD repayment channels that
meet borrowers where they are, including borrowers without a
smartphone.`,
          },
          {
            icon: <BsGrid size={18} />,
            title: "Product flexibility",
            description: `Design payday loans, asset finance, SME loans, or salary-backed
credit, all from one dashboard, without a separate build for each
product line.`,
          },
          {
            icon: <BsClock size={18} />,
            title: "Portfolio visibility and reporting",
            description: `Real-time portfolio-at-risk tracking and CBN-aligned reporting
formats, so an audit pulls from a system built for it instead of a
spreadsheet assembled the week before.`,
          },
        ]}
      />

      <SplitFeature
        backgroundColor="bg-white"
        imagePosition="left"
        eyebrow="Built For Real Borrowers"
        heading={[
          { text: "Credit that meets people" },
          { text: "where they already are.", variant: "accent", break: true },
        ]}
        description="Most borrowing in Nigeria doesn't start with a loan app. It starts at a market 
stall, a shop counter, a salary that lands mid-month short. Grid Finance's 
channels are built for that reality, not around it."
        checklist={[
          {
            title: "USSD-first design",
            description:
              "approval and disbursement without a smartphone or data plan.",
          },
          {
            title: "Point-of-sale credit",
            description:
              "offer financing at the exact moment a customer needs it.",
          },
          {
            title: "Alternative data scoring",
            description:
              "decision borrowers with thin or no credit-bureau history.",
          },
        ]}
        // action={{
        //   label:
        //     "See the loan book in action",
        //   href: "/rounds/cooperatives",
        //   style: "link",
        // }}
        image={{
          src: cardPayment,
          alt: "card payment",
        }}
      />

      <StepTimeline
        eyebrow="How It Works"
        heading="From signup to first loan "
        backgroundColor="bg-pale-pastel-yellow"
        headingAccent="in days."
        steps={[
          {
            title: "Configure your products",
            description: `Define loan types, interest rates,
tenors, and decisioning rules from
your dashboard, with no code
required.`,
          },
          {
            title: "Onboard and verify",
            description: `Borrowers apply on your branded
web, mobile, or USSD channel.
KYC, BVN, and NIN checks run
automatically.`,
          },
          {
            title: "Disburse in minutes",
            description: `Approved loans hit borrower
accounts by bank transfer or wallet,
logged and reconciled in real time.`,
          },
          {
            title: "Collect and report",
            description: `Direct debits and USSD repayments
flow in on schedule. CBN-aligned
reports are one click away.`,
          },
        ]}
      />

      <Faq
        eyebrow="FAQ"
        heading="Common questions"
        items={[
          {
            question: "Do I need my own lending license to use Grid Finance?",
            answer: "Yes. Lending and deposit-taking sit in a highly regulated space, so Grid Finance is built for licensed, or actively licensing, financial institutions: Microfinance Banks, Cooperatives, licensed Lending Companies, and similar regulated entities. If your license is still in progress, you can still get started. Onboarding captures your regulator and expected licensing timeline, so you can set up your account and prepare to go live as your licensing process completes.",
          },
          {
            question: "How fast can I go live?",
            answer: "As fast as you are. Once your application is approved, going live is largely a function of your own readiness: how quickly you complete your compliance documentation, configure your products, and finish any integration work. Businesses with straightforward products and documentation in order are often live within days; more complex, multi-product setups naturally take a little longer.",
          },
          {
            question: "Which repayment channels are supported?",
            answer: "Grid Finance supports the full range of repayment channels relevant across African markets: bank transfer, direct debit/auto-debit, card payments, mobile money, USSD (for customers without smartphones or reliable data), and cash collection through agent networks. This flexibility means your customers can repay however is most convenient for them, without you needing to integrate each channel separately.",
          },
          {
            question: "Can I bring my own credit scoring rules?",
            answer: "Yes. Our underwriting engine is built to be configurable, so you can bring your own credit scoring rules, risk thresholds, and decisioning logic rather than being locked into a one-size-fits-all model. This lets you underwrite based on the realities of your specific customer base and market.",
          },
        ]}
      />

      <CtaBanner
        eyebrow="Lending as a Service"
        heading="Your lending business,"
        headingAccent="live in days."
        description="Launch payday loans, SME credit, asset finance, or salary-backed lending
under your own brand, on infrastructure that already speaks CBN."
      />
    </div>
  );
};

export default LendingAsAServicePage;
