import { lazy, Suspense } from "react";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AdvancedScrollAnimations } from "@/components/AdvancedScrollAnimations";
import { FloatingButtons } from "@/components/FloatingButtons";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";

// Lazy load heavy components
const ProfessionalServices = lazy(() => import("@/components/ProfessionalServices").then(module => ({ default: module.ProfessionalServices })));
const PortfolioShowcase = lazy(() => import("@/components/PortfolioShowcase").then(module => ({ default: module.PortfolioShowcase })));
const TeamSection = lazy(() => import("@/components/TeamSection").then(module => ({ default: module.TeamSection })));
const ProcessWorkflow = lazy(() => import("@/components/ProcessWorkflow").then(module => ({ default: module.ProcessWorkflow })));
const Contact = lazy(() => import("@/components/Contact").then(module => ({ default: module.Contact })));

// Loading component
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-32">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
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
      
      <Suspense fallback={<ComponentLoader />}>
        <ProfessionalServices />
      </Suspense>
      
      <Suspense fallback={<ComponentLoader />}>
        <PortfolioShowcase />
      </Suspense>
      
      <Suspense fallback={<ComponentLoader />}>
        <TeamSection />
      </Suspense>
      
      <Suspense fallback={<ComponentLoader />}>
        <ProcessWorkflow />
      </Suspense>
      
      <Suspense fallback={<ComponentLoader />}>
        <Contact />
      </Suspense>
      
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </main>
  );
};

export default Index;
