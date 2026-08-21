"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { BsX, BsArrowRight } from "react-icons/bs";
import infrastructureImg1 from "../assets/images/infrastructure-img-1.png";
import { WaitlistModalProps } from "../types/types";
import { createPortal } from "react-dom";

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successText, setSuccessText] = useState(false);

  // Close on Escape
  // useEffect(() => {
  //   if (!isOpen) return;
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") onClose();
  //   };
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => window.removeEventListener("keydown", handleKeyDown);
  // }, [isOpen, onClose]);

  // // Lock body scroll while open
  // useEffect(() => {
  //   if (!isOpen) return;
  //   const original = document.body.style.overflow;
  //   document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = original;
  //   };
  // }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      await fetch("", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      // onClose();
      setSuccessText(true);
      setEmail("");
    } finally {
      setSubmitting(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-green/70 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-2xl sm:grid-cols-2"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-dark-green shadow-sm transition-colors hover:bg-white"
        >
          <BsX size={20} />
        </button>

        <div className="relative hidden h-full min-h-[420px] sm:block">
          <Image
            src={infrastructureImg1}
            alt={"waitlist image"}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="p-8 sm:p-10">
          <h2
            id="waitlist-modal-title"
            className="text-2xl font-bold text-dark-green"
          >
            Join The Grid Finance Waitlist
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-2 font-light">
            Be among the first to launch on Grid Finance. Get early access,
            product updates, and exclusive onboarding when we open.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <label
              htmlFor="waitlist-email"
              className="mb-1.5 block text-sm font-semibold text-dark-green"
            >
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-lg border border-pale-cream bg-light-cream px-4 py-2.5 text-sm text-dark-green placeholder:text-gray-1 focus:border-forest-green focus:outline-none"
            />
            {successText && (
              <p className="mt-2 text-xs italic text-green-1 font-light">
                Email added to waitlist
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-forest-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-jungle-green disabled:opacity-60"
            >
              {submitting ? "Joining..." : "Join the waitlist"}
              {!submitting && <BsArrowRight size={14} />}
            </button>
          </form>

          <p className="mt-4 text-xs italic text-gray-2 font-light">
            No spam. Just launch updates and early access.
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default WaitlistModal;
