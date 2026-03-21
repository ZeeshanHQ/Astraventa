import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import {
  Brain,
  MessageSquare,
  BarChart3,
  Search,
  Code2,
  Cpu,
  Globe,
  ArrowRight,
  Database,
  Lock,
  Workflow,
  Network,
  Zap,
  ShieldCheck,
  Activity,
  LineChart,
  MousePointerClick,
  Terminal
} from "lucide-react";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";
import { useNavigate } from "react-router-dom";

// ─── Stitch Primitive: Interactive Neural Node Graph (Hero Right Side) ────────────
const StitchNodeGraph = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, name: "Neural_Engine", icon: Cpu, angle: 0, distance: 160 },
    { id: 2, name: "Data_Ingest", icon: Database, angle: 72, distance: 140 },
    { id: 3, name: "Logic_Mesh", icon: Workflow, angle: 144, distance: 180 },
    { id: 4, name: "Edge_Compute", icon: Network, angle: 216, distance: 150 },
    { id: 5, name: "Secure_Vault", icon: Lock, angle: 288, distance: 170 },
  ];

  return (
    <div className="relative w-full h-[540px] flex items-center justify-center pointer-events-none sm:pointer-events-auto">
      {/* Central Core */}
      <div className="relative z-20 w-32 h-32 bg-white rounded-full border border-black/[0.06] shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 animate-pulse" />
        <div className="relative z-10 flex flex-col items-center gap-1.5">
          <Brain className="w-8 h-8 text-primary" />
          <span className="text-[9px] font-['Anonymous_Pro'] font-black tracking-[0.2em] text-black/40 uppercase">CORE_AI</span>
        </div>
      </div>

      {/* Neural Paths & Satellites */}
      <div className="absolute inset-0 flex items-center justify-center">
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = Math.cos(rad) * node.distance;
          const y = Math.sin(rad) * node.distance;
          const isHovered = hoveredNode === node.id;
          const Icon = node.icon;

          return (
            <div key={node.id} className="absolute inset-0 flex items-center justify-center">
              {/* Path Line */}
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke={isHovered ? "hsl(var(--primary))" : "rgba(0,0,0,0.08)"}
                  strokeWidth={isHovered ? "1.5" : "1"}
                  strokeDasharray={isHovered ? "0" : "4 4"}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: node.id * 0.2 }}
                />
              </svg>

              {/* Satellite Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + node.id * 0.1 }}
                className="absolute pointer-events-auto cursor-pointer"
                style={{ transform: `translate(${x}px, ${y}px)` }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white border flex items-center justify-center transition-all duration-300 ${isHovered ? 'border-primary shadow-[0_0_25px_rgba(var(--primary-rgb),0.25)] -translate-y-1' : 'border-black/[0.06] shadow-sm'}`}>
                  <Icon className={`w-5 h-5 transition-colors ${isHovered ? 'text-primary' : 'text-black/30'}`} />
                </div>

                {/* Technical Label */}
                <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  <div className="bg-black text-white text-[8px] font-['Anonymous_Pro'] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full flex items-center gap-2 shadow-xl">
                    <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                    {node.name}
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const AIService = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraAgent AI",
      tagline: "The Browser Worker Agent",
      icon: MousePointerClick,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/tools/astra-agent"
    },
    {
      title: "AstraPulse AI",
      tagline: "AI Observability & Metrics",
      icon: Activity,
      color: "text-black/60",
      bg: "bg-black/5",
      href: "/tools/astra-pulse"
    },
    {
      title: "AstraMarket AI",
      tagline: "Competitor Intelligence",
      icon: LineChart,
      color: "text-primary",
      bg: "bg-primary/20",
      href: "/tools/astra-market"
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-hidden font-display">
      <Header />

      <main className="pt-20">
        {/* ─── HERO (50/50 Split) ────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-[85vh] flex items-center px-6 overflow-hidden bg-white">
          {/* Refined grid background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(126,150,246,0.07)_0%,transparent_65%)] pointer-events-none" />

          <motion.div style={{ y: heroY }} className="relative z-10 max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-20">

            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/[0.06] mb-10"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="font-['Anonymous_Pro'] text-[11.5px] font-bold uppercase tracking-[0.2em] text-black/60">
                  INIT_INTELLIGENCE // <span className="text-primary">V1.0.0</span>
                </span>
              </motion.div>

              <h1 className="mb-8 font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.2em] text-[2.8rem] md:text-[3.5rem]">
                Autonomous AI <br />
                <span className="text-primary">Integration.</span>
              </h1>

              <p className="text-[15px] text-[#4B5563] font-display font-normal leading-[1.7] mb-10 max-w-md">
                Deploy proprietary, fine-tuned models directly into your business logic. High-fidelity intelligence engineered for global scalability.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-5">
                <ShinyButton
                  className="h-11 px-7 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.1em]"
                  onClick={() => navigate("/contact")}
                >
                  <span className="flex items-center gap-2.5 pt-[2px]">
                    Deploy Models <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>
                <Button
                  variant="ghost"
                  className="h-9 px-5 text-black/70 hover:text-black hover:bg-transparent transition-colors text-[12px] font-display font-medium tracking-[0.08em] uppercase shadow-none bg-transparent"
                  onClick={() => navigate("/services")}
                >
                  <Terminal className="mr-2 w-3.5 h-3.5 text-primary" /> Documentation
                </Button>
              </div>

              {/* Technical Markers */}
              <div className="flex flex-wrap items-center gap-7 mt-16 pt-8 border-t border-black/5 text-[11px] font-display font-normal uppercase tracking-[0.15em] text-black/30">
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Fine-Tuning</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />RAG Systems</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />GPU Inference</span>
                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />Agentic Flows</span>
              </div>
            </div>

            {/* Right Content (Interactive Component) */}
            <div className="lg:col-span-5 relative w-full flex justify-center">
              <StitchNodeGraph />
            </div>

          </motion.div>
        </section>

        {/* ─── ARCHITECTURE (Technical Schematic) ─────────────────────────────────── */}
        <section className="py-20 px-6 relative border-t border-black/[0.06] bg-white">
          <div className="max-w-[1300px] mx-auto">
            <motion.div {...fadeUp} className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-6">
                <span className="text-[10px] font-['Anonymous_Pro'] font-bold text-black/60 uppercase tracking-[0.15em]">OUR_METHODOLOGY</span>
              </div>
              <h2 className="font-display font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl mb-5">Technical Architecture</h2>
              <p className="text-[15px] text-[#4B5563] font-display font-normal leading-[1.7] max-w-xl mx-auto">
                High-throughput infrastructure blueprint designed for mission-critical enterprise environments.
              </p>
            </motion.div>

            {/* Schematic Flow Diagram */}
            <div className="relative w-full h-auto bg-black/[0.01] rounded-2xl border border-black/[0.06] p-10 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-primary/20 hidden lg:block -translate-y-1/2" />

              {[
                { step: "01", title: "Ingestion", desc: "Embeddings & Logic", icon: Database },
                { step: "02", title: "Orchestration", desc: "Scalable Logic Gates", icon: Workflow },
                { step: "03", title: "Inference", desc: "Hardened GPU Layer", icon: Cpu },
                { step: "04", title: "Deployment", desc: "Global Logic Edge", icon: Globe }
              ].map((node, i) => {
                const Icon = node.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative z-10 flex flex-col items-center bg-white p-6 rounded-2xl border border-black/[0.06] w-full lg:w-60 transition-all hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-5 text-primary border border-black/[0.06] shadow-sm transition-colors group-hover:border-primary/20">
                      <Icon className="w-5 h-5 stroke-[1.5px]" />
                    </div>
                    <div className="text-[8px] font-['Anonymous_Pro'] font-bold text-primary mb-3 tracking-widest uppercase">PHASE_{node.step}</div>
                    <h4 className="text-lg font-heading font-normal text-black mb-2 tracking-[0.15em] uppercase group-hover:text-primary transition-colors">{node.title}</h4>
                    <p className="text-[11px] text-[#4B5563] text-center font-display leading-relaxed">{node.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CORE CAPABILITIES (Accordion) ────────────────────────────────────── */}
        <section className="border-t border-black/[0.06] py-24">
          <LandingAccordionItem />
        </section>

        {/* ─── STRATEGIC IMPACT (Performance & Metrics) ─────────────────────────── */}
        <section className="py-20 px-6 relative bg-white overflow-hidden border-t border-black/[0.06]">
          <div className="max-w-[1300px] mx-auto">
            <motion.div {...fadeUp} className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-6">
                <span className="text-[10px] font-['Anonymous_Pro'] font-bold text-black/60 uppercase tracking-[0.15em]">OPERATIONAL_PERFORMANCE</span>
              </div>
              <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl mb-5">Strategic Impact</h2>
              <p className="text-[15px] text-[#4B5563] font-display font-normal leading-[1.7] max-w-xl">
                Measuring the delta between legacy manual processes and Astra‑hardened AI workflows.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "Efficiency Gain", value: "85%", desc: "Reduction in manual operation latency across enterprise document ingestion.", icon: Activity },
                { label: "Throughput", value: "12x", desc: "Linear increase in processing capacity without additional infrastructure overhead.", icon: Zap },
                { label: "Inference Speed", value: "<15ms", desc: "Proprietary fine-tuning reduces latency for mission-critical decisioning.", icon: Cpu }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-2xl border border-black/[0.06] bg-black/[0.01] hover:bg-black/[0.03] hover:border-primary/20 transition-all flex flex-col group hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-8 text-black/20 group-hover:text-primary border border-black/[0.06] group-hover:border-primary/20 transition-all shadow-sm">
                      <Icon className="w-5 h-5 stroke-[1.5px]" />
                    </div>
                    <div className="text-5xl font-heading font-normal text-black mb-4 tracking-tighter group-hover:text-primary transition-colors">{stat.value}</div>
                    <div className="text-[9px] font-['Anonymous_Pro'] font-bold text-black/30 mb-4 uppercase tracking-[0.25em]">{stat.label}</div>
                    <p className="text-[13px] text-[#4B5563] font-display leading-relaxed">{stat.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── HARDENED SECURITY (Infrastructure Depth) ───────────────────────────── */}
        <section className="py-20 px-6 relative bg-white border-t border-black/[0.06]">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div {...fadeUp}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-6">
                  <Lock className="w-3 h-3 text-primary" />
                  <span className="text-[10px] font-['Anonymous_Pro'] font-bold text-black/60 uppercase tracking-[0.15em]">SECURITY_ARCHITECTURE</span>
                </div>
                <h2 className="mb-6 leading-[1.15] font-heading font-normal text-black uppercase tracking-[0.2em] text-3xl lg:text-5xl">
                  Hardened Core. <br />
                  <span className="text-primary">Zero Compromise.</span>
                </h2>
                <p className="text-[15px] text-[#4B5563] font-display font-normal leading-[1.7] mb-10 max-w-lg">
                  Every model deployment is encapsulated within a multi-layer security perimeter.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Isolated Inference", desc: "Sandboxed environments for model execution." },
                    { title: "End-to-End Encryption", desc: "AES-256 bit encryption for all data-in-transit." },
                    { title: "Hardware-Rooted Trust", desc: "Integration with HSM and secure enclave technologies." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-2xl border border-black/[0.06] bg-black/[0.01] hover:border-primary/20 transition-all">
                      <div className="mt-0.5 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <div className="text-[13px] font-heading font-normal text-black mb-1 uppercase tracking-[0.1em]">{item.title}</div>
                        <p className="text-[13px] text-[#4B5563] font-display leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl opacity-30" />
              <div className="relative bg-white border border-black/[0.06] p-6 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                <div className="flex justify-between items-center mb-8 pb-3 border-b border-black/5">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/5" />
                    <div className="w-1.5 h-1.5 rounded-full bg-black/5" />
                    <div className="w-1.5 h-1.5 rounded-full bg-black/5" />
                  </div>
                  <div className="text-[8px] font-['Anonymous_Pro'] font-bold uppercase tracking-widest text-primary">AUDIT_V4 // PASS</div>
                </div>

                <div className="space-y-5">
                  {[
                    { label: "Network Isolation", status: "Active", val: "100%" },
                    { label: "Key Rotation", status: "Scheduled", val: "24h" },
                    { label: "Latency Buffer", status: "Optimized", val: "2.4ms" }
                  ].map((row, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-[8px] font-['Anonymous_Pro'] font-bold text-black/30 uppercase tracking-widest">
                        <span>{row.label}</span>
                        <span className="text-primary">{row.status}</span>
                      </div>
                      <div className="h-1 w-full bg-black/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          className="h-full bg-black rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-black/[0.04] border border-black/[0.06]">
                  <div className="text-[8px] font-['Anonymous_Pro'] font-bold uppercase tracking-widest mb-1.5 text-black/30">Global Threat Intelligence</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-heading font-normal text-black tracking-tighter uppercase">Ready</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────── */}
        <section className="pb-12">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

        {/* ─── FINAL CTA (SVG Background, Bright) ──────────────────────────────── */}
        <section className="py-24 px-6 relative bg-white border-t border-black/[0.06] overflow-hidden">
          <div className="max-w-[1300px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden border border-black/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.08)]" style={{ aspectRatio: "1024.5/576" }}>

              {/* SVG Background – fills entire container, no zoom on hover */}
              <img
                src="/ai-cta.svg"
                alt="Astraventa AI Infrastructure Visualization"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Light overlay for readability without darkening */}
              <div className="absolute inset-0 bg-white/10 pointer-events-none" />

              {/* Centered CTA Content — perfectly inside the blue box */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                {/* Status badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-[0_2px_16px_rgba(0,0,0,0.1)] border border-white/80 mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="font-['Anonymous_Pro'] text-[11px] font-bold uppercase tracking-[0.2em] text-black/60">
                    SCALE_INITIALIZATION // <span className="text-primary">V1.0</span>
                  </span>
                </div>

                {/* Headline */}
                <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.2em] text-[2.2rem] md:text-[3rem] mb-5 drop-shadow-[0_2px_20px_rgba(255,255,255,0.9)]">
                  Deploy <br />
                  <span className="text-primary">Intelligence.</span>
                </h2>

                {/* Sub-copy */}
                <p className="text-[14px] text-[#4B5563] font-display font-normal leading-[1.7] mb-10 max-w-md drop-shadow-[0_1px_10px_rgba(255,255,255,1)]">
                  Architect and deploy your proprietary AI infrastructure with our specialized engineering lab.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <ShinyButton
                    className="h-11 px-7 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.1em]"
                    onClick={() => navigate("/contact")}
                  >
                    <span className="flex items-center gap-2.5 pt-[2px]">
                      Request Audit <ArrowRight className="w-4 h-4" />
                    </span>
                  </ShinyButton>
                  <Button
                    variant="ghost"
                    className="h-9 px-5 text-black/60 hover:text-black hover:bg-transparent transition-colors text-[12px] font-display font-medium tracking-[0.08em] uppercase shadow-none bg-transparent"
                    onClick={() => navigate("/services")}
                  >
                    <Terminal className="mr-2 w-3.5 h-3.5 text-primary" /> View Capabilities
                  </Button>
                </div>
              </div>

              {/* Bottom status strip */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-6 text-[9px] font-['Anonymous_Pro'] font-bold text-black/30 uppercase tracking-[0.3em]">
                <span className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/[0.06]">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> NEURAL_GRID // v4
                </span>
                <span className="flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-black/[0.06] hidden md:flex">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/20" /> SOC2_AUDITED
                </span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AIService;
