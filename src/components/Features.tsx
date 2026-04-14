"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

export default function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{ icon: string; name: string; desc: string }>;

  return (
    <section id="features" className="py-[120px] px-10 max-w-[1200px] mx-auto relative">
      <div className="font-mono text-[0.6rem] text-magenta tracking-[5px] uppercase mb-3.5">
        {t("eyebrow")}
      </div>
      <div className="font-[Orbitron,sans-serif] text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white tracking-[3px] mb-4">
        {t("title")}
      </div>
      <div className="text-[#777] text-base max-w-[560px] leading-[1.8] mb-14">
        {t("subtitle")}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((f, i) => (
          <ScrollReveal key={i}>
            <div className="p-8 px-7 bg-[rgba(10,10,10,0.5)] border border-[rgba(255,255,255,0.04)] transition-all duration-300 relative hover:bg-[rgba(0,245,212,0.02)] hover:border-[rgba(0,245,212,0.1)] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
              <div className="text-[1.6rem] mb-3.5">{f.icon}</div>
              <div className="font-black text-[1.05rem] text-[#ddd] mb-2">{f.name}</div>
              <div className="text-[0.88rem] text-[#666] leading-[1.6]">{f.desc}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
