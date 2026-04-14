"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const localeMap: [string, string][] = [
  ["en", "English"],
  ["zh-TW", "中文"],
  ["ko", "한"],
];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
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
        <div className="controls">
          <div className="lang-switch">
            {localeMap.map(([key, label]) => (
              <button
                key={key}
                className={`lang-btn ${locale === key ? "active" : ""}`}
                onClick={() => router.push(`/${key}`)}
              >
                {label}
              </button>
            ))}
          </div>
          <button className="cta-btn">{t("install")}</button>
        </div>
      </div>
    </header>
  );
}
