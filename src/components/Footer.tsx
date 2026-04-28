import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("links");
  const productLinks = t.raw("productLinks") as [string, string][];
  const communityLinks = t.raw("communityLinks") as [string, string][];
  const legalLinks = t.raw("legalLinks") as [string, string][];
  const ecoLinks = t.raw("ecoLinks") as [string, string][];

  return (
    <footer className="container footer-links">
      <div className="footer-links-grid">
        <div className="footer-links-col">
          <h4>{t("product")}</h4>
          {productLinks.map(([lbl, url]) => (
            <a
              key={lbl}
              href={url}
              target={url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {lbl}
            </a>
          ))}
        </div>
        <div className="footer-links-col">
          <h4>{t("community")}</h4>
          {communityLinks.map(([lbl, url]) => (
            <a key={lbl} href={url} target="_blank" rel="noreferrer">
              {lbl}
            </a>
          ))}
        </div>
        <div className="footer-links-col">
          <h4>{t("legal")}</h4>
          {legalLinks.map(([lbl, url]) => (
            <Link key={lbl} href={url}>
              {lbl}
            </Link>
          ))}
        </div>
        <div className="footer-links-col">
          <h4>{t("ecosystem")}</h4>
          {ecoLinks.map(([lbl, url]) => (
            <a key={lbl} href={url} target="_blank" rel="noreferrer">
              {lbl}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-copy-row">
        <span>{t("copyLeft")}</span>
        <span>{t("copyRight")}</span>
      </div>
    </footer>
  );
}
