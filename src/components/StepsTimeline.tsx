import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

const tags = { auto: "Auto-runs", sharp: "Gets sharper" };

export default function StepsTimeline() {
  const t = useTranslations("steps");
  const items = t.raw("items") as string[][];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div style={{ textAlign: "center" }}>
            <div className="section-label">{t("tag")}</div>
            <h2>{t("title")}</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="steps-wrap">
            <div className="steps-track" />
            <div className="steps-grid">
              {items.map((step, i) => (
                <div key={step[0]} className={`step-col ${i === 0 ? "active" : ""}`}>
                  <div className="step-node">{step[0]}</div>
                  <div className="step-title">{step[1]}</div>
                  <div className="step-body">{step[2]}</div>
                  {step[3] ? (
                    <div className="step-cmd">{step[3]}</div>
                  ) : (
                    <div className="step-tag">{i === 1 ? tags.auto : tags.sharp}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
