export function Accent({ text, accent }: { text: string; accent?: string }) {
  if (!accent) return <>{text}</>;
  const idx = text.indexOf(accent);
  if (idx < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="accent">{accent}</span>
      {text.slice(idx + accent.length)}
    </>
  );
}

export function HeroTitle({ text, shimmerWord }: { text: string; shimmerWord?: string }) {
  if (!shimmerWord) return <>{text}</>;
  const idx = text.indexOf(shimmerWord);
  if (idx < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="word-shimmer">{shimmerWord}</span>
      {text.slice(idx + shimmerWord.length)}
    </>
  );
}

export function copyText(value: string) {
  if (typeof navigator !== "undefined") {
    navigator.clipboard?.writeText(value);
  }
}
