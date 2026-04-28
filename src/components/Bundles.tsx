"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import { Accent, copyText } from "./ui";

type Bundle = { id: string; name: string; count: string; stack: string };

export default function Bundles() {
  const t = useTranslations("bundles");
  const items = t.raw("items") as Bundle[];
  const [copiedId, setCopiedId] = useState("");

  const handleCopy = useCallback((id: string, stack: string) => {
    copyText(stack);
    setCopiedId(id);
    setTimeout(() => setCopiedId(""), 1400);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="text-center-wrap">
            <div className="section-label">{t("tag")}</div>
            <h2>
              <Accent text={t("title")} accent={t("accent")} />
            </h2>
            <p className="lead">{t("body")}</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="bundles-grid">
            {items.map((b, i) => {
              const featured = i === 0;
              return (
                <div
                  key={b.id}
                  className={`bundle-card${featured ? " featured" : ""}`}
                  data-featured={featured ? t("featuredLabel") : undefined}
                >
                  <div className="bundle-id">{b.id}</div>
                  <div className="bundle-name">{b.name}</div>
                  <div className="bundle-count">{b.count}</div>
                  <div className="bundle-stack">{b.stack}</div>
                  {featured && (
                    <div className="bundle-match">
                      <span>{t("matchLabel")}</span>
                      <span className="bar">
                        <i />
                      </span>
                      <span>65%</span>
                    </div>
                  )}
                  <button className="soft-btn" onClick={() => handleCopy(b.id, b.stack)}>
                    {copiedId === b.id ? "✓ Copied" : `⧉ ${t("cta")}`}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="bundle-list">{t("list")}</div>
        </Reveal>
      </div>
    </section>
  );
}
