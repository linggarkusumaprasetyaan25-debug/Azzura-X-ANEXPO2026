import { SITE } from "@/data/site";

export default function CTASection() {
  return (
    <section
      aria-label="Open PO"
      className="overflow-hidden rounded-3xl bg-[#2c1f21] px-6 py-12 text-center sm:px-12"
    >
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#d4af7a]">
        Open PO AZZURA X ANEXPO2026
      </p>
      <h2 className="font-display mx-auto mt-3 max-w-xl text-3xl font-bold text-white sm:text-4xl">
        Temukan produk AZZURA pilihanmu
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
        Pesan melalui Open PO AZZURA X ANEXPO2026.
      </p>
      <a
        href={SITE.openPoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#2c1f21] transition hover:bg-[#d4af7a]"
      >
        OPEN PO SEKARANG
      </a>
    </section>
  );
}
