"use client";

import Image from "next/image";
import logo from "../assets/svg/logo.svg";
import Link from "next/link";
import MarginWrapper from "./MarginWrapper";

const FOOTER_COLUMNS = [
  {
    heading: "Products",
    links: [
      { label: "Lending as a Service", href: "/products/lending-as-a-service" },
      { label: "Savings as a Service", href: "/products/savings-as-a-service" },
      { label: "Rounds", href: "/products/rounds" },
      // { label: "Multi-Tenancy Platform", href: "#" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Fintechs", href: "/solutions/fintechs" },
      { label: "Microfinance Banks", href: "/solutions/mfbs" },
      // { label: "Cooperatives", href: "#" },
      { label: "SMEs", href: "/solutions/smes" },
      { label: "HR & Payroll", href: "/solutions/hr-payroll" },
    ],
  },
  // {
  //   heading: "Resources",
  //   links: [
  //     { label: "Blog", href: "#" },
  //     { label: "Help Center", href: "#" },
  //     { label: "Developer Docs", href: "#" },
  //     { label: "Case Studies", href: "#" },
  //   ],
  // },
  {
    heading: "Company",
    links: [
      { label: "About Grid Finance", href: "/company/about-us" },
      // { label: "Careers", href: "#" },
      { label: "Contact Us", href: "/company/contact" },
      {
        label: "support@thegridfinance.com",
        href: "mailto:support@thegridfinance.com",
      },
    ],
  },
];

const Footer = () => {
  return (
    <MarginWrapper outterWrapperClassName="border-t border-pale-yellow bg-pale-white">
      <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
        {/* Brand column */}
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="Logo" className="w-35" />
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-2 font-light">
            Multi-tenant financial infrastructure for Nigeria's lenders, savers,
            and thrift collectors.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold tracking-wider text-gray-1 uppercase">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-dark-green hover:text-forest-green break-words"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mt-14 border-t border-pale-yellow pt-8">
        <p className="mx-auto max-w-4xl text-center text-sm italic leading-7 text-gray-1 font-light">
          Grid Finance is a financial infrastructure provider offering lending,
          savings, and contribution-circle technology to licensed and registered
          businesses operating in Nigeria. Grid Finance is not itself a lender,
          deposit-taking institution, or thrift collector, and does not directly
          offer financial products to end consumers. All lending, savings, and
          Rounds products are issued and operated by the individual tenant
          businesses using the Grid Finance platform, in line with applicable
          CBN regulations. This copy is provided for informational and marketing
          purposes and should be reviewed by legal and compliance counsel before
          publication.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 flex flex-col-reverse items-center gap-4 sm:flex-row sm:justify-between font-light">
        <p className="text-sm text-gray-1">
          © Grid Finance. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-gray-1 hover:text-dark-green">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-1 hover:text-dark-green">
            Terms of Use
          </a>
        </div>
      </div>
    </MarginWrapper>
  );
};

export default Footer;
