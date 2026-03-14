import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  Eye,
  Layers,
  PenTool,
  CheckCircle,
  MonitorSmartphone,
  MousePointer2,
  LayoutGrid,
  Sparkles,
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  Palette,
  Wand2,
  Heart
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";
import { FullScreenScrollFX } from "@/components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Discovery",
    title: "Research",
    rightLabel: "Insight",
    background: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    leftLabel: "Structure",
    title: "Architecture",
    rightLabel: "Flow",
    background: "https://images.unsplash.com/photo-1581291518062-c13f277359fb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    leftLabel: "Aesthetics",
    title: "Experience",
    rightLabel: "Design",
    background: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    leftLabel: "Validation",
    title: "Optimization",
    rightLabel: "Refinement",
    background: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

const phases = [
  {
    id: "01",
    name: "Empathize",
    description: "Deep user research, cognitive journey mapping, and persona synthesis. We decode behavioral signals before touching software.",
    tags: ["User Research", "Persona Maps", "Journey Flows", "Cognitive Audits"],
    icon: <Users className="w-5 h-5" />,
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "02",
    name: "Structure",
    description: "Information architecture design, sitemap construction, and content hierarchy validation. Every navigation path is stress-tested before wireframing begins.",
    tags: ["IA Design", "Sitemaps", "Content Hierarchy", "Flow Diagrams"],
    icon: <Layers className="w-5 h-5" />,
    img: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "03",
    name: "Wireframe",
    description: "Low-to-mid fidelity wireframes defining interaction patterns and component placement. Decisions are made here, not in pixels.",
    tags: ["Lo-Fi Skeletons", "Interaction Maps", "Component Specs", "Decision Points"],
    icon: <LayoutGrid className="w-5 h-5" />,
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "04",
    name: "Design",
    description: "Pixel-perfect high-fidelity screens with atomic design systems, color tokens, and micro-interaction specs — production-ready for engineering handoff.",
    tags: ["Design Tokens", "Hi-Fi Screens", "Atomic Systems", "Handoff Docs"],
    icon: <PenTool className="w-5 h-5" />,
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "05",
    name: "Validate",
    description: "Usability testing, A/B experimentation, and heuristic audits. Every design decision is validated with quantitative and qualitative signals.",
    tags: ["Usability Tests", "A/B Analysis", "Heuristic Audit", "Conversion Tracking"],
    icon: <CheckCircle className="w-5 h-5" />,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
];

const capabilities = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Premium Micro-Interactions",
    description: "Physics-based transitions that provide meaningful feedback and guide user attention. Every hover, click, and swipe is an engineered experience — not an afterthought.",
    tags: ["Spring Physics", "Haptic Feedback", "Gesture Mapping"],
    accent: true,
  },
  {
    icon: <LayoutGrid className="w-5 h-5" />,
    title: "Atomic Design Systems",
    description: "Token-driven component libraries that enforce technical consistency across your entire product ecosystem — from button states to full-page templates.",
    tags: ["Design Tokens", "Component Library", "Style Guide"],
    accent: false,
  },
  {
    icon: <MousePointer2 className="w-5 h-5" />,
    title: "Heuristic Audits",
    description: "Data-driven analysis identifying churn points in your onboarding and conversion funnels. We measure, then we fix.",
    tags: ["Funnel Analysis", "Churn Mapping", "UX Scoring"],
    accent: false,
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5" />,
    title: "Responsive Architecture",
    description: "Fluid typography and adaptive grid systems that render perfectly from ultra-wide to mobile — zero viewport compromise.",
    tags: ["Fluid Grids", "Breakpoint Strategy", "Viewport Testing"],
    accent: false,
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Accessibility by Default",
    description: "WCAG 2.1 AA compliance, screen reader optimization, and color contrast validation built into every component from day one.",
    tags: ["WCAG 2.1 AA", "Screen Readers", "Contrast Audit"],
    accent: false,
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Performance-First Design",
    description: "Every visual decision is weighed against load performance. Our design handoffs include asset optimization specs and render priority maps.",
    tags: ["Asset Optimization", "LCP Targets", "Render Maps"],
    accent: false,
  },
];

const UIUXService = () => {
  const [activePhase, setActivePhase] = useState(0);

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraVibe AI",
      tagline: "Generative UI System",
      icon: Palette,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      href: "/tools/astra-vibe"
    },
    {
      title: "AstraPrompt AI",
      tagline: "Engineering Design Prompts",
      icon: Wand2,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      href: "/tools/astra-prompt"
    },
    {
      title: "AstraMatch AI",
      tagline: "User Sentiment Analysis",
      icon: Heart,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      href: "/tools/astra-match"
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const currentPhase = phases[activePhase];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-600/10 overflow-x-hidden">
      <Header isDarkHeroPage={true} />

      <main className="pt-0">

        {/* ─── HERO (Full Screen FX) ─────────────────────────────────────────────── */}
        <section className="relative w-full">
          <FullScreenScrollFX
            sections={sections}
            header={<div className="opacity-0 pointer-events-none absolute h-0 w-0" />}
            showProgress
            durations={{ change: 0.7, snap: 800 }}
            colors={{
              text: "rgba(255,255,255,0.95)",
              overlay: "rgba(0,0,0,0.72)",
              pageBg: "#ffffff",
              stageBg: "#000000"
            }}
          />
        </section>

        {/* ─── EXPERIENCE ARCHITECTURE ────────────────────────────────────────────── */}
        <section className="pt-20 pb-0 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 pb-8 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2910E5]/5 border border-[#2910E5]/10 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2910E5] animate-pulse" />
                  <span className="text-[10px] font-black text-[#2910E5] tracking-[0.18em] uppercase font-mono">Design Process · 5-Phase System</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[0.95] mb-3">
                  Experience<br /><span className="text-[#2910E5]">Architecture.</span>
                </h2>
                <p className="text-slate-500 font-medium text-base max-w-md leading-relaxed">
                  A systematic, evidence-driven approach — from first sketch to shipped, validated product.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono font-black text-slate-300 uppercase tracking-widest shrink-0">
                {phases.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePhase(i)}
                    className={`px-3 py-1.5 rounded-md transition-all duration-200 ${i === activePhase ? 'bg-slate-950 text-white' : 'hover:bg-slate-100 text-slate-400'}`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active phase content */}
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-100 rounded-2xl overflow-hidden mb-0"
            >
              {/* Left: image */}
              <div className="relative h-72 lg:h-auto min-h-[300px] overflow-hidden bg-slate-950">
                <img
                  src={currentPhase.img}
                  alt={currentPhase.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-black text-white/40 font-mono tracking-widest uppercase">Phase_{currentPhase.id}</span>
                  <h3 className="text-4xl font-black text-white tracking-tight mt-1">{currentPhase.name}</h3>
                </div>
              </div>

              {/* Right: details */}
              <div className="p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#2910E5]/8 text-[#2910E5]">
                      {currentPhase.icon}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono font-black uppercase tracking-widest">{currentPhase.id} / 05</span>
                  </div>
                  <p className="text-lg text-slate-700 font-medium leading-relaxed mb-8">
                    {currentPhase.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentPhase.tags.map(t => (
                      <span key={t} className="px-3 py-1 text-[10px] font-black border border-slate-100 rounded-md text-slate-400 uppercase tracking-widest font-mono">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                  {phases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActivePhase(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${i === activePhase ? 'w-8 bg-[#2910E5]' : 'w-4 bg-slate-200 hover:bg-slate-300'}`}
                    />
                  ))}
                  <span className="ml-auto text-[10px] font-mono text-slate-300 uppercase tracking-widest">{activePhase + 1}/{phases.length}</span>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── CAPABILITIES GRID ──────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-2 block">What We Deliver</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-[0.95]">Six Core<br /><span className="text-[#2910E5]">Capabilities.</span></h2>
              </div>
              <p className="text-slate-500 font-medium text-sm max-w-sm leading-relaxed">
                Each capability is a production-grade discipline, not a checkbox.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-slate-100 rounded-2xl overflow-hidden divide-y divide-x divide-slate-100">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white p-8 flex flex-col gap-4 group hover:bg-slate-950 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#2910E5]/8 flex items-center justify-center text-[#2910E5] group-hover:bg-[#2910E5]/20 transition-colors">
                      {cap.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-200 group-hover:text-slate-600 font-black tracking-widest">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 tracking-tight mb-2 group-hover:text-white transition-colors">{cap.title}</h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed group-hover:text-slate-400 transition-colors">{cap.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {cap.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 text-[9px] font-black border border-slate-100 group-hover:border-white/10 rounded text-slate-400 group-hover:text-slate-500 uppercase tracking-wider font-mono transition-colors">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── METRICS BAR ────────────────────────────────────────────────────────── */}
        <section className="py-16 px-6 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
              {[
                { value: "40%", label: "Average Conversion Uplift", sub: "across 60+ product launches" },
                { value: "12ms", label: "Max Critical Interaction Latency", sub: "production-measured" },
                { value: "98%", label: "WCAG Compliance Rate", sub: "accessibility by default" },
                { value: "4.8x", label: "Average ROI on Design Investment", sub: "tracked over 12 months" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.07 }}
                  className={`${i === 0 ? '' : 'pl-8'} flex flex-col gap-1`}
                >
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">{m.value}</span>
                  <span className="text-[11px] font-black text-white/50 uppercase tracking-widest font-mono leading-tight">{m.label}</span>
                  <span className="text-[10px] text-white/25 font-mono mt-0.5">{m.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW WE THINK ───────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Left sticky headline */}
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-3 block">Our Philosophy</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-[0.95] sticky top-28">
                  Designed for<br />engineers.<br />
                  <span className="text-[#2910E5]">Loved by users.</span>
                </h2>
              </div>

              {/* Right: principals */}
              <div className="lg:col-span-8 flex flex-col divide-y divide-slate-100">
                {[
                  {
                    n: "01",
                    title: "Design as a System Constraint",
                    body: "We treat design decisions as engineering constraints, not suggestions. Every component has defined bounds, states, and edge-case behaviors.",
                  },
                  {
                    n: "02",
                    title: "Evidence Over Aesthetics",
                    body: "Beautiful design means nothing if it doesn't convert. We anchor every decision in user behavior data, session recordings, and heuristic models.",
                  },
                  {
                    n: "03",
                    title: "Handoff is Part of Design",
                    body: "Our deliverables don't stop at mockups. We produce component-level specs, motion timing guides, and token documentation ready for your dev team.",
                  },
                  {
                    n: "04",
                    title: "Accessibility is Non-Negotiable",
                    body: "WCAG 2.1 AA compliance is baked into our process from day one — not bolted on at the end. Inclusive design is good engineering.",
                  },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.08 }}
                    className="py-7 flex gap-8 group cursor-default"
                  >
                    <span className="text-[11px] font-mono font-black text-slate-200 group-hover:text-[#2910E5] transition-colors shrink-0 pt-1">{p.n}</span>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2">{p.title}</h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM SYNC ────────────────────────────────────────────────────────── */}
        <section className="pb-12 bg-white">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

        {/* ─── CTA ────────────────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-12 border-t border-b border-slate-950 border-opacity-10">
              <div>
                <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-3 block">Start a Project</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-[0.92]">
                  Your next product<br />deserves precision design.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 shrink-0">
                <Button asChild className="btn-primary h-12 px-8 text-sm group">
                  <Link to="/contact">Request Design System <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
                </Button>
                <Link to="/portfolio" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors underline underline-offset-4">
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Compact social proof */}
            <div className="flex flex-wrap items-center gap-6 mt-8 text-[11px] font-mono text-slate-300 uppercase tracking-widest">
              <span>60+ Products Shipped</span>
              <span className="w-1 h-1 rounded-full bg-slate-200" />
              <span>Enterprise-Ready Handoffs</span>
              <span className="w-1 h-1 rounded-full bg-slate-200" />
              <span>WCAG 2.1 AA by Default</span>
              <span className="w-1 h-1 rounded-full bg-slate-200" />
              <span>Figma + Code Delivery</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default UIUXService;
