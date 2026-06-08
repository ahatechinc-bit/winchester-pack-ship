const services = [
  {
    icon: "📦",
    carrier: null,
    title: "Shipping",
    description:
      "We ship with UPS, FedEx, and USPS. Drop off a pre-labeled package or let us find the best rate and carrier for you.",
  },
  {
    icon: "📦",
    carrier: null,
    title: "Custom Packing",
    description:
      "Professional packing and boxing to protect your items in transit. We source the right materials for fragile, oversized, and odd-shaped items.",
  },
  {
    icon: "🖨️",
    carrier: null,
    title: "Printing",
    description:
      "Documents, labels, photos, flyers, and more. Black & white or full color — we handle all your printing needs quickly and affordably.",
  },
  {
    icon: "📬",
    carrier: null,
    title: "Mailbox Services",
    description:
      "Get a secure, private mailbox address. Accept packages from any carrier, receive mail, and manage deliveries on your schedule.",
  },
  {
    icon: "🟫",
    carrier: "UPS",
    title: "UPS Drop-Off",
    description:
      "Authorized UPS drop-off location. Ground, 2-Day, and overnight options available.",
  },
  {
    icon: "🟪",
    carrier: "FedEx",
    title: "FedEx Drop-Off",
    description:
      "Authorized FedEx drop-off location. Express, Ground, and international shipping services.",
  },
  {
    icon: "🟦",
    carrier: "USPS",
    title: "USPS Shipping",
    description:
      "Priority Mail, First-Class, and Media Mail options. Affordable postal service for all package sizes.",
  },
  {
    icon: "🗃️",
    carrier: null,
    title: "Supplies & More",
    description:
      "Boxes, bubble wrap, tape, packing peanuts, and more available in-store. Everything you need to ship safely.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white dark:bg-navy-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 max-w-md mx-auto">
            Shipping, printing, mailbox services, and more — everything under
            one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-navy-200 bg-white p-6 flex flex-col gap-4 hover:border-amber-400/60 hover:bg-amber-50/40 transition-all duration-200 dark:border-navy-700 dark:bg-navy-900 dark:hover:border-amber-400/40 dark:hover:bg-navy-800/60"
            >
              <div className="text-3xl">{s.icon}</div>
              {s.carrier && (
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  {s.carrier}
                </span>
              )}
              <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed dark:text-zinc-400">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
