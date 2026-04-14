import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhySteps from "@/components/WhySteps";
import Report from "@/components/Report";
import Scenarios from "@/components/Scenarios";
import SetupsAndPlatforms from "@/components/SetupsAndPlatforms";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <>
      {/* Background orbs */}
      <div className="orb o1" style={{ "--delay": ".2s", "--dur": "14s" } as React.CSSProperties} />
      <div className="orb o2" style={{ "--delay": "1.2s", "--dur": "18s" } as React.CSSProperties} />
      <div className="orb o3" style={{ "--delay": ".8s", "--dur": "20s" } as React.CSSProperties} />
      <div className="orb o4" style={{ "--delay": "2s", "--dur": "16s" } as React.CSSProperties} />

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <WhySteps />
        <Report />
        <Scenarios />
        <SetupsAndPlatforms />
        <FooterCTA />
      </main>
    </>
  );
}
