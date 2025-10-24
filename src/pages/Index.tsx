import { Hero } from "@/components/Hero";
import { ProfessionalServices } from "@/components/ProfessionalServices";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { TeamSection } from "@/components/TeamSection";
import { ProcessWorkflow } from "@/components/ProcessWorkflow";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AdvancedScrollAnimations } from "@/components/AdvancedScrollAnimations";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Smooth Scroll */}
      <SmoothScroll />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Scroll Animations */}
      <AdvancedScrollAnimations />
      
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />

      {/* Perfect Section Order */}
      <Hero />
      <ProfessionalServices />
      <PortfolioShowcase />
      <TeamSection />
      <ProcessWorkflow />
      <Contact />
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </main>
  );
};

export default Index;
