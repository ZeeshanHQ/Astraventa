import { motion } from "framer-motion";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import {
  ArrowRight, ChevronRight, Bot, Globe, Smartphone, Server,
  ShieldCheck, Palette, Zap, Code2, Cloud, Database, Workflow, Cpu
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// ── Marquee capabilities (comprehensive list) ──────────────────────────────
const capabilities = [
  { label: "AI Engineering",         icon: <Bot       className="w-3.5 h-3.5" /> },
  { label: "Web Systems",            icon: <Globe     className="w-3.5 h-3.5" /> },
  { label: "Backend Infrastructure", icon: <Server    className="w-3.5 h-3.5" /> },
  { label: "Mobile Native",          icon: <Smartphone className="w-3.5 h-3.5" /> },
  { label: "Security Architecture",  icon: <ShieldCheck className="w-3.5 h-3.5" /> },
  { label: "UI / UX Design",         icon: <Palette   className="w-3.5 h-3.5" /> },
  { label: "Agentic Workflows",      icon: <Workflow  className="w-3.5 h-3.5" /> },
  { label: "LLM Integration",        icon: <Code2     className="w-3.5 h-3.5" /> },
  { label: "Cloud Deployment",       icon: <Cloud     className="w-3.5 h-3.5" /> },
  { label: "Database Architecture",  icon: <Database  className="w-3.5 h-3.5" /> },
  { label: "AI Chatbots",            icon: <Bot       className="w-3.5 h-3.5" /> },
  { label: "SaaS Products",          icon: <Zap       className="w-3.5 h-3.5" /> },
  { label: "Automation Systems",     icon: <Cpu       className="w-3.5 h-3.5" /> },
  { label: "API Architecture",       icon: <Code2     className="w-3.5 h-3.5" /> },
  { label: "Branding & Identity",    icon: <Palette   className="w-3.5 h-3.5" /> },
];

// ── Clickable service tags with real routes ─────────────────────────────────
const buildTags: { label: string; route: string }[] = [
  { label: "AI Agents",         route: "/services/ai" },
  { label: "LLM Pipelines",     route: "/services/ai" },
  { label: "Web Apps",          route: "/services/web" },
  { label: "Mobile Apps",       route: "/services/mobile" },
  { label: "SaaS Products",     route: "/products" },
  { label: "Cloud Infra",       route: "/services/backend" },
  { label: "Security Systems",  route: "/services/security" },
  { label: "AI Chatbots",       route: "/services/chatbots" },
  { label: "Automation",        route: "/services/automation" },
  { label: "UI / UX Design",    route: "/services/ui-ux" },
  { label: "Database Design",   route: "/services/backend" },
  { label: "Branding",          route: "/services/branding" },
];

// ── Stats (accurate Astraventa numbers) ────────────────────────────────────
const stats = [
  { value: "33+",  label: "AI Tools" },
  { value: "6+",   label: "SaaS Products" },
  { value: "30",   label: "Day MVP Launch" },
  { value: "5+",   label: "Active Ventures" },
];

export const Hero = () => {
  const navigate = useNavigate();

  const containerVars = {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };
  const rightVars = {
    hidden: { opacity: 0, x: 30 },
    show:   { opacity: 1, x: 0, transition: { duration: 0.9, ease, delay: 0.25 } },
  };

  return (
    <section className="relative overflow-hidden bg-white border-b border-black/[0.04]">

      {/* ── MAIN TWO-COLUMN CONTENT ──────────────────────────────────────── */}
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 pt-24 md:pt-32 lg:pt-44 pb-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-14 xl:gap-20">

          {/* LEFT COLUMN */}
          <motion.div
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col items-start"
          >
            {/* Badge */}
            <motion.div
              variants={itemVars}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] mb-8 cursor-pointer hover:bg-black/[0.07] transition-colors"
              onClick={() => navigate("/services")}
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-display font-normal text-[11px] text-black/60 uppercase tracking-[0.15em]">
                Venture Engineering Studio
              </span>
              <ChevronRight className="w-3 h-3 text-black/30" />
            </motion.div>

            {/* Heading — Tenor Sans, normal weight, uppercase */}
            <motion.h1
              variants={itemVars}
              className="mb-6 font-heading font-normal text-foreground uppercase leading-[1.08] tracking-[0.15em] text-[1.875rem] sm:text-[2.5rem] md:text-[3.1rem] lg:text-[3.7rem] xl:text-[4.1rem]"
            >
              Build What<br />
              <span className="text-primary">Doesn't</span> Break.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVars}
              className="mb-3 text-[14px] sm:text-[15px] md:text-[16px] text-[#4B5563] font-normal leading-[1.8] max-w-[560px]"
            >
              We engineer AI-powered SaaS products, custom LLM pipelines,
              autonomous agents, agentic workflows, and world-class web
              ecosystems — built to perform at enterprise scale.
            </motion.p>
            <motion.p
              variants={itemVars}
              className="mb-8 sm:mb-10 text-[13px] sm:text-[14px] text-[#6B7280] font-normal leading-[1.75] max-w-[540px]"
            >
              From full-stack mobile apps, backend infrastructure, and cloud
              deployments to AI chatbots, security architecture, and brand
              identity — Astraventa is your end-to-end engineering partner.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVars}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              <ShinyButton
                className="h-11 px-8 text-[12px] font-display font-medium uppercase tracking-[0.12em]"
                onClick={() => navigate("/contact")}
              >
                <span className="flex items-center gap-2">
                  Start a Project <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </ShinyButton>

              <ButtonWithIcon
                onClick={() => navigate("/services")}
                className="bg-transparent text-black border border-black/10 hover:bg-black/5"
              >
                View Capabilities
              </ButtonWithIcon>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — Stats card */}
          <motion.div
            variants={rightVars}
            initial="hidden"
            animate="show"
            className="w-full lg:w-[320px] xl:w-[370px] 2xl:w-[410px] shrink-0"
          >
            <div className="relative rounded-2xl border border-black/[0.07] bg-white overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

              {/* Stats 2×2 grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-black/[0.06]">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-4 sm:p-6 flex flex-col gap-1 group hover:bg-black/[0.015] transition-colors"
                  >
                    <span className="font-heading font-normal text-[1.5rem] sm:text-[2rem] text-foreground leading-none tracking-[0.08em]">
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

              {/* "What We Build" clickable tags */}
              <div className="p-4 sm:p-5 flex flex-col gap-3">
                <p className="font-display font-normal text-[9px] text-black/35 uppercase tracking-[0.3em] mb-1">
                  What We Build
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {buildTags.map((tag) => (
                    <button
                      key={tag.label}
                      onClick={() => navigate(tag.route)}
                      className="inline-flex items-center px-2.5 py-1 rounded-full border border-black/[0.08] bg-black/[0.02] font-display font-normal text-[9px] sm:text-[10px] text-black/50 uppercase tracking-[0.1em] hover:border-primary/40 hover:text-primary hover:bg-primary/[0.04] transition-all cursor-pointer"
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom strip CTA */}
              <div className="border-t border-black/[0.06] px-5 py-4 flex items-center justify-between bg-black/[0.015]">
                <span className="font-display font-normal text-[10px] text-black/40 uppercase tracking-[0.15em]">
                  Ready to build?
                </span>
                <button
                  onClick={() => navigate("/contact")}
                  className="font-display font-medium text-[10px] text-primary uppercase tracking-[0.15em] flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  Let's talk <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── CAPABILITIES MARQUEE ─────────────────────────────────────────────
          Structure: one outer overflow wrapper → one animated flex track
          containing two copies of items. Hover pauses the whole track.
          No separate animations on individual children = no merge glitch.
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="mt-14 border-t border-black/[0.06] relative overflow-hidden">
        {/* Label row — fully above and separate from ticker */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
          <span className="font-display font-normal text-[8px] sm:text-[9px] text-black/30 uppercase tracking-[0.35em] shrink-0">
            Core Capabilities
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-black/10 to-transparent" />
        </div>

        {/* Ticker strip — clearly separated below */}
        <div className="border-t border-black/[0.04] overflow-hidden relative">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/*
            Two sibling divs each running animate-marquee.
            Parent has `group` → both children pause simultaneously on hover
            via `group-hover:[animation-play-state:paused]`.
            This guarantees they stay perfectly in sync — no merge glitch.
          */}
          <div className="flex overflow-hidden group py-3.5">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center animate-marquee group-hover:[animation-play-state:paused]"
              >
                {capabilities.map((cap, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 md:px-7 border-r border-black/[0.05] whitespace-nowrap"
                  >
                    <span className="text-primary/50 shrink-0">{cap.icon}</span>
                    <span className="font-display font-normal text-[10px] sm:text-[11px] text-black/45 uppercase tracking-[0.15em]">
                      {cap.label}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
