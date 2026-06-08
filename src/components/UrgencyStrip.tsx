export default function UrgencyStrip() {
  return (
    <div className="bg-amber-400 py-3 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-zinc-950 text-sm font-semibold">
        <span className="flex items-center gap-2">
          ⚡ <strong>Drop off by 3 PM — it ships today.</strong>
        </span>
        <span className="hidden sm:block text-zinc-700">|</span>
        <span className="flex items-center gap-2">
          🕙 <span>Open Mon – Fri 9am–6pm &nbsp;·&nbsp; Sat 10am–4pm</span>
        </span>
      </div>
    </div>
  );
}
