"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import { Accent, copyText } from "./ui";

export default function FooterCTA() {
  const t = useTranslations("footer");
  const tHero = useTranslations("hero");
  const command = tHero("command");
  const points = t.raw("points") as string[];
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    copyText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }, [command]);

  return (
    <section className="bottom-cta">
      <div className="container">
        <Reveal>
          <div className="bottom-card">
            <div className="bottom-glow">
              <i className="a" />
            </div>
            <h2>
              <Accent text={t("title")} accent={t("accent")} />
            </h2>
            <p className="lead">{t("body")}</p>
            <div className="bottom-cmd" onClick={handleCopy}>
              <code>
                <span style={{ color: "rgba(255,255,255,.35)" }}>$</span> {command}
                <span className="typeCursor" />
              </code>
              <button
                className="copy-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy();
                }}
              >
                {copied ? "✓" : "⧉"}
              </button>
            </div>
            <div className="bottom-points">
              {points.map((p) => (
                <span key={p}>
                  <span className="mk">✓</span>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
