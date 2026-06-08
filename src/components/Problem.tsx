const pains = [
  {
    emoji: "🤔",
    title: "Which Carrier Is Cheapest?",
    description:
      "You check UPS online, then FedEx, then USPS. The prices are different every time. You end up guessing — and overpaying.",
  },
  {
    emoji: "📦",
    title: "Damaged & No Recourse",
    description:
      "You packed it yourself, it arrived broken, and now you're stuck fighting a carrier claim with no help. Time and money down the drain.",
  },
  {
    emoji: "🚗",
    title: "Running Across Town",
    description:
      "Shipping here, printing there, mailbox somewhere else. Three separate stops for what should take twenty minutes.",
  },
];

export default function Problem() {
  return (
    <section className="py-20 px-6 border-b border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Shipping Shouldn&apos;t Be This Hard
          </h2>
          <p className="text-gray-500 dark:text-zinc-400">Sound familiar?</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-7 flex flex-col gap-4 text-center dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="text-4xl">{p.emoji}</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed dark:text-zinc-400">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-base font-semibold text-amber-600 dark:text-amber-400">
          We built Winchester Pack &amp; Ship to fix all of this. One store.
          Every service. Every carrier. Done right.
        </p>
      </div>
    </section>
  );
}
