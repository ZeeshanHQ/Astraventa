import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { 
  Bot, 
  MessageSquare, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  BrainCircuit, 
  ArrowRight, 
  Activity, 
  Layers, 
  Sparkles,
  Search,
  CheckCircle,
  Network,
  Lock,
  Database,
  Terminal,
  Code2,
  Workflow,
  Mail
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";

const messages = [
  { ts: "16:14:01", msg: "POST /api/v1/query → Vector Search", ok: true },
  { ts: "16:14:02", msg: "Retrieving context from PINE_CONE", ok: true },
  { ts: "16:14:03", msg: "LLM synthesis started (GPT-4o)", ok: true },
  { ts: "16:14:04", msg: "Safety Guard: Policies validated", ok: true },
  { ts: "16:14:05", msg: "Response stream initialized // 12ms", ok: true },
];

const StitchChatMockup = () => {
  const [logs, setLogs] = useState<{ ts: string, msg: string, ok: boolean }[]>([]);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (messages.length + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === 0) {
      setLogs([]);
    } else if (index <= messages.length) {
      setLogs(prev => [...prev, messages[index - 1]].slice(-3));
    }
  }, [index]);

  return (
    <div className="relative w-full bg-slate-950 rounded-3xl border border-slate-800 p-0 overflow-hidden flex flex-col shadow-2xl group min-h-[480px]">
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Bot className="w-3.5 h-3.5" /> AI AGENT // V4.0.2
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-slate-500">P99: 14ms</span>
          <span className="text-[10px] font-mono text-slate-500">TOKENS: 1.2k/s</span>
        </div>
      </div>

      <div className="p-8 space-y-6 flex-1">
        {/* User Message */}
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 shrink-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-slate-600 rounded-sm" />
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-slate-300 text-xs leading-relaxed font-medium">
            Analyze our Q4 logistics flow and identify bottlenecks in the last-mile delivery using the vector engine.
          </div>
        </div>

        {/* AI Response */}
        <div className="flex gap-4 flex-row-reverse">
          <div className="w-8 h-8 rounded-full bg-[#2910E5]/10 border border-[#2910E5]/20 shrink-0 flex items-center justify-center">
            <Bot className="w-4 h-4 text-[#2910E5]" />
          </div>
          <div className="bg-[#2910E5]/5 border border-[#2910E5]/10 p-4 rounded-2xl rounded-tr-none max-w-[85%] text-slate-200 text-xs leading-relaxed relative overflow-hidden font-medium">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 2 }}
              className="absolute top-0 left-0 h-[1px] bg-[#2910E5]/40"
            />
            Retrieving Q4 telemetry... I've identified a 22% latency increase in the Northeast hub. I'm cross-referencing this with weather patterns and warehouse throughput.
          </div>
        </div>
      </div>

      {/* Real-time technical log stream */}
      <div className="border-t border-slate-800 px-6 py-4 space-y-2 bg-slate-950/80 font-mono">
        {logs.length === 0 ? (
          <div className="flex items-center gap-3 animate-pulse py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <span className="text-[9px] text-slate-600 uppercase tracking-widest font-bold">Initializing session...</span>
          </div>
        ) : (
          logs.map((log, i) => (
            <motion.div 
              key={`${log.ts}-${i}`}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <span className="text-[9px] text-slate-600 font-bold">{log.ts}</span>
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${log.ok ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 'bg-red-500'}`} />
              <span className="text-[9px] text-slate-400 font-bold">{log.msg}</span>
            </motion.div>
          ))
        )}
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[#2910E5]/[0.01] pointer-events-none" style={{ backgroundImage: "radial-gradient(#2910E5 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
    </div>
  );
};

// ─── Tech Stack Marquee ────────────────────────────────────────────────────────
const TechMarquee = () => {
  const techs = [
    { name: "OpenAI", color: "text-emerald-500" },
    { name: "Anthropic", color: "text-orange-500" },
    { name: "LangChain", color: "text-blue-500" },
    { name: "Pinecone", color: "text-slate-900" },
    { name: "LlamaIndex", color: "text-purple-500" },
    { name: "Vector Database", color: "text-[#2910E5]" },
    { name: "RAG Engine", color: "text-slate-950" },
    { name: "NLP / NLU", color: "text-slate-950" },
    { name: "GPT-4o", color: "text-emerald-600" },
    { name: "Claude 3.5", color: "text-orange-600" }
  ];

  return (
    <div className="relative py-12 border-t border-b border-slate-100 overflow-hidden bg-white">
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center" style={{ '--gap': '4rem' } as React.CSSProperties}>
        {[...techs, ...techs].map((tech, i) => (
          <div key={tech.name + i} className="flex items-center gap-2 group cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#2910E5] transition-colors" />
            <span className="text-[11px] font-black font-mono uppercase tracking-[0.2em] text-slate-300 group-hover:text-slate-950 transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
export const AIChatbots = () => {
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const services = [
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      name: "RAG Architecture",
      tagline: "Retrieval-Augmented Intelligence",
      description: "Our agents leverage vector embeddings to retrieve precise corporate knowledge in milliseconds. We solve the 'hallucination' problem by anchoring logic to your actual data.",
      specs: ["Pinecone / pgvector / Milvus", "Custom Chunking Logic", "Hybrid Keyword + Semantic Search", "Dynamic Prompt Contextualization"],
    },
    {
      icon: <Layers className="w-5 h-5" />,
      name: "Multi-Modal Agents",
      tagline: "Beyond Text Interactions",
      description: "Vision-capable agents that can analyze documents, interpret charts, and interact with visual UI elements. Built for complex workflows that require 'seeing' data.",
      specs: ["Visual Token Processing", "OCR Stream Integration", "Multi-input Fusion Layers", "Image-to-Action mapping"],
    },
    {
      icon: <Bot className="w-5 h-5" />,
      name: "Autonomous Pipelines",
      tagline: "Agents that take Action",
      description: "We don't just build chatbots; we build agents that interact with your APIs. Scheduling, CRM updates, and transaction execution — all handled through natural language.",
      specs: ["Tool-Calling Architecture", "JSON Schema Enforcement", "Sandboxed Execution Nodes", "Human-in-the-loop Gates"],
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      name: "Enterprise Guardrails",
      tagline: "Safe & Compliant AI",
      description: "Rigorous content filtering and policy enforcement. We ensure your agents adhere to brand voice, regulatory compliance, and security protocols without fail.",
      specs: ["PII Redaction Engines", "Toxicity Moderation", "Deterministic Output Scoring", "GDPR/SOC2 Ready Layers"],
    },
    {
      icon: <Zap className="w-5 h-5" />,
      name: "Contextual Memory",
      tagline: "Infinite User Context",
      description: "Long-term memory modules that remember user preferences across sessions. Personalized experiences that feel like a continuous relationship, not a series of one-offs.",
      specs: ["Episodic Memory Storage", "User Preference Graphs", "Dynamic Session State", "Summarization Cycles"],
    },
    {
      icon: <Network className="w-5 h-5" />,
      name: "Neural Integration",
      tagline: "Bespoke LLM Orchestration",
      description: "Intelligent routing between GPT-4o, Claude, and local Llama models based on cost, latency, and task complexity. The right brain for the right job, every time.",
      specs: ["Model-Agnostic Middleware", "Latency-Optimized Routing", "Speculative Decoding", "Tokens-as-a-Service architecture"],
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const principles = [
    { n: "01", title: "Deterministic Logic", body: "We bridge the gap between stochastic LLMs and rigid business rules using hybrid logic gates and structured JSON outputs." },
    { n: "02", title: "P99 Latency Focus", body: "Token streaming begins in sub-200ms. We optimize the entire stack from vector retrieval to cold-start overhead reduction." },
    { n: "03", title: "Traceable Reasoning", body: "Every agent decision includes a 'Chain of Thought' log that can be audited, ensuring transparency in autonomous actions." },
    { n: "04", title: "Infinite Scalability", body: "Architecture built for massive concurrency using serverless inference and globally distributed vector databases." },
  ];

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraReach AI",
      tagline: "Autonomous Email Operations",
      icon: Mail,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      href: "/tools/astra-reach"
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
      title: "AstraVerify AI",
      tagline: "Deepfake & Identity Shield",
      icon: ShieldCheck,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      href: "/tools/astra-verify"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950 selection:bg-[#2910E5]/10 overflow-x-hidden font-sans transition-colors duration-700">
      <Header />

      <main className="pt-20">
        
        {/* ─── HERO Section ──────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center px-6 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />
          
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
            
            {/* Left Content */}
            <div className="pt-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2910E5]/5 border border-[#2910E5]/10 mb-8 shadow-sm"
              >
                <BrainCircuit className="w-3.5 h-3.5 text-[#2910E5]" />
                <span className="text-[10px] font-black font-mono text-[#2910E5] tracking-[0.2em] uppercase">Autonomous AI · Core V4</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8 text-6xl md:text-8xl font-black text-slate-950 tracking-tight leading-[0.88]"
              >
                Neural<br />Interaction<br />
                <span className="text-[#2910E5]">Systems.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 font-medium text-lg leading-relaxed max-w-lg mb-10"
              >
                Transform customer interactions with professional-grade AI systems that understand context, execute complex logic, and operate at sub-second latency.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-6"
              >
                <Button className="h-14 px-8 bg-[#2910E5] hover:bg-[#2910E5]/90 text-white rounded-full font-bold flex items-center gap-3 transition-transform border-none shadow-xl shadow-[#2910E5]/20 group" asChild>
                  <Link to="/contact">
                    Initialize System <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-bold">Neural Link Ready</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Interactive Terminal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative w-full"
            >
              <StitchChatMockup />
            </motion.div>

          </motion.div>
        </section>

        {/* ─── Tech Stack Marquee ─────────────────────────────────────────────── */}
        <TechMarquee />

        {/* ─── CORE SERVICES (Interactive) ────────────────────────────────────── */}
        <section className="py-32 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <motion.div {...fadeUp}>
                <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-3 block">Service Disciplines</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[0.92]">
                  Six Modules of<br /><span className="text-[#2910E5]">Agent Intelligence.</span>
                </h2>
              </motion.div>
              <motion.p {...fadeUp} className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed mb-2">
                Production-grade AI architectures designed for deterministic performance and enterprise security.
              </motion.p>
            </div>

            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-slate-100">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`px-5 py-2.5 rounded-xl text-[11px] font-black font-mono uppercase tracking-wider transition-all duration-300 ${i === activeService ? 'bg-slate-950 text-white shadow-lg' : 'bg-transparent text-slate-400 hover:bg-slate-50'}`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Active service panel */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-50/50 rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-sm transition-all"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#2910E5]/5 flex items-center justify-center text-[#2910E5] border border-[#2910E5]/10 shadow-sm">
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-950 tracking-tight">{services[activeService].name}</h3>
                    <span className="text-[11px] font-mono text-[#2910E5] uppercase tracking-widest font-bold">{services[activeService].tagline}</span>
                  </div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed text-lg mb-10">
                  {services[activeService].description}
                </p>
                <div className="flex gap-4">
                  <Button asChild className="h-12 px-8 bg-[#2910E5] text-white font-bold rounded-full group">
                    <Link to="/contact">Request Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-5 pt-4">
                <div className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-widest mb-6">Technical Capabilities</div>
                <div className="grid grid-cols-1 gap-3">
                  {services[activeService].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-4 py-3.5 px-5 bg-white border border-slate-100 rounded-2xl group hover:border-[#2910E5]/20 transition-colors">
                      <div className="p-1 rounded-full bg-emerald-50 text-emerald-500">
                        <CheckCircle className="w-4 h-4 stroke-[3px]" />
                      </div>
                      <span className="text-[13px] font-bold text-slate-700 tracking-tight">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── NEURAL PIPELINE (Architecture) ──────────────────────────────────── */}
        <section className="py-32 px-6 bg-slate-950 border-t border-slate-100 overflow-hidden relative">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[#2910E5]/[0.02] pointer-events-none panning-grid" style={{ backgroundImage: "radial-gradient(#2910E5 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center">
              <motion.span {...fadeUp} className="text-[10px] font-black font-mono text-white/40 uppercase tracking-[0.2em] mb-4 block">System Flow</motion.span>
              <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight">The Neural Pipeline Architecture.</motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl mx-auto font-medium">How we architect multi-layered agents for high-fidelity natural language processing and autonomous execution.</motion.p>
            </div>

            <div className="relative bg-slate-900/50 border border-white/5 rounded-[3rem] p-10 md:p-16 overflow-hidden backdrop-blur-sm">
              <div className="absolute top-1/2 left-10 right-10 h-[0.5px] bg-[#2910E5]/20 hidden lg:block -translate-y-1/2" />
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                {[
                  { step: "01", label: "Ingestion", desc: "Multi-modal capture\nSpeech, Text, Vision", icon: Terminal },
                  { step: "02", label: "Reasoning", desc: "LLM synthesis\nChain-of-thought logic", icon: Cpu },
                  { step: "03", label: "Execution", desc: "Tool-calling / Action\nAPI orchestration", icon: Workflow },
                  { step: "04", label: "Verification", desc: "Human-in-the-loop\nPolicy guardrails", icon: ShieldCheck }
                ].map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group flex flex-col bg-slate-950/80 border border-white/5 p-6 rounded-[2rem] hover:border-[#2910E5]/30 transition-all relative z-10"
                    >
                      <div className="flex items-center justify-between mb-10">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-[#2910E5]/20 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-black text-[#2910E5] uppercase tracking-widest">Phase {node.step}</span>
                      </div>
                      <h4 className="text-xl font-black text-white mb-3 tracking-tight">{node.label}</h4>
                      <p className="text-[11px] font-mono text-white/30 leading-relaxed font-bold whitespace-pre-line group-hover:text-white/60 transition-colors uppercase tracking-widest">
                        {node.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Technical footer */}
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8 text-[9px] font-mono text-white/20 uppercase tracking-[0.2em] font-black">
                <span className="flex items-center gap-2 animate-pulse"><div className="w-1 h-1 rounded-full bg-emerald-500" /> Latency: 420ms (Avg)</span>
                <span>Inference: Distributed</span>
                <span>Security: AES-256 Encrypted</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ENGINEERING PRINCIPLES ─────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Left sticky */}
              <div className="lg:col-span-5">
                <motion.div {...fadeUp} className="sticky top-32">
                  <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-4 block">Design Methodology</span>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[0.9] mb-8">
                    Deterministic.<br />Traceable.<br />
                    <span className="text-[#2910E5]">Industrial Scale.</span>
                  </h2>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
                    We don't build toys. We build infrastructure-grade AI systems that companies rely on for critical operations.
                  </p>
                </motion.div>
              </div>

              {/* Right: principles */}
              <div className="lg:col-span-7 space-y-4">
                {principles.map((p, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 border border-slate-100 bg-slate-50/50 rounded-[2.5rem] group hover:bg-slate-950 transition-all duration-500 cursor-default"
                  >
                    <div className="flex gap-8">
                      <span className="text-[12px] font-mono font-black text-slate-300 group-hover:text-[#2910E5] transition-colors pt-1">{p.n}</span>
                      <div>
                        <h3 className="text-2xl font-black text-slate-950 group-hover:text-white tracking-tight mb-4 transition-colors">{p.title}</h3>
                        <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed transition-colors">{p.body}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── SECTOR VERTICALS ────────────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-4 block">Industry Verticals</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">Purpose-Built for the Real World.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { sector: "FinTech", use: "Automated wealth management & identity verification agents.", color: "bg-[#2910E5]" },
                { sector: "Logistics", use: "Supply chain orchestration & route-optimization assistants.", color: "bg-slate-950" },
                { sector: "Healthcare", use: "Patient triage & complex medical documentation agents.", color: "bg-[#2910E5]/80" },
              ].map((v, i) => (
                <motion.div 
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between min-h-[300px] hover:shadow-2xl hover:shadow-[#2910E5]/5 transition-all"
                >
                  <div className="w-12 h-1 rounded-full bg-[#2910E5] mb-8" />
                  <div>
                    <h3 className="text-2xl font-black text-slate-950 mb-4">{v.sector}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{v.use}</p>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button variant="ghost" className="rounded-full text-[10px] font-black uppercase tracking-widest text-[#2910E5]">Case Study</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
        <section className="pb-12 bg-white">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 py-16 px-10 border border-slate-100 rounded-[3rem] bg-slate-50/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2910E5]/5 blur-[100px] rounded-full" />
              <div className="relative z-10">
                <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-4 block">Ready to Begin</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[0.92]">
                  Add a brain to<br />your product.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-start md:items-center gap-6 shrink-0 relative z-10">
                <Button asChild className="h-16 px-10 bg-[#2910E5] hover:bg-[#2910E5]/90 text-white font-black rounded-full text-lg shadow-xl shadow-[#2910E5]/20 transition-all group">
                  <Link to="/contact">Request Audit <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
                <Link to="/services" className="text-sm font-black text-slate-400 hover:text-slate-950 transition-colors underline underline-offset-8 decoration-slate-200">
                  Other Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AIChatbots;
