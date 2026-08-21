import CtaBanner from "@/src/components/CtaBanner";
import Faq from "@/src/components/Faq";
import PricingComparisonTable from "@/src/components/PricingComparisonTable";
import PricingSection from "@/src/components/PricingSection";
import React from "react";

const PricingPage = () => {
  return (
    <div>
      <PricingSection />
      
      <PricingComparisonTable />

      <Faq
        eyebrow="FAQ"
        heading="Pricing questions"
        items={[
          {
            question: "Is pricing usage-based or a flat monthly fee?",
            answer: "Grid Finance uses a hybrid model: a flat monthly platform fee plus value-based, usage pricing tied to API call volume. The usage component varies by business category and use case. A savings-led cooperative and a high-volume digital lender consume the platform differently, so their pricing tiers reflect that. This keeps the entry cost predictable for smaller institutions while scaling fairly as a business grows.",
          },
          {
            question: "Can I add products later without changing plans?",
            answer: "Not quite. Our plans are tiered around specific use cases and the pricing that goes with them, so adding a new product to your account is effectively a plan change rather than a simple add-on. For example, moving from savings-only to savings-plus-lending changes your usage profile (more API calls, more compliance touchpoints), so it is priced as part of an upgraded plan. Our team will guide you through the transition so there is no disruption to your existing customers.",
          },
          {
            question: "Do you offer discounts for cooperatives and MFBs?",
            answer: "We do not currently offer discounts by institution type. Instead, we run a referral incentive program: when you refer another business to Grid Finance, you earn a credit that can be applied directly on the platform. It is our way of rewarding partners who help grow the network, including cooperatives and MFBs.",
          },
          {
            question: "Is there a setup or integration fee?",
            answer: "There is no compulsory setup fee. Onboarding is designed to be self-serve and straightforward. That said, we recognize many businesses are stretched thin and may want hands-on help with implementation: API integration, product configuration, staff training, and so on. For those who want it, we offer optional, paid implementation support, priced as a one-time fee rather than a blanket requirement.",
          },
        ]}
      />

      <CtaBanner
        eyebrow="Ready When You Are"
        heading="Not sure which tier"
        headingAccent="fits your business"
        description="Talk to our team about your transaction volume and product mix, we'll help
you find the right starting point."
      />
    </div>
  );
};

export default PricingPage;
