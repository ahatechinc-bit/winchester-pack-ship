const steps = [
  {
    number: "1",
    title: "Walk In With Your Item",
    description:
      "Bring it packed or unpacked — no appointment needed. We're open Monday through Saturday, 9 AM to 6 PM.",
  },
  {
    number: "2",
    title: "We Pack It & Compare Every Carrier",
    description:
      "We professionally pack your item, then compare rates across UPS, FedEx, and USPS side by side. You see every price and pick the best option.",
  },
  {
    number: "3",
    title: "It Ships Today",
    description:
      "Drop off by 3 PM and it goes out the same day. You get a tracking number before you leave the store.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 border-b border-navy-200 bg-navy-50 dark:border-navy-700 dark:bg-navy-900/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-gray-500 dark:text-zinc-400">Three steps. One stop. Done today.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s) => (
            <div key={s.number} className="flex flex-col items-center text-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-zinc-950 text-2xl font-black">
                {s.number}
              </div>
              <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs dark:text-zinc-400">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
