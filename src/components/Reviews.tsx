const reviews = [
  {
    stars: 5,
    text: "Came in with a fragile guitar that needed to be shipped across the country. They packed it perfectly and compared three carriers for me. Saved about $30 and it arrived without a scratch.",
    author: "James T.",
    detail: "Local customer",
  },
  {
    stars: 5,
    text: "I've been renting a mailbox here for two years. The staff always notifies me the same day mail arrives. Super convenient — I can pick it up whenever I'm in the area.",
    author: "Maria L.",
    detail: "Mailbox rental customer",
  },
  {
    stars: 5,
    text: "Needed 200 flyers printed same day for an event. They had them ready in two hours, full color, better quality than the big chain stores. Will definitely be back.",
    author: "Derek M.",
    detail: "Printing customer",
  },
  {
    stars: 5,
    text: "Shipped a holiday gift internationally through them. They handled all the customs paperwork, found the cheapest option, and it arrived in Germany in under a week. Incredible service.",
    author: "Sarah K.",
    detail: "International shipping",
  },
  {
    stars: 5,
    text: "The staff here are genuinely helpful. I walked in not knowing which service I needed. They explained everything, packed my items for free, and I was out in 10 minutes.",
    author: "Tony R.",
    detail: "First-time customer",
  },
  {
    stars: 5,
    text: "As a small business owner I ship weekly. Having one place that does packing, printing, and UPS/FedEx/USPS saves me at least two hours every week. Worth every penny.",
    author: "Angela P.",
    detail: "Small business owner",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-6 bg-navy-900 dark:bg-navy-950 border-b border-navy-700 dark:border-navy-700">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Customer Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What Our Customers Say
          </h2>

          {/* Rating badge */}
          <div className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 mt-2">
            <span className="text-2xl text-amber-400">★★★★★</span>
            <div className="text-left">
              <p className="text-2xl font-bold text-white leading-none">5.0</p>
              <p className="text-xs text-gray-400 mt-0.5">100+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 hover:border-white/20 hover:bg-white/10 transition-all duration-200"
            >
              <div className="text-amber-400 text-base tracking-wide">
                {"★".repeat(r.stars)}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed italic flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-white">{r.author}</p>
                <p className="text-xs text-gray-500">{r.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
