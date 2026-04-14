interface SectionHeaderProps {
  label: string;
  title: string;
  desc: string;
  center?: boolean;
}

export default function SectionHeader({ label, title, desc, center = false }: SectionHeaderProps) {
  return (
    <>
      <div className="font-mono text-[0.6rem] text-magenta tracking-[5px] uppercase mb-3.5">
        {label}
      </div>
      <div className="font-[Orbitron,sans-serif] text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white tracking-[3px] mb-4">
        {title}
      </div>
      <div className={`text-[#777] text-base max-w-[560px] leading-[1.8] mb-14 ${center ? "mx-auto" : ""}`}>
        {desc}
      </div>
    </>
  );
}
