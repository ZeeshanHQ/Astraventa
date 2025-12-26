import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Users
} from "lucide-react";

const teamMembers = [
  {
    name: "Zeeshan Jay",
    role: "Founder & Visionary Strategist",
    image: "/api/placeholder/300/300",
    bio: "The visionary force behind Astraventa. Global AI strategist orchestrating multi-million dollar transformations. Specializes in building high-integrity AI ecosystems that empower industries and redefine the future of digital interaction.",
    expertise: ["Strategic AI Leadership", "Global Infrastructure", "Visionary Innovation", "Cloud Architecture"],
    experience: "12+ Years",
    education: "PhD Computer Science, Stanford",
    icon: Globe,
    color: "from-blue-600 to-violet-600",
    social: {
      linkedin: "https://www.linkedin.com/in/zeeshanjay/",
      twitter: "#",
      email: "zeeshan@astraventa.com"
    }
  },
  {
    name: "Haider",
    role: "Co-Founder & Principal Technical Engine",
    image: "/api/placeholder/300/300",
    bio: "The technical mastermind and engineering engine of Astraventa. Architected hyper-scalable AI frameworks serving millions; his unmatched technical depth drives every innovation, ensuring unbreakable performance and technical supremacy.",
    expertise: ["Core Systems Engineering", "AI Scale Optimization", "Technical Supremacy", "Unbreakable Architecture"],
    experience: "10+ Years",
    education: "MS Software Engineering, MIT",
    icon: Cpu,
    color: "from-emerald-600 to-cyan-600",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "haider@astraventa.com"
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
    color: "from-purple-600 to-pink-600",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@astraventa.com"
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
    color: "from-orange-600 to-yellow-600",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@astraventa.com"
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
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Award className="w-4 h-4 mr-2" />
            Meet Our Team
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Expert <span className="gradient-text">AI Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
                <Card className="h-full glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center mb-4">
                        <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="text-center space-y-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                        <p className="text-sm text-muted-foreground mt-2">{member.experience}</p>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {/* Education */}
                      <div className="text-xs text-muted-foreground">
                        {member.education}
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3 pt-2">
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="ghost" className="w-8 h-8 p-0 hover:text-primary">
                            <Linkedin className="w-4 h-4" />
                          </Button>
                        </a>
                        <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
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
          <h3 className="text-4xl font-bold mb-6">
            Our <span className="gradient-text">Achievements</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
              <div className="glass-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300">
                <h4 className="text-2xl font-bold gradient-text mb-3">{achievement.title}</h4>
                <p className="text-muted-foreground">{achievement.description}</p>
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
              Work With Our Expert Team
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your business with AI? Our team of experts is here to help you succeed.
            </p>
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
              Schedule a Consultation
              <Mail className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
