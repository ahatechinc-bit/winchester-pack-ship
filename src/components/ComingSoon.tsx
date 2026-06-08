import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.10),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,158,11,0.12),transparent)]"
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:48px_48px] opacity-60 dark:opacity-20"
      />

      <div className="max-w-lg w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/logo.png"
            alt="Winchester Pack & Ship"
            width={140}
            height={140}
            className="object-contain"
            priority
          />
          <div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              Winchester Pack &amp; Ship
            </p>
            <p className="text-sm text-gray-500 dark:text-zinc-400">
              winchesterpackandship.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-amber-400 mx-auto rounded-full" />

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
            Coming <span className="text-amber-500 dark:text-amber-400">Soon</span>
          </h1>
          <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed">
            We&apos;re putting the finishing touches on our new website.
            In the meantime, we&apos;re still open and ready to help.
          </p>
        </div>

        {/* Services preview */}
        <div className="flex flex-wrap justify-center gap-2">
          {["Shipping", "Custom Packing", "Printing", "Mailbox Services"].map((s) => (
            <span
              key={s}
              className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-semibold text-gray-600 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Contact */}
        <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 space-y-4 dark:border-zinc-800 dark:bg-zinc-900/80">
          <p className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-widest text-xs">
            Get in touch now
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+15405550100"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-amber-300 transition-colors"
            >
              📞 (540) 555-0100
            </a>
            <a
              href="mailto:ahatechinc@gmail.com"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
            >
              ✉️ Send us an email
            </a>
          </div>

          <p className="text-xs text-gray-400 dark:text-zinc-500">
            Mon – Fri 9am–6pm &nbsp;·&nbsp; Sat 10am–4pm &nbsp;·&nbsp; Winchester, VA
          </p>
        </div>
      </div>
    </main>
  );
}
