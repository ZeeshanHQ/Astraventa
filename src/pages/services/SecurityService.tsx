import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import {
  Shield,
  Lock,
  ShieldCheck,
  Eye,
  Key,
  ShieldAlert,
  ArrowRight,
  Activity,
  Layers,
  Sparkles,
  Terminal,
  Cpu,
  Workflow,
  Network,
  Database,
  Search,
  CheckCircle,
  FileCode,
  Globe,
  Scale,
  ScanLine
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";

// ─── Stitch Primitive: Security Terminal Monitor (Hero Right Side) ────────────
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
            src="/security.svg"
            alt="Security Engineering Architecture"
            className="w-full max-w-[550px] lg:max-w-[850px] h-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

// ─── Tech Stack Marquee ────────────────────────────────────────────────────────
const TechMarquee = () => {
  const techs = [
    { name: "Palo Alto Networks", color: "text-red-600" },
    { name: "AES-256", color: "text-slate-900" },
    { name: "Zscaler", color: "text-blue-600" },
    { name: "Cloudflare", color: "text-orange-500" },
    { name: "AWS Shield", color: "text-primary" },
    { name: "HashiCorp Vault", color: "text-slate-950" },
    { name: "Auth0", color: "text-orange-600" },
    { name: "Snyk", color: "text-purple-600" },
    { name: "Okta", color: "text-blue-700" }
  ];

  return (
    <div className="relative py-12 border-t border-b border-black/[0.06] overflow-hidden bg-white">
      <div className="flex animate-marquee whitespace-nowrap gap-16 items-center" style={{ '--gap': '4rem' } as React.CSSProperties}>
        {[...techs, ...techs].map((tech, i) => (
          <div key={tech.name + i} className="flex items-center gap-2 group cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
            <span className="text-[11px] font-black font-['Anonymous_Pro'] uppercase tracking-[0.2em] text-black/20 group-hover:text-black transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
export const SecurityService = () => {
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = 1; // Fixed opacity for professional feel

  const services = [
    {
      icon: <Network className="w-5 h-5" />,
      name: "Zero-Trust Infrastructure",
      tagline: "Never Trust, Always Verify",
      description: "Identity-first security architecture that assumes no implicit trust. Every access request is strongly authenticated, authorized within policy, and inspected for anomalies before granting access.",
      specs: ["mTLS / WireGuard Tunnels", "OIDC / SAML Identity Bridging", "Granular Access Control Policies", "Context-Aware Authorization"],
    },
    {
      icon: <FileCode className="w-5 h-5" />,
      name: "Application Hardening",
      tagline: "DevSecOps Integration",
      description: "Injecting security into the DNA of your code. We implement automated vulnerability scanning, static/dynamic analysis, and secure code review protocols to stop bugs before production.",
      specs: ["SAST / DAST Automated Pipelines", "Dependency Graph Auditing", "Secure Secrets Management", "Container Image Hardening"],
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      name: "Continuous Compliance",
      tagline: "Always-On Auditing",
      description: "Eliminate the 'compliance fire drill.' We build systems with real-time evidence collection and automated reporting for SOC2, HIPAA, and GDPR standards with deterministic accuracy.",
      specs: ["Automated Evidence Collection", "Real-time Compliance Drift", "Policy-as-Code Enforcement", "SOC2 / HIPAA / GDPR Ready"],
    },
    {
      icon: <Globe className="w-5 h-5" />,
      name: "Edge Protection",
      tagline: "Global Threat Mitigation",
      description: "Distributed DDoS mitigation and Web Application Firewalls (WAF) that sit in front of your stack. We handle bot management and SQLi/XSS prevention at the network edge.",
      specs: ["L3/L4/L7 DDoS Shielding", "Custom WAF Logic Gates", "Global Anycast Network", "Intelligent Bot Protection"],
    },
    {
      icon: <Lock className="w-5 h-5" />,
      name: "Data Sovereignty",
      tagline: "Encryption at Every Layer",
      description: "Protecting your data at rest, in transit, and in use. We implement military-grade AES-256 encryption and sophisticated PII redaction engines to ensure data remains untampered.",
      specs: ["AES-256 GCM Encryption", "HSM-backed Key Management", "PII Redaction Engines", "End-to-End Encryption"],
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      name: "Threat Intelligence",
      tagline: "AI-Driven Heuristics",
      description: "Proactive defense using machine learning to identify anomalous behavior. We detect lateral movement and credential stuffing attempts using high-fidelity heuristic models.",
      specs: ["Heuristic Network Analysis", "Lateral Movement Detection", "SIEM / SOAR Integration", "Automated Threat Hunting"],
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const principles = [
    { n: "01", title: "Deterministic Validation", body: "Every interaction is measured against absolute policy gates. There are no 'gray' areas in our security logic." },
    { n: "02", title: "Minimal Privilege", body: "Access is granted only for the specific task at hand, for the specific duration required. Nothing more." },
    { n: "03", title: "Traceable Access", body: "Every packet and login is logged in an immutable, cryptographically signed ledger for instant auditing." },
    { n: "04", title: "Infinite Response", body: "Automated playbooks that can instantiate new security nodes and block entire subnets in milliseconds during an event." },
  ];

  const verticals = [
    { sector: "FinTech", use: "Immutable audit trails and hardened identity layers for banking-grade transactions.", color: "bg-primary" },
    { sector: "Healthcare", use: "HIPAA-compliant data silos with automated PII redaction for patient records.", color: "bg-slate-900" },
    { sector: "Public Sector", use: "Air-gapped cloud environments and high-entropy encryption for federal deployments.", color: "bg-primary/80" },
  ];

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraVerify AI",
      tagline: "Identity & Deepfake Shield",
      icon: ShieldCheck,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/tools/astra-verify"
    },
    {
      title: "AstraLegal AI",
      tagline: "Hardened Contract Intelligence",
      icon: Scale,
      color: "text-black/60",
      bg: "bg-black/[0.01]",
      href: "/tools/astra-legal"
    },
    {
      title: "AstraTrace AI",
      tagline: "Supply Chain Verifier",
      icon: ScanLine,
      color: "text-primary",
      bg: "bg-primary/20",
      href: "/tools/astra-trace"
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-hidden font-sans">
      <Header />

      <main className="pt-12">

        {/* ─── HERO Section ──────────────────────────────────────────────────────── */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center px-6 overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-12">

            {/* Left Content */}
            <div className="pt-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-black/[0.01] border border-black/[0.06] mb-8 shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary tracking-[0.2em] uppercase">SECURITY_HARDENING // V1.0</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8 text-4xl md:text-5xl font-heading font-normal text-black tracking-[0.2em] leading-[1.15] uppercase"
              >
                Zero-Trust<br />Hardened<br />
                <span className="text-primary">Systems.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#4B5563] font-medium text-lg leading-relaxed max-w-lg mb-10"
              >
                Protect mission-critical infrastructure with military-grade hardening, unbreachable architectures, and continuous compliance auditing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-6"
              >
                <ShinyButton
                  className="h-11 px-7 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.1em]"
                  onClick={() => { }}
                >
                  <span className="flex items-center gap-2.5 pt-[2px]">
                    INITIALIZE_AUDIT <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-black font-['Anonymous_Pro'] text-[#4B5563] uppercase tracking-widest">THREAT_MONITOR: ACTIVE</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Security Terminal */}
            <StitchHeroVisual />

          </motion.div>
        </section>

        {/* ─── Tech Stack Marquee ─────────────────────────────────────────────── */}
        <TechMarquee />

        {/* ─── CORE SERVICES (Interactive) ────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <motion.div {...fadeUp}>
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-[#4B5563] uppercase tracking-[0.2em] mb-3 block">SECURITY_DISCIPLINES</span>
                <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter leading-[0.92] uppercase font-display">
                  Six Modules of<br /><span className="text-black/5">Hardened Ops.</span>
                </h2>
              </motion.div>
              <motion.p {...fadeUp} className="text-[#4B5563] text-base font-medium max-w-xs leading-relaxed mb-2">
                Infrastructure-level security architectures designed for deterministic prevention and rapid response.
              </motion.p>
            </div>

            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-border/10">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`px-4 py-2 rounded-2xl text-[10px] font-black font-['Anonymous_Pro'] uppercase tracking-widest transition-all duration-300 ${i === activeService ? 'bg-black text-white shadow-lg' : 'bg-transparent text-[#4B5563] hover:bg-black/[0.01]'}`}
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
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-black/[0.01] rounded-2xl p-10 md:p-14 border border-black/[0.06] shadow-sm transition-all"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-primary border border-black/[0.06] shadow-sm">
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-black tracking-tighter uppercase font-display">{services[activeService].name}</h3>
                    <span className="text-[11px] font-['Anonymous_Pro'] text-primary uppercase tracking-widest font-bold">{services[activeService].tagline}</span>
                  </div>
                </div>
                <p className="text-black/60 font-medium leading-relaxed text-lg mb-10">
                  {services[activeService].description}
                </p>
                <div className="flex gap-4">
                  <Button asChild className="h-11 px-8 rounded-full text-[14px] font-display font-bold uppercase tracking-[0.15em] bg-black hover:bg-black/90 text-white border-none transition-all shadow-none">
                    <Link to="/contact">REQUEST_AUDIT <ArrowRight className="ml-2 w-4 h-4 text-primary" /></Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 pt-4">
                <div className="text-[10px] font-black font-['Anonymous_Pro'] text-slate-400 uppercase tracking-widest mb-6">Security Specs</div>
                <div className="grid grid-cols-1 gap-3">
                  {services[activeService].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-4 py-3 px-5 bg-white border border-black/[0.06] rounded-2xl group hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all shadow-sm">
                      <div className="p-1 rounded-full bg-primary/10 text-primary">
                        <CheckCircle className="w-3.5 h-3.5 stroke-[3px]" />
                      </div>
                      <span className="text-[12px] font-bold text-black/70 tracking-tight uppercase group-hover:text-primary transition-colors">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── SECURITY ARCHITECTURE (Schematic) ─────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06] overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none panning-grid" style={{ backgroundImage: "radial-gradient(var(--primary) 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center">
              <motion.span {...fadeUp} className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.2em] mb-4 block">ENCRYPTION_FLOW</motion.span>
              <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="text-black text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase leading-[0.9] font-display">The Hardened Architecture.</motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-[#4B5563] max-w-2xl mx-auto font-medium">Multi-layered cryptographic validation mapped across API endpoints, edge networks, and persistent storage layers.</motion.p>
            </div>

            <div className="relative bg-black/[0.01] rounded-2xl border border-black/[0.06] p-10 md:p-16 overflow-hidden">
              <div className="absolute top-1/2 left-10 right-10 h-[0.5px] bg-primary/20 hidden lg:block -translate-y-1/2" />

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                {[
                  { step: "01", label: "Edge Shield", desc: "WAF & DDoS Mitigation\nTLS 1.3 Termination", icon: Globe },
                  { step: "02", label: "Identity Gate", desc: "OIDC / SAML Mapping\nZero-Trust Auth", icon: Key },
                  { step: "03", label: "Internal VPC", desc: "mTLS Micro-segmentation\nLateral Movement Prevention", icon: Network },
                  { step: "04", label: "Cold Storage", desc: "AES-256 GCM Encryption\nHSM Key Rotation", icon: Database }
                ].map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="group flex flex-col bg-white border border-border/30 p-6 rounded-2xl hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all relative z-10 shadow-sm"
                    >
                      <div className="flex items-center justify-between mb-10">
                        <div className="w-10 h-10 rounded-2xl bg-black/[0.01] flex items-center justify-center text-[#4B5563] group-hover:text-primary group-hover:bg-primary/5 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-['Anonymous_Pro'] font-black text-primary uppercase tracking-widest">GATE_{node.step}</span>
                      </div>
                      <h4 className="text-lg font-black text-black mb-3 tracking-tighter uppercase leading-tight font-display">{node.label}</h4>
                      <p className="text-[11px] font-['Anonymous_Pro'] text-black/30 leading-relaxed font-bold whitespace-pre-line group-hover:text-black/60 transition-colors uppercase tracking-widest">
                        {node.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Technical footer */}
              <div className="mt-12 pt-8 border-t border-border/10 flex flex-wrap gap-8 text-[9px] font-['Anonymous_Pro'] text-black/20 uppercase tracking-[0.2em] font-black">
                <span className="flex items-center gap-2 font-bold"><div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> AUDIT: 100%_PASS</span>
                <span>LATENCY: +2ms (INSPECTION)</span>
                <span>COMPLIANCE: AES-GCM ENCRYPTED</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECURITY PRINCIPLES ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Left sticky */}
              <div className="lg:col-span-5">
                <motion.div {...fadeUp} className="sticky top-32">
                  <span className="text-[10px] font-black font-['Anonymous_Pro'] text-[#4B5563] uppercase tracking-[0.2em] mb-4 block">SECURITY_PHILOSOPHY</span>
                  <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter leading-[0.9] mb-8 uppercase font-display">
                    Air-Gapped.<br />Immutable.<br />
                    <span className="text-primary">Zero-Trust.</span>
                  </h2>
                  <p className="text-[#4B5563] font-medium text-lg leading-relaxed max-w-sm">
                    We architect for the worst-case scenario. Our security systems provide deterministic protection that remains unbreakable under pressure.
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
                    className="p-10 border border-border/10 bg-black/[0.01] rounded-2xl group hover:bg-black/[0.03] transition-all duration-300 cursor-default"
                  >
                    <div className="flex gap-8">
                      <span className="text-[12px] font-['Anonymous_Pro'] font-black text-primary/30 group-hover:text-primary transition-colors pt-1">{p.n}</span>
                      <div>
                        <h3 className="text-2xl font-black text-black tracking-tighter mb-4 transition-colors uppercase group-hover:text-primary font-display">{p.title}</h3>
                        <p className="text-[#4B5563] group-hover:text-black/70 font-medium leading-relaxed transition-colors">{p.body}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── SECTOR VERTICALS ────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
              <div className="max-w-3xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">SECTOR_VERTICALS</span>
                <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter uppercase leading-none font-display">Hardened for<br /><span className="text-black/5">Critical Loads.</span></h2>
              </div>
              <div className="text-[#4B5563] font-medium max-w-sm border-l border-border/10 pl-10 uppercase text-xs tracking-[0.1em] leading-relaxed">
                Security architectures engineered for deterministic performance across global enterprise tiers.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { sector: "FinTech", use: "IMMUTABLE AUDIT TRAILS AND HARDENED IDENTITY LAYERS FOR BANKING-GRADE TRANSACTIONS.", n: "01" },
                { sector: "Healthcare", use: "HIPAA-RELIANT DATA SILOS WITH AUTOMATED PII REDACTION FOR MISSION-CRITICAL RECORDS.", n: "02" },
                { sector: "Public Sector", use: "AIR-GAPPED CLOUD ENVIRONMENTS AND HIGH-ENTROPY ENCRYPTION FOR FEDERAL DEPLOYMENTS.", n: "03" },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="p-12 rounded-2xl border border-black/[0.06] bg-black/[0.01] flex flex-col justify-between min-h-[350px] hover:bg-black/[0.03] hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all group shadow-sm"
                >
                  <div>
                    <span className="text-[12px] font-['Anonymous_Pro'] font-black text-primary/30 group-hover:text-primary transition-colors block mb-10">UNIT_{v.n}</span>
                    <h3 className="text-3xl font-black text-black mb-6 uppercase tracking-tighter group-hover:text-primary transition-colors font-display">{v.sector}</h3>
                    <p className="text-sm text-[#4B5563] font-black leading-relaxed uppercase tracking-tight group-hover:text-black transition-colors">{v.use}</p>
                  </div>
                  <div className="mt-12 flex justify-between items-center border-t border-border/10 pt-8">
                    <span className="text-[10px] font-black text-black/20 uppercase tracking-[0.2em]">Verified_Protocol</span>
                    <ArrowRight className="w-5 h-5 text-primary/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
        <section className="py-24 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16 py-24 px-12 border border-black/[0.06] rounded-2xl bg-black/[0.01] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
              <div className="relative z-10 max-w-2xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block">SYSTEM_INITIATION</span>
                <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter leading-[0.85] uppercase mb-8 font-display">
                  Audit your<br /><span className="text-black/5">infrastructure.</span>
                </h2>
                <p className="text-[#4B5563] font-medium text-lg uppercase tracking-tight max-w-md">
                  Mission-critical security hardening for enterprises that refuse to be compromised.
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

            <div className="flex flex-wrap items-center gap-12 mt-16 text-[9px] font-['Anonymous_Pro'] text-black/20 uppercase tracking-[0.4em] font-black">
              <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> SOC2_AUDITED // V3</span>
              <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> HIPAA_RELIANT // SECURE_MESH</span>
              <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary/40" /> FIPS_140-2 // HARDENED</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default SecurityService;
