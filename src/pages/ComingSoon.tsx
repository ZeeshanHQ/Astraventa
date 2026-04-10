import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link, useNavigate } from "react-router-dom";
import { 
  Rocket, Mail, ArrowRight, Construction, Cpu, ShieldCheck, Activity, Radio,
  Bot, Zap, Globe, Workflow, Clock, Settings, Layers, Code2
} from "lucide-react";
import { cn } from "@/lib/utils";

const ComingSoon = () => {
  const navigate = useNavigate();
  
  const capabilities = [
    { icon: <Bot className="w-4 h-4" />, label: "AI Integration" },
    { icon: <Workflow className="w-4 h-4" />, label: "Autonomous Workflows" },
    { icon: <Code2 className="w-4 h-4" />, label: "Enterprise Architecture" },
    { icon: <ShieldCheck className="w-4 h-4" />, label: "Security-First Design" },
    { icon: <Zap className="w-4 h-4" />, label: "Sub-Second Latency" },
    { icon: <Layers className="w-4 h-4" />, label: "Scalable Infrastructure" },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-clip">
      <Header />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 pt-32 sm:pt-40 md:pt-48 pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          
          {/* Hero Section */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-display font-normal text-[11px] text-black/60 uppercase tracking-[0.15em]">
                MODULE_DEVELOPMENT
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-normal text-foreground uppercase leading-[1.08] tracking-[0.15em] text-[2.5rem] sm:text-[3.1rem] md:text-[3.7rem] lg:text-[4.1rem] mb-6"
            >
              Engineering <br />
              <span className="text-primary">In Progress.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[15px] md:text-[16px] text-[#4B5563] font-normal leading-[1.8] max-w-[560px] mx-auto mb-8"
            >
              Our engineering team is currently architecting this module for high-frequency enterprise environments. 
              We're deploying soon with sub-second autonomous performance and enterprise-grade security.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[14px] text-[#6B7280] font-normal leading-[1.75] max-w-[540px] mx-auto mb-12"
            >
              This module is being built with the same engineering standards that power our production systems. 
              Expect zero-downtime deployment and instant scalability.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <ShinyButton
                className="h-11 px-8 text-[12px] font-display font-medium uppercase tracking-[0.12em]"
                onClick={() => navigate('/contact')}
              >
                <span className="flex items-center gap-2">
                  Request Early Access <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </ShinyButton>
              
              <Button
                onClick={() => navigate('/services')}
                className="bg-transparent text-black border border-black/10 hover:bg-black/5"
              >
                Explore Active Tools
              </Button>
            </motion.div>

          {/* Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-2xl sm:text-3xl mb-4">
                Engineering <span className="text-primary">Standards.</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#4B5563] font-normal leading-[1.7] max-w-[560px] mx-auto">
                Built with enterprise-grade architecture and autonomous-first principles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="p-6 rounded-2xl border border-black/[0.07] bg-white hover:bg-black/[0.01] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/10 transition-colors">
                    {capability.icon}
                  </div>
                  <h3 className="font-display font-normal text-[14px] text-black uppercase tracking-[0.15em] mb-2">
                    {capability.label}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-[1.6]">
                    Enterprise-grade implementation with zero-compromise architecture.
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center py-16 border-t border-black/[0.06]"
          >
            <div className="flex items-center justify-center gap-2 text-[13px] text-black/40 font-display font-normal uppercase tracking-[0.2em] mb-4">
              <Clock className="w-4 h-4" />
              ESTIMATED_DEPLOYMENT: Q2 2026
            </div>
            <div className="flex items-center justify-center gap-2 text-[11px] text-black/30 font-display font-normal uppercase tracking-[0.15em]">
              <ShieldCheck className="w-3 h-3" />
              ENTERPRISE_SECURITY_COMPLIANT • 99.9%_UPTIME_SLA
            </div>
          </motion.div>
        </div>
      </div>
      </main>

      <Footer />
    </div>
  );
};

export default ComingSoon;
