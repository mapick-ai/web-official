"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const gradients = [
  "from-cyan to-magenta",
  "from-magenta to-yellow",
  "from-yellow to-cyan",
];
const labelColors = ["text-cyan", "text-magenta", "text-yellow"];

export default function ValueProps() {
  const t = useTranslations("valueProps");
  const items = t.raw("items") as Array<{
    icon: string; num: string; label: string; name: string; desc: string;
  }>;

  return (
    <section id="why" className="py-[120px] px-10 max-w-[1200px] mx-auto relative">
      <div className="font-mono text-[0.6rem] text-magenta tracking-[5px] uppercase mb-3.5">
        {t("eyebrow")}
      </div>
      <div className="font-[Orbitron,sans-serif] text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white tracking-[3px] mb-4">
        {t("title")}
      </div>
      <div className="text-[#777] text-base max-w-[560px] leading-[1.8] mb-14">
        {t("subtitle")}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((v, i) => (
          <ScrollReveal key={i}>
            <div className="group bg-[rgba(10,10,10,0.75)] border border-[rgba(255,255,255,0.05)] p-11 px-8 relative overflow-hidden transition-all duration-400 hover:border-[rgba(0,245,212,0.2)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,245,212,0.06)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-gradient-to-r before:from-cyan before:to-magenta before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100">
              <div className="text-[2.4rem] mb-5">{v.icon}</div>
              <div className={`font-[Orbitron,sans-serif] text-5xl font-black bg-gradient-to-br ${gradients[i]} bg-clip-text text-transparent mb-2 leading-tight`}>
                {v.num}
              </div>
              <div className={`font-[Orbitron,sans-serif] text-[0.75rem] font-bold ${labelColors[i]} uppercase tracking-[3px] mb-1`}>
                {v.label}
              </div>
              <div className="text-[1.15rem] font-black text-[#eee] mb-3">{v.name}</div>
              <div className="text-[0.92rem] text-[#777] leading-[1.7]">{v.desc}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
