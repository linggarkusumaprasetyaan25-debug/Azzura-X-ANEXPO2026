import { SITE } from "@/data/site";

export default function SocialLinks({ light = false }: { light?: boolean }) {
  const cls = light
    ? "border-white/20 text-[#faf2ec] hover:bg-white/10"
    : "border-[#f3e3d8] text-[#3d2b2e] hover:bg-[#fbe9e5]";

  const link = `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${cls}`;

  return (
    <div className="flex flex-wrap gap-2">
      <a href={SITE.whatsappUrl} target="_blank" rel="noopener noreferrer" className={link} aria-label="Hubungi via WhatsApp">
        WhatsApp
      </a>
      <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer" className={link} aria-label="Buka Instagram">
        Instagram
      </a>
      <a href={SITE.tiktokUrl} target="_blank" rel="noopener noreferrer" className={link} aria-label="Buka TikTok">
        TikTok
      </a>
    </div>
  );
}
