"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { copyText } from "./ui";

export default function Navbar() {
  const t = useTranslations("nav");
  const tHero = useTranslations("hero");
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const command = tHero("command");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleInstall = useCallback(() => {
    copyText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }, [command]);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-icon">
            <img
              src="/mapick_logo.png"
              alt="Mapick"
              width={38}
              height={38}
              style={{ borderRadius: 8, objectFit: "cover", display: "block" }}
            />
          </div>
          <div>
            <div className="brand-name">{t("brand")}</div>
            <div className="brand-sub">{t("sub")}</div>
          </div>
        </div>
        <nav className="nav-links">
          <a className="nav-link" href="#features">
            {t("features")}
          </a>
          <a className="nav-link" href="#persona">
            {t("persona")}
          </a>
          <a
            className="nav-link"
            href="https://github.com/mapick-ai/mapick"
            target="_blank"
            rel="noreferrer"
          >
            {t("github")}
          </a>
        </nav>
        <div className="controls">
          <button className="cta-btn" onClick={handleInstall}>
            {copied ? "Copied" : t("install")}
          </button>
        </div>
      </div>
    </header>
  );
}
