import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Documentation", "API Reference", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press", "Partners"],
  },
  {
    title: "Resources",
    links: ["Community", "Contact", "Support", "Status", "Terms of Service"],
  },
];

export const Footer = () => {
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
              <h3 className="text-2xl font-bold gradient-text mb-4">Astraventa</h3>
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
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground smooth-transition text-sm"
                    >
                      {link}
                    </a>
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
            <a href="#" className="hover:text-foreground smooth-transition">Privacy Policy</a>
            <a href="#" className="hover:text-foreground smooth-transition">Terms of Service</a>
            <a href="#" className="hover:text-foreground smooth-transition">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
