const carriers = [
  {
    name: "UPS",
    color: "text-amber-700 dark:text-amber-700",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-800/40",
    label: "Authorized Partner",
  },
  {
    name: "FedEx",
    color: "text-violet-700 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/40",
    border: "border-violet-200 dark:border-violet-800/40",
    label: "Authorized Partner",
  },
  {
    name: "USPS",
    color: "text-blue-700 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800/40",
    label: "Authorized Partner",
  },
];

export default function CarrierStrip() {
  return (
    <div className="border-y border-gray-200 bg-gray-50 py-5 px-6 dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-500">
          Authorized to ship with
        </span>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {carriers.map((c) => (
            <div
              key={c.name}
              className={`flex flex-col items-center gap-0.5 rounded-xl border ${c.border} ${c.bg} px-6 py-2`}
            >
              <span className={`text-xl font-black tracking-tighter ${c.color}`}>
                {c.name}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-500">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
