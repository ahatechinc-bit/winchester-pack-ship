import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: "Document Services | Copy, Print, Scan & Fax",
  description:
    "Professional document services in Winchester, VA. Black & white and color copies, scanning, faxing, laminating, binding, and large-format printing. Walk in — no appointment needed.",
};

const services = [
  {
    icon: "⬛",
    title: "Black & White Copies",
    description:
      "Fast, high-quality black and white copies starting at just cents per page. Great for documents, forms, flyers, and reports.",
    price: "From $0.10/page",
  },
  {
    icon: "🎨",
    title: "Color Copies",
    description:
      "Vibrant full-color copies for presentations, marketing materials, photos, and more. Professional results every time.",
    price: "From $0.49/page",
  },
  {
    icon: "📠",
    title: "Fax Services",
    description:
      "Send and receive faxes quickly and securely. Great for legal documents, medical records, contracts, and business forms.",
    price: "From $1.50/page",
  },
  {
    icon: "🔍",
    title: "Scanning",
    description:
      "We scan your documents and deliver them to you via email, USB drive, or cloud upload. High resolution for crisp, clear digital files.",
    price: "From $1.00/page",
  },
  {
    icon: "🗂️",
    title: "Binding",
    description:
      "Comb binding, spiral binding, and thermal binding available. Perfect for reports, presentations, manuals, and books.",
    price: "From $3.00",
  },
  {
    icon: "🪪",
    title: "Laminating",
    description:
      "Protect your important documents, ID cards, menus, signs, and photos with professional lamination. Multiple sizes available.",
    price: "From $1.50",
  },
  {
    icon: "📐",
    title: "Large Format Printing",
    description:
      "Posters, banners, blueprints, and oversized documents printed in stunning detail. Up to 36 inches wide.",
    price: "Ask in store",
  },
  {
    icon: "🪟",
    title: "Business Cards & Flyers",
    description:
      "Design and print professional business cards, flyers, brochures, and marketing materials. Same-day turnaround on most jobs.",
    price: "Ask in store",
  },
];

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "No appointment needed. Just walk in and we'll take care of you right away.",
  },
  {
    q: "Can you print from my phone or email?",
    a: "Yes! Email your files to us or bring them on a USB drive. We can print from most common formats including PDF, Word, and JPEG.",
  },
  {
    q: "How fast can you get copies done?",
    a: "Most copy jobs are done while you wait. Large jobs may take a bit longer — call ahead and we'll have them ready for pickup.",
  },
  {
    q: "Do you offer double-sided printing?",
    a: "Yes, we offer single and double-sided printing for both black & white and color copies.",
  },
];

export default function DocumentServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">

        {/* Hero */}
        <section className="py-20 px-6 bg-navy-50 border-b border-navy-200 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600">
              Document Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight">
              Copy, Print, Scan & Fax
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto">
              Professional document services in Winchester, VA. No appointment needed —
              walk in and we'll handle it fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="tel:+15405550100"
                className="rounded-full bg-amber-400 px-8 py-3.5 text-sm font-semibold text-zinc-950 hover:bg-amber-300 transition-colors"
              >
                📞 Call Us Now
              </a>
              <a
                href="/#contact"
                className="rounded-full border border-navy-200 px-8 py-3.5 text-sm font-semibold text-navy-900 hover:border-navy-400 transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
                What We Offer
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                Everything you need for your documents — all under one roof.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-navy-200 bg-white p-6 flex flex-col gap-3 hover:border-amber-400/60 hover:bg-amber-50/40 transition-all duration-200"
                >
                  <div className="text-3xl">{s.icon}</div>
                  <h3 className="text-lg font-semibold text-navy-900">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">{s.description}</p>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                    {s.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 px-6 bg-navy-900">
          <div className="mx-auto max-w-4xl text-center space-y-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Why Choose Us for Document Services?
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { icon: "⚡", title: "Fast Turnaround", desc: "Most jobs done while you wait. No long waits or delays." },
                { icon: "💰", title: "Affordable Pricing", desc: "Competitive rates with no hidden fees. You only pay for what you need." },
                { icon: "🤝", title: "Friendly Staff", desc: "We help you figure out exactly what you need and get it done right." },
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-navy-200 p-6 space-y-2">
                  <h3 className="font-semibold text-navy-900">{f.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-amber-400 text-center">
          <div className="mx-auto max-w-2xl space-y-4">
            <h2 className="text-3xl font-bold text-zinc-950">Ready to get started?</h2>
            <p className="text-zinc-800">Walk in today — no appointment needed. We're here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="tel:+15405550100"
                className="rounded-full bg-navy-900 px-8 py-3.5 text-sm font-semibold text-white hover:bg-navy-800 transition-colors"
              >
                📞 (540) 555-0100
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=2261+Valley+Ave,+Winchester,+VA+22601"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-navy-900 px-8 py-3.5 text-sm font-semibold text-navy-900 hover:bg-navy-900 hover:text-white transition-colors"
              >
                🗺️ Get Directions
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
