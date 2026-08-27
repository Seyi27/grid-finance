"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { BsChevronDown, BsList, BsX } from "react-icons/bs";
import MenuSidebar from "./MenuSidebar";
import { NavItemsType } from "../types/types";
import Link from "next/link";
import MarginWrapper from "./MarginWrapper";
import WaitlistModal from "./WaitlistModal";

const NAV_ITEMS = [
  {
    label: "Solutions",
    items: [
      { label: "For Fintechs", href: "/solutions/fintechs" },
      {
        label: "For MFBs, Cooperatives and Thrift Groups",
        href: "/solutions/mfbs",
      },
      { label: "For SMEs", href: "/solutions/smes" },
      { label: "For HR & Payroll", href: "/solutions/hr-payroll" },
    ],
  },
  {
    label: "Products",
    items: [
      {
        label: "Lending as a service",
        description: "Originate, disburse and collect under  your brand",
        href: "/products/lending-as-a-service",
      },
      {
        label: "Savings as a service",
        description: "Fixed, flexible and goal-based savings",
        href: "/products/savings-as-a-service",
      },
      {
        label: "Rounds",
        description: "Ajo & Esusu, made digital",
        href: "/products/rounds",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  // {
  //   label: "Resources",
  //   items: [
  //     { label: "Blog", href: "#" },
  //     { label: "Help center", href: "#" },
  //     { label: "Developer docs", href: "#" },
  //     { label: "Case studies", href: "#" },
  //   ],
  // },
  {
    label: "Company",
    items: [
      { label: "About us", href: "/company/about-us" },
      { label: "Contact", href: "/company/contact" },
      // { label: "Careers", href: "#" },
    ],
  },
];

const DesktopNavItem = ({ item }: { item: NavItemsType }) => {
  if (!item.items) {
    return (
      <a
        href={item.href}
        className="text-sm font-medium text-dark-green transition-colors p-2 rounded-lg hover:bg-pale-cream"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-dark-green transition-colors p-2 rounded-lg hover:bg-pale-cream"
      >
        {item.label}
        <BsChevronDown
          size={12}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      {/* Hover bridge closes the gap so the dropdown doesn't disappear on the way down */}
      <div className="absolute left-0 top-full h-2 w-full" />

      <div
        className="invisible absolute left-0 top-[calc(100%+8px)] w-56 -translate-y-1 rounded-xl border
                   border-pale-cream bg-white p-2 opacity-0 shadow-lg shadow-black/5 transition-all
                   duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
      >
        {item.items.map((sub: any) => (
          <Link
            key={sub.label}
            href={sub.href}
            className="block rounded-lg px-3 py-2 text-sm text-dark-green hover:bg-light-cream"
          >
            {sub.label}
            {sub.description && (
              <p className="text-xs text-gray-1 font-extralight">
                {sub.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <MarginWrapper
      outterWrapperClassName="fixed top-0 left-0 z-10 w-full border-b border-pale-yellow bg-pale-white py-0!"
      innerWrapperClassName="flex h-[60px] items-center justify-between"
    >
      <Link href={"/"}>
        <Image src={logo} alt="Logo" className="w-25" />
      </Link>

      {/* Desktop nav links */}
      <div className="hidden lg:flex lg:items-center lg:gap-8">
        {NAV_ITEMS.map((item) => (
          <DesktopNavItem key={item.label} item={item} />
        ))}
      </div>

      {/* Desktop right actions */}
      <div className="hidden lg:flex sm:items-center lg:gap-6">
        <a
          href="#"
          className="text-sm font-medium text-dark-green transition-colors"
          onClick={() => setWaitlistOpen(true)}
        >
          Sign in
        </a>
        <a
          href="#"
          className="rounded-lg bg-forest-green px-4 py-2.5 text-sm font-medium text-white hover:bg-jungle-green transition-colors"
          onClick={() => setWaitlistOpen(true)}
        >
          Get started
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="flex items-center justify-center rounded-lg p-1.5 text-dark-green lg:hidden"
        aria-label="Open menu"
      >
        <BsList size={24} />
      </button>

      {/* Mobile sidebar overlay */}
      <MenuSidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        openSection={openSection}
        setOpenSection={setOpenSection}
        navItems={NAV_ITEMS}
      />

      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </MarginWrapper>
  );
};

export default Navbar;
