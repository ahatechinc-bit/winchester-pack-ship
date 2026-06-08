"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Which carriers do you ship with?",
    a: "We are authorized partners for UPS, FedEx, and USPS. We compare rates across all three carriers for every shipment so you get the best price and fastest delivery time — no need to visit three separate locations.",
  },
  {
    q: "Can you pack my items for me?",
    a: "Absolutely. We carry boxes, bubble wrap, packing peanuts, and custom crating materials. Our team professionally packs fragile, oversized, and odd-shaped items every day. If it breaks in transit after we pack it, the carrier claim is on us.",
  },
  {
    q: "How much does shipping cost?",
    a: "Rates depend on the carrier, weight, dimensions, and destination. Bring your item in and we'll show you exact prices from UPS, FedEx, and USPS side by side. There's no charge to get a quote.",
  },
  {
    q: "How does mailbox rental work?",
    a: "You get a real street address, not a PO Box. You can accept packages from all carriers including UPS, FedEx, and USPS. We notify you when mail arrives. Plans start monthly with no long-term contracts required.",
  },
  {
    q: "What printing services do you offer?",
    a: "Color and black-and-white copies, custom business cards, flyers, banners, binding, laminating, and large-format printing. We handle everything from one-page prints to bulk business orders. Same-day turnaround on most jobs.",
  },
  {
    q: "What are your hours?",
    a: "We're open Monday through Friday 9 AM to 6 PM, and Saturday 10 AM to 4 PM. We are closed on Sundays.",
  },
  {
    q: "Do I need an appointment?",
    a: "No appointment needed for shipping, packing, printing, or most other services. Just walk in. For large orders or custom crating, calling ahead helps us have materials ready.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 border-b border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-zinc-800">
          {faqs.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-gray-900 hover:text-amber-600 transition-colors dark:text-white dark:hover:text-amber-400"
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <span className="shrink-0 text-2xl font-light text-amber-500 leading-none dark:text-amber-400">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed dark:text-zinc-400">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
