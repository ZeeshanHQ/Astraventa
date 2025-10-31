import { motion, AnimatePresence } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { AstraventaLogo } from "./AstraventaLogo";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "AI Chatbots", section: "services" },
      { name: "Web Automation", section: "services" },
      { name: "AI Integrations", section: "services" },
      { name: "Custom Development", section: "services" },
      { name: "Smart Analytics", section: "services" },
      { name: "AI Security", section: "services" }
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Portfolio", section: "portfolio" },
      { name: "Our Team", section: "team" },
      { name: "Our Process", section: "process" },
      { name: "Contact Us", section: "contact" },
      { name: "Careers", href: "mailto:careers@astraventa.com" }
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", section: "portfolio" },
      { name: "Support", section: "contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" }
    ],
  },
];

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative py-20 border-t border-border/50">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-cosmic" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AstraventaLogo size="lg" />
              <p className="text-muted-foreground mb-6 max-w-sm">
                Empowering innovation through intelligent automation & AI-driven solutions.
                Next-generation technology for the future of business.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ y: -4, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="w-10 h-10 rounded-lg glass-card flex items-center justify-center smooth-transition hover:shadow-glow group"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary smooth-transition" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.section ? (
                      <button
                        onClick={() => scrollToSection(link.section)}
                        className="text-muted-foreground hover:text-foreground smooth-transition text-sm text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground smooth-transition text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Astraventa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground smooth-transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground smooth-transition">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-foreground smooth-transition">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-lg z-50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
