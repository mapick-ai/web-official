"use client";

import { useTranslations } from "next-intl";
import { Check, Share2 } from "lucide-react";
import { Shell, Card, SectionLabel } from "./ui";
import { CopyFullButton } from "./CopyButton";

interface StatItem {
  label: string;
  value: string;
  sub: string;
}

interface SkillItem {
  name: string;
  desc: string;
  freq: string;
}

export default function ShareSection() {
  const t = useTranslations("share");
  const bullets = t.raw("bullets") as string[];
  const audiences = t.raw("audiences") as string[];
  const stats = t.raw("stats") as StatItem[];
  const skills = t.raw("skills") as SkillItem[];

  return (
    <section className="pt-16 md:pt-24">
      <Shell>
        <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <div className="max-w-xl pt-2">
            <SectionLabel>{t("tag")}</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/58">{t("body")}</p>

            <div className="mt-6 rounded-[24px] border border-cyan-300/12 bg-cyan-300/[0.06] p-5 text-[15px] leading-7 text-white/72">
              &ldquo;{t("quote")}&rdquo;
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {audiences.map((item: string) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              {bullets.map((item: string) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-7 text-white/70"
                >
                  <Check className="mt-1 h-4 w-4 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-semibold text-black transition hover:bg-cyan-200">
              {t("cta")}
            </button>
          </div>

          <Card className="overflow-hidden p-0">
            <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#5f3658]" />
                <span className="h-3 w-3 rounded-full bg-[#1cb5b0]/50" />
                <span className="h-3 w-3 rounded-full bg-[#163b3a]" />
              </div>
              <div className="font-mono text-xs text-white/28">{t("cardLink")}</div>
            </div>

            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/15 bg-white/[0.04] text-3xl">
                    🦞
                  </div>
                  <div>
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {t("user")}
                    </div>
                    <div className="mt-1 text-[15px] text-white/42">{t("role")}</div>
                  </div>
                </div>
                <span className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                  {t("badge")}
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-300/12 bg-cyan-300/[0.06] px-5 py-4 font-mono text-[15px] leading-7 text-cyan-300">
                {t("highlight")}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[22px] border border-white/8 bg-black/20 px-5 py-5"
                  >
                    <div className="text-[15px] text-white/32">{stat.label}</div>
                    <div className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[15px] text-white/28">{stat.sub}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/65">
                {t("skillsTitle")}
              </div>

              <div className="mt-5 space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-2xl tracking-[-0.03em] text-white">
                        {skill.name}{" "}
                        <span className="ml-2 text-[15px] text-white/28">{skill.desc}</span>
                      </div>
                    </div>
                    <div className="text-[15px] font-medium text-cyan-300/70">{skill.freq}</div>
                  </div>
                ))}
              </div>

              <CopyFullButton text={t("cardLink")}>
                <Share2 className="h-5 w-5" />
                {t("cardCopy")}
              </CopyFullButton>
            </div>
          </Card>
        </div>
      </Shell>
    </section>
  );
}
