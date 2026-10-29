import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { DOKUMENTASI } from "@/data/dokumentasi";

export const metadata: Metadata = {
  title: "Dokumentasi — AZZURA X ANEXPO2026",
  description:
    "Dokumentasi kegiatan AZZURA X ANEXPO2026 selama 3 hari: Day 1 (26 Oktober), Day 2 (27 Oktober), dan Day 3 (28 Oktober 2026).",
};

export default function Dokumentasi() {
  return (
    <div className="fade-in mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#b06252]">
        Dokumentasi
      </p>
      <h1 className="font-display mt-2 text-4xl font-bold text-[#2c1f21]">
        Dokumentasi ANEXPO
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#3d2b2e]/70 sm:text-base">
        Momen AZZURA X ANEXPO2026 selama 3 hari kegiatan.
      </p>

      <div className="mt-8 space-y-12">
        {DOKUMENTASI.map((day) => (
          <section key={day.label} aria-label={`${day.label} — ${day.date}`}>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h2 className="font-display text-2xl font-bold text-[#2c1f21]">
                {day.label}
              </h2>
              <p className="text-sm font-medium text-[#8f4c40]">{day.date}</p>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {day.photos.map((p) => (
                <figure
                  key={p.src}
                  className="overflow-hidden rounded-2xl border border-[#f3e3d8] bg-white transition hover:shadow-lg"
                >
                  <div className="relative aspect-[4/5] w-full bg-[#faf2ec]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      loading="lazy"
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12">
        <CTASection />
      </div>
    </div>
  );
}
