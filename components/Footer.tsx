import Link from "next/link";
import { NAV_LINKS, SITE } from "@/data/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[#2c1f21] text-[#faf2ec]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">
            AZZURA <span className="text-[#d4af7a]">X ANEXPO2026</span>
          </p>
          <p className="mt-1 text-xs tracking-[0.2em] uppercase text-[#d4af7a]">
            Discover the Difference
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#faf2ec]/80">
            Brand kecantikan lokal yang menghadirkan produk makeup dan skincare.
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold tracking-wider uppercase text-[#d4af7a]">
              Contact Us
            </p>
            <div className="mt-3">
              <SocialLinks light />
            </div>
          </div>
        </div>

        <nav aria-label="Navigasi footer">
          <p className="text-sm font-semibold tracking-wider uppercase">Navigasi</p>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-[#faf2ec]/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold tracking-wider uppercase">Pemesanan</p>
          <p className="mt-4 text-sm text-[#faf2ec]/80">
            Pesan melalui Open PO AZZURA X ANEXPO2026.
          </p>
          <a
            href={SITE.openPoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-[#faf2ec] px-6 py-2.5 text-sm font-semibold text-[#2c1f21] transition hover:bg-[#d4af7a]"
          >
            OPEN PO
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-[#faf2ec]/60 sm:px-6">
          © 2026 AZZURA X ANEXPO2026
        </p>
      </div>
    </footer>
  );
}
