"use client";

import { useState } from "react";
import { BsEnvelope, BsShieldCheck, BsGeoAlt } from "react-icons/bs";
import CustomButton from "./CustomButton";

const INTEREST_OPTIONS = ["Lending", "Savings", "Rounds", "Not sure yet"];

const ContactSection = () => {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("Fintech");
  const [interestedIn, setInterestedIn] = useState<string[]>(["Lending"]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const toggleInterest = (option: string) => {
    setInterestedIn((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // TODO: wire up to your actual endpoint / API route
      // await fetch("/api/contact", {
      //   method: "POST",
      //   body: JSON.stringify({ fullName, workEmail, companyName, role, interestedIn, message }),
      // });
      console.log({
        fullName,
        workEmail,
        companyName,
        role,
        interestedIn,
        message,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-yellow-green" />
            <span className="text-xs font-semibold tracking-widest text-green-1 uppercase">
              Contact
            </span>
          </div>
          <h1 className="text-3xl font-bold leading-tight text-dark-green sm:text-4xl lg:text-5xl">
            Let&apos;s talk about{" "}
            <span className="font-serif italic font-normal text-green-1">
              what you&apos;re building.
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-gray-1 text-sm font-light">
            Sales and partnership inquiries, existing tenant support, and press, all routed to the right person instead of one shared inbox.
          </p>
        </div>

        {/* Info + form */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Left: info cards + map */}
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4 rounded-2xl border border-pale-cream p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-3">
                <BsEnvelope className="text-dark-green" size={18} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-dark-green">Email</h3>
                <a
                  href="mailto:support@thegridfinance.com"
                  className="text-sm text-green-1 hover:text-dark-green"
                >
                  support@thegridfinance.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-pale-cream p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-3">
                <BsShieldCheck className="text-dark-green" size={18} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-dark-green">
                  Support hours
                </h3>
                <p className="text-sm text-gray-1 font-light">
                  24/7, Nigeria-based team, not a ticket routed overseas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-pale-cream p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-3">
                <BsGeoAlt className="text-dark-green" size={18} />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-dark-green">
                  Office
                </h3>
                <p className="text-sm text-gray-1 font-light">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-pale-cream">
              <iframe
                title="Grid Finance office location"
                src="https://www.google.com/maps?q=Ikoyi,+Lagos,+Nigeria&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-pale-cream p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1.5 block text-sm font-semibold text-dark-green"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Amina Bello"
                  className="w-full rounded-lg border border-pale-cream bg-light-cream px-4 py-2.5 text-sm text-dark-green placeholder:text-gray-1 placeholder:font-light focus:border-forest-green focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="workEmail"
                  className="mb-1.5 block text-sm font-semibold text-dark-green"
                >
                  Work email
                </label>
                <input
                  id="workEmail"
                  type="email"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  placeholder="amina@company.com"
                  className="w-full rounded-lg border border-pale-cream bg-light-cream px-4 py-2.5 text-sm text-dark-green placeholder:text-gray-1 placeholder:font-light focus:border-forest-green focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="companyName"
                  className="mb-1.5 block text-sm font-semibold text-dark-green"
                >
                  Company / cooperative name
                </label>
                <input
                  id="companyName"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="CoopSave Nigeria"
                  className="w-full rounded-lg border border-pale-cream bg-light-cream px-4 py-2.5 text-sm text-dark-green placeholder:text-gray-1 placeholder:font-light focus:border-forest-green focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="mb-1.5 block text-sm font-semibold text-dark-green"
                >
                  I am a...
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-lg border border-pale-cream bg-light-cream px-2 py-2.5 text-sm text-dark-green focus:border-forest-green focus:outline-none"
                >
                  <option>Fintech</option>
                  <option>Microfinance bank</option>
                  <option>Cooperative</option>
                  <option>SME</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <span className="mb-2 block text-sm font-semibold text-dark-green">
                Interested in
              </span>
              <div className="flex flex-wrap gap-3">
                {INTEREST_OPTIONS.map((option) => {
                  const checked = interestedIn.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleInterest(option)}
                      aria-pressed={checked}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        checked
                          ? "border-forest-green bg-green-2 text-dark-green"
                          : "border-pale-cream text-dark-green hover:bg-light-cream"
                      }`}
                    >
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-sm border ${
                          checked
                            ? "border-dark-green bg-dark-green"
                            : "border-gray-1"
                        }`}
                      >
                        {/* {checked && (
                          <span className="h-2 w-2 rounded-[1px] bg-white" />
                        )} */}
                      </span>
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-dark-green"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us a bit about your business and what you'd like to launch."
                className="w-full resize-none rounded-lg border border-pale-cream bg-light-cream px-4 py-3 text-sm text-dark-green placeholder:text-gray-1 placeholder:font-light focus:border-forest-green focus:outline-none"
              />
            </div>

            <div className="mt-3">
              <CustomButton
                label="Send Message"
                width={"100%"}
                height="45px"
                bgColor="#0e3b24"
                textColor="white"
                borderRadius="10px"
                fontSize={14}
                fontWeight={600}
                loader={submitting}
                disabled={submitting}
              />
            </div>

            <p className="mt-4 text-xs leading-5 text-gray-1 font-light">
              By submitting, you agree to be contacted by our team about Grid
              Finance&apos;s products.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
