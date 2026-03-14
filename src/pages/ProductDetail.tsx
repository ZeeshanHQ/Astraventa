import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  Rocket, 
  Search, 
  Video, 
  Target, 
  ShieldCheck, 
  Mail, 
  ArrowLeft, 
  Cpu, 
  Zap, 
  BarChart3, 
  Binary, 
  Terminal,
  ArrowRight,
  Sparkles,
  Layers,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PRODUCT_DATA: Record<string, any> = {
  "launchpact": {
    title: "LaunchPact AI",
    tagline: "The Venture Architect",
    headline: "From Idea to Architecture in Minutes.",
    description: "LaunchPact AI turns fluid startup ideas into actionable engineering blueprints. We generate a comprehensive 30-day execution framework, ensuring you never write a line of code without a strategic directive.",
    icon: Rocket,
    color: "text-primary",
    bgColor: "bg-primary/10",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    features: [
      { title: "30-Day Blueprint", desc: "Automated generation of tech stack, UI/UX strategy, and market positioning.", icon: Target },
      { title: "Architecture Alpha", desc: "Native cloud formation and database schema documentation generated instantly.", icon: Binary },
      { title: "Market Fit Pulse", desc: "AI-driven competitive analysis and feature prioritization based on market trends.", icon: BarChart3 }
    ]
  },
  "vectrax": {
    title: "Vectrax",
    tagline: "The Intelligent Project Scanner",
    headline: "Manage Supabase from your pocket.",
    description: "An AI-powered project scanning and database management tool. Vectrax provides deep indexing of your project files for instant retrieval and autonomous management of your infrastructure.",
    icon: Search,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    features: [
      { title: "Deep Indexing", desc: "Index every file, function, and database entry for semantic search and retrieval.", icon: Terminal },
      { title: "Autonomous DB Ops", desc: "Real-time monitoring and self-healing logic for Supabase and Postgres clusters.", icon: Layers },
      { title: "Pocket Control", desc: "Full mobile command interface for managing enterprise infrastructure on the go.", icon: ShieldCheck }
    ]
  },
  "cavexa": {
    title: "Shorts Cavexa",
    tagline: "The Content Engine",
    headline: "High-Velocity Content, Zero Effort.",
    description: "Shorts Cavexa is an AI-powered automation tool for rapid short-form content creation. It automates the entire video production pipeline to fuel explosive social media growth.",
    icon: Video,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    features: [
      { title: "Auto-Production", desc: "From raw script to edited video with subtitles and micro-interactions in seconds.", icon: Sparkles },
      { title: "Growth Analytics", desc: "Iterative feedback loops that adjust content style based on viewer retention metrics.", icon: BarChart3 },
      { title: "Multi-Platform Sync", desc: "Simultaneous distribution to TikTok, Reels, and Shorts with native optimizations.", icon: Globe }
    ]
  },
  "outrelix": {
    title: "Outrelix",
    tagline: "The Outreach Automator",
    headline: "Precision Outreach at Global Scale.",
    description: "Outrelix scales your business outreach without human friction. We use autonomous agents to manage and scale cold outreach with personalized intelligence that converts.",
    icon: Target,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa",
    features: [
      { title: "Agentic Outreach", desc: "AI agents that handle initial contact, vetting, and meeting scheduling autonomously.", icon: Cpu },
      { title: "Hyper-Personalization", desc: "Dynamic research gathering for every lead to ensure 100% relevance in every message.", icon: Target },
      { title: "Scale Intelligence", desc: "Managed infrastructure that handles massive volume while maintaining deliverability.", icon: Mail }
    ]
  },
  "legalflow": {
    title: "LegalFlow",
    tagline: "The Intelligent Case Orchestrator",
    headline: "Engineering Precision in Legal Workflows.",
    description: "LegalFlow automates the drafting of complex legal contracts and organizes case files using agentic logic. We ensure every deadline is hit and every document is compliant.",
    icon: ShieldCheck,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    features: [
      { title: "Contract Synthesis", desc: "Generate iron-clad legal documents by feeding in project variables and constraints.", icon: Binary },
      { title: "Case Orchestration", desc: "Autonomous organization of case files and cross-referencing against active statutes.", icon: Layers },
      { title: "Deadline Guardian", desc: "Proactive AI alerts and task execution to ensure absolute regulatory compliance.", icon: Zap }
    ]
  },
  "complymail": {
    title: "ComplyMail",
    tagline: "The Regulatory Sentinel",
    headline: "Secure Communication, Architected by AI.",
    description: "An AI layer for communication compliance. ComplyMail scans and filters communications to ensure they meet strict industry regulatory standards and legal requirements in real-time.",
    icon: Mail,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    features: [
      { title: "Real-time Filtering", desc: "Instant scanning of communications for PII, legal risks, and compliance breaches.", icon: ShieldCheck },
      { title: "Automated Responses", desc: "AI-generated compliant replies for common regulatory and customer inquiries.", icon: Zap },
      { title: "Compliance Audits", desc: "Self-generating audit logs for every communication thread to prove regulatory adherence.", icon: BarChart3 }
    ]
  }
};

export default function ProductDetail() {
  const { slug } = useParams();
  const data = slug ? PRODUCT_DATA[slug] : null;

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/" className="text-primary font-bold">Return Home</Link>
      </div>
    </div>
  );

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold transition-colors mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Products
              </Link>

              <div className={`w-20 h-20 rounded-3xl ${data.bgColor} flex items-center justify-center mb-10 shadow-lg border border-white/50 backdrop-blur-sm`}>
                <Icon className={`w-10 h-10 ${data.color}`} strokeWidth={1.5} />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 mb-6 border border-slate-800">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="technical-label !text-white !text-[10px] tracking-[0.2em]">{data.tagline}</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[0.9]">
                {data.title}
              </h1>
              
              <p className={`text-2xl md:text-3xl font-black ${data.color} mb-8 tracking-tight font-heading`}>
                {data.headline}
              </p>
              
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-2xl">
                {data.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-20">
                <Button size="lg" className="btn-primary h-14 px-10 rounded-2xl shadow-xl shadow-primary/20 group">
                  Deploy Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-slate-200 text-slate-900 hover:bg-slate-50 h-14 px-10 rounded-2xl">
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={`${data.image}?auto=format&fit=crop&w=2000&q=80`} 
                alt={data.title}
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </section>

        {/* Feature Grid */}
        <section className="container mx-auto px-6 py-32 bg-slate-50/50 rounded-[4rem]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h3 className="technical-label !text-primary mb-4">Core Capabilities</h3>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">Engineering Specification</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.features.map((feature: any, idx: number) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-200/50 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-slate-600 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="container mx-auto px-6 pt-32 text-center">
          <div className="max-w-4xl mx-auto bg-slate-950 rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-8 animate-pulse" />
              <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight">
                Scale with <span className="text-primary">Autonomous Logic.</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto">
                Join the elite enterprises using {data.title} to eliminate operational latency and architect high-velocity growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-50 h-16 px-12 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-16 px-12 rounded-2xl font-black uppercase tracking-widest text-xs">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
