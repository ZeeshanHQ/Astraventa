import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustedCompanies } from "@/components/TrustedCompanies";
import { ProfessionalServices } from "@/components/ProfessionalServices";
import CardStackSection from "@/components/CardStackSection";
import { WhyAstraventa } from "@/components/WhyAstraventa";
import { ClientEcosystem } from "@/components/ClientEcosystem";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { AstraToolsNetwork } from "@/components/AstraToolsNetwork";
import { BlogSection } from "@/components/BlogSection";
import { LetsBuild } from "@/components/LetsBuild";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { CursorDrivenParticleTypography } from "@/components/ui/cursor-driven-particles-typography";
import { BlueprintDivider } from "@/components/ui/BlueprintDivider";
import IntegrationsSection from "@/components/ui/integrations-section";
import GlobeFeatureSection from "@/components/ui/globe-feature-section";
import { BrandHighlights } from "@/components/BrandHighlights";
import { AstraProductWalls } from "@/components/ui/hero-preview-walls";
import { PerspectiveBook } from "@/components/ui/perspective-book";
import { Accordion03 } from "@/components/ui/accordion-03";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Bot, ArrowRight, HelpCircle } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary overflow-x-clip">
      {/* Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="relative">
        <div className="relative z-10 flex flex-col space-y-8 lg:space-y-12">
          <Hero />
          <BrandHighlights />

          {/* Astraventa Products Showcase — animated card stack */}
          <AstraProductWalls />

          <ProfessionalServices />

          <BlueprintDivider />
          <CardStackSection />

          <BlueprintDivider />
          <WhyAstraventa />

          <BlueprintDivider />
          <IntegrationsSection />

          <BlueprintDivider />
          <AstraToolsNetwork />

          <BlueprintDivider />
          <GlobeFeatureSection />

          <BlueprintDivider />

          {/* Strategic Playbooks (Perspective Book) */}
          <section className="max-w-[1400px] w-full mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-black/[0.02] rounded-2xl p-10 lg:p-16 border border-black/[0.06] relative overflow-hidden">
              {/* Background elements - Technical subtle haze */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-[80px] pointer-events-none" />

              {/* BOOK — LEFT */}
              <div className="relative z-10 flex items-center justify-center p-6 order-2 lg:order-1">
                {/* Glow beneath the book */}
                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75 transform" />
                <a href="/astraventa-playbook.pdf" download="Astraventa_Playbook_2026.pdf" className="cursor-pointer transition-transform hover:scale-105">
                  <PerspectiveBook size="lg" textured className="bg-slate-900 text-white p-8">
                    <div className="flex flex-col h-full justify-between">
                      <div className="space-y-4">
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-6">
                          <Bot className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-heading font-normal text-white text-xl leading-tight uppercase tracking-[0.15em]">
                          Autonomous <br />Systems in<br />Enterprise
                        </h3>
                        <p className="text-white/40 text-[10px] font-display uppercase tracking-widest mt-4 block">Vol. IV / 2026</p>
                      </div>

                      <div>
                        <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent mb-4" />
                        <p className="text-[10px] text-white/40 font-display tracking-wider uppercase">ASTRAVENTA ENGINEERING</p>
                      </div>
                    </div>
                  </PerspectiveBook>
                </a>
              </div>

              {/* TEXT — RIGHT */}
              <div className="flex-1 relative z-10 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-display font-normal text-black/60 uppercase tracking-[0.15em]">STRATEGIC_RESOURCES</span>
                </div>
                <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl mb-5">
                  The Astraventa Playbook.
                </h2>
                <p className="text-[15px] text-[#4B5563] font-display font-normal leading-[1.7] mb-8 max-w-xl">
                  A definitive engineering guide to scaling autonomous systems in enterprise environments. Request access to our proprietary architectural patterns.
                </p>
                <ShinyButton
                  className="h-10 px-6 rounded-full text-[12px] font-display font-medium uppercase tracking-[0.1em]"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = "/astraventa-playbook.pdf";
                    link.download = "Astraventa_Playbook_2026.pdf";
                    link.click();
                  }}
                >
                  <span className="flex items-center gap-1.5 pt-[1px]">
                    Download Playbook <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </ShinyButton>
              </div>
            </div>
          </section>

          <BlogSection />

          <BlueprintDivider />

          {/* Technical FAQ Section */}
          <section className="max-w-4xl mx-auto px-6 py-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] mb-6">
                <HelpCircle className="w-3 h-3 text-[hsl(var(--primary))]" />
                <span className="text-[10px] font-display font-normal text-black/60 uppercase tracking-[0.15em]">TECHNICAL_INQUIRY</span>
              </div>
              <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl mb-5">
                Engineered for Clarity.
              </h2>
              <p className="text-base text-foreground/50 font-medium max-w-2xl mx-auto leading-relaxed">
                Addressing the fundamental architectural and operational questions regarding Astraventa’s autonomous infrastructure and hybrid engineering model.
              </p>
            </div>

            <Accordion03 />
          </section>

          {/* Integrated Final Experience Flow */}
          <LetsBuild />
          <FinalCTA />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Brand Particle Section */}
      <section className="w-full bg-background overflow-hidden py-0 border-t border-border pointer-events-none sm:pointer-events-auto">
        <CursorDrivenParticleTypography
          text="ASTRAVENTA"
          fontSize={250}
          color="currentColor"
          particleDensity={4}
          dispersionStrength={25}
          className="h-[250px] md:h-[400px]"
        />
      </section>
    </div>
  );
};

export default Index;
