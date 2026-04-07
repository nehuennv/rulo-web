import { HeroBlock } from "@/components/sections/HeroBlock";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { Features } from "@/components/sections/Features";
import { Integrations } from "@/components/sections/Integrations";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
 
export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full bg-brand-dark overflow-x-hidden selection:bg-brand-terracotta/30">
      
      {/* FONDO ARQUITECTÓNICO CONTINUO GLOBAL (Estático con Parallax) */}
      <div className="fixed top-0 left-0 w-full h-[150vh] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_40%,#000_100%,transparent_110%)] pointer-events-none z-0" />
 
      <div className="relative z-10 w-full flex flex-col">
        <HeroBlock />
        <ProblemAgitation />
        <Features />
        {/* <Integrations /> */}
        <RoiCalculator />
        <FinalCta />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}
