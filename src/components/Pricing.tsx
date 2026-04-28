import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Check, ArrowRight, Cpu, Bot, Zap, Shield, Globe, Database, Code, Palette, Smartphone, Server, MessageSquare, Brain, Target, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Cpu,
    name: "Custom AI Automation",
    startingPrice: "$2,000",
    description: "End-to-end autonomous agent development and deployment",
    features: [
      "Custom LLM fine-tuning",
      "Multi-agent orchestration",
      "RAG pipeline implementation",
      "Real-time API integrations",
      "Performance monitoring dashboard"
    ]
  },
  {
    icon: Palette,
    name: "UI/UX Design",
    startingPrice: "$1,500",
    description: "Premium interface design with conversion focus",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Design system creation",
      "Responsive layouts",
      "Animation & micro-interactions"
    ]
  },
  {
    icon: Code,
    name: "Web Development",
    startingPrice: "$3,000",
    description: "Full-stack web applications with modern frameworks",
    features: [
      "React/Next.js development",
      "TypeScript implementation",
      "Database architecture",
      "API development",
      "Performance optimization"
    ]
  },
  {
    icon: Smartphone,
    name: "Mobile App Development",
    startingPrice: "$5,000",
    description: "Native and cross-platform mobile applications",
    features: [
      "React Native / Flutter",
      "iOS & Android deployment",
      "Push notifications",
      "Offline functionality",
      "App store optimization"
    ]
  },
  {
    icon: Server,
    name: "Backend Engineering",
    startingPrice: "$2,500",
    description: "Scalable server architecture and API development",
    features: [
      "Node.js / Python / Go",
      "Microservices architecture",
      "Database optimization",
      "Authentication systems",
      "Cloud infrastructure setup"
    ]
  },
  {
    icon: MessageSquare,
    name: "AI Chatbots",
    startingPrice: "$1,500",
    description: "Intelligent conversational AI for customer support",
    features: [
      "Natural language processing",
      "Multi-channel deployment",
      "Knowledge base integration",
      "Sentiment analysis",
      "24/7 automated responses"
    ]
  },
  {
    icon: Brain,
    name: "Machine Learning Solutions",
    startingPrice: "$4,000",
    description: "Custom ML models for predictive analytics",
    features: [
      "Data preprocessing",
      "Model training & tuning",
      "Deployment & monitoring",
      "Feature engineering",
      "Explainable AI dashboards"
    ]
  },
  {
    icon: Target,
    name: "B2B Lead Generation",
    startingPrice: "$1,000",
    description: "Automated outreach and prospect qualification",
    features: [
      "Lead scraping & enrichment",
      "Email sequence automation",
      "CRM integration",
      "Performance analytics",
      "A/B testing capabilities"
    ]
  },
  {
    icon: BarChart,
    name: "Data Analytics & Reporting",
    startingPrice: "$2,000",
    description: "Business intelligence and data visualization",
    features: [
      "Custom dashboards",
      "Real-time analytics",
      "Predictive insights",
      "Data pipeline setup",
      "Automated reporting"
    ]
  },
  {
    icon: Shield,
    name: "Security & Compliance",
    startingPrice: "$3,000",
    description: "Enterprise-grade security implementations",
    features: [
      "Security audits",
      "Penetration testing",
      "Compliance frameworks (GDPR, SOC2)",
      "Encryption implementation",
      "Access control systems"
    ]
  },
  {
    icon: Database,
    name: "Cloud Infrastructure",
    startingPrice: "$2,500",
    description: "Scalable cloud architecture and DevOps",
    features: [
      "AWS/GCP/Azure setup",
      "CI/CD pipelines",
      "Container orchestration",
      "Auto-scaling configuration",
      "Disaster recovery planning"
    ]
  },
  {
    icon: Globe,
    name: "Enterprise Integration",
    startingPrice: "$4,000",
    description: "Seamless integration with existing enterprise systems",
    features: [
      "ERP/CRM integrations",
      "API gateway setup",
      "Data migration",
      "Legacy system modernization",
      "Custom middleware development"
    ]
  }
];

export const Pricing = () => {
 return (
 <section className="py-20 md:py-32 relative bg-white">
 {/* Background Elements */}
 <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
 
 <div className="container relative z-10 mx-auto px-4 sm:px-6">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="text-center mb-16 md:mb-24"
 >
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
   <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
   <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Pricing</span>
 </div>
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
   Elite Services for <span className="text-[hsl(var(--primary))]">Every Agency</span>
 </h2>
 <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
   From AI automation to full-stack development — we deliver enterprise-grade solutions tailored to your specific needs.
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
 {services.map((service, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: index * 0.05 }}
 whileHover={{ y: -8, transition: { duration: 0.3 } }}
 className="relative group"
 >
 <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300">
 {/* Icon */}
 <div className="w-14 h-14 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all">
   <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-all" />
 </div>

 {/* Service Name */}
 <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
   {service.name}
 </h3>

 {/* Description */}
 <p className="text-slate-500 text-sm leading-relaxed mb-6">
   {service.description}
 </p>

 {/* Starting Price - Elite Typography */}
 <div className="mb-6 pb-6 border-b border-slate-100">
   <p className="text-sm text-slate-400 font-medium mb-1">Starting at</p>
   <p className="text-3xl font-black text-slate-900 tracking-tight">
     {service.startingPrice}
   </p>
 </div>

 {/* Features */}
 <div className="space-y-3 mb-8">
   {service.features.map((feature, featureIndex) => (
     <div key={featureIndex} className="flex items-start gap-3">
       <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
       <span className="text-sm text-slate-600 leading-relaxed">{feature}</span>
     </div>
   ))}
 </div>

 {/* CTA Button */}
 <Link to="/contact">
   <Button className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all group-hover:bg-primary">
     Get Started <ArrowRight className="w-4 h-4" />
   </Button>
 </Link>
 </div>
 </motion.div>
 ))}
 </div>

 {/* Bottom CTA */}
 <motion.div
   initial={{ opacity: 0, y: 20 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true }}
   transition={{ duration: 0.8, delay: 0.4 }}
   className="mt-20 text-center"
 >
   <div className="inline-flex flex-wrap items-center justify-center gap-6 md:gap-8 px-6 py-4 rounded-full bg-slate-50 border border-slate-200">
     <div className="flex items-center gap-2">
       <Zap className="w-5 h-5 text-primary" />
       <span className="text-sm font-bold text-slate-700">Fast Delivery</span>
     </div>
     <div className="w-1 h-1 rounded-full bg-slate-300" />
     <div className="flex items-center gap-2">
       <Shield className="w-5 h-5 text-primary" />
       <span className="text-sm font-bold text-slate-700">Enterprise Security</span>
     </div>
     <div className="w-1 h-1 rounded-full bg-slate-300" />
     <div className="flex items-center gap-2">
       <Bot className="w-5 h-5 text-primary" />
       <span className="text-sm font-bold text-slate-700">AI-Powered</span>
     </div>
   </div>
 </motion.div>
 </div>
 </section>
 );
};
