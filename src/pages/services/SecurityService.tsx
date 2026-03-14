import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
const SecurityTerminal = () => {
  const [logs, setLogs] = useState<{ ts: string, type: string, msg: string }[]>([]);
  
  const events = [
    { type: "AUTH", msg: "JWT token validation: SUCCESS" },
    { type: "WAF", msg: "SQLi attempt blocked (IP: 192.168.1.1)" },
    { type: "VPC", msg: "Zero-Trust tunnel established" },
    { type: "ENCR", msg: "Rotating key-pair // HASH_AES_256" },
    { type: "AUDIT", msg: "SOC2 policy compliance check: PASSED" },
    { type: "THREAT", msg: "Heuristic scan: NO ANOMALIES" }
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const event = events[i % events.length];
      setLogs(prev => [...prev.slice(-4), { ts: now, ...event }]);
      i++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-slate-950 rounded-3xl border border-slate-800 p-0 overflow-hidden flex flex-col shadow-2xl group min-h-[480px]">
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Shield className="w-3.5 h-3.5" /> SEC_OPS // V9.2.0
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-slate-500">THREAT_LVL: 0</span>
          <span className="text-[10px] font-mono text-slate-500">uptime: 99.999%</span>
        </div>
      </div>

      <div className="p-8 space-y-8 flex-1">
        {/* Security Visual Monitor */}
        <div className="relative h-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#2910E5]/10 blur-[100px] rounded-full" />
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-slate-800 rounded-full border-dashed"
            />
            <div className="w-24 h-24 rounded-full border-2 border-[#2910E5] flex items-center justify-center bg-slate-900 relative z-10 shadow-[0_0_30px_rgba(41,16,229,0.3)]">
              <ShieldCheck className="w-12 h-12 text-[#2910E5]" />
            </div>
            <motion.div 
              className="absolute -top-10 -right-10 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[9px] font-mono text-emerald-500 font-bold"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ENCRYPTED
            </motion.div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-3 gap-4">
          {['TLS 1.3', 'AES-256', 'FIPS-140'].map((proto) => (
            <div key={proto} className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl flex flex-col items-center">
              <span className="text-[9px] text-slate-500 font-mono uppercase mb-1">{proto}</span>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#2910E5]"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time technical log stream */}
      <div className="border-t border-slate-800 px-6 py-4 space-y-2 bg-slate-950/80 font-mono min-h-[140px]">
        {logs.length === 0 ? (
          <div className="flex items-center gap-3 animate-pulse py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <span className="text-[9px] text-slate-600 uppercase tracking-widest font-bold">Scanning peripherals...</span>
          </div>
        ) : (
          logs.map((log, i) => (
            <motion.div 
              key={log.ts + i}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <span className="text-[9px] text-slate-600 font-bold">{log.ts}</span>
              <span className={`text-[8px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 font-black tracking-tighter ${
                log.type === 'WAF' ? 'text-red-400 border-red-900/30' : 
                log.type === 'AUTH' ? 'text-[#2910E5]' : 'text-emerald-500'
              }`}>{log.type}</span>
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
    { name: "Palo Alto Networks", color: "text-red-600" },
    { name: "Splunk", color: "text-slate-900" },
    { name: "CrowdStrike", color: "text-red-700" },
    { name: "Zscaler", color: "text-blue-600" },
    { name: "Cloudflare", color: "text-orange-500" },
    { name: "AWS Shield", color: "text-[#2910E5]" },
    { name: "HashiCorp Vault", color: "text-slate-950" },
    { name: "Auth0", color: "text-orange-600" },
    { name: "Snyk", color: "text-purple-600" },
    { name: "Okta", color: "text-blue-700" }
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
export const SecurityService = () => {
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
    { sector: "FinTech", use: "Immutable audit trails and hardened identity layers for banking-grade transactions.", color: "bg-[#2910E5]" },
    { sector: "Healthcare", use: "HIPAA-compliant data silos with automated PII redaction for patient records.", color: "bg-slate-900" },
    { sector: "Public Sector", use: "Air-gapped cloud environments and high-entropy encryption for federal deployments.", color: "bg-[#2910E5]/80" },
  ];

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraVerify AI",
      tagline: "Identity & Deepfake Shield",
      icon: ShieldCheck,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      href: "/tools/astra-verify"
    },
    {
      title: "AstraLegal AI",
      tagline: "Hardened Contract Intelligence",
      icon: Scale,
      color: "text-slate-700",
      bg: "bg-slate-700/10",
      href: "/tools/astra-legal"
    },
    {
      title: "AstraTrace AI",
      tagline: "Supply Chain Verifier",
      icon: ScanLine,
      color: "text-teal-600",
      bg: "bg-teal-600/10",
      href: "/tools/astra-trace"
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
                <ShieldCheck className="w-3.5 h-3.5 text-[#2910E5]" />
                <span className="text-[10px] font-black font-mono text-[#2910E5] tracking-[0.2em] uppercase">Security Hardening · V9</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8 text-6xl md:text-8xl font-black text-slate-950 tracking-tight leading-[0.88]"
              >
                Zero-Trust<br />Hardened<br />
                <span className="text-[#2910E5]">Systems.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 font-medium text-lg leading-relaxed max-w-lg mb-10"
              >
                Protect mission-critical infrastructure with military-grade hardening, unbreachable architectures, and continuous compliance auditing.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-6"
              >
                <Button className="h-14 px-8 bg-[#2910E5] hover:bg-[#2910E5]/90 text-white rounded-full font-bold flex items-center gap-3 transition-transform border-none shadow-xl shadow-[#2910E5]/20 group" asChild>
                  <Link to="/contact">
                    Initialize Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest font-bold">Threat Monitor Active</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Security Terminal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative w-full"
            >
              <SecurityTerminal />
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
                <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-3 block">Security Disciplines</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[0.92]">
                  Six Modules of<br /><span className="text-[#2910E5]">Hardened Ops.</span>
                </h2>
              </motion.div>
              <motion.p {...fadeUp} className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed mb-2">
                Infrastructure-level security architectures designed for deterministic prevention and rapid response.
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
                    <Link to="/contact">Request Audit <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-5 pt-4">
                <div className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-widest mb-6">Security Specs</div>
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

        {/* ─── SECURITY ARCHITECTURE (Schematic) ─────────────────────────────────── */}
        <section className="py-32 px-6 bg-slate-950 border-t border-slate-100 overflow-hidden relative">
          <div className="absolute inset-0 bg-[#2910E5]/[0.02] pointer-events-none panning-grid" style={{ backgroundImage: "radial-gradient(#2910E5 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center">
              <motion.span {...fadeUp} className="text-[10px] font-black font-mono text-white/40 uppercase tracking-[0.2em] mb-4 block">Encryption Flow</motion.span>
              <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="text-white text-4xl md:text-6xl font-black mb-6 tracking-tight">The Hardened Architecture.</motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-white/40 max-w-2xl mx-auto font-medium">Multi-layered cryptographic validation mapped across API endpoints, edge networks, and persistent storage layers.</motion.p>
            </div>

            <div className="relative bg-slate-900/50 border border-white/5 rounded-[3rem] p-10 md:p-16 overflow-hidden backdrop-blur-sm">
              <div className="absolute top-1/2 left-10 right-10 h-[0.5px] bg-[#2910E5]/20 hidden lg:block -translate-y-1/2" />
              
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
                      className="group flex flex-col bg-slate-950/80 border border-white/5 p-6 rounded-[2rem] hover:border-[#2910E5]/30 transition-all relative z-10"
                    >
                      <div className="flex items-center justify-between mb-10">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-[#2910E5]/20 transition-all">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-black text-[#2910E5] uppercase tracking-widest">Layer {node.step}</span>
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
                <span className="flex items-center gap-2 animate-pulse"><div className="w-1 h-1 rounded-full bg-emerald-500" /> Audit: 100% Pass</span>
                <span>Latency: +2ms (Inspection)</span>
                <span>Compliance: AES-GCM Encrypted</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECURITY PRINCIPLES ─────────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Left sticky */}
              <div className="lg:col-span-5">
                <motion.div {...fadeUp} className="sticky top-32">
                  <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-4 block">Security Philosophy</span>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[0.9] mb-8">
                    Air-Gapped.<br />Immutable.<br />
                    <span className="text-[#2910E5]">Zero-Trust.</span>
                  </h2>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed max-sm">
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
              <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-4 block">Industry Standards</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">Hardened for Mission-Critical Loads.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {verticals.map((v, i) => (
                <motion.div 
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between min-h-[300px] hover:shadow-2xl hover:shadow-[#2910E5]/5 transition-all"
                >
                  <div className={`w-12 h-1 rounded-full ${v.color === 'bg-slate-900' ? 'bg-[#2910E5]' : 'bg-slate-950'} mb-8`} />
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
                <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-4 block">Ready to Harden</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-[0.92]">
                  Audit your<br />infrastructure.
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

export default SecurityService;
