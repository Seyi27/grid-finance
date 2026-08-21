import CtaBanner from "../components/CtaBanner";
import TestimonialPage from "../components/Testimonial";
import testimonialImg from "../assets/images/testimonial-img.png";
import GridFinanceHero from "../components/GridFinanceHero";
import MultiTenancySection from "../components/MultitenancySection";
import WhyGridFinanceSection from "../components/WhyGridFinanceSection";
import WhoGridFinanceIsForSection from "../components/WhoGridFinanceIsForSection";
import LendingAsAServiceSection from "../components/LendingAsAServiceSection";
import SavingsAsAServiceSection from "../components/SavingsAsAServiceSection";
import RoundsSection from "../components/RoundsSection";
import TheProblemSection from "../components/TheProblemSection";
import HeroInfrastructureSection from "../components/HeroInfrastructureSection";

const HomePage = () => {
  return (
    <div>
      <HeroInfrastructureSection />

      <TheProblemSection />

      <LendingAsAServiceSection />

      <SavingsAsAServiceSection />

      <RoundsSection
        eyebrow="ROUNDS"
        heading={[
          { text: "Ajo and Esusu," },
          { text: "reimagined", variant: "accent" },
          { text: "for a digital Nigeria." },
        ]}
        description="For generations, Ajo, Esusu, and Adashi have run on trust, a
notebook, and a collector who shows up every day. Rounds
takes that same rotating contribution model, the one
market women, artisans, and traders across Nigeria already
know and use, and makes it digital, transparent, and
impossible to disappear with."
      />

      <MultiTenancySection />

      <WhyGridFinanceSection />

      <WhoGridFinanceIsForSection />

      <GridFinanceHero />

      <TestimonialPage
        quote="Grid Finance let us take our Esusu group digital in a week. Members trust it more than the old notebook ever earned, because now everyone can see everything."
        name="Adebayo Jane"
        // role="AB Microfinance Bank"
        avatar={testimonialImg}
      />

      <CtaBanner
        eyebrow="Final step"
        heading="Ready to build on"
        headingAccent="Grid Finance?"
        description="Whether you're launching a lending business, a savings product, or digitizing your Ajo or Esusu group, Grid Finance gives you the infrastructure to do it under your own brand, faster and cheaper than building it yourself."
      />
    </div>
  );
};

export default HomePage;
