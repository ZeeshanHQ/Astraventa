import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, EyeOff, Server, Terminal, FileCheck, Search, Zap, Globe, Cpu, Activity, Shield, AlertTriangle, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const TrustSecurity = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Real-time security metrics simulation
  const securityMetrics = [
    { label: "Threats Blocked", value: "2.4M", change: "+12%", icon: Shield },
    { label: "Uptime SLA", value: "99.99%", change: "+0.01%", icon: Activity },
    { label: "Security Score", value: "A+", change: "Stable", icon: CheckCircle2 },
    { label: "Response Time", value: "<200ms", change: "-15%", icon: Zap }
  ];

  const compliance = [
    { title: "SOC 2 Type II", status: "Certified", description: "Rigorous independent auditing of our security, availability, and confidentiality controls with zero exceptions.", icon: FileCheck, level: "Critical" },
    { title: "GDPR / CCPA", status: "Compliant", description: "Global data privacy standards enforced across all autonomous node deployments with real-time monitoring.", icon: Globe, level: "High" },
    { title: "ISO 27001", status: "Aligned", description: "Information security management systems following international best practices and continuous improvement.", icon: ShieldCheck, level: "High" },
    { title: "HIPAA ELIGIBLE", status: "Hardened", description: "Configurable BAA for industrial-healthcare AI orchestration layers with military-grade encryption.", icon: Cpu, level: "Critical" }
  ];

  const pillars = [
    {
      title: "Hardened AI Isolation",
      description: "Every LLM instance runs in a zero-persistence container with hardware-level isolation. No training on client data, no leakage across tenants, guaranteed by design.",
      icon: Lock,
      tags: ["Ephemeral State", "Identity Guard", "Hardware Root of Trust"],
      status: "Active",
      coverage: "100%"
    },
    {
      title: "Quantum-Resistant Encryption",
      description: "Data is encrypted at-rest and in-transit using post-quantum resistant cryptographic channels with lattice-based cryptography future-proofing.",
      icon: EyeOff,
      tags: ["AES-256-GCM", "Quantum-Safe", "Lattice-Based"],
      status: "Enhanced",
      coverage: "100%"
    },
    {
      title: "Zero-Trust Architecture",
      description: "Continuous verification of every request, regardless of origin. Identity-aware proxying with behavioral biometrics and contextual access control.",
      icon: Terminal,
      tags: ["RBAC", "MFA-Mandatory", "Behavioral Analytics"],
      status: "Enforced",
      coverage: "100%"
    },
    {
      title: "Global Threat Intelligence",
      description: "Automated mitigation of DDoS and injection attacks via our planetary scale edge security layer with AI-powered threat hunting.",
      icon: Search,
      tags: ["Real-time WAF", "Heuristic Shield", "AI Hunting"],
      status: "Monitoring",
      coverage: "Global"
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-24 px-6 overflow-hidden">
        {/* ─── HERO SECTION ─────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-lg mb-8">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Security Status: All Systems Operational</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-8">
                Enterprise-Grade
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Security.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-tight max-w-4xl mx-auto mb-12">
                Astraventa's security architecture combines military-grade encryption, zero-trust principles, and real-time threat intelligence to protect your most valuable assets.
              </p>
            </motion.div>

            {/* Live Security Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
            >
              {securityMetrics.map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveMetric(i)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        metric.change.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 
                        metric.change.startsWith('-') ? 'bg-red-100 text-red-700' : 
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                    <div className="text-2xl font-black text-slate-900 mb-1">{metric.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{metric.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-black text-sm uppercase tracking-wider hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Request Security Audit
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-800 rounded-full font-black text-sm uppercase tracking-wider border border-slate-200 hover:bg-slate-50 transition-all duration-300">
                View Documentation
              </button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-300 rounded-full mt-2" />
            </div>
          </motion.div>
        </section>

        {/* ─── COMPLIANCE GRID ─────────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest mb-6">
                <ShieldCheck className="w-4 h-4" />
                COMPLIANCE & CERTIFICATIONS
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Industry-Standard
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications.</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Rigorous third-party audits and continuous compliance monitoring ensure your data meets the highest security standards globally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {compliance.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-500 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500">
                          <Icon className="w-6 h-6 text-slate-700 group-hover:text-blue-600" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                            item.level === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                          }`}>
                            {item.level}
                          </span>
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-600">
                            {item.status}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span className="font-semibold">Verified & Active</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── CORE PILLARS ────────────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-900 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-black uppercase tracking-widest mb-6">
                <Shield className="w-4 h-4" />
                SECURITY ARCHITECTURE
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Advanced Protection
                <br />
                <span className="text-slate-400">Layers.</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Multi-layered security architecture combining cutting-edge encryption, zero-trust principles, and AI-powered threat intelligence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-8">
                        <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-xs font-black px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 uppercase tracking-widest">
                            {pillar.status}
                          </span>
                          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/10 text-white/80">
                            {pillar.coverage}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-black text-white mb-4 leading-tight">{pillar.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {pillar.tags.map((tag, j) => (
                          <span 
                            key={j} 
                            className="text-xs font-black text-white/60 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 hover:text-white/80 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── ADVANCED SECURITY METRICS ──────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeUp} className="text-center mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-6">
                <Activity className="w-4 h-4" />
                REAL-TIME SECURITY METRICS
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Live Threat
                <br />
                <span className="text-emerald-400">Intelligence.</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Continuous monitoring and real-time threat detection keeping your infrastructure secure 24/7.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Threat Detection Map */}
              <motion.div
                {...fadeUp}
                className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-white">Global Threat Map</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-semibold">LIVE</span>
                  </div>
                </div>
                <div className="bg-slate-950 rounded-2xl p-6 h-64 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="relative z-10 text-center">
                    <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-slate-400 text-sm">Active threat monitoring across 150+ global nodes</p>
                  </div>
                </div>
              </motion.div>

              {/* Security Score */}
              <motion.div
                {...fadeUp}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-3xl p-8 border border-emerald-500/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-black text-white">Security Score</h3>
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black text-emerald-400 mb-4">A+</div>
                  <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
                    <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-3 rounded-full" style={{ width: '95%' }} />
                  </div>
                  <p className="text-slate-400 text-sm">Industry-leading security posture</p>
                </div>
              </motion.div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Threats Blocked Today", value: "47,892", change: "+15%", icon: Shield },
                { label: "Active Incidents", value: "0", change: "-100%", icon: AlertTriangle },
                { label: "Response Time", value: "<50ms", change: "-25%", icon: Zap },
                { label: "Systems Protected", value: "2,847", change: "+8%", icon: Server }
              ].map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-5 h-5 text-slate-400" />
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        metric.change.startsWith('+') ? 'bg-emerald-500/20 text-emerald-400' : 
                        metric.change.startsWith('-') ? 'bg-blue-500/20 text-blue-400' : 
                        'bg-slate-700 text-slate-400'
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                    <div className="text-2xl font-black text-white mb-1">{metric.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        {/* ─── ENHANCED CTA SECTION ──────────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div {...fadeUp} className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-8">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <span>Zero Breaches Recorded Since Inception</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                Ready to Fortify Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Infrastructure?</span>
              </h2>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
                Join enterprises that trust Astraventa's military-grade security to protect their most valuable assets and maintain regulatory compliance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-black text-sm uppercase tracking-wider hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                >
                  Request Security Audit
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-black text-sm uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Download Compliance Pack
                </motion.button>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {[
                  { label: "Fortune 500 Clients", value: "150+" },
                  { label: "Data Protected", value: "10PB+" },
                  { label: "Uptime SLA", value: "99.99%" },
                  { label: "Security Score", value: "A+" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default TrustSecurity;
