import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, Zap, Shield, FileText, Rocket, ChevronRight, Cpu, Database, Lock, Workflow, Check, ArrowUpRight, Code2, Server, Globe, Smartphone, Palette, ShieldCheck, Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AstraventaLogo } from "@/components/AstraventaLogo";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const caseStudies = [
  {
    id: "cavexa",
    title: "Cavexa AI",
    subtitle: "Short-Form Automation",
    hook: "Zero-Touch Content Distribution",
    problem: "Manual content creation and distribution was consuming 40+ hours weekly, with inconsistent posting schedules and missed viral opportunities.",
    display: "Dashboard mockup showing trending reel detection and automated edit queues",
    coreValue: "100% automation from scraping to uploading; 'Sleep while the system grows.'",
    metrics: [
      { label: "Automation Rate", value: "100%" },
      { label: "Hours Saved", value: "40+/week" },
      { label: "Content Output", value: "10x" }
    ],
    techStack: ["FastAPI", "Python", "RAG", "Supabase", "Google Vertex AI"],
    process: ["Discovery", "Logic Mapping", "Production"],
    infrastructure: "Decision Engine with trending detection algorithms",
    brain: "AI-powered decision engine that analyzes trending patterns and automatically selects high-potential content for distribution"
  },
  {
    id: "complymail",
    title: "ComplyMail",
    subtitle: "Email Infrastructure",
    hook: "Bulletproof Sender Reputation",
    problem: "Email deliverability was at 78% with frequent spam filtering, costing the client $50K+ in lost revenue monthly.",
    display: "Technical visualization of DNS/DMARC routing and warming sequences",
    coreValue: "99.9% inbox placement; SOC2-aligned infrastructure.",
    metrics: [
      { label: "Inbox Placement", value: "99.9%" },
      { label: "Revenue Recovered", value: "$50K+/mo" },
      { label: "Compliance", value: "SOC2" }
    ],
    techStack: ["Python", "PostgreSQL", "Redis", "AWS SES", "DKIM/DMARC"],
    process: ["Discovery", "Logic Mapping", "Production"],
    infrastructure: "Infrastructure Security with Restricted Google Scopes handling",
    brain: "Automated warming sequences with real-time reputation monitoring and adaptive sending patterns"
  },
  {
    id: "jurischeck",
    title: "JurisCheck",
    subtitle: "Legal Document AI",
    hook: "Precision NDA Auditing",
    problem: "Manual NDA reviews were costing the firm 20+ hours per week with 15% error rate in clause detection.",
    display: "Diff view showing AI highlighting high-risk clauses in an NDA",
    coreValue: "90% reduction in manual review time; 0% error rate in clause detection.",
    metrics: [
      { label: "Time Reduction", value: "90%" },
      { label: "Error Rate", value: "0%" },
      { label: "Accuracy", value: "98%" }
    ],
    techStack: ["Python", "NLP", "LangChain", "Vector DB", "OpenAI"],
    process: ["Discovery", "Logic Mapping", "Production"],
    infrastructure: "Enterprise-grade document processing with encrypted storage",
    brain: "Custom-trained NLP model for legal clause detection with risk scoring algorithms"
  },
  {
    id: "launchpact",
    title: "LaunchPact",
    subtitle: "Execution Framework",
    hook: "From Idea to V1 in 14 Days",
    problem: "Traditional development cycles took 3-6 months, causing missed market windows and competitive disadvantages.",
    display: "Roadmap visualization showing steps from logic-mapping to deployment",
    coreValue: "Accelerated venture development with automated infrastructure provisioning.",
    metrics: [
      { label: "Time to V1", value: "14 days" },
      { label: "Speed Increase", value: "10x" },
      { label: "Success Rate", value: "95%" }
    ],
    techStack: ["FastAPI", "React", "Docker", "Kubernetes", "Terraform"],
    process: ["Discovery", "Logic Mapping", "Production"],
    infrastructure: "Cloud-native infrastructure with automated CI/CD pipelines",
    brain: "AI-powered project scaffolding with intelligent dependency management and automated testing"
  }
];

export const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<typeof caseStudies[0] | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      // Save to Supabase
      const { error } = await supabase
        .from('demo_requests')
        .insert({
          email: email,
          case_study_id: selectedCase?.id || null,
          status: 'pending'
        });

      if (error) throw error;

      // Trigger Edge Function to send email notification
      const { error: functionError } = await supabase.functions.invoke('send-demo-notification');

      if (functionError) {
        console.error('Edge function error:', functionError);
        // Don't fail the submission if email notification fails
      }

      setIsSubmitted(true);
      toast({
        title: "Request Received",
        description: "Our team will reach out within 2 hours.",
        variant: "default",
      });
    } catch (error) {
      console.error('Error submitting demo request:', error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-medium tracking-wide">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <AstraventaLogo size="md" />
          <div className="w-24 hidden md:block" />
        </div>
      </div>

      {/* Hero Section */}
      <main className="container relative z-10 mx-auto px-4 py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Zap className="w-3.5 h-3.5" />
            Production Systems
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-normal text-slate-900 mb-6 tracking-tight leading-tight">
            Case <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 font-bold">Studies</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Real-world autonomous impact. Systems that don't break.
          </p>
        </motion.div>

        {/* Bento Grid of Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedCase(study)}
              className="group relative bg-white backdrop-blur-xl border border-slate-200 rounded-3xl p-8 hover:border-teal-500/30 hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Animated Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-transparent to-emerald-500/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:border-teal-500/30 group-hover:bg-teal-50 transition-all">
                {index === 0 && <Zap className="w-7 h-7 text-teal-600" />}
                {index === 1 && <Shield className="w-7 h-7 text-teal-600" />}
                {index === 2 && <FileText className="w-7 h-7 text-teal-600" />}
                {index === 3 && <Rocket className="w-7 h-7 text-teal-600" />}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-heading font-normal text-slate-900 tracking-wide">{study.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-4">{study.subtitle}</p>
                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-6">{study.hook}</p>

                {/* Metrics */}
                <div className="flex gap-4 mb-6">
                  {study.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i} className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <p className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</p>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2">
                  {study.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-medium text-slate-600 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[10px] font-medium text-teal-600 uppercase tracking-wider">
                    +{study.techStack.length - 3}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto p-12 rounded-[2.5rem] bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent pointer-events-none" />
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-slate-900 mb-4 tracking-tight relative z-10">
              Build what doesn't break.
            </h2>
            <p className="text-slate-500 mb-8 font-medium text-lg relative z-10">
              Let's discuss your architecture.
            </p>
            {!showEmailForm && !isSubmitted && (
              <Button
                onClick={() => setShowEmailForm(true)}
                className="bg-slate-900 text-white hover:bg-slate-800 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide relative z-10"
              >
                Request Technical Deep-Dive
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            )}
            {showEmailForm && !isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto relative z-10"
              >
                <form onSubmit={handleEmailSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 h-14 px-6 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-teal-600 text-white hover:bg-teal-700 h-14 px-6 rounded-2xl font-bold text-sm tracking-wide"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </form>
              </motion.div>
            )}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-emerald-600 font-medium relative z-10"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">Request received! We'll be in touch within 2 hours.</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>

      {/* Slide-over Panel */}
      <AnimatePresence>
        {selectedCase && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] bg-white border-l border-slate-200 z-50 overflow-y-auto"
            >
              <div className="p-8">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>

                {/* Header */}
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6">
                    {selectedCase.id === 'cavexa' && <Zap className="w-8 h-8 text-teal-600" />}
                    {selectedCase.id === 'complymail' && <Shield className="w-8 h-8 text-teal-600" />}
                    {selectedCase.id === 'jurischeck' && <FileText className="w-8 h-8 text-teal-600" />}
                    {selectedCase.id === 'launchpact' && <Rocket className="w-8 h-8 text-teal-600" />}
                  </div>
                  <h2 className="text-3xl font-heading font-normal text-slate-900 mb-2 tracking-wide">{selectedCase.title}</h2>
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{selectedCase.subtitle}</p>
                </div>

                {/* Hook */}
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200">
                  <p className="text-teal-700 text-lg font-bold leading-relaxed">{selectedCase.hook}</p>
                </div>

                {/* Problem Statement */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Problem</h3>
                  <p className="text-slate-600 leading-relaxed">{selectedCase.problem}</p>
                </div>

                {/* Core Value */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Core Value</h3>
                  <p className="text-slate-600 leading-relaxed">{selectedCase.coreValue}</p>
                </div>

                {/* Metrics */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Impact Metrics</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {selectedCase.metrics.map((metric, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                        <p className="text-2xl font-bold text-slate-900 mb-1">{metric.value}</p>
                        <p className="text-[9px] uppercase tracking-widest text-slate-400 leading-tight">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The Brain */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Brain</h3>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="flex items-start gap-3 mb-3">
                      <Cpu className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <p className="text-slate-600 leading-relaxed">{selectedCase.brain}</p>
                    </div>
                  </div>
                </div>

                {/* Infrastructure Security */}
                {selectedCase.infrastructure && (
                  <div className="mb-8">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Infrastructure Security</h3>
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-start gap-3">
                        <Lock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <p className="text-slate-600 leading-relaxed">{selectedCase.infrastructure}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600 hover:border-teal-500/30 hover:bg-teal-50 transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Process</h3>
                  <div className="flex items-center gap-4">
                    {selectedCase.process.map((step, i) => (
                      <div key={i} className="flex items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center">
                            <span className="text-teal-600 text-xs font-bold">{i + 1}</span>
                          </div>
                          <span className="text-slate-600 text-sm font-medium">{step}</span>
                        </div>
                        {i < selectedCase.process.length - 1 && (
                          <ChevronRight className="w-4 h-4 text-slate-300 mx-2" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-slate-200">
                  {!showEmailForm && !isSubmitted && (
                    <Button
                      onClick={() => setShowEmailForm(true)}
                      className="w-full bg-slate-900 text-white hover:bg-slate-800 h-14 rounded-2xl font-bold text-sm tracking-wide"
                    >
                      Request Technical Deep-Dive
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                  {showEmailForm && !isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <form onSubmit={handleEmailSubmit} className="flex gap-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="flex-1 h-14 px-6 rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          required
                        />
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-teal-600 text-white hover:bg-teal-700 h-14 px-6 rounded-2xl font-bold text-sm tracking-wide"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </span>
                          ) : (
                            <Send className="w-4 h-4" />
                          )}
                        </Button>
                      </form>
                    </motion.div>
                  )}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center gap-3 text-emerald-600 font-medium"
                    >
                      <CheckCircle className="w-6 h-6" />
                      <span className="text-lg">Request received! We'll be in touch within 2 hours.</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default CaseStudies;
