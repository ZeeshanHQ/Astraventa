import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AstraventaLogo } from "@/components/AstraventaLogo";

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Aesthetic */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
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
          <div className="w-24 hidden md:block" /> {/* Spacer for balance */}
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <BadgeCheck className="w-4 h-4" />
              Legal Documents
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-muted-foreground font-light text-lg">
              Updated on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="space-y-16">
            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">1</div>
                <h2 className="text-3xl font-bold tracking-tight">Acceptance of Terms</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg font-light group-hover:text-foreground transition-colors duration-300">
                By accessing and using Astraventa's AI automation services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">2</div>
                <h2 className="text-3xl font-bold tracking-tight">Description of Service</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg font-light group-hover:text-foreground transition-colors duration-300">
                Astraventa provides premium AI-powered automation solutions including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "AI Chatbots & Assistants",
                  "Web Process Automation",
                  "Custom Model Integration",
                  "Smart Data Analytics",
                  "Cloud Infrastructure",
                  "Strategic AI Consulting"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">3</div>
                <h2 className="text-3xl font-bold tracking-tight">User Responsibilities</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Provide accurate business data",
                  "Non-interference with AI systems",
                  "Respect for intellectual property",
                  "Secure handling of API keys",
                  "Lawful use of automated tools"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-muted-foreground text-lg font-light">
                    <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">4</div>
                <h2 className="text-3xl font-bold tracking-tight">Intellectual Property</h2>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                <p className="text-muted-foreground leading-relaxed text-lg font-light italic">
                  "All AI architectures, custom designs, and automated workflows developed by Astraventa remain the
                  intellectual property of the company unless explicitly transferred in writing via a project-specific SLA."
                </p>
              </div>
            </section>

            <div className="pt-16 border-t border-white/5">
              <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center">
                <h3 className="text-2xl font-bold mb-4">Questions about our terms?</h3>
                <p className="text-muted-foreground mb-8 font-light">
                  Our legal and support teams are available 24/7 to clarify any queries.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <div className="flex items-center justify-center gap-3 text-primary font-bold">
                    <Mail className="w-5 h-5" />
                    astraventaai@gmail.com
                  </div>
                  <div className="flex items-center justify-center gap-3 text-secondary font-bold">
                    <Phone className="w-5 h-5" />
                    +92 328 4529264
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
