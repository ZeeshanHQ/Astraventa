import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Server,
  Database,
  Globe,
  Zap,
  ShieldCheck,
  Cpu,
  Network,
  ArrowRight,
  GitBranch,
  BarChart2,
  Lock,
  Activity,
  Layers,
  Code2,
  CheckCircle,
  RefreshCw,
  FileText,
  ScanLine
} from "lucide-react";
import { AstraEcosystemSync } from "@/components/AstraEcosystemSync";

// ─── Live System Monitor Widget ───────────────────────────────────────────────
const SystemMonitor = () => {
  const streams = [
    { label: "API Throughput", value: 94, color: "#2910E5" },
    { label: "DB Query Cache", value: 87, color: "#2910E5" },
    { label: "Pub/Sub Ingestion", value: 72, color: "#2910E5" },
    { label: "Edge CDN Hit Rate", value: 98, color: "#2910E5" },
  ];

  return (
    <div className="relative w-full bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">CLUSTER-01 // LIVE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-slate-500">P99: 4.2ms</span>
          <span className="text-[10px] font-mono text-slate-500">Uptime: 99.99%</span>
        </div>
      </div>

      {/* Metrics */}
      <div className="p-5 space-y-4">
        {streams.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1.5">
              <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-wider">{s.label}</span>
              <span className="text-[10px] font-mono font-black text-slate-300">{s.value}%</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: s.color }}
                initial={{ width: 0 }}
                animate={{ width: `${s.value}%` }}
                transition={{ duration: 1.4, delay: i * 0.15, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Log stream */}
      <div className="border-t border-slate-800 px-5 py-3 space-y-1.5 bg-slate-950/80">
        {[
          { ts: "16:14:01", msg: "POST /api/v2/ingest → 201 Created", ok: true },
          { ts: "16:14:02", msg: "GET /health → 200 OK // 1.3ms", ok: true },
          { ts: "16:14:03", msg: "Worker job #7841 → Completed", ok: true },
        ].map((log, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[9px] font-mono text-slate-600">{log.ts}</span>
            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${log.ok ? 'bg-emerald-500' : 'bg-red-500'}`} />
            <span className="text-[9px] font-mono text-slate-400">{log.msg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
const BackendEngineering = () => {
  const [activeService, setActiveService] = useState(0);

  // ─── ECOSYSTEM SYNC ───────────────────────────────────────────────────────
  const relatedTools = [
    {
      title: "AstraScrape AI",
      tagline: "High-Velocity Data Ingestion",
      icon: Globe,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      href: "/tools/astra-scrape"
    },
    {
      title: "AstraFlow AI",
      tagline: "Event-Driven Logic Mesh",
      icon: FileText,
      color: "text-purple-600",
      bg: "bg-purple-600/10",
      href: "/tools/astra-flow"
    },
    {
      title: "AstraTrace AI",
      tagline: "Immutable System Auditing",
      icon: ScanLine,
      color: "text-teal-600",
      bg: "bg-teal-600/10",
      href: "/tools/astra-trace"
    }
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, ease: "easeOut" as const },
  };

  const services = [
    {
      icon: <Network className="w-5 h-5" />,
      name: "API Architecture",
      tagline: "RESTful & GraphQL APIs built for scale",
      description: "We design versioned, documented, and rate-limited APIs with strict input validation, circuit breakers, and observability baked in from day one. Built to survive traffic spikes.",
      specs: ["REST / GraphQL / gRPC", "OpenAPI 3.0 Spec", "Rate Limiting + Throttle", "Circuit Breaker Patterns"],
    },
    {
      icon: <Database className="w-5 h-5" />,
      name: "Database Engineering",
      tagline: "Schemas that normalize intelligently",
      description: "From PostgreSQL sharding strategies to vector embedding pipelines, we architect persistence layers that query at sub-10ms targets under real-world concurrency.",
      specs: ["PostgreSQL / MongoDB", "Read Replicas + Failover", "Vector Search (pgvector)", "Query Plan Optimization"],
    },
    {
      icon: <Zap className="w-5 h-5" />,
      name: "Real-Time Systems",
      tagline: "WebSockets, streams, event sourcing",
      description: "We build Kafka-backed event streaming pipelines and WebSocket servers handling 100k+ concurrent connections with guaranteed message delivery and ordered processing.",
      specs: ["Kafka / Redis Pub-Sub", "WebSocket Clusters", "Event Sourcing + CQRS", "Dead-Letter Queues"],
    },
    {
      icon: <Lock className="w-5 h-5" />,
      name: "Auth & Security",
      tagline: "Zero-trust, enterprise-grade identity",
      description: "OAuth 2.0, OIDC, RBAC, MFA — we implement security architectures that pass SOC2 audits and enterprise penetration tests. Security as a first-class backend citizen.",
      specs: ["OAuth 2.0 / OIDC", "JWT + Refresh Rotation", "RBAC + ABAC Policies", "SOC2 Compliance"],
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      name: "DevOps & CI/CD",
      tagline: "Zero-downtime deploys, always",
      description: "GitHub Actions pipelines with automated test gates, blue-green deployment strategies, Kubernetes rollout controls, and Terraform-managed infrastructure as code.",
      specs: ["GitHub Actions / GitLab CI", "Blue-Green Deployments", "K8s HPA + Node Auto-Scale", "Terraform / Pulumi IaC"],
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      name: "Performance Engineering",
      tagline: "P99 < 5ms is the target, not the ceiling",
      description: "Profiling, load testing, caching strategies, and connection pool tuning. We benchmark every service layer and optimize until your metrics tell a better story.",
      specs: ["k6 / Artillery Load Tests", "Redis Caching Strategy", "Connection Pool Tuning", "APM with OpenTelemetry"],
    },
  ];

  const techStack = [
    "Node.js", "Go", "PostgreSQL", "Redis", "Kubernetes",
    "GraphQL", "Prisma", "Docker", "Kafka", "Terraform",
    "AWS / GCP", "OpenTelemetry", "Elasticsearch", "gRPC",
  ];

  const principles = [
    { n: "01", title: "Fail-Safe by Default", body: "Every service has graceful degradation paths. We plan for failure so your users never experience it." },
    { n: "02", title: "Observability First", body: "Structured logs, distributed traces, and metric dashboards deployed alongside every component from sprint one." },
    { n: "03", title: "API Contract Enforcement", body: "OpenAPI specs are source of truth. Breaking changes require versioning — no exceptions, no shortcuts." },
    { n: "04", title: "Horizontal Scale Path", body: "Every architectural decision is evaluated against a 100x traffic projection before a line of code is written." },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#2910E5]/10 overflow-x-hidden">
      <Header />

      <main className="pt-20">

        {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
        <section className="relative px-6 pt-20 pb-0 bg-white overflow-hidden">
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#2910E5 0.75px, transparent 0.75px)", backgroundSize: "28px 28px" }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Left */}
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2910E5]/5 border border-[#2910E5]/10 mb-6">
                  <Server className="w-3.5 h-3.5 text-[#2910E5]" />
                  <span className="text-[10px] font-black text-[#2910E5] tracking-[0.18em] uppercase font-mono">Enterprise Core · Backend</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tight leading-[0.88] mb-6">
                  Backend &<br />Cloud<br />
                  <span className="text-[#2910E5]">Engineering.</span>
                </h1>

                <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-lg mb-8">
                  Resilient APIs. Zero-Latency Architecture.<br />
                  Production-Grade by Default.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild className="btn-primary h-12 px-7 text-sm font-bold group">
                    <Link to="/contact">Architect Your System <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
                  </Button>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">All Systems Operational</span>
                  </div>
                </div>
              </div>

              {/* Right: System Monitor */}
              <div className="pt-4">
                <SystemMonitor />
              </div>

            </div>

            {/* Tech Stack strip */}
            <div className="mt-16 py-5 border-t border-b border-slate-100 flex items-center gap-3 overflow-x-auto pb-5 scrollbar-none">
              <span className="text-[10px] font-black font-mono text-slate-300 uppercase tracking-[0.2em] shrink-0 mr-2">Stack</span>
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-[10px] font-black font-mono uppercase tracking-wider bg-slate-950 text-slate-300 rounded-md shrink-0 hover:bg-[#2910E5] hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SERVICES INTERACTIVE ────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
              <div>
                <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-2 block">What We Build</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-[0.92]">
                  Six Core<br /><span className="text-[#2910E5]">Engineering Services.</span>
                </h2>
              </div>
              <p className="text-slate-500 text-sm font-medium max-w-xs leading-relaxed">
                Production-grade, infrastructure-level disciplines — not shallow integrations.
              </p>
            </div>

            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-slate-100">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`px-4 py-2 rounded-lg text-[11px] font-black font-mono uppercase tracking-wider transition-all duration-200 ${i === activeService ? 'bg-slate-950 text-white' : 'bg-transparent text-slate-400 hover:bg-slate-100'}`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Active service panel */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-slate-100 rounded-2xl p-8 md:p-10"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#2910E5]/8 flex items-center justify-center text-[#2910E5]">
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-950 tracking-tight">{services[activeService].name}</h3>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{services[activeService].tagline}</span>
                  </div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed text-base mb-6">
                  {services[activeService].description}
                </p>
                <Button asChild variant="outline" className="h-10 px-5 text-sm font-bold border-slate-200 hover:border-[#2910E5] hover:text-[#2910E5] transition-all">
                  <Link to="/contact">Start a Conversation <ArrowRight className="ml-2 w-3.5 h-3.5" /></Link>
                </Button>
              </div>
              <div className="lg:col-span-5">
                <div className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-widest mb-3">Deliverables & Specs</div>
                <div className="grid grid-cols-1 gap-2">
                  {services[activeService].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5 border-b border-slate-50 last:border-0">
                      <CheckCircle className="w-3.5 h-3.5 text-[#2910E5] shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── SYSTEM ARCHITECTURE ─────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">

            <div className="mb-12">
              <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-2 block">System Design</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-[0.92]">
                How We Layer<br /><span className="text-[#2910E5]">Your Backend.</span>
              </h2>
            </div>

            {/* Architecture diagram */}
            <div className="relative bg-slate-950 rounded-2xl p-8 md:p-12 overflow-hidden">
              {/* Background grid */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{ backgroundImage: "linear-gradient(#2910E5 0.5px, transparent 0.5px), linear-gradient(90deg, #2910E5 0.5px, transparent 0.5px)", backgroundSize: "40px 40px" }}
              />

              {/* Horizontal connector line */}
              <div className="absolute top-1/2 left-12 right-12 h-[0.5px] bg-[#2910E5]/30 hidden lg:block -translate-y-1/2" />

              <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: "01", label: "Edge / CDN", desc: "Cloudflare Workers\nGlobal routing + WAF", icon: Globe },
                  { step: "02", label: "API Gateway", desc: "Rate limiting\nAuth validation + routing", icon: Network },
                  { step: "03", label: "Core Services", desc: "Domain microservices\nEvent-driven workers", icon: Cpu },
                  { step: "04", label: "Persistence", desc: "PostgreSQL + Redis\nKafka event stream", icon: Database },
                ].map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="relative bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col gap-3 hover:border-[#2910E5]/30 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-black text-[#2910E5] uppercase tracking-widest">Layer {node.step}</span>
                        <Icon className="w-4 h-4 text-slate-500 group-hover:text-[#2910E5] transition-colors" />
                      </div>
                      <h4 className="text-base font-black text-white tracking-tight">{node.label}</h4>
                      <p className="text-[11px] font-mono text-slate-500 leading-relaxed whitespace-pre-line">{node.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom annotation */}
              <div className="relative z-10 mt-6 pt-5 border-t border-slate-800 flex flex-wrap gap-6 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                <span>← Request Flow →</span>
                <span>Horizontal Scale: Kubernetes HPA</span>
                <span>Observability: OpenTelemetry + Grafana</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ENGINEERING PRINCIPLES ──────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

              {/* Left sticky */}
              <div className="lg:col-span-4">
                <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-3 block">How We Think</span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight leading-[0.95] sticky top-28">
                  Built to<br />survive failure.<br />
                  <span className="text-[#2910E5]">Engineered to scale.</span>
                </h2>
              </div>

              {/* Right: principles */}
              <div className="lg:col-span-8 flex flex-col divide-y divide-slate-100">
                {principles.map((p, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.08 }}
                    className="py-7 flex gap-8 group cursor-default"
                  >
                    <span className="text-[11px] font-mono font-black text-slate-200 group-hover:text-[#2910E5] transition-colors shrink-0 pt-1">{p.n}</span>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight mb-2">{p.title}</h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{p.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── METRICS DARK BAND ───────────────────────────────────────────────── */}
        <section className="py-16 px-6 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
              {[
                { value: "99.99%", label: "Uptime SLA", sub: "guaranteed in contract" },
                { value: "< 5ms", label: "P99 Latency Target", sub: "measured in production" },
                { value: "10M+", label: "API Calls / Day", sub: "across client systems" },
                { value: "0", label: "Downtime Deployments", sub: "blue-green by default" },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.07 }}
                  className={`${i === 0 ? '' : 'pl-8'} flex flex-col gap-1`}
                >
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">{m.value}</span>
                  <span className="text-[11px] font-black text-white/50 uppercase tracking-widest font-mono leading-tight">{m.label}</span>
                  <span className="text-[10px] text-white/25 font-mono mt-0.5">{m.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS STRIP ───────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-2 block">How We Engage</span>
              <h2 className="text-3xl font-black text-slate-950 tracking-tight">From Brief to Production in 4 Phases.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border border-slate-100 rounded-2xl overflow-hidden">
              {[
                { n: "01", name: "Discovery", desc: "System audit, architecture review, and requirements mapping. We reverse-engineer your constraints before proposing solutions." },
                { n: "02", name: "Blueprint", desc: "ERDs, API contracts, infrastructure diagrams, and ADRs— documented before a single service is written." },
                { n: "03", name: "Build", desc: "Iterative delivery with weekly deployments to staging. Every PR reviewed against performance benchmarks." },
                { n: "04", name: "Handover", desc: "Runbooks, alert playbooks, load test reports, and architecture diagrams. You own everything, fully." },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.07 }}
                  className={`p-7 flex flex-col gap-3 hover:bg-slate-950 group transition-all duration-300 ${i < 3 ? 'border-r border-slate-100' : ''}`}
                >
                  <span className="text-[10px] font-mono font-black text-[#2910E5] uppercase tracking-widest">{phase.n}</span>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-white tracking-tight transition-colors">{phase.name}</h3>
                  <p className="text-sm text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed transition-colors">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
        <section className="pb-12 bg-white">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

        {/* ─── CTA ────────────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-12 border-t border-b border-slate-100">
              <div>
                <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-[0.2em] mb-3 block">Build with Astraventa</span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-[0.92]">
                  Build the backbone<br />of your product.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 shrink-0">
                <Button asChild className="btn-primary h-12 px-8 text-sm group">
                  <Link to="/contact">Request Architecture Review <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
                </Button>
                <Link to="/services" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors underline underline-offset-4">
                  View All Services
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-[11px] font-mono text-slate-300 uppercase tracking-widest">
              <span>SOC2 Ready</span>
              <span className="w-1 h-1 rounded-full bg-slate-200" />
              <span>HIPAA Compatible</span>
              <span className="w-1 h-1 rounded-full bg-slate-200" />
              <span>Multi-Cloud Native</span>
              <span className="w-1 h-1 rounded-full bg-slate-200" />
              <span>IaC Delivered</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default BackendEngineering;
