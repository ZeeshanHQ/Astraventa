import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  Code2,
  Terminal,
  Globe,
  Zap,
  Layers,
  Activity,
  ArrowRight,
  Monitor,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Search,
  Layout,
  Database,
  Lock,
  Brain,
  LineChart,
  FileText
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import StickyTabs from "@/components/ui/sticky-section-tabs";
import ReleaseTimeline from "@/components/ui/release-time-line";

// ─── Stitch Primitive: Terminal & velocity Mockup (Hero Right Side) ────────────
const StitchTerminal = () => {
  return (
    <div className="relative w-full h-[450px] bg-[#030712] rounded-[2.5rem] border border-slate-800/50 p-8 overflow-hidden flex flex-col shadow-2xl font-mono text-xs group">
      {/* Decorative aura */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0066FF]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-5 z-10 w-full">
        <div className="flex gap-2.5">
          <div className="w-3 h-3 rounded-full bg-slate-800 group-hover:bg-red-500/50 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-slate-800 group-hover:bg-amber-500/50 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-slate-800 group-hover:bg-emerald-500/50 transition-colors" />
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-[#0066FF] font-black flex items-center gap-3">
          <div className="w-2 h-2 bg-[#0066FF] rounded-full animate-pulse shadow-[0_0_10px_#0066FF]" />
          Production: Astra-Core-V5
        </div>
      </div>
      
      <div className="flex-1 space-y-4 overflow-hidden relative z-10">
        <div className="flex gap-4 items-center">
          <span className="text-slate-500 shrink-0 select-none">01</span>
          <div className="flex gap-3">
            <span className="text-pink-500">import</span>
            <span className="text-slate-200">{"{ "}EdgeRuntime{" } "}</span>
            <span className="text-pink-500">from</span>
            <span className="text-emerald-400">'@astraventa/core'</span>
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          <span className="text-slate-500 shrink-0 select-none">02</span>
          <div className="flex gap-3">
            <span className="text-blue-400">const</span>
            <span className="text-slate-200">node = </span>
            <span className="text-pink-500">await</span>
            <span className="text-blue-400">bootstrap</span>
            <span className="text-slate-200">('global-edge')</span>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <span className="text-slate-500 shrink-0 select-none">03</span>
          <div className="text-slate-500 italic">// Initializing sub-second hydration sequence...</div>
        </div>
        
        <div className="pt-10 space-y-2">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-3 text-emerald-400"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span className="font-bold">Edge Build Optimized</span>
            <span className="text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 ml-auto">102ms</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex items-center gap-3 text-blue-400"
          >
            <Activity className="w-4 h-4" />
            <span>Deployment active @ global_cdn_v4</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="pt-6 border-t border-white/5"
          >
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <div className="text-slate-400 text-[10px] uppercase tracking-widest">Network Throughput</div>
                <div className="text-xl font-bold text-white tracking-tighter">1.4 GB/s</div>
              </div>
              <div className="flex gap-1 items-end h-8">
                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ 
                      duration: 1, 
                      delay: 2 + (i * 0.1),
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="w-1.5 bg-[#0066FF]/40 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Scan Line */}
        <motion.div 
          className="absolute left-0 right-0 h-[120px] bg-gradient-to-b from-transparent via-[#0066FF]/5 to-transparent pointer-events-none"
          animate={{ top: ['-100%', '200%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const WebEngineering = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraMarket",
      tagline: "Intelligence Engine",
      icon: LineChart,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      href: "/tools/astra-market"
    },
    {
      title: "AstraFlow",
      tagline: "Orchestration ETL",
      icon: FileText,
      color: "text-[#0066FF]",
      bg: "bg-[#0066FF]/10",
      href: "/tools/astra-flow"
    },
    {
      title: "AstraPulse",
      tagline: "Real-time Metrics",
      icon: Activity,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      href: "/tools/astra-pulse"
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

      <main className="">
        {/* ─── HERO (60/40 Split) ────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-screen flex items-center px-6 overflow-hidden pt-20">
          {/* Enhanced grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <motion.div 
            style={{ y: heroY, opacity: heroOpacity }} 
            className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center py-20"
          >
            {/* Left Content */}
            <div className="max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md text-[11px] font-black uppercase tracking-[0.25em] text-[#0066FF] mb-10 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
                Global Infrastructure Sequence
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8 text-slate-950 leading-[0.9] tracking-tight text-6xl sm:text-7xl xl:text-8xl font-black"
              >
                Web & Infrastructure <br />
                <span className="text-[#0066FF]">Engineering.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-500 text-xl font-medium max-w-xl mb-12 leading-relaxed"
              >
                Engineering high-velocity digital ecosystems using Next.js and optimized React architectures. Sub-second delivery, globally distributed, and extreme performance at the edge by design.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <Button className="h-16 px-10 bg-[#0066FF] hover:bg-[#0052cc] text-white rounded-2xl font-bold flex items-center gap-4 transition-all border-none shadow-2xl shadow-[#0066FF]/20 text-lg group" asChild>
                  <Link to="/contact">
                    Initialize Deployment 
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" className="h-16 px-10 rounded-2xl border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all text-lg" asChild>
                  <Link to="/docs">View Stack Technicals</Link>
                </Button>
              </motion.div>

              {/* Trust markers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap gap-10 opacity-60"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-slate-900 leading-none">99.9%</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Uptime SLA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-slate-900 leading-none">&lt; 150ms</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Edge Latency</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content (Enhanced Stitch Terminal) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0066FF]/20 to-transparent blur-3xl opacity-30 rounded-full" />
              <StitchTerminal />
            </motion.div>
          </motion.div>
        </section>

        {/* ─── TECH STACK MARQUEE ────────────────────────────────────────────── */}
        <section className="py-20 border-y border-slate-100 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.02),transparent)]" />
          <div className="max-w-[1400px] mx-auto px-6 mb-12 flex items-center justify-between relative z-10">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.3em]">Technical Core</span>
              <h2 className="text-2xl font-black text-slate-900 leading-none">The Astra-Standard Stack</h2>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-100 mx-10" />
            <div className="text-slate-400 text-xs font-bold font-mono">NEXT.JS 15 // EDGE RUNTIME // AI NATIVE</div>
          </div>
          
          <div className="flex gap-12 overflow-hidden py-10 mask-fade-edges relative z-10">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 items-center whitespace-nowrap"
            >
              {[
                { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Supabase", url: "https://cdn.simpleicons.org/supabase/3ECF8E" },
                { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/000000" },
                { name: "OpenAI", url: "https://cdn.simpleicons.org/openai/000000" },
                { name: "Frama Motion", url: "https://cdn.simpleicons.org/framer/0055FF" },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-16 h-16 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all group-hover:shadow-xl group-hover:border-[#0066FF]/20 flex items-center justify-center grayscale group-hover:grayscale-0">
                    <img src={tech.url} alt={tech.name} className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-xl font-black text-slate-300 group-hover:text-slate-900 transition-colors uppercase tracking-widest">{tech.name}</span>
                </div>
              ))}
              {/* Duplicate for loop */}
              {[
                { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Supabase", url: "https://cdn.simpleicons.org/supabase/3ECF8E" },
                { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/000000" },
                { name: "OpenAI", url: "https://cdn.simpleicons.org/openai/000000" },
                { name: "Frama Motion", url: "https://cdn.simpleicons.org/framer/0055FF" },
              ].map((tech, i) => (
                <div key={i + 10} className="flex items-center gap-4 group">
                  <div className="w-16 h-16 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all group-hover:shadow-xl group-hover:border-[#0066FF]/20 flex items-center justify-center grayscale group-hover:grayscale-0">
                    <img src={tech.url} alt={tech.name} className="w-full h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-xl font-black text-slate-300 group-hover:text-slate-900 transition-colors uppercase tracking-widest">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <style>{`
            .mask-fade-edges {
              mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            }
          `}</style>
        </section>

        {/* ─── ENGINEERING PROCESS (Sticky Tabs) ─────────────────────────────────── */}
        <StickyTabs
          mainNavHeight="96px"
          rootClassName="bg-white text-slate-900"
          navSpacerClassName="bg-white border-b border-slate-100"
          sectionClassName="bg-white border-b border-slate-50"
          stickyHeaderContainerClassName="shadow-none border-b border-slate-100"
          headerContentWrapperClassName="bg-white/90 backdrop-blur-xl"
          headerContentLayoutClassName="mx-auto max-w-[1400px] px-6 py-6"
          titleClassName="text-4xl font-black tracking-tighter text-slate-950 uppercase italic"
          contentLayoutClassName="mx-auto max-w-[1400px] px-6 py-32"
        >
    <StickyTabs.Item title="01: Concept Architecture" id="concept">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.3em] mb-4">Phase // 01</div>
          <h3 className="text-4xl font-black mb-6 text-slate-900 tracking-tight leading-none uppercase">Visionary <br />Foundation</h3>
          <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
            Every high-velocity platform begins with a hardened conceptual framework. We analyze your business logic, data flow requirements, and scaling trajectories to architect a blueprint that survives the first million users without friction.
          </p>
          <div className="grid grid-cols-2 gap-y-6 gap-x-10">
            {[
              { label: "Logic Mapping", value: "Strategic Data Flow" },
              { label: "Technical Debt", value: "Proactive Prevention" },
              { label: "Scaling", value: "Sub-Second Projection" },
              { label: "Infrastructure", value: "Blueprinting Phase" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                <span className="text-sm font-bold text-slate-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <img 
            src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1200&auto=format&fit=crop" 
            alt="Concept Architecture" 
            className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </StickyTabs.Item>

    <StickyTabs.Item title="02: Interface Engineering" id="design">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl lg:order-last group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop" 
            alt="Interface Engineering" 
            className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div>
          <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.3em] mb-4">Phase // 02</div>
          <h3 className="text-4xl font-black mb-6 text-slate-900 tracking-tight leading-none uppercase">Zero-Latency <br />Visuals</h3>
          <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
            Interface design is engineering. We build stunning, fluid UI systems that respond instantly. Our design-to-code pipeline ensures that every micro-interaction and animation is optimized for performance across all device tiers.
          </p>
          <div className="grid grid-cols-2 gap-y-6 gap-x-10">
            {[
              { label: "Design Systems", value: "Component-Driven" },
              { label: "Motion", value: "Physics-Based" },
              { label: "Visual Delivery", value: "Sub-Second Ready" },
              { label: "Accessibility", value: "Logic-First" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                <span className="text-sm font-bold text-slate-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StickyTabs.Item>

    <StickyTabs.Item title="03: Full-Stack Assembly" id="development">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.3em] mb-4">Phase // 03</div>
          <h3 className="text-4xl font-black mb-6 text-slate-900 tracking-tight leading-none uppercase">Unbreakable <br />Integration</h3>
          <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
            The transition from design to delivery is seamless. We coordinate complex backend integrations, database schemas, and API layers into a unified, high-performance engine using modern stacks like Next.js 15 and Supabase.
          </p>
          <div className="grid grid-cols-2 gap-y-6 gap-x-10">
            {[
              { label: "Edge Proxy", value: "Intelligent Routing" },
              { label: "Data Sync", value: "Real-time State" },
              { label: "Serverless", value: "Cloud Orchestration" },
              { label: "CI/CD", value: "Automated Pipeline" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                <span className="text-sm font-bold text-slate-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" 
            alt="Full-Stack Assembly" 
            className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </StickyTabs.Item>

    <StickyTabs.Item title="04: Global Deployment" id="launch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl lg:order-last group">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0066FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" 
            alt="Global Deployment" 
            className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div>
          <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.3em] mb-4">Phase // 04</div>
          <h3 className="text-4xl font-black mb-6 text-slate-900 tracking-tight leading-none uppercase">Infinite <br />Availability</h3>
          <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
            Launch is just the beginning. We deploy your ecosystem to global edge clusters, ensuring 99.99% availability and instant access from anywhere on earth. Adaptive scaling takes over to manage demand automatically.
          </p>
          <div className="grid grid-cols-2 gap-y-6 gap-x-10">
            {[
              { label: "Edge Nodes", value: "Multi-Region" },
              { label: "Vertical Scale", value: "Automated Demand" },
              { label: "Optimization", value: "Global Assets" },
              { label: "Performance", value: "Final Stack Audit" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                <span className="text-sm font-bold text-slate-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StickyTabs.Item>
  </StickyTabs>

  {/* ─── TECHNICAL CAPABILITIES (Release Timeline) ────────────────────────── */}
  <ReleaseTimeline 
    title="Principal Capabilities"
    description="Immersive engineering oversight. Explore the core pillars of our high-velocity web ecosystem."
    entries={[
      {
        icon: Globe,
        title: "Intelligent Edge Framework",
        subtitle: "Global Low-Latency Core",
        description: "We architect systems that live on the edge. By distributing compute and assets across global node clusters, we eliminate regional latency and ensure sub-second interaction speeds for users on any continent.",
        items: [
          "Multi-Region Edge Characterization",
          "Automated Asset Geo-Optimization",
          "Real-time Edge Proxy Logic",
          "Vertical Scaling Clusters"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        button: {
          url: "/contact",
          text: "Discuss Architecture"
        }
      },
      {
        icon: Layout,
        title: "Sub-Second Interactive Visuals",
        subtitle: "Zero-Latency UI Design",
        description: "Interface engineering is about more than aesthetics. We build stunning, fluid UI systems that respond instantly. Our design-to-code pipeline ensures sub-second visual delivery across all device tiers.",
        items: [
          "Motion-Engineered Interactions",
          "Sub-Millisecond Visual Feedback",
          "Adaptive Component Hydration",
          "Cross-Device Pixel Perfection"
        ],
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        icon: Brain,
        title: "Autonomous Logic Integration",
        subtitle: "AI-Driven Frontend Systems",
        description: "Modern web applications require intelligent logic. We bake AI reasoning into the core of your frontend, enabling dynamic user experiences that adapt in real-time to user behavior.",
        items: [
          "Context-Aware State Handling",
          "Real-time Predictive Analytics",
          "Autonomous Error Self-Correction",
          "Distributed Model Orchestration"
        ],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      },
      {
        icon: Lock,
        title: "Hardened Enterprise Security",
        subtitle: "Zero-Trust Data Protection",
        description: "Engineering excellence means security first. We implement hardened data layers and isolated execution environments to protect your enterprise assets against evolving threats.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
        items: [
          "Isolated Runtime Sandboxing",
          "Post-Quantum Encryption Channels",
          "Automated SOC-2 Threat Mitigation",
          "Real-time Compliance Auditing"
        ],
        button: {
          url: "/services/security",
          text: "Review Security Protocols"
        }
      }
    ]}
  />

  {/* ─── CORE SERVICES (Engineering Stack) ─────────────────────────────────── */}
  <section className="py-32 px-6 relative border-t border-slate-100 bg-white overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(0,102,255,0.03),transparent_50%)]" />
    <div className="max-w-[1400px] mx-auto relative z-10">
      <motion.div {...fadeUp} className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.3em] mb-4">Engineering excellence</div>
          <h2 className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight leading-none">
            Hardened Core <br />
            <span className="text-slate-400">Capabilities.</span>
          </h2>
        </div>
        <div className="text-slate-500 font-medium max-w-sm border-l border-slate-100 pl-8">
          Architecting systems that don't just work, but excel under extreme demand.
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: Globe,
            title: "Global Edge Runtime",
            description: "Deploying logic to the edge clusters for sub-100ms response times globally.",
            features: ["Edge Middleware", "Adaptive Geo-Routing", "Distributed Cache"],
            gradient: "from-blue-500/5 to-transparent"
          },
          {
            icon: Zap,
            title: "Lighthouse Mastery",
            description: "Obsessive focus on Core Web Vitals to maintain 100/100 performance scores.",
            features: ["LCP Optimization", "Zero Layout Shift", "Frictionless FID"],
            gradient: "from-amber-500/5 to-transparent"
          },
          {
            icon: Database,
            title: "Real-time Syncing",
            description: "Implementing fluid, reactive data layers that sync state across users instantly.",
            features: ["WebSocket Streams", "Optimistic State", "Conflict Resolution"],
            gradient: "from-emerald-500/5 to-transparent"
          },
          {
            icon: ShieldCheck,
            title: "Hardened Security",
            description: "Enterprise-grade protection layered into every deployment pipeline.",
            features: ["Zero-Trust Logic", "E2E Encryption", "OWASP Hardening"],
            gradient: "from-red-500/5 to-transparent"
          },
          {
            icon: Layers,
            title: "Micro-Frontends",
            description: "Decoupling complex interfaces into maintainable, scalable engineering autonomous units.",
            features: ["Module Federation", "Feature Toggling", "Independent Runtimes"],
            gradient: "from-purple-500/5 to-transparent"
          },
          {
            icon: LineChart,
            title: "Full-Stack Ops",
            description: "Deep observability and automated scaling built into the core infrastructure.",
            features: ["Real-time Metrics", "Error Interception", "Auto-Scaling Edge"],
            gradient: "from-indigo-500/5 to-transparent"
          }
        ].map((service, i) => (
          <motion.div 
            key={i}
            {...fadeUp}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`group bg-white border border-slate-100 rounded-[2.5rem] p-10 flex flex-col h-full relative overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 cursor-default`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-[#0066FF] group-hover:border-[#0066FF] transition-all duration-500">
                <service.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase group-hover:text-[#0066FF] transition-colors">{service.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">{service.description}</p>
              
              <div className="mt-auto space-y-3 pt-6 border-t border-slate-50 group-hover:border-[#0066FF]/10 transition-colors">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">
                    <div className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-[#0066FF] transition-colors" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>


  {/* ─── ARCHITECTURAL SCHEMATIC ────────────────────────────────────────── */}
  <section className="py-32 bg-[#F8FAFC] overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div {...fadeUp}>
          <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.3em] mb-6">System design</div>
          <h2 className="text-5xl font-black text-slate-950 tracking-tight leading-none mb-8">
            The Design-to-Edge <br />
            <span className="text-slate-400">Orchestrator.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
            We bridge the gap between high-fidelity interfaces and global infrastructure. Our proprietary pipeline ensures that every pixel is backed by a serverless, edge-ready architecture.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Design Contextualization", desc: "Mapping UI intent directly to technical component logic." },
              { title: "Edge Proxy Routing", desc: "Intelligent request handling at the nearest node." },
              { title: "Universal Hydration", desc: "Ensuring instant interactivity across all platforms." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-[#0066FF] transition-colors">
                  <span className="text-[#0066FF] font-black">0{i+1}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors">{item.title}</h4>
                  <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-[#0066FF]/5 blur-[120px] rounded-full" />
          <div className="relative aspect-square bg-[#030712] rounded-[3rem] border border-slate-800 p-10 overflow-hidden shadow-2xl">
              {/* Visual Schematic Mockup */}
              <div className="h-full w-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <Layout className="w-8 h-8 text-[#0066FF]" />
                    <div className="mt-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">UI Layer</div>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#0066FF]/40 to-transparent mt-10 mx-4 relative">
                    <motion.div 
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#0066FF] rounded-full shadow-[0_0_10px_#0066FF]"
                    />
                  </div>
                  <div className="p-4 bg-[#0066FF]/10 rounded-2xl border border-[#0066FF]/30 backdrop-blur-sm">
                    <Cpu className="w-8 h-8 text-[#0066FF]" />
                    <div className="mt-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">Edge-Node</div>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center py-20">
                  <div className="relative">
                    <div className="w-40 h-40 rounded-full border border-white/5 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0066FF] rounded-full blur-[2px]" />
                        <div className="w-20 h-20 rounded-full border border-[#0066FF]/20 flex items-center justify-center">
                          <Globe className="w-10 h-10 text-[#0066FF] opacity-50" />
                        </div>
                      </div>
                    </div>
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 border border-[#0066FF]/20 rounded-full animate-ping opacity-20" />
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                       Active Sync
                    </span>
                    <span className="text-[10px] font-mono text-white/40"> Astraventa CDN v2.4</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[60, 40, 80, 50].map((h, i) => (
                      <div key={i} className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${h}%` }}
                          className="h-full bg-[#0066FF]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

  {/* ─── GLOBAL EDGE NETWORK ─────────────────────────────────────────────── */}
  <section className="py-32 bg-white relative overflow-hidden text-center">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,102,255,0.05),transparent)]" />
    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
      <motion.div {...fadeUp}>
        <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.3em] mb-6">Global reach</div>
        <h2 className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight leading-none mb-8">
          Distributed Without <br />
          <span className="text-slate-400">Boundary.</span>
        </h2>
        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mb-16">
          Our infrastructure expands across 240+ global points of presence. Wherever your users are, our edge ensures they receive the Astra-Standard experience instantly.
        </p>
      </motion.div>

      <div className="relative w-full aspect-[21/9] bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden group">
        {/* Mock Map Image */}
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop" 
          alt="Global Network" 
          className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
             {[
               { top: '30%', left: '20%' },
               { top: '45%', left: '45%' },
               { top: '25%', left: '75%' },
               { top: '65%', left: '35%' },
               { top: '60%', left: '80%' }
             ].map((pos, i) => (
                <div 
                  key={i} 
                  className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2"
                  style={pos}
                >
                  <div className="absolute inset-0 bg-[#0066FF] rounded-full animate-ping opacity-40" />
                  <div className="w-full h-full bg-[#0066FF] rounded-full relative z-10 border-2 border-white shadow-[0_0_15px_#0066FF]" />
                </div>
             ))}
          </div>
        </div>
        
        {/* Overlay Stats */}
        <div className="absolute bottom-8 left-8 right-8 flex flex-wrap justify-center gap-10 md:gap-20">
          {[
            { label: 'Edge POPs', value: '240+' },
            { label: 'Active Nodes', value: '18,402' },
            { label: 'Avg Latency', value: '14ms' },
            { label: 'Uptime', value: '99.99%' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-black text-slate-900 leading-none">{stat.value}</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
  <section className="pb-12 bg-white">
    <AstraEcosystemSync tools={relatedTools} />
  </section>

  </main>
 <Footer />
 </div>
 );
};

export default WebEngineering;
