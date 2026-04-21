import { motion } from "framer-motion";
import { TerminalSquare, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ShinyButton } from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "01",
    title: "Agentic Systems Architecture",
    description: "Custom LLM pipelines, autonomous workflows, and intelligent automation systems tailored for enterprise operations."
  },
  {
    id: "02",
    title: "High-Velocity Infrastructure",
    description: "Scalable microservices built for maximum throughput, zero downtime, and rock-solid reliability."
  },
  {
    id: "03",
    title: "Cognitive Workflow Engineering",
    description: "Reimagining operational processes with cognitive AI layers to drastically reduce manual overhead."
  },
  {
    id: "04",
    title: "Venture Design & MVP Launch",
    description: "End-to-end product design and rapid engineering to take your ideas from zero to a market-ready prototype."
  },
  {
    id: "05",
    title: "Proprietary Intelligence Layers",
    description: "Integrating bespoke machine learning models into your core product to create defensible data moats."
  },
  {
    id: "06",
    title: "Strategic Product Experience",
    description: "Crafting premium user interfaces and cinematic experiences that elevate your brand and drive engagement."
  }
];

export const ProfessionalServices = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F8F9FA] relative">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap');`}
      </style>
      
      {/* Background blobs isolated to prevent overflow breaking sticky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply opacity-70" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[150px] mix-blend-multiply opacity-50" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-start">
        
        {/* Right: Sticky Section Header */}
        <div className="w-full lg:w-[42%] lg:sticky lg:top-24 pt-4 lg:pt-10">
          <div className="flex flex-col items-start text-left w-full lg:pr-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.05] shadow-sm mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-display font-medium text-black/80 uppercase tracking-[0.2em]">Engineering_Disciplines</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-normal text-black uppercase tracking-[0.1em] text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[3rem] flex flex-col gap-2 mb-8 w-full"
            >
              <span className="leading-tight whitespace-nowrap">Architecting</span>
              <span className="text-primary leading-tight">The Extraordinary.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[15px] sm:text-[16px] text-[#4B5563] font-light leading-relaxed max-w-[420px] mb-10"
              style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
            >
              We don't just write code. We engineer resilient, highly-available systems that serve as the foundation for global enterprises.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full flex justify-start"
            >
              <ShinyButton 
                className="h-14 px-8 rounded-full text-[12px] font-display font-medium uppercase tracking-[0.15em] flex items-center gap-2.5 shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                onClick={() => navigate('/contact')}
              >
                <span className="relative z-10 flex items-center gap-2.5 pt-[2px]">
                  Consult an Architect
                  <TerminalSquare className="w-4 h-4" />
                </span>
              </ShinyButton>
            </motion.div>
          </div>
        </div>

        {/* Left: Scrolling Glass Cards */}
        <div className="w-full lg:w-[58%] flex flex-col gap-6 lg:gap-8 pb-12">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                type: "spring", 
                stiffness: 80, 
                damping: 20 
              }}
              className="relative p-8 sm:p-10 lg:p-12 rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.9)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.04)"
              }}
            >
              {/* Internal subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]" />

              {/* Numbering */}
              <div 
                className="absolute top-6 left-8 text-[60px] lg:text-[80px] leading-none text-black/[0.03] select-none transition-transform duration-700 group-hover:translate-x-2 group-hover:text-black/[0.05]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {service.id}
              </div>

              {/* Top Right Arrow Icon for Hover Interaction */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-black/10 bg-white/50 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:rotate-45 group-hover:scale-110 shadow-sm">
                <ArrowUpRight className="w-5 h-5 text-black/50 group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full lg:max-w-[85%] mt-16 lg:mt-20">
                <h3 
                  className="text-xl sm:text-2xl lg:text-3xl text-black uppercase tracking-[0.15em] mb-4 lg:mb-6 leading-tight group-hover:text-primary transition-colors duration-500 pr-8"
                  style={{ fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-[15px] sm:text-[16px] text-[#4B5563] font-light leading-relaxed"
                  style={{ fontFamily: "'Muli', 'Mulish', sans-serif" }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
