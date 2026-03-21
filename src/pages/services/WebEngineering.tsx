import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/images/webdev.svg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  Globe,
  Zap,
  Layers,
  Activity,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Layout,
  Database,
  Lock,
  Brain,
  LineChart,
  FileText
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";
import { Marquee } from "@/components/ui/marquee";
import StickyTabs from "@/components/ui/sticky-section-tabs";
import ReleaseTimeline from "@/components/ui/release-time-line";
import { ShinyButton } from "@/components/ui/shiny-button";

// ─── Stitch Primitive: Hero Visual (Hero Right Side) ────────────
const StitchHeroVisual = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center pointer-events-none bg-transparent shadow-none border-none overflow-visible">
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
            alt="Web Engineering Architecture"
            className="w-full max-w-[650px] lg:max-w-[950px] h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

const WebEngineering = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = 1; // Fixed opacity to prevent dullness on scroll

  const relatedTools = [
    {
      title: "AstraMarket",
      tagline: "Intelligence Engine",
      icon: LineChart,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/tools/astra-market"
    },
    {
      title: "AstraFlow",
      tagline: "Orchestration ETL",
      icon: FileText,
      color: "text-black",
      bg: "bg-black/[0.01]",
      href: "/tools/astra-flow"
    },
    {
      title: "AstraPulse",
      tagline: "Real-time Metrics",
      icon: Activity,
      color: "text-primary",
      bg: "bg-primary/20",
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
    <div className="min-h-screen bg-white text-black selection:bg-primary/10 overflow-x-hidden font-sans">
      <Header />

      <main>
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center px-6 overflow-hidden pt-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center py-12"
          >
            <div className="max-w-3xl">
              <motion.div
                {...fadeUp}
                className="inline-flex items-center gap-3 px-3 py-1.5 rounded-2xl border border-black/[0.08] bg-black/[0.02] backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 mb-10 shadow-sm font-['Anonymous_Pro']"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                GLOBAL_INFRASTRUCTURE_SEQUENCE
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mb-8 text-black leading-[1.1] tracking-[0.05em] text-3xl md:text-5xl lg:text-5xl font-heading font-normal uppercase">
                Web & Infrastructure <br />
                <span className="text-primary">Engineering.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#4B5563] text-[15px] font-display font-normal max-w-lg mb-12 leading-relaxed"
              >
                Engineering high-velocity digital ecosystems using optimized Next.js architectures. Sub-second delivery, globally distributed, and extreme performance at the edge by design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5"
              >
                <ShinyButton
                  className="h-11 px-7 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.1em]"
                  onClick={() => { }}
                >
                  <span className="flex items-center gap-2.5 pt-[2px]">
                    INITIALIZE_DEPLOYMENT <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>

                <Button
                  variant="ghost"
                  className="h-9 px-5 text-black/70 hover:text-black hover:bg-transparent transition-colors text-[12px] font-display font-medium tracking-[0.08em] uppercase shadow-none bg-transparent"
                  asChild
                >
                  <Link to="/docs">VIEW_STACK_TECHNICALS</Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-20 pt-10 border-t border-border/10 flex flex-wrap gap-12 opacity-80"
              >
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-black tracking-tighter leading-none">99.9%</span>
                  <span className="text-[9px] font-bold text-black/30 uppercase tracking-[0.2em] mt-2 font-['Anonymous_Pro']">UPTIME_SLA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-black tracking-tighter leading-none">&lt; 150MS</span>
                  <span className="text-[9px] font-bold text-black/30 uppercase tracking-[0.2em] mt-2 font-['Anonymous_Pro']">EDGE_LATENCY</span>
                </div>
              </motion.div>
            </div>

            <StitchHeroVisual />
          </motion.div>
        </section>

        {/* ─── TECH STACK MARQUEE ────────────────────────────────────────────── */}
        <section className="py-20 border-y border-black/[0.06] bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--primary) 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
          <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-2 block">TECHNICAL_CORE // OVERVIEW</span>
              <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.10em] uppercase leading-none">The Astra-Standard <br />Engineering Stack.</h2>
            </div>
            <div className="flex flex-col md:items-end gap-2 text-right">
              <div className="text-black text-[11px] font-black font-['Anonymous_Pro'] uppercase tracking-[0.3em]">NEXT.JS_15 // EDGE_RUNTIME // AI_NATIVE</div>
              <div className="h-px w-full md:w-64 bg-primary/20" />
            </div>
          </div>

          <div className="relative z-10">
            <Marquee className="[--duration:40s] [--gap:3rem] py-10" pauseOnHover>
              {[
                { name: "React", url: "https://cdn.simpleicons.org/react/000000" },
                { name: "Next.js", url: "https://cdn.simpleicons.org/nextjs/000000" },
                { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/000000" },
                { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/000000" },
                { name: "Tailwind", url: "https://cdn.simpleicons.org/tailwindcss/000000" },
                { name: "Supabase", url: "https://cdn.simpleicons.org/supabase/000000" },
                { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/000000" },
                { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/000000" },
                { name: "OpenAI", url: "https://cdn.simpleicons.org/openai/000000" },
                { name: "Framer", url: "https://cdn.simpleicons.org/framer/000000" },
                { name: "Go", url: "https://cdn.simpleicons.org/go/000000" },
                { name: "Docker", url: "https://cdn.simpleicons.org/docker/000000" },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 p-3 rounded-2xl bg-black/[0.02] border border-black/[0.06] transition-all group-hover:bg-white group-hover:border-primary/20 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-center grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 duration-500">
                    <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-0.5 mt-[-2px]">
                    <span className="text-[8px] font-black text-black/10 group-hover:text-primary transition-colors uppercase tracking-[0.2em] font-['Anonymous_Pro']">CORE_ENGINE</span>
                    <span className="text-[13px] font-bold text-black/40 group-hover:text-black transition-colors uppercase tracking-[0.1em] font-heading">{tech.name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* ─── ENGINEERING PROCESS ─────────────────────────────────── */}
        <StickyTabs
          mainNavHeight="96px"
          rootClassName="bg-white text-black"
          navSpacerClassName="bg-white border-b border-black/[0.06]"
          sectionClassName="bg-white border-b border-border/10"
          stickyHeaderContainerClassName="shadow-none border-b border-border/20"
          headerContentWrapperClassName="bg-white/90 backdrop-blur-xl"
          headerContentLayoutClassName="mx-auto max-w-[1400px] px-6 py-8"
          titleClassName="text-2xl md:text-3xl font-heading font-normal tracking-[0.15em] text-black uppercase"
          contentLayoutClassName="mx-auto max-w-[1400px] px-6 py-24"
        >
          <StickyTabs.Item title="01: Architecture" id="concept">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6">PROTOCOL // 01</div>
                <h3 className="text-3xl md:text-4xl font-heading font-normal mb-8 text-black tracking-[0.10em] leading-none uppercase">Hardened <br />Foundation</h3>
                <p className="text-[15px] text-[#4B5563] font-display font-normal leading-relaxed mb-12">
                  Every high-velocity platform begins with a hardened conceptual framework. We architect blueprints that survive extreme scaling trajectories without friction.
                </p>
                <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                  {[
                    { label: "LOGIC_MAPPING", value: "Strategic Data Flow" },
                    { label: "TECHNICAL_DEBT", value: "Proactive Prevention" },
                    { label: "SCALING", value: "Sub-Second Projection" },
                    { label: "INFRASTRUCTURE", value: "Blueprinting Phase" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className="text-[10px] font-black text-black/20 uppercase tracking-widest font-['Anonymous_Pro']">{item.label}</span>
                      <span className="text-sm font-black text-black uppercase tracking-tight">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/[0.06] shadow-2xl group bg-black/[0.01]">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=1200&auto=format&fit=crop"
                  alt="Concept Architecture"
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                />
              </div>
            </div>
          </StickyTabs.Item>

          <StickyTabs.Item title="02: Interface" id="design">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/[0.06] shadow-2xl lg:order-last group bg-black/[0.01]">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop"
                  alt="Interface Engineering"
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                />
              </div>
              <div>
                <div className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6">PROTOCOL // 02</div>
                <h3 className="text-3xl md:text-4xl font-heading font-normal mb-8 text-black tracking-[0.10em] leading-none uppercase">Zero-Latency <br />Visuals</h3>
                <p className="text-[15px] text-[#4B5563] font-display font-normal leading-relaxed mb-12">
                  Interface design is engineering. We build fluid UI systems that respond instantly, optimized for maximum performance across all platforms.
                </p>
                <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                  {[
                    { label: "DESIGN_SYSTEMS", value: "Component-Driven" },
                    { label: "MOTION_ENGINE", value: "Physics-Based" },
                    { label: "VISUAL_DELIVERY", value: "Sub-Second Ready" },
                    { label: "ACCESSIBILITY", value: "Logic-First" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className="text-[10px] font-black text-black/20 uppercase tracking-widest font-['Anonymous_Pro']">{item.label}</span>
                      <span className="text-sm font-black text-black uppercase tracking-tight">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StickyTabs.Item>

          <StickyTabs.Item title="03: Assembly" id="development">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6">PROTOCOL // 03</div>
                <h3 className="text-3xl md:text-4xl font-display font-normal mb-8 text-black tracking-[0.10em] leading-none uppercase">Unbreakable <br />Integration</h3>
                <p className="text-[15px] text-[#4B5563] font-display font-normal leading-relaxed mb-12">
                  We coordinate complex backend integrations and API layers into a unified, high-performance engine with sub-second feedback loops.
                </p>
                <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                  {[
                    { label: "EDGE_PROXY", value: "Intelligent Routing" },
                    { label: "DATA_SYNC", value: "Real-time State" },
                    { label: "SERVERLESS", value: "Cloud Orchestration" },
                    { label: "CI_CD", value: "Automated Pipeline" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className="text-[10px] font-black text-black/20 uppercase tracking-widest font-['Anonymous_Pro']">{item.label}</span>
                      <span className="text-sm font-black text-black uppercase tracking-tight">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/[0.06] shadow-2xl group bg-black/[0.01]">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"
                  alt="Full-Stack Assembly"
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                />
              </div>
            </div>
          </StickyTabs.Item>

          <StickyTabs.Item title="04: Deployment" id="launch">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-black/[0.06] shadow-2xl lg:order-last group bg-black/[0.01]">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
                  alt="Global Deployment"
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                />
              </div>
              <div>
                <div className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6">PROTOCOL // 04</div>
                <h3 className="text-3xl md:text-4xl font-display font-normal mb-8 text-black tracking-[0.10em] leading-none uppercase">Infinite <br />Availability</h3>
                <p className="text-[15px] text-[#4B5563] font-display font-normal leading-relaxed mb-12">
                  Launch is just the beginning. We deploy your ecosystem to global clusters, ensuring 99.99% availability and instant access globally.
                </p>
                <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                  {[
                    { label: "EDGE_NODES", value: "Multi-Region" },
                    { label: "VERTICAL_SCALE", value: "Automated Demand" },
                    { label: "OPTIMIZATION", value: "Global Assets" },
                    { label: "PERFORMANCE", value: "Final Stack Audit" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className="text-[10px] font-black text-black/20 uppercase tracking-widest font-['Anonymous_Pro']">{item.label}</span>
                      <span className="text-sm font-black text-black uppercase tracking-tight">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StickyTabs.Item>
        </StickyTabs>

        {/* ─── PRINCIPAL CAPABILITIES ────────────────────────── */}
        <ReleaseTimeline
          title="Principal Capabilities"
          description="Immersive engineering oversight. Explore the core pillars of our high-velocity web ecosystem."
          entries={[
            {
              icon: Globe,
              title: "Intelligent Edge Framework",
              subtitle: "Global Low-Latency Core",
              description: "We architect systems that live on the edge, ensuring sub-second interaction speeds for users on any continent.",
              items: [
                "Multi-Region Edge Characterization",
                "Automated Asset Geo-Optimization",
                "Real-time Edge Proxy Logic",
                "Vertical Scaling Clusters"
              ],
              image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
              button: { url: "/contact", text: "Discuss Architecture" }
            },
            {
              icon: Layout,
              title: "Sub-Second Interactive Visuals",
              subtitle: "Zero-Latency UI Design",
              description: "Stunning, fluid UI systems that respond instantly. Our pipeline ensures sub-second visual delivery.",
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
              description: "Baking AI reasoning into the core of your frontend for dynamic user experiences.",
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
              description: "Engineering excellence means security first. Hardened data layers and isolated execution environments.",
              image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
              items: [
                "Isolated Runtime Sandboxing",
                "Post-Quantum Encryption Channels",
                "Automated SOC-2 Threat Mitigation",
                "Real-time Compliance Auditing"
              ],
              button: { url: "/services/security", text: "Review Protocols" }
            }
          ]}
        />

        {/* ─── HARDENED CORE CAPABILITIES ─────────────────────────────────── */}
        <section className="py-24 px-6 relative border-t border-black/[0.06] bg-white overflow-hidden">
          <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--primary) 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.div {...fadeUp} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-3xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">ENGINEERING_EXCELLENCE</span>
                <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.15em] leading-none uppercase">
                  Hardened Core <br />
                  <span className="text-black/20">Capabilities.</span>
                </h2>
              </div>
              <div className="text-[#4B5563] font-medium max-w-sm border-l border-border/10 pl-10 uppercase text-xs tracking-[0.1em] leading-relaxed">
                Architecting systems that excel under extreme demand scenarios.
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Globe, title: "Global Edge Runtime", desc: "Sub-100ms response times globally via edge clusters.", features: ["Edge Middleware", "Adaptive Geo-Routing", "Distributed Cache"] },
                { icon: Zap, title: "Lighthouse Mastery", desc: "Obsessive focus on Core Web Vitals and performance scores.", features: ["LCP Optimization", "Zero Layout Shift", "Frictionless FID"] },
                { icon: Database, title: "Real-time Syncing", desc: "Fluid, reactive data layers that sync state instantly.", features: ["WebSocket Streams", "Optimistic State", "Conflict Resolution"] },
                { icon: Lock, title: "Hardened Security", desc: "Enterprise-grade protection layered into every deployment.", features: ["Zero-Trust Logic", "E2E Encryption", "OWASP Hardening"] },
                { icon: Layers, title: "Micro-Frontends", desc: "Decoupling complex interfaces into scalable engineering units.", features: ["Module Federation", "Feature Toggling", "Independent Runtimes"] },
                { icon: LineChart, title: "Full-Stack Ops", desc: "Deep observability and automated scaling built into core.", features: ["Real-time Metrics", "Error Interception", "Auto-Scaling Edge"] }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-black/[0.01] border border-black/[0.06] rounded-2xl p-12 flex flex-col h-full relative overflow-hidden hover:bg-black/10 hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-default"
                >
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center mb-10 border border-black/[0.06] group-hover:border-primary/30 transition-all duration-500 shadow-sm text-[#4B5563] group-hover:text-primary">
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-heading font-normal text-black mb-6 tracking-[0.1em] uppercase group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-[#4B5563] font-display font-normal leading-relaxed mb-10 uppercase text-[12px] tracking-tight">{service.desc}</p>
                    <div className="mt-auto pt-10 border-t border-border/10 space-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-black/30 group-hover:text-black/60 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors shadow-[0_0_8px_rgba(var(--primary-rgb),0.3)]" />
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
        <section className="py-24 bg-white overflow-hidden relative border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeUp} className="relative z-10">
                <div className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                  <div className="w-8 h-px bg-primary/30" />
                  SYSTEM_DESIGN // INFRASTRUCTURE
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.12em] leading-[1.1] mb-12 uppercase">
                  The Design-to-Edge <br />
                  <span className="text-black/20">Pipeline.</span>
                </h2>
                <p className="text-[15px] text-[#4B5563] font-display font-medium leading-relaxed max-w-md mb-16 uppercase tracking-tight">
                  Our proprietary framework for translating complex design systems into globally distributed, sub-second web experiences. Engineered for scale.
                </p>
                <div className="space-y-10">
                  {[
                    { title: "DESIGN_CONTEXTUALIZATION", desc: "Mapping UI intent directly to technical component logic." },
                    { title: "EDGE_PROXY_ROUTING", desc: "Intelligent request handling at the nearest node." },
                    { title: "UNIVERSAL_HYDRATION", desc: "Ensuring instant interactivity across all platforms." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group cursor-default">
                      <div className="w-12 h-12 rounded-2xl bg-black/[0.02] border border-black/[0.08] flex items-center justify-center shrink-0 group-hover:border-primary group-hover:bg-white group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500">
                        <span className="text-primary font-black uppercase text-[11px] font-['Anonymous_Pro']">0{i + 1}</span>
                      </div>
                      <div className="pt-1">
                        <h4 className="font-heading font-normal text-black group-hover:text-primary transition-colors text-lg uppercase tracking-[0.1em] mb-2">{item.title}</h4>
                        <div className="h-px w-10 bg-primary/10 mb-3 group-hover:w-20 transition-all duration-500" />
                        <p className="text-[11px] text-[#4B5563] font-bold uppercase tracking-widest font-['Anonymous_Pro'] opacity-60 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square lg:aspect-video rounded-3xl border border-black/[0.06] shadow-[0_20px_80px_rgba(0,0,0,0.04)] bg-black/[0.01] p-10 flex flex-col justify-between overflow-hidden group/viz"
              >
                {/* Background technical markers */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(126,150,246,0.03)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute top-10 right-10 text-[8px] font-black font-['Anonymous_Pro'] text-black/10 uppercase tracking-[0.3em]">ASTRA_CORE_V1.0 // ACTIVE_STREAM</div>

                {/* Visualizer Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Top Layer: UI to Edge */}
                  <div className="flex justify-between items-start mb-auto">
                    <div className="relative">
                      <div className="p-6 bg-white/80 backdrop-blur-md border border-black/[0.06] rounded-2xl shadow-sm group-hover/viz:border-primary/20 transition-colors duration-700">
                        <Layout className="w-7 h-7 text-primary" />
                        <div className="mt-4 text-[9px] font-black text-black/30 uppercase tracking-[0.2em] font-['Anonymous_Pro']">UI_INTERFACE</div>
                      </div>
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 grayscale opacity-30">
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                        <span className="text-[7px] font-black font-['Anonymous_Pro']">LATENCY: 12MS</span>
                      </div>
                    </div>

                    <div className="h-px flex-1 bg-black/[0.06] mt-10 mx-10 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.6 }}
                          className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_12px_rgba(var(--primary-rgb),0.6)]"
                        />
                      ))}
                    </div>

                    <div className="relative">
                      <div className="p-6 bg-primary/[0.02] border border-primary/20 rounded-2xl backdrop-blur-sm group-hover/viz:bg-white group-hover/viz:shadow-xl transition-all duration-700">
                        <Cpu className="w-7 h-7 text-primary" />
                        <div className="mt-4 text-[9px] font-black text-black/30 uppercase tracking-[0.2em] font-['Anonymous_Pro']">EDGE_RUNTIME</div>
                      </div>
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 grayscale opacity-30">
                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[7px] font-black font-['Anonymous_Pro']">Uptime: 99.9%</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Layer: Core Engine */}
                  <div className="flex-1 flex items-center justify-center -my-10">
                    <div className="relative">
                      {/* Spinning core shells */}
                      <div className="w-56 h-56 rounded-full border border-black/[0.03] flex items-center justify-center opacity-40">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-48 h-48 rounded-full border border-dashed border-primary/20 flex items-center justify-center"
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/40 rounded-full" />
                        </motion.div>
                      </div>

                      {/* Inner Engine */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-white border border-black/[0.06] shadow-2xl flex items-center justify-center group-hover/viz:scale-110 transition-transform duration-700">
                          <div className="relative">
                            <Globe className="w-10 h-10 text-primary opacity-20 group-hover/viz:opacity-40 transition-opacity" />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Technical Detail markers around the core */}
                      <div className="absolute -top-12 -left-12 p-3 bg-white/60 backdrop-blur-md rounded-xl border border-black/[0.06] shadow-sm transform -rotate-12 scale-75 group-hover/viz:rotate-0 transition-transform duration-700">
                        <div className="text-[7px] font-black font-['Anonymous_Pro'] text-black/20 mb-1">PROTO_V3</div>
                        <div className="text-black font-bold text-[9px]">ENCRYPTED</div>
                      </div>
                      <div className="absolute -bottom-4 -right-12 p-3 bg-white/60 backdrop-blur-md rounded-xl border border-black/[0.06] shadow-sm transform rotate-12 scale-75 group-hover/viz:rotate-0 transition-transform duration-700">
                        <div className="text-[7px] font-black font-['Anonymous_Pro'] text-black/20 mb-1">DATA_ORB</div>
                        <div className="text-black font-bold text-[9px]">SYNCHRONIZED</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Strip: Metrics */}
                  <div className="mt-auto grid grid-cols-3 gap-4 pt-10 border-t border-black/[0.04]">
                    {[
                      { label: "REQUESTS/S", value: "4.2K+" },
                      { label: "HYDRATION", value: "82MS" },
                      { label: "AVAILABILITY", value: "99.9%" }
                    ].map((m, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="text-[7px] font-black text-black/20 uppercase tracking-[0.2em] font-['Anonymous_Pro']">{m.label}</span>
                        <span className="text-xs font-black text-black tracking-tighter">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── GLOBAL EDGE NETWORK ─────────────────────────────────────────────── */}
        <section className="py-24 bg-white relative overflow-hidden text-center border-t border-black/[0.06]">
          <div className="absolute inset-0 bg-primary/[0.01] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--primary) 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
          <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <motion.div {...fadeUp}>
              <div className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-8">GLOBAL_INFRASTRUCTURE</div>
              <h2 className="text-4xl md:text-6xl font-heading font-normal text-black tracking-[0.15em] leading-[1.1] mb-12 uppercase">
                Distributed Without <br />
                <span className="text-black/20">Boundary.</span>
              </h2>
              <p className="text-[15px] text-[#4B5563] font-display font-medium leading-relaxed max-w-2xl mx-auto mb-16">
                Our infrastructure expands across 240+ global points of presence. Wherever your users are, our edge ensures instant delivery.
              </p>
            </motion.div>

            <div className="relative w-full aspect-[21/9] bg-black/[0.01] rounded-2xl border border-black/[0.06] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2560&auto=format&fit=crop"
                alt="Global Network"
                className="w-full h-full object-cover opacity-10 grayscale group-hover:scale-110 transition-all duration-[3000ms]"
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
                    <div key={i} className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2" style={pos}>
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                      <div className="w-full h-full bg-primary rounded-full relative z-10 border border-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-12 left-12 right-12 flex flex-wrap justify-center gap-10 md:gap-32 bg-white/80 backdrop-blur-md py-8 border-t border-black/[0.06] shadow-xl">
                {[
                  { label: 'EDGE_POPS', value: '240+' },
                  { label: 'ACTIVE_NODES', value: '18,402' },
                  { label: 'AVG_LATENCY', value: '14MS' },
                  { label: 'UPTIME', value: '99.99%' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-3xl font-black text-black leading-none tracking-tighter">{stat.value}</span>
                    <span className="text-[9px] font-bold font-['Anonymous_Pro'] text-primary uppercase tracking-widest mt-3">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
        <section className="bg-white border-t border-black/[0.06]">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 py-24 px-12 border border-black/[0.06] rounded-3xl bg-black/[0.01] relative overflow-hidden group/cta">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover/cta:bg-primary/10 transition-colors duration-1000" />
              
              <div className="relative z-10 max-w-xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-px bg-primary/30" />
                  <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.5em] block pt-0.5">TECH_ECOSYSTEM // V1.0</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-black tracking-[0.1em] leading-[1.1] uppercase mb-10">
                  Tech Ecosystem<br />
                  <span className="text-black/30">Seamless</span><br />
                  <span className="text-primary/80">Integration.</span><br />
                  <span className="text-black/10">Any Stack.</span>
                </h2>
                <p className="text-[#4B5563] font-display font-normal text-[13px] uppercase tracking-[0.2em] max-w-sm leading-relaxed mb-4">
                  Deploying Unified Intelligence Across Your Entire Technical Infrastructure.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 shrink-0 relative z-10">
                <ShinyButton
                  className="h-14 px-10 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.15em] shadow-xl hover:shadow-primary/20 transition-all"
                  onClick={() => { }}
                >
                  <span className="flex items-center gap-3 pt-[2px]">
                    INITIALIZE_DEPLOYMENT <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>
                <Link to="/services" className="text-[10px] font-black text-[#4B5563] hover:text-black transition-colors uppercase tracking-[0.3em] font-['Anonymous_Pro'] border-b border-black/[0.06] pb-1">
                  VIEW_ALL_DISCIPLINES
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-12 mt-16 text-[9px] font-['Anonymous_Pro'] text-black/20 uppercase tracking-[0.4em] font-black">
              <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> EDGE_OPTIMIZED // V3</span>
              <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> GLOBAL_CDN // MULTI-REGION</span>
              <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> NEXT.JS_15 // CORE_WEB_VITAL</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebEngineering;
