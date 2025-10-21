import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CodeEditor } from "@/components/CodeEditor";
import { ClientSuccess } from "@/components/ClientSuccess";
import { AIStack } from "@/components/AIStack";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Hero />
      <Features />
      <CodeEditor />
      <ClientSuccess />
      <AIStack />
      <Pricing />
      <Footer />
    </main>
  );
};

export default Index;
