"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Array<{
    num: string; title: string; desc: string;
    comment_openclaw?: string; comment_others?: string;
  }>;

  return (
    <section id="how" className="py-[120px] px-10 max-w-[1200px] mx-auto relative">
      <div className="font-mono text-[0.6rem] text-magenta tracking-[5px] uppercase mb-3.5">
        {t("eyebrow")}
      </div>
      <div className="font-[Orbitron,sans-serif] text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white tracking-[3px] mb-4">
        {t("title")}
      </div>
      <div className="text-[#777] text-base max-w-[560px] leading-[1.8] mb-14">
        {t("subtitle")}
      </div>

      <div className="flex flex-col gap-0 max-w-[680px] mx-auto">
        {steps.map((step, i) => {
          const isEven = i % 2 === 1;
          return (
            <ScrollReveal key={i}>
              <div className="flex items-stretch">
                <div className="flex-[0_0_60px] flex items-center justify-center relative">
                  <div className={`w-3.5 h-3.5 rounded-full border-2 z-[2] bg-darker ${isEven ? "border-magenta" : "border-cyan"}`} />
                  <div className={`absolute left-1/2 w-0.5 bg-[rgba(0,245,212,0.1)] -translate-x-1/2 ${
                    i === 0 ? "top-1/2 bottom-0" : i === steps.length - 1 ? "top-0 bottom-1/2" : "top-0 bottom-0"
                  }`} />
                </div>
                <div className="flex-1 py-6 px-7 border-b border-[rgba(255,255,255,0.03)]">
                  <div className={`font-mono text-[0.5rem] tracking-[2px] mb-2 ${isEven ? "text-magenta" : "text-cyan"}`}>
                    {step.num}
                  </div>
                  <div className="text-[0.95rem] text-[#bbb] leading-[1.7]">
                    <b className="text-white">{step.title}</b> — {step.desc}
                  </div>
                  {step.comment_openclaw && (
                    <div className="mt-3 font-mono text-[0.68rem] bg-[rgba(0,0,0,0.35)] border border-[rgba(255,255,255,0.05)] px-3 py-2 text-[#555] leading-[1.8]">
                      <span className="text-[#444]">{step.comment_openclaw}</span>
                      <br />
                      <span className="text-cyan">clawhub</span>{" "}
                      <span className="text-[#888]">install mapick</span>
                      <br />
                      <span className="text-[#444]">{step.comment_others}</span>
                      <br />
                      <span className="text-cyan">claude</span>{" "}
                      <span className="text-[#888]">mcp add mapick https://mcp.mapick.ai</span>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
