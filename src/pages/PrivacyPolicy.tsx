import { motion } from "framer-motion";
import { ArrowLeft, Shield, Check, Lock, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AstraventaLogo } from "@/components/AstraventaLogo";

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Aesthetic */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass-card border-b border-white/5 bg-black/40 backdrop-blur-xl"
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:bg-white/5">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <AstraventaLogo size="md" />
          <div className="w-24 hidden md:block" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-16 rounded-[2.5rem] border-white/5 bg-black/40 backdrop-blur-2xl shadow-2xl"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
              <Shield className="w-4 h-4" />
              Privacy Protection
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted-foreground font-light text-lg">
              Safeguarding your data since inception. Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="space-y-16">
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold shadow-lg">1</div>
                <h2 className="text-3xl font-bold tracking-tight">Information Collection</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg font-light group-hover:text-foreground transition-colors duration-300">
                Astraventa collects minimal data required to provide exceptional AI services:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Basic Contact Details",
                  "Company & Industry Info",
                  "Technical AI Requirements",
                  "Project Specific Metadata",
                  "Support Communication logs",
                  "Usage Analytics (Anonymized)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/20 transition-all">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold shadow-lg">2</div>
                <h2 className="text-3xl font-bold tracking-tight">How We Use Data</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Training custom AI models for your specific use-case",
                  "Optimizing automated workflows for maximum efficiency",
                  "Providing real-time technical support",
                  "Enhancing system security and threat detection",
                  "Communicating project updates and innovation news"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-muted-foreground text-lg font-light">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold shadow-lg">3</div>
                <h2 className="text-3xl font-bold tracking-tight">Data Security Protocol</h2>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Lock className="w-20 h-20" />
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  We employ military-grade AES-256 encryption for all data at rest and TLS 1.3 for data in transit.
                  Our AI models are architected with "privacy-by-design" principles, ensuring no personal
                  identifiable information (PII) is leaked during inference.
                </p>
              </div>
            </section>

            <div className="pt-16 border-t border-white/5">
              <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20 text-center">
                <h3 className="text-2xl font-bold mb-4">Your Privacy is Sacred</h3>
                <p className="text-muted-foreground mb-8 font-light text-lg">
                  Have concerns about how your data is handled? Our Data Protection Officer is ready to assist.
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                  <div className="flex items-center gap-3 text-secondary font-bold">
                    <Mail className="w-5 h-5" />
                    astraventaai@gmail.com
                  </div>
                  <div className="flex items-center gap-3 text-primary font-bold">
                    <Clock className="w-5 h-5" />
                    Response within 1 hour
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
