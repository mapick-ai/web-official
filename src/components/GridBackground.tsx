export default function GridBackground() {
  return (
    <>
      <div className="grid-bg" />
      <div className="fixed font-mono text-[0.45rem] px-2.5 py-1.5 tracking-[2px] pointer-events-none z-10 opacity-60 top-[18%] right-[4%] border-2 border-cyan text-cyan -rotate-6">
        NO RULES
      </div>
      <div className="fixed font-mono text-[0.45rem] px-2.5 py-1.5 tracking-[2px] pointer-events-none z-10 opacity-60 top-[55%] left-[2%] border-2 border-magenta text-magenta rotate-[4deg]">
        OPEN SOURCE
      </div>
    </>
  );
}
