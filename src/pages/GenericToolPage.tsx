import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Link, useNavigate, useParams } from "react-router-dom";
import { 
  ArrowRight, Bot, Zap, Globe, Workflow, Clock, Settings, Layers, Code2,
  ShieldCheck, Cpu, Database, Network, Activity, LineChart, FileText,
  Mail, Users, Target, Palette, Wand2, Heart, Scale, ScanLine
} from "lucide-react";

// Tool metadata mapping
const toolMetadata: Record<string, {
  title: string;
  description: string;
  icon: React.ElementType;
  category: string;
  features: string[];
  status: "active" | "beta" | "coming-soon";
}> = {
  "astra-agent": {
    title: "AstraAgent AI",
    description: "Autonomous browser automation agent that performs complex web interactions with natural language commands.",
    icon: Bot,
    category: "AI Automation",
    features: ["Natural Language Commands", "Visual Element Recognition", "Multi-Step Workflows", "Error Recovery"],
    status: "coming-soon"
  },
  "astra-flow": {
    title: "AstraFlow AI", 
    description: "Smart data-entry agent that populates complex system fields using natural language context.",
    icon: Workflow,
    category: "Data Processing",
    features: ["Context Injection", "Auto-Validation", "Multi-Platform Support", "Real-time Processing"],
    status: "coming-soon"
  },
  "astra-pulse": {
    title: "AstraPulse AI",
    description: "Real-time system monitoring and performance optimization with predictive analytics.",
    icon: Activity,
    category: "System Monitoring",
    features: ["Real-time Analytics", "Predictive Insights", "Performance Optimization", "Alert Management"],
    status: "coming-soon"
  },
  "astra-market": {
    title: "AstraMarket AI",
    description: "Continuous competitor intelligence monitoring for pricing changes and market trends with automated alerts.",
    icon: LineChart,
    category: "Market Intelligence",
    features: ["Competitor Tracking", "Price Monitoring", "Trend Analysis", "Automated Reports"],
    status: "active"
  },
  "astra-vibe": {
    title: "AstraVibe AI",
    description: "Brand sentiment analysis and tone optimization across digital platforms.",
    icon: Palette,
    category: "Brand Analytics",
    features: ["Sentiment Analysis", "Tone Detection", "Brand Consistency", "Platform Integration"],
    status: "coming-soon"
  },
  "astra-prompt": {
    title: "AstraPrompt AI",
    description: "Advanced prompt engineering toolkit for optimal LLM performance and output quality with real-time testing capabilities.",
    icon: Wand2,
    category: "AI Tools",
    features: ["Prompt Templates", "Performance Testing", "Output Optimization", "Version Control"],
    status: "active"
  },
  "astra-blog": {
    title: "AstraBlog AI",
    description: "AI-powered content generation platform that creates engaging blog posts with brand-consistent voice and SEO optimization.",
    icon: FileText,
    category: "Content Creation",
    features: ["AI Content Generation", "SEO Optimization", "Brand Voice Control", "Multi-language Support"],
    status: "active"
  },
  "astra-translate": {
    title: "AstraTranslate AI",
    description: "Enterprise localization platform that translates documents while maintaining brand voice and cultural context.",
    icon: Globe,
    category: "Translation",
    features: ["Tone Preservation", "50+ Languages", "Cultural Context", "Batch Processing"],
    status: "active"
  },
  "astra-scrape": {
    title: "AstraScrape AI",
    description: "Extract high-quality structured data from dynamic websites using resilient AI agents with anti-detection capabilities.",
    icon: Globe,
    category: "Data Extraction",
    features: ["JS Rendering Support", "Structured Export", "Anti-Detection", "Scheduled Scraping"],
    status: "active"
  },
  "astra-doc": {
    title: "AstraDoc AI",
    description: "Intelligent document analyzer that instantly extracts clauses and summarizes long contracts with semantic search.",
    icon: FileText,
    category: "Document Processing",
    features: ["PDF Parsing", "Semantic Search", "Clause Extraction", "Contract Analysis"],
    status: "active"
  },
  "astra-match": {
    title: "AstraMatch AI",
    description: "Intelligent matching algorithm for optimal pairing based on multiple criteria.",
    icon: Heart,
    category: "Matching Systems",
    features: ["Multi-Criteria Matching", "Real-time Scoring", "Preference Learning", "Bias Detection"],
    status: "coming-soon"
  },
  "astra-verify": {
    title: "AstraVerify AI",
    description: "Advanced verification and validation system for security and compliance.",
    icon: ShieldCheck,
    category: "Security",
    features: ["Identity Verification", "Compliance Checking", "Fraud Detection", "Audit Trails"],
    status: "coming-soon"
  },
  "astra-legal": {
    title: "AstraLegal AI",
    description: "AI-powered legal document analysis and contract review automation.",
    icon: Scale,
    category: "Legal Tech",
    features: ["Contract Analysis", "Risk Assessment", "Clause Extraction", "Compliance Review"],
    status: "coming-soon"
  },
  "astra-trace": {
    title: "AstraTrace AI",
    description: "Advanced system tracing and debugging tool for complex applications.",
    icon: ScanLine,
    category: "Development Tools",
    features: ["Performance Tracing", "Error Detection", "Flow Visualization", "Optimization Insights"],
    status: "coming-soon"
  },
  "astra-reach": {
    title: "AstraReach AI",
    description: "Autonomous email operations copilot for outreach and inbox management.",
    icon: Mail,
    category: "Communication",
    features: ["Intelligent Outreach", "Inbox Summarization", "Auto-Reply", "Campaign Management"],
    status: "coming-soon"
  },
  "astra-relay": {
    title: "AstraRelay AI",
    description: "Intelligent data synchronization and relay system for cross-platform integration.",
    icon: Network,
    category: "Integration",
    features: ["Real-time Sync", "Data Transformation", "Error Handling", "Multi-Platform"],
    status: "coming-soon"
  }
};

const GenericToolPage = () => {
  const navigate = useNavigate();
  const { toolId } = useParams<{ toolId: string }>();
  
  const tool = toolMetadata[toolId || ""] || {
    title: "Astra Tool",
    description: "Advanced AI-powered tool for enterprise automation and optimization.",
    icon: Cpu,
    category: "AI Tools",
    features: ["Enterprise-Grade Security", "Scalable Architecture", "Real-time Processing", "24/7 Support"],
    status: "coming-soon"
  };

  const Icon = tool.icon;
  const isComingSoon = tool.status === "coming-soon";

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-clip">
      <Header />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 pt-32 sm:pt-40 md:pt-48 pb-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          
          {/* Hero Section */}
          <div className="text-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-display font-normal text-[11px] text-black/60 uppercase tracking-[0.15em]">
                {tool.category} {isComingSoon ? "// COMING_SOON" : "// ACTIVE"}
              </span>
            </motion.div>
            
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                <Icon className="w-8 h-8" />
              </div>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-normal text-foreground uppercase leading-[1.08] tracking-[0.15em] text-[2.5rem] sm:text-[3.1rem] md:text-[3.7rem] lg:text-[4.1rem] mb-6"
            >
              {tool.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[15px] md:text-[16px] text-[#4B5563] font-normal leading-[1.8] max-w-[560px] mx-auto mb-12"
            >
              {tool.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {isComingSoon ? (
                <>
                  <ShinyButton
                    className="h-11 px-8 text-[12px] font-display font-medium uppercase tracking-[0.12em]"
                    onClick={() => navigate(`/tools/${toolId}/waitlist`)}
                  >
                    <span className="flex items-center gap-2">
                      Join Waitlist <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </ShinyButton>
                  
                  <Button
                    onClick={() => navigate('/services')}
                    className="bg-transparent text-black border border-black/10 hover:bg-black/5"
                  >
                    Explore Other Tools
                  </Button>
                </>
              ) : (
                <>
                  <ShinyButton
                    className="h-11 px-8 text-[12px] font-display font-medium uppercase tracking-[0.12em]"
                    onClick={() => navigate('/contact')}
                  >
                    <span className="flex items-center gap-2">
                      Get Started <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </ShinyButton>
                  
                  <Button
                    onClick={() => navigate('/services')}
                    className="bg-transparent text-black border border-black/10 hover:bg-black/5"
                  >
                    View Documentation
                  </Button>
                </>
              )}
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-2xl sm:text-3xl mb-4">
                Key <span className="text-primary">Features.</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#4B5563] font-normal leading-[1.7] max-w-[560px] mx-auto">
                Built with enterprise-grade architecture and autonomous-first principles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {tool.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-2xl border border-black/[0.07] bg-white hover:bg-black/[0.01] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-normal text-[14px] text-black uppercase tracking-[0.15em] mb-1">
                        {feature}
                      </h3>
                      <p className="text-[13px] text-[#6B7280] leading-[1.6]">
                        Advanced implementation with zero-compromise architecture.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Status Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center py-16 border-t border-black/[0.06]"
          >
            <div className="flex items-center justify-center gap-2 text-[13px] text-black/40 font-display font-normal uppercase tracking-[0.2em] mb-4">
              <Clock className="w-4 h-4" />
              {isComingSoon ? "ESTIMATED_DEPLOYMENT: Q2 2026" : "STATUS: PRODUCTION_READY"}
            </div>
            <div className="flex items-center justify-center gap-2 text-[11px] text-black/30 font-display font-normal uppercase tracking-[0.15em]">
              <ShieldCheck className="w-3 h-3" />
              ENTERPRISE_SECURITY_COMPLIANT {isComingSoon ? "&& BETA_TESTING_OPEN" : "&& 99.9%_UPTIME_SLA"}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GenericToolPage;
