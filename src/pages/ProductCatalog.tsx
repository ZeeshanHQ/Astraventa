import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
 Search,
 ArrowRight,
 BookOpen,
 Cpu,
 ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "@/components/ui/tooltip";

// ─── Types ───────────────────────────────────────────────────────────────────
type Category = "All" | "AI Engines" | "Business OS" | "Infrastructure";

interface EngineSpec {
 label: string;
 value: string;
 tooltip?: string;
}

interface Product {
 id: string;
 name: string;
 headline: string;
 tagline: string;
 category: Category;
 description: string;
 image: string;
 engineSpecs: EngineSpec[];
 externalUrl: string;
 docsUrl: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const products: Product[] = [
  {
    id: "launchpact",
    name: "LaunchPact AI",
    headline: "The Venture Architect",
    tagline: "From Idea to Architecture in Minutes",
    category: "AI Engines",
    description: "Architect your next venture with autonomous strategic planning. LaunchPact analyzes market dynamics, generates technical roadmaps, and simulates growth trajectories using proprietary LLM ensembles.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop",
    engineSpecs: [
      { label: "Interface", value: "Blueprint Engine" },
      { label: "Core Neural", value: "Venture Intelligence Layer", tooltip: "Proprietary multi-model orchestration for strategic accuracy." },
      { label: "Processing", value: "30-Day execution Logic" }
    ],
    externalUrl: "https://launchpact.astraventa.online",
    docsUrl: "/products/launchpact"
  },
  {
    id: "outrelix",
    name: "Outrelix",
    headline: "The Outreach Automator",
    tagline: "Precision Outreach at Global Scale",
    category: "Business OS",
    description: "The definitive engine for B2B growth. Outrelix leverages hyper-accurate data extraction and behavioral analytics to identify, verify, and engage high-value prospects before your competition does.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    engineSpecs: [
      { label: "Scraper", value: "Autonomous Agents" },
      { label: "Analytics", value: "Behavioral Kernel", tooltip: "Real-time analysis of lead engagement patterns." },
      { label: "Database", value: "Personalized Outreach Logic" }
    ],
    externalUrl: "https://outrelix.astraventa.online",
    docsUrl: "/products/outrelix"
  },
  {
    id: "legalflow",
    name: "LegalFlow",
    headline: "The Case Orchestrator",
    tagline: "Engineering Precision in Legal Workflows",
    category: "Business OS",
    description: "Remove the friction from legal operations. LegalFlow automates contract review, highlights risk vectors, and ensures multi-jurisdictional compliance with 99.8% precision.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    engineSpecs: [
      { label: "Vision", value: "OCR-Document Neural" },
      { label: "Logic", value: "Agentic Contract Drafting", tooltip: "Automated analysis and drafting against global legal standards." },
      { label: "Security", value: "Case file orchestration" }
    ],
    externalUrl: "https://legalflow.astraventa.online",
    docsUrl: "/products/legalflow"
  },
  {
    id: "cavexa",
    name: "Shorts Cavexa",
    headline: "The Content Engine",
    tagline: "High-Velocity Content, Zero Effort",
    category: "AI Engines",
    description: "Dominate social attention without the manual grind. Cavexa identifies trends, scripts narratives, and generates high-fidelity short-form video content at the speed of social algorithms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    engineSpecs: [
      { label: "Visuals", value: "Generative Motion" },
      { label: "Audio", value: "Neural Voicecraft", tooltip: "Synthesizing authentic, high-quality audio narration." },
      { label: "Editor", value: "Video Pipeline Automation" }
    ],
    externalUrl: "https://shorts.cavexa.online",
    docsUrl: "/products/cavexa"
  },
  {
    id: "complymail",
    name: "ComplyMail",
    headline: "The Regulatory Sentinel",
    tagline: "Secure Communication, Architected by AI",
    category: "Infrastructure",
    description: "Protect your sender reputation. ComplyMail uses real-time verification and RFC-compliant validation to eliminate bounces and ensure your outreach hits the inbox every time.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1200&auto=format&fit=crop",
    engineSpecs: [
      { label: "MTA", value: "Real-time filtering" },
      { label: "Validation", value: "Risk management logic", tooltip: "Ensuring every message meets global compliance standards." },
      { label: "Rep", value: "Automated Responses" }
    ],
    externalUrl: "https://complymail.astraventa.online",
    docsUrl: "/products/complymail"
  },
  {
    id: "vectrax",
    name: "Vectrax",
    headline: "The Intelligent Project Scanner",
    tagline: "Manage Supabase from your pocket",
    category: "Infrastructure",
    description: "Real-time infrastructure control. Vectrax provides deep visibility into your Supabase clusters, offering performance alerts, query analysis, and remote scaling from a minimalist mobile interface.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    engineSpecs: [
      { label: "Indexing", value: "Deep Project Scanning" },
      { label: "Query", value: "Postgres Observer", tooltip: "Deep-packet inspection of database requests." },
      { label: "Control", value: "Autonomous management" }
    ],
    externalUrl: "https://vectrax.astraventa.online",
    docsUrl: "/products/vectrax"
  }
];

const categories: Category[] = ["All", "AI Engines", "Business OS", "Infrastructure"];

// ─── Components ───────────────────────────────────────────────────────────────

const BreedingDot = () => (
 <motion.div 
 animate={{ 
 boxShadow: ["0 0 0px #2910E5", "0 0 4px #2910E5", "0 0 0px #2910E5"],
 opacity: [1, 0.5, 1]
 }}
 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
 className="w-1 h-1 rounded-full bg-[#2910E5]"
 />
);

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
 const isEven = index % 2 === 0;
 
 return (
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.8, ease: "easeOut" as const }}
 className={cn(
 "flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-16 border-b border-slate-100 last:border-0",
 !isEven && "lg:flex-row-reverse"
 )}
 >
 {/* Image Container */}
 <div className="w-full lg:w-1/2 relative">
 <div className="absolute -inset-2 bg-slate-50/30 rounded-[2rem] blur-xl pointer-events-none" />
 <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200/50 shadow-xl bg-white">
 <img 
 src={product.image} 
 alt={product.name}
 className="w-full h-full object-cover"
 />
 <div className="absolute inset-0 bg-slate-900/5" />
 </div>
 
 {/* System Core Specs */}
 <div className={cn(
 "absolute -bottom-4 bg-white/95 backdrop-blur-md border border-slate-200/50 p-4 rounded-xl shadow-xl z-10 min-w-[200px]",
 isEven ? "-right-4" : "-left-4"
 )}>
 <div className="text-[9px] font-['Satoshi'] font-normal text-slate-400 uppercase tracking-[2px] mb-3 border-b border-slate-50 pb-2">
 System Specs
 </div>
 <div className="space-y-2">
 {product.engineSpecs.map((spec, i) => (
 <TooltipProvider key={i}>
 <Tooltip delayDuration={0}>
 <TooltipTrigger asChild>
 <div className="flex items-center justify-between gap-3 px-2 py-1 bg-slate-50/30 border-[0.5px] border-slate-100 rounded-md cursor-help">
 <div className="flex items-center gap-2">
 <BreedingDot />
 <span className="text-[10px] font-bold text-slate-800">{spec.value}</span>
 </div>
 <span className="text-[8px] font-mono text-slate-400 uppercase tracking-tighter">{spec.label}</span>
 </div>
 </TooltipTrigger>
 {spec.tooltip && (
 <TooltipContent side="top" className="bg-slate-900 text-white border-0 text-[9px] px-2 py-1 rounded shadow-lg">
 {spec.tooltip}
 </TooltipContent>
 )}
 </Tooltip>
 </TooltipProvider>
 ))}
 </div>
 </div>
 </div>

 {/* Content Container */}
 <div className="w-full lg:w-1/2">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/10 bg-primary/5 text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
 {product.category}
 </div>
 <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-1 leading-tight tracking-tight">
 {product.headline}
 </h2>
 <h3 className="text-lg lg:text-xl font-bold text-primary mb-4">
 {product.tagline}
 </h3>
 <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-md">
 {product.description}
 </p>
 
 <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-50">
 <Button 
 className="h-12 px-6 bg-[#2910E5] hover:bg-[#2910E5]/90 text-white rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/10 transition-colors border-none" 
 onClick={() => window.open(product.externalUrl, '_blank')}
 >
 Access Platform <ExternalLink className="w-3.5 h-3.5" />
 </Button>
 <Button 
 variant="ghost" 
 className="h-12 px-6 border border-slate-200 text-slate-800 rounded-full font-bold hover:bg-slate-900 hover:text-white flex items-center gap-2 transition-all duration-300" 
 asChild
 >
 <Link to={product.docsUrl}>
 Documentation <BookOpen className="w-3.5 h-3.5" />
 </Link>
 </Button>
 </div>
 </div>
 </motion.div>
 );
};

// ─── Primary Component ───────────────────────────────────────────────────────
const ProductCatalog = () => {
 const [activeCategory, setActiveCategory] = useState<Category>("All");
 
 const filteredProducts = products.filter(p => 
 activeCategory === "All" ? true : p.category === activeCategory
 );

 return (
 <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/10">
 <Header />
 
 {/* Blueprint Grid Background Layer */}
 <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]" 
 style={{ 
 backgroundImage: "linear-gradient(to right, #2910E5 1px, transparent 1px), linear-gradient(to bottom, #2910E5 1px, transparent 1px)",
 backgroundSize: "40px 40px"
 }}
 />

 <main className="relative z-10 pt-20 pb-24">
 
 {/* ─── EDITORIAL HERO ──────────────────────────────── */}
 <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden border-b border-slate-100">
 {/* Blueprint dot grid */}
 <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
 style={{
 backgroundImage: "radial-gradient(circle, #2910E5 1px, transparent 1px)",
 backgroundSize: "24px 24px",
 }}
 />
 <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-28 pb-16">
 <div className="flex flex-col gap-2">
 {/* Line 1 */}
 <div className="md:flex gap-8 items-end">
 <motion.p
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.7 }}
 className="text-xs text-slate-400 font-mono font-medium leading-5 max-w-[200px] mb-4 md:mb-0 md:text-right"
 >
 Autonomous SaaS modules engineered for cross-continental venture scaling.
 </motion.p>
 <motion.h1
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.1 }}
 className="text-[clamp(3.5rem,9vw,9rem)] font-light leading-none tracking-wider uppercase"
 >
 THE ASTRA
 </motion.h1>
 </div>

 {/* Line 2: SAAS + heart */}
 <div className="md:flex gap-4 items-center">
 <motion.h1
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="text-[clamp(3.5rem,9vw,9rem)] font-light leading-none tracking-wider uppercase flex items-center gap-4"
 >
 <span>SAAS</span>
 <motion.div
 animate={{ scale: [1, 1.08, 1] }}
 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
 className="hidden lg:block"
 >
 <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="#2910E5">
 <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
 </svg>
 </motion.div>
 <motion.div className="block lg:hidden">
 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="#2910E5">
 <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
 </svg>
 </motion.div>
 </motion.h1>
 <motion.p
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.7, delay: 0.3 }}
 className="text-xs text-slate-400 font-mono leading-5 max-w-[240px] mt-4 md:mt-8"
 >
 Built for high-frequency enterprise operations, our products eliminate operational drag across every layer.
 </motion.p>
 </div>

 {/* Line 3 */}
 <motion.h1
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.3 }}
 className="text-[clamp(3.5rem,9vw,9rem)] font-light leading-none tracking-wider uppercase"
 >
 ECOSYSTEM
 </motion.h1>
 </div>

 {/* Separator + meta row */}
 <div className="mt-16">
 <div className="md:flex md:justify-end items-center gap-6">
 <Separator className="w-full my-6 max-w-4xl" />
 <div className="text-xs whitespace-nowrap font-mono text-slate-400 uppercase tracking-[0.2em]">
 ASTRAVENTA — SINCE 2026
 </div>
 <div className="flex w-full items-end gap-4 mt-4 md:mt-0">
 <span className="text-2xl md:text-4xl font-thin text-slate-700 uppercase tracking-wider">AUTONOMOUS</span>
 <span className="text-3xl md:text-5xl font-bold italic text-primary">products</span>
 </div>
 </div>
 </div>
 </div>

 {/* Bottom preview + CTA */}
 <div className="relative z-10 max-w-[1400px] mx-auto w-full pb-20 gap-6 items-end md:flex">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.5 }}
 className="w-84 h-48 shadow-lg border border-slate-200 rounded-2xl overflow-hidden mb-8 md:mb-0 flex-shrink-0"
 >
 <img
 src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800"
 alt="Astra SaaS Products"
 className="w-full h-full object-cover"
 />
 </motion.div>
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.8, delay: 0.6 }}
 className="flex-1"
 >
 <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 max-w-sm">
 From AI reasoning engines to mobile monitoring tools — every module in the ecosystem is built to autonomous enterprise grade.
 </p>
 <Button className="h-12 px-7 bg-primary hover:bg-primary/90 text-white rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/20" asChild>
 <a href="#catalog" className="flex items-center gap-2">Browse Catalog <ArrowRight className="w-4 h-4" /></a>
 </Button>
 </motion.div>
 </div>

 {/* Fixed right accent */}
 <div className="fixed right-0 top-1/2 h-36 items-center flex transform -translate-y-1/2 z-40 pointer-events-none">
 <div className="bg-slate-900 text-white py-6 px-3 text-[10px] font-bold uppercase tracking-[0.2em]">
 <span className="rotate-180 [writing-mode:vertical-rl]">SaaS Ecosystem</span>
 </div>
 </div>
 </section>

 {/* Sticky Filter */}
 <div className="sticky top-24 z-40 px-6 pointer-events-none mb-8">
 <div className="max-w-fit mx-auto pointer-events-auto">
 <nav className="px-1.5 py-1.5 bg-white/90 backdrop-blur-xl border border-slate-200/50 rounded-full shadow-lg flex items-center gap-1">
 {categories.map((cat) => (
 <button
 key={cat}
 onClick={() => setActiveCategory(cat)}
 className={cn(
 "px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-colors",
 activeCategory === cat 
 ? "bg-primary text-white shadow-md shadow-primary/20" 
 : "text-slate-400 hover:text-primary"
 )}
 >
 {cat}
 </button>
 ))}
 </nav>
 </div>
 </div>

 {/* Product Listing */}
 <section id="catalog" className="px-6">
 <div className="max-w-[1400px] mx-auto">
 <div className="space-y-0">
 {filteredProducts.map((product, idx) => (
 <ProductCard key={product.id} product={product} index={idx} />
 ))}
 </div>
 
 {filteredProducts.length === 0 && (
 <div className="py-24 text-center">
 <Search className="w-10 h-10 text-slate-200 mx-auto mb-4" />
 <h3 className="text-xl font-bold text-slate-900 mb-1">No results</h3>
 <p className="text-sm text-slate-500">Try common search parameters.</p>
 </div>
 )}
 </div>
 </section>

 {/* Can't find what you need? (Footer Transition) */}
 <section className="px-6 pt-16">
 <div className="max-w-[1200px] mx-auto">
 <div className="relative rounded-[2.5rem] p-10 lg:p-16 overflow-hidden border border-slate-200/50 bg-white/40 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
 {/* Glass effect background */}
 <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary/5 pointer-events-none" />
 <div className="relative z-10 flex flex-col items-center text-center">
 <div className="w-14 h-14 rounded-2xl bg-[#2910E5]/5 border border-[#2910E5]/10 flex items-center justify-center mb-8 shadow-sm">
 <Cpu className="w-7 h-7 text-[#2910E5]" />
 </div>
 
 <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 font-black tracking-tight leading-none group">
 Can't find what you need?
 </h2>
 
 <p className="text-slate-600 text-lg max-w-xl mx-auto mb-10 font-medium leading-relaxed">
 We architect bespoke autonomous systems tailored to specialized high-frequency requirements. Partner with us for custom-engineered modules.
 </p>
 
 <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
 <span className="flex items-center gap-2">Dedicated Sprints</span>
 <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
 <span className="flex items-center gap-2">Private Source</span>
 <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
 <span className="flex items-center gap-2">Enterprise SLA</span>
 </div>

 <Button className="h-16 px-12 bg-black hover:bg-slate-900 text-white rounded-full font-black text-lg flex items-center gap-4 transition-all duration-300 shadow-xl shadow-black/10 border-none group" asChild>
 <Link to="/contact">
 Initialize Project <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
 </Link>
 </Button>
 </div>
 </div>
 </div>
 </section>

 </main>

 <Footer />
 </div>
 );
};

export default ProductCatalog;
