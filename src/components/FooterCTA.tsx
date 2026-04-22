import Link from "next/link";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function FooterCTA() {
  const t = useTranslations("footer");
  const fl = useTranslations("footerLinks");
  const points = t.raw("points") as string[];

  return (
    <section className="section footer-wrap">
      <div className="container">
        <Reveal>
          <div className="footer-card">
            <div className="footer-inner">
              <div style={{ maxWidth: 760 }}>
                <div className="footer-kicker">Mapick</div>
                <h2
                  className="text-shimmer"
                  style={{ margin: 0, fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.05, letterSpacing: "-.05em" }}
                >
                  {t("title")}
                </h2>
                <p className="lead" style={{ marginTop: 14 }}>{t("body")}</p>
                <div className="footer-points">
                  {points.map((p) => (
                    <span key={p} className="footer-point">&#x2713; {p}</span>
                  ))}
                </div>
              </div>
              <button className="cta-btn">{t("cta")}</button>
            </div>
          </div>
        </Reveal>
        <div className="footer-note">{t("note")}</div>

        <div className="footer-links-section">
          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4>{fl("product")}</h4>
              <a href="#">{fl("docs")}</a>
              <a href="#">{fl("api")}</a>
              <a href="#">{fl("bundles")}</a>
              <a href="#persona">{fl("persona")}</a>
            </div>
            <div className="footer-links-col">
              <h4>{fl("community")}</h4>
              <a href="https://github.com/mapick-ai/mapick-skill" target="_blank" rel="noreferrer">{fl("github")}</a>
              <a href="https://discord.gg/gt55CgFZU5" target="_blank" rel="noreferrer">{fl("discord")}</a>
            </div>
            <div className="footer-links-col">
              <h4>{fl("legal")}</h4>
              <Link href="/privacy">{fl("privacy")}</Link>
              <Link href="/terms">{fl("terms")}</Link>
            </div>
          </div>
          <div className="footer-friends">
            <span className="footer-friends-label">{fl("ecosystem")}</span>
            <a href="https://clawhub.ai/" target="_blank" rel="noreferrer">ClawHub</a>
            <a href="https://openclaw.ai/" target="_blank" rel="noreferrer">OpenClaw</a>
            <a href="https://mapprotocol.io" target="_blank" rel="noreferrer">MAP Protocol</a>
          </div>
          <div className="footer-copy">{fl("copyright")}</div>
        </div>
      </div>
    </section>
  );
}
