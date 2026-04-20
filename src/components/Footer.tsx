import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AstraventaLogo } from "./AstraventaLogo";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Globe, 
  Mail, 
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowUp
} from "lucide-react";

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
      { name: "AI Integration", href: "/services/ai", tag: "Active" },
      { name: "Intelligent Automation", href: "/services/automation", tag: "Active" },
      { name: "Security Systems", href: "/services/security", tag: "Active" },
      { name: "UI/UX Design", href: "/services/ui-ux", tag: "Active" },
      { name: "Web Engineering", href: "/services/web", tag: "Active" },
      { name: "Mobile Engineering", href: "/services/mobile", tag: "Active" },
      { name: "Backend Systems", href: "/services/backend", tag: "Active" },
      { name: "AI Chatbots", href: "/services/chatbots", tag: "Active" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "LaunchPact AI", href: "https://launchpact.astraventa.online", tag: "Live" },
      { name: "Shorts Cavexa", href: "https://shorts.cavexa.online", tag: "Live" },
      { name: "ComplyMail", href: "https://comply.astraventa.online", tag: "New" },
      { name: "Vectrax", href: "https://vectrax.astraventa.online", tag: "Live" },
      { name: "Outrelix", href: "https://outrelix.astraventa.online", tag: "Live" },
    ],
  },
  {
    title: "Astra Tools",
    links: [
      { name: "Astra Reach", href: "/tools/astra-reach", tag: "Active" },
      { name: "Astra Prompt", href: "/tools/astra-prompt", tag: "Active" },
      { name: "Astra Blog", href: "/tools/astra-blog", tag: "New" },
      { name: "Astra Translate", href: "/tools/astra-translate", tag: "Active" },
      { name: "Astra Script", href: "/coming-soon", tag: "Coming Soon" },
      { name: "Astra Lead", href: "/coming-soon", tag: "Coming Soon" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Leadership Team", href: "/leadership" },
      { name: "Partner Network", href: "/partners" },
      { name: "Trust & Security", href: "/security" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Docs", href: "/docs" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "System Status", href: "/status" },
      { name: "Insights Blog", href: "/blog" },
      { name: "Developer Tools", href: "/developers" },
    ],
  },
];

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsSubscribing(false);
    setEmail("");
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative py-8 sm:py-12 md:py-20 border-t border-slate-200/50 bg-white" style={{ fontStyle: 'normal' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12">

          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5">
                <AstraventaLogo size="nav" className="max-w-[240px]" />
              </div>
              <p className="text-[13px] text-[#4B5563] font-body font-normal mb-6 max-w-sm leading-[1.7]">
                Architecting the autonomous enterprise. We build resilient AI modules and high-performance engineering systems for visionary companies.
              </p>

              {/* Newsletter Subscription */}
              <div className="mb-8">
                {!isSubscribed ? (
                  <>
                    <h4 className="font-display font-bold text-black text-[12px] uppercase tracking-[0.15em] mb-2">Join the Vanguard</h4>
                    <p className="text-[13px] text-[#4B5563] mb-4">Get our latest engineering insights delivered monthly.</p>
                    <form onSubmit={handleNewsletterSubmit} className="relative max-w-sm">
                      <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-11 pl-4 pr-32 rounded-full border border-black/[0.1] text-[13px] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-transparent text-black placeholder:text-black/40"
                        required
                      />
                      <button 
                        type="submit"
                        disabled={isSubscribing}
                        className="absolute right-1 top-1 bottom-1 px-5 bg-black hover:bg-primary text-white rounded-full text-[10px] font-display font-bold uppercase tracking-[0.15em] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubscribing ? "..." : "Subscribe"}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-50/50 flex items-start gap-3 max-w-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-emerald-900 text-[11px] uppercase tracking-[0.1em] mb-1">Successfully Subscribed</h4>
                      <p className="text-[12px] text-emerald-700/80">You're now on the vanguard list.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ y: -2 }}
                      className="w-9 h-9 rounded-lg bg-white border border-border/50 flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 group transition-all"
                    >
                      <Icon className="w-4 h-4 text-black/40 group-hover:text-primary transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Spacer for large screens */}
          <div className="hidden lg:block lg:col-span-1 border-r border-slate-100/50" />

          {/* Links Categories */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6 pl-0 lg:pl-8">
            {footerLinks.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <h4 className="technical-label !text-slate-900 mb-6">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.href.startsWith('/') ? (
                         <Link
                          to={link.href}
                          className="text-[12px] font-body font-normal text-black/50 hover:text-primary transition-colors group flex items-center leading-relaxed"
                        >
                          <span className="w-0 h-px bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300" />
                          <span className="flex items-center gap-2">
                            {link.name}
                            {link.tag && (
                              <span className={cn(
                                "text-[7px] font-black font-['Anonymous_Pro'] px-1.5 py-0.5 rounded-full uppercase tracking-widest transition-colors",
                                link.tag === "Active" || link.tag === "Live" ? "bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-100" :
                                link.tag === "New" ? "bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary/10" :
                                "bg-slate-50 text-slate-400 border border-slate-100 group-hover:border-primary/20 group-hover:text-primary"
                              )}>
                                {link.tag}
                              </span>
                            )}
                          </span>
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] font-body font-normal text-black/50 hover:text-primary transition-colors group flex items-center leading-relaxed"
                        >
                          <span className="w-0 h-px bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300" />
                          <span className="flex items-center gap-2">
                            {link.name}
                            {link.tag && (
                              <span className={cn(
                                "text-[7px] font-black font-['Anonymous_Pro'] px-1.5 py-0.5 rounded-full uppercase tracking-widest transition-colors",
                                link.tag === "Active" || link.tag === "Live" ? "bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-100" :
                                link.tag === "New" ? "bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary/10" :
                                "bg-slate-50 text-slate-400 border border-slate-100 group-hover:border-primary/20 group-hover:text-primary"
                              )}>
                                {link.tag}
                              </span>
                            )}
                          </span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-slate-200/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="technical-label !text-black/40 !capitalize ![text-transform:none] tracking-normal text-xs">© 2026 Astraventa Inc. • All systems operational</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-[11px] text-black/30 font-display font-normal uppercase tracking-[0.1em]">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
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
            className="fixed bottom-8 right-8 w-12 h-12 bg-white border border-border shadow-lg rounded-sm flex items-center justify-center z-50 hover:border-primary/30 hover:shadow-xl transition-all text-black/20 hover:text-primary"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
