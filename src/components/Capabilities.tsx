import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import {
  IconIdCard,
  IconLayers,
  IconRadar,
  IconScan,
  IconShield,
} from "./Icons";

const RECS: [string, string][] = [
  ["capability-evolver", "98%"],
  ["ci-status-reporter", "92%"],
  ["docker-compose-lint", "87%"],
];

const STACK_CHIPS = ["GitHub Ops", "Code Review", "Docker", "CI/CD", "+3"];

export default function Capabilities() {
  const t = useTranslations("capabilities");
  const cards = t.raw("cards") as string[][];

  return (
    <section className="features-section">
      <div className="container">
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <div className="section-label">{t("tag")}</div>
            <h2>{t("title")}</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="bento-grid">
            {/* Hero card — Smart Recommendations */}
            <div className="cap-card cap-hero">
              <span className="cap-tag">{t("flagship")}</span>
              <div className="cap-ico cap-ico-lg">
                <IconRadar />
              </div>
              <div className="cap-title">{cards[0][0]}</div>
              <div className="cap-body">{cards[0][1]}</div>
              <div className="mini-rec">
                <div className="rec-hdr">
                  <span>{t("suggested")}</span>
                  <span style={{ color: "rgba(103,232,249,.70)" }}>{t("newCount")}</span>
                </div>
                {RECS.map(([name, match]) => (
                  <div key={name} className="rec-row">
                    <span style={{ color: "rgba(103,232,249,.90)" }}>→</span>
                    <span>{name}</span>
                    <span className="rec-match">{match}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow Bundles */}
            <div className="cap-card">
              <div className="cap-ico">
                <IconLayers />
              </div>
              <div className="cap-title">{cards[1][0]}</div>
              <div className="cap-body">{cards[1][1]}</div>
              <div className="stack-vis">
                {STACK_CHIPS.map((c) => (
                  <span key={c} className="stack-chip">{c}</span>
                ))}
              </div>
            </div>

            {/* Zombie Detection */}
            <div className="cap-card">
              <div className="cap-ico">
                <IconScan />
              </div>
              <div className="cap-title">{cards[2][0]}</div>
              <div className="cap-body">{cards[2][1]}</div>
              <div className="scan-bar">
                <span style={{ color: "rgba(165,243,252,.80)", fontWeight: 700 }}>
                  5 {t("idleLabel")}
                </span>
                <div className="scan-dots" />
                <span>/ 12</span>
              </div>
            </div>

            {/* Skill Persona */}
            <div className="cap-card">
              <div className="cap-ico cap-ico-violet">
                <IconIdCard />
              </div>
              <div className="cap-title">{cards[3][0]}</div>
              <div className="cap-body">{cards[3][1]}</div>
              <div className="persona-mini">
                <div className="persona-av">🌙</div>
                <div className="persona-meta-row">
                  <span className="persona-name-mini">{t("personaName")}</span>
                  <span className="persona-stat">87% MATCH · TOP 5%</span>
                </div>
              </div>
            </div>

            {/* Security Scoring */}
            <div className="cap-card">
              <div className="cap-ico">
                <IconShield />
              </div>
              <div className="cap-title">{cards[4][0]}</div>
              <div className="cap-body">{cards[4][1]}</div>
              <div className="sec-grade">
                <span className="sec-g sec-g-on">A</span>
                <span className="sec-g sec-g-dim">B</span>
                <span className="sec-g sec-g-dim2">C</span>
                <span className="sec-g">D</span>
                <span className="sec-g">F</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
