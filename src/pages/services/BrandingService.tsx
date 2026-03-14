import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
 PenTool,
 Target,
 Megaphone,
 Fingerprint,
 ArrowRight,
 Sparkles,
 Layers,
 Palette,
 Users
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";
import { BrandingFeaturesSection } from "@/components/ui/feature";
import { BrandingCTAWithMarquee } from "@/components/ui/cta-with-marquee";

// ─── Stitch Primitive: Abstract Brand Identity (Hero Right Side) ────────────
const StitchBrandIdentity = () => {
 return (
 <div className="relative w-full h-[400px] bg-slate-50 rounded-3xl border border-slate-200 p-6 overflow-hidden flex flex-col shadow-2xl items-center justify-center">
 <div className="absolute top-6 left-6 right-6 flex justify-between items-center mb-6 border-b border-slate-200 pb-4 z-10 w-[calc(100%-48px)]">
 <div className="flex gap-2">
 <div className="w-3 h-3 rounded-full bg-slate-300" />
 <div className="w-3 h-3 rounded-full bg-slate-300" />
 <div className="w-3 h-3 rounded-full bg-slate-300" />
 </div>
 <div className="text-[10px] uppercase tracking-[0.2em] text-[#0066FF] font-mono font-bold flex items-center gap-2">
 <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full animate-pulse" />
 Brand Matrix
 </div>
 </div>
 
 {/* Abstract Animated Shapes */}
 <div className="relative z-0 flex items-center justify-center w-full h-full mt-8">
 <motion.div 
 className="absolute w-32 h-32 bg-[#0066FF]/10 rounded-full border border-[#0066FF]"
 animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
 />
 <motion.div 
 className="absolute w-40 h-40 bg-indigo-500/10 rounded-3xl border border-indigo-400 rotate-45"
 animate={{ scale: [1.1, 0.9, 1.1], rotate: [45, 135, 45] }}
 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
 />
 <motion.div 
 className="absolute w-48 h-48 border border-slate-300 rounded-[2rem]"
 animate={{ rotate: [0, -90, 0] }}
 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
 />
 
 <div className="relative z-10 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100">
 <Fingerprint className="w-10 h-10 text-[#0066FF] stroke-[1.5px]" />
 </div>
 </div>
 </div>
 );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const BrandingService = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraBrand AI",
      tagline: "Generative Identity Matrix",
      icon: Sparkles,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      href: "/tools/astra-brand"
    },
    {
      title: "AstraPersona AI",
      tagline: "Recursive Audience Synthesis",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-600/10",
      href: "/tools/astra-persona"
    },
    {
      title: "AstraVibe AI",
      tagline: "Sensory Design Tokens",
      icon: Palette,
      color: "text-fuchsia-500",
      bg: "bg-fuchsia-500/10",
      href: "/tools/astra-vibe"
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
 <PenTool className="w-4 h-4" /> Identity Architecture
 </div>
 <h1 className="mb-6 text-slate-900 leading-none">
 Memorable <br />
 <span className="text-[#0066FF]">Resonance.</span>
 </h1>
 <div className="text-slate-500 max-w-lg mb-12">
 We synthesize your core narrative into a timeless visual and verbal identity. Stand out in crowded markets with a brand built on strategic intentionality.
 </div>
 <Button className="h-14 px-8 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-full font-heading font-bold flex items-center gap-3 transition-transform border-none shadow-xl shadow-[#0066FF]/20" asChild>
 <Link to="/contact">
 Develop Identity <ArrowRight className="w-5 h-5" />
 </Link>
 </Button>
 </div>

 {/* Right Content (Interactive Stitch Component) */}
 <div className="relative w-full">
 <StitchBrandIdentity />
 </div>

 </motion.div>
 </section>

 {/* ─── ARCHITECTURE (Technical Schematic) ─────────────────────────────────── */}
 <section className="py-32 px-6 relative border-t border-slate-100 bg-slate-50/50">
 <div className="max-w-[1400px] mx-auto">
 <motion.div {...fadeUp} className="mb-20 text-center">
 <h2 className="text-slate-900 mb-6">Brand DNA Mapping</h2>
 <div className="text-slate-500 max-w-2xl mx-auto">
 A structured funnel converting raw market data into an emotional corporate asset.
 </div>
 </motion.div>

 {/* Schematic Flow Diagram */}
 <div className="relative w-full h-auto min-h-[400px] bg-white rounded-3xl border border-slate-200 p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
 {/* Extremely thin lines connecting elements */}
 <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-[#0066FF]/30 hidden lg:block -translate-y-1/2" />
 
 {[
 { step: "01", title: "Audit", desc: "Competitor & Gap Analysis", icon: Target },
 { step: "02", title: "Positioning", desc: "Core Manifesto Draft", icon: Megaphone },
 { step: "03", title: "Visuals", desc: "Logo & Typography", icon: Palette },
 { step: "04", title: "Guidelines", desc: "Rulebook Deployment", icon: Layers }
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
 
 <div className="text-[10px] font-mono text-[#0066FF] mb-4 tracking-widest uppercase">Phase {node.step}</div>
 <Icon className="w-8 h-8 text-slate-800 mb-4 stroke-[1px]" />
 <h4 className="text-slate-900 text-lg font-bold mb-2">{node.title}</h4>
 <p className="text-[12px] text-slate-500 text-center font-mono">{node.desc}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* ─── BRAND CRAFT FEATURES (3rd section — animated cards) ─────────────── */}
 <BrandingFeaturesSection />

 {/* ─── FEATURES (Bento Grid) ────────────────────────────────────────────── */}
 <section className="py-32 px-6 relative border-t border-slate-100 bg-white">
 <div className="max-w-[1400px] mx-auto">
 <motion.div {...fadeUp} className="mb-16">
 <h2 className="text-slate-900 mb-6">Identity Deliverables</h2>
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
 <h3 className="text-2xl text-slate-900 mb-4">Strategic Positioning</h3>
 <p className="text-slate-500">
 We define your unique value proposition, establishing a tone of voice and brand manifesto that resonates deeply with target demographics and repels mismatched leads.
 </p>
 </div>
 </motion.div>

 {/* Feature 2 */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.2 }}
 whileHover={{ scale: 0.98 }}
 className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-pointer shadow-sm hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
 >
 <Palette className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-xl text-slate-900 mb-4">Visual Language</h3>
 <p className="text-slate-500">
 Bespoke logo marks, color psychology matrices, and exclusive typography scaling.
 </p>
 </div>
 </motion.div>

 {/* Feature 3 */}
 <motion.div 
 {...fadeUp} transition={{ delay: 0.3 }}
 whileHover={{ scale: 0.98 }}
 className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-pointer shadow-sm hover:border-[#0066FF]/30 hover:shadow-lg transition-all"
 >
 <Sparkles className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-xl text-slate-900 mb-4">Marketing Collateral</h3>
 <p className="text-slate-500">
 Business cards, pitch decks, and digital asset templates ready for deployment.
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
 <Layers className="w-10 h-10 text-[#0066FF] mb-8 stroke-[1px]" />
 <div>
 <h3 className="text-2xl text-slate-900 mb-4">Comprehensive Guidelines</h3>
 <p className="text-slate-500">
 A definitive brand rulebook provided in a dynamic web format, ensuring strict consistency as internal teams scale and external contractors are onboarded.
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

 {/* ─── BRANDING CTA WITH MARQUEE ─────────────────────── */}
 <BrandingCTAWithMarquee />

 </main>
 <Footer />
 </div>
 );
};

export default BrandingService;
