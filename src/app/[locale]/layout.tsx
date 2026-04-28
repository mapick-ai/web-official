import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const siteUrl = "https://mapick.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mapick — Skill manager for MCP-compatible tools",
  description:
    "Mapick helps you discover better-fit Skills, clean up noisy setups, reduce wasted AI spend, and build a stack worth keeping. 13,000+ Skills on ClawHub.",
  keywords: [
    "MCP", "AI Agent", "Skill recommendation", "Skill management", "workflow optimization",
    "Mapick", "scenario bundles", "friend recommendations", "Skill discovery",
    "Claude Code", "Codex", "Cursor", "Windsurf", "OpenClaw",
    "Model Context Protocol", "MCP Server",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mapick — MCP Skill Butler + AI Model Router",
    description: "13,000+ Skills — the longer you use it, the better it knows you. Auto-recommendations, zombie cleanup, scenario bundles.",
    siteName: "Mapick",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mapick" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mapick — MCP Skill Butler + AI Model Router",
    description: "13,000+ Skills — the longer you use it, the better it knows you. Auto-recommendations, zombie cleanup, scenario bundles.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: siteUrl },
  other: { "llms-txt": `${siteUrl}/llms.txt` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Mapick",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "MCP-compatible tools",
  url: siteUrl,
  description: "Cross-platform MCP Skill butler and AI model routing engine. Analyzes workflow habits, precisely recommends Skills, auto-cleans zombie tools, and filters risks with security scoring.",
  offers: [{ "@type": "Offer", name: "Developer Data API", price: "19", priceCurrency: "USD" }],
  featureList: [
    "5-layer recommendation engine (collaborative filtering + task classifier + social graph + security filter + real-time feedback)",
    "Skill lifecycle management", "11 scenario bundles", "3-tier security scoring", "Social recommendation graph", "Developer Data API",
  ],
  provider: { "@type": "Organization", name: "Mapick", url: siteUrl },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
