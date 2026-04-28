"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a className="nav-link" href="#">{t("docs")}</a>
          <a className="nav-link" href="https://github.com/mapick-ai/mapick-skill" target="_blank" rel="noreferrer">{t("github")}</a>
          <a className="nav-link" href="#persona">{t("persona")}</a>
        </nav>
        <div className="controls">
          <button className="cta-btn">{t("install")}</button>
        </div>
      </div>
    </header>
  );
}
