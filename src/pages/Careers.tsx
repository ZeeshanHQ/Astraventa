import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  Code2,
  Cpu,
  Palette,
  Sparkles,
  Zap,
  Globe,
  ShieldCheck,
  Rocket,
  Brain,
  Heart,
  Clock,
  MapPin,
  ChevronRight,
  Star,
  Coffee,
  Laptop,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase, CareerPosition } from "@/lib/supabase";
import { toast } from "sonner";
import { 
  X, 
  CheckCircle2, 
  Loader2,
  Briefcase
} from "lucide-react";
import { AnimatePresence } from "framer-motion";

/* ─── TYPES ──────────────────────────────────────────────────────────────── */
type Department = "All" | "Engineering" | "Design" | "AI Research" | "Product" | "Operations";

interface Role {
  title: string;
  team: string;
  department: Department;
  location: string;
  type: string;
  description: string;
  icon: React.ElementType;
  level: "Senior" | "Lead" | "Founding" | "Mid";
}

/* ─── DATA ────────────────────────────────────────────────────────────────── */
// Static roles removed to use Supabase

const perks = [
  {
    icon: Laptop,
    title: "Remote-First",
    body: "Work from anywhere in the world. We are async-native and built for distributed excellence.",
  },
  {
    icon: Zap,
    title: "High Autonomy",
    body: "No micromanagement. Own your domain end-to-end and ship directly to production from day one.",
  },
  {
    icon: TrendingUp,
    title: "Equity + Upside",
    body: "Meaningful equity packages. We are building for the long term and we want you to share in that outcome.",
  },
  {
    icon: Coffee,
    title: "Deep Work Culture",
    body: "Meetings are a last resort. We protect focus time and value output over attendance.",
  },
  {
    icon: Award,
    title: "Top-Tier Gear",
    body: "Best-in-class equipment, software licenses, and a learning budget to keep you at the frontier.",
  },
  {
    icon: Heart,
    title: "Health & Wellbeing",
    body: "Comprehensive health coverage, mental wellness support, and generous time off policies.",
  },
];

const values = [
  {
    number: "01",
    title: "Velocity Without Compromise",
    body: "We ship production-grade infrastructure daily. Speed is our discipline — quality is our non-negotiable.",
  },
  {
    number: "02",
    title: "Obsessive Craftsmanship",
    body: "Clean abstractions, typed interfaces, and pixel-perfect execution. Mediocrity is not in our vocabulary.",
  },
  {
    number: "03",
    title: "Founding Mentality",
    body: "Every person here is an architect of something larger. We expect ownership of the entire stack.",
  },
  {
    number: "04",
    title: "Radical Transparency",
    body: "Strategy, financials, roadmap — open to everyone. We build trust through honesty, not hierarchy.",
  },
];

const departments: Department[] = ["All", "Engineering", "Design", "AI Research", "Product", "Operations"];

const levelColors: Record<Role["level"], string> = {
  Senior: "bg-blue-50 text-blue-600 border-blue-100",
  Lead: "bg-violet-50 text-violet-600 border-violet-100",
  Founding: "bg-amber-50 text-amber-600 border-amber-100",
  Mid: "bg-emerald-50 text-emerald-600 border-emerald-100",
};

/* ─── ANIMATION VARIANTS ─────────────────────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease },
};

/* ─── SECTION LABEL ──────────────────────────────────────────────────────── */
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-4 mb-5">
    <div className="h-px w-8 bg-black/15" />
    <span className="font-display font-normal text-[9px] text-black/40 uppercase tracking-[0.3em]">
      {children}
    </span>
  </div>
);

/* ─── SECTION HEADING ────────────────────────────────────────────────────── */
const SectionHeading = ({
  children,
  accent,
  className = "",
}: {
  children: React.ReactNode;
  accent?: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`font-heading font-normal uppercase tracking-[0.12em] text-foreground leading-[1.08] text-[2rem] md:text-[2.6rem] lg:text-[3rem] ${className}`}
  >
    {children}
    {accent && (
      <>
        <br />
        <span className="text-primary">{accent}</span>
      </>
    )}
  </h2>
);

/* ─── COMPONENT ──────────────────────────────────────────────────────────── */
const Careers = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [dbRoles, setDbRoles] = useState<CareerPosition[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRole, setSelectedRole] = useState<CareerPosition | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [externalApplicationFormUrl, setExternalApplicationFormUrl] = useState("");
  
  // Application form state
  const [appForm, setAppForm] = useState({
    fullName: "",
    email: "",
    portfolioUrl: "",
    coverLetter: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoles = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('career_positions')
        .select('*')
        .eq('active', true)
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setDbRoles(data);
      }
      setIsLoading(false);
    };

    fetchRoles();
  }, []);

  useEffect(() => {
    const savedUrl = window.localStorage.getItem("career_external_form_url") || "";
    setExternalApplicationFormUrl(savedUrl);
  }, []);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;
    
    setIsApplying(true);
    const { error } = await supabase
      .from('career_applications')
      .insert({
        position_id: selectedRole.id,
        full_name: appForm.fullName,
        email: appForm.email,
        portfolio_url: appForm.portfolioUrl,
        cover_letter: appForm.coverLetter
      });

    if (error) {
      toast.error("Application transmission failed: " + error.message);
    } else {
      setIsSuccess(true);
      toast.success("Application successfully routed to ASTRA_ROOT.");
      setAppForm({ fullName: "", email: "", portfolioUrl: "", coverLetter: "" });
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedRole(null);
      }, 3000);
    }
    setIsApplying(false);
  };

  const filtered =
    activeFilter === "All" ? dbRoles : dbRoles.filter((r) => r.team === activeFilter);

  const heroStats = [
    { value: "100%", label: "Remote Friendly" },
    { value: dbRoles.length + "+", label: "Open Positions" },
    { value: "33+", label: "Products Shipped" },
    { value: "Day 1", label: "Production Access" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <main>
        {/* ═══════════════════════════════════════════════════════════════════
            HERO — Two-column layout matching landing page anatomy
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white border-b border-black/[0.04]">
          {/* Ambient radial — same as landing */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_-10%,rgba(41,16,229,0.05),transparent_55%)]" />

          <div className="max-w-[1280px] w-full mx-auto px-6 pt-32 md:pt-44 pb-0 relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-14 lg:gap-20">

              {/* LEFT COLUMN */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                animate="show"
                className="flex-1 flex flex-col items-start"
              >
                {/* Eyebrow badge — same style as landing */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-8 cursor-pointer hover:bg-black/[0.07] transition-colors"
                  onClick={() => navigate("/about")}
                >
                  <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-display font-normal text-[11px] text-black/60 uppercase tracking-[0.15em]">
                    Careers at Astraventa · {dbRoles.length} Open Positions
                  </span>
                  <ChevronRight className="w-3 h-3 text-black/30" />
                </motion.div>

                {/* Heading — Tenor Sans, normal, uppercase (matches landing hero) */}
                <motion.h1
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                  className="mb-6 font-heading font-normal text-foreground uppercase leading-[1.08] tracking-[0.15em] text-[2.5rem] sm:text-[3.1rem] md:text-[3.7rem] lg:text-[4.1rem]"
                >
                  Build the Future.<br />
                  <span className="text-primary">Own the Outcome.</span>
                </motion.h1>

                {/* Sub-headline — Mulish, same style as landing */}
                <motion.p
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                  className="mb-3 text-[15px] md:text-[16px] text-[#4B5563] font-normal leading-[1.8] max-w-[540px]"
                >
                  Astraventa is assembling an elite collective of engineers, designers, and AI
                  researchers to architect the autonomous enterprise.
                </motion.p>
                <motion.p
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                  className="mb-10 text-[14px] text-[#6B7280] font-normal leading-[1.75] max-w-[520px]"
                >
                  We look for builders who move fast, think deep, and take full ownership from day one. No permission required — just exceptional work.
                </motion.p>

                {/* CTAs — same pattern as landing */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                  <a href="#open-roles">
                    <button className="inline-flex items-center gap-2 h-11 px-8 bg-foreground text-white font-display font-normal text-[11px] uppercase tracking-[0.18em] rounded-sm shadow-[0_4px_24px_rgba(0,0,0,0.18)] hover:bg-black/90 transition-all duration-200">
                      View Open Roles <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </a>
                  <a href="#our-values">
                    <button className="inline-flex items-center gap-2 h-11 px-8 bg-transparent text-black border border-black/10 hover:bg-black/5 font-display font-normal text-[11px] uppercase tracking-[0.18em] rounded-sm transition-all duration-200">
                      Engineering Ethos
                    </button>
                  </a>
                </motion.div>
              </motion.div>

              {/* RIGHT COLUMN — Stats card (matches landing hero right panel) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.25 }}
                className="w-full lg:w-[370px] xl:w-[410px] shrink-0"
              >
                <div className="relative rounded-2xl border border-black/[0.07] bg-white overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

                  {/* Stats 2×2 grid */}
                  <div className="grid grid-cols-2 divide-x divide-y divide-black/[0.06]">
                    {heroStats.map((s) => (
                      <div
                        key={s.label}
                        className="p-6 flex flex-col gap-1 group hover:bg-black/[0.015] transition-colors"
                      >
                        <span className="font-heading font-normal text-[2rem] text-foreground leading-none tracking-[0.08em]">
                          {s.value}
                        </span>
                        <span className="font-display font-normal text-[10px] text-black/40 uppercase tracking-[0.2em]">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-black/[0.06]" />

                  {/* Open positions preview */}
                  <div className="p-5 flex flex-col gap-3">
                    <p className="font-display font-normal text-[9px] text-black/35 uppercase tracking-[0.3em] mb-1">
                      Open Departments
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Engineering", "Design", "AI Research", "Product", "Operations"].map((dept) => (
                        <button
                          key={dept}
                          onClick={() => {
                            setActiveFilter(dept as Department);
                            document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="inline-flex items-center px-3 py-1 rounded-full border border-black/[0.08] bg-black/[0.02] font-display font-normal text-[10px] text-black/50 uppercase tracking-[0.1em] hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04] transition-all cursor-pointer"
                        >
                          {dept}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bottom strip CTA */}
                  <div className="border-t border-black/[0.06] px-5 py-4 flex items-center justify-between bg-black/[0.015]">
                    <span className="font-display font-normal text-[10px] text-black/40 uppercase tracking-[0.15em]">
                      Ready to join?
                    </span>
                    <button
                      onClick={() => navigate("/get-in-touch")}
                      className="font-display font-normal text-[10px] text-primary uppercase tracking-[0.15em] flex items-center gap-1.5 hover:gap-2.5 transition-all"
                    >
                      Apply Now <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>
              </motion.div>

            </div>
          </div>

          {/* Bottom marquee-style separator strip */}
          <div className="mt-14 border-t border-black/[0.06]">
            <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center gap-4">
              <span className="font-display font-normal text-[9px] text-black/30 uppercase tracking-[0.35em] shrink-0">
                What We're Building Toward
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-black/10 to-transparent" />
              <div className="flex items-center gap-6">
                {["AI Infrastructure", "Enterprise SaaS", "Autonomous Agents", "Global Scale"].map((item) => (
                  <span key={item} className="font-display font-normal text-[9px] text-black/25 uppercase tracking-[0.2em] hidden sm:block">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            OUR VALUES / ENGINEERING ETHOS
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="our-values" className="py-32 px-6 border-b border-black/[0.04] bg-black/[0.01]">
          <div className="max-w-[1280px] mx-auto">
            <motion.div {...fadeUp} className="mb-16">
              <SectionLabel>Operating Principles</SectionLabel>
              <SectionHeading accent="Why It Matters.">
                How We Work.
              </SectionHeading>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.number}
                  {...fadeUp}
                  transition={{ delay: i * 0.1, duration: 0.7, ease }}
                  className="group bg-white rounded-2xl p-8 border border-black/[0.06] hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 flex gap-8"
                >
                  <div className="font-heading font-normal text-[3rem] text-black/[0.06] group-hover:text-primary/10 transition-colors leading-none select-none pt-1 shrink-0 tracking-[0.08em]">
                    {v.number}
                  </div>
                  <div>
                    <h3 className="font-display font-normal text-[1.05rem] text-foreground tracking-[0.06em] uppercase mb-3">
                      {v.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7280] font-normal leading-[1.75]">{v.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            ENGINEERING RIGOR DARK BANNER
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-16 border-b border-black/[0.04]">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              {...fadeUp}
              className="bg-slate-950 rounded-2xl overflow-hidden relative"
            >
              {/* Dot grid texture */}
              <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />
              {/* Primary glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px] bg-primary/15 blur-[90px] rounded-full pointer-events-none" />
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-0 items-stretch">
                {/* Left — text */}
                <div className="px-10 md:px-14 py-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="font-display font-normal text-[9px] text-white/30 uppercase tracking-[0.3em]">
                      Engineering Rigor
                    </span>
                  </div>
                  <h2 className="font-heading font-normal text-white uppercase leading-[1.08] tracking-[0.12em] text-[2rem] md:text-[2.8rem] mb-7">
                    We Ship.<br />
                    <span className="text-white/40">Every Day.</span>
                  </h2>
                  <p className="text-white/50 font-normal leading-[1.8] text-[15px] max-w-md mb-10">
                    Production deployments, not Jira tickets. Our engineers operate with
                    the autonomy of founders and the discipline of elite operators.
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { value: "99.9%", label: "Uptime SLA" },
                      { value: "<50ms", label: "Avg Response" },
                      { value: "Daily", label: "Deploy Cadence" },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="font-heading font-normal text-white text-[1.6rem] tracking-[0.08em] leading-none mb-1">{s.value}</div>
                        <div className="font-display font-normal text-[9px] text-white/30 uppercase tracking-[0.25em]">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — stat display */}
                <div className="relative min-h-[280px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/[0.06] flex items-center justify-center">
                  <div className="p-10 text-center">
                    <div className="font-heading font-normal text-white leading-none tracking-[0.06em] text-[5rem] md:text-[6rem] mb-3">
                      33+
                    </div>
                    <div className="font-display font-normal text-[9px] text-white/30 uppercase tracking-[0.3em]">
                      AI Modules Shipped
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                      {["AstraFlow", "AstraAgent", "AstraReach", "AstraBlog"].map((mod) => (
                        <span key={mod} className="inline-flex px-3 py-1 rounded-full border border-white/[0.08] font-display font-normal text-[9px] text-white/25 uppercase tracking-[0.15em]">
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            OPEN ROLES
        ═══════════════════════════════════════════════════════════════════ */}
        <section id="open-roles" className="py-32 px-6 border-b border-black/[0.04]">
          <div className="max-w-[1280px] mx-auto">
            {/* Section header */}
            <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
              <div>
                <SectionLabel>Current Openings</SectionLabel>
                <SectionHeading accent="Real Ownership.">
                  Open Roles.
                </SectionHeading>
              </div>
              <p className="text-[14px] text-[#6B7280] font-normal max-w-xs leading-[1.75]">
                Every role is high-impact from day one. No busywork, no waiting for permission.
              </p>
            </motion.div>

            {/* Filter tabs */}
            <motion.div {...fadeUp} className="flex flex-wrap gap-2 mb-12">
              {["All", ...Array.from(new Set(dbRoles.map(r => r.team)))].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveFilter(dept)}
                  className={`px-5 py-2 rounded-full font-display font-normal text-[10px] uppercase tracking-[0.18em] transition-all border ${
                    activeFilter === dept
                      ? "bg-foreground text-white border-foreground"
                      : "bg-white text-black/40 border-black/[0.08] hover:border-black/20 hover:text-black/60"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </motion.div>

            {/* Roles list */}
            <div className="space-y-3">
              {filtered.map((role, i) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease }}
                    className="group bg-white border border-black/[0.06] rounded-2xl hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-7">
                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl bg-black/[0.03] border border-black/[0.06] flex items-center justify-center shrink-0 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                        <Icon className="w-4.5 h-4.5 text-black/30 group-hover:text-primary transition-colors" style={{ width: "1.1rem", height: "1.1rem" }} />
                      </div>

                      {/* Role info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                          <h3 className="font-display font-normal text-[1rem] text-foreground tracking-[0.05em] group-hover:text-primary transition-colors uppercase">
                            {role.title}
                          </h3>
                          <span className={`text-[9px] font-display font-normal px-2 py-0.5 rounded-full uppercase tracking-[0.15em] border ${levelColors[role.level]}`}>
                            {role.level}
                          </span>
                        </div>
                        <p className="text-[13px] text-[#6B7280] font-normal leading-[1.7] line-clamp-2 max-w-2xl">
                          {role.description}
                        </p>
                        {!!role.requirements?.length && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {role.requirements.slice(0, 3).map((requirement) => (
                              <span
                                key={requirement}
                                className="inline-flex items-center px-2.5 py-1 rounded-full border border-black/[0.08] bg-black/[0.02] text-[10px] text-black/45"
                              >
                                {requirement}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-row md:flex-col items-start md:items-end gap-2.5 shrink-0">
                        <div className="flex items-center gap-1.5 text-black/30">
                          <MapPin className="w-3 h-3" />
                          <span className="font-display font-normal text-[10px] uppercase tracking-[0.12em]">{role.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-black/30">
                          <Clock className="w-3 h-3" />
                          <span className="font-display font-normal text-[10px] uppercase tracking-[0.12em]">{role.type}</span>
                        </div>
                        <div className="font-display font-normal text-[9px] text-primary uppercase tracking-[0.2em]">
                          {role.team}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="shrink-0">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => setSelectedRole(role)}
                            className="inline-flex items-center gap-2 h-9 px-5 border border-black/[0.08] rounded-xl group-hover:border-foreground group-hover:bg-foreground group-hover:text-white transition-all font-display font-normal text-[10px] uppercase tracking-[0.18em] text-black/50"
                          >
                            Quick Apply <ChevronRight className="w-3 h-3" />
                          </button>
                          {externalApplicationFormUrl && (
                            <a
                              href={externalApplicationFormUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 h-9 px-4 border border-primary/20 rounded-xl text-primary hover:bg-primary/5 transition-all font-display font-normal text-[10px] uppercase tracking-[0.14em]"
                            >
                              Apply via Form
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {isLoading && (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
                <span className="font-display font-normal text-[10px] text-black/30 uppercase tracking-[0.2em]">Synchronizing Registry...</span>
              </div>
            )}

            {filtered.length === 0 && (
              <div className="text-center py-20 font-display font-normal text-[13px] text-black/30 uppercase tracking-[0.15em]">
                No open roles in this department right now. Check back soon.
              </div>
            )}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            PERKS & BENEFITS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-32 px-6 border-b border-black/[0.04] bg-black/[0.01]">
          <div className="max-w-[1280px] mx-auto">
            <motion.div {...fadeUp} className="mb-16">
              <SectionLabel>Life at Astraventa</SectionLabel>
              <SectionHeading accent="Not Burnout.">
                Built for Elite Work.
              </SectionHeading>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={perk.title}
                    {...fadeUp}
                    transition={{ delay: i * 0.08, duration: 0.7, ease }}
                    className="group bg-white rounded-2xl p-8 border border-black/[0.06] hover:border-primary/20 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/[0.05] border border-primary/[0.08] flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500">
                      <Icon className="w-4.5 h-4.5" style={{ width: "1.1rem", height: "1.1rem" }} />
                    </div>
                    <h3 className="font-display font-normal text-[1rem] text-foreground tracking-[0.06em] uppercase mb-3">
                      {perk.title}
                    </h3>
                    <p className="text-[14px] text-[#6B7280] font-normal leading-[1.75]">{perk.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            HIRING PROCESS
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-32 px-6 border-b border-black/[0.04]">
          <div className="max-w-[1280px] mx-auto">
            <motion.div {...fadeUp} className="mb-20">
              <SectionLabel>The Process</SectionLabel>
              <SectionHeading accent="No Surprises.">
                Transparent.
              </SectionHeading>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-px bg-black/[0.06] z-0" />

              {[
                { step: "01", title: "Application", body: "Submit your resume and a brief note on why Astraventa. We review every application personally." },
                { step: "02", title: "Intro Call", body: "A 30-minute conversation with a team lead. We want to understand how you think, not just what you've done." },
                { step: "03", title: "Technical Screen", body: "A focused, real-world problem relevant to your role. No trick questions, no whiteboard theatre." },
                { step: "04", title: "Offer", body: "Fast decisions. We don't believe in 6-round processes. If we're aligned, we move quickly." },
              ].map((step, i) => (
                <motion.div
                  key={step.step}
                  {...fadeUp}
                  transition={{ delay: i * 0.1, duration: 0.6, ease }}
                  className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-6 mb-10 md:mb-0"
                >
                  <div className="w-[4.5rem] h-[4.5rem] rounded-xl bg-white border border-black/[0.08] flex items-center justify-center mb-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                    <span className="font-heading font-normal text-primary tracking-[0.1em] text-[1.25rem]">
                      {step.step}
                    </span>
                  </div>
                  <h4 className="font-display font-normal text-[0.9rem] text-foreground tracking-[0.1em] uppercase mb-2">
                    {step.title}
                  </h4>
                  <p className="text-[13px] text-[#6B7280] font-normal leading-[1.75]">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            GENERAL APPLICATION CTA
        ═══════════════════════════════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1280px] mx-auto">
            <motion.div
              {...fadeUp}
              className="bg-slate-950 rounded-2xl p-12 md:p-20 text-center relative overflow-hidden"
            >
              {/* Texture */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />
              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[240px] bg-primary/15 blur-[80px] rounded-full pointer-events-none" />
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="relative z-10">
                <motion.div
                  {...fadeUp}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] mb-10"
                >
                  <Star className="w-3 h-3 text-amber-400/80" />
                  <span className="font-display font-normal text-[10px] text-white/30 uppercase tracking-[0.2em]">
                    Don't see your role?
                  </span>
                </motion.div>

                <motion.h2
                  {...fadeUp}
                  transition={{ delay: 0.05 }}
                  className="font-heading font-normal text-white uppercase leading-[1.08] tracking-[0.12em] text-[2rem] md:text-[2.8rem] lg:text-[3.2rem] mb-6"
                >
                  Extraordinary Talent<br />
                  <span className="text-white/40">Always Has a Seat.</span>
                </motion.h2>

                <motion.p
                  {...fadeUp}
                  transition={{ delay: 0.1 }}
                  className="text-white/40 max-w-xl mx-auto mb-10 text-[15px] font-normal leading-[1.8]"
                >
                  We always have room for exceptional builders. If you are doing work
                  that belongs in the Astraventa ecosystem, tell us about it — we want to hear from you.
                </motion.p>

                <motion.div
                  {...fadeUp}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to="/get-in-touch">
                    <button className="inline-flex items-center gap-2 h-11 px-10 bg-white text-foreground font-display font-normal text-[11px] uppercase tracking-[0.18em] rounded-sm shadow-xl hover:bg-white/90 transition-all group">
                      Submit General Application <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className="inline-flex items-center gap-2 h-11 px-10 bg-transparent text-white/40 border border-white/[0.08] hover:text-white/60 hover:border-white/20 font-display font-normal text-[11px] uppercase tracking-[0.18em] rounded-sm transition-all">
                      Learn About Us
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ─── APPLICATION OVERLAY ────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRole(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={`role-${selectedRole.id}`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="px-8 pt-10 pb-8 border-b border-black/[0.04]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                       <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                       <span className="font-display font-normal text-[9px] text-black/30 uppercase tracking-[0.2em]">Application Portal</span>
                    </div>
                    <h2 className="font-heading font-normal text-[1.8rem] text-foreground uppercase tracking-[0.1em] leading-tight">
                      {selectedRole.title}
                    </h2>
                    <p className="text-[12px] text-black/40 font-display font-normal uppercase tracking-widest mt-1">
                      {selectedRole.team} // {selectedRole.location}
                    </p>
                    {externalApplicationFormUrl && (
                      <a
                        href={externalApplicationFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 px-3 py-1.5 rounded-full border border-primary/20 text-primary text-[10px] uppercase tracking-[0.12em] hover:bg-primary/5 transition-all"
                      >
                        Apply via external form
                      </a>
                    )}
                  </div>
                  <button 
                    onClick={() => setSelectedRole(null)}
                    className="w-10 h-10 rounded-full border border-black/[0.06] flex items-center justify-center hover:bg-black/5 transition-colors"
                  >
                    <X className="w-4 h-4 text-black/40" />
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="px-8 py-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-display font-normal text-[1.2rem] text-foreground uppercase tracking-[0.1em] mb-3">Transmission Complete</h3>
                    <p className="text-[14px] text-black/50 max-w-sm leading-relaxed">
                      Your credentials have been successfully routed to our intelligence layer. Our architects will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleApply} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="font-display font-normal text-[10px] text-black/30 uppercase tracking-[0.2em] ml-1">Full Name</label>
                        <input 
                          required
                          value={appForm.fullName}
                          onChange={(e) => setAppForm({...appForm, fullName: e.target.value})}
                          placeholder="e.g. Satoshi Nakamoto"
                          className="w-full h-12 bg-black/[0.02] border border-black/[0.08] px-5 rounded-xl font-medium text-[14px] focus:bg-white focus:border-primary transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="font-display font-normal text-[10px] text-black/30 uppercase tracking-[0.2em] ml-1">Email Address</label>
                        <input 
                          required
                          type="email"
                          value={appForm.email}
                          onChange={(e) => setAppForm({...appForm, email: e.target.value})}
                          placeholder="name@nexus.com"
                          className="w-full h-12 bg-black/[0.02] border border-black/[0.08] px-5 rounded-xl font-medium text-[14px] focus:bg-white focus:border-primary transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="font-display font-normal text-[10px] text-black/30 uppercase tracking-[0.2em] ml-1">Portfolio / Link</label>
                      <input 
                        value={appForm.portfolioUrl}
                        onChange={(e) => setAppForm({...appForm, portfolioUrl: e.target.value})}
                        placeholder="https://github.com/..."
                        className="w-full h-12 bg-black/[0.02] border border-black/[0.08] px-5 rounded-xl font-medium text-[14px] focus:bg-white focus:border-primary transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="font-display font-normal text-[10px] text-black/30 uppercase tracking-[0.2em] ml-1">Cover Note / Strategy</label>
                      <textarea 
                        required
                        value={appForm.coverLetter}
                        onChange={(e) => setAppForm({...appForm, coverLetter: e.target.value})}
                        placeholder="Why is Astraventa your next deployment?"
                        className="w-full min-h-[140px] bg-black/[0.02] border border-black/[0.08] p-5 rounded-2xl font-medium text-[14px] focus:bg-white focus:border-primary transition-all outline-none resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <button 
                        disabled={isApplying}
                        className="w-full h-14 bg-foreground text-white rounded-xl font-display font-normal text-[11px] uppercase tracking-[0.2em] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {isApplying ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Propagating Data...
                          </>
                        ) : (
                          <>
                            Submit Application <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-center text-[9px] text-black/20 uppercase tracking-[0.1em] mt-4">
                        By submitting, you agree to our recruitment vetting protocols.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
