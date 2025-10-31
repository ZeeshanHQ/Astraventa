import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Lightbulb, 
  Code, 
  Rocket, 
  Headphones,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  FileText,
  Zap,
  Shield,
  BadgeCheck
} from "lucide-react";
import { useState } from "react";

const workflowSteps = [
  {
    step: 1,
    title: "Discovery & Analysis",
    description: "We analyze your business needs, current systems, and goals to create a tailored solution strategy.",
    duration: "1-2 days",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-blue-500 to-cyan-500",
    deliverables: [
      "Business Requirements Document",
      "Technical Architecture Plan", 
      "Project Timeline & Milestones",
      "Resource Allocation Plan"
    ],
    team: ["Project Manager", "Business Analyst", "Technical Lead"]
  },
  {
    step: 2,
    title: "Solution Design",
    description: "Our experts design the optimal AI solution architecture and create detailed implementation plans.",
    duration: "3-5 days",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-purple-500 to-pink-500",
    deliverables: [
      "System Architecture Design",
      "AI Model Specifications",
      "Integration Blueprint",
      "Security & Compliance Plan"
    ],
    team: ["AI Architect", "UX Designer", "Security Specialist"]
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "We build, test, and refine your AI solution with rigorous quality assurance and performance optimization.",
    duration: "2-6 weeks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-green-500 to-emerald-500",
    deliverables: [
      "Fully Functional AI System",
      "Comprehensive Test Reports",
      "Performance Optimization",
      "Documentation & User Guides"
    ],
    team: ["AI Engineers", "QA Testers", "DevOps Engineers"]
  },
  {
    step: 4,
    title: "Deployment & Training",
    description: "We deploy your solution, provide comprehensive training, and ensure smooth integration with your systems.",
    duration: "1-2 weeks",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-orange-500 to-red-500",
    deliverables: [
      "Live Production System",
      "Team Training Sessions",
      "Integration Testing",
      "Go-Live Support"
    ],
    team: ["DevOps Engineers", "Training Specialists", "Support Team"]
  },
  {
    step: 5,
    title: "Support & Optimization",
    description: "Ongoing monitoring, maintenance, and continuous improvement to maximize your ROI and performance.",
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-indigo-500 to-purple-500",
    deliverables: [
      "24/7 System Monitoring",
      "Performance Reports",
      "Regular Updates & Improvements",
      "Dedicated Support Team"
    ],
    team: ["Support Engineers", "AI Specialists", "Account Manager"]
  }
];

const qualityAssurance = [
  {
    title: "Code Quality",
    description: "Rigorous code reviews and testing",
    icon: Shield
  },
  {
    title: "Performance Testing",
    description: "Load testing and optimization",
    icon: Zap
  },
  {
    title: "Security Audit",
    description: "Comprehensive security assessment",
    icon: Shield
  },
  {
    title: "User Acceptance",
    description: "Client testing and feedback",
    icon: Users
  }
];

const communicationPlan = [
  {
    phase: "Weekly Updates",
    description: "Progress reports and milestone updates",
    frequency: "Every Friday"
  },
  {
    phase: "Sprint Reviews", 
    description: "Demo sessions and feedback collection",
    frequency: "Every 2 weeks"
  },
  {
    phase: "Client Meetings",
    description: "Strategic discussions and planning",
    frequency: "As needed"
  },
  {
    phase: "Support Channels",
    description: "24/7 technical support availability",
    frequency: "Always available"
  }
];

export const ProcessWorkflow = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    
    setMousePosition({ x: rotateY, y: rotateX });
    setHoveredCard(index);
  };

  return (
    <section id="process" className="py-20 relative overflow-hidden">
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
            <FileText className="w-4 h-4 mr-2" />
            Our Process
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            How We <span className="gradient-text">Deliver Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven 5-step methodology ensures successful project delivery, 
            maximum ROI, and long-term success for your AI initiatives.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="space-y-16 mb-20">
          {workflowSteps.map((step, index) => {
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setMousePosition({ x: 0, y: 0 });
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: hoveredCard === index 
                    ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.01)` 
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                  transition: 'transform 0.1s ease-out'
                }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Step Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-6">
                    {/* Step Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          Step {step.step}
                        </Badge>
                        <h3 className="text-3xl font-bold">{step.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <motion.span animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity }}>
                            <Clock className="w-4 h-4" />
                          </motion.span>
                          <span>{step.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Deliverables:</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center gap-3">
                            <BadgeCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Team */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Team Members:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.team.map((member, memberIndex) => (
                          <Badge key={memberIndex} variant="outline" className="text-xs">
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-card to-card/50 rounded-3xl border border-border/50 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Assurance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-6">
            Quality <span className="gradient-text">Assurance</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every project goes through rigorous quality checks to ensure excellence and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {qualityAssurance.map((qa, index) => {
            const Icon = qa.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="glass-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{qa.title}</h4>
                  <p className="text-sm text-muted-foreground">{qa.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Communication Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-6">
            Communication <span className="gradient-text">Plan</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed throughout the project with our transparent communication approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {communicationPlan.map((comm, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold mb-2">{comm.phase}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{comm.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {comm.frequency}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="glass-card p-12 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a customized roadmap for success.
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
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                View Our Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
