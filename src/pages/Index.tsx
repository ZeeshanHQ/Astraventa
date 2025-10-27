import { lazy, Suspense, useEffect, useState } from "react";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AdvancedScrollAnimations } from "@/components/AdvancedScrollAnimations";
import { FloatingButtons } from "@/components/FloatingButtons";
import { PerformanceOptimizer } from "@/components/PerformanceOptimizer";
import { TrustedCompanies } from "@/components/TrustedCompanies";

// Lazy load heavy components with optimized loading
const ProfessionalServices = lazy(() => import("@/components/ProfessionalServices").then(module => ({ default: module.ProfessionalServices })));
const PortfolioShowcase = lazy(() => import("@/components/PortfolioShowcase").then(module => ({ default: module.PortfolioShowcase })));
const TeamSection = lazy(() => import("@/components/TeamSection").then(module => ({ default: module.TeamSection })));
const ProcessWorkflow = lazy(() => import("@/components/ProcessWorkflow").then(module => ({ default: module.ProcessWorkflow })));
const Contact = lazy(() => import("@/components/Contact").then(module => ({ default: module.Contact })));

// Optimized loading component
const ComponentLoader = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Mark as loaded after a short delay
      setTimeout(() => setIsLoaded(true), 100);
    };

    preloadResources();
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
