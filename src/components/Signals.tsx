import { useTranslations } from "next-intl";
import { Cpu, GitBranch, ShieldCheck, Wallet } from "lucide-react";
import { Shell, Card, SectionLabel } from "./ui";

const signalIcons = [Cpu, GitBranch, ShieldCheck, Wallet];

export default function Signals() {
  const t = useTranslations("signals");
  const cards = t.raw("cards") as { title: string; body: string }[];

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

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = signalIcons[index % signalIcons.length];
            return (
              <Card key={card.title} className="p-6 md:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/8 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                  {card.title}
                </div>
                <p className="mt-3 text-[15px] leading-7 text-white/60">{card.body}</p>
              </Card>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
