import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
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
 MousePointerClick
} from "lucide-react";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";

// ─── Stitch Primitive: Node Graph (Hero Right Side) ──────────────────────────
const StitchNodeGraph = () => {
 return (
 <div className="relative w-full h-[450px] bg-white rounded-[2.5rem] border border-slate-100 p-8 overflow-hidden flex flex-col shadow-2xl shadow-slate-200/50 group">
 <div className="flex justify-between items-center mb-8 border-b border-slate-50 pb-4">
 <div className="flex gap-2">
 <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
 <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
 <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
 </div>
 <div className="text-[10px] uppercase tracking-[0.2em] text-[#2910E5] font-bold flex items-center gap-2">
 <div className="w-1.5 h-1.5 bg-[#2910E5] rounded-full animate-pulse" />
 Neural Engine Active
 </div>
 </div>
 <div className="flex-1 relative">
 <svg viewBox="0 0 400 200" className="w-full h-full absolute inset-0 text-[#2910E5]">
 {/* Main Paths */}
 <motion.path
 d="M 50 100 C 150 100, 150 50, 250 50 S 350 150, 450 150"
 fill="none"
 stroke="currentColor"
 strokeWidth="1"
 strokeDasharray="4 4"
 className="opacity-20"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
 />
 <motion.path
 d="M 50 150 C 150 150, 100 80, 250 120 S 350 40, 450 80"
 fill="none"
 stroke="currentColor"
 strokeWidth="1"
 strokeDasharray="4 4"
 className="opacity-20"
 initial={{ pathLength: 0 }}
 animate={{ pathLength: 1 }}
 transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
 />
 {/* Animated Glow effect path */}
 <motion.path
 d="M 50 100 C 150 100, 150 50, 250 50 S 350 150, 450 150"
 fill="none"
 stroke="url(#gradient-blue)"
 strokeWidth="2"
 initial={{ pathLength: 0, opacity: 0 }}
 animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 />
 
 <defs>
 <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="100%" y2="0%">
 <stop offset="0%" stopColor="#2910E5" stopOpacity="0" />
 <stop offset="50%" stopColor="#2910E5" stopOpacity="1" />
 <stop offset="100%" stopColor="#2910E5" stopOpacity="0" />
 </linearGradient>
 </defs>

 {/* Nodes */}
 {[
 { cx: 50, cy: 100 }, { cx: 250, cy: 50 }, { cx: 50, cy: 150 },
 { cx: 250, cy: 120 }, { cx: 400, cy: 150 }, { cx: 400, cy: 80 }
 ].map((node, i) => (
 <g key={i}>
 <motion.circle
 cx={node.cx}
 cy={node.cy}
 r="6"
 className="fill-white stroke-[#2910E5] stroke-[2px]"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 transition={{ delay: i * 0.1 }}
 />
 <motion.circle
 cx={node.cx}
 cy={node.cy}
 r="12"
 className="fill-[#2910E5]/10"
 animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
 transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
 />
 </g>
 ))}
 </svg>
 </div>
 
 {/* Metrics Overlay */}
 <div className="mt-6 grid grid-cols-2 gap-4">
 <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
 <div className="text-[8px] uppercase tracking-widest text-slate-400 mb-1">Inference Latency</div>
 <div className="text-lg font-black text-slate-900">14<span className="text-xs text-[#2910E5]">ms</span></div>
 </div>
 <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
 <div className="text-[8px] uppercase tracking-widest text-slate-400 mb-1">Throughput</div>
 <div className="text-lg font-black text-slate-900">850<span className="text-xs text-[#2910E5]">req/s</span></div>
 </div>
 </div>
 </div>
 );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const AIService = () => {
 const heroRef = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
 const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
 const heroOpacity = 1; // Keep visible as requested

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
      color: "text-blue-600",
      bg: "bg-blue-600/10",
      href: "/tools/astra-agent"
    },
    {
      title: "AstraPulse AI",
      tagline: "AI Observability & Metrics",
      icon: Activity,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      href: "/tools/astra-pulse"
    },
    {
      title: "AstraMarket AI",
      tagline: "Competitor Intelligence",
      icon: LineChart,
      color: "text-fuchsia-500",
      bg: "bg-fuchsia-500/10",
      href: "/tools/astra-market"
    }
  ];

 return (
 <div className="min-h-screen bg-transparent selection:bg-[#2910E5]/10 overflow-x-hidden">
 <Header />

 <main className="pt-20">
 {/* ─── HERO (50/50 Split) ────────────────────────────────────────────────── */}
 <section ref={heroRef} className="relative min-h-[90vh] flex items-center px-6 overflow-hidden bg-slate-50/30">
 {/* Subtle decoration */}
 <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2910E5]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
 
 <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-32">
 
 {/* Left Content (Minimalist) */}
 <div>
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white mb-8"
 >
 <Zap className="w-3.5 h-3.5 text-primary" /> <span className="technical-label !text-primary">Initialize Intelligence</span>
 </motion.div>
 <h1>
 Autonomous AI <br />
 <span className="text-primary">Integration.</span>
 </h1>
 <div className="text-slate-500 font-medium text-xl max-w-lg mb-12 leading-relaxed">
 Deploy proprietary, fine-tuned models directly into your business logic. High-fidelity intelligence engineered for global scalability and zero-trust security.
 </div>
 <div className="flex flex-col sm:flex-row gap-4">
 <Button className="btn-primary h-16 px-10 text-lg group" asChild>
 <Link to="/contact">
 Deploy Models <ArrowRight className="w-5 h-5 transition-transform" />
 </Link>
 </Button>
 <Button variant="outline" className="btn-ghost h-16 px-10 text-lg">
 Documentation
 </Button>
 </div>
 </div>

 {/* Right Content (Interactive Component) */}
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ delay: 0.2 }}
 className="relative w-full"
 >
 <StitchNodeGraph />
 </motion.div>

 </motion.div>
 </section>

 {/* ─── ARCHITECTURE (Technical Schematic) ─────────────────────────────────── */}
 <section className="py-24 px-6 relative border-t border-slate-100">
 <div className="max-w-[1400px] mx-auto">
 <motion.div {...fadeUp} className="mb-20 text-center">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
 <span className="technical-label !text-primary">Our Methodology</span>
 </div>
 <h2>Technical Architecture</h2>
 <div className="text-slate-500 font-medium text-xl max-w-2xl mx-auto leading-relaxed">
 High-throughput infrastructure blueprint designed for mission-critical enterprise environments.
 </div>
 </motion.div>

 {/* Schematic Flow Diagram */}
 <div className="relative w-full h-auto min-h-[400px] bg-white rounded-[3rem] border border-slate-100 p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl shadow-slate-100">
 {/* Extremely thin lines connecting elements */}
 <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-[#2910E5]/10 hidden lg:block -translate-y-1/2" />
 
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
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: i * 0.2 }}
 className="relative z-10 flex flex-col items-center bg-white p-8 rounded-[2rem] border border-slate-50 w-full lg:w-64 transition-all hover:border-[#2910E5]/20 hover:shadow-lg hover:shadow-[#2910E5]/5"
 >
 {/* Accents */}
 <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-[#2910E5]">
 <Icon className="w-8 h-8 stroke-[1.5px]" />
 </div>
 
 <div className="technical-label !text-primary mb-4">Phase {node.step}</div>
 <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{node.title}</h4>
 <p className="text-sm text-slate-500 text-center font-medium leading-relaxed">{node.desc}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

  {/* ─── CORE CAPABILITIES (Accordion) ────────────────────────────────────── */}
  <section className="border-t border-slate-100 py-24">
    <LandingAccordionItem />
  </section>
  {/* ─── STRATEGIC IMPACT (Performance & Metrics) ─────────────────────────── */}
  <section className="py-24 px-6 relative bg-white overflow-hidden">
    <div className="max-w-[1400px] mx-auto">
      <motion.div {...fadeUp} className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
          <span className="technical-label !text-primary">Operational Performance</span>
        </div>
        <h2 className="mb-8">Strategic Impact</h2>
        <p className="text-slate-500 font-medium text-xl max-w-2xl leading-relaxed">
          Measuring the delta between legacy manual processes and Astra-hardened AI workflows. High-velocity engineering yields exponential scalability.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Efficiency Gain", value: "85%", desc: "Reduction in manual operation latency across enterprise-wide document ingestion.", icon: Activity },
          { label: "Throughput", value: "12x", desc: "Linear increase in processing capacity without additional infrastructure overhead.", icon: Zap },
          { label: "Inference Speed", value: "<15ms", desc: "Proprietary fine-tuning reduces latency for mission-critical real-time decisioning.", icon: Cpu }
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/30 hover:bg-white hover:border-[#2910E5]/10 hover:shadow-2xl hover:shadow-slate-200/50 transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#2910E5]/5 flex items-center justify-center mb-8 text-[#2910E5]">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">{stat.value}</div>
              <div className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-[0.1em]">{stat.label}</div>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{stat.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>

  {/* ─── HARDENED SECURITY (Infrastructure Depth) ───────────────────────────── */}
  <section className="py-24 px-6 relative bg-slate-50/50 border-t border-slate-100">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <motion.div {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6">
            <Lock className="w-3.5 h-3.5 text-primary" />
            <span className="technical-label !text-primary">Security Architecture</span>
          </div>
          <h2 className="mb-8 leading-tight">Hardened Infrastructure.<br />Zero Compromise.</h2>
          <p className="text-slate-500 font-medium text-xl leading-relaxed mb-12">
            Every model deployment is encapsulated within a multi-layer security perimeter, ensuring proprietary business logic and sensitive data remain strictly isolated.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Isolated Inference", desc: "Sandboxed environments for model execution to prevent cross-contamination of logic." },
              { title: "End-to-End Encryption", desc: "AES-256 bit encryption for all data-in-transit and storage within the inference pipeline." },
              { title: "Hardware-Rooted Trust", desc: "Integration with HSM and secure enclave technologies for credential management." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 mb-1">{item.title}</div>
                  <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-[#2910E5]/5 rounded-[3rem] blur-3xl" />
        <div className="relative bg-white border border-slate-100 p-8 rounded-[3rem] shadow-2xl shadow-slate-200">
          <div className="flex justify-between items-center mb-10 pb-4 border-b border-slate-50">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-100" />
            </div>
            <div className="text-[10px] uppercase tracking-widest text-[#2910E5] font-black">Security Audit: PASS</div>
          </div>
          
          <div className="space-y-6">
            {[
              { label: "Network Isolation", status: "Active", val: "100%" },
              { label: "Key Rotation", status: "Scheduled", val: "24h" },
              { label: "Latency Buffer", status: "Optimized", val: "2.4ms" }
            ].map((row, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>{row.label}</span>
                  <span className="text-[#2910E5]">{row.status}</span>
                </div>
                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    className="h-full bg-[#2910E5]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white">
            <div className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">Global Threat Intelligence</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black">Ready</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ─── ECOSYSTEM SYNC (Moved) ─────────────────────────────────────────────── */}
  <section className="pb-12">
    <AstraEcosystemSync tools={relatedTools} />
  </section>

  {/* ─── FINAL CTA (Compact Redesign) ──────────────────────────────────────── */}
  <section className="py-20 px-6 relative bg-white border-t border-slate-100 overflow-hidden">
    <div className="max-w-[1400px] mx-auto">
      <div className="relative bg-slate-900 rounded-[3rem] overflow-hidden group shadow-2xl shadow-slate-900/20">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2910E5]/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2910E5]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left: Content (Spans 7 columns for more space) */}
          <div className="lg:col-span-7 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <Zap className="w-3 h-3 text-primary" />
                <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em]">Scale Initialization</span>
              </div>
              <h2 className="text-white text-4xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-8 max-w-md">
                Ready to Deploy <br />
                <span className="text-primary">Intelligence?</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium mb-10 leading-relaxed max-w-sm">
                Architect and deploy your proprietary AI infrastructure with our specialized engineering lab.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary h-14 px-10 text-[10px] uppercase tracking-widest font-black !bg-white !text-slate-900 hover:!bg-slate-100 border-none group shadow-xl">
                    Schedule Audit <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="btn-ghost h-14 px-10 border-white/10 !text-white hover:!bg-white/5 text-[10px] uppercase tracking-widest font-black">
                  View Docs
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: Technical Marquee / Status (Spans 5 columns) */}
          <div className="lg:col-span-5 relative p-8 md:p-16 bg-black/20 flex flex-col justify-center">
            <div className="space-y-6">
              {[
                { label: "Uptime", val: "99.998%", color: "text-emerald-500" },
                { label: "Nodes", val: "1,240", color: "text-blue-500" },
                { label: "Latency", val: "1.2ms", color: "text-primary" }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
                    <span className={`text-xl font-black tracking-tighter ${item.color}`}>{item.val}</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={`h-full bg-current ${item.color} opacity-30`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Priority Tier</div>
                  <div className="text-white text-xs font-bold">Compute Active</div>
                </div>
              </div>
            </div>
          </div>
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
