import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, Bot, Sparkles, Zap, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ChatbotModal } from "./ChatbotModal";

export const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "AI Chatbots & Virtual Assistants",
    "Web Automation & RPA", 
    "Custom AI Integration",
    "Smart Analytics & Insights",
    "Web Development & E-commerce",
    "AI Security & Compliance",
    "Other"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000", 
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000"
  ];

  const timelines = [
    "ASAP (Rush Project)",
    "1-2 weeks",
    "1 month", 
    "2-3 months",
    "3+ months",
    "Flexible"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 2 hours during business hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: ""
    });

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Mail,
      title: "Email", 
      value: "hello@astraventa.com",
      description: "24/7 Support Available"
    },
    {
      icon: MapPin,
      title: "Office",
      value: "New York, NY",
      description: "Serving Clients Globally"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 2 Hours",
      description: "During Business Hours"
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your AI automation needs. Our experts are ready to help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card border border-border/50 shadow-glow-lg">
              <CardHeader>
                <CardTitle className="text-3xl mb-2">Start Your AI Journey</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you within 2 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input 
                        type="text" 
                        placeholder="Your full name" 
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="h-12 bg-card/50 border-primary/30 focus:border-primary smooth-transition" 
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12 bg-card/50 border-primary/30 focus:border-primary smooth-transition" 
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <Input 
                        type="text" 
                        placeholder="Your company" 
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="h-12 bg-card/50 border-primary/30 focus:border-primary smooth-transition" 
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12 bg-card/50 border-primary/30 focus:border-primary smooth-transition" 
                      />
                    </motion.div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <label className="block text-sm font-medium mb-2">Service Needed *</label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="h-12 bg-card/50 border-primary/30 focus:border-primary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="h-12 bg-card/50 border-primary/30 focus:border-primary">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((budget, index) => (
                            <SelectItem key={index} value={budget}>{budget}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label className="block text-sm font-medium mb-2">Project Timeline</label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="h-12 bg-card/50 border-primary/30 focus:border-primary">
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelines.map((timeline, index) => (
                          <SelectItem key={index} value={timeline}>{timeline}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <label className="block text-sm font-medium mb-2">Project Details *</label>
                    <Textarea 
                      placeholder="Tell us about your project requirements, goals, and any specific needs..." 
                      rows={5} 
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-card/50 border-primary/30 focus:border-primary smooth-transition" 
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full group bg-gradient-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary smooth-transition"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:-rotate-12 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>We'll respond within 2 hours during business hours</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & AI Bot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="glass-card p-6 rounded-xl border border-border/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* AI Bot Animation */}
            <motion.div
              className="relative h-[400px] flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative">
                {/* AI Bot */}
                <motion.div
                  animate={{
                    y: isHovered ? -15 : 0,
                    scale: isClicked ? 0.95 : (isHovered ? 1.15 : 1),
                    rotateY: isHovered ? 10 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-40 h-40 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-lg relative overflow-hidden cursor-pointer select-none"
                  onClick={() => {
                    setIsClicked(true);
                    setIsChatbotOpen(true);
                    setTimeout(() => setIsClicked(false), 200);
                  }}
                  onMouseDown={() => {
                    setIsClicked(true);
                    setIsChatbotOpen(true);
                    setTimeout(() => setIsClicked(false), 200);
                  }}
                  onTouchStart={() => {
                    setIsClicked(true);
                    setIsChatbotOpen(true);
                    setTimeout(() => setIsClicked(false), 200);
                  }}
                  style={{ touchAction: 'manipulation' }}
                >
                  <Bot className="w-20 h-20 text-white z-10" />
                  
                  {/* Energy Rings */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute inset-0 border-2 border-primary/40 rounded-full"
                  />
                  
                  <motion.div
                    animate={{
                      rotate: -360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute inset-4 border border-secondary/40 rounded-full"
                  />

                  {/* Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-primary/30 rounded-full"
                  />

                  {/* Floating Icons */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      y: [0, -10, 0],
                    }}
                    transition={{
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute -top-6 -right-6"
                  >
                    <Sparkles className="w-8 h-8 text-accent" />
                  </motion.div>

                  <motion.div
                    animate={{
                      rotate: -360,
                      y: [0, -15, 0],
                    }}
                    transition={{
                      rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute -bottom-6 -left-6"
                  >
                    <Zap className="w-8 h-8 text-secondary" />
                  </motion.div>
                </motion.div>

                {/* Energy Field */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-full"
                />
              </div>

              {/* Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0, 
                  scale: isHovered ? 1 : 0,
                  y: isHovered ? -10 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="absolute -top-28 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-sm px-6 py-4 rounded-xl border border-primary/50 shadow-glow"
              >
                <div className="text-center">
                  <p className="text-sm text-foreground font-medium mb-1">🤖 AI Assistant</p>
                  <p className="text-xs text-muted-foreground">Click to start chatting!</p>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card/95"></div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Chatbot Modal */}
      <ChatbotModal isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </section>
  );
};