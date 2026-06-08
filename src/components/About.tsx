const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "3", label: "Carrier Partners" },
  { value: "1000s", label: "Packages Shipped" },
  { value: "5★", label: "Customer Rating" },
];

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
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white leading-tight">
              Your Neighborhood<br />Shipping Store
            </h2>
            <p className="text-gray-600 leading-relaxed dark:text-zinc-400">
              Winchester Pack &amp; Ship has been serving our community for over
              a decade. We're a locally owned and operated shipping store
              dedicated to making the packing and shipping process as easy as
              possible for you.
            </p>
            <p className="text-gray-600 leading-relaxed dark:text-zinc-400">
              Whether you're sending a gift to family, returning an online
              purchase, or shipping business inventory, our experienced staff
              will make sure your items arrive safely and on time. We work with
              UPS, FedEx, and USPS to find the best rate for your needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-amber-600 text-sm font-semibold hover:text-amber-500 transition-colors dark:text-amber-400 dark:hover:text-amber-300"
            >
              Get in touch →
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-navy-200 bg-white p-8 flex flex-col gap-2 dark:border-navy-700 dark:bg-navy-900"
              >
                <span className="text-4xl font-bold text-amber-500 dark:text-amber-400">
                  {s.value}
                </span>
                <span className="text-sm text-gray-600 dark:text-zinc-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
