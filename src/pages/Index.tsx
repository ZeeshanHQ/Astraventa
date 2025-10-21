import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CodeEditor } from "@/components/CodeEditor";
import { ClientSuccess } from "@/components/ClientSuccess";
import { AIStack } from "@/components/AIStack";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ParticleSystem } from "@/components/ParticleSystem";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Smooth Scroll */}
      <SmoothScroll />
      
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Particle System */}
      <ParticleSystem />
      
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 pointer-events-none" />
      
      {/* Animated background particles */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-2000" />
      </div>

      <Hero />
      <Features />
      <CodeEditor />
      <ClientSuccess />
      <AIStack />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
