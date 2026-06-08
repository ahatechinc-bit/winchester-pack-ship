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
    <section id="contact" className="py-24 px-6 border-t border-navy-200 bg-navy-50 dark:border-navy-700 dark:bg-navy-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Contact Us
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white leading-tight">
                Get a Free Quote
              </h2>
              <p className="text-gray-600 leading-relaxed dark:text-zinc-400">
                Fill out the form and we'll get back to you with the best
                shipping options and rates for your needs.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: "📍", label: "Address", value: "123 Main Street, Winchester, VA 22601" },
                { icon: "📞", label: "Phone", value: "(540) 555-0100" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-navy-200 bg-white text-lg dark:border-navy-700 dark:bg-navy-900">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900 dark:text-white">{item.label}</p>
                    <p className="text-sm text-gray-600 dark:text-zinc-400">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-navy-200 bg-white text-lg dark:border-navy-700 dark:bg-navy-900">
                  🕐
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900 dark:text-white">Store Hours</p>
                  <p className="text-sm text-gray-600 dark:text-zinc-400">
                    Mon – Fri: 9am – 6pm<br />
                    Sat: 10am – 4pm<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-navy-200 bg-white p-8 dark:border-navy-700 dark:bg-navy-900">
            {state === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 gap-4 text-center">
                <span className="text-5xl">✅</span>
                <h3 className="text-xl font-semibold text-navy-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 text-sm">
                  Thanks for reaching out. We'll get back to you shortly.
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
                    <input id="phone" name="phone" type="tel" placeholder="(540) 555-0100" className={inputClass} />
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
                    rows={4}
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
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
