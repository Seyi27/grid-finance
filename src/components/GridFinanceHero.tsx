import MarginWrapper from "./MarginWrapper";
import SectionHeader from "./SectionHeader";

const GridFinanceHero = () => {
  const stats = [
    { value: "200+", label: "Tenants onboarded" },
    {
      value: "₦200M",
      label: "Processed in contributions and loans",
      strike: true,
    },
    { value: "99.9%", label: "Platform uptime" },
    { value: "24/7", label: "Local support" },
  ];

  return (
    <MarginWrapper
      outterWrapperClassName="bg-pale-pastel-yellow"
      innerWrapperClassName=" text-center"
    >
      {/* Eyebrow */}
      <SectionHeader
        text="built for scale, grounded in trust"
        textColor="text-green-1"
        outterClassName="justify-center"
      />

      {/* Heading */}
      <h1 className="text-[25px] leading-snug text-dark-green sm:text-[30px]">
        Grid Finance is the infrastructure layer for businesses ready to bring
        formal financial services to the millions of Nigerians who already trust
        Ajo, Esusu, and community lending.
      </h1>
      <p className="mt-3 font-serif text-2xl italic text-green-1 sm:text-3xl">
        They just haven&apos;t had it in digital form yet.
      </p>

      {/* Stats */}
      <div className="mt-15 flex flex-col items-center divide-y divide-pale-yellow lg:flex-row lg:justify-center lg:flex-start lg:divide-x lg:divide-y-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-8 py-6 text-left lg:py-0 ${i === 0 ? "lg:pl-0" : ""} ${
              i === stats.length - 1 ? "lg:pr-0" : ""
            }`}
          >
            <div className="text-4xl font-extrabold text-forest-green sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 w-25 border-t-2 border-dashed border-green-4" />
            <p className="mt-2 max-w-[10rem] text-[12px] text-gray-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </MarginWrapper>
  );
};

export default GridFinanceHero;
