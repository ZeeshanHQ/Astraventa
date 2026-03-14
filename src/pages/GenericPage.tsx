import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Activity, Newspaper, Target, Sparkles, Building2, Users, FlaskConical, LifeBuoy, ShieldCheck, Image as ImageIcon } from "lucide-react";
import { CaseStudyFeatures } from "@/components/CaseStudyFeatures";

const pageData: any = {
 "api": {
 title: "API Documentation",
 subtitle: "Build on Astraventa",
 description: "Integrate our autonomous agents, OCR engines, and data pipelines directly into your own applications using our REST and GraphQL endpoints.",
 icon: BookOpen,
 color: "text-blue-600",
 bg: "bg-blue-50",
 content: "Our documentation is currently in closed beta for enterprise partners. Please contact your account manager for API keys and SDK access."
 },
 "status": {
 title: "System Status",
 subtitle: "All Systems Operational",
 description: "Real-time uptime metrics, incident reports, and latency graphs for the Astraventa global infrastructure network.",
 icon: Activity,
 color: "text-emerald-600",
 bg: "bg-emerald-50",
 content: "Global API Latency: 42ms. 100% Uptime over the last 90 days. No recorded incidents."
 },
 "blog": {
 title: "Engineering Blog",
 subtitle: "Insights from the Edge",
 description: "Deep technical deep-dives, architectural decisions, and AI industry trends written by our principal engineers.",
 icon: Newspaper,
 color: "text-orange-600",
 bg: "bg-orange-50",
 content: "New articles on LLM context expansion and edge-compute latency are being drafted."
 },
 "case-studies": {
 title: "Select Case Studies",
 subtitle: "Proven Industrial Scale",
 description: "Read how global enterprises use Astraventa to automate workflows, migrate massive monoliths, and deploy private AI clouds.",
 icon: Target,
 color: "text-purple-600",
 bg: "bg-purple-50",
 content: "Case studies are under NDA. Public anonymized case studies will be released in Q3."
 },
 "changelog": {
 title: "Release Notes",
 subtitle: "Continuous Deployment",
 description: "Track all recent updates, new AI tools, bug fixes, and feature deployments across the Astraventa ecosystem.",
 icon: Sparkles,
 color: "text-rose-600",
 bg: "bg-rose-50",
 content: "v2.4.0 Released: Added 7 new Frontier Tools. Upgraded global navigation infrastructure."
 },
 "about": {
 title: "About Astraventa",
 subtitle: "Our Thesis & Vision",
 description: "Astraventa is a hybrid AI powerhouse merging elite software engineering with autonomous intelligence. We build the systems that build the future.",
 icon: Building2,
 color: "text-indigo-600",
 bg: "bg-indigo-50",
 content: "Founded by Zeeshan Jay & Haider, we are on a mission to democratize enterprise-grade AI infrastructure for global businesses."
 },
 "careers": {
 title: "Careers at Astra",
 subtitle: "Join the Vanguard",
 description: "We are always looking for elite full-stack engineers, AI researchers, and rigorous UI/UX designers to join our high-performance team.",
 icon: Users,
 color: "text-pink-600",
 bg: "bg-pink-50",
 content: "Currently hiring: 10x Senior Full-Stack Engineer (React/Node), Principal AI Architect. Email us at careers@astraventa.com."
 },
 "lab": {
 title: "The Astra Lab",
 subtitle: "Experimental Prototypes",
 description: "A playground for our most dangerous, unpolished, and experimental AI tools. Things break here, and that's the point.",
 icon: FlaskConical,
 color: "text-cyan-600",
 bg: "bg-cyan-50",
 content: "Currently testing: Project Neural-Link UI, Autonomous Code Repair Agent v0.1."
 },
 "support": {
 title: "Help Center",
 subtitle: "24/7 Global Support",
 description: "Need help configuring an agent or debugging an API integration? Our engineering support team is online.",
 icon: LifeBuoy,
 color: "text-blue-600",
 bg: "bg-blue-50",
 content: "Enterprise clients have guaranteed 15-minute response times via dedicated Slack channels."
 },
 "security": {
 title: "Trust & Security",
 subtitle: "Bank-Grade Encryption",
 description: "Review our SOC2 compliance, data privacy mechanisms, Zero Trust architecture, and penetration testing methodologies.",
 icon: ShieldCheck,
 color: "text-slate-800",
 bg: "bg-slate-100",
 content: "We adhere strictly to GDPR and CCPA. All LLM data is ephemeral by default."
 },
 "portfolio": {
 title: "Our Portfolio",
 subtitle: "Aesthetic Engineering",
 description: "A curated gallery of high-performance digital platforms, enterprise SaaS dashboards, and complex mobile applications we've engineered.",
 icon: ImageIcon,
 color: "text-fuchsia-600",
 bg: "bg-fuchsia-50",
 content: "Live interactive showcase coming soon. View our case studies for deep architectural breakdowns."
 }
};

interface GenericPageProps {
 id: string;
}

export default function GenericPage({ id }: GenericPageProps) {
 const data = pageData[id];

 if (!data) return null;

 return (
 <div className="min-h-screen bg-slate-50">
 <Header />
 <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-[70vh]">
 <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary font-bold transition-colors mb-12">
 <ArrowLeft className="w-4 h-4" /> Back to Home
 </Link>
 
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
 <div className={`w-16 h-16 rounded-[1.5rem] ${data.bg} flex items-center justify-center mb-8`}>
 <data.icon className={`w-8 h-8 ${data.color}`} />
 </div>
 
 <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-heading tracking-tight">{data.title}</h1>
 <p className="text-xl font-bold text-primary mb-8 tracking-tight">{data.subtitle}</p>
 <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12">
 {data.description}
 </p>
 
  <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm text-slate-700 font-medium leading-relaxed">
  {data.content}
  </div>

  {id === "case-studies" && <CaseStudyFeatures />}
 
 <div className="mt-16 text-center">
 <Button size="lg" className="rounded-2xl h-14 px-10 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20">
 Contact Sales
 </Button>
 </div>
 </motion.div>
 </main>
 <Footer />
 </div>
 );
}
