import AboutHero from "@/src/components/AboutHero";
import CtaBanner from "@/src/components/CtaBanner";
import PrinciplesSection from "@/src/components/PrinciplesSection";
import SplitFeature from "@/src/components/SplitFeatures";
import React from "react";
import roundsImg1 from "../../../assets/images/rounds-img-1.png";

const AboutUsPage = () => {
  return (
    <div>
      <AboutHero />

      <PrinciplesSection />

      <SplitFeature
        backgroundColor="bg-white"
        imagePosition="left"
        eyebrow="Our Team"
        heading={[
          { text: "Builders who understand" },
          {
            text: "both sides of the API.",
            variant: "accent",
          },
        ]}
        description="Grid Finance is built by engineers, compliance
specialists, and operators who've worked inside
Nigerian banks, cooperatives, and fintechs, people
who know why the notebook still exists, and what it
takes to replace it responsibly."
        // action={{
        //   label:
        //     "See open roles",
        //   href: "/rounds/cooperatives",
        //   style: "link",
        // }}
        image={{
          src: roundsImg1,
          alt: "meeting",
        }}
      />

      <CtaBanner
        eyebrow="Final Step"
        heading="Ready to build on"
        headingAccent="Grid Finance?"
        description="Whether you're launching a lending business, a savings product, or digitizing
your Ajo or Esusu group, Grid Finance gives you the infrastructure to do it
under your own brand, faster and cheaper than building it yourself."
      />
    </div>
  );
};

export default AboutUsPage;
