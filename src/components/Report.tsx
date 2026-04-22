"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

function copyText(v: string) {
  navigator.clipboard?.writeText(v);
}

export default function Report() {
  const t = useTranslations("report");
  const stats = t.raw("stats") as string[][];
  const skills = t.raw("skills") as (string | boolean)[][];
  let recommendedBadge = "";
  try {
    recommendedBadge = t("recommendedBadge");
  } catch {
    recommendedBadge = "";
  }

  return (
    <section className="report-section">
      <div className="report-glow-1" />
      <div className="report-glow-2" />
      <div className="report-glow-3" />
      <div className="glow-line" />
      <div className="container">
        <Reveal className="text-center-wrap">
          <div style={{ textAlign: "center" }}>
            <div className="section-label">{t("tag")}</div>
            <h2>{t("title")}</h2>
            <p className="lead" style={{ marginLeft: "auto", marginRight: "auto", maxWidth: 720 }}>{t("body")}</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="report-card-wrap">
            <div className="report-card">
              <div className="report-window">
                <div className="window-left">
                  <div className="traffic"><span className="r" /><span className="y" /><span className="g" /></div>
                  <div className="window-label">Skill persona</div>
                </div>
                <div className="window-url">{t("cardLink")}</div>
              </div>
              <div className="report-inner">
                <div className="persona-head">
                  <div>
                    <div className="persona-meta">{t("profile")}</div>
                    <div className="persona-name text-shimmer">{t("persona")}</div>
                    <div className="persona-match"><span className="dot" /><span>{t("match")}</span></div>
                  </div>
                  <div className="report-stats-grid">
                    {stats.slice(0, 3).map((stat) => (
                      <div key={stat[0]} className="mini-stat">
                        <div className="big">{stat[1]}</div>
                        <div className="small">{stat[0]}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="taunt">
                  <q>{t("taunt")}</q>
                  <p>{t("quote")}</p>
                </div>
                <div className="report-skills">
                  {skills.map((skill) => {
                    const name = skill[0] as string;
                    const desc = skill[1] as string;
                    const freq = skill[2] as string;
                    const recommended = skill[3] as boolean | undefined;
                    return (
                      <div key={name} className="skill-card">
                        <div>
                          <div className="skill-name">
                            {name}
                            {recommended && recommendedBadge && (
                              <span className="skill-badge" title={recommendedBadge}>
                                {" "}· {recommendedBadge}
                              </span>
                            )}
                          </div>
                          <div className="skill-desc">{desc}</div>
                        </div>
                        <div className="skill-freq">{freq}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="share-box">
                  <div className="share-inner">
                    <div className="share-left">
                      <div className="share-icon">&#x2197;</div>
                      <div>
                        <div className="share-title">{t("shareLabel")}</div>
                        <div className="share-url">{t("cardLink")}</div>
                      </div>
                    </div>
                    <button className="cta-btn" onClick={() => copyText(t("cardLink"))}>{t("cta")}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="glow-line" style={{ marginTop: 40 }} />
    </section>
  );
}
