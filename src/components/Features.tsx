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
    <section id="services" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                    <div className="glass-card p-8 rounded-2xl h-full smooth-transition hover:shadow-glow hover:border-primary/50 border border-transparent cursor-pointer">
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 glow-pulse">
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 group-hover:gradient-text smooth-transition">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
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
