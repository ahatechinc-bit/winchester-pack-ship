"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop: bottom-right corner */}
      <div
        className={`hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-2 transition-all duration-300 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="#contact"
          className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg hover:bg-amber-300 transition-colors"
        >
          Get a Free Quote →
        </a>
        <a
          href="tel:+15405550100"
          className="rounded-full border border-gray-300 bg-white/95 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-gray-800 shadow-lg hover:border-gray-400 transition-colors text-center dark:border-zinc-700 dark:bg-zinc-900/95 dark:text-zinc-200 dark:hover:border-zinc-500"
        >
          📞 Call Us
        </a>
      </div>

      {/* Mobile: full-width bar at bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-2 p-3 bg-white/95 backdrop-blur-sm border-t border-gray-200 dark:bg-zinc-950/95 dark:border-zinc-800">
        <a
          href="tel:+15405550100"
          className="flex-1 rounded-full border border-gray-300 py-3 text-sm font-semibold text-gray-800 text-center hover:border-gray-400 transition-colors dark:border-zinc-700 dark:text-zinc-200"
        >
          📞 Call Us
        </a>
        <a
          href="#contact"
          className="flex-1 rounded-full bg-amber-400 py-3 text-sm font-semibold text-zinc-950 text-center hover:bg-amber-300 transition-colors"
        >
          Get a Quote
        </a>
      </div>
    </>
  );
}
