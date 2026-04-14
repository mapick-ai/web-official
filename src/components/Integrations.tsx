"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

type ColorKey = "cyan" | "magenta" | "yellow";

const colorStyles: Record<ColorKey, { border: string; tag: string; glow: string }> = {
  cyan: {
    border: "border-[rgba(0,245,212,0.15)]",
    tag: "text-cyan bg-[rgba(0,245,212,0.06)] border-[rgba(0,245,212,0.15)]",
    glow: "hover:shadow-[0_8px_40px_rgba(0,245,212,0.06)]",
  },
  magenta: {
    border: "border-[rgba(255,0,110,0.15)]",
    tag: "text-magenta bg-[rgba(255,0,110,0.06)] border-[rgba(255,0,110,0.15)]",
    glow: "hover:shadow-[0_8px_40px_rgba(255,0,110,0.06)]",
  },
  yellow: {
    border: "border-[rgba(255,190,11,0.15)]",
    tag: "text-yellow bg-[rgba(255,190,11,0.06)] border-[rgba(255,190,11,0.15)]",
    glow: "hover:shadow-[0_8px_40px_rgba(255,190,11,0.06)]",
  },
};

export default function Integrations() {
  const t = useTranslations("integrations");
  const items = t.raw("items") as Array<{
    icon: string; name: string; target: string; skills: string[]; cost: string; color: ColorKey;
  }>;

  return (
    <section id="bundles" className="py-[120px] px-10 max-w-[1200px] mx-auto relative">
      <div className="font-mono text-[0.6rem] text-magenta tracking-[5px] uppercase mb-3.5">
        {t("eyebrow")}
      </div>
      <div className="font-[Orbitron,sans-serif] text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white tracking-[3px] mb-4">
        {t("title")}
      </div>
      <div className="text-[#777] text-base max-w-[560px] leading-[1.8] mb-14">
        {t("subtitle")}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((b, i) => {
          const styles = colorStyles[b.color] ?? colorStyles.cyan;
          return (
            <ScrollReveal key={i}>
              <div className={`p-7 bg-[rgba(10,10,10,0.6)] border ${styles.border} relative overflow-hidden transition-all duration-300 ${styles.glow} hover:-translate-y-1 group`}>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[2rem] leading-none">{b.icon}</span>
                  <span className={`text-[0.6rem] font-mono px-2 py-1 border tracking-[1px] ${styles.tag}`}>
                    {b.target}
                  </span>
                </div>
                <div className="font-[Orbitron,sans-serif] text-[0.95rem] font-black text-white mb-3 tracking-[1px]">
                  {b.name}
                </div>
                <ul className="space-y-1.5 mb-5">
                  {b.skills.map((s, j) => (
                    <li key={j} className="flex items-center gap-2 text-[0.8rem] text-[#666]">
                      <span className="w-1 h-1 rounded-full bg-[#444] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.04)]">
                  <span className="text-[0.7rem] text-[#555] tracking-[0.5px]">{t("cost_label")}</span>
                  <span className="font-mono font-bold text-[0.85rem] text-[#bbb]">
                    {b.cost} <span className="text-[#555] font-normal">{t("cost_unit")}</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <div className="mt-12 text-center text-[#555] text-[0.82rem] leading-[1.7]">
        {t("bottom_note")}
      </div>
    </section>
  );
}
