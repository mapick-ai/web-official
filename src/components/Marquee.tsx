import { useTranslations } from "next-intl";

export default function Marquee() {
  const t = useTranslations("hero");
  const lineStrip = t.raw("lineStrip") as string[];
  const items = [...lineStrip, ...lineStrip, ...lineStrip, ...lineStrip];

  return (
    <section className="marquee">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </section>
  );
}
