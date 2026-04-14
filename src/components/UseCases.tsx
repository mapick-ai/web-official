"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const colorStyles = [
  { accentBorder: "border-l-cyan", tagStyle: "text-cyan bg-[rgba(0,245,212,0.06)] border-[rgba(0,245,212,0.15)]", dotColor: "bg-cyan", labelColor: "text-cyan" },
  { accentBorder: "border-l-magenta", tagStyle: "text-magenta bg-[rgba(255,0,110,0.06)] border-[rgba(255,0,110,0.15)]", dotColor: "bg-magenta", labelColor: "text-magenta" },
  { accentBorder: "border-l-yellow", tagStyle: "text-yellow bg-[rgba(255,190,11,0.06)] border-[rgba(255,190,11,0.15)]", dotColor: "bg-yellow", labelColor: "text-yellow" },
];

export default function UseCases() {
  const t = useTranslations("useCases");
  const items = t.raw("items") as Array<{
    tag: string; title: string;
    steps: Array<{ label: string; text: string }>;
  }>;

  return (
    <section id="cases" className="py-[120px] px-10 max-w-[1200px] mx-auto relative">
      <div className="font-mono text-[0.6rem] text-magenta tracking-[5px] uppercase mb-3.5">
        {t("eyebrow")}
      </div>
      <div className="font-[Orbitron,sans-serif] text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white tracking-[3px] mb-4">
        {t("title")}
      </div>
      <div className="text-[#777] text-base max-w-[560px] leading-[1.8] mb-14">
        {t("subtitle")}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {items.map((s, i) => {
          const style = colorStyles[i % colorStyles.length];
          return (
            <ScrollReveal key={i}>
              <div className={`p-7 bg-[rgba(10,10,10,0.6)] border border-[rgba(255,255,255,0.04)] border-l-[3px] ${style.accentBorder} h-full flex flex-col`}>
                <span className={`self-start text-[0.6rem] font-mono px-2 py-1 border tracking-[1px] mb-5 ${style.tagStyle}`}>
                  {s.tag}
                </span>
                <div className="font-[Orbitron,sans-serif] text-[0.95rem] font-black text-white mb-6 tracking-[1px] leading-[1.5]">
                  {s.title}
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  {s.steps.map((step, j) => (
                    <div key={j} className="flex gap-3">
                      <div className="flex flex-col items-center gap-1 flex-none pt-1">
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${style.dotColor}`} />
                        {j < s.steps.length - 1 && (
                          <div className="w-px flex-1 bg-[rgba(255,255,255,0.06)] min-h-[16px]" />
                        )}
                      </div>
                      <div className="pb-1">
                        <div className={`text-[0.6rem] font-mono tracking-[1px] mb-0.5 ${style.labelColor}`}>
                          {step.label}
                        </div>
                        <div className="text-[0.82rem] text-[#777] leading-[1.6]">{step.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
