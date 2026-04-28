import Link from "next/link";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { Icon } from "./Icons";

export default function Trust() {
  const t = useTranslations("trust");
  const tOpen = useTranslations("trust.openSource");
  const tCtl = useTranslations("trust.control");

  const bullets = tOpen.raw("bullets") as string[];
  const collected = tCtl.raw("collected") as [string, string][];
  const notCollected = tCtl.raw("notCollected") as [string, string][];

  return (
    <section className="section">
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
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-head">
                <div className="trust-ico">
                  <Icon.doc />
                </div>
                <div className="trust-title">{tOpen("title")}</div>
              </div>
              <div className="trust-body">{tOpen("body")}</div>
              <ul className="trust-bullets">
                {bullets.map((b) => (
                  <li key={b}>
                    <span className="chk">
                      <Icon.check />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <pre className="trust-verify">{tOpen("verifyCmd")}</pre>
              <a
                className="trust-link"
                href="https://github.com/mapick-ai/mapick"
                target="_blank"
                rel="noreferrer"
              >
                {tOpen("link")}
              </a>
            </div>

            <div className="trust-card">
              <div className="trust-head">
                <div className="trust-ico">
                  <Icon.eyeOff />
                </div>
                <div className="trust-title">{tCtl("title")}</div>
              </div>
              <div className="data-table">
                <div className="data-col ok">
                  <h5>
                    <span className="dot" />
                    {tCtl("collectedLabel")}
                  </h5>
                  {collected.map(([k, v]) => (
                    <div key={k} className="data-row">
                      <span className="mk">✓</span>
                      <div>
                        <b>{k}</b>
                        {v && (
                          <div style={{ color: "var(--dim)", fontSize: 12, marginTop: 2 }}>
                            {v}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="data-col no">
                  <h5>
                    <span className="dot" />
                    {tCtl("notCollectedLabel")}
                  </h5>
                  {notCollected.map(([k, v]) => (
                    <div key={k} className="data-row">
                      <span className="mk">×</span>
                      <div>
                        <b>{k}</b>
                        {v && (
                          <div style={{ color: "var(--dim)", fontSize: 12, marginTop: 2 }}>
                            {v}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="data-ctrl">
                <div className="line">
                  <span>{tCtl("declineLabel")}</span>
                  <code>{tCtl("declineCmd")}</code>
                </div>
                <div className="line">
                  <span>{tCtl("deleteLabel")}</span>
                  <code>{tCtl("deleteCmd")}</code>
                </div>
              </div>
              <Link className="trust-link" href="/privacy">
                {tCtl("link")}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
