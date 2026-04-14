"use client";

import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Shell, Card, SectionLabel } from "./ui";

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {}
}

interface BundleCard {
  id: string;
  role: string;
  stat: string;
  stack: string;
  url: string;
}

export default function Bundles() {
  const t = useTranslations("bundles");
  const cards = t.raw("cards") as BundleCard[];

  return (
    <section className="pt-16 md:pt-24">
      <Shell>
        <SectionLabel>{t("tag")}</SectionLabel>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/58">{t("body")}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <Card key={card.id} className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/85">
                    {card.id}
                  </div>
                  <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {card.role}
                  </div>
                </div>
                <span className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-2 text-xs font-medium text-cyan-300">
                  {card.stat}
                </span>
              </div>

              <div className="mt-6 rounded-[22px] border border-white/8 bg-black/20 px-5 py-5">
                <div className="text-xs uppercase tracking-[0.22em] text-white/28">
                  {t("coreStack")}
                </div>
                <div className="mt-3 text-[15px] leading-7 text-white/70">{card.stack}</div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/8 bg-black/25 px-4 py-3 font-mono text-xs leading-6 text-cyan-300/90">
                {card.url}
              </div>

              <button
                onClick={() => copyText(card.url)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                {t("copyBtn")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </Card>
          ))}
        </div>
      </Shell>
    </section>
  );
}
