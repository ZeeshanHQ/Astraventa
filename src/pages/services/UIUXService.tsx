import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
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

// ─── Stitch Primitive: Hero Visual (Hero Right Side) ────────────
const StitchHeroVisual = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pointer-events-none sm:pointer-events-auto bg-transparent shadow-none border-none overflow-visible">
      {/* SVG Container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 flex items-center justify-center w-full"
        >
          <img
            src="/ui 1.svg"
            alt="UI/UX Design Architecture"
            className="w-full max-w-[550px] lg:max-w-[850px] h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

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
  const navigate = useNavigate();
  const [activePhase, setActivePhase] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraVibe AI",
      tagline: "Generative UI System",
      icon: Palette,
      color: "text-black",
      bg: "bg-black/10",
      href: "/tools/astra-vibe"
    },
    {
      title: "AstraPrompt AI",
      tagline: "Engineering Design Prompts",
      icon: Wand2,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/tools/astra-prompt"
    },
    {
      title: "AstraMatch AI",
      tagline: "User Sentiment Analysis",
      icon: Heart,
      color: "text-primary",
      bg: "bg-primary/20",
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
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-hidden font-sans">
      <Header />

      <main className="pt-0">

        {/* ─── HERO Section ──────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-[85vh] flex items-center px-6 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-24">

            {/* Left Content */}
            <div className="lg:col-span-7 pt-12">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-2xl bg-black/[0.01] border border-black/[0.06] mb-8"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[9px] font-black font-['Anonymous_Pro'] text-[#4B5563] tracking-[0.4em] uppercase">SYSTEM_INITIALIZED // INTERFACE_ENGINE</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8 text-5xl md:text-6xl lg:text-7xl font-heading font-normal text-black tracking-tighter leading-[0.9] uppercase"
              >
                Experience<br />System<br />
                <span className="text-primary/10 select-none">Design.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#4B5563] font-medium text-base leading-relaxed max-w-md mb-10 uppercase tracking-tight"
              >
                We build cognitive-first interfaces that reduce friction and accelerate conversion through deterministic micro-interactions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-8"
              >
                <Button className="h-10 px-6 bg-black hover:bg-black/90 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center gap-3 transition-all border-none shadow-xl group" asChild>
                  <Link to="/contact">
                    INITIALIZE_DESIGN_RUN <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform group-hover:text-primary" />
                  </Link>
                </Button>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-primary/40" />
                  <span className="text-[9px] font-black font-['Anonymous_Pro'] text-black/30 uppercase tracking-[0.3em]">RENDER_READY</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Hero SVG */}
            <div className="lg:col-span-5 relative w-full">
              <StitchHeroVisual />
            </div>

          </motion.div>
        </section>


        {/* ─── CAPABILITIES GRID ──────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-b border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 text-left">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-[#4B5563] uppercase tracking-[0.4em] mb-6 block">DELIVERABLES</span>
                <h2 className="text-3xl md:text-4xl font-display font-normal text-black mb-10 tracking-[0.2em] uppercase leading-[1.15]">Core <br /><span className="text-black/5">Capabilities.</span></h2>
              </div>
              <p className="text-[#4B5563] font-medium max-w-sm border-l border-border/10 pl-10 uppercase text-xs tracking-widest leading-relaxed">
                Each capability is a production-grade discipline, not a checkbox. Engineered for global performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-black/[0.06] rounded-2xl overflow-hidden bg-black/[0.01]">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.05 }}
                  className="p-10 flex flex-col gap-6 border border-border/20 group hover:bg-black/[0.03] transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center text-black/20 group-hover:text-primary group-hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all">
                      {cap.icon}
                    </div>
                    <span className="text-[10px] font-['Anonymous_Pro'] text-black/20 font-black tracking-widest">PROTO_{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-black tracking-tighter mb-4 uppercase group-hover:text-black transition-colors">{cap.title}</h3>
                    <p className="text-sm text-[#4B5563] font-medium leading-relaxed uppercase tracking-tight">{cap.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border/5 group-hover:border-border/10">
                    {cap.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 text-[9px] font-black border border-black/[0.06] rounded-2xl text-black/30 uppercase tracking-widest font-['Anonymous_Pro'] bg-white group-hover:text-[#4B5563] transition-colors">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── METRICS BAR ────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-black border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
              {[
                { value: "40%", label: "CONVERSION_UPLIFT", sub: "60+ RECURSIVE LAUNCHES" },
                { value: "12ms", label: "INTERACTION_LATENCY", sub: "PRODUCTION_SPEC" },
                { value: "98%", label: "WCAG_COMPLIANCE", sub: "INCLUSIVE_ENGINEERING" },
                { value: "4.8x", label: "DESIGN_ROI", sub: "MEASURED_ENTITY" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.07 }}
                  className="flex flex-col gap-3 group"
                >
                  <span className="text-3xl md:text-4xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">{m.value}</span>
                  <div className="space-y-1 border-t border-white/10 pt-4">
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] font-['Anonymous_Pro'] block">{m.label}</span>
                    <span className="text-[10px] text-white/30 font-black uppercase tracking-widest font-['Anonymous_Pro'] block">{m.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW WE THINK ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">

              {/* Left sticky headline */}
              <div className="lg:col-span-5">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-[#4B5563] uppercase tracking-[0.4em] mb-6 block">PHILOSOPHY</span>
                <h2 className="text-3xl md:text-4xl font-heading font-normal text-black tracking-[0.2em] leading-[1.15] sticky top-40 uppercase">
                  Designed for<br />engineers.<br />
                  <span className="text-primary">Loved by users.</span>
                </h2>
                <div className="mt-20 flex items-center gap-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-['Anonymous_Pro'] text-black/20 font-black uppercase tracking-widest">COGNITIVE_BIAS // MITIGATED</span>
                </div>
              </div>

              {/* Right: principals */}
              <div className="lg:col-span-7 flex flex-col divide-y divide-border/10">
                {[
                  {
                    n: "01",
                    title: "System Constraints",
                    body: "Treating design decisions as hard engineering constraints. every component has defined deterministic bounds, states, and edge-case behaviors.",
                  },
                  {
                    n: "02",
                    title: "Evidence Primacy",
                    body: "Anchoring every decision in session recordings and heuristic models. beautiful design is the byproduct of recursive data validation.",
                  },
                  {
                    n: "03",
                    title: "Production Handoff",
                    body: "Generating component-level specs, motion timing guides, and token documentation ready for immediate engineering deployment.",
                  },
                  {
                    n: "04",
                    title: "Recursive Accessibility",
                    body: "Implementing WCAG 2.1 AA compliance as a baseline technical requirement. inclusive architecture is a core performance metric.",
                  },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.08 }}
                    className="py-12 flex gap-12 group"
                  >
                    <span className="text-[10px] font-['Anonymous_Pro'] text-black/20 group-hover:text-primary transition-colors shrink-0 font-black pt-1 tracking-widest">ID_{p.n}</span>
                    <div>
                      <h3 className="text-2xl font-black text-black tracking-tighter mb-4 uppercase group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-[15px] text-[#4B5563] font-display font-medium leading-relaxed uppercase tracking-tight">{p.body}</p>
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

        {/* ─── ELITE FINAL CTA ────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 border-t border-black/[0.06] bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-black/[0.01] blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-20 items-center">
              <div className="lg:col-span-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-black/[0.01] border border-black/[0.06] mb-10"
                >
                  <PenTool className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[10px] font-black font-['Anonymous_Pro'] text-[#4B5563] tracking-[0.3em] uppercase">SYSTEM_INIT // DESIGN_CORE</span>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-heading font-normal text-black tracking-[0.2em] leading-[1.15] uppercase mb-12">
                  Precision <br />
                  Interaction<span className="text-primary">.</span>
                </h2>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <ShinyButton
                    className="h-12 px-8 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.12em]"
                    onClick={() => { }}
                  >
                    <span className="flex items-center gap-3 pt-[2px]">
                      INITIALIZE_DESIGN_AUDIT <ArrowRight className="w-4 h-4" />
                    </span>
                  </ShinyButton>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                    <span className="text-[10px] font-black font-['Anonymous_Pro'] text-black/20 uppercase tracking-[0.2em]">AVAILABILITY: Q3_2024</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                {[
                  { label: "SHIPPED_UNITS", value: "60+" },
                  { label: "COMPLIANCE_RATE", value: "98.4%" },
                  { label: "AVG_ROI_INDEX", value: "4.8x" }
                ].map((stat, i) => (
                  <div key={i} className="p-8 bg-black/[0.01] border border-black/[0.06] rounded-2xl">
                    <div className="text-[10px] font-['Anonymous_Pro'] text-black/20 mb-2 uppercase tracking-widest">{stat.label}</div>
                    <div className="text-4xl font-black text-black tracking-tighter uppercase">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical markers strip */}
            <div className="flex flex-wrap items-center gap-8 mt-32 pt-10 border-t border-border/10 text-[10px] font-['Anonymous_Pro'] text-black/20 font-black uppercase tracking-[0.3em]">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-black/40" /> 60_RECURSIVE_LAUNCHES</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-black/40" /> ENTERPRISE_HANDOFFS</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-black/40" /> WCAG_AA_BY_DEFAULT</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-black/40" /> FIGMA_SPEC_SYNC</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default UIUXService;
