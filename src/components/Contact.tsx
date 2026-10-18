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
    "w-full rounded-lg border border-navy-200 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder-gray-400 focus:border-amber-500 focus:outline-none transition-colors dark:border-navy-700 dark:bg-navy-800 dark:text-white dark:placeholder-zinc-500 dark:focus:border-amber-400";

  return (
    <section id="contact" className="border-t border-navy-200 bg-navy-50 dark:border-navy-700 dark:bg-navy-950">

      {/* Section header */}
      <div className="py-14 px-6 text-center border-b border-navy-200 dark:border-navy-700">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
          Contact Us
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white leading-tight mb-3">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-zinc-400 max-w-md mx-auto">
          Drop in, call, or send us a message — we&apos;ll get back to you fast.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 grid lg:grid-cols-2 gap-10 items-start">

        {/* Left — info + map */}
        <div className="space-y-5">

          {/* Contact details */}
          <div className="rounded-2xl border border-navy-200 bg-white divide-y divide-navy-100 dark:border-navy-700 dark:bg-navy-900 dark:divide-navy-800">
            {[
              { icon: "📍", label: "Address", value: "2261 Valley Ave, Winchester, VA 22601" },
              { icon: "📞", label: "Phone", value: "(540) 694-7447  ·  540-694-SHIP" },
              { icon: "📠", label: "eFax", value: "(540) 694-3094" },
              { icon: "✉️", label: "Email", value: "admin@winchesterpackandship.com" },
              { icon: "🕐", label: "Hours", value: "Mon – Fri  10am – 7pm\nSat  10am – 4pm  ·  Sun  Closed" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 px-5 py-4">
                <span className="text-lg mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-500 mb-0.5">{item.label}</p>
                  <p className="text-sm text-navy-900 dark:text-white whitespace-pre-line leading-snug">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href="tel:+15406947447"
              className="flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-3 py-3 text-xs font-semibold text-zinc-950 hover:bg-amber-300 transition-colors text-center"
            >
              📞 Call
            </a>
            <a
              href="mailto:admin@winchesterpackandship.com"
              className="flex items-center justify-center gap-2 rounded-xl border border-navy-200 bg-white px-3 py-3 text-xs font-semibold text-navy-900 hover:border-amber-400 transition-colors dark:border-navy-700 dark:bg-navy-900 dark:text-white"
            >
              ✉️ Email
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=2261+Valley+Ave,+Winchester,+VA+22601"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-navy-200 bg-white px-3 py-3 text-xs font-semibold text-navy-900 hover:border-amber-400 transition-colors dark:border-navy-700 dark:bg-navy-900 dark:text-white"
            >
              🗺️ Directions
            </a>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-navy-200 dark:border-navy-700">
            <iframe
              title="Winchester Pack & Ship location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0!2d-78.1633!3d39.1857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2261+Valley+Ave%2C+Winchester%2C+VA+22601!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right — form */}
        <div className="rounded-2xl border border-navy-200 bg-white p-8 dark:border-navy-700 dark:bg-navy-900">
          {state === "success" ? (
            <div className="flex flex-col items-center justify-center h-full min-h-64 gap-4 text-center">
              <span className="text-5xl">✅</span>
              <h3 className="text-xl font-semibold text-navy-900 dark:text-white">
                Message Sent!
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 text-sm">
                Thanks for reaching out. We&apos;ll get back to you shortly.
              </p>
              <button
                onClick={() => setState("idle")}
                className="mt-2 text-sm text-amber-600 hover:text-amber-500 transition-colors dark:text-amber-400 dark:hover:text-amber-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-navy-900 dark:text-white mb-1">Send us a message</p>
                <p className="text-xs text-gray-500 dark:text-zinc-400">We typically respond within a few hours.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-gray-500 uppercase tracking-wide dark:text-zinc-400">
                    Name *
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Jane Smith" className={inputClass} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-gray-500 uppercase tracking-wide dark:text-zinc-400">
                    Email *
                  </label>
                  <input id="email" name="email" type="email" required placeholder="jane@example.com" className={inputClass} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-medium text-gray-500 uppercase tracking-wide dark:text-zinc-400">
                    Phone
                  </label>
                  <input id="phone" name="phone" type="tel" placeholder="(540) 694-7447" className={inputClass} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-xs font-medium text-gray-500 uppercase tracking-wide dark:text-zinc-400">
                    Service *
                  </label>
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
                <label htmlFor="message" className="text-xs font-medium text-gray-500 uppercase tracking-wide dark:text-zinc-400">
                  Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe what you're shipping, package dimensions, weight, destination…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {state === "error" && (
                <p className="text-sm text-red-500">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full rounded-full bg-amber-400 py-3 text-sm font-semibold text-zinc-950 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {state === "submitting" ? "Sending…" : "Send Message"}
              </button>

              <p className="text-center text-xs text-gray-400 dark:text-zinc-500">
                Prefer to call? <a href="tel:+15406947447" className="text-amber-600 dark:text-amber-400 hover:underline">(540) 694-7447</a>
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
