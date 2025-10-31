import { motion } from "framer-motion";
import { Brain, Bot, Zap, Cpu, Workflow, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceDetails = [
  {
    id: "ai-chatbots",
    icon: Brain,
    title: "AI Chatbots",
    subtitle: "Intelligent Conversational AI",
    description: "Transform customer interactions with AI-powered chatbots that understand context, provide instant responses, and deliver exceptional user experiences.",
    features: [
      "Natural Language Processing",
      "Real-time Responses",
      "Multi-language Support",
      "Enterprise Security",
      "Custom Training",
      "Analytics Dashboard"
    ],
    benefits: [
      "95% faster response times",
      "24/7 customer support",
      "Reduced operational costs",
      "Improved customer satisfaction"
    ]
  },
  {
    id: "web-automation",
    icon: Bot,
    title: "Web Automation",
    subtitle: "Smart Process Automation",
    description: "Automate repetitive tasks with intelligent bots that learn and adapt to your workflows, boosting productivity and reducing manual errors.",
    features: [
      "Workflow Automation",
      "API Integrations",
      "Data Processing",
      "Task Scheduling",
      "Error Handling",
      "Performance Monitoring"
    ],
    benefits: [
      "80% reduction in manual work",
      "99.9% accuracy rate",
      "Scalable solutions",
      "ROI within 3 months"
    ]
  },
  {
    id: "ai-integrations",
    icon: Zap,
    title: "AI Integrations",
    subtitle: "Seamless AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and applications with our comprehensive integration solutions.",
    features: [
      "API Development",
      "System Integration",
      "Data Synchronization",
      "Real-time Processing",
      "Custom Connectors",
      "Monitoring & Analytics"
    ],
    benefits: [
      "Faster time to market",
      "Reduced development costs",
      "Enhanced system capabilities",
      "Future-proof architecture"
    ]
  },
  {
    id: "custom-development",
    icon: Cpu,
    title: "Custom Development",
    subtitle: "Tailored AI Solutions",
    description: "Get AI solutions built specifically for your unique business requirements with our custom development expertise.",
    features: [
      "Custom AI Models",
      "Bespoke Applications",
      "Scalable Architecture",
      "Quality Assurance",
      "Documentation",
      "Ongoing Support"
    ],
    benefits: [
      "Perfect fit for your needs",
      "Competitive advantage",
      "Long-term partnership",
      "Dedicated support team"
    ]
  },
  {
    id: "process-automation",
    icon: Workflow,
    title: "Process Automation",
    subtitle: "Intelligent Workflow Automation",
    description: "Streamline operations with intelligent automation that reduces manual work by 95% and increases efficiency across your organization.",
    features: [
      "Business Process Automation",
      "Document Processing",
      "Email Automation",
      "Data Entry Automation",
      "Report Generation",
      "Compliance Monitoring"
    ],
    benefits: [
      "95% reduction in manual tasks",
      "Improved accuracy",
      "Faster processing times",
      "Cost savings up to 60%"
    ]
  },
  {
    id: "smart-analytics",
    icon: MessageSquare,
    title: "Smart Analytics",
    subtitle: "AI-Powered Insights",
    description: "Transform data into actionable insights with AI-powered analytics and reporting that drive informed business decisions.",
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Data Visualization",
      "Trend Analysis",
      "Custom Reports",
      "Automated Insights"
    ],
    benefits: [
      "Data-driven decisions",
      "Predictive capabilities",
      "Real-time monitoring",
      "Competitive intelligence"
    ]
  }
];

export const ServiceSections = () => {
  return (
    <div className="space-y-32">
      {serviceDetails.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.section
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="py-32 relative"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side - Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                        {service.title}
                      </h2>
                      <p className="text-xl text-muted-foreground">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="group"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>

                {/* Right Side - Visual */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="glass-card p-12 rounded-3xl h-[500px] flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow-lg"
                    >
                      <Icon className="w-16 h-16 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
};
