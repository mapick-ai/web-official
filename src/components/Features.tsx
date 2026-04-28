"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { Icon, type IconName } from "./Icons";

type Feature = {
  icon: IconName;
  badge: string;
  name: string;
  headline: string;
  body: string;
  demo: string[];
  link: string;
};

export default function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as Feature[];
  const [active, setActive] = useState(1);

  const activeItem = items[active] ?? items[0];
  const ActiveIco = Icon[activeItem.icon] ?? Icon.lock;

  return (
    <section className="section" id="features">
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
          <div className="feat-luxe-shell">
            <div className="feat-luxe-top">
              <div className="feat-luxe-tabs">
                {items.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    className={`feat-luxe-tab${index === active ? " active" : ""}`}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                  >
                    <span className="feat-luxe-tab-index">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="feat-luxe-board">
              <div key={activeItem.name} className="feat-luxe-grid">
                <div className="feat-luxe-copy">
                  <div className="feat-luxe-row">
                    <span className="feat-luxe-kicker">{activeItem.badge}</span>
                    <span className="feat-luxe-counter">
                      {`${t("counterPrefix")} ${String(active + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`}
                    </span>
                  </div>

                  <div className="feat-luxe-meter">
                    <i style={{ width: `${((active + 1) / items.length) * 100}%` }} />
                  </div>

                  <div className="feat-luxe-head">
                    <div className="feat-ico">
                      <ActiveIco />
                    </div>
                    <div>
                      <span className="feat-badge">{activeItem.badge}</span>
                      <div className="feat-name">{activeItem.name}</div>
                      <div className="feat-headline">{activeItem.headline}</div>
                    </div>
                  </div>

                  <p className="feat-luxe-body">{activeItem.body}</p>

                  {activeItem.link ? (
                    <div className="feat-luxe-footer">
                      <a href="#" className="feat-link">
                        {activeItem.link}
                      </a>
                    </div>
                  ) : null}
                </div>

                <div className="feat-luxe-demo-wrap">
                  <div className="feat-luxe-demo-shadow" />
                  <div className="feat-luxe-demo">
                    <div className="feat-luxe-demo-bar">
                      <i />
                      <i />
                      <i />
                      <span>{t("liveLabel")}</span>
                    </div>
                    <pre className="feat-luxe-demo-content">{activeItem.demo.join("\n")}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
