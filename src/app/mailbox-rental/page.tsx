"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-navy-900 placeholder-gray-400 focus:border-amber-500 focus:bg-white focus:outline-none transition-colors";

const perks = [
  { icon: "📮", title: "Real Street Address", desc: "Use our address as your own — accepted by banks, Amazon, and government agencies." },
  { icon: "📦", title: "Accept Any Carrier", desc: "Packages from UPS, FedEx, USPS, DHL and more held safely until you pick up." },
  { icon: "🔒", title: "Secure & Private", desc: "Your mail stays locked in your personal box. No more missed deliveries." },
  { icon: "🔔", title: "Package Notifications", desc: "We'll let you know when something arrives so you never miss a delivery." },
];

const plans = [
  { size: "Small", dims: "3″ × 5″", best: "Letters & small parcels", price: "Ask in store" },
  { size: "Medium", dims: "5″ × 5″", best: "Regular packages", price: "Ask in store" },
  { size: "Large", dims: "5″ × 11″", best: "Frequent deliveries", price: "Ask in store" },
];

export default function MailboxRentalPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name:  (form.elements.namedItem("name")  as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      use:   (form.elements.namedItem("use")   as HTMLSelectElement).value,
      size:  (form.elements.namedItem("size")  as HTMLSelectElement).value,
      term:  (form.elements.namedItem("term")  as HTMLSelectElement).value,
      notes: (form.elements.namedItem("notes") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/mailbox", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? "Something went wrong.");
      }
      setState("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setState("error");
    }
  }

  return (
    <>
      <Navbar />
      <main className="pt-28">

        {/* Hero */}
        <section className="py-20 px-6 bg-navy-50 border-b border-navy-200 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
              Mailbox Rental
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight">
              Your Own Private Mailbox<br className="hidden sm:block" /> in Winchester, VA
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
              A real street address, secure mail storage, and package acceptance from every carrier — all in one convenient location.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a href="#inquiry"
                className="rounded-full bg-amber-400 px-8 py-3.5 text-sm font-semibold text-zinc-950 hover:bg-amber-300 transition-colors">
                Start My Inquiry
              </a>
              <a href="tel:+15406947447"
                className="rounded-full border border-navy-200 px-8 py-3.5 text-sm font-semibold text-navy-900 hover:border-navy-400 transition-colors">
                📞 Call Us
              </a>
            </div>
          </div>
        </section>

        {/* Perks */}
        <section className="py-16 px-6 bg-white">
          <div className="mx-auto max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl border border-navy-200 p-6 space-y-2">
                <span className="text-3xl">{p.icon}</span>
                <p className="font-semibold text-navy-900">{p.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Box sizes */}
        <section className="py-16 px-6 bg-navy-50 border-t border-navy-200">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10 space-y-2">
              <h2 className="text-3xl font-bold text-navy-900">Box Sizes</h2>
              <p className="text-gray-500">Choose the size that fits your mail volume. Not sure? We&apos;ll help you decide.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {plans.map((p) => (
                <div key={p.size} className="rounded-2xl border border-navy-200 bg-white p-6 text-center space-y-2">
                  <p className="text-xl font-bold text-navy-900">{p.size}</p>
                  <p className="text-sm font-mono text-gray-400">{p.dims}</p>
                  <p className="text-xs text-gray-500">{p.best}</p>
                  <p className="text-sm font-semibold text-amber-600 pt-1">{p.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry form */}
        <section id="inquiry" className="py-20 px-6 bg-white border-t border-navy-200">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-10 space-y-2">
              <h2 className="text-3xl font-bold text-navy-900">Mailbox Rental Inquiry</h2>
              <p className="text-gray-500">Fill out the form and we&apos;ll follow up to get you set up quickly.</p>
            </div>

            <div className="rounded-3xl border border-navy-200 bg-white shadow-sm p-8">
              {state === "success" ? (
                <div className="flex flex-col items-center gap-4 text-center py-10">
                  <span className="text-5xl">✅</span>
                  <h3 className="text-xl font-semibold text-navy-900">Inquiry Received!</h3>
                  <p className="text-gray-500 text-sm max-w-sm">
                    Thanks! We&apos;ll reach out shortly to confirm your box and get you set up.
                  </p>
                  <button onClick={() => setState("idle")}
                    className="mt-2 text-sm text-amber-600 hover:text-amber-500 transition-colors">
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="Jane Smith" className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Email *</label>
                      <input id="email" name="email" type="email" required placeholder="jane@example.com" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Phone</label>
                      <input id="phone" name="phone" type="tel" placeholder="(540) 000-0000" className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="use" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Use *</label>
                      <select id="use" name="use" required className={inputClass}>
                        <option value="">Personal or Business?</option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="size" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Box Size *</label>
                      <select id="size" name="size" required className={inputClass}>
                        <option value="">Select a size…</option>
                        <option value="small">Small (letters & small parcels)</option>
                        <option value="medium">Medium (regular packages)</option>
                        <option value="large">Large (frequent deliveries)</option>
                        <option value="unsure">Not sure — help me choose</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="term" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Rental Term *</label>
                      <select id="term" name="term" required className={inputClass}>
                        <option value="">How long?</option>
                        <option value="monthly">Month-to-month</option>
                        <option value="3months">3 months</option>
                        <option value="6months">6 months</option>
                        <option value="1year">1 year</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="notes" className="text-xs font-medium text-gray-400 uppercase tracking-wide">Additional Notes</label>
                    <textarea
                      id="notes" name="notes" rows={3}
                      placeholder="Any questions or special requirements?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {state === "error" && <p className="text-sm text-red-500">{errorMsg}</p>}

                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="w-full rounded-full bg-amber-400 py-3 text-sm font-semibold text-zinc-950 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {state === "submitting" ? "Sending…" : "Submit Inquiry"}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    Prefer to call?{" "}
                    <a href="tel:+15406947447" className="text-amber-600 hover:underline">(540) 694-7447</a>
                    {" "}· Walk-ins welcome
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
