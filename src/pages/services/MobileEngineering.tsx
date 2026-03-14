import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
 Smartphone,
 Zap,
 Apple,
 ArrowRight,
 Globe,
 Star,
 Cpu,
 Fingerprint,
 Layers,
 Activity,
 Phone,
 MousePointerClick,
 Mail,
 ShieldCheck
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { FeatureHighlightCard } from "@/components/ui/feature-highlight-card";

// ─── Stitch Primitive: Device UI Mockup (Hero Right Side) ────────────
const StitchDeviceMockup = () => {
 return (
 <div className="relative w-full h-[400px] bg-white rounded-3xl border border-slate-200 p-6 overflow-hidden flex flex-col shadow-2xl items-center justify-center">
 <div className="absolute top-6 left-6 right-6 flex justify-between items-center mb-6 border-b border-slate-100 pb-4 z-10 w-[calc(100%-48px)]">
 <div className="flex gap-2">
 <div className="w-3 h-3 rounded-full bg-slate-200" />
 <div className="w-3 h-3 rounded-full bg-slate-200" />
 <div className="w-3 h-3 rounded-full bg-slate-200" />
 </div>
 <div className="text-[10px] uppercase tracking-[0.2em] text-[#0066FF] font-mono font-bold flex items-center gap-2">
 <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full animate-pulse" />
 Native Execution
 </div>
 </div>
 
 {/* Abstract Phone Frame */}
 <div className="relative w-48 aspect-[9/19] bg-[#0A0A0A] rounded-[2.5rem] border-[6px] border-slate-900 shadow-xl overflow-hidden mt-8 group">
 <div className="absolute top-2 w-16 h-4 bg-black rounded-full left-1/2 -translate-x-1/2 z-20" />
 <div className="w-full h-full bg-white relative p-4 flex flex-col gap-4">
 <div className="h-4 w-1/2 bg-slate-100 rounded-sm mt-8" />
 <div className="grid grid-cols-2 gap-2">
 <motion.div className="aspect-square bg-[#0066FF]/5 rounded-xl border border-slate-100" />
 <motion.div className="aspect-square bg-slate-50 rounded-xl border border-slate-100" />
 </div>
 <motion.div 
 className="h-20 bg-slate-900 rounded-2xl w-full mt-4 flex flex-col p-4 gap-2"
 whileHover={{ scale: 1.05 }}
 >
 <div className="h-1 w-1/2 bg-slate-700 rounded-full" />
 <div className="h-2 w-3/4 bg-[#0066FF] rounded-full" />
 </motion.div>
 </div>
 {/* Animated Overlay */}
 <motion.div 
 className="absolute inset-0 bg-blue-500/10 pointer-events-none"
 animate={{ opacity: [0, 0.2, 0] }}
 transition={{ duration: 2, repeat: Infinity }}
 />
 </div>
 </div>
 );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const MobileEngineering = () => {
 const heroRef = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
 const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
 const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraAgent AI",
      tagline: "The Browser Worker Agent",
      icon: MousePointerClick,
      color: "text-blue-600",
      bg: "bg-blue-600/10",
      href: "/tools/astra-agent"
    },
    {
      title: "AstraReach AI",
      tagline: "Autonomous Email Operations",
      icon: Mail,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      href: "/tools/astra-reach"
    },
    {
      title: "AstraVerify AI",
      tagline: "Identity & Deepfake Shield",
      icon: ShieldCheck,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      href: "/tools/astra-verify"
    }
  ];

 const fadeUp = {
 initial: { opacity: 0, y: 30 },
 whileInView: { opacity: 1, y: 0 },
 viewport: { once: true },
 transition: { duration: 0.8, ease: "easeOut" as const }
 };

 return (
 <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0066FF]/20 overflow-x-hidden font-sans transition-colors duration-700">
 <Header />

 <main className="pt-20">
 {/* ─── HERO (50/50 Split) ────────────────────────────────────────────────── */}
 <section ref={heroRef} className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
 {/* Subtle minimal background */}
 <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
 
 <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-32">
 
 {/* Left Content (Minimalist) */}
 <div>
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-[12px] font-mono uppercase tracking-[0.2em] text-[#0066FF] mb-8 shadow-sm">
 <Smartphone className="w-4 h-4" /> Native Precision
 </div>
 <h1 className="mb-6 text-slate-900 leading-none">
 Mobile & App <br />
 <span className="text-[#0066FF]">Architectures.</span>
 </h1>
 <div className="text-slate-500 max-w-lg mb-12">
 We build high-performance mobile applications that users refuse to delete. Hardware-deep integration and elite interaction physics for iOS and Android.
 </div>
 <Button className="h-14 px-8 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-full font-heading font-bold flex items-center gap-3 transition-transform border-none shadow-xl shadow-[#0066FF]/20" asChild>
 <Link to="/contact">
 Launch Deployment <ArrowRight className="w-5 h-5" />
 </Link>
 </Button>
 </div>

 {/* Right Content (Interactive Stitch Component) */}
 <div className="relative w-full">
 <StitchDeviceMockup />
 </div>

 </motion.div>
 </section>

 {/* ─── ARCHITECTURE (Technical Schematic) ─────────────────────────────────── */}
 <section className="py-32 px-6 relative border-t border-slate-100 bg-slate-50/50">
 <div className="max-w-[1400px] mx-auto">
 <motion.div {...fadeUp} className="mb-20 text-center">
 <h2 className="text-slate-900 mb-6">Execution Blueprint</h2>
 <div className="text-slate-500 max-w-2xl mx-auto">
 Tier-1 mobile engineering stack designed for sub-60ms interaction latency and zero-jank delivery.
 </div>
 </motion.div>

 {/* Schematic Flow Diagram */}
 <div className="relative w-full h-auto min-h-[400px] bg-white rounded-3xl border border-slate-200 p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
 {/* Extremely thin lines connecting elements */}
 <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-[#0066FF]/30 hidden lg:block -translate-y-1/2" />
 
 {[
 { step: "01", title: "Core", desc: "SwiftUI & Kotlin Compose", icon: Cpu },
 { step: "02", title: "Physics", desc: "Reanimated 3 (60FPS)", icon: Activity },
 { step: "03", title: "Persistence", desc: "SQLite / WatermelonDB", icon: Layers },
 { step: "04", title: "Sync", desc: "Background Data Pipelines", icon: Globe }
 ].map((node, i) => {
 const Icon = node.icon;
 return (
 <motion.div 
 key={i} 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.2 }}
 className="relative z-10 flex flex-col items-center bg-white p-6 rounded-2xl border-[0.5px] border-[#0066FF]/20 w-full lg:w-64 shadow-md"
 >
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[0.5px] bg-[#0066FF]" />
 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[0.5px] bg-[#0066FF]" />
 
 <div className="text-[10px] font-mono text-[#0066FF] mb-4 tracking-widest uppercase">Layer {node.step}</div>
 <Icon className="w-8 h-8 text-slate-800 mb-4 stroke-[1px]" />
 <h4 className="text-slate-900 text-lg font-bold mb-2">{node.title}</h4>
 <p className="text-[12px] text-slate-500 text-center font-mono">{node.desc}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* ─── LIVE NATIVE EXPERIENCE ────────────────────────────────────────── */}
 <section className="py-32 px-6 relative border-t border-slate-100 bg-white">
 <div className="max-w-[1400px] mx-auto">
 <motion.div {...fadeUp} className="mb-20 text-center">
 <h2 className="text-slate-900 mb-6">Interaction Ecosystem</h2>
 <div className="text-slate-500 max-w-2xl mx-auto">
 Exploring the synergy between hardware-level performance and human-centric design.
 </div>
 </motion.div>

 <div className="relative z-10 w-full overflow-hidden">
 <FeatureCarousel />
 </div>
 </div>
 </section>

 {/* ─── FEATURES (Bento Grid) ────────────────────────────────────────────── */}
 <section className="py-32 px-6 relative border-t border-slate-100 bg-white">
 <div className="max-w-[1400px] mx-auto">
 <motion.div {...fadeUp} className="mb-16">
 <h2 className="text-slate-900 mb-6">Mobile Capabilities</h2>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {/* Feature 1 (Spans 2 columns) */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.1 }}
 whileHover={{ scale: 0.98 }}
 className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-pointer shadow-sm hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
 >
 <div className="absolute top-0 right-0 w-32 h-32 bg-[#0066FF]/5 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-0" />
 <Fingerprint className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-2xl text-slate-900 mb-4">Biometric Security</h3>
 <p className="text-slate-500">
 Implementing FaceID and Fingerprint authentication as a core standard, ensuring enterprise-grade sensitive data protection with frictionless user access.
 </p>
 </div>
 </motion.div>

 {/* Feature 2 */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.2 }}
 whileHover={{ scale: 0.98 }}
 className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-pointer shadow-sm hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
 >
 <Zap className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-xl text-slate-900 mb-4">60FPS Performance</h3>
 <p className="text-slate-500">
 We obsess over frame rates. Every transition targets 60FPS fluid motion.
 </p>
 </div>
 </motion.div>

 {/* Feature 3 */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.3 }}
 whileHover={{ scale: 0.98 }}
 className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-pointer shadow-sm hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
 >
 <Apple className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-xl text-slate-900 mb-4">Native First</h3>
 <p className="text-slate-500">
 Deep hardware integration into iOS and Android platform-specific APIs.
 </p>
 </div>
 </motion.div>

 {/* Feature 4 (Spans 2 columns) */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.4 }}
 whileHover={{ scale: 0.98 }}
 className="md:col-span-2 bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-pointer shadow-sm hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
 >
 <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#0066FF]/5 blur-3xl rounded-full transition-opacity group-hover:opacity-100 opacity-0" />
 <Star className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-2xl text-slate-900 mb-4">Store Optimization</h3>
 <p className="text-slate-500">
 We don't just build; we launch. Full ASO management and TestFlight distribution pipelines ensured to reach the top of the charts.
 </p>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

  {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
  <section className="pb-12 bg-white">
    <AstraEcosystemSync tools={relatedTools} />
  </section>

 {/* ─── FINAL CTA (Feature Highlight) ─────────────────────────────────────── */}
 <section className="py-24 px-6 relative border-t border-slate-100 bg-white">
 <div className="max-w-[1400px] mx-auto flex justify-center">
 <FeatureHighlightCard
 preheaderSection={
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0066FF]/20 bg-[#0066FF]/5 text-sm font-medium text-[#0066FF] mb-2 animate-in fade-in slide-in-from-top-4 duration-700">
 <Phone className="w-4 h-4" />
 <span className="text-[11px] font-black uppercase tracking-[0.15em] font-mono">Mobile App Deployment</span>
 </div>
 }
 title={
 <>
 Dominate the <span className="text-[#0066FF]">App Stores</span>
 </>
 }
 description="Transform your digital presence with native mobile experiences. We architect applications that blend breathtaking UI physics with uncompromising backend stability."
 buttonText="Start Building Native"
 imageSrc="https://plus.unsplash.com/premium_photo-1681297594951-e1245b0ae2ba?q=80&w=2070"
 imageAlt="Mobile application interface mockup"
 />
 </div>
 </section>

 </main>
 <Footer />
 </div>
 );
};

export default MobileEngineering;
