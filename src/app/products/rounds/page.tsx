import CtaBanner from "@/src/components/CtaBanner";
import Faq from "@/src/components/Faq";
import NarrativeText from "@/src/components/NarrativeText";
import SplitHero from "@/src/components/SplitHero";
import StepTimeline from "@/src/components/StepTimeline";
import React from "react";
import roundsImg1 from "../../../assets/images/rounds-img-1.png";
import RoundsSection from "@/src/components/RoundsSection";
import SplitFeature from "@/src/components/SplitFeatures";
import handshakeImg from "../../../assets/images/handshake.png";

const RoundsPage = () => {
  return (
    <div>
      <SplitHero
        eyebrow="Rounds"
        heading={[
          { text: "Ajo and Esusu," },
          { text: "reimagined", variant: "accent" },
          { text: "for a", break: true },
          { text: "digital Nigeria." },
        ]}
        description="The rotating model already works. What it's missing is a
record."
        secondaryCta={{ label: "Talk to Our Team", href: "/company/contact" }}
        image={{ src: roundsImg1, alt: "rounds" }}
        floatingCard={{
          title: "Savings goal set — ₦25,000",
          subtitle: "Round 4 of 8 · Balogun Traders Circle",
          position: "top-right",
        }}
      />

      <NarrativeText
        segments={[
          {
            variant: "primary",
            text: `For generations, Ajo, Esusu, and Adashi have run on trust, a notebook, and a collector who shows up 
every day. That trust is real, the tooling around it isn't.`,
          },
          {
            variant: "accent",
            break: true,
            text: "Rounds keeps the exact structure intact: same members, same rotation order, same contribution amount. ",
          },
          {
            variant: "muted",
            break: true,
            text: `It just puts a ledger underneath, so every contribution is logged automatically and no one has to take a collector's word for what's in the pot.`,
          },
        ]}
      />

      <RoundsSection
        eyebrow="How a Round Works"
        heading={[
          { text: "The circle everyone knows, " },
          { text: "now on rails.", variant: "accent" },
        ]}
        description="Members join a round, contribute on a set schedule, and receive payouts in rotation.
Every contribution and every payout is logged and visible to the whole circle in real time. No notebooks, no guesswork."
        list={[
          {
            title: "Daily, weekly, or market-day schedules",
            body: "the circle picks its rhythm.",
          },
          {
            title: "Automatic payout rotation",
            body: "order is agreed up front and enforced by the platform.",
          },
          {
            title: "USSD and agent friendly",
            body: "members join and contribute without a smartphone.",
          },
        ]}
      />

      <SplitFeature
        imagePosition="left"
        eyebrow="For the Collector"
        heading={[
          { text: "Still the trusted face." },
          { text: "Never the single point of failure.", variant: "accent", break:true },
        ]}
        description="Collectors don't disappear from the model, they're
central to it. Rounds gives them tools that make the job
easier, while giving every member the same visibility the
collector has always had."
        checklist={[
          {
            title: "Automated reconciliation",
            description: "no more manual notebook tallying at the end of the day.",
          },
          {
            title: "Defaulter tracking",
            description: "see who's behind before it becomes a dispute.",
          },
          {
            title: "Shared trust",
            description:
              "the ledger backs up the collector's word instead of replacing it.",
          },
        ]}
        image={{
          src: handshakeImg,
          alt: "hand shake",
        }}
      />

      <StepTimeline
        eyebrow="Getting Started"
        heading="From notebook to platform "
        headingAccent="in four steps."
        steps={[
          {
            title: "Create a circle",
            description: `Set the contribution amount,
schedule, group size, and payout
order, the same rules your
members already agree on today.`,
          },
          {
            title: "Invite members",
            description: `Members join by app, web link, or
USSD code. Everyone sees the
same circle, the same rules, the
same ledger.`,
          },
          {
            title: "Contribute on schedule",
            description: `Transfers, wallet top-ups, or agent
collection, every contribution is
logged and visible to the whole
circle instantly.`,
          },
          {
            title: "Payouts rotate",
            description: `When a round closes, the pot pays
out automatically to the next
member in rotation. On time, every
time, in full view.`,
          },
        ]}
      />

      <Faq
        eyebrow="FAQ"
        heading="Common questions"
        backgroundColor="bg-pale-pastel-yellow"
        items={[
          {
            question: "What happens if a member misses a contribution?",
            answer: "Grid Finance automatically sends a notification and reminder to the member who missed their contribution, and the rest of the round (ajo) is also notified, keeping the group informed so it can apply its own agreed follow-up. This preserves the trust and transparency traditional ajo groups rely on, even as the process moves digital.",
          },
          {
            question: "Do members need a smartphone?",
            answer: "Yes. Participating in a digital Rounds (ajo) group requires a smartphone, since members track contributions, payout schedules, and group activity directly through the app.",
          },
          {
            question: "Can an existing Ajo group move onto Rounds mid-cycle?",
            answer: "Yes. An existing ajo group can move onto Grid Finance's Rounds product mid-cycle. Our system can backdate remittance history, so the group's existing contribution record carries over instead of restarting from zero. Members do not lose track of who has paid, and the payout order stays fair and consistent.",
          },
          {
            question: "Who holds the pot between contributions and payout?",
            answer: "The pot is held by the licensed business or financial institution running the Rounds group, not by Grid Finance. As a technology provider, Grid Finance does not custody funds; we give you the system to track contributions and manage payouts, while the pot itself sits within your own regulated account structure between contribution and payout.",
          },
        ]}
      />

      <CtaBanner
        eyebrow="ROUNDS"
        heading="Formalize the trust"
        headingAccent="your community already has."
        description="Digital records, automated payouts, and a ledger everyone can see. No more
worrying that the collector runs off with the money."
      />
    </div>
  );
};

export default RoundsPage;
