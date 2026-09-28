const carriers = [
  {
    name: "UPS",
    // UPS brand: brown background, gold text
    style: { backgroundColor: "#351C15", color: "#FFB500" },
    borderColor: "#351C15",
    label: "Authorized Partner",
  },
  {
    name: "FedEx",
    // FedEx brand: white background, purple text
    style: { backgroundColor: "#ffffff", color: "#4D148C" },
    borderColor: "#4D148C",
    label: "Authorized Partner",
  },
  {
    name: "USPS",
    // USPS brand: white background, dark blue text
    style: { backgroundColor: "#ffffff", color: "#004B97" },
    borderColor: "#004B97",
    label: "Authorized Partner",
  },
  {
    name: "DHL",
    // DHL brand: yellow background, red text
    style: { backgroundColor: "#FFCC00", color: "#D40511" },
    borderColor: "#D40511",
    label: "Authorized Partner",
  },
];

export default function CarrierStrip() {
  return (
    <div className="border-y border-navy-200 bg-navy-50 py-5 px-6 dark:border-navy-700 dark:bg-navy-900/60">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-zinc-500">
          Authorized to ship with
        </span>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {carriers.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-0.5 rounded-xl px-6 py-2 border-2"
              style={{
                backgroundColor: c.style.backgroundColor,
                borderColor: c.borderColor,
              }}
            >
              <span
                className="text-xl font-black tracking-tighter"
                style={{ color: c.style.color }}
              >
                {c.name}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
