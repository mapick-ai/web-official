import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const siteUrl = "https://mapick.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mapick — Privacy layer for your AI agent",
  description:
    "Mapick is a personal skill advisor with a built-in privacy layer for your OpenClaw agent. Recommends what you need, cleans what you don't use, blocks what's unsafe.",
  keywords: [
    "MCP", "AI Agent", "OpenClaw", "ClawHub", "Skill recommendation",
    "Skill management", "AI privacy", "Mapick", "zombie skill cleanup",
    "developer persona", "skill bundles", "Model Context Protocol",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mapick — Privacy layer for your AI agent",
    description: "Personal skill advisor with a built-in privacy layer. Recommends, cleans, and protects your OpenClaw agent.",
    siteName: "Mapick",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mapick" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mapick — Privacy layer for your AI agent",
    description: "Personal skill advisor with a built-in privacy layer. Recommends, cleans, and protects your OpenClaw agent.",
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
  operatingSystem: "OpenClaw, MCP-compatible tools",
  url: siteUrl,
  description: "Privacy layer for your AI agent. Personal skill advisor that recommends what you need, cleans what you don't use, and blocks what's unsafe.",
  featureList: [
    "Privacy protection with on-device redaction engine",
    "Smart skill recommendations matched to your workflow",
    "Zombie cleanup for unused or idle skills",
    "Security scoring with code, permission, and community signals",
    "Developer persona generation",
    "11 pre-built skill bundles",
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
