import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import TypingTerminal from "./TypingTerminal";
import { Accent } from "./ui";

type Block = { caption: string; lines: { who: string; text: string }[] };

export default function Demo() {
  const t = useTranslations("demo");
  const blocks = t.raw("blocks") as Block[];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="text-center-wrap">
            <div className="section-label">{t("tag")}</div>
            <h2>
              <Accent text={t("title")} accent={t("accent")} />
            </h2>
          </div>
        </Reveal>
        <div className="demo-stack">
          {blocks.map((block, i) => (
            <Reveal key={block.caption}>
              <div className={`demo-block ${i % 2 === 1 ? "flip" : ""}`}>
                <div className="demo-caption">
                  <div className="demo-step-tag">STEP</div>
                  <div className="demo-step-row">
                    <div className="demo-step-num">{String(i + 1).padStart(2, "0")}</div>
                    <div className="demo-step-line" />
                    <div className="demo-step-of">/ {String(blocks.length).padStart(2, "0")}</div>
                  </div>
                  <p>{block.caption}</p>
                </div>
                <TypingTerminal lines={block.lines} startDelay={i * 450} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
