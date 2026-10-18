"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setState("success");
      form.reset();
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
      setState("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-navy-900 placeholder-gray-400 focus:border-amber-500 focus:bg-white focus:outline-none transition-colors";

  return (
    <section id="contact" className="py-24 px-6 border-t border-navy-200 bg-white dark:border-navy-700 dark:bg-navy-950">
      <div className="mx-auto max-w-5xl">

        {/* Unified card */}
        <div className="rounded-3xl overflow-hidden shadow-xl grid lg:grid-cols-[1fr_1.3fr]">

          {/* Left — dark navy panel */}
          <div className="bg-navy-900 px-8 py-10 flex flex-col gap-8">

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
                Contact Us
              </p>
              <h2 className="text-3xl font-bold text-white leading-snug mb-2">
                Get in Touch
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Drop in, call, or send a message — we respond fast.
              </p>
            </div>

            {/* Contact rows */}
            <div className="space-y-5">
              {[
                { icon: "📍", label: "Address", value: "2261 Valley Ave\nWinchester, VA 22601", href: "https://www.google.com/maps/dir/?api=1&destination=2261+Valley+Ave,+Winchester,+VA+22601" },
                { icon: "📞", label: "Phone", value: "(540) 694-7447\n540-694-SHIP", href: "tel:+15406947447" },
                { icon: "✉️", label: "Email", value: "admin@winchesterpackandship.com", href: "mailto:admin@winchesterpackandship.com" },
                { icon: "📠", label: "eFax", value: "(540) 694-3094", href: null },
                { icon: "🕐", label: "Hours", value: "Mon – Fri  10am – 7pm\nSat  10am – 4pm  ·  Sun  Closed", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-base mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="text-sm text-zinc-200 whitespace-pre-line leading-snug hover:text-amber-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-zinc-200 whitespace-pre-line leading-snug">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-3 gap-2 mt-auto">
              <a href="tel:+15406947447"
                className="flex flex-col items-center gap-1 rounded-xl bg-amber-400 py-3 text-center hover:bg-amber-300 transition-colors">
                <span className="text-lg">📞</span>
                <span className="text-[10px] font-semibold text-zinc-950">Call</span>
              </a>
              <a href="mailto:admin@winchesterpackandship.com"
                className="flex flex-col items-center gap-1 rounded-xl bg-navy-800 border border-navy-700 py-3 text-center hover:border-amber-400 transition-colors">
                <span className="text-lg">✉️</span>
                <span className="text-[10px] font-semibold text-zinc-200">Email</span>
              </a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=2261+Valley+Ave,+Winchester,+VA+22601"
                target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 rounded-xl bg-navy-800 border border-navy-700 py-3 text-center hover:border-amber-400 transition-colors">
                <span className="text-lg">🗺️</span>
                <span className="text-[10px] font-semibold text-zinc-200">Map</span>
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden opacity-90">
              <iframe
                title="Winchester Pack & Ship location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0!2d-78.1633!3d39.1857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2261+Valley+Ave%2C+Winchester%2C+VA+22601!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white px-8 py-8">
            {state === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 gap-4 text-center">
                <span className="text-5xl">✅</span>
                <h3 className="text-xl font-semibold text-navy-900">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
                <button onClick={() => setState("idle")}
                  className="mt-2 text-sm text-amber-600 hover:text-amber-500 transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="mb-1">
                  <p className="text-base font-semibold text-navy-900">Send us a message</p>
                  <p className="text-xs text-gray-400 mt-0.5">We typically respond within a few hours.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Name *</label>
                    <input id="name" name="name" type="text" required placeholder="Jane Smith" className={inputClass} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Email *</label>
                    <input id="email" name="email" type="email" required placeholder="jane@example.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="(540) 694-7447" className={inputClass} />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Service *</label>
                    <select id="service" name="service" required className={inputClass}>
                      <option value="">Select a service…</option>
                      <option value="shipping">Shipping (UPS / FedEx / USPS)</option>
                      <option value="packing">Custom Packing</option>
                      <option value="printing">Printing</option>
                      <option value="mailbox">Mailbox Services</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe what you're shipping, package dimensions, weight, destination…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {state === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full rounded-full bg-amber-400 py-3 text-sm font-semibold text-zinc-950 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {state === "submitting" ? "Sending…" : "Send Message"}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Prefer to call? <a href="tel:+15406947447" className="text-amber-600 hover:underline">(540) 694-7447</a>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
