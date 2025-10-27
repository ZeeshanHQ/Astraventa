import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Zap, 
  Code, 
  BarChart3, 
  Globe, 
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp
} from "lucide-react";
import { memo } from "react";
import { OptimizedImage } from "./OptimizedImage";
import { useTiltEffect } from "@/hooks/usePerformance";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    description: "Intelligent conversational AI that understands context, handles complex queries, and provides 24/7 customer support.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Natural Language Processing",
      "Multi-language Support", 
      "Integration with CRM/ERP",
      "Analytics & Insights",
      "Custom Training & Fine-tuning"
    ],
    delivery: "2-4 weeks",
    clients: "150+ deployed",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Web Automation & RPA",
    description: "Automate repetitive tasks, data extraction, form filling, and workflow processes to save 80% of manual work.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Browser Automation",
      "Data Scraping & Extraction",
      "Form Auto-filling",
      "Workflow Automation",
      "API Integration"
    ],
    delivery: "1-3 weeks", 
    clients: "200+ automations",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Code,
    title: "Custom AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and applications with custom APIs and SDKs.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Custom API Development",
      "Legacy System Integration",
      "Real-time Data Processing",
      "Scalable Architecture",
      "24/7 Monitoring"
    ],
    delivery: "3-6 weeks",
    clients: "100+ integrations",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Smart Analytics & Insights",
    description: "Transform your data into actionable insights with AI-powered analytics, predictive modeling, and business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Custom Reports",
      "Data Visualization",
      "Trend Analysis"
    ],
    delivery: "2-4 weeks",
    clients: "80+ dashboards",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Globe,
    title: "Web Development & E-commerce",
    description: "Modern, responsive websites and e-commerce platforms with AI-powered features and seamless user experience.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Responsive Design",
      "E-commerce Integration",
      "SEO Optimization",
      "Performance Optimization",
      "Mobile-First Approach"
    ],
    delivery: "4-8 weeks",
    clients: "120+ websites",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "AI Security & Compliance",
    description: "Secure your AI systems with enterprise-grade security, compliance monitoring, and data protection solutions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      "Data Encryption",
      "Access Control",
      "Compliance Monitoring",
      "Security Audits",
      "GDPR/CCPA Compliance"
    ],
    delivery: "2-3 weeks",
    clients: "50+ secured",
    color: "from-red-500 to-pink-500"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We analyze your business needs, current systems, and goals to create a tailored solution strategy.",
    duration: "1-2 days"
  },
  {
    step: "02", 
    title: "Solution Design",
    description: "Our experts design the optimal AI solution architecture and create detailed implementation plans.",
    duration: "3-5 days"
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build, test, and refine your AI solution with rigorous quality assurance and performance optimization.",
    duration: "2-6 weeks"
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "We deploy your solution, provide comprehensive training, and ensure smooth integration with your systems.",
    duration: "1-2 weeks"
  },
  {
    step: "05",
    title: "Support & Optimization",
    description: "Ongoing monitoring, maintenance, and continuous improvement to maximize your ROI and performance.",
    duration: "Ongoing"
  }
];

const ServiceCard = memo(({ service, index }: {
  service: any;
  index: number;
}) => {
  const Icon = service.icon;
  const { handleMouseMove, handleMouseLeave, tiltStyle, getTiltTransform } = useTiltEffect();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={(e) => handleMouseMove(e, index)}
      onMouseLeave={handleMouseLeave}
      style={{ 
        ...tiltStyle,
        transform: getTiltTransform(index)
      }}
    >
      <Card className="h-full glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow-lg overflow-hidden">
        {/* Service Image */}
        <div className="relative h-48 overflow-hidden">
          <OptimizedImage
            src={service.image}
            alt={service.title}
            width={400}
            height={192}
            className="w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Features */}
          <div className="space-y-3">
            {service.features.map((feature: string, featureIndex: number) => (
              <div key={featureIndex} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="pt-4 border-t border-border/50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Delivery Time:</span>
              <span className="font-semibold">{service.delivery}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Successfully Deployed:</span>
              <span className="font-semibold text-green-500">{service.clients}</span>
            </div>
          </div>

          <Button 
            className="w-full group" 
            variant="outline"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
});

export const ProfessionalServices = () => {

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Zap className="w-4 h-4 mr-2" />
            Professional Services
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            AI Solutions That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From AI chatbots to web automation, we deliver enterprise-grade solutions that transform 
            how businesses operate. Each service is backed by our 98% client satisfaction guarantee.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h3 className="text-4xl font-bold mb-6">
            Our <span className="gradient-text">5-Step Process</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to ongoing support, we follow a proven methodology 
            that ensures successful project delivery and maximum ROI.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="glass-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {step.duration}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20"
        >
          <div className="glass-card p-12 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ companies that have already automated their processes and increased efficiency with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <Users className="w-5 h-5 mr-2" />
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
