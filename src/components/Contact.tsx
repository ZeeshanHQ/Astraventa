import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Send, Phone, MapPin, Clock, BadgeCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { ChatbotModal } from "./ChatbotModal";
import Globe from "@/components/ui/globe";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _honey: z.string().max(0, "Bot detected").optional(),
});

export const Contact = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
    _honey: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
    setErrors({});
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        formattedErrors[issue.path[0]] = issue.message;
      });
      setErrors(formattedErrors);
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }

    if (formData._honey) {
      toast({
        title: "Submission Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 2 hours.",
          variant: "default",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          timeline: "",
          message: "",
          _honey: ""
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
    { icon: Phone, title: "WhatsApp", value: "+92 328 4529264", description: "Mon-Fri 9AM-6PM EST" },
    { icon: Mail, title: "Email", value: "astraventaai@gmail.com", description: "24/7 Support Available" },
    { icon: MapPin, title: "Location", value: "Remote-First", description: "Global Team, Worldwide Service" },
    { icon: Clock, title: "Response Time", value: "2 Hours", description: "Business Hours" }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-transparent section-transition overflow-hidden">
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
            GET IN TOUCH
          </Badge>
          <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-5xl mb-6">
            Ready to <span className="text-primary">Transform</span> Your Business?
          </h2>
          <p className="text-[15px] text-[#4B5563] font-display font-normal leading-[1.7] max-w-2xl mx-auto">
            Connect with our lead architects to discuss your AI automation roadmap and technical scope.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/60 backdrop-blur-2xl border border-slate-200/50 shadow-sm rounded-3xl overflow-hidden">
              <CardHeader className="pb-4 border-b border-slate-100/50">
                <CardTitle className="text-xl font-heading font-normal uppercase tracking-[0.15em] text-black">Start Your AI Journey</CardTitle>
                <CardDescription className="text-xs text-slate-500 font-display uppercase tracking-widest">
                  Connect with our team for precision automation.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Full Name *</label>
                      <Input
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="rounded-xl border-slate-200 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="rounded-xl border-slate-200 focus:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  {/* Honeypot Field (Hidden) */}
                  <div className="hidden" aria-hidden="true">
                    <Input
                      type="text"
                      name="_honey"
                      value={formData._honey}
                      onChange={(e) => handleInputChange('_honey', e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Company Name</label>
                      <Input
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="rounded-xl border-slate-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="rounded-xl border-slate-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Service Needed *</label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="rounded-xl border-slate-200">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Budget Range</label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="rounded-xl border-slate-200">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {budgetRanges.map((range) => <SelectItem key={range} value={range}>{range}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Project Timeline</label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="rounded-xl border-slate-200">
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          {timelines.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Project Details *</label>
                    <Textarea
                      placeholder="Tell us about your requirements, goals, and any specific needs..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="rounded-xl border-slate-200 resize-none"
                      required
                    />
                  </div>

                  <ShinyButton type="submit" disabled={isSubmitting} className="w-full h-14 rounded-2xl">
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" /> {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </ShinyButton>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                    <BadgeCheck className="w-4 h-4 text-emerald-500" />
                    <span>We'll respond within 2 hours during business hours</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Globe & Consolidated Contact Details */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center sticky top-32 space-y-12"
          >
            {/* Globe Section */}
            <div className="relative">
              <Globe />
            </div>
            
            {/* Consolidated Contact Information Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-primary/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-0.5">{info.title}</h4>
                    <p className="text-sm font-bold text-slate-900 truncate leading-tight mb-1">{info.value}</p>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <ChatbotModal isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </section>
  );
};
