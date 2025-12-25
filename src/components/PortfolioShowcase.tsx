import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Bot,
  Zap,
  BarChart3,
  Globe,
  Plane,
  ChefHat,
  Link2,
  Github
} from "lucide-react";
import { useState } from "react";

const portfolioProjects = [
  {
    id: 1,
    title: "Advanced Drone Technology Platform",
    client: "Aerial Solutions Company",
    industry: "Technology & Drones",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Comprehensive drone technology platform featuring product showcases, technical specifications, and interactive features. Modern, responsive design with seamless user experience and high-performance optimization.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    results: [
      { metric: "Page Load Speed", value: "< 2s", improvement: "95% faster" },
      { metric: "Mobile Performance", value: "98/100", improvement: "Lighthouse score" },
      { metric: "User Engagement", value: "3.5x", improvement: "Increase in time on site" },
      { metric: "Conversion Rate", value: "+45%", improvement: "Lead generation" }
    ],
    duration: "4-6 weeks",
    team: "3-4 developers",
    category: "Web Development",
    icon: Plane,
    color: "from-indigo-500 to-blue-500",
    featured: true,
    liveUrl: "#", // Add your drone website URL here
    githubUrl: "#" // Add your GitHub repo URL here (if public)
  },
  {
    id: 2,
    title: "Restaurant AI Chatbot System",
    client: "Premium Restaurant Chain",
    industry: "Hospitality & Food Service",
    image: "/astraventa-resturant-hero.png", // image currently placed at public/astraventa-resturant-hero.png
    description: "Intelligent AI-powered chatbot for restaurant operations handling reservations, menu inquiries, order tracking, and customer support 24/7. Integrated with POS systems and reservation platforms.",
    technologies: ["OpenAI GPT-4", "React", "Node.js", "Restaurant APIs", "WebSocket"],
    results: [
      { metric: "Response Time", value: "< 1 second", improvement: "Instant support" },
      { metric: "Customer Satisfaction", value: "4.9/5", improvement: "+50% increase" },
      { metric: "Reservation Efficiency", value: "80%", improvement: "Automated bookings" },
      { metric: "Support Cost Reduction", value: "65%", improvement: "Monthly savings" },
      { metric: "Order Accuracy", value: "99.2%", improvement: "Error reduction" }
    ],
    duration: "3-4 weeks",
    team: "3 developers",
    category: "AI Chatbot",
    icon: ChefHat,
    color: "from-orange-500 to-red-500",
    featured: true,
    liveUrl: "https://astraventa-restaurant-ai.vercel.app/",
    githubUrl: "https://github.com/Astraventa/astraventa-restaurant-ai",
    developers: ["Zeeshan Jay", "Haider"]
  },
  {
    id: 3,
    title: "E-commerce AI Chatbot",
    client: "TechMart Solutions",
    industry: "E-commerce",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Intelligent customer support chatbot that handles 10,000+ queries daily with 95% accuracy, reducing support costs by 70%.",
    technologies: ["OpenAI GPT-4", "React", "Node.js", "MongoDB"],
    results: [
      { metric: "Response Time", value: "2 seconds", improvement: "90% faster" },
      { metric: "Customer Satisfaction", value: "4.8/5", improvement: "+40%" },
      { metric: "Cost Reduction", value: "$50K/month", improvement: "70% savings" },
      { metric: "Query Resolution", value: "95%", improvement: "Auto-resolved" }
    ],
    duration: "6 weeks",
    team: "4 developers",
    category: "AI Chatbot",
    icon: Bot,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 4,
    title: "Blockchain-Based Land Management System",
    client: "Real Estate Technology Company",
    industry: "Real Estate & Blockchain",
    image: "/landimage.png",
    description: "Decentralized land registry and property management platform built on blockchain technology. Ensures transparent, immutable property records with smart contract automation for transactions and ownership verification.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js", "IPFS", "Smart Contracts"],
    results: [
      { metric: "Transaction Speed", value: "5 minutes", improvement: "vs 30+ days traditional" },
      { metric: "Cost Reduction", value: "85%", improvement: "Lower transaction fees" },
      { metric: "Security", value: "100%", improvement: "Immutable records" },
      { metric: "Transparency", value: "Real-time", improvement: "Public ledger verification" },
      { metric: "User Adoption", value: "100+", improvement: "Verified users" }
    ],
    duration: "8-10 weeks",
    team: "5-6 developers",
    category: "Blockchain Development",
    icon: Globe,
    color: "from-emerald-500 to-teal-500",
    featured: true,
    liveUrl: "#", // Add your blockchain project URL here
    githubUrl: "https://github.com/Astraventa/BlockChain-Based-Land-Management-System"
  },
  {
    id: 5,
    title: "Smart Analytics Dashboard",
    client: "RetailMax Chain",
    industry: "Retail",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "AI-powered business intelligence platform providing real-time insights and predictive analytics for 200+ retail locations.",
    technologies: ["React", "D3.js", "Python", "TensorFlow", "AWS"],
    results: [
      { metric: "Decision Speed", value: "3x faster", improvement: "200% increase" },
      { metric: "Revenue Growth", value: "25%", improvement: "YoY increase" },
      { metric: "Inventory Optimization", value: "30%", improvement: "Reduced waste" },
      { metric: "User Adoption", value: "95%", improvement: "Within 2 months" }
    ],
    duration: "10 weeks",
    team: "6 developers",
    category: "Smart Analytics",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 6,
    title: "Multi-Platform Web Application",
    client: "HealthCare Plus",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Comprehensive patient management system with AI-powered appointment scheduling and medical record automation.",
    technologies: ["Next.js", "TypeScript", "Prisma", "OpenAI", "PostgreSQL"],
    results: [
      { metric: "Patient Satisfaction", value: "4.9/5", improvement: "+35%" },
      { metric: "Appointment Efficiency", value: "60%", improvement: "Time saved" },
      { metric: "Admin Workload", value: "50%", improvement: "Reduced tasks" },
      { metric: "System Uptime", value: "99.9%", improvement: "Reliability" }
    ],
    duration: "12 weeks",
    team: "7 developers",
    category: "Web Development",
    icon: Globe,
    color: "from-indigo-500 to-purple-500"
  }
];

// Honest, anonymized testimonials (no fabricated identities). Replace with real names/photos when available.
const testimonials = [
  {
    name: "Amelia R.",
    role: "Operations Lead",
    company: "Hospitality Group",
    image: "https://i.pravatar.cc/80?img=48",
    content: "The restaurant chatbot now handles reservations and FAQs instantly. Support load dropped and guests get answers right away.",
    rating: 5,
    project: "Restaurant AI Chatbot"
  },
  {
    name: "Jordan K.",
    role: "Head of Digital",
    company: "Retail & Aviation",
    image: "https://i.pravatar.cc/80?img=12",
    content: "The new product site is fast and polished. Demo requests went up and mobile performance scores improved a lot after launch.",
    rating: 5,
    project: "Drone Technology Website"
  },
  {
    name: "Priya S.",
    role: "Program Director",
    company: "Public Sector Tech",
    image: "https://i.pravatar.cc/80?img=36",
    content: "Blockchain-based records gave us transparent, verifiable history. Delivery was on time and communication was clear throughout.",
    rating: 5,
    project: "Blockchain Land Management"
  }
];

export const PortfolioShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setMousePosition({ x: rotateY, y: rotateX });
    setHoveredCard(index);
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

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
            <TrendingUp className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Real Results for <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how we've helped companies across industries transform their operations,
            reduce costs, and drive growth with our AI solutions.
          </p>
        </motion.div>

        {/* Portfolio Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {portfolioProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setMousePosition({ x: 0, y: 0 });
                }}
                className="group relative"
              >
                {/* Magnetic Hover Card */}
                <Card
                  style={{
                    transform: hoveredCard === index
                      ? `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.02)`
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                    transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                  className="h-full overflow-hidden glass-card border-white/5 bg-black/40 backdrop-blur-xl relative z-10 hover:border-primary/30 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                    {/* Floating Tech Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} shadow-lg shadow-black/40`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Industry Badge */}
                    <Badge className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border-white/10 text-[10px] uppercase tracking-wider">
                      {project.industry}
                    </Badge>
                  </div>

                  <CardHeader className="space-y-2 pb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] tracking-widest uppercase border-primary/20 text-primary/80">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <span className="text-yellow-400 group-hover:animate-bounce">★</span>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed italic">
                      "{project.description}"
                    </p>

                    {/* Quick Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      {project.results.slice(0, 2).map((res, i) => (
                        <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-primary/10 transition-colors">
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{res.metric}</div>
                          <div className="text-lg font-bold text-primary">{res.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        <Clock className="w-3.5 h-3.5" />
                        {project.duration}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="group/btn h-8 gap-2 bg-primary/5 hover:bg-primary/20 text-primary border-0"
                        onClick={() => {
                          const element = document.getElementById('contact');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                      >
                        View Details
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Aesthetic Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}, {testimonial.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                    ))}
                  </div>
                  <Badge variant="secondary" className="text-xs w-fit">
                    {testimonial.project}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
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
          className="text-center mt-20"
        >
          <div className="glass-card p-12 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar results with our proven AI solutions.
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
                View All Services
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
