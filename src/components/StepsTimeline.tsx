import { useLocale, useTranslations } from "next-intl";
import Reveal from "./Reveal";

const tagByLocale: Record<string, { auto: string; sharp: string }> = {
  en: { auto: "Auto-runs", sharp: "Gets sharper" },
  ko: { auto: "자동 실행", sharp: "점점 정확해짐" },
  "zh-CN": { auto: "自动运行", sharp: "越用越准" },
  "zh-TW": { auto: "自動運行", sharp: "越用越準" },
};

export default function StepsTimeline() {
  const t = useTranslations("steps");
  const locale = useLocale();
  const items = t.raw("items") as string[][];
  const tags = tagByLocale[locale] ?? tagByLocale.en;

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
