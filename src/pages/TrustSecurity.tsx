import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, EyeOff, Server, Terminal, FileCheck, Search, Zap, Globe, Cpu } from "lucide-react";

const TrustSecurity = () => {
  const compliance = [
    { title: "SOC 2 Type II", status: "Certified", description: "Rigorous independent auditing of our security, availability, and confidentiality controls.", icon: FileCheck },
    { title: "GDPR / CCPA", status: "Compliant", description: "Global data privacy standards enforced across all autonomous node deployments.", icon: Globe },
    { title: "ISO 27001", status: "Aligned", description: "Information security management systems following international best practices.", icon: ShieldCheck },
    { title: "HIPAA ELIGIBLE", status: "Hardened", description: "Configurable BAA for industrial-healthcare AI orchestration layers.", icon: Cpu }
  ];

  const pillars = [
    {
      title: "Hardened AI Isolation",
      description: "Every LLM instance runs in a zero-persistence container. No training on client data, no leakage across tenants.",
      icon: Lock,
      tags: ["Ephemeral State", "Identity Guard"]
    },
    {
      title: "End-to-End Encryption",
      description: "Data is encrypted at-rest and in-transit using post-quantum resistant cryptographic channels.",
      icon: EyeOff,
      tags: ["AES-256-GCM", "Quantum-Safe"]
    },
    {
      title: "Zero-Trust Architecture",
      description: "Continuous verification of every request, regardless of origin. Identity-aware proxying by default.",
      icon: Terminal,
      tags: ["RBAC", "MFA-Mandatory"]
    },
    {
      title: "Global Threat Intel",
      description: "Automated mitigation of DDoS and injection attacks via our planetary scale edge security layer.",
      icon: Search,
      tags: ["Real-time WAF", "Heuristic Shield"]
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
        <section className="relative max-w-[1400px] mx-auto mb-32">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,0,0,0.03)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="max-w-4xl pt-20">
            <motion.div {...fadeUp} className="mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] leading-none">Security Sequence // Activated</span>
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-950 tracking-tight leading-[0.9] mb-10 uppercase italic">
                Hardened <br />
                <span className="text-slate-300">Integrity.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-tight max-w-2xl">
                Astraventa's security architecture is built on the principle of absolute distrust. We harden the autonomous enterprise with bank-grade protocols and planetary scale resilience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── COMPLIANCE GRID ─────────────────────────────────────────────── */}
        <section className="max-w-[1400px] mx-auto py-24 mb-32 border-t border-slate-100">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliance.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50/50 border border-slate-100 rounded-[2rem] hover:bg-white hover:border-[#0066FF]/30 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <item.icon className="w-5 h-5 text-slate-900" />
                  </div>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 uppercase tracking-widest">{item.status}</span>
                </div>
                <h4 className="text-xl font-black text-slate-950 mb-3 uppercase italic leading-none">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── CORE PILLARS ────────────────────────────────────────────────── */}
        <section className="max-w-[1400px] mx-auto py-32 bg-slate-950 rounded-[4rem] px-12 relative overflow-hidden text-white mb-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          
          <div className="relative z-10">
            <motion.div {...fadeUp} className="max-w-2xl mb-20">
              <div className="text-[10px] font-black text-[#0066FF] uppercase tracking-[0.3em] mb-6">Defense Protocols</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8 uppercase italic">
                Hardening <br />
                <span className="text-slate-600 font-normal">Matrices.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#0066FF]/20 group-hover:border-[#0066FF]/40 transition-all duration-500">
                    <pillar.icon className="w-6 h-6 text-[#0066FF]" />
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight uppercase italic leading-none">{pillar.title}</h4>
                  <p className="text-slate-400 font-medium leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-black text-white/40 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INCIDENT REPORTING / CTA ────────────────────────────────────── */}
        <section className="max-w-[1200px] mx-auto py-24 text-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-black text-emerald-700 uppercase tracking-widest leading-none">Status: Zero Breaches Recorded</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-12 tracking-tight leading-none uppercase italic">
              Rigorous Security <br />
              <span className="text-slate-300">for Visionary Scale.</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="h-14 px-8 bg-slate-900 text-white rounded-2xl font-black tracking-widest text-[11px] uppercase transition-all shadow-xl hover:bg-[#0066FF]">
                Download Compliance Pack
              </button>
              <button className="h-14 px-8 border border-slate-200 rounded-2xl font-black tracking-widest text-[11px] uppercase transition-all hover:bg-slate-50">
                Report Vulnerability
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrustSecurity;
