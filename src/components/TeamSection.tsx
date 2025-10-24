import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  Twitter, 
  Mail,
  Award,
  Code,
  Bot,
  Zap,
  BarChart3
} from "lucide-react";

const teamMembers = [
  {
    name: "Ahmed Hassan",
    role: "Founder & CEO",
    image: "/api/placeholder/300/300",
    bio: "AI expert with 8+ years experience. Former Google AI researcher, specialized in machine learning and automation solutions.",
    expertise: ["AI/ML", "Leadership", "Strategy"],
    experience: "8+ years",
    education: "MS Computer Science, Stanford",
    icon: Bot,
    color: "from-blue-500 to-cyan-500",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ahmed@astraventa.com"
    }
  },
  {
    name: "Sarah Khan",
    role: "CTO",
    image: "/api/placeholder/300/300", 
    bio: "Full-stack developer and AI integration specialist. Led development of 200+ automation solutions for enterprise clients.",
    expertise: ["Full-Stack", "AI Integration", "Architecture"],
    experience: "6+ years",
    education: "BS Software Engineering, MIT",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    social: {
      linkedin: "#",
      twitter: "#", 
      email: "sarah@astraventa.com"
    }
  },
  {
    name: "Muhammad Ali",
    role: "Lead AI Engineer",
    image: "/api/placeholder/300/300",
    bio: "Machine Learning engineer with expertise in NLP and computer vision. Built AI systems serving 1M+ users daily.",
    expertise: ["Machine Learning", "NLP", "Computer Vision"],
    experience: "5+ years", 
    education: "PhD AI, Carnegie Mellon",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "muhammad@astraventa.com"
    }
  },
  {
    name: "Fatima Ahmed",
    role: "Head of Analytics",
    image: "/api/placeholder/300/300",
    bio: "Data science expert specializing in business intelligence and predictive analytics. Transformed data insights for 100+ companies.",
    expertise: ["Data Science", "Analytics", "Business Intelligence"],
    experience: "7+ years",
    education: "MS Data Science, Harvard",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "fatima@astraventa.com"
    }
  }
];

const achievements = [
  {
    title: "500+ Projects Delivered",
    description: "Successfully completed AI solutions for clients worldwide"
  },
  {
    title: "98% Client Satisfaction",
    description: "Consistently high ratings from our enterprise clients"
  },
  {
    title: "50+ Team Members",
    description: "Expert developers, designers, and AI specialists"
  },
  {
    title: "30+ Countries Served",
    description: "Global reach with local expertise and support"
  }
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-32 relative overflow-hidden">
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
                        <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                          <Linkedin className="w-4 h-4" />
                        </Button>
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
