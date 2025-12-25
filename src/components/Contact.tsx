import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, Bot, Sparkles, Zap, Phone, MapPin, Clock, BadgeCheck, Keyboard } from "lucide-react";
import { useState, useEffect } from "react";
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

  // Keyboard shortcut for AI chatbot
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsChatbotOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

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

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('budget', formData.budget);
      formDataToSend.append('timeline', formData.timeline);
      formDataToSend.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/xpwoaolv', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 2 hours.",
          variant: "default",
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
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+92 328 4529264",
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
    <section id="contact" className="py-20 relative">
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
          className="text-center mb-12"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Start Your AI Journey</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 2 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-card/50 border-primary/30 focus:border-primary smooth-transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-card/50 border-primary/30 focus:border-primary smooth-transition"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <Input
                        type="text"
                        name="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-card/50 border-primary/30 focus:border-primary smooth-transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-card/50 border-primary/30 focus:border-primary smooth-transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed *</label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-card/50 border-primary/30 focus:border-primary smooth-transition">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="bg-card/50 border-primary/30 focus:border-primary smooth-transition">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="bg-card/50 border-primary/30 focus:border-primary smooth-transition">
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details *</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project requirements, goals, and any specific needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-card/50 border-primary/30 focus:border-primary smooth-transition"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary smooth-transition"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:-rotate-12 transition-transform" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BadgeCheck className="w-4 h-4 text-green-500" />
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
          </motion.div>
        </div>
      </div>

      {/* Chatbot Modal */}
      <ChatbotModal isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </section>
  );
};