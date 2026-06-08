const guarantees = [
  {
    icon: "🛡️",
    title: "We Pack It, We Back It",
    description:
      "If we pack your shipment and it arrives damaged, we handle the carrier claim for you — start to finish. No runaround.",
  },
  {
    icon: "💰",
    title: "Best Rate, Every Time",
    description:
      "We compare UPS, FedEx, and USPS for every shipment. You see every price. You pick the best one. No guessing, no overpaying.",
  },
  {
    icon: "⚡",
    title: "Same-Day Shipping",
    description:
      "Drop off by 3 PM and your package ships today. You get a tracking number before you walk out the door.",
  },
  {
    icon: "📦",
    title: "Free Packing Materials",
    description:
      "Box, bubble wrap, and tape are included when you ship with us. No hidden fees, no surprises at the register.",
  },
];

export default function Guarantees() {
  return (
    <section className="py-20 px-6 border-b border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Our Promise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Our Guarantees. No Fine Print.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border-2 border-gray-200 bg-white p-7 flex flex-col gap-4 hover:border-amber-400/60 transition-colors duration-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-amber-400/50"
            >
              <span className="text-4xl">{g.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{g.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed dark:text-zinc-400">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
