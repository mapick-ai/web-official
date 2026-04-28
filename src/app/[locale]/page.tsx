import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Persona from "@/components/Persona";
import Bundles from "@/components/Bundles";
import Trust from "@/components/Trust";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="orb o1" style={{ "--delay": ".2s", "--dur": "14s" } as React.CSSProperties} />
      <div className="orb o2" style={{ "--delay": "1.2s", "--dur": "18s" } as React.CSSProperties} />
      <div className="orb o3" style={{ "--delay": ".8s", "--dur": "20s" } as React.CSSProperties} />
      <div className="orb o4" style={{ "--delay": "2s", "--dur": "16s" } as React.CSSProperties} />

      <Navbar />

      <main>
        <Hero />
        <Problem />
        <Demo />
        <Features />
        <Persona />
        <Bundles />
        <Trust />
        <FooterCTA />
        <Footer />
      </main>
    </>
  );
}
