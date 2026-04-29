export type Taste = {
  tags: string[];
  total: number;
  active: number;
  zombie: number;
  rate: number;
  top: { name: string; calls: number }[];
};

const DEFAULTS: Taste = {
  tags: ["Collector", "Hardcore Geek", "Hoarder"],
  total: 47,
  active: 14,
  zombie: 19,
  rate: 30,
  top: [
    { name: "github", calls: 12 },
    { name: "docker", calls: 8 },
    { name: "summarize", calls: 5 },
  ],
};

function toInt(value: string | string[] | undefined, fallback: number): number {
  if (typeof value !== "string") return fallback;
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) ? n : fallback;
}

function toList(value: string | string[] | undefined): string[] | null {
  if (typeof value !== "string" || !value.trim()) return null;
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function titleCase(s: string): string {
  return s
    .split(/[\s-]+/)
    .map((p) => (p ? p[0].toUpperCase() + p.slice(1).toLowerCase() : ""))
    .join(" ");
}

function parseTop(value: string | string[] | undefined): Taste["top"] | null {
  const list = toList(value);
  if (!list) return null;
  const out: Taste["top"] = [];
  for (const item of list) {
    const [name, calls] = item.split(":");
    if (!name) continue;
    out.push({ name: name.trim(), calls: Number.parseInt(calls ?? "0", 10) || 0 });
  }
  return out.length > 0 ? out : null;
}

export function parseTaste(
  searchParams: Record<string, string | string[] | undefined> | URLSearchParams,
): Taste {
  const get = (k: string) => {
    if (searchParams instanceof URLSearchParams) return searchParams.get(k) ?? undefined;
    return searchParams[k];
  };

  const tagsList = toList(get("tags"));
  const tags = tagsList ? tagsList.map(titleCase) : DEFAULTS.tags;
  const top = parseTop(get("top")) ?? DEFAULTS.top;

  return {
    tags,
    total: toInt(get("total"), DEFAULTS.total),
    active: toInt(get("active"), DEFAULTS.active),
    zombie: toInt(get("zombie"), DEFAULTS.zombie),
    rate: toInt(get("rate"), DEFAULTS.rate),
    top,
  };
}

export function trivia(taste: Taste): string {
  const pct = Math.min(95, Math.max(15, Math.round(taste.total * 1.74)));
  return `More skills than ${pct}% of OpenClaw users`;
}
