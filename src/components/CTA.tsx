"use client";

import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="text-center py-[160px] px-10 relative" id="cta">
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[160px] opacity-25 pointer-events-none bg-cyan bottom-[20%] left-[30%]" />
      <h2 className="font-[Orbitron,sans-serif] text-[clamp(1.8rem,5vw,3.5rem)] font-black text-white uppercase tracking-[5px] mb-5">
        <span className="glitch" data-text={t("title")}>{t("title")}</span>
      </h2>
      <p className="text-[#666] text-[1.05rem] mb-11 tracking-[1px]">
        {t("subtitle")}
      </p>
      <a
        href="#"
        className="inline-block px-12 py-4 font-[Orbitron,sans-serif] text-[0.9rem] font-bold uppercase tracking-[4px] text-black bg-cyan no-underline relative transition-all duration-300 hover:bg-white hover:shadow-[0_0_40px_rgba(0,245,212,0.35)] hover:-translate-y-0.5 before:content-[''] before:absolute before:top-1 before:left-1 before:-right-1 before:-bottom-1 before:border-2 before:border-magenta before:-z-10 before:transition-all before:duration-300 hover:before:top-1.5 hover:before:left-1.5 hover:before:-right-1.5 hover:before:-bottom-1.5"
      >
        {t("btn")}
      </a>
    </section>
  );
}
