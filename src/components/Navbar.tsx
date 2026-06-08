"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-between">

        {/* Logo + name */}
        <a href="#" className="flex items-center gap-3" aria-label="Winchester Pack & Ship — Home">
          <Image
            src="/logo.png"
            alt="Winchester Pack & Ship logo"
            width={88}
            height={88}
            className="object-contain shrink-0"
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
              Winchester
            </span>
            <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 tracking-tight">
              Pack &amp; Ship
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-amber-300 transition-colors"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-gray-700 dark:bg-zinc-300 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-700 dark:bg-zinc-300 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-gray-700 dark:bg-zinc-300 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4 dark:border-zinc-800 dark:bg-zinc-950">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-gray-900 text-sm dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-zinc-950 text-center hover:bg-amber-300 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
