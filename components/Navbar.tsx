"use client";

import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <header className="glass-nav fixed left-0 top-0 z-50 w-full border-b border-slate-200/50 transition-all duration-300 dark:border-slate-800/50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#beranda" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-amber-400 text-xl font-bold text-white shadow-lg shadow-brand-500/30 transition-transform duration-300 group-hover:scale-105">
            MF
          </div>
          <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-slate-300">
            Farhan<span className="text-brand-500">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-1 transition-colors hover:text-brand-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="rounded-xl bg-slate-200/60 p-2.5 text-slate-700 transition-all duration-300 hover:bg-slate-300 focus:outline-none dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            {isDark ? (
              <FaSun className="text-lg" />
            ) : (
              <FaMoon className="text-lg" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            className="rounded-xl bg-slate-200/60 p-2.5 text-slate-700 focus:outline-none dark:bg-slate-800/60 dark:text-slate-300 md:hidden"
          >
            {menuOpen ? (
              <FaXmark className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="space-y-3 border-b border-slate-200 bg-white/95 px-4 pb-6 pt-2 transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/95 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
