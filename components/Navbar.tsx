"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f3e3d8] bg-[#fdf9f6]/90 backdrop-blur">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-bold tracking-wide text-[#2c1f21]">
            AZZURA <span className="text-[#b06252]">X ANEXPO2026</span>
          </span>
          <span className="text-[11px] tracking-[0.2em] text-[#8f4c40] uppercase">
            Discover the Difference
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#b06252] ${
                pathname === l.href ? "text-[#b06252]" : "text-[#3d2b2e]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.openPoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#2c1f21] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b06252]"
          >
            OPEN PO
          </a>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={SITE.openPoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#2c1f21] px-4 py-2 text-xs font-semibold text-white"
          >
            OPEN PO
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Buka menu"
            aria-expanded={open}
            className="rounded-lg border border-[#f3e3d8] p-2 text-[#2c1f21]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#f3e3d8] bg-[#fdf9f6] px-4 py-3 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                pathname === l.href
                  ? "bg-[#fbe9e5] text-[#b06252]"
                  : "text-[#3d2b2e]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
