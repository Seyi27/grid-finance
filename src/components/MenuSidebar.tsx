import Image from "next/image";
import React, { useState } from "react";
import { BsChevronDown, BsX } from "react-icons/bs";
import logo from "../assets/svg/logo.svg";
import { MenuSidebarProp, MobileAccordionItemProps } from "../types/types";
import Link from "next/link";
import WaitlistModal from "./WaitlistModal";

const MobileAccordionItem = ({
  item,
  open,
  onToggle,
  setMobileOpen,
}: MobileAccordionItemProps) => {
  if (!item.items) {
    return (
      <a
        href={item.href}
        className="block px-1 py-3 text-[15px] font-medium text-dark-green border-b border-pale-yellow"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="border-b border-pale-yellow">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-1 py-3 text-[15px] font-medium text-dark-green"
        aria-expanded={open}
      >
        {item.label}
        <BsChevronDown
          size={12}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-200 ${
          open ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          {item.items.map((sub: any) => (
            <Link
              key={sub.label}
              href={sub.href}
              className="block rounded-lg px-3 py-2 text-sm text-dark-green hover:bg-light-cream"
              onClick={() => {
                setMobileOpen(false);
                onToggle();
              }} // Close the accordion when a link is clicked
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const MenuSidebar = ({
  mobileOpen,
  setMobileOpen,
  openSection,
  setOpenSection,
  navItems,
}: MenuSidebarProp) => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        mobileOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/30"
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-xs flex-col bg-pale-white shadow-xl
                      transition-transform duration-300 ease-out ${
                        mobileOpen ? "translate-x-0" : "translate-x-full"
                      }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-16 items-center justify-between border-b border-pale-yellow px-4">
          <Link href={"/"}>
            <Image src={logo} alt="Logo"  className="w-25" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center rounded-lg p-1.5 text-forest-green"
            aria-label="Close menu"
          >
            <BsX size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4">
          {navItems.map((item) => (
            <MobileAccordionItem
              key={item.label}
              item={item}
              open={openSection === item.label}
              onToggle={() =>
                setOpenSection(openSection === item.label ? null : item.label)
              }
              setMobileOpen={setMobileOpen}
            />
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-pale-yellow p-4">
          <a
            href="#"
            className="w-full rounded-lg border border-pale-yellow px-4 py-2.5 text-center text-sm font-medium text-dark-green"
            onClick={() => setWaitlistOpen(true)}
          >
            Sign in
          </a>
          <a
            href="#"
            className="w-full rounded-lg bg-forest-green px-4 py-2.5 text-center text-sm font-medium text-white"
            onClick={() => setWaitlistOpen(true)}
          >
            Get started
          </a>
        </div>
      </aside>

      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </div>
  );
};

export default MenuSidebar;
