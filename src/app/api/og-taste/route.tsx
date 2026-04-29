import { ImageResponse } from "next/og";
import { parseTaste, trivia } from "@/app/[locale]/taste/parseSearchParams";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const taste = parseTaste(searchParams);
  const tagText = taste.tags.join(" + ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#faf9f6",
          padding: "64px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#666", fontSize: 24 }}>My AI taste</div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            color: "#111",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            marginTop: 12,
          }}
        >
          {tagText}
        </div>

        <div style={{ display: "flex", gap: 18, marginTop: 36 }}>
          <Stat bg="#dde4f3" fg="#1f3a8a" sub="#2c4699" value={String(taste.total)} label="skills installed" />
          <Stat bg="#dde9ce" fg="#3f4e2f" sub="#4d5d3a" value={String(taste.active)} label="active" />
          <Stat bg="#f2d7d7" fg="#7a302d" sub="#8a3c39" value={String(taste.zombie)} label="zombies" />
          <Stat bg="#eee0cc" fg="#6b521a" sub="#7c6024" value={`${taste.rate}%`} label="activation" />
        </div>

        <div style={{ display: "flex", marginTop: 32, gap: 12, flexWrap: "wrap" }}>
          {taste.top.slice(0, 4).map((item) => (
            <div
              key={item.name}
              style={{
                display: "flex",
                background: "#efeee7",
                color: "#111",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 24,
              }}
            >
              {item.name} {item.calls}x/day
            </div>
          ))}
        </div>

        <div style={{ display: "flex", marginTop: "auto", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", color: "#444", fontSize: 24 }}>{trivia(taste)}</div>
          <div style={{ display: "flex", color: "#111", fontSize: 24, fontWeight: 700 }}>mapick.ai</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

function Stat({
  value,
  label,
  bg,
  fg,
  sub,
}: {
  value: string;
  label: string;
  bg: string;
  fg: string;
  sub: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: bg,
        borderRadius: 16,
        padding: "22px 28px",
        minWidth: 220,
      }}
    >
      <div style={{ display: "flex", color: fg, fontSize: 56, fontWeight: 700, lineHeight: 1 }}>{value}</div>
      <div style={{ display: "flex", color: sub, fontSize: 22, marginTop: 8 }}>{label}</div>
    </div>
  );
}
