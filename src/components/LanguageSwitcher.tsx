"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeConfig: Record<string, { flag: string; name: string }> = {
  "zh-CN": { flag: "🇨🇳", name: "简体中文" },
  "zh-TW": { flag: "🇨🇳", name: "繁體中文" },
  en: { flag: "🇺🇸", name: "English" },
  ko: { flag: "🇰🇷", name: "한국어" },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const switchLocale = (next: string) => {
    router.replace(pathname, { locale: next });
    setOpen(false);
  };

  const current = localeConfig[locale] ?? localeConfig["en"];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-[0.72rem] text-[#666] font-mono tracking-[1px] hover:text-cyan transition-colors duration-200 px-2 py-1 border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,245,212,0.2)]"
        aria-label="Switch language"
      >
        <span className="text-[0.9rem]">{current.flag}</span>
        <span className="hidden sm:inline">{current.name}</span>
        <span className="text-[0.5rem] opacity-50">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 z-[2000] bg-[rgba(5,5,5,0.96)] border border-[rgba(0,245,212,0.15)] backdrop-blur-sm min-w-[140px] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
          {routing.locales.map((loc) => {
            const cfg = localeConfig[loc];
            const isActive = loc === locale;
            return (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-[0.72rem] font-mono tracking-[0.5px] text-left transition-colors duration-150
                  ${
                    isActive
                      ? "text-cyan bg-[rgba(0,245,212,0.06)]"
                      : "text-[#666] hover:text-white hover:bg-[rgba(255,255,255,0.04)]"
                  }`}
              >
                <span className="text-[0.9rem]">{cfg.flag}</span>
                <span>{cfg.name}</span>
                {isActive && (
                  <span className="ml-auto text-[0.5rem] text-cyan">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
