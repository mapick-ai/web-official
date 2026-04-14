import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

export default function FooterCTA() {
  const t = useTranslations("footer");
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
      </div>
    </section>
  );
}
