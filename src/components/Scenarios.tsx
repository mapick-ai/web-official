"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

interface ScenarioCard {
  name: string;
  label: string;
  steps: string[][];
}

export default function Scenarios() {
  const t = useTranslations("scenarios");
  const cards = t.raw("cards") as ScenarioCard[];
  const [tab, setTab] = useState(0);
  const active = cards[tab];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="scenario-top">
            <div>
              <div className="section-label">{t("tag")}</div>
              <h2>{t("title")}</h2>
              <p className="lead">{t("body")}</p>
            </div>
            <div className="tab-row">
              {cards.map((card, i) => (
                <button
                  key={card.name}
                  className={`tab-btn ${i === tab ? "active" : ""}`}
                  onClick={() => setTab(i)}
                >
                  {card.name}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="tab-panel" key={tab}>
            <div className="tab-label">{active.label}</div>
            <div className="flow">
              {active.steps.map((step, i) => (
                <div key={step[0]} className="flow-step">
                  {i < active.steps.length - 1 && <div className="arrow">&#x27A4;</div>}
                  <div className="flow-num">{i + 1}</div>
                  <div className="flow-title">{step[0]}</div>
                  <div className="flow-body">{step[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
