import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { Icon, type IconName } from "./Icons";

type Card = { icon: IconName; title: string; body: string };

export default function Problem() {
  const t = useTranslations("problem");
  const cards = t.raw("cards") as Card[];

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
        <Reveal>
          <div className="problem-grid">
            {cards.map((card, i) => {
              const Ico = Icon[card.icon] ?? Icon.lock;
              return (
                <div key={card.title} className={`problem-card c${i + 1}`}>
                  <div className="ix">{String(i + 1).padStart(2, "0")}</div>
                  <div className="hdr">
                    <div className="problem-ico">
                      <Ico />
                    </div>
                  </div>
                  <div className="problem-title">{card.title}</div>
                  <div className="problem-body">{card.body}</div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
