export default function Divider() {
  return (
    <div className="w-full h-[52px] bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(0,245,212,0.025)_10px,rgba(0,245,212,0.025)_20px)] border-t-2 border-t-cyan border-b-2 border-b-magenta overflow-hidden relative">
      <div className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-[Orbitron,sans-serif] text-[0.65rem] text-[rgba(0,245,212,0.12)] tracking-[5px] animate-[marquee_25s_linear_infinite]">
        {`///  ONE KEY. ALL MODELS.  ///  SAVE 70%.  ///  DISCOVER SKILLS.  ///  EARN MONEY.  ///  ONE KEY. ALL MODELS.  ///  SAVE 70%.  ///  DISCOVER SKILLS.  ///  EARN MONEY.  ///`}
      </div>
    </div>
  );
}
