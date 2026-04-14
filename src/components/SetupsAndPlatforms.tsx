"use client";

import { useCallback, useState } from "react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

function copyText(v: string) {
  navigator.clipboard?.writeText(v);
}

const MCP_CONFIG = `{
  "mcpServers": {
    "mapick": {
      "url": "https://mcp.mapick.ai",
      "env": {
        "MAPICK_KEY": "your-key"
      }
    }
  }
}`;

export default function SetupsAndPlatforms() {
  const ts = useTranslations("setups");
  const tp = useTranslations("platforms");
  const [cfgCopied, setCfgCopied] = useState(false);
  const setupCards = ts.raw("cards") as string[][];
  const chips = tp.raw("chips") as string[];

  const handleCopyCfg = useCallback(() => {
    copyText(MCP_CONFIG);
    setCfgCopied(true);
    setTimeout(() => setCfgCopied(false), 1200);
  }, []);

  return (
    <section className="section">
      <div className="container setups-platforms">
        <Reveal>
          <div className="section-label">{ts("tag")}</div>
          <h2>{ts("title")}</h2>
          <p className="lead">{ts("body")}</p>
          <div className="setups-grid">
            {setupCards.map((card) => (
              <div key={card[0]} className="setup-card">
                <div className="setup-id">{card[0]}</div>
                <div className="setup-role">{card[1]}</div>
                <div className="setup-stat">{card[2]}</div>
                <div className="setup-stack">{card[3]}</div>
                <button className="soft-btn" onClick={() => copyText(card[3])}>&#x29C9; {ts("cta")}</button>
              </div>
            ))}
          </div>
          <div className="small-note">{ts("note")}</div>
        </Reveal>
        <Reveal>
          <div className="section-label">{tp("tag")}</div>
          <h2>{tp("title")}</h2>
          <p className="lead">{tp("body")}</p>
          <div className="platform-chips">
            {chips.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
          <div className="platform-card">
            <div className="platform-top">&#x1F310; {tp("configTitle")}</div>
            <div className="platform-body">{tp("configBody")}</div>
            <div className="code-block">{MCP_CONFIG}</div>
            <button className="soft-btn" onClick={handleCopyCfg}>&#x29C9; {cfgCopied ? "Copied" : tp("copyBtn")}</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
