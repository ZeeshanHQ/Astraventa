import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AstraventaLogo } from "./AstraventaLogo";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  Cloud,
  Rocket,
  Zap,
  Layers,
  Compass,
  Terminal,
  Laptop,
  ArrowUpRight,
  Database,
  Menu,
  X,
  Plus
} from "lucide-react";

const services = [
  { title: "AI Integration", href: "/services/ai", description: "Custom AI solutions to automate operations.", icon: <Bot className="w-5 h-5" /> },
  { title: "Web Engineering", href: "/services/web", description: "High-performance web applications.", icon: <Globe className="w-5 h-5" /> },
  { title: "Mobile Engineering", href: "/services/mobile", description: "Native and cross-platform mobile.", icon: <Smartphone className="w-5 h-5" /> },
  { title: "Backend Systems", href: "/services/backend", description: "Scalable robust database design.", icon: <Server className="w-5 h-5" /> },
  { title: "UI/UX Design", href: "/services/ui-ux", description: "Intuitive stunning user interfaces.", icon: <Palette className="w-5 h-5" /> },
  { title: "Security Systems", href: "/services/security", description: "Robust cybersecurity protection.", icon: <ShieldCheck className="w-5 h-5" /> },
];

const products = [
  { title: "LaunchPact AI", href: "https://launchpact.astraventa.online", description: "From Idea to Architecture in Minutes.", icon: <img src="/launchpact_logo_new.png" alt="LaunchPact AI" className="w-5 h-5 object-contain" /> },
  { title: "Shorts Cavexa", href: "https://shorts.cavexa.online", description: "High-Velocity Content, Zero Effort.", icon: <img src="/shortscavexa (1).jpg" alt="Shorts Cavexa" className="w-5 h-5 object-contain rounded-sm" /> },
  { title: "ComplyMail", href: "https://comply.astraventa.online", description: "Enterprise Email Compliance & Security.", icon: <img src="/complymail.png" alt="ComplyMail" className="w-5 h-5 object-contain" /> },
  { title: "Vectrax", href: "https://vectrax.astraventa.online", description: "AI-powered database management.", icon: <img src="/vectrax_logo.png" alt="Vectrax" className="w-5 h-5 object-contain" /> },
  { title: "Outrelix", href: "https://outrelix.astraventa.online", description: "Precision Outreach at Global Scale.", icon: <img src="/outrelix.png" alt="Outrelix" className="w-5 h-5 object-contain" /> },
];

const venturePortfolio = [
  { title: "Vectrax", href: "/products/vectrax", description: "Autonomous Database Engineer.", icon: <img src="/vectrax_logo.png" alt="Vectrax" className="w-6 h-6 object-contain" />, tag: "Live" },
  { title: "LaunchPact", href: "/products/launchpact", description: "30-Day Venture Launcher.", icon: <img src="/launchpact_logo_new.png" alt="LaunchPact" className="w-6 h-6 object-contain" />, tag: "Flagship" },
  { title: "Shorts Cavexa", href: "/products/cavexa", description: "YouTube Automation Engine.", icon: <Zap className="w-6 h-6" />, tag: "Viral" },
  { title: "Astra Vibe", href: "/tools/astra-vibe", description: "Visual Intelligence Engine.", icon: <Sparkles className="w-6 h-6" />, tag: "New" },
];

const ventureBuild = [
  { title: "MVP in 30 Days", href: "/services/web", description: "From idea to fully functional launch.", icon: <Zap className="w-5 h-5" /> },
  { title: "Equity Partnerships", href: "/contact", description: "We invest tech for long-term growth.", icon: <Handshake className="w-5 h-5" /> },
];

const ventureMethodology = [
  { title: "Vibe Coding", href: "/blog/vibe-coding", description: "How we use AI to build 10x faster.", icon: <Code2 className="w-5 h-5" /> },
  { title: "Agentic Workflows", href: "/blog/agentic-workflows", description: "Our secret autonomous tech stack.", icon: <Workflow className="w-5 h-5" /> },
];

const astraLabCategories = [
  {
    title: "Growth & Outreach",
    tools: [
      { title: "Astra Reach", href: "/coming-soon", icon: <Globe className="w-4 h-4" />, tag: "Coming Soon" },
      { title: "Astra Lead", href: "/coming-soon", icon: <Users className="w-4 h-4" />, tag: "Coming Soon" },
      { title: "Astra Ad", href: "/coming-soon", icon: <Zap className="w-4 h-4" />, tag: "Coming Soon" },
      { title: "Astra Mail", href: "/coming-soon", icon: <Mail className="w-4 h-4" />, tag: "Coming Soon" },
      { title: "Astra Funnel", href: "/coming-soon", icon: <Network className="w-4 h-4" />, tag: "Coming Soon" },
    ]
  },
  {
    title: "Content & Creative",
    tools: [
      { title: "Astra Script", href: "/coming-soon", icon: <PenTool className="w-4 h-4" />, tag: "Coming Soon" },
      { title: "Astra Prompt", href: "/tools/astra-prompt", icon: <MessageSquare className="w-4 h-4" />, tag: "Active" },
      { title: "Astra Blog", href: "/tools/astra-blog", icon: <BookOpen className="w-4 h-4" />, tag: "New" },
      { title: "Astra Translate", href: "/tools/astra-translate", icon: <Globe className="w-4 h-4" />, tag: "Active" },
      { title: "Astra Vibe", href: "/coming-soon", icon: <Sparkles className="w-4 h-4" />, tag: "Coming Soon" },
      { title: "Astra Design", href: "/coming-soon", icon: <Palette className="w-4 h-4" />, tag: "Coming Soon" },
    ]
  },
  {
    title: "Intelligence & Scale",
    tools: [
      { title: "Astra Agent", href: "/coming-soon", icon: <Bot className="w-4 h-4" />, tag: "Coming Soon" },
      { title: "Astra Flow", href: "/coming-soon", icon: <Workflow className="w-4 h-4" />, tag: "Coming Soon" },
      { title: "Astra Pulse", href: "/coming-soon", icon: <Activity className="w-4 h-4" />, tag: "Coming Soon" },
      { title: "Astra Core", href: "/coming-soon", icon: <Cpu className="w-4 h-4" />, tag: "Coming Soon" },
      { title: "Astra Secure", href: "/coming-soon", icon: <ShieldCheck className="w-4 h-4" />, tag: "Coming Soon" },
    ]
  }
];

const resources = [
  { title: "Docs", href: "/docs", description: "Technical integration playbooks.", icon: <BookOpen className="w-5 h-5" /> },
  { title: "Case Studies", href: "/case-studies", description: "Real-world autonomous impact.", icon: <PieChart className="w-5 h-5" /> },
  { title: "Insights Blog", href: "/blog", description: "Engineering trends & news.", icon: <PenTool className="w-5 h-5" /> },
];

const company = [
  { title: "About Us", href: "/about", description: "The team behind Astraventa.", icon: <Users className="w-5 h-5" /> },
  { title: "Careers", href: "/careers", description: "Join the autonomous future.", icon: <Building2 className="w-5 h-5" /> },
  { title: "Partner Network", href: "/partners", description: "Technology alliances.", icon: <Handshake className="w-5 h-5" /> },
  { title: "Trust & Security", href: "/security", description: "Enterprise-grade compliance.", icon: <ShieldCheck className="w-5 h-5" /> },
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 md:h-20 flex items-center border-b",
        isScrolled
          ? "bg-white/10 backdrop-blur-md border-slate-200/50 shadow-sm"
          : isDarkHeroPage
            ? "bg-black border-transparent"
            : "bg-white/70 backdrop-blur-md border-transparent"
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-shrink-0 flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <AstraventaLogo size="lg" className="mr-0" />
          </Link>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(
                  "rounded-full w-10 h-10",
                  (!isScrolled && isDarkHeroPage) ? "text-white hover:bg-white/10" : "text-black/80 hover:bg-slate-100"
                )}>
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-md p-0 bg-white border-r-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b flex items-center justify-between">
                    <AstraventaLogo size="md" />
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <X className="w-5 h-5" />
                      </Button>
                    </SheetTrigger>
                  </div>

                  <div className="flex-1 overflow-y-auto py-8 px-6 space-y-10">
                    {/* Solution Section */}
                    <div className="space-y-4">
                      <h5 className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">Solution</h5>
                      <div className="grid gap-2">
                        {[...services, ...products].map((item) => (
                          <Link key={item.title} to={item.href} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500">
                              {item.icon}
                            </div>
                            <div>
                              <h6 className="text-sm font-display font-bold text-slate-900">{item.title}</h6>
                              <p className="text-[11px] text-slate-500 line-clamp-1">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Venture Studio */}
                    <div className="space-y-4">
                      <h5 className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">Venture Studio</h5>
                      <div className="grid gap-2">
                        {venturePortfolio.map((item) => (
                          <Link key={item.title} to={item.href} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                            <div className="flex items-center gap-4">
                              <div className="text-primary">{item.icon}</div>
                              <div>
                                <h6 className="text-sm font-display font-bold text-slate-900">{item.title}</h6>
                                <p className="text-[11px] text-slate-400">{item.tag}</p>
                              </div>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-slate-300" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* AstraLab */}
                    <div className="space-y-4">
                      <h5 className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">AstraLab</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {astraLabCategories.flatMap(c => c.tools.slice(0, 2)).map((tool) => (
                          <Link key={tool.title} to={tool.href} className="flex flex-col gap-2 p-3 rounded-xl border border-slate-100 hover:bg-slate-50">
                            <div className="flex items-center gap-3">
                              <div className="text-slate-400">{tool.icon}</div>
                              <span className="text-xs font-bold text-slate-700">{tool.title}</span>
                            </div>
                            {tool.tag && (
                              <span className={cn(
                                "text-[7px] font-black font-['Anonymous_Pro'] px-1.5 py-0.5 rounded-full uppercase tracking-widest w-fit",
                                tool.tag === "Active" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                                tool.tag === "New" ? "bg-primary/5 text-primary border border-primary/10" :
                                "bg-amber-50 text-amber-600 border border-amber-100"
                              )}>
                                {tool.tag}
                              </span>
                            )}
                          </Link>
                        ))}
                        <Link to="/products/astra-tools" className="flex items-center justify-center gap-2 p-3 rounded-xl border border-primary/20 bg-primary/5 text-primary text-xs font-bold">
                          View All <Plus className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Others */}
                    <div className="grid grid-cols-2 gap-4">
                      <Link to="/about" className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                        <Users className="w-5 h-5 mx-auto mb-2 text-slate-400" />
                        <span className="text-xs font-bold text-slate-900">Company</span>
                      </Link>
                      <Link to="/blog" className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                        <BookOpen className="w-5 h-5 mx-auto mb-2 text-slate-400" />
                        <span className="text-xs font-bold text-slate-900">Resources</span>
                      </Link>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 border-t">
                    <Button onClick={() => navigate('/contact')} className="w-full py-6 rounded-2xl font-bold font-heading shadow-xl bg-black hover:bg-slate-900">
                      Start Project &rarr;
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Navigation - Center (Mega Menus) */}
        <div className="hidden lg:flex flex-1 justify-center relative">
          <NavigationMenu className="h-full">
            <NavigationMenuList className="gap-0">

              {/* Solution Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent h-10 px-4 font-display font-medium uppercase tracking-[0.1em] text-[11px] transition-colors",
                  (!isScrolled && isDarkHeroPage) ? "text-white/90 hover:text-white" : "text-black/80 hover:text-primary hover:bg-transparent"
                )}>
                  Solution
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="fixed left-0 top-full w-screen bg-white shadow-2xl border-t border-slate-100 py-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="max-w-[1400px] mx-auto px-8">
                      <div className="grid grid-cols-12 gap-10">
                        <div className="col-span-3 border-r border-slate-100 pr-10">
                          <div className="relative h-48 rounded-2xl overflow-hidden group mb-5">
                            <img src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Solutions" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-5 left-5 right-5">
                              <span className="text-[9px] font-['Anonymous_Pro'] text-white/70 uppercase tracking-[0.2em] font-bold mb-1 block">Enterprise</span>
                              <h4 className="text-lg font-heading font-normal text-white uppercase leading-tight tracking-wide">Autonomous <br />Infrastructure</h4>
                            </div>
                          </div>
                          <p className="text-[13px] text-slate-500 leading-relaxed mb-5 font-medium uppercase tracking-tight">End-to-end engineering, precise design systems, and autonomous agent strategy for ambitious companies.</p>
                          <Button variant="link" onClick={() => navigate('/services')} className="p-0 text-primary font-bold h-auto group text-[11px] uppercase tracking-widest font-['Anonymous_Pro']">
                            Browse All Services <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                        <div className="col-span-9 grid grid-cols-12 gap-x-10">
                          <div className="col-span-8">
                            <h5 className="text-[9px] text-slate-400 flex items-center gap-2 uppercase tracking-[0.3em] font-black font-['Anonymous_Pro'] mb-5">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                              Specialized Services
                            </h5>
                            <div className="grid grid-cols-2 gap-2">
                              {services.map((item) => (
                                <NavigationMenuLink key={item.title} asChild>
                                  <Link to={item.href} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors shrink-0">
                                      <div className="text-slate-500 group-hover:text-primary transition-colors [&>svg]:w-4 [&>svg]:h-4">{item.icon}</div>
                                    </div>
                                    <div className="pt-0.5">
                                      <h6 className="text-[13px] font-heading font-normal text-slate-900 uppercase tracking-wide group-hover:text-primary transition-colors leading-none mb-1.5">{item.title}</h6>
                                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug font-medium">{item.description}</p>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                          <div className="col-span-4">
                            <h5 className="text-[9px] text-slate-400 flex items-center gap-2 uppercase tracking-[0.3em] font-black font-['Anonymous_Pro'] mb-5">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                              SaaS Products
                            </h5>
                            <div className="space-y-2">
                             {products.map((item) => (
                                <NavigationMenuLink key={item.title} asChild>
                                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors shrink-0">
                                      <div className="text-slate-500 group-hover:text-primary transition-colors [&>img]:w-5 [&>img]:h-5">{item.icon}</div>
                                    </div>
                                    <div className="pt-0.5">
                                      <div className="flex items-center gap-2 mb-1.5">
                                        <h6 className="text-[13px] font-heading font-normal text-slate-900 uppercase tracking-wide group-hover:text-primary transition-colors leading-none">{item.title}</h6>
                                        <ArrowUpRight className="w-3 h-3 text-slate-300 group-hover:text-primary" />
                                      </div>
                                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug font-medium">{item.description}</p>
                                    </div>
                                  </a>
                                </NavigationMenuLink>
                              ))}
                              <Link to="/products" className="flex items-center justify-center gap-2 p-3 mt-2 rounded-xl border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                View All Products <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Venture Studio Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent h-10 px-4 font-display font-medium uppercase tracking-[0.1em] text-[11px] transition-colors",
                  (!isScrolled && isDarkHeroPage) ? "text-white/90 hover:text-white" : "text-black/80 hover:text-primary hover:bg-transparent"
                )}>
                  Venture Studio
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="fixed left-0 top-full w-screen bg-white text-slate-900 shadow-2xl py-8 animate-in fade-in slide-in-from-top-4 duration-500 border-t border-slate-100">
                    <div className="max-w-[1400px] mx-auto px-8">
                      <div className="grid grid-cols-12 gap-10">
                        <div className="col-span-5">
                          <h5 className="text-[9px] text-slate-400 flex items-center gap-2 uppercase tracking-[0.3em] font-black font-['Anonymous_Pro'] mb-5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> The Portfolio (Our Startups)
                          </h5>
                          <div className="grid grid-cols-2 gap-3">
                            {venturePortfolio.map((item) => (
                              <NavigationMenuLink key={item.title} asChild>
                                <Link to={item.href} className="group relative p-5 rounded-[1.5rem] bg-slate-50 border border-slate-100 hover:bg-slate-100 hover:border-primary/30 transition-all shadow-sm">
                                  <div className="flex justify-between items-start mb-3">
                                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center group-hover:text-primary transition-colors [&>svg]:w-4 [&>svg]:h-4">
                                      {item.icon}
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary/70 transition-colors leading-[1.1] font-['Anonymous_Pro']">{item.tag}</span>
                                  </div>
                                  <h6 className="text-[13px] font-heading font-normal mb-1 text-slate-900 group-hover:text-primary transition-colors tracking-wide leading-none">{item.title}</h6>
                                  <p className="text-[11px] text-slate-500 font-medium">{item.description}</p>
                                  <ArrowUpRight className="absolute top-4 right-4 w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                        <div className="col-span-4 border-l border-slate-100 pl-10 flex flex-col justify-between">
                          <div>
                            <h5 className="text-[9px] text-slate-400 uppercase tracking-[0.3em] font-black font-['Anonymous_Pro'] mb-5">Build With Us</h5>
                            <div className="space-y-4">
                              {ventureBuild.map((item) => (
                                <NavigationMenuLink key={item.title} asChild>
                                  <Link to={item.href} className="group flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all text-slate-500 shrink-0 [&>svg]:w-4 [&>svg]:h-4">
                                      {item.icon}
                                    </div>
                                    <div className="pt-0.5">
                                      <h6 className="text-[13px] font-heading font-normal text-slate-900 group-hover:text-primary transition-colors tracking-wide leading-none mb-1">{item.title}</h6>
                                      <p className="text-[11px] font-medium text-slate-500">{item.description}</p>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                          <div className="mt-8 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                            <h6 className="text-[13px] font-heading font-normal mb-1 text-slate-900 tracking-wide">Have a disruptive idea?</h6>
                            <p className="text-[11px] text-slate-500 mb-3 leading-relaxed font-medium">We partner with founders to build enterprise-grade SaaS in record time.</p>
                            <button onClick={() => navigate('/contact')} className="text-[10px] font-black font-['Anonymous_Pro'] text-primary hover:text-slate-900 transition-colors flex items-center gap-2 uppercase tracking-widest">Pitch Your Venture <ArrowRight className="w-3.5 h-3.5" /></button>
                          </div>
                        </div>
                        <div className="col-span-3 border-l border-slate-100 pl-10 flex flex-col justify-between">
                          <div>
                            <h5 className="text-[9px] text-slate-400 uppercase tracking-[0.3em] font-black font-['Anonymous_Pro'] mb-5">Our Playbook</h5>
                            <div className="space-y-5">
                              {ventureMethodology.map((item) => (
                                <NavigationMenuLink key={item.title} asChild>
                                  <Link to={item.href} className="group block">
                                    <div className="flex items-center gap-2.5 mb-1.5">
                                      <div className="text-primary group-hover:scale-110 transition-transform [&>svg]:w-4 [&>svg]:h-4">{item.icon}</div>
                                      <h6 className="text-[13px] font-heading font-normal text-slate-900 group-hover:text-primary transition-colors tracking-wide">{item.title}</h6>
                                    </div>
                                    <p className="text-[11px] font-medium text-slate-500 leading-snug">{item.description}</p>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mt-6 border border-slate-100 group cursor-pointer shadow-sm">
                            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Playbook" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                              <span className="text-[9px] font-black uppercase tracking-widest text-primary font-['Anonymous_Pro']">Methodology</span>
                              <p className="text-[12px] font-bold text-slate-900">The Secret Stack &rarr;</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* AstraLab Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent h-10 px-4 font-display font-medium uppercase tracking-[0.1em] text-[11px] transition-colors",
                  (!isScrolled && isDarkHeroPage) ? "text-white/90 hover:text-white" : "text-black/80 hover:text-primary hover:bg-transparent"
                )}>
                  AstraLab
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="fixed left-0 top-full w-screen bg-white shadow-2xl py-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="max-w-[1400px] mx-auto px-8">
                      <div className="grid grid-cols-12 gap-10">
                        <div className="col-span-3 border-r border-slate-100 pr-10">
                          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center mb-5 shadow-md">
                            <Terminal className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="text-lg font-heading font-normal text-slate-900 tracking-wide uppercase leading-none mb-3">The Tool <br />Network</h4>
                          <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-5">33+ specialized AI micro-tools designed to automate every facet of the modern digital enterprise.</p>
                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="flex items-center gap-2.5 mb-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                              <span className="text-[9px] font-black uppercase tracking-[0.2em] font-['Anonymous_Pro'] text-slate-400">Status: All Ops Normal</span>
                            </div>
                            <p className="text-[11px] font-medium text-slate-500 leading-tight">Enterprise API access available for high-volume custom integrations.</p>
                          </div>
                        </div>
                        <div className="col-span-9 grid grid-cols-3 gap-8">
                          {astraLabCategories.map((category) => (
                            <div key={category.title}>
                              <h5 className="text-[9px] text-slate-400 uppercase tracking-[0.3em] font-black font-['Anonymous_Pro'] mb-4">{category.title}</h5>
                              <div className="grid grid-cols-1 gap-1.5">
                                {category.tools.map((tool) => (
                                  <NavigationMenuLink key={tool.title} asChild>
                                    <Link to={tool.href} className="group flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                                      <div className="flex items-center gap-3">
                                        <div className="text-slate-400 group-hover:text-primary transition-colors [&>svg]:w-4 [&>svg]:h-4">{tool.icon}</div>
                                        <div className="flex items-center gap-2">
                                          <span className="text-[13px] font-heading font-normal text-slate-700 tracking-wide uppercase group-hover:text-primary transition-colors leading-none pt-0.5">{tool.title}</span>
                                          {tool.tag && (
                                            <span className={cn(
                                              "text-[7px] font-black font-['Anonymous_Pro'] px-1.5 py-0.5 rounded-full uppercase tracking-widest",
                                              tool.tag === "Active" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" :
                                              tool.tag === "New" ? "bg-primary/5 text-primary border border-primary/10" :
                                              "bg-amber-50 text-amber-600 border border-amber-100"
                                            )}>
                                              {tool.tag}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-all translate-x-1" />
                                    </Link>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            </div>
                          ))}
                          <div className="col-span-3 mt-4 pt-6 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Laptop className="w-4 h-4 text-primary" />
                              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-widest font-['Anonymous_Pro']">"Engineering the automated future, one tool at a time."</span>
                            </div>
                            <Button variant="outline" size="sm" onClick={() => navigate('/products/astra-tools')} className="rounded-full shadow-sm text-[10px] uppercase font-black tracking-widest font-['Anonymous_Pro'] text-slate-900 hover:bg-slate-50 hover:text-[#7E96F6] hover:border-[#7E96F6]/30 h-8">Explore 33+ Tools <ArrowRight className="w-3.5 h-3.5 ml-2" /></Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent h-10 px-4 font-display font-medium uppercase tracking-[0.1em] text-[11px] transition-colors",
                  (!isScrolled && isDarkHeroPage) ? "text-white/90 hover:text-white" : "text-black/80 hover:text-primary hover:bg-transparent"
                )}>
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="fixed left-0 top-full w-screen bg-white shadow-2xl py-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-12 gap-10">
                      <div className="col-span-3">
                        <h4 className="text-[9px] text-slate-400 uppercase tracking-[0.3em] font-black font-['Anonymous_Pro'] mb-5">Knowledge Base</h4>
                        <div className="space-y-1.5">
                          {resources.map((item) => (
                            <NavigationMenuLink key={item.title} asChild>
                              <Link to={item.href} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors shrink-0">
                                  <div className="text-slate-500 group-hover:text-primary transition-colors [&>svg]:w-4 [&>svg]:h-4">{item.icon}</div>
                                </div>
                                <div className="pt-0.5">
                                  <h6 className="text-[13px] font-heading font-normal text-slate-900 group-hover:text-primary transition-colors uppercase tracking-wide leading-none mb-1.5">{item.title}</h6>
                                  <p className="text-[11px] font-medium text-slate-500 leading-snug">{item.description}</p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                      <div className="col-span-6 grid grid-cols-2 gap-4">
                        <div className="relative group overflow-hidden rounded-[1.5rem] border border-slate-100 shadow-sm cursor-pointer aspect-square max-h-[220px]">
                          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog" />
                          <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors" />
                          <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <span className="text-[9px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.3em] mb-2 block">Latest Insight</span>
                            <h4 className="text-lg font-heading font-normal text-white uppercase tracking-wide leading-tight mb-4">The Rise of Agentic AI Workflows</h4>
                            <Link to="/blog" className="text-[10px] uppercase font-black tracking-widest font-['Anonymous_Pro'] text-white flex items-center gap-2">Read Post <ArrowRight className="w-3.5 h-3.5" /></Link>
                          </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-[1.5rem] border border-slate-100 shadow-sm cursor-pointer aspect-square max-h-[220px]">
                          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Docs" />
                          <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors" />
                          <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <span className="text-[9px] font-black font-['Anonymous_Pro'] text-[#E5B610] uppercase tracking-[0.3em] mb-2 block">Developer Hub</span>
                            <h4 className="text-lg font-heading font-normal text-white uppercase tracking-wide leading-tight mb-4">Build on the Astraventa Engine</h4>
                            <Link to="/docs" className="text-[10px] uppercase font-black tracking-widest font-['Anonymous_Pro'] text-white flex items-center gap-2">Explore API <ArrowRight className="w-3.5 h-3.5" /></Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 bg-slate-50 rounded-[1.5rem] p-6 border border-slate-100 flex flex-col justify-between max-h-[220px]">
                        <div>
                          <h5 className="text-[9px] font-black font-['Anonymous_Pro'] text-slate-400 uppercase tracking-widest mb-3">Newsletter</h5>
                          <p className="text-[12px] font-medium text-slate-900 mb-3 leading-snug">Stay ahead with autonomous engineering insights.</p>
                          <input type="email" placeholder="Email address" className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs mb-3 focus:outline-none focus:ring-1 focus:ring-primary h-9" />
                          <Button className="w-full h-9 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-md">Subscribe &rarr;</Button>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <Compass className="w-3.5 h-3.5 text-primary" />
                          <span className="text-[9px] font-black font-['Anonymous_Pro'] text-slate-400 uppercase tracking-widest">Navigating the Future</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Company Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "bg-transparent h-10 px-4 font-display font-medium uppercase tracking-[0.1em] text-[11px] transition-colors",
                  (!isScrolled && isDarkHeroPage) ? "text-white/90 hover:text-white" : "text-black/80 hover:text-primary hover:bg-transparent"
                )}>
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="fixed left-0 top-full w-screen bg-white shadow-2xl py-8 animate-in fade-in slide-in-from-top-4 duration-500 border-t border-slate-100">
                    <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-12 gap-10">
                      <div className="col-span-4 border-r border-slate-100 pr-10">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
                          <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="text-lg font-heading font-normal text-slate-900 uppercase tracking-wide leading-tight mb-3">Engineering the <br />Future of Humanity</h4>
                        <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-6">Astraventa is a high-velocity collective of world-class engineers, designers, and strategists.</p>
                        <div className="flex items-center gap-8">
                          <div>
                            <div className="text-xl font-heading font-normal text-slate-900 leading-none mb-1.5 tracking-wide">14+</div>
                            <div className="text-[9px] font-black font-['Anonymous_Pro'] text-slate-400 uppercase tracking-[0.3em] leading-none">Global Hubs</div>
                          </div>
                          <div>
                            <div className="text-xl font-heading font-normal text-slate-900 leading-none mb-1.5 tracking-wide">120+</div>
                            <div className="text-[9px] font-black font-['Anonymous_Pro'] text-slate-400 uppercase tracking-[0.3em] leading-none">Specialists</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-8 flex flex-col justify-center pl-4">
                        <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                          {company.map((item) => (
                            <NavigationMenuLink key={item.title} asChild>
                              <Link to={item.href} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100 group">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors shrink-0">
                                  <div className="text-slate-500 group-hover:text-primary transition-colors [&>svg]:w-5 [&>svg]:h-5">{item.icon}</div>
                                </div>
                                <div className="pt-0.5">
                                  <h6 className="text-[14px] font-heading font-normal text-slate-900 uppercase tracking-wide group-hover:text-primary transition-colors leading-none mb-1.5">{item.title}</h6>
                                  <p className="text-[12px] font-medium text-slate-500">{item.description}</p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-[11px] font-medium uppercase font-['Anonymous_Pro'] tracking-widest text-slate-500">Join our world-class engineering collective.</span>
                          </div>
                          <Button onClick={() => navigate('/careers')} className="h-9 rounded-xl font-black text-[10px] uppercase tracking-widest px-6 bg-black hover:bg-slate-900 shadow-custom">Open Roles &rarr;</Button>
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
        <div className="flex-shrink-0 flex items-center gap-5">
          <ButtonWithIcon
            onClick={() => navigate('/contact')}
            className="bg-black hover:bg-black text-white border-transparent"
          >
            Start Project
          </ButtonWithIcon>
          <Link
            to="/products/astra-tools"
            className={cn(
              "hidden xl:block font-display font-medium uppercase tracking-[0.1em] text-[11px] transition-all duration-300",
              (!isScrolled && isDarkHeroPage) ? "text-white/90 hover:text-white" : "text-black/60 hover:text-primary"
            )}
          >
            View Tools
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
