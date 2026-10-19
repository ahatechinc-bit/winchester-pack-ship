export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-navy-200 bg-navy-50 dark:border-navy-700 dark:bg-navy-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              About Us
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 dark:border-red-900/40 dark:bg-red-950/30">
              <span className="text-lg">🏡</span>
              <span className="text-sm font-semibold text-red-700 dark:text-red-400">Proudly Local & Family Owned</span>
              <span className="text-lg">❤️</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white leading-tight">
              Your Neighborhood<br />Shipping Store
            </h2>
            <p className="text-gray-600 leading-relaxed dark:text-zinc-400">
              Winchester Pack &amp; Ship is a local, family owned shipping store in Winchester, VA
              dedicated to making packing and shipping services as easy as
              possible for you.
            </p>
            <p className="text-gray-600 leading-relaxed dark:text-zinc-400">
              Whether you need a private mailbox rental, professional packing services,
              a UPS or FedEx drop-off, or same-day USPS and DHL shipping — our
              experienced staff will make sure your items arrive safely and on time.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-amber-600 text-sm font-semibold hover:text-amber-500 transition-colors dark:text-amber-400 dark:hover:text-amber-300"
            >
              Get in touch →
            </a>
          </div>

          {/* Right — what we offer */}
          <div className="space-y-3">
            {[
              { icon: "📦", title: "UPS · FedEx · USPS · DHL", desc: "Authorized drop-off for all major carriers. We compare rates so you get the best deal." },
              { icon: "🎁", title: "Professional Packing", desc: "Fragile, oversized, odd-shaped — we pack it right the first time." },
              { icon: "📬", title: "Private Mailbox Rental", desc: "A real street address for your home or business, with package acceptance." },
              { icon: "🖨️", title: "Print, Copy & Document Services", desc: "Copies, scanning, faxing, laminating, binding — walk in, no appointment needed." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-navy-200 bg-white px-5 py-4 dark:border-navy-700 dark:bg-navy-900">
                <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-navy-900 dark:text-white">{item.title}</p>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
