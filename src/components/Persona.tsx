"use client";

import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import { Accent, copyText } from "./ui";

export default function Persona() {
  const t = useTranslations("persona");
  const coreStack = t.raw("coreStack") as string[];
  const inventory = t.raw("inventory") as [string, string][];
  const workStats = t.raw("workStats") as [string, string, string][];
  const cardLink = t("cardLink");

  return (
    <section className="section" id="persona">
      <div className="container">
        <Reveal>
          <div className="text-center-wrap">
            <div className="section-label">{t("tag")}</div>
            <h2>
              <Accent text={t("title")} accent={t("accent")} />
            </h2>
            <p className="lead">{t("body")}</p>
          </div>
        </Reveal>
        <Reveal>
          <div className="persona-wrap">
            <div className="persona-card">
              <div className="persona-dots">
                <span className="pdot d1" />
                <span className="pdot d2" />
                <span className="pdot d3" />
              </div>
              <div className="persona-bar">
                <i />
                <i />
                <i />
                <span className="persona-bar-url">{cardLink}</span>
              </div>
              <div className="persona-body">
                <div className="persona-head">
                  <div>
                    <div className="persona-profile">{t("profile")}</div>
                    <h3 className="persona-name">{t("name")}</h3>
                    <div className="persona-match">
                      <span className="dot" />
                      <span>{t("match")}</span>
                    </div>
                  </div>
                </div>
                <div className="persona-taunt">{`“${t("taunt")}”`}</div>
                <div className="persona-stack">
                  {coreStack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="persona-inv">
                  {inventory.map(([k, v]) => (
                    <span key={k} className="pill">
                      {k}
                      <b>{v}</b>
                    </span>
                  ))}
                </div>
                <div className="persona-grid">
                  {workStats.map(([k, v, n], i) => (
                    <div key={k} className={`persona-stat${i === 0 ? " hl" : ""}`}>
                      <div className="k">{k}</div>
                      <div className="v">{v}</div>
                      <div className="n">{n}</div>
                    </div>
                  ))}
                </div>
                <div className="persona-share">
                  <div className="left">
                    <div className="arrow">↗</div>
                    <div>
                      <div className="title">{t("shareLabel")}</div>
                      <div className="url">{cardLink}</div>
                    </div>
                  </div>
                  <button className="cta-btn" onClick={() => copyText(cardLink)}>
                    {t("cta")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
