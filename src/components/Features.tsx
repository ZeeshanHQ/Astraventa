import { motion } from "framer-motion";
import { Brain, Bot, Zap, Shield, Database, GitBranch, Layers, Cpu, MessageSquare, Workflow } from "lucide-react";
import { TiltCard } from "./TiltCard";

const features = [
 {
 icon: Brain,
 title: "AI Chatbots",
 description: "Intelligent conversational AI that understands context and provides human-like responses.",
 sectionId: "ai-chatbots",
 },
 {
 icon: Bot,
 title: "Web Automation",
 description: "Automate repetitive tasks with smart bots that learn and adapt to your workflows.",
 sectionId: "web-automation",
 },
 {
 icon: Zap,
 title: "AI Integrations",
 description: "Seamlessly integrate AI capabilities into your existing systems and applications.",
 sectionId: "ai-integrations",
 },
 {
 icon: Cpu,
 title: "Custom Development",
 description: "Tailored AI solutions built specifically for your unique business requirements.",
 sectionId: "custom-development",
 },
 {
 icon: Workflow,
 title: "Process Automation",
 description: "Streamline operations with intelligent automation that reduces manual work by 95%.",
 sectionId: "process-automation",
 },
 {
 icon: MessageSquare,
 title: "Smart Analytics",
 description: "Transform data into actionable insights with AI-powered analytics and reporting.",
 sectionId: "smart-analytics",
 },
];

export const Features = () => {
 const scrollToSection = (sectionId: string) => {
 const element = document.getElementById(sectionId);
 if (element) {
 element.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }
 };

 return (
  <section id="services" className="py-32 relative bg-white">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-white" />
 
  <div className="container relative z-10 mx-auto px-4">
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-center mb-20"
  >
  <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter uppercase leading-none">
  Our <span className="text-[hsl(var(--primary))]">AI Solutions</span>
  </h2>
  <p className="text-xl text-black/50 max-w-2xl mx-auto font-black uppercase tracking-tight">
  Cutting-edge AI and automation services that transform how businesses operate and scale.
  </p>
  </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
  {features.map((feature, index) => {
  const Icon = feature.icon;
  return (
  <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  whileHover={{ y: -8, transition: { duration: 0.3 } }}
  className="group"
  >
  <div onClick={() => scrollToSection(feature.sectionId)}>
  <TiltCard className="h-full">
  <div className="bg-black/[0.02] p-8 rounded-sm h-full smooth-transition border border-border/50 hover:border-[hsl(var(--primary))]/30 shadow-sm cursor-pointer">
  <div className="w-14 h-14 rounded-sm bg-black flex items-center justify-center mb-6">
  <Icon className="w-7 h-7 text-[hsl(var(--primary))]" />
  </div>
  <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter group-hover:text-[hsl(var(--primary))] transition-colors">
  {feature.title}
  </h3>
  <p className="text-black/50 leading-relaxed font-black uppercase text-xs tracking-tight">
  {feature.description}
  </p>
  </div>
  </TiltCard>
  </div>
  </motion.div>
  );
  })}
  </div>
 </div>
 </section>
 );
};
