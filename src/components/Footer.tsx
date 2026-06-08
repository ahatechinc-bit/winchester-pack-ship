export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 px-6 bg-gray-900 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-400">

        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-base font-bold text-white tracking-tight">
            Winchester Pack &amp; Ship
          </span>
          <span className="text-xs text-gray-500">Winchester, VA · winchesterpackandship.com</span>
        </div>

        <div className="flex gap-6">
          <a href="#services" className="hover:text-gray-200 transition-colors">Services</a>
          <a href="#about" className="hover:text-gray-200 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-200 transition-colors">Contact</a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Winchester Pack &amp; Ship. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
