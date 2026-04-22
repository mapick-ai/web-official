import { useTranslations } from "next-intl";

export default function StatsBanner() {
  const t = useTranslations("statsBanner");
  const items = t.raw("items") as string[][];

  return (
    <section className="stats-banner">
      <div className="container">
        <div className="stats-banner-inner">
          {items.map(([num, label]) => (
            <div key={label} className="stat-block">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
