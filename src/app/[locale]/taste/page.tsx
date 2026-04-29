import type { Metadata } from "next";
import "./taste.css";
import InstallChooser from "./InstallChooser";
import { parseTaste, trivia } from "./parseSearchParams";

const siteUrl = "https://mapick.ai";

type SearchParams = Record<string, string | string[] | undefined>;

function buildOgImageUrl(searchParams: SearchParams): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (typeof value === "string") params.set(key, value);
  }
  const query = params.toString();
  return `${siteUrl}/api/og-taste${query ? `?${query}` : ""}`;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const params = await searchParams;
  const taste = parseTaste(params);
  const tagText = taste.tags.join(" + ");
  const title = `My AI taste: ${tagText}`;
  const description = `${taste.total} skills, ${taste.zombie} zombies, ${taste.rate}% activation. What's yours?`;
  const ogImage = buildOgImageUrl(params);

  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      siteName: "Mapick",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function TastePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const taste = parseTaste(params);
  const tagText = taste.tags.join(" + ");

  return (
    <div className="taste-page">
      <div className="taste-shell">
        <div className="taste-card">
          <div className="taste-eyebrow">My AI taste</div>
          <h1 className="taste-title">{tagText}</h1>

          <div className="taste-stats">
            <div className="taste-stat s1">
              <span className="v">{taste.total}</span>
              <span className="k">skills installed</span>
            </div>
            <div className="taste-stat s2">
              <span className="v">{taste.active}</span>
              <span className="k">active</span>
            </div>
            <div className="taste-stat s3">
              <span className="v">{taste.zombie}</span>
              <span className="k">zombies</span>
            </div>
            <div className="taste-stat s4">
              <span className="v">{taste.rate}%</span>
              <span className="k">activation</span>
            </div>
          </div>

          <div className="taste-divider" />

          <div className="taste-stack-label">Top stack</div>
          <div className="taste-stack">
            {taste.top.map((item) => (
              <span key={item.name} className="taste-pill">
                {item.name} {item.calls}x/day
              </span>
            ))}
          </div>

          <div className="taste-trivia">{trivia(taste)}</div>
        </div>

        <div className="taste-cta-wrap">
          <InstallChooser label="Test my AI taste" />
          <div className="taste-cta-sub">
            Install Mapick on OpenClaw — takes 30 seconds
          </div>
        </div>

        <section id="how-it-works" className="taste-howit">
          <h2>How it works</h2>
          <ol className="taste-steps">
            <li className="taste-step">
              <div className="taste-step-num">1</div>
              <div>
                <div className="taste-step-title">Install Mapick</div>
                <div className="taste-step-body">openclaw skills install mapick</div>
              </div>
            </li>
            <li className="taste-step">
              <div className="taste-step-num">2</div>
              <div>
                <div className="taste-step-title">Say anything to your agent</div>
                <div className="taste-step-body">Mapick scans your skills automatically</div>
              </div>
            </li>
            <li className="taste-step">
              <div className="taste-step-num">3</div>
              <div>
                <div className="taste-step-title">Get your taste card</div>
                <div className="taste-step-body">Share and compare with friends</div>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
