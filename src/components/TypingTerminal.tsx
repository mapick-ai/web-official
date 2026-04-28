"use client";

import { useEffect, useState } from "react";

type Line = { who: string; text: string };

export default function TypingTerminal({
  lines,
  startDelay = 0,
}: {
  lines: Line[];
  startDelay?: number;
}) {
  const [typed, setTyped] = useState<string[]>(() => lines.map(() => ""));
  const [activeLine, setActiveLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function run() {
      await sleep(startDelay);

      while (!cancelled) {
        setTyped(lines.map(() => ""));
        setActiveLine(0);
        setShowCursor(true);

        for (let i = 0; i < lines.length; i += 1) {
          setActiveLine(i);

          for (let c = 0; c <= lines[i].text.length; c += 1) {
            if (cancelled) return;

            setTyped((prev) =>
              prev.map((value, idx) => {
                if (idx < i) return lines[idx].text;
                if (idx === i) return lines[i].text.slice(0, c);
                return "";
              }),
            );

            const char = lines[i].text[c] ?? "";
            const isUser = lines[i].who === "you";
            const delay = char === " " ? 12 : isUser ? 28 : 18;
            await sleep(delay);
          }

          await sleep(i === 0 ? 380 : 280);
        }

        setShowCursor(false);
        await sleep(1200);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [lines, startDelay]);

  return (
    <div className="demo-term">
      <div className="demo-term-bar">
        <i />
        <i />
        <i />
        <span>mapick</span>
      </div>
      <div className="demo-term-body">
        {lines.map((line, index) => (
          <div key={`${line.who}-${index}`} className="demo-line">
            <span className={line.who === "you" ? "who-user" : "who"}>{line.who}: </span>
            {typed[index]}
            {showCursor && index === activeLine ? <span className="demo-cursor" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
