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
    description: "We analyze your business needs and create a tailored solution strategy in record time.",
    duration: "Same Day",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
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
    description: "Our experts design the optimal AI solution architecture and create detailed implementation plans within 24 hours.",
    duration: "24 Hours",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
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
    description: "We build, test, and refine your AI solution with rapid development cycles and rigorous quality assurance.",
    duration: "1-2 Weeks",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
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
    description: "We deploy your solution and provide rapid training to ensure your team is ready within 24 hours.",
    duration: "Next Day",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
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
    description: "Instant monitoring and continuous improvement to maximize your ROI and performance from day one.",
    duration: "Instant",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
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
    <section id="process" className="py-24 relative overflow-hidden bg-black">
      {/* Background Elements - Premium Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-sm">
            <Zap className="w-4 h-4 mr-2" />
            Our Protocol
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Our <span className="gradient-text">5-Step</span> Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            A high-speed methodology designed for rapid deployment and maximum efficiency.
            We turn complex AI requirements into robust business solutions in record time.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="space-y-32 mb-20 relative">
          {/* Vertical Progress Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 top-0 opacity-20" />

          {workflowSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Step Content */}
                <div className="flex-1 w-full order-2 lg:order-none">
                  <div className="space-y-8 glass-card p-10 rounded-[2.5rem] border border-white/5 relative group hover:border-primary/20 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]">
                    {/* Glowing Accent */}
                    <div className={`absolute -top-10 ${isEven ? '-right-10' : '-left-10'} w-40 h-40 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />

                    {/* Step Header */}
                    <div className="flex items-center gap-6">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} shadow-lg shadow-black/20 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
                        <span className="text-3xl font-black text-white relative z-10">{step.step}</span>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white/10" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="border-primary/20 text-[10px] tracking-[0.2em] uppercase text-primary/80">
                            PHASE 0{step.step}
                          </Badge>
                        </div>
                        <h3 className="text-4xl font-bold tracking-tight">{step.title}</h3>
                        <div className="flex items-center gap-2 text-primary font-medium mt-1">
                          <Clock className="w-4 h-4 animate-pulse" />
                          <span className="text-sm">Timeline: {step.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground/90 leading-relaxed font-light">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      {/* Deliverables */}
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Key Deliverables</h4>
                        <ul className="space-y-3">
                          {step.deliverables.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group/item">
                              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover/item:scale-150 transition-transform" />
                              <span className="text-sm text-foreground/70">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Squad */}
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Expert Squad</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.team.map((member, i) => (
                            <Badge key={i} variant="secondary" className="bg-white/5 hover:bg-white/10 text-[9px] px-2 py-0 border-white/5 uppercase font-medium">
                              {member}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Connector Node (Lg only) */}
                <div className="hidden lg:flex flex-shrink-0 w-16 h-16 rounded-full border-[6px] border-black bg-white z-20 items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} animate-pulse`} />
                </div>

                {/* Step Visual */}
                <div className="flex-1 w-full order-1 lg:order-none">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[3.5rem] blur-3xl group-hover:scale-110 transition-transform duration-700 opacity-40" />
                    <div className="aspect-[16/10] bg-card rounded-[3.5rem] border border-white/10 overflow-hidden relative z-10 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                      <div className={`absolute top-8 right-8 w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center`}>
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.color} animate-ping`} />
                      </div>
                      <div className="absolute bottom-10 left-10">
                        <span className="text-7xl font-black text-white/5 select-none tracking-tighter italic">STEP.0{step.step}</span>
                      </div>
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
