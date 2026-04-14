"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

function copyText(v: string) {
  navigator.clipboard?.writeText(v);
}

export default function Hero() {
  const t = useTranslations("hero");
  const [cmdCopied, setCmdCopied] = useState(false);
  const particleRef = useRef<HTMLDivElement>(null);

  const stats = t.raw("stats") as string[];
  const title1 = t("title1");
  const title2 = t("title2");

  const heroH1 = useMemo(() => {
    const kw = "Skills";
    function applyShimmer(text: string) {
      const idx = text.indexOf(kw);
      if (idx >= 0) {
        return text.slice(0, idx) + '<span class="text-shimmer">' + kw + "</span>" + text.slice(idx + kw.length);
      }
      return text;
    }
    let html = applyShimmer(title1);
    if (title2) {
      html += '<br><span class="highlight">' + applyShimmer(title2) + "</span>";
    }
    return html;
  }, [title1, title2]);

  const handleCopyCmd = useCallback(() => {
    copyText(t("command"));
    setCmdCopied(true);
    setTimeout(() => setCmdCopied(false), 1200);
  }, [t]);

  useEffect(() => {
    const layer = particleRef.current;
    if (!layer) return;
    layer.innerHTML = "";
    for (let i = 0; i < 44; i++) {
      const el = document.createElement("div");
      el.className = "particle";
      const x = Math.random() * 100, y = Math.random() * 100, s = Math.random() * 2 + 1;
      const dur = Math.random() * 14 + 10, delay = Math.random() * -20;
      el.style.left = x + "%";
      el.style.top = y + "%";
      el.style.width = s + "px";
      el.style.height = s + "px";
      el.style.opacity = String(Math.random() * 0.45 + 0.15);
      el.style.animation = `floatY ${dur}s ease-in-out ${delay}s infinite`;
      layer.appendChild(el);
    }
  }, []);

  return (
    <section className="hero">
      <div className="particle-layer" ref={particleRef} />
      <div className="container">
        <div className="hero-wrap">
          <div className="badge">&#x2726; {t("badge")}</div>
          <h1 dangerouslySetInnerHTML={{ __html: heroH1 }} />
          <div className="hero-accent" />
          <p className="desc">{t("desc")}</p>
          <div className="command-box">
            <code><span style={{ color: "rgba(255,255,255,.35)" }}>$</span> {t("command")}</code>
            <button className="copy-btn" onClick={handleCopyCmd}>{cmdCopied ? "\u2713" : "\u29C9"}</button>
          </div>
          <div className="stats">
            {stats.map((s) => (
              <span key={s} className="stat-chip">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
