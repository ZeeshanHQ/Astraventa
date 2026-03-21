import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  Linkedin,
  Twitter,
  Mail,
  Award,
  Cpu,
  Globe,
  ShieldCheck,
  Zap,
  BarChart3,
  Rocket,
  Target,
  Users,
  ArrowRight
} from "lucide-react";

const teamMembers = [
  {
    name: "Haider Shabbir",
    role: "Co-Founder & Principal Technical Engine",
    image: "/api/placeholder/300/300",
    bio: "The technical mastermind and engineering engine of Astraventa. Architected hyper-scalable AI frameworks serving millions; his unmatched technical depth drives every innovation, ensuring unbreakable performance and technical supremacy.",
    expertise: ["Core Systems Engineering", "AI Scale Optimization", "Technical Supremacy", "Unbreakable Architecture"],
    experience: "10+ Years",
    education: "MS Software Engineering, MIT",
    icon: Cpu,
    color: "from-[hsl(var(--primary))] to-[hsl(var(--primary))]/60",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "haider@astraventa.online"
    }
  },
  {
    name: "Zeeshan Jay",
    role: "Founder & Visionary Strategist",
    image: "/api/placeholder/300/300",
    bio: "The visionary force behind Astraventa. Global AI strategist orchestrating multi-million dollar transformations. Specializes in building high-integrity AI ecosystems that empower industries and redefine the future of digital interaction.",
    expertise: ["Strategic AI Leadership", "Global Infrastructure", "Visionary Innovation", "Cloud Architecture"],
    experience: "12+ Years",
    education: "PhD Computer Science, Stanford",
    icon: Globe,
    color: "from-black to-black/60",
    social: {
      linkedin: "https://www.linkedin.com/in/zeeshanjay/",
      twitter: "#",
      email: "zeeshan@astraventa.online"
    }
  },
  {
    name: "Dr. Sarah Chen",
    role: "Chief Research Scientist",
    image: "/api/placeholder/300/300",
    bio: "Pioneering researcher in Neural Language Processing and Predictive Modeling. Translating complex theoretical breakthroughs into systems that enhance decision-making speeds and empower local teams.",
    expertise: ["Advanced NLP", "Deep Learning Research", "Predictive Synthesis", "Model Governance"],
    experience: "8+ Years",
    education: "PhD AI, Carnegie Mellon",
    icon: ShieldCheck,
    color: "from-black to-black/40",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@astraventa.online"
    }
  },
  {
    name: "Michael Rodriguez",
    role: "Global Growth Orchestrator",
    image: "/api/placeholder/300/300",
    bio: "Data-driven expansion expert with a focus on empowering partnerships. Leveraging high-velocity analytics to enhance project delivery and ensure Astraventa's solutions meet the global market's evolving needs.",
    expertise: ["Strategic Growth", "Market Analytics", "Partnership Ecosystems", "Operational Flow"],
    experience: "9+ Years",
    education: "PhD Data Science, Harvard",
    icon: BarChart3,
    color: "from-[hsl(var(--primary))] to-black",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@astraventa.online"
    }
  }
];

const achievements = [
  {
    title: "100+ AI Projects Delivered",
    description: "Successfully completed high-impact solutions for global clients"
  },
  {
    title: "98% Client Satisfaction",
    description: "Consistently high ratings from our enterprise partners"
  },
  {
    title: "30+ Countries Served",
    description: "Global reach with localized technical expertise"
  },
  {
    title: "50+ Tech Specialists",
    description: "Expert developers, architects, and AI researchers"
  }
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-20 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--primary))]/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-black/5 text-black border-border/50 text-[10px] font-black uppercase tracking-[0.2em] font-mono rounded-sm">
            <Award className="w-4 h-4 mr-2 text-[hsl(var(--primary))]" />
            Meet Our Team
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter uppercase leading-none">
            Expert <span className="text-[hsl(var(--primary))]">Engineers</span>
          </h2>
          <p className="text-xl text-black/50 max-w-3xl mx-auto leading-relaxed font-black uppercase tracking-tight">
            Our team combines deep technical expertise with business acumen to deliver
            AI solutions that drive real results for your organization.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-black/[0.02] border border-border/50 hover:border-[hsl(var(--primary))]/30 transition-all duration-300 group rounded-sm shadow-sm">
                  <CardContent className="p-6">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-sm bg-black/5 border border-border/20 flex items-center justify-center mb-4 relative overflow-hidden group-hover:border-[hsl(var(--primary))]/30 transition-all">
                        <div className={`w-20 h-20 rounded-sm bg-gradient-to-r ${member.color} flex items-center justify-center`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-sm bg-black flex items-center justify-center border border-border/50">
                        <Award className="w-4 h-4 text-[hsl(var(--primary))]" />
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center space-y-4">
                      <div>
                        <h3 className="text-xl font-black text-black uppercase tracking-tight mb-1">{member.name}</h3>
                        <p className="text-[hsl(var(--primary))] font-black uppercase text-xs tracking-widest font-mono">{member.role}</p>
                        <p className="text-[10px] text-black/40 mt-2 font-black uppercase tracking-widest font-mono">{member.experience}</p>
                      </div>

                      <p className="text-sm text-black/50 leading-relaxed font-black uppercase tracking-tight">
                        {member.bio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-black/5 text-[9px] font-black uppercase tracking-widest rounded-sm border-border/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {/* Education */}
                      <div className="text-[10px] text-black/30 font-black uppercase tracking-widest font-mono">
                        {member.education}
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3 pt-2">
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:text-[hsl(var(--primary))] hover:bg-transparent transition-colors">
                            <Linkedin className="w-4 h-4" />
                          </Button>
                        </a>
                        <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:text-[hsl(var(--primary))] hover:bg-transparent transition-colors">
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:text-[hsl(var(--primary))] hover:bg-transparent transition-colors">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Company Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-black text-black mb-6 tracking-tighter uppercase leading-none">
            Our <span className="text-[hsl(var(--primary))]">Impact</span>
          </h3>
          <p className="text-xl text-black/50 max-w-2xl mx-auto font-black uppercase tracking-tight">
            Numbers that speak to our commitment to excellence and client success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-black/[0.02] p-8 rounded-sm border border-border/50 hover:border-[hsl(var(--primary))]/30 transition-all duration-300 shadow-sm">
                <h4 className="text-2xl font-black text-black mb-3 uppercase tracking-tighter">{achievement.title}</h4>
                <p className="text-black/50 font-black uppercase text-xs tracking-tight">{achievement.description}</p>
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
          <div className="bg-black p-12 rounded-sm border border-border/10 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-transparent pointer-events-none" />
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter relative z-10">
              Work With Our Expert Team
            </h3>
            <p className="text-xl text-white/50 mb-8 max-w-2xl mx-auto font-black uppercase tracking-tight relative z-10">
              Ready to transform your business with AI? Our team of experts is here to help you succeed.
            </p>
            <ShinyButton
              className="h-11 px-8 rounded-full font-display font-medium text-[13px] uppercase tracking-[0.1em]"
              onClick={() => window.location.href = '/contact'}
            >
              <span className="flex items-center gap-2.5 pt-[1px]">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </span>
            </ShinyButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
