"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

const statsJson = `{
  "skill_id": "summarize",
  "period": "2025-03",
  "installs": 4821,
  "active_30d": 3762,
  "retention_30d": 0.78,
  "uninstall_reasons": {
    "too_slow": 0.31,
    "replaced_by_other": 0.44,
    "no_longer_needed": 0.25
  },
  "task_categories": {
    "summarize_article": 0.52,
    "summarize_code": 0.29,
    "other": 0.19
  }
}`;

const earningsJson = `{
  "skill_id": "summarize",
  "month": "2025-03",
  "calls": 89204,
  "earnings_usd": 142.73,
  "payout_status": "pending"
}`;

function JsonBlock({ raw, tag }: { raw: string; tag: string }) {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.06)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)]">
        <span className="font-mono text-[0.6rem] text-[#555] tracking-[2px]">{tag}</span>
        <span className="ml-auto text-[0.58rem] text-yellow font-mono">{tag.includes("earnings") ? "💰" : "200 OK"}</span>
      </div>
      <pre className="p-5 font-mono text-[0.7rem] leading-[1.8] text-[#666] overflow-x-auto">
        {raw.split("\n").map((line, i) => {
          const key = line.match(/"([^"]+)":/)?.[1];
          const isNum = /:\s*[\d.]+/.test(line);
          const isStr = /:\s*"/.test(line);
          return (
            <div key={i}>
              {key ? (
                <>
                  <span className="text-[#555]">{line.slice(0, line.indexOf('"'))}</span>
                  <span className="text-cyan">&quot;{key}&quot;</span>
                  <span className="text-[#555]">{line.slice(line.indexOf(key) + key.length + 1, line.indexOf(":") + 1)}</span>
                  <span className={isNum ? "text-yellow" : isStr ? "text-magenta" : "text-[#666]"}>
                    {line.slice(line.indexOf(":") + 1)}
                  </span>
                </>
              ) : (
                <span className="text-[#555]">{line}</span>
              )}
            </div>
          );
        })}
      </pre>
    </div>
  );
}

export default function Developer() {
  const t = useTranslations("developer");
  const perks = t.raw("perks") as string[];

  return (
    <section id="dev" className="py-[120px] px-10 max-w-[1200px] mx-auto relative">
      <div className="font-mono text-[0.6rem] text-magenta tracking-[5px] uppercase mb-3.5">
        {t("eyebrow")}
      </div>
      <div className="font-[Orbitron,sans-serif] text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white tracking-[3px] mb-4">
        {t("title")}
      </div>
      <div className="text-[#777] text-base max-w-[560px] leading-[1.8] mb-14">
        {t("subtitle")}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <ScrollReveal>
          <div className="space-y-6">
            <div className="p-7 bg-[rgba(10,10,10,0.6)] border border-[rgba(255,190,11,0.15)]">
              <div className="flex items-end gap-2 mb-2">
                <span className="font-[Orbitron,sans-serif] text-[2.4rem] font-black text-yellow leading-none">{t("price")}</span>
                <span className="text-[#555] text-sm mb-1.5">{t("price_unit")}</span>
              </div>
              <div className="text-[#777] text-[0.85rem] mb-5 leading-[1.7]">{t("price_desc")}</div>
              <div className="space-y-2">
                {perks.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[0.82rem] text-[#666]">
                    <span className="text-yellow text-[0.6rem]">▸</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.06)] p-5 font-mono text-[0.72rem] leading-[1.9]">
              <div className="text-[#444] mb-2">{t("comment")}</div>
              <div>
                <span className="text-magenta">curl</span>{" "}
                <span className="text-[#888] break-all">https://api.mapick.ai/v1/dev/skills/summarize/stats</span>
              </div>
              <div className="pl-4">
                <span className="text-cyan">-H</span>{" "}
                <span className="text-yellow">&quot;Authorization: Bearer mk-xxxxxxxxxxxx&quot;</span>
              </div>
            </div>

            <div className="text-[#555] text-[0.75rem] leading-[1.7] pl-1">{t("tip")}</div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-4">
            <JsonBlock raw={statsJson} tag={t("stats_label")} />
            <JsonBlock raw={earningsJson} tag={t("earnings_label")} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
