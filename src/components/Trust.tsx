import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import { IconDoc, IconEyeOff, IconHeart } from "./Icons";

const icons = [IconDoc, IconEyeOff, IconHeart];
const links = [
  "https://github.com/mapick-ai/mapick-skill",
  "/privacy",
  "#about",
];

export default function Trust() {
  const t = useTranslations("trust");
  const cards = t.raw("cards") as string[][];

  return (
    <section className="trust-section">
      <div className="container">
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <div className="section-label">{t("tag")}</div>
            <h2>{t("title")}</h2>
            <p className="lead" style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 680 }}>
              {t("body")}
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="trust-grid">
            {cards.map((card, i) => {
              const Icon = icons[i];
              return (
                <div key={card[0]} className="trust-card">
                  <div className="trust-icon-svg">{Icon ? <Icon /> : null}</div>
                  <div className="trust-title">{card[0]}</div>
                  <div className="trust-body">{card[1]}</div>
                  <a className="trust-link" href={links[i]} target={links[i].startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {card[2]} →
                  </a>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
