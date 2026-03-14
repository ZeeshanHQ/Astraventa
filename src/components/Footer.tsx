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
      { name: "AI Integration", href: "/services/ai" },
      { name: "Intelligent Automation", href: "/services/automation" },
      { name: "Security Systems", href: "/services/security" },
      { name: "UI/UX Design", href: "/services/ui-ux" },
      { name: "Web Engineering", href: "/services/web" },
      { name: "Mobile Engineering", href: "/services/mobile" },
      { name: "Backend Systems", href: "/services/backend" },
      { name: "AI Chatbots", href: "/services/chatbots" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "LaunchPact AI", href: "/products/launchpact" },
      { name: "Shorts Cavexa", href: "/products/cavexa" },
      { name: "Outrelix", href: "/products/outrelix" },
      { name: "ComplyMail", href: "/products/complymail" },
      { name: "LegalFlow", href: "/products/legalflow" },
      { name: "Vectrax", href: "/products/vectrax" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Astra Tools Ecosystem", href: "/products/astra-tools" },
      { name: "Astra AI Concierge", href: "/solutions/ai-concierge" },
      { name: "Autonomous Operations", href: "/solutions/autonomous-operations" },
      { name: "AI Analytics", href: "/solutions/analytics" },
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
      { name: "Implementation Guides", href: "/docs/guides" },
      { name: "API Reference", href: "/docs/api" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "System Status", href: "/status" },
      { name: "Insights Blog", href: "/blog" },
      { name: "Developer Tools", href: "/developers" },
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
 <footer className="relative py-20 border-t border-slate-200/50 bg-white" style={{ fontStyle: 'normal' }}>
 <div className="container mx-auto px-6 max-w-7xl">
 
 {/* Main Footer Content */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
 
  {/* Brand & Newsletter Column (Spans 3 columns on large screens) */}
  <div className="lg:col-span-3">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <div className="mb-6">
 <AstraventaLogo size="lg" />
 </div>
 <p className="text-sm text-slate-500 font-medium mb-8 max-w-sm leading-relaxed tracking-tight">
 Architecting the autonomous enterprise. We build resilient AI modules and high-performance engineering systems for visionary companies.
 </p>

 {/* Newsletter Subscription */}
 <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
 <h4 className="text-sm font-bold text-slate-900 font-heading mb-2 tracking-tight">Join the Vanguard</h4>
 <p className="text-xs text-slate-500 mb-4 font-medium">Get our latest engineering insights and AI research delivered monthly.</p>
 <div className="flex items-center gap-2">
 <input 
 type="email" 
 placeholder="Engineering email" 
 className="flex-1 h-10 px-4 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2910E5] focus:ring-1 focus:ring-[#2910E5] transition-all bg-white font-medium"
 />
 <button className="h-10 px-4 bg-slate-900 hover:bg-[#2910E5] text-white rounded-xl text-sm font-bold tracking-tight transition-colors flex items-center justify-center">
 Subscribe
 </button>
 </div>
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
 className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:border-[#2910E5]/30 hover:bg-[#2910E5]/5 group transition-all"
 >
 <Icon className="w-4 h-4 text-slate-400 group-hover:text-[#2910E5] transition-colors" />
 </motion.a>
 );
 })}
 </div>
 </motion.div>
 </div>

 {/* Spacer for large screens */}
 <div className="hidden lg:block lg:col-span-1 border-r border-slate-100/50" />

  {/* Links Categories (Spans 8 columns total) */}
  <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 pl-0 lg:pl-8">
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
 <li>
 {link.href.startsWith('/') ? (
 <Link
 to={link.href}
 className="text-sm font-medium text-slate-500 hover:text-[#0066FF] transition-colors group flex items-center"
 >
 <span className="w-0 h-px bg-[#0066FF] mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300" />
 {link.name}
 </Link>
 ) : (
 <a
 href={link.href}
 className="text-sm font-medium text-slate-500 hover:text-[#0066FF] transition-colors group flex items-center"
 >
 <span className="w-0 h-px bg-[#0066FF] mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300" />
 {link.name}
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
 className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4"
 >
 <div className="flex items-center gap-2">
 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
 <span className="technical-label !text-slate-500 !capitalize ![text-transform:none] tracking-normal">[ Status: All systems operational ] • © 2026 Astraventa Inc.</span>
 </div>
 <div className="flex gap-8 text-[13px] text-slate-400 font-medium">
 <Link to="/privacy" className="hover:text-[#2910E5] transition-colors">Privacy Policy</Link>
 <Link to="/terms" className="hover:text-[#2910E5] transition-colors">Terms of Service</Link>
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
 className="fixed bottom-8 right-8 w-12 h-12 bg-white border border-slate-200 shadow-lg rounded-2xl flex items-center justify-center z-50 hover:border-[#2910E5]/30 hover:shadow-xl transition-all text-slate-400 hover:text-[#2910E5]"
 aria-label="Back to top"
 >
 <ArrowUp className="w-5 h-5" />
 </motion.button>
 )}
 </AnimatePresence>
 </footer>
 );
};;
