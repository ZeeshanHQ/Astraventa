import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, Bot, Zap, Cpu, Workflow, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "AI Chatbots",
    description: "Intelligent conversational AI that understands context and provides human-like responses.",
    features: ["Natural Language Processing", "Real-time Responses", "Multi-language Support", "Enterprise Security"],
    color: "#4A90E2"
  },
  {
    icon: Bot,
    title: "Web Automation",
    description: "Automate repetitive tasks with smart bots that learn and adapt to your workflows.",
    features: ["Workflow Automation", "API Integrations", "Data Processing", "Task Scheduling"],
    color: "#6BB6FF"
  },
  {
    icon: Zap,
    title: "AI Integrations",
    description: "Seamlessly integrate AI capabilities into your existing systems and applications.",
    features: ["API Development", "System Integration", "Data Synchronization", "Real-time Processing"],
    color: "#00D4FF"
  },
  {
    icon: Cpu,
    title: "Custom Development",
    description: "Tailored AI solutions built specifically for your unique business requirements.",
    features: ["Custom AI Models", "Bespoke Applications", "Scalable Architecture", "Quality Assurance"],
    color: "#8CC8FF"
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation that reduces manual work by 95%.",
    features: ["Business Process Automation", "Document Processing", "Email Automation", "Report Generation"],
    color: "#20B2AA"
  },
  {
    icon: MessageSquare,
    title: "Smart Analytics",
    description: "Transform data into actionable insights with AI-powered analytics and reporting.",
    features: ["Predictive Analytics", "Real-time Dashboards", "Data Visualization", "Trend Analysis"],
    color: "#FF6B9D"
  }
];

export const VerticalServiceCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge AI and automation services that transform how businesses operate and scale.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[600px] overflow-hidden">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;
              const isNext = index === (activeIndex + 1) % services.length;
              const isPrev = index === (activeIndex - 1 + services.length) % services.length;

              return (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    y: isActive ? 0 : isNext ? 100 : isPrev ? -100 : 0,
                    opacity: isActive ? 1 : isNext || isPrev ? 0.3 : 0,
                    scale: isActive ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <motion.div
                    className="glass-card p-8 rounded-3xl max-w-md w-full text-center"
                    style={{
                      border: `2px solid ${service.color}30`,
                      boxShadow: isActive ? `0 0 40px ${service.color}40` : `0 0 20px ${service.color}20`,
                    }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                        boxShadow: `0 0 30px ${service.color}40`,
                      }}
                      animate={{
                        rotate: isActive ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon className="w-10 h-10" style={{ color: service.color }} />
                    </motion.div>

                    <h3 className="text-3xl font-bold mb-4" style={{ color: service.color }}>
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center justify-center gap-2 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: service.color }}
                          />
                          <span className="text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      onClick={scrollToContact}
                      className="group"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}, ${service.color}CC)`,
                      }}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
