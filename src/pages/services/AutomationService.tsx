import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/images/automation.svg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link } from "react-router-dom";
import { IntegrationEcosystem } from "@/components/IntegrationEcosystem";
import { ArchitectureStack } from "@/components/ArchitectureStack";
import { useRef } from "react";
import {
  Workflow,
  RefreshCw,
  Settings,
  Code2,
  BarChart3,
  ArrowRight,
  Database,
  Network,
  Zap,
  Activity,
  FileText,
  LineChart,
  Globe,
  GitBranch,
  CheckCircle2,
  Clock
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";
import { N8nWorkflowBlock } from "@/components/ui/n8n-workflow-block-shadcnui";
import { Marquee } from "@/components/ui/marquee";

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
            src={heroImage}
            alt="Automation Engineering Architecture"
            className="w-full max-w-[550px] lg:max-w-[1000px] h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const AutomationService = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = 1; // Fixed opacity for professional feel

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraFlow AI",
      tagline: "Smart Data-Entry Agent",
      icon: FileText,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/tools/astra-flow"
    },
    {
      title: "AstraMarket AI",
      tagline: "Competitor Intelligence",
      icon: LineChart,
      color: "text-black/60",
      bg: "bg-black/[0.01]",
      href: "/tools/astra-market"
    },
    {
      title: "AstraPulse AI",
      tagline: "Performance Metrics",
      icon: Activity,
      color: "text-primary",
      bg: "bg-primary/20",
      href: "/tools/astra-pulse"
    }
  ];

  const fadeUp: any = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-hidden">
      <Header />

      <main className="pt-12">
        {/* ─── Hero Section ────────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-white">
          {/* Architectural Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2] pointer-events-none" />

          <motion.div style={{ y: heroY }} className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-20 lg:gap-16 items-center py-16">

            {/* Left Content */}
            <div className="">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl border border-black/[0.06] bg-black/[0.01] mb-8"
              >
                <Zap className="w-3 h-3 text-primary" /> <span className="text-[10px] font-black text-[#4B5563] tracking-[0.3em] uppercase font-['Anonymous_Pro']">INITIALIZE_AUTOMATION</span>
              </motion.div>
              <h1 className="text-black tracking-[0.08em] mb-8 uppercase text-3xl md:text-5xl lg:text-6xl font-heading font-normal leading-tight">
                Intelligent <br />
                <span className="text-primary italic">Automation.</span>
              </h1>
              <div className="text-[#4B5563] font-medium text-lg max-w-lg mb-12 leading-relaxed">
                Engineering high-velocity, self-healing workflows. From document ingestion to intelligent decisioning, we build the engine of the autonomous enterprise.
              </div>

              <div className="flex flex-wrap items-center gap-10">
                <ShinyButton
                  className="h-11 px-7 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.1em]"
                  onClick={() => { }}
                >
                  <span className="flex items-center gap-2.5 pt-[2px]">
                    INITIALIZE_AUTOMATION <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-['Anonymous_Pro'] text-black/20 font-black uppercase tracking-widest">SYSTEM_READY</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-12 mt-16 px-12 pb-12 text-[9px] font-['Anonymous_Pro'] text-black/20 uppercase tracking-[0.4em] font-black">
                <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-black/40" /> AUTOMATION_ENGINE // v1.0</span>
                <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-black/40" /> ENTERPRISE_FLOW // HARDENED</span>
                <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-black/40" /> SOC2_READY // COMPLIANCE</span>
              </div>
            </div>

            {/* Right Interactive Component */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full"
            >
              <div className="absolute -inset-4 bg-primary/10 blur-[100px] opacity-20 rounded-full" />
              <StitchHeroVisual />
            </motion.div>

          </motion.div>
        </section>
 
        {/* ─── TECH STACK MARQUEE ────────────────────────────────────────────── */}
        <section className="py-20 border-b border-black/[0.06] bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--primary) 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
          <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-2 block">AUTOMATION_STACK // INTEGRATIONS</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-normal text-black tracking-[0.10em] uppercase leading-none">Official <br /><span className="text-black/20 italic">Integration Mesh.</span></h2>
            </div>
            <div className="flex flex-col md:items-end gap-2 text-right">
              <div className="text-black text-[11px] font-black font-['Anonymous_Pro'] uppercase tracking-[0.3em]">N8N // ZAPIER // MAKE // AIRTABLE</div>
              <div className="h-px w-full md:w-64 bg-primary/20" />
            </div>
          </div>
 
          <div className="relative z-10">
            <Marquee className="[--duration:40s] [--gap:3rem] py-10" pauseOnHover>
              {[
                { name: "n8n", url: "https://cdn.simpleicons.org/n8n/000000" },
                { name: "Zapier", url: "https://cdn.simpleicons.org/zapier/FF6600" },
                { name: "Make", url: "https://cdn.simpleicons.org/make/BA01FF" },
                { name: "Airtable", url: "https://cdn.simpleicons.org/airtable/18BFFF" },
                { name: "Notion", url: "https://cdn.simpleicons.org/notion/000000" },
                { name: "Slack", url: "https://cdn.simpleicons.org/slack/4A154B" },
                { name: "Discord", url: "https://cdn.simpleicons.org/discord/5865F2" },
                { name: "GitHub", url: "https://cdn.simpleicons.org/github/181717" },
                { name: "Retool", url: "https://cdn.simpleicons.org/retool/3D3D3D" },
                { name: "OpenAI", url: "https://cdn.simpleicons.org/openai/412991" },
                { name: "Google Drive", url: "https://cdn.simpleicons.org/googledrive/4285F4" },
                { name: "Salesforce", url: "https://cdn.simpleicons.org/salesforce/00A1E0" },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-14 h-14 p-3.5 rounded-2xl bg-black/[0.02] border border-black/[0.06] transition-all group-hover:bg-white group-hover:border-primary/20 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-center grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 duration-500">
                    <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-0.5 mt-[-2px]">
                    <span className="text-[8px] font-black text-black/10 group-hover:text-primary transition-colors uppercase tracking-[0.2em] font-['Anonymous_Pro']">INTEGRATION</span>
                    <span className="text-[14px] font-bold text-black/40 group-hover:text-black transition-colors uppercase tracking-[0.1em] font-heading">{tech.name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>
        {/* ─── ARCHITECTURE SCHEMATIC ────────────────────────────────────────── */}
        <section className="py-24 px-6 relative border-t border-black/[0.06] bg-white">
          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-12 text-left">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">INFRASTRUCTURE_DESIGN</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-normal mb-10 tracking-[0.15em] text-black uppercase leading-[1.15]">Logical<br /><span className="text-black/20 italic">Infrastructure.</span></h2>
                <p className="text-xl md:text-2xl text-[#4B5563] font-medium uppercase tracking-tight">BPMN-compliant workflow design mapped across our high-performance execution mesh.</p>
              </div>
            </div>

            <div className="relative w-full h-auto bg-black/[0.01] rounded-2xl border border-black/[0.06] p-12 md:p-24 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
              {/* Dash connecting lines */}
              <div className="absolute top-1/2 left-[15%] right-[15%] h-px border-t-[0.5px] border-dashed border-border hidden lg:block -translate-y-1/2" />

              {[
                { step: "01", title: "Trigger", desc: "Event-based Crons", icon: Clock },
                { step: "02", title: "Logic", desc: "Condition Mapping", icon: GitBranch },
                { step: "03", title: "Action", desc: "API Orchestration", icon: Globe },
                { step: "04", title: "Log", desc: "Immutable Audits", icon: CheckCircle2 }
              ].map((node, i) => {
                const Icon = node.icon as any;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative z-10 flex flex-col bg-white border border-black/[0.06] p-10 rounded-2xl w-full lg:w-72 group hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-black/10 flex items-center justify-center mb-10 text-black/20 group-hover:text-primary group-hover:bg-primary/10 transition-all border border-transparent group-hover:border-primary/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-['Anonymous_Pro'] font-black text-primary mb-4 uppercase tracking-[0.25em]">STAGE_{node.step}</span>
                    <h4 className="text-2xl font-black text-black mb-4 tracking-tighter uppercase leading-none">{node.title}</h4>
                    <p className="text-[10px] font-['Anonymous_Pro'] text-[#4B5563] font-black uppercase tracking-widest">{node.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── LIVE WORKFLOW ORCHESTRATOR ───────────────────────────────────── */}
        <section className="py-24 px-6 relative border-t border-black/[0.06] bg-white">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-12 text-left">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">WORKFLOW_ORCHESTRATION</span>
                <h2 className="text-3xl md:text-4xl font-display font-normal mb-10 tracking-[0.2em] text-black uppercase leading-[1.15]">Live Workflow <br /><span className="text-black/20">Builder.</span></h2>
                <p className="text-xl md:text-2xl text-[#4B5563] font-medium uppercase tracking-tight">Interactive blueprinting for high-velocity automation pipelines. Drag, connect, and deploy in real-time.</p>
              </div>
            </div>

            <div className="relative z-10 bg-black/[0.01] rounded-2xl p-4 sm:p-2 border border-black/[0.06] shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20" />
              <N8nWorkflowBlock />
            </div>
          </div>
        </section>

        {/* ─── BENTO CAPABILITIES ────────────────────────────────────────────── */}
        <section className="py-24 px-6 relative border-t border-black/[0.06] bg-white">
          <div className="max-w-[1400px] mx-auto">
            <motion.div {...fadeUp} className="mb-12">
              <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">CORE_MODULES</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal text-black tracking-[0.15em] uppercase leading-[1.15] mb-6">Deterministic <br /><span className="text-black/20 italic">Sub-Systems.</span></h2>
              <p className="text-[15px] text-[#4B5563] font-display max-w-xl font-medium uppercase tracking-tight">Engineered for reliability at global scale.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.1 }}
                className="lg:col-span-2 bg-black/[0.01] border border-black/[0.06] rounded-2xl p-12 flex flex-col justify-between group overflow-hidden relative"
              >
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center text-primary mb-12 shadow-sm group-hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all">
                    <Workflow className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-black text-black mb-8 tracking-tighter uppercase leading-none">Business Process<br />Orchestration</h3>
                  <p className="text-[15px] text-[#4B5563] font-display font-medium leading-relaxed max-w-2xl uppercase tracking-tight">
                    We map complex manual dependencies into deterministic state-machines. Eliminate single points of failure with redundant exit nodes and human-in-the-loop validation.
                  </p>
                </div>
                <div className="mt-16 flex items-center gap-6 text-[10px] font-black font-['Anonymous_Pro'] uppercase tracking-[0.3em] text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> LATENCY_OPTIMIZED // P99: 14MS
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.2 }}
                className="bg-black/[0.01] border border-black/[0.06] rounded-2xl p-12 flex flex-col justify-between group relative"
              >
                <RefreshCw className="w-10 h-10 text-primary mb-12 stroke-[1.5px]" />
                <div>
                  <h3 className="text-3xl font-black text-black mb-6 tracking-tighter uppercase leading-tight">Synchronous Data<br />Pipelines</h3>
                  <p className="text-[15px] text-[#4B5563] font-display font-medium leading-relaxed uppercase tracking-tight">
                    High-throughput ETL systems that extract, sanitize, and reconstruct data across cross-platform environment APIs.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.3 }}
                className="bg-foreground rounded-2xl p-12 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-[80px] rounded-full" />
                <Settings className="w-10 h-10 text-primary mb-12 stroke-[1.5px] relative z-10" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-background mb-6 tracking-tighter leading-tight uppercase">Autonomous Browser<br />Agents</h3>
                  <p className="text-lg text-background/40 font-medium leading-relaxed mb-10 uppercase tracking-tight">
                    Harnessing AI to navigate legacy web interfaces that lack native APIs.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-white transition-colors font-['Anonymous_Pro']">
                    DEPLOY_ROBOT <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.4 }}
                className="lg:col-span-2 bg-white border border-black/[0.06] rounded-2xl p-12 flex flex-col md:flex-row items-center gap-16 group hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all"
              >
                <div className="w-full md:w-1/3 aspect-square bg-black/[0.01] rounded-2xl border border-black/[0.06] flex items-center justify-center p-10 group-hover:bg-black/10 transition-colors">
                  <Network className="w-24 h-24 text-black/10 group-hover:text-primary/20 transition-colors stroke-[1px]" />
                </div>
                <div className="flex-1">
                  <Code2 className="w-10 h-10 text-primary mb-10 stroke-[1.5px]" />
                  <h3 className="text-4xl font-black text-black mb-8 tracking-tighter uppercase leading-none">Integration Ebus</h3>
                  <p className="text-[15px] text-[#4B5563] font-display font-medium leading-relaxed uppercase tracking-tight">
                    Connect fragmented CRM, ERP, and bespoke stacks into a unified messaging layer. Real-time consistency across every terminal.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ArchitectureStack />

        {/* ─── TRUST STATS (Elite Redesign) ────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06] overflow-hidden relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border/20 blur-sm" />
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-20 relative z-10">
            {[
              { label: "HOURS_SAVED // AVG", val: "95%", desc: "Reduction in manual lifecycle latency." },
              { label: "MONTHLY_EVENTS", val: "1M+", desc: "Autonomous transactions processed." },
              { label: "PACKET_LOSS // DETERMINISTIC", val: "0", desc: "Redundant execution nodes deployed." },
              { label: "PIPELINE_INIT", val: "24H", desc: "Average deployment to production." }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col border-l border-black/[0.06] pl-12 group">
                <span className="text-7xl font-black text-black tracking-tighter mb-4 group-hover:text-primary transition-colors">{stat.val}</span>
                <span className="text-[10px] font-black text-[#4B5563] uppercase tracking-[0.3em] font-['Anonymous_Pro'] mb-6">{stat.label}</span>
                <p className="text-[10px] text-black/20 font-black uppercase tracking-widest">{stat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
        <section className="bg-white border-t border-black/[0.06]">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16 py-16 px-12 border border-black/[0.06] rounded-2xl bg-black/[0.01] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 blur-[120px] rounded-full" />
              <div className="relative z-10 max-w-2xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">SYSTEM_INITIATION</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-normal text-black tracking-[0.15em] leading-[1.15] uppercase mb-8">
                  Build your<br /><span className="text-black/20 italic">engine.</span>
                </h2>
                <p className="text-[#4B5563] font-medium text-lg uppercase tracking-tight max-w-md">
                  Turn your operational chaos into silent, deterministic automation. Redefine efficiency with AstraAI.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start md:items-center gap-8 shrink-0 relative z-10">
                <ShinyButton
                  className="h-12 px-8 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.12em]"
                  onClick={() => { }}
                >
                  <span className="flex items-center gap-3 pt-[2px]">
                    INITIALIZE_STACK <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>
                <Link to="/services" className="text-[10px] font-black text-[#4B5563] hover:text-black transition-colors uppercase tracking-[0.3em] font-['Anonymous_Pro'] border-b border-black/[0.06] pb-1">
                  VIEW_ALL_DISCIPLINES
                </Link>
              </div>
            </div>
          </div>
        </section>
 
        <IntegrationEcosystem />
      </main>
      <Footer />
    </div>
  );
};

export default AutomationService;
