"use client";

import { useTranslations } from "next-intl";
import { Server, Globe } from "lucide-react";
import { Shell, Card, SectionLabel } from "./ui";
import { CopyButton } from "./CopyButton";

const MCP_CONFIG = `{
  "mcpServers": {
    "mapick": {
      "url": "https://mcp.mapick.ai",
      "env": {
        "MAPICK_KEY": "your-key"
      }
    }
  }
}`;

export default function Platforms() {
  const t = useTranslations("platforms");
  const items = t.raw("items") as { name: string; cmd: string }[];
  const configBullets = t.raw("configBullets") as string[];

  return (
    <section id="platforms" className="pt-14 md:pt-20">
      <Shell>
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <div className="max-w-xl pt-2">
            <SectionLabel>{t("tag")}</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/58">{t("body")}</p>
          </div>

          <Card className="p-6 md:p-7">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
              <Server className="h-4 w-4" />
              {t("configTitle")}
            </div>
            <p className="text-[15px] leading-7 text-white/60">{t("configBody")}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {configBullets.map((item: string) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-sm text-white/72"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[24px] border border-white/8 bg-black/25 p-5 font-mono text-[12px] leading-7 text-white/72 whitespace-pre-wrap">
              {MCP_CONFIG}
            </div>
            <CopyButton text={MCP_CONFIG} label={t("copyBtn")} />
          </Card>
        </div>

        <div className="mt-6">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/28">
            {t("supportedClients")}
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Card
                key={item.name}
                className="p-4 transition hover:border-cyan-300/18 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-2 text-sm font-semibold tracking-[-0.02em] text-white">
                  <Globe className="h-4 w-4 text-cyan-300" />
                  {item.name}
                </div>
                <div className="mt-3 rounded-xl border border-white/8 bg-black/20 px-3 py-3 font-mono text-[11px] leading-5 text-cyan-300/90">
                  {item.cmd}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}
