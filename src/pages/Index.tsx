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
 <PortfolioShowcase />
 
 <BlueprintDivider />
 <AstraToolsNetwork />

 <BlueprintDivider />
 <GlobeFeatureSection />
 
 <BlueprintDivider />

 {/* Strategic Playbooks (Perspective Book) */}
 <section className="max-w-[1400px] w-full mx-auto px-6">
 <div className="flex flex-col lg:flex-row items-center gap-16 bg-slate-50 rounded-[2.5rem] p-12 lg:p-20 border border-slate-100 relative overflow-hidden shadow-sm">
 {/* Background elements */}
 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
 <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[60px]" />
 
 <div className="flex-1 relative z-10">
 <div className="technical-label !text-slate-400 mb-6">Strategic Resources</div>
 <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading mb-6">
 The Astraventa Playbook.
 </h2>
 <p className="text-lg text-slate-500 font-medium mb-8 leading-relaxed max-w-xl">
 A definitive, high-liability engineering guide to scaling autonomous systems in enterprise environments. Request access to our proprietary architectural patterns and deployment strategies.
 </p>
 <Button asChild className="h-14 px-8 bg-slate-900 hover:bg-[#2910E5] text-white rounded-full font-bold shadow-lg transition-colors border border-transparent hover:border-white/20" >
            <a href="/astraventa-playbook.pdf" download="Astraventa_Playbook_2026.pdf">
 Download PDF <ArrowRight className="w-4 h-4 ml-2" />
            </a>
        </Button>
 </div>

  <div className="relative z-10 flex items-center justify-center p-8">
    {/* Glow beneath the book */}
    <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75 transform -translate-y-4" />
    <a href="/astraventa-playbook.pdf" download="Astraventa_Playbook_2026.pdf" className="cursor-pointer transition-transform hover:scale-105">
      <PerspectiveBook size="lg" textured className="bg-slate-900 text-white p-8">
        <div className="flex flex-col h-full justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 border border-white/5 backdrop-blur-sm">
              <Bot className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-black text-2xl leading-tight">
              Autonomous <br/>Systems in<br/>Enterprise
            </h3>
            <p className="text-white/50 text-xs font-mono uppercase tracking-widest mt-4 block">Vol. IV / 2026</p>
          </div>

          <div>
            <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent mb-4" />
            <p className="text-[10px] text-white/40 font-mono tracking-wider font-bold">ASTRAVENTA ENGINEERING</p>
          </div>
        </div>
      </PerspectiveBook>
    </a>
  </div>
 </div>
 </section>

 <BlogSection />

 <BlueprintDivider />

 {/* Technical FAQ Section */}
 <section className="max-w-4xl mx-auto px-6 py-10">
 <div className="text-center mb-16">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
 <HelpCircle className="w-3 h-3 text-primary" />
 <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">Technical Inquiry</span>
 </div>
 <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
 Engineered for Clarity.
 </h2>
 <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
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
 <section className="w-full bg-white overflow-hidden py-0 border-t border-slate-100 pointer-events-none sm:pointer-events-auto">
 <CursorDrivenParticleTypography 
 text="ASTRAVENTA"
 fontSize={250}
 color="#0f172a"
 particleDensity={4}
 dispersionStrength={25}
 className="h-[250px] md:h-[400px]"
 />
 </section>
 </div>
 );
};

export default Index;
