import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AstraventaLogo } from "./AstraventaLogo";
import { Button } from "@/components/ui/button";
import {
 NavigationMenu,
 NavigationMenuContent,
 NavigationMenuItem,
 NavigationMenuLink,
 NavigationMenuList,
 NavigationMenuTrigger,
 navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { 
 Bot, 
 Cpu, 
 ShieldCheck, 
 Palette, 
 PenTool, 
 Globe, 
 Smartphone, 
 Server,
 Boxes,
 Sparkles,
 BookOpen,
 Users,
 Building2,
 Mail,
 ArrowRight,
 MessageSquare,
 Code2,
 PieChart,
 Activity,
 Wrench,
 Network,
 Handshake,
 Workflow,
 Cloud
} from "lucide-react";

const services = [
 { title: "AI Integration", href: "/services/ai", description: "Custom AI solutions to automate operations.", icon: <Bot className="w-5 h-5 text-primary" /> },
 { title: "Intelligent Automation", href: "/services/automation", description: "Streamline logic with smart processes.", icon: <Cpu className="w-5 h-5 text-emerald-500" /> },
 { title: "Security Systems", href: "/services/security", description: "Robust cybersecurity protection.", icon: <ShieldCheck className="w-5 h-5 text-rose-500" /> },
 { title: "UI/UX Design", href: "/services/ui-ux", description: "Intuitive stunning user interfaces.", icon: <Palette className="w-5 h-5 text-purple-500" /> },
 { title: "Brand Identity", href: "/services/branding", description: "Build a memorable resonance.", icon: <PenTool className="w-5 h-5 text-orange-500" /> },
 { title: "Web Engineering", href: "/services/web", description: "High-performance web applications.", icon: <Globe className="w-5 h-5 text-blue-500" /> },
 { title: "Mobile Engineering", href: "/services/mobile", description: "Native and cross-platform mobile.", icon: <Smartphone className="w-5 h-5 text-pink-500" /> },
 { title: "Backend Systems", href: "/services/backend", description: "Scalable robust database design.", icon: <Server className="w-5 h-5 text-slate-500" /> },
 { title: "AI Chatbots", href: "/services/chatbots", description: "Intelligent conversational agents.", icon: <MessageSquare className="w-5 h-5 text-indigo-500" /> },
];

const products = [
  { title: "LaunchPact AI", href: "/products/launchpact", description: "From Idea to Architecture in Minutes. Turning startup ideas into actionable blueprints.", icon: <Sparkles className="w-6 h-6 text-primary" /> },
  { title: "Shorts Cavexa", href: "/products/cavexa", description: "High-Velocity Content, Zero Effort. AI-powered automation for rapid short-form creation.", icon: <Server className="w-6 h-6 text-indigo-500" /> },
  { title: "Outrelix", href: "/products/outrelix", description: "Precision Outreach at Global Scale. Scale cold outreach with personalized intelligence.", icon: <Globe className="w-6 h-6 text-emerald-500" /> },
  { title: "ComplyMail", href: "/products/complymail", description: "Secure Communication, Architected by AI. Regulatory sentinel for automated compliance.", icon: <Mail className="w-6 h-6 text-rose-500" /> },
  { title: "LegalFlow", href: "/products/legalflow", description: "Engineering Precision in Legal Workflows. Case orchestration and document automation.", icon: <ShieldCheck className="w-6 h-6 text-blue-500" /> },
  { title: "Vectrax", href: "/products/vectrax", description: "Manage Supabase from your pocket. AI-powered project scanning and database management.", icon: <Boxes className="w-6 h-6 text-purple-500" /> },
];

const solutions = [
  { title: "Astra Tools Ecosystem", href: "/products/astra-tools", description: "Suite of AI-powered tools for modern businesses.", icon: <Boxes className="w-6 h-6 text-primary" /> },
  { title: "Astra AI Concierge", href: "/solutions/ai-concierge", description: "Intelligent customer service agents.", icon: <Sparkles className="w-6 h-6 text-indigo-500" /> },
  { title: "Autonomous Operations", href: "/solutions/autonomous-operations", description: "Self-correcting business workflows.", icon: <Workflow className="w-6 h-6 text-emerald-500" /> },
  { title: "AI Analytics", href: "/solutions/analytics", description: "Data-driven business intelligence.", icon: <Bot className="w-6 h-6 text-rose-500" /> },
];

const resources = [
  { title: "Implementation Guides", href: "/docs/guides", description: "Step-by-step technical integration playbooks.", icon: <BookOpen className="w-5 h-5 text-blue-500" /> },
  { title: "API Reference", href: "/docs/api", description: "Comprehensive endpoints and SDK documentation.", icon: <Code2 className="w-5 h-5 text-slate-600" /> },
  { title: "Case Studies", href: "/case-studies", description: "Real-world impact of autonomous enterprise systems.", icon: <PieChart className="w-5 h-5 text-emerald-500" /> },
  { title: "System Status", href: "/status", description: "Real-time metrics and operational health.", icon: <Activity className="w-5 h-5 text-rose-500" /> },
  { title: "Insights Blog", href: "/blog", description: "Latest company news and engineering trends.", icon: <PenTool className="w-5 h-5 text-indigo-500" /> },
  { title: "Developer Tools", href: "/developers", description: "Open-source libraries and deployment scripts.", icon: <Wrench className="w-5 h-5 text-slate-500" /> },
];

const company = [
  { title: "About Us", href: "/about", description: "Our mission, vision, and the team behind Astraventa.", icon: <Users className="w-5 h-5 text-blue-500" /> },
  { title: "Careers", href: "/careers", description: "Join us in architecting the autonomous future.", icon: <Building2 className="w-5 h-5 text-slate-600" /> },
  { title: "Leadership Team", href: "/leadership", description: "The architects driving our innovation.", icon: <Network className="w-5 h-5 text-emerald-500" /> },
  { title: "Partner Network", href: "/partners", description: "Certified integrators and technology alliances.", icon: <Handshake className="w-5 h-5 text-indigo-500" /> },
  { title: "Trust & Security", href: "/security", description: "Our commitment to enterprise-grade compliance.", icon: <ShieldCheck className="w-5 h-5 text-rose-500" /> },
  { title: "Contact Sales", href: "/contact", description: "Get in touch with our enterprise experts.", icon: <Mail className="w-5 h-5 text-slate-600" /> },
];

interface HeaderProps {
  isDarkHeroPage?: boolean;
}

export const Header = ({ isDarkHeroPage = false }: HeaderProps) => {
 const [isScrolled, setIsScrolled] = useState(false);
 const navigate = useNavigate();
 const location = useLocation();

 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
 };

 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
 <motion.header
 initial={{ y: -100 }}
 animate={{ y: 0 }}
 transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 md:h-24 flex items-center border-b",
        isScrolled 
          ? "bg-white/10 backdrop-blur-md border-slate-200/50 shadow-sm" 
          : isDarkHeroPage 
            ? "bg-black border-transparent" 
            : "bg-white/50 backdrop-blur-md border-transparent"
      )}
 >
 <div className="w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between">
 
 {/* Logo - Left */}
 <div className="flex-shrink-0 flex items-center">
 <Link to="/" className="flex items-center">
 <AstraventaLogo size="lg" className="mr-0" />
 </Link>
 </div>

 {/* Navigation - Center (Mega Menus) */}
 <div className="hidden lg:flex flex-1 justify-center relative">
 <NavigationMenu className="h-full">
 <NavigationMenuList className="gap-2">
 
 {/* Products Nav Item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn(
            "bg-transparent h-12 font-bold font-heading tracking-tight text-base transition-colors",
            (!isScrolled && isDarkHeroPage) ? "text-white hover:text-white/80 hover:bg-white/10" : "text-slate-700 hover:text-primary hover:bg-slate-100/50"
          )}>
            Products
          </NavigationMenuTrigger>
 <NavigationMenuContent>
 <div className="fixed left-0 top-full w-screen bg-white/95 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border-b border-t border-slate-200/50 py-10 animate-in fade-in slide-in-from-top-2" style={{ fontStyle: 'normal' }}>
 <div className="max-w-[1400px] mx-auto px-6">
 <div className="grid grid-cols-12 gap-8 lg:gap-12">

 {/* Hero Card (Left, spans 4) */}
 <div className="col-span-12 lg:col-span-4 hidden lg:block">
 <div className="relative h-full min-h-[280px] rounded-3xl overflow-hidden group cursor-pointer border border-slate-200/50 shadow-sm bg-slate-900">
 <img
 src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
 alt="SaaS Ecosystem"
 className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-700 group-"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
 <div className="absolute bottom-0 left-0 p-8">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 mb-4">
 <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
 <span className="technical-label !text-primary !text-[10px]">The SaaS Ecosystem</span>
 </div>
 <h3 className="text-xl font-black text-white mb-2 leading-tight tracking-tight">Autonomous Products</h3>
 <p className="text-slate-400 text-sm font-medium mb-6 line-clamp-2">6+ enterprise SaaS modules built on the Astra Intelligence Layer.</p>
 <button onClick={() => navigate('/products')} className="flex items-center gap-2 text-sm font-bold text-primary group/btn">
 Explore Ecosystem
 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
 </button>
 </div>
 </div>
 </div>

 {/* Products list (Right, spans 8) */}
 <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
 <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
 <h3 className="technical-label !text-slate-900">SaaS Platforms</h3>
 <Button variant="link" onClick={() => navigate('/products')} className="p-0 h-auto font-bold text-[#2910E5] hover:text-[#2910E5]/80">View All Products &rarr;</Button>
 </div>
 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
 {products.map((component) => (
 <li key={component.title}>
 <NavigationMenuLink asChild>
 <Link
 to={component.href}
 className="flex items-start select-none space-x-4 rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-200/50 hover:shadow-sm group"
 >
 <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-[#2910E5]/30 group-hover:bg-[#2910E5]/5 transition-colors">
 <div className="text-slate-600 group-hover:text-[#2910E5] transition-colors">
 {component.icon}
 </div>
 </div>
 <div className="flex-1 pt-1.5">
 <div className="flex items-center gap-2 mb-1.5">
 <div className="text-base font-bold leading-none font-heading tracking-tight text-slate-900 group-hover:text-[#2910E5] transition-colors">{component.title}</div>
 <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:text-[#2910E5] transition-all duration-300" />
 </div>
 <p className="text-sm leading-snug text-slate-500 font-medium whitespace-normal">
 {component.description}
 </p>
 </div>
 </Link>
 </NavigationMenuLink>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </div>
 </NavigationMenuContent>
 </NavigationMenuItem>

 {/* Solutions Full-Width Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn(
            "bg-transparent h-12 font-bold font-heading tracking-tight text-base transition-colors",
            (!isScrolled && isDarkHeroPage) ? "text-white hover:text-white/80 hover:bg-white/10" : "text-slate-700 hover:text-primary hover:bg-slate-100/50"
          )}>
            Solutions
          </NavigationMenuTrigger>
 <NavigationMenuContent>
 <div className="fixed left-0 top-full w-screen bg-white/95 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border-b border-t border-slate-200/50 py-10 animate-in fade-in slide-in-from-top-2" style={{ fontStyle: 'normal' }}>
 <div className="max-w-[1400px] mx-auto px-6">
 <div className="grid grid-cols-12 gap-8 lg:gap-12">
 
 {/* Highlight Feature Card (Left Column, spans 4) */}
 <div className="col-span-12 lg:col-span-4 hidden lg:block">
 <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden group cursor-pointer border border-slate-200/50 shadow-sm">
 <img 
 src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" 
 alt="Astra Tools" 
 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
 
 <div className="absolute bottom-0 left-0 p-8">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 mb-4">
 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
 <span className="technical-label !text-white !text-[10px]">Featured Ecosystem</span>
 </div>
 <h3 className="text-2xl font-black text-white mb-2 leading-tight tracking-tight">The Agentic Toolbelt</h3>
 <p className="text-slate-300 text-sm font-medium mb-6 line-clamp-2">Deploy 33+ autonomous AI modules designed for enterprise scaling.</p>
 
 <button onClick={() => navigate('/products/astra-tools')} className="flex items-center gap-2 text-sm font-bold text-white group/btn">
 Explore Tools
 <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
 </button>
 </div>
 </div>
 </div>

 {/* Mega Menu Items (Right Column, spans 8) */}
 <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
 <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
 <h3 className="technical-label !text-slate-900">Core Solutions</h3>
 <Button variant="link" onClick={() => navigate('/products')} className="p-0 h-auto font-bold text-[#2910E5] hover:text-[#2910E5]/80">View All &rarr;</Button>
 </div>
 
 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
 {solutions.map((component) => (
 <li key={component.title}>
 <NavigationMenuLink asChild>
 <Link
 to={component.href}
 className="flex items-start select-none space-x-4 rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-200/50 hover:shadow-sm group"
 >
 <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-[#2910E5]/30 group-hover:bg-[#2910E5]/5 transition-colors">
 <div className="text-slate-600 group-hover:text-[#2910E5] transition-colors">
 {component.icon}
 </div>
 </div>
 <div className="flex-1 pt-1.5">
 <div className="flex items-center gap-2 mb-1.5">
 <div className="text-base font-bold leading-none font-heading tracking-tight text-slate-900 group-hover:text-[#2910E5] transition-colors">{component.title}</div>
 <ArrowRight className="w-3.5 h-3.5 text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:text-[#2910E5] transition-all duration-300" />
 </div>
 <p className="text-sm leading-snug text-slate-500 font-medium whitespace-normal">
 {component.description}
 </p>
 </div>
 </Link>
 </NavigationMenuLink>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </div>
 </NavigationMenuContent>
 </NavigationMenuItem>

 {/* Services Full-Width Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn(
            "bg-transparent h-12 font-bold font-heading tracking-tight text-base transition-colors",
            (!isScrolled && isDarkHeroPage) ? "text-white hover:text-white/80 hover:bg-white/10" : "text-slate-700 hover:text-primary hover:bg-slate-100/50"
          )}>
            Services
          </NavigationMenuTrigger>
 <NavigationMenuContent>
 <div className="fixed left-0 top-full w-screen bg-white/95 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border-b border-t border-slate-200/50 py-10 animate-in fade-in slide-in-from-top-2" style={{ fontStyle: 'normal' }}>
 <div className="max-w-[1400px] mx-auto px-6">
 <div className="grid grid-cols-12 gap-8 lg:gap-12">
 
 {/* Highlights (Left Column, spans 3) */}
 <div className="col-span-12 lg:col-span-3 border-r border-slate-100 pr-8 hidden lg:flex flex-col justify-between">
 <div>
 <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-6">
 <Sparkles className="w-6 h-6 text-white" />
 </div>
 <h3 className="technical-label !text-slate-900 mb-4">Professional Services</h3>
 <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">End-to-end engineering, precise design systems, and autonomous agent strategy for ambitious companies.</p>
 </div>
 
 <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
 <h4 className="font-bold text-slate-900 mb-1 text-sm">Need a custom scope?</h4>
 <p className="text-xs text-slate-500 mb-3">Talk to our lead architects.</p>
 <Button onClick={() => navigate('/contact')} className="w-full h-9 bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 text-xs font-bold shadow-sm">
 Book Consultation
 </Button>
 </div>
 </div>

 {/* Mega Menu Items (Right Column, spans 9) */}
 <div className="col-span-12 lg:col-span-9">
 <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 lg:hidden">
 <h3 className="technical-label !text-slate-900">Our Services</h3>
 </div>
 <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
 {services.map((component) => {
 const isActive = location.pathname.startsWith(component.href);
 return (
 <li key={component.title}>
 <NavigationMenuLink asChild>
 <Link
 to={component.href}
 className={cn(
 "flex items-center select-none space-x-3 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-slate-50 border group",
 isActive ? "bg-slate-50 border-[#2910E5]/20 shadow-sm" : "border-transparent hover:border-slate-200/50 hover:shadow-sm"
 )}
 >
 <div className={cn(
 "p-2.5 rounded-lg shadow-sm border transition-colors flex-shrink-0 group-hover:border-[#2910E5]/30 group-hover:bg-[#2910E5]/5",
 isActive ? "bg-[#2910E5]/5 border-[#2910E5]/30" : "bg-white border-slate-100"
 )}>
 <div className={cn(
 "transition-colors",
 isActive ? "text-[#2910E5]" : "text-slate-600 group-hover:text-[#2910E5]"
 )}>
 {component.icon}
 </div>
 </div>
 <div>
 <div className="flex items-center gap-1.5 mb-1.5">
 <div className={cn(
 "text-sm font-bold leading-none font-heading tracking-tight transition-colors",
 isActive ? "text-[#2910E5]" : "text-slate-900 group-hover:text-[#2910E5]"
 )}>{component.title}</div>
 </div>
 <p className="line-clamp-1 text-xs leading-snug text-slate-500 font-medium">
 {component.description}
 </p>
 </div>
 </Link>
 </NavigationMenuLink>
 </li>
 );
 })}
 </ul>
 </div>
 </div>
 </div>
 </div>
 </NavigationMenuContent>
 </NavigationMenuItem>

            {/* Resources Full-Width Menu */}
                       <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(
                "bg-transparent h-12 font-bold font-heading tracking-tight text-base transition-colors",
                (!isScrolled && isDarkHeroPage) ? "text-white hover:text-white/80 hover:bg-white/10" : "text-slate-700 hover:text-primary hover:bg-slate-100/50"
              )}>
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="fixed left-0 top-full w-screen bg-white/95 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border-b border-t border-slate-200/50 py-10 animate-in fade-in slide-in-from-top-2" style={{ fontStyle: 'normal' }}>
                  <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-12 gap-8 lg:gap-12">
                      <div className="col-span-12 lg:col-span-3 border-r border-slate-100 pr-8 hidden lg:flex flex-col justify-between">
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                            <BookOpen className="w-6 h-6 text-[#2910E5]" />
                          </div>
                          <h3 className="technical-label !text-slate-900 mb-4">Knowledge Hub</h3>
                          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">Explore our comprehensive documentation, read the latest articles, and stay updated with our insights.</p>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-9">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 lg:hidden">
                          <h3 className="technical-label !text-slate-900">Knowledge Base</h3>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                          {resources.map((item) => {
                            const isActive = location.pathname.startsWith(item.href);
                            return (
                              <li key={item.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={item.href}
                                    className={cn(
                                      "flex items-center select-none space-x-3 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-slate-50 border group",
                                      isActive ? "bg-slate-50 border-[#2910E5]/20 shadow-sm" : "border-transparent hover:border-slate-200/50 hover:shadow-sm"
                                    )}
                                  >
                                    <div className={cn(
                                      "p-2.5 rounded-lg shadow-sm border transition-colors flex-shrink-0 group-hover:border-[#2910E5]/30 group-hover:bg-[#2910E5]/5",
                                      isActive ? "bg-[#2910E5]/5 border-[#2910E5]/30" : "bg-white border-slate-100"
                                    )}>
                                      <div className={cn(
                                        "transition-colors",
                                        isActive ? "text-[#2910E5]" : "text-slate-600 group-hover:text-[#2910E5]"
                                      )}>
                                        {item.icon}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-1.5 mb-1.5">
                                        <div className={cn(
                                          "text-sm font-bold leading-none font-heading tracking-tight transition-colors",
                                          isActive ? "text-[#2910E5]" : "text-slate-900 group-hover:text-[#2910E5]"
                                        )}>{item.title}</div>
                                      </div>
                                      <p className="line-clamp-1 text-xs leading-snug text-slate-500 font-medium">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Company Full-Width Menu */}
                       <NavigationMenuItem>
              <NavigationMenuTrigger className={cn(
                "bg-transparent h-12 font-bold font-heading tracking-tight text-base transition-colors",
                (!isScrolled && isDarkHeroPage) ? "text-white hover:text-white/80 hover:bg-white/10" : "text-slate-700 hover:text-primary hover:bg-slate-100/50"
              )}>
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="fixed left-0 top-full w-screen bg-white/95 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border-b border-t border-slate-200/50 py-10 animate-in fade-in slide-in-from-top-2" style={{ fontStyle: 'normal' }}>
                  <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-12 gap-8 lg:gap-12">
                      <div className="col-span-12 lg:col-span-3 border-r border-slate-100 pr-8 hidden lg:flex flex-col justify-between">
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                            <Users className="w-6 h-6 text-[#2910E5]" />
                          </div>
                          <h3 className="technical-label !text-slate-900 mb-4">Astraventa Culture</h3>
                          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">Join our mission to shape the future of autonomous systems and seamless digital experiences.</p>
                        </div>
                      </div>
                      <div className="col-span-12 lg:col-span-9">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 lg:hidden">
                          <h3 className="technical-label !text-slate-900">About Us</h3>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                          {company.map((item) => {
                            const isActive = location.pathname.startsWith(item.href);
                            return (
                              <li key={item.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={item.href}
                                    className={cn(
                                      "flex items-center select-none space-x-3 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-slate-50 border group",
                                      isActive ? "bg-slate-50 border-[#2910E5]/20 shadow-sm" : "border-transparent hover:border-slate-200/50 hover:shadow-sm"
                                    )}
                                  >
                                    <div className={cn(
                                      "p-2.5 rounded-lg shadow-sm border transition-colors flex-shrink-0 group-hover:border-[#2910E5]/30 group-hover:bg-[#2910E5]/5",
                                      isActive ? "bg-[#2910E5]/5 border-[#2910E5]/30" : "bg-white border-slate-100"
                                    )}>
                                      <div className={cn(
                                        "transition-colors",
                                        isActive ? "text-[#2910E5]" : "text-slate-600 group-hover:text-[#2910E5]"
                                      )}>
                                        {item.icon}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-1.5 mb-1.5">
                                        <div className={cn(
                                          "text-sm font-bold leading-none font-heading tracking-tight transition-colors",
                                          isActive ? "text-[#2910E5]" : "text-slate-900 group-hover:text-[#2910E5]"
                                        )}>{item.title}</div>
                                      </div>
                                      <p className="line-clamp-1 text-xs leading-snug text-slate-500 font-medium">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

 </NavigationMenuList>
 </NavigationMenu>
 </div>

        {/* Action Buttons - Right */}
        <div className="flex-shrink-0 flex items-center gap-6">
                   <Link 
            to="/products/astra-tools" 
            className={cn(
              "hidden xl:block font-bold font-heading tracking-tight transition-all duration-300 text-base",
              (!isScrolled && isDarkHeroPage) ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-primary"
            )}
          >
            View Tools
          </Link>
          <Button 
            onClick={() => navigate('/contact')}
            className="btn-primary group hidden md:flex h-12 px-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              Start Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
 </div>
 </motion.header>
  );
};
