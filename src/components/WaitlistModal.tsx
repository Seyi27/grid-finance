"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { BsX, BsArrowRight, BsCheckCircle } from "react-icons/bs";
import infrastructureImg1 from "../assets/images/infrastructure-img-1.png";
import { WaitlistModalProps } from "../types/types";
import { createPortal } from "react-dom";
import { addToWaitlist } from "../services/waitlist";
import { useRouter } from "next/navigation";

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [view, setView] = useState("modal");

  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState(false);

  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      await addToWaitlist(email);
      setView("success");
    } catch (error: any) {
      setErrorText(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    setView("modal");
    setEmail("");
  };

  const waitlistModal = () => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-green/70 px-4"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-2xl sm:grid-cols-2"
      >
        <button
          type="button"
          onClick={handleClose}
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
            {errorText && (
              <p className="mt-2 text-xs italic text-[red] font-light">
                Something went wrong, kindly try again. Thanks you.
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
    </div>
  );

  const waitlistSuccessModal = () => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-green/70 px-4"
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px] animate-[rise_420ms_cubic-bezier(0.2,0.9,0.3,1)] rounded-[20px] bg-white px-9 pb-9 pt-10 text-center shadow-2xl"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-dark-green shadow-sm transition-colors hover:bg-white"
        >
          <BsX size={20} />
        </button>

        {/* Success icon */}
        <div className="mx-auto mb-[22px] flex h-16 w-16 items-center justify-center rounded-full bg-green-3">
          <BsCheckCircle size={30} />
        </div>

        <h1
          id="waitlist-success-title"
          className="mb-3 text-[26px] font-bold leading-tight tracking-tight text-dark-green"
        >
          You&apos;re on the list
        </h1>

        <p
          id="waitlist-success-desc"
          className="mb-6 px-1.5 text-[14px] leading-relaxed text-gray-2"
        >
          Thanks for joining the Grid Finance waitlist. We&apos;ll email you as
          soon as early access opens, plus the occasional product update along
          the way.
        </p>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pale-cream bg-pale-white px-4 py-2 text-[13px] text-dark-green">
          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-1" />
          {email}
        </div>

        <button
          onClick={() => {
            router.push("/");
            handleClose();
          }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-forest-green py-3.5 text-[15px] font-semibold text-white transition hover:bg-jungle-green"
        >
          Back to the roadmap
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <p className="mt-[18px] text-xs italic text-gray-2">
          No spam. Just launch updates and early access.
        </p>
      </div>
    </div>
  );

  return createPortal(
    <>
      {view === "modal" && waitlistModal()}

      {view === "success" && waitlistSuccessModal()}
    </>,
    document.body,
  );
};

export default WaitlistModal;
