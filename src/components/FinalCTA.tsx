export default function FinalCTA() {
  return (
    <section className="relative py-24 px-6 bg-navy-900 dark:bg-navy-950 border-t border-navy-700 dark:border-navy-700">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-32 bg-amber-400/10 blur-3xl rounded-full pointer-events-none"
      />
      <div className="mx-auto max-w-3xl text-center space-y-6 relative">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
          Ready to Ship?
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Walk In Today. Done in Minutes.
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          No appointment needed. We compare every carrier, pack your items
          properly, and get them out the door — all in one stop.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-8 py-3.5 text-sm font-semibold text-zinc-950 hover:bg-amber-300 transition-colors"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+15405550100"
            className="rounded-full border border-gray-600 px-8 py-3.5 text-sm font-semibold text-gray-200 hover:border-gray-400 hover:text-white transition-colors"
          >
            📞 (540) 555-0100
          </a>
        </div>
      </div>
    </section>
  );
}
