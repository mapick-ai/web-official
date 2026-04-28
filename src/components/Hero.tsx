"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import { HeroTitle, copyText } from "./ui";

export default function Hero() {
  const t = useTranslations("hero");
  const [cmdCopied, setCmdCopied] = useState(false);

  const chips = t.raw("chips") as string[];
  const command = t("command");

  const handleCopyCmd = useCallback(() => {
    copyText(command);
    setCmdCopied(true);
    setTimeout(() => setCmdCopied(false), 1400);
  }, [command]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-wrap">
          <div className="badge">&#x2726; {t("badge")}</div>
          <h1>
            <HeroTitle text={t("title1")} shimmerWord={t("shimmerWord")} />
          </h1>
          <p className="desc">{t("desc")}</p>
          <div className="command-box" onClick={handleCopyCmd} title="Click to copy">
            <code>
              <span style={{ color: "rgba(255,255,255,.35)" }}>$</span> {command}
            </code>
            <button
              className="copy-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleCopyCmd();
              }}
            >
              {cmdCopied ? "✓" : "⧉"}
            </button>
          </div>
          <div className="chip-row">
            {chips.map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
          <div className="hero-small">{t("small")}</div>
        </div>
      </div>
    </section>
  );
}
