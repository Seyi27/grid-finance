import CtaBanner from "@/src/components/CtaBanner";
import FeatureGrid from "@/src/components/FeatureGrid";
import NarrativeText from "@/src/components/NarrativeText";
import SplitHero from "@/src/components/SplitHero";
import StepTimeline from "@/src/components/StepTimeline";
import React from "react";
import {
  BsArrowRight,
  BsBullseye,
  BsGrid,
  BsShieldCheck,
} from "react-icons/bs";
import hrImg1 from "../../../assets/images/hr-img-1.png";

const HrPayrollPage = () => {
  return (
    <div>
      <SplitHero
        eyebrow="For HR & Payroll"
        heading={[
          {
            text: `Your staff are already borrowing against next
month's salary.`,
          },
          {
            text: "Better it goes through you.",
            break: true,
            variant: "accent",
          },
        ]}
        description="A benefit that also keeps people out of a loan shark's
office."
        secondaryCta={{ label: "Talk to Our Team", href: "/company/contact" }}
        image={{ src: hrImg1, alt: "hr" }}
      />

      <NarrativeText
        segments={[
          {
            variant: "primary",
            text: "When money runs out before the month does, employees find a way: an informal moneylender, a salary advance that becomes an awkward ask, or a debt they don't mention until it's a problem.",
          },
          {
            variant: "accent",
            break: true,
            text: "Grid Finance lets an employer or payroll platform offer salary-backed loans",
          },
          {
            variant: "muted",
            break: true,
            text: `and automatic savings as a benefit, with repayment tied directly to payroll while HR never has to touch 
underwriting or collections to offer it.`,
          },
        ]}
      />

      <FeatureGrid
        eyebrow="What You Add"
        heading="A benefit your payroll platform"
        headingAccent="gets credit for."
        breakLine
        items={[
          {
            icon: <BsArrowRight size={18} />,
            title: "Salary-backed loans deducted at payroll",
            description: `Repayment happens automatically at the source, so it never depends
on someone remembering to pay.`,
          },
          {
            icon: <BsBullseye size={18} />,
            title: "Payroll savings plans",
            description: `Employees direct part of each paycheck into a savings goal without a
separate app or manual transfer.`,
          },
          {
            icon: <BsGrid size={18} />,
            title: "HR sees status, not decisions",
            description: `Enrollment and repayment visibility for HR, while underwriting and credit
decisions stay out of their hands entirely.`,
          },
          {
            icon: <BsShieldCheck size={18} />,
            title: "Works alongside your payroll system",
            description: `Grid Finance adds the benefit; it doesn't ask you to replace the
payroll software you already run.`,
          },
        ]}
      />

      <StepTimeline
        eyebrow="How It Works"
        heading="From payroll integration "
        headingAccent="to first payout."
        steps={[
          {
            title: "Connect payroll",
            description: `Integrate via API so income and
deduction data flows automatically
each pay cycle.`,
          },
          {
            title: "Set the rules",
            description: `Define eligibility, loan caps, and
default savings amounts for your
workforce.`,
          },
          {
            title: "Employees opt in",
            description: `Employees apply for a loan or set a
savings goal directly from your
platform's interface.`,
          },
          {
            title: "Payroll handles the rest",
            description: `Repayments and contributions
deduct automatically at the next
pay run, with no chasing required.`,
          },
        ]}
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

export default HrPayrollPage;
