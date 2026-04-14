export function Shell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-6 md:px-8 ${className}`}>{children}</div>;
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
      {children}
    </div>
  );
}

export function LogoMark() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/15 bg-white/[0.04] text-3xl shadow-[0_0_30px_rgba(34,211,238,0.08)]">
      🦞
    </div>
  );
}
