import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AdvancedScrollAnimations } from "@/components/AdvancedScrollAnimations";
import { FloatingButtons } from "@/components/FloatingButtons";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { TrustedCompanies } from "@/components/TrustedCompanies";
import { ProfessionalServices } from "@/components/ProfessionalServices";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { TeamSection } from "@/components/TeamSection";
import { ProcessWorkflow } from "@/components/ProcessWorkflow";
import { Contact } from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    fontLink.as = 'style';
    document.head.appendChild(fontLink);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Performance Optimizer */}
      <PerformanceOptimizer />
      
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
      
      {/* Trusted Companies */}
      <TrustedCompanies />
      
      {/* All components eagerly loaded - no delays, no loading spinners */}
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
