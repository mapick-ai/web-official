"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const memberImages = ["/ai-pm.png", "/char-qa.png", "/mapick_2.png"];
const memberBorders = [
  "border-[rgba(0,245,212,0.15)]",
  "border-[rgba(255,190,11,0.2)]",
  "border-[rgba(255,0,110,0.2)]",
];
const memberReverse = [false, false, true];

export default function Team() {
  const t = useTranslations("team");
  const items = t.raw("items") as Array<{
    badge: string; role: string; name: string; bio: string;
  }>;

  return (
    <section id="team" className="py-[120px] px-10 max-w-[1200px] mx-auto relative">
      <div className="font-mono text-[0.6rem] text-magenta tracking-[5px] uppercase mb-3.5">
        {t("eyebrow")}
      </div>
      <div className="font-[Orbitron,sans-serif] text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white tracking-[3px] mb-4">
        {t("title")}
      </div>
      <div className="text-[#777] text-base max-w-[560px] leading-[1.8] mb-14">
        {t("subtitle")}
      </div>

      {items.map((m, i) => (
        <ScrollReveal key={i}>
          <div className={`flex flex-col md:flex-row gap-10 items-center mb-14 ${memberReverse[i] ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-none w-[260px] relative">
              <Image
                src={memberImages[i]}
                alt={m.name}
                width={260}
                height={260}
                className={`w-full rounded grayscale-[0.2] contrast-[1.1] border-2 ${memberBorders[i]}`}
              />
              <div className={`absolute -bottom-2.5 bg-magenta text-white font-mono text-[0.45rem] py-[7px] px-3 tracking-[3px] ${memberReverse[i] ? "left-[-10px] rotate-[3deg]" : "-right-2.5 -rotate-3"}`}>
                {m.badge}
              </div>
            </div>
            <div>
              <div className="font-[Orbitron,sans-serif] text-[0.7rem] text-cyan uppercase tracking-[4px] mb-1.5">{m.role}</div>
              <div className="text-[1.6rem] font-black text-white mb-3">{m.name}</div>
              <p className="text-[#777] text-[0.95rem] leading-[1.8]">{m.bio}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
