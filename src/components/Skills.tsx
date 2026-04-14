"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "./ScrollReveal";

type ColorKey = "cyan" | "magenta" | "yellow";

const skillColorMap: Record<ColorKey, string> = {
  cyan: "text-cyan font-bold",
  magenta: "text-magenta font-bold",
  yellow: "text-yellow font-bold",
};

export default function Skills() {
  const t = useTranslations("skills");
  const feedItems = t.raw("feed_items") as Array<{
    avatars: string[]; text: string; skill: string; meta: string; retention: string; color: ColorKey;
  }>;
  const privacyItems = t.raw("privacy_items") as Array<{ icon: string; text: string }>;

  return (
    <section id="social" className="py-[120px] px-10 max-w-[1200px] mx-auto relative">
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
        {/* Feed */}
        <ScrollReveal>
          <div>
            <div className="font-[Orbitron,sans-serif] text-[0.7rem] font-bold text-cyan uppercase tracking-[4px] mb-5">
              {t("feed_title")}
            </div>
            <div className="space-y-3">
              {feedItems.map((item, i) => (
                <div key={i} className="p-5 bg-[rgba(10,10,10,0.7)] border border-[rgba(255,255,255,0.05)] font-mono text-[0.8rem] leading-[1.6]">
                  <div className="flex items-center gap-2 mb-2">
                    {item.avatars.map((a) => (
                      <div key={a} className="w-6 h-6 rounded-full flex items-center justify-center text-[0.6rem] font-black bg-[rgba(0,245,212,0.1)] border border-[rgba(0,245,212,0.2)] text-cyan">
                        {a}
                      </div>
                    ))}
                    <span className="text-[#666] text-[0.72rem]">👥</span>
                  </div>
                  <div className="text-[#777]">
                    {item.text}{" "}
                    <span className={skillColorMap[item.color] ?? "text-cyan font-bold"}>{item.skill}</span>
                  </div>
                  <div className="flex gap-4 mt-2 text-[0.67rem] text-[#555]">
                    <span>{item.meta}</span>
                    <span className="text-cyan">{item.retention}</span>
                  </div>
                  <div className="mt-3 flex gap-3">
                    <span className="text-[0.68rem] border border-[rgba(0,245,212,0.2)] text-cyan px-2.5 py-1 cursor-default hover:bg-[rgba(0,245,212,0.06)] transition-colors">
                      {t("install_btn")}
                    </span>
                    <span className="text-[0.68rem] border border-[rgba(255,255,255,0.08)] text-[#666] px-2.5 py-1 cursor-default">
                      {t("view_btn")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right: invite + privacy */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="p-7 bg-[rgba(10,10,10,0.6)] border border-[rgba(0,245,212,0.1)]">
              <div className="font-[Orbitron,sans-serif] text-[0.7rem] font-bold text-cyan uppercase tracking-[4px] mb-4">
                {t("invite_title")}
              </div>
              <p className="text-[#777] text-[0.88rem] leading-[1.8] mb-5">
                {t("invite_desc")}<span className="text-white">{t("invite_desc_bold")}</span>{t("invite_desc_end")}
              </p>
              <div className="font-mono text-[0.75rem] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.06)] p-4 text-[#888] space-y-1">
                <div className="text-[#555]">{t("invite_comment_openclaw")}</div>
                <div>
                  <span className="text-cyan">clawhub</span>{" "}
                  <span className="text-white">install mapick</span>{" "}
                  <span className="text-magenta">--invite=abc123</span>
                </div>
                <div className="text-[#555] pt-1">{t("invite_comment_others")}</div>
                <div>
                  <span className="text-cyan">mcp add mapick</span>{" "}
                  <span className="text-magenta">--invite=abc123</span>
                </div>
              </div>
              <p className="text-[#555] text-[0.75rem] mt-3">{t("invite_note")}</p>
            </div>

            <div className="p-7 bg-[rgba(10,10,10,0.6)] border border-[rgba(255,255,255,0.04)]">
              <div className="font-[Orbitron,sans-serif] text-[0.7rem] font-bold text-magenta uppercase tracking-[4px] mb-4">
                {t("privacy_title")}
              </div>
              <div className="space-y-3">
                {privacyItems.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 text-[0.85rem] text-[#777]">
                    <span className="text-base shrink-0">{p.icon}</span>
                    <span>{p.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-[rgba(255,255,255,0.04)] text-[0.72rem] text-[#555] leading-[1.7]">
                {t("privacy_footer")}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
