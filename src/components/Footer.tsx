"use client";

import { useTranslations } from "next-intl";

// Contact links — append new entries here
const contactLinks = [
  {
    href: "https://discord.gg/ju8rzvtm5",
    label: "Discord",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
      </svg>
    ),
    color: "hover:text-[#5865F2] hover:border-[rgba(88,101,242,0.4)]",
  },
];

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-14 px-10 text-center border-t border-[rgba(255,255,255,0.04)]">
      <div className="font-[Orbitron,sans-serif] text-[0.9rem] text-cyan tracking-[8px] uppercase mb-3.5">
        MAPICK
      </div>
      <p className="text-[#3a3a3a] text-[0.78rem] tracking-[2px] mb-8">
        {t("tagline")}
      </p>

      {/* Contact */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <span className="text-[#333] text-[0.65rem] tracking-[2px] uppercase font-mono">
          {t("contact_title")}
        </span>
        <span className="text-[#222] text-[0.5rem]">—</span>
        {contactLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-[#555] text-[0.72rem] font-mono tracking-[1px] border border-[rgba(255,255,255,0.06)] px-3 py-1.5 transition-all duration-200 ${link.color} hover:bg-[rgba(255,255,255,0.03)]`}
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      <div className="inline-block py-1.5 px-3.5 border border-[rgba(255,0,110,0.25)] text-magenta font-mono text-[0.45rem] tracking-[3px] rotate-2">
        PUNK IS NOT DEAD
      </div>
    </footer>
  );
}
