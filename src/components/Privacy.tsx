"use client";

import { useTranslations } from "next-intl";

export default function Privacy() {
  const t = useTranslations("privacy");

  return (
    <section className="py-[120px] px-10 max-w-[1200px] mx-auto relative">
      <div className="text-center p-[60px] mt-20 bg-[linear-gradient(135deg,rgba(0,245,212,0.04),rgba(255,0,110,0.04))] border border-[rgba(0,245,212,0.08)]">
        <div className="text-[2.8rem] mb-4">🔒</div>
        <h3 className="font-[Orbitron,sans-serif] text-[1.3rem] text-white uppercase tracking-[5px] mb-4">
          {t("title")}
        </h3>
        <p className="text-[#777] text-[0.95rem] leading-[1.9] max-w-[520px] mx-auto">
          {t("desc")}
        </p>
      </div>
    </section>
  );
}
