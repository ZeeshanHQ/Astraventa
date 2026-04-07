import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/images/chatbot.svg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
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
import { Marquee } from "@/components/ui/marquee";

const messages = [
  { ts: "16:14:01", msg: "POST /api/v1/query → Vector Search", ok: true },
  { ts: "16:14:02", msg: "Retrieving context from PINE_CONE", ok: true },
  { ts: "16:14:03", msg: "LLM synthesis started (GPT-4o)", ok: true },
  { ts: "16:14:04", msg: "Safety Guard: Policies validated", ok: true },
  { ts: "16:14:05", msg: "Response stream initialized // 12ms", ok: true },
];

// ─── Stitch Primitive: Hero Visual (Hero Right Side) ────────────
const StitchHeroVisual = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pointer-events-none bg-transparent shadow-none border-none overflow-visible lg:col-span-5">
      {/* SVG Container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 flex items-center justify-center w-full"
        >
          <img
            src={heroImage}
            alt="AI Chatbot Architecture"
            className="w-full max-w-[560px] lg:max-w-[780px] h-auto object-contain drop-shadow-2xl"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>
    </div>
  );
};

// ─── Tech Stack Marquee ────────────────────────────────────────────────────────
const TechMarquee = () => {
  const techs = [
    { name: "OpenAI", url: "https://cdn.simpleicons.org/openai/000000" },
    { name: "Anthropic", url: "https://cdn.simpleicons.org/anthropic/000000" },
    { name: "LangChain", url: "https://cdn.simpleicons.org/langchain/000000" },
    { name: "Pinecone", url: "https://cdn.simpleicons.org/pinecone/000000" },
    { name: "Meta", url: "https://cdn.simpleicons.org/meta/000000" },
    { name: "Hugging Face", url: "https://cdn.simpleicons.org/huggingface/000000" },
    { name: "Mistral AI", url: "https://cdn.simpleicons.org/mistral/000000" },
    { name: "NVIDIA", url: "https://cdn.simpleicons.org/nvidia/000000" },
    { name: "Stability.ai", url: "https://cdn.simpleicons.org/stabilitydotai/000000" },
    { name: "PyTorch", url: "https://cdn.simpleicons.org/pytorch/000000" },
  ];

  return (
    <div className="relative py-12 border-y border-black/[0.06] bg-white overflow-hidden">
      <div className="absolute inset-0 bg-primary/[0.01] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--primary) 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
      <Marquee className="[--duration:40s] [--gap:4rem]" pauseOnHover>
        {techs.map((tech, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-default px-4">
            <div className="w-12 h-12 p-3 rounded-2xl bg-black/[0.02] border border-black/[0.06] transition-all group-hover:bg-white group-hover:border-primary/20 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-center grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 duration-500">
              <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[8px] font-black text-black/10 group-hover:text-primary transition-colors uppercase tracking-[0.2em] font-['Anonymous_Pro']">SYSTEM_NODE</span>
              <span className="text-[13px] font-bold text-black/40 group-hover:text-black transition-colors uppercase tracking-[0.1em] font-heading">{tech.name}</span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
export const AIChatbots = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = 1; // Fixed opacity — prevents hero fade on deploy

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
      title: "AstraPulse AI",
      tagline: "AI Observability & Metrics",
      icon: Activity,
      color: "text-black/60",
      bg: "bg-black/[0.01]",
      href: "/tools/astra-pulse"
    },
    {
      title: "AstraMarket AI",
      tagline: "Competitor Intelligence",
      icon: Search,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/tools/astra-market"
    },
    {
      title: "AstraAgent AI",
      tagline: "Browser Worker Agent",
      icon: Bot,
      color: "text-primary",
      bg: "bg-primary/20",
      href: "/tools/astra-agent"
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-hidden font-sans">
      <Header />

      <main className="pt-12">

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
                <span className="text-[9px] font-black font-['Anonymous_Pro'] text-[#4B5563] tracking-[0.4em] uppercase">SYSTEM_INITIALIZED // CORE_V4</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mb-8 text-4xl md:text-5xl lg:text-5xl font-heading font-normal text-black tracking-[0.05em] leading-[1.1] uppercase"
              >
                Neural<br />Interaction<br />
                <span className="text-primary select-none">Systems.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#4B5563] font-medium text-base leading-relaxed max-w-md mb-10 uppercase tracking-tight"
              >
                Production-grade AI systems that understand context, execute complex logic, and operate at sub-second latency.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-8"
              >
                <Button className="h-10 px-6 bg-black hover:bg-black/90 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center gap-3 transition-all border-none shadow-xl group" asChild>
                  <Link to="/contact">
                    INITIALIZE_SYSTEM <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform group-hover:text-primary" />
                  </Link>
                </Button>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-primary/40" />
                  <span className="text-[9px] font-black font-['Anonymous_Pro'] text-black/30 uppercase tracking-[0.3em]">LINK_READY</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Interactive Terminal */}
            <StitchHeroVisual />

          </motion.div>
        </section>

        {/* ─── Tech Stack Marquee ─────────────────────────────────────────────── */}
        <TechMarquee />

        {/* ─── CORE SERVICES (Interactive) ────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-[1300px] mx-auto">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <motion.div {...fadeUp}>
                <span className="text-[9px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-4 block">SERVICE_DISCIPLINES</span>
                <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.1em] leading-[1.1] uppercase">
                  Six Modules of<br /><span className="text-primary select-none">Agent Intelligence.</span>
                </h2>
              </motion.div>
              <motion.p {...fadeUp} className="text-[#4B5563] text-sm font-bold max-w-sm leading-relaxed mb-2 uppercase tracking-tight">
                Production-grade AI architectures designed for deterministic performance and enterprise security.
              </motion.p>
            </div>

            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-black/[0.06]">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`px-4 py-2 rounded-2xl text-[9px] font-black font-['Anonymous_Pro'] uppercase tracking-[0.25em] transition-all duration-300 ${i === activeService ? 'bg-black text-white shadow-xl' : 'bg-black/[0.01] text-[#4B5563] hover:bg-black/10 hover:text-black'}`}
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 bg-black/[0.01] rounded-2xl p-10 border border-black/[0.06] shadow-sm transition-all"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-primary border border-black/[0.06] shadow-sm">
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-normal text-black tracking-[0.1em] uppercase leading-none mb-3">{services[activeService].name}</h3>
                    <span className="text-[9px] font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] font-black">{services[activeService].tagline}</span>
                  </div>
                </div>
                <p className="text-[#4B5563] font-bold leading-relaxed text-sm mb-10 uppercase tracking-tight">
                  {services[activeService].description}
                </p>
                <div className="flex gap-4">
                  <button onClick={() => navigate('/contact')} className="h-10 px-6 bg-black text-white font-black rounded-2xl uppercase tracking-widest text-[10px] group border-none shadow-xl transition-all">
                    REQUEST_DETAILS <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-primary inline" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 pt-2">
                <div className="text-[9px] font-black font-['Anonymous_Pro'] text-black/20 uppercase tracking-[0.4em] mb-6">TECHNICAL_CAPABILITIES</div>
                <div className="grid grid-cols-1 gap-2.5">
                  {services[activeService].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 px-4 bg-white border border-black/[0.06] rounded-2xl group hover:border-primary/20 transition-colors">
                      <div className="p-0.5 rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="w-3.5 h-3.5 stroke-[3px]" />
                      </div>
                      <span className="text-[10px] font-black text-[#4B5563] uppercase tracking-widest font-['Anonymous_Pro']">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── NEURAL PIPELINE (Architecture) ──────────────────────────────────── */}
        <section className="py-24 px-6 bg-background border-t border-black/[0.06] overflow-hidden relative">
          {/* Background effects */}
          <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none panning-grid" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />

          <div className="max-w-[1300px] mx-auto relative z-10">
            <div className="mb-16 text-center">
              <motion.span {...fadeUp} className="text-[9px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-4 block">SYSTEM_FLOW</motion.span>
              <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="text-black text-3xl md:text-5xl font-heading font-normal mb-8 tracking-[0.1em] uppercase leading-[1.1]">The Neural <br />Pipeline <span className="text-primary select-none">Architecture.</span></motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-[#4B5563] max-w-xl mx-auto font-bold text-sm uppercase tracking-tight">How we architect multi-layered agents for high-fidelity natural language processing and autonomous execution.</motion.p>
            </div>

            <div className="relative bg-white border border-black/[0.06] rounded-2xl p-10 md:p-16 overflow-hidden shadow-xl">
              <div className="absolute top-1/2 left-16 right-16 h-[0.5px] bg-primary/20 hidden lg:block -translate-y-1/2" />

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
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="group flex flex-col bg-black/[0.01] border border-black/[0.06] p-8 rounded-2xl hover:bg-white hover:border-primary/20 transition-all relative z-10 shadow-sm hover:shadow-2xl"
                    >
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-black/20 group-hover:text-primary border border-black/[0.06] group-hover:border-primary/20 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[8px] font-['Anonymous_Pro'] font-black text-primary uppercase tracking-widest font-['Anonymous_Pro']">PHASE_{node.step}</span>
                      </div>
                      <h4 className="text-xl font-heading font-normal text-black mb-4 tracking-[0.1em] uppercase leading-none">{node.label}</h4>
                      <p className="text-[9px] font-['Anonymous_Pro'] text-black/30 leading-relaxed font-black whitespace-pre-line group-hover:text-[#4B5563] transition-colors uppercase tracking-[0.25em]">
                        {node.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Technical footer */}
              <div className="mt-12 pt-8 border-t border-black/[0.06] flex flex-wrap gap-8 text-[9px] font-['Anonymous_Pro'] text-black/20 uppercase tracking-[0.3em] font-black">
                <span className="flex items-center gap-2 animate-pulse text-primary/60"><div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" /> LATENCY: 240MS (P99)</span>
                <span>INFERENCE: DISTRIBUTED</span>
                <span>SECURITY: AES_256_ACTIVE</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ENGINEERING PRINCIPLES ─────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-background border-t border-black/[0.06]">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Left sticky */}
              <div className="lg:col-span-5">
                <motion.div {...fadeUp} className="sticky top-32">
                  <span className="text-[9px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-4 block">DESIGN_METHODOLOGY</span>
                  <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.1em] leading-[1.1] mb-8 uppercase">
                    Deterministic.<br />Traceable.<br />
                    <span className="text-black/10 select-none">Industrial Scale.</span>
                  </h2>
                  <p className="text-[#4B5563] font-bold text-sm leading-relaxed max-w-sm uppercase tracking-tight">
                    We don't build toys. We build infrastructure-grade AI systems that companies rely on for critical operations.
                  </p>
                </motion.div>
              </div>

              {/* Right: principles */}
              <div className="lg:col-span-7 space-y-3">
                {principles.map((p, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 border border-black/[0.06] bg-black/[0.01] rounded-2xl group hover:bg-black transition-all duration-300 cursor-default"
                  >
                    <div className="flex gap-6">
                      <span className="text-[10px] font-['Anonymous_Pro'] font-black text-black/20 group-hover:text-white/30 transition-colors pt-1">{p.n}</span>
                      <div>
                        <h3 className="text-2xl font-heading font-normal text-black group-hover:text-white tracking-[0.1em] mb-4 transition-colors uppercase leading-none">{p.title}</h3>
                        <p className="text-[#4B5563] group-hover:text-white/60 font-bold leading-relaxed transition-colors uppercase text-xs tracking-tight">{p.body}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── SECTOR VERTICALS ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-background border-t border-black/[0.06]">
          <div className="max-w-[1300px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-[9px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-4 block">INDUSTRY_VERTICALS</span>
              <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.1em] uppercase leading-[1.1]">Purpose-Built for <br /><span className="text-primary/20 select-none">The Real World.</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { sector: "FinTech", use: "Automated wealth management & identity verification agents.", color: "bg-black" },
                { sector: "Logistics", use: "Supply chain orchestration & route-optimization assistants.", color: "bg-black/[0.01]" },
                { sector: "Healthcare", use: "Patient triage & complex medical documentation agents.", color: "bg-black/80" },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-black/[0.06] bg-black/[0.01] flex flex-col justify-between min-h-[280px] hover:border-primary/30 transition-all group"
                >
                  <div className="w-8 h-0.5 bg-primary mb-8" />
                  <div>
                    <h3 className="text-2xl font-heading font-normal text-black mb-4 uppercase tracking-[0.1em]">{v.sector}</h3>
                    <p className="text-[#4B5563] font-bold leading-relaxed uppercase text-[11px] tracking-tight">{v.use}</p>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button variant="ghost" className="h-8 rounded-2xl text-[9px] font-black uppercase tracking-widest text-black/60 hover:text-black hover:bg-black/[0.01] border border-black/10" onClick={() => navigate('/contact')}>CASE_STUDY</Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
        <section className="bg-background border-t border-black/[0.06]">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-background border-t border-black/[0.06]">
          <div className="max-w-[1300px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 py-16 px-10 border border-black/[0.06] rounded-2xl bg-black/[0.01] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
              <div className="relative z-10 max-w-xl">
                <span className="text-[9px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-4 block">SYSTEM_DEPLOYMENT</span>
                <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.1em] leading-[1.1] uppercase mb-10">
                  Add a brain to<br /><span className="text-primary/10 select-none">your product.</span>
                </h2>
                <p className="text-[#4B5563] font-bold text-sm uppercase tracking-tight max-w-md">
                  Schedule a technical deep dive with our lead architects to discuss your neural infrastructure requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start md:items-center gap-6 shrink-0 relative z-10">
                <Button className="h-12 px-8 bg-black hover:bg-black/90 text-white font-black rounded-2xl text-[11px] uppercase tracking-widest shadow-xl transition-all group border-none" onClick={() => navigate('/contact')}>
                  REQUEST_AUDIT <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform text-primary inline" />
                </Button>
                <Link to="/services" className="text-[9px] font-black text-black/30 hover:text-black transition-colors uppercase tracking-[0.3em] font-['Anonymous_Pro'] border-b border-black/10 pb-1">
                  VIEW_ALL_DISCIPLINES
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
