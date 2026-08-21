import MarginWrapper from "./MarginWrapper";

const PrinciplesSection = () => {
  const principles = [
    {
      number: "01",
      title: "Trust is the product, not the pitch",
      description:
        "Every feature exists to make trust between a tenant and its customers visible, not to replace it.",
    },
    {
      number: "02",
      title: "Built for how Nigeria actually pays",
      description:
        "USSD, direct debit, and cash-adjacent flows get the same priority as card rails.",
    },
    {
      number: "03",
      title: "Infrastructure, not a bank",
      description:
        "Grid Finance doesn't compete with its tenants for their customers.",
    },
  ];

  return (
    <MarginWrapper
      outterWrapperClassName="bg-pale-pastel-yellow"
      innerWrapperClassName="max-w-5xl!"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-6 bg-yellow-green" />
        <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
          How we work
        </span>
      </div>

      <h2 className="max-w-3xl text-3xl font-bold leading-tight text-dark-green sm:text-4xl">
        Principles behind{" "}
        <span className="font-serif italic font-normal text-green-1">
          every product decision.
        </span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
        {principles.map((principle) => (
          <div
            key={principle.number}
            className="border-t-2 border-dark-green pt-5"
          >
            <span className="font-serif text-lg italic text-green-1">
              {principle.number}
            </span>
            <h3 className="mt-4 text-base font-semibold text-dark-green">
              {principle.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-2 font-light">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </MarginWrapper>
  );
};

export default PrinciplesSection;
