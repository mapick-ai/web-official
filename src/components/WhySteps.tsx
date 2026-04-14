import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

const whyIcons = ["\u2726", "\u2713", "\ud83d\udee1", "\u25eb", "\u2197"];

export default function WhySteps() {
  const tw = useTranslations("why");
  const ts = useTranslations("steps");
  const whyCards = tw.raw("cards") as string[][];
  const stepItems = ts.raw("items") as string[][];

  return (
    <section className="section">
      <div className="container grid-2">
        <Reveal>
          <div className="section-label">{tw("tag")}</div>
          <h2>{tw("title")}</h2>
          <p className="lead">{tw("body")}</p>
          <div className="why-list">
            {whyCards.map((card, i) => (
              <div key={card[0]} className="why-item">
                <div className="why-icon">{whyIcons[i % whyIcons.length]}</div>
                <div>
                  <span className="why-title">{card[0]}</span>
                  <span className="why-body">{card[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="section-label">{ts("tag")}</div>
          <h2>{ts("title")}</h2>
          <div className="step-list">
            {stepItems.map((step) => (
              <div key={step[0]} className="step-card">
                <div className="step-num text-shimmer">{step[0]}</div>
                <div className="step-title">{step[1]}</div>
                <div className="step-body">{step[2]}</div>
                {step[3] ? <div className="step-code">{step[3]}</div> : null}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
