export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden bg-white dark:bg-zinc-950">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.10),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.12),transparent)]"
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:48px_48px] opacity-60 dark:opacity-30"
      />

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-50 px-4 py-1.5 text-xs font-medium text-amber-700 uppercase tracking-widest dark:bg-amber-400/10 dark:border-amber-400/30 dark:text-amber-400">
          Local Shipping Experts
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
          Ship Anything,{" "}
          <span className="text-amber-500 dark:text-amber-400">Anywhere</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Winchester Pack &amp; Ship is your trusted local store for shipping,
          printing, and mailbox services — fast, safe, and hassle-free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-8 py-3.5 text-sm font-semibold text-zinc-950 hover:bg-amber-300 transition-colors"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="rounded-full border border-gray-300 px-8 py-3.5 text-sm font-semibold text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-zinc-600 text-xs">
        <span>Scroll</span>
        <span className="animate-bounce">↓</span>
      </div>
    </section>
  );
}
