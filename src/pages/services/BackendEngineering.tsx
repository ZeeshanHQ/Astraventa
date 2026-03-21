import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
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
import { Marquee } from "@/components/ui/marquee";

// ─── Live System Monitor Widget ───────────────────────────────────────────────
const SystemMonitor = () => {
  const streams = [
    { label: "API_THROUGHPUT", value: 94 },
    { label: "CACHE_HIT_RATE", value: 87 },
    { label: "PUBSUB_LAG", value: 12, inverse: true },
    { label: "MEMORY_USAGE", value: 45 },
  ];

  return (
    <div className="relative w-full bg-black/[0.01] rounded-2xl border border-black/[0.06] overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-black/10">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(var(--primary-rgb),0.4)]" />
          <span className="text-[10px] font-['Anonymous_Pro'] font-black text-black tracking-[0.2em] uppercase">CLUSTER_01 // LIVE_NET</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-['Anonymous_Pro'] text-[#4B5563] font-black">P99: 4.2MS</span>
          <span className="text-[10px] font-['Anonymous_Pro'] text-[#4B5563] font-black">UPTIME: 99.99%</span>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {streams.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between mb-3">
              <span className="text-[10px] font-['Anonymous_Pro'] font-black text-[#4B5563] uppercase tracking-widest">{s.label}</span>
              <span className="text-[10px] font-['Anonymous_Pro'] font-black text-primary">{s.value}{s.label === "PUBSUB_LAG" ? 'MS' : '%'}</span>
            </div>
            <div className="h-1 bg-white rounded-2xl overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${s.inverse ? 100 - s.value : s.value}%` }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-black/[0.06] px-6 py-4 space-y-2 bg-black/[0.01] font-['Anonymous_Pro']">
        {[
          { ts: "16:20:01", msg: "POST /v1/ingest // 201_CREATED", status: "OK" },
          { ts: "16:20:02", msg: "DB_REPLICA_SYNC // SUCCESS", status: "OK" },
          { ts: "16:20:04", msg: "K8S_NODE_AUTOSCALE // TRIGGERED", status: "WARN" },
        ].map((log, i) => (
          <div key={i} className="flex items-center gap-4 text-[9px] font-black uppercase tracking-tight">
            <span className="text-black/20">{log.ts}</span>
            <div className={`w-1 h-1 rounded-full ${log.status === 'OK' ? 'bg-primary' : 'bg-primary/40'}`} />
            <span className="text-[#4B5563]">{log.msg}</span>
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
      title: "AstraPulse AI",
      tagline: "Performance Metrics",
      icon: Activity,
      color: "text-black/60",
      bg: "bg-black/[0.01]",
      href: "/tools/astra-pulse"
    },
    {
      title: "AstraFlow AI",
      tagline: "Event-Driven Logic Mesh",
      icon: FileText,
      color: "text-primary",
      bg: "bg-primary/10",
      href: "/tools/astra-flow"
    },
    {
      title: "AstraTrace AI",
      tagline: "Immutable System Auditing",
      icon: ScanLine,
      color: "text-primary",
      bg: "bg-primary/20",
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
    { n: "02", title: "Observability First", body: "Structured logs, distributed traces, and metric dashboards deployed alongside every component from sprint one." },
    { n: "03", title: "API Contract Enforcement", body: "OpenAPI specs are source of truth. Breaking changes require versioning — no exceptions, no shortcuts." },
    { n: "04", title: "Horizontal Scale Path", body: "Every architectural decision is evaluated against a 100x traffic projection before a line of code is written." },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 overflow-x-hidden font-sans">
      <Header />

      <main className="pt-12">

        {/* ─── HERO SECTION ────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden border-b border-black/[0.06] bg-white pt-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          <div className="max-w-[1400px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-20 items-center py-12">

            {/* Left Content (Minimalist) */}
            <div className="text-left max-w-3xl">
              <motion.div
                {...fadeUp}
                className="inline-flex items-center gap-3 px-3 py-1.5 rounded-2xl border border-black/[0.08] bg-black/[0.02] backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 mb-10 shadow-sm font-['Anonymous_Pro']"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                ENTERPRISE_CORE // BACKEND_OPS
              </motion.div>

              <motion.h1
                {...fadeUp} transition={{ delay: 0.1 }}
                className="mb-8 text-4xl md:text-5xl lg:text-7xl font-heading font-normal text-black leading-[1.0] tracking-[0.10em] uppercase"
              >
                Backend <br />
                <span className="text-black/20">Engineering.</span>
              </motion.h1>

              <motion.div
                {...fadeUp} transition={{ delay: 0.2 }}
                className="text-[#4B5563] font-medium text-[15px] max-w-xl mb-14 leading-relaxed uppercase tracking-[0.1em] border-l border-black/[0.06] pl-8"
              >
                Resilient APIs. Zero-Latency Architecture. Mission-Critical Systems designed for extreme concurrency and deterministic scale.
              </motion.div>

              <motion.div
                {...fadeUp} transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-8 mb-16"
              >
                <ShinyButton
                  className="h-11 px-8 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.12em]"
                  onClick={() => { }}
                >
                  <span className="flex items-center gap-3 pt-[2px]">
                    INITIALIZE_ARCHITECTURE <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>

                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-['Anonymous_Pro'] text-black/30 font-black uppercase tracking-[0.3em]">SYSTEMS_READY // CLUSTER_ONLINE</span>
                </div>
              </motion.div>

              {/* Mini Monitor Inline */}
              <motion.div
                {...fadeUp} transition={{ delay: 0.4 }}
                className="max-w-md"
              >
                <div className="bg-black/[0.01] rounded-2xl border border-black/[0.06] p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4 border-b border-black/[0.06] pb-3">
                    <span className="text-[9px] font-['Anonymous_Pro'] font-black text-black/40 uppercase tracking-widest">REALTIME_METRICS</span>
                    <span className="text-[9px] font-['Anonymous_Pro'] font-black text-primary uppercase">P99: 4.2MS</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] font-black text-black/10 uppercase tracking-widest font-['Anonymous_Pro']">THROUGHPUT</span>
                      <span className="text-sm font-black text-black uppercase tracking-tight">94%</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] font-black text-black/10 uppercase tracking-widest font-['Anonymous_Pro']">CACHE_HIT</span>
                      <span className="text-sm font-black text-black uppercase tracking-tight">87%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: SVG Asset */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-full flex justify-end"
            >
              <div className="relative">
                <img
                  src="/backend dev.svg"
                  alt="Backend Engineering"
                  className="w-full max-w-[550px] lg:max-w-[850px] h-auto object-contain relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── TECH STACK MARQUEE ────────────────────────────────────────────── */}
        <section className="py-20 border-b border-black/[0.06] bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(var(--primary) 0.5px, transparent 0.5px)", backgroundSize: "32px 32px" }} />
          <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-2 block">TECHNICAL_CORE // OVERVIEW</span>
              <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.10em] uppercase leading-none">The Astra-Standard <br />Engineering Stack.</h2>
            </div>
            <div className="flex flex-col md:items-end gap-2 text-right">
              <div className="text-black text-[11px] font-black font-['Anonymous_Pro'] uppercase tracking-[0.3em]">NODE.JS // GO // K8S // POSTGRESQL</div>
              <div className="h-px w-full md:w-64 bg-primary/20" />
            </div>
          </div>

          <div className="relative z-10">
            <Marquee className="[--duration:40s] [--gap:3rem] py-10" pauseOnHover>
              {[
                { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/000000" },
                { name: "Go", url: "https://cdn.simpleicons.org/go/000000" },
                { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql/000000" },
                { name: "Redis", url: "https://cdn.simpleicons.org/redis/000000" },
                { name: "Kubernetes", url: "https://cdn.simpleicons.org/kubernetes/000000" },
                { name: "Kafka", url: "https://cdn.simpleicons.org/apachekafka/000000" },
                { name: "Terraform", url: "https://cdn.simpleicons.org/terraform/000000" },
                { name: "AWS", url: "https://cdn.simpleicons.org/amazonaws/000000" },
                { name: "GCP", url: "https://cdn.simpleicons.org/googlecloud/000000" },
                { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb/000000" },
                { name: "Docker", url: "https://cdn.simpleicons.org/docker/000000" },
                { name: "GraphQL", url: "https://cdn.simpleicons.org/graphql/000000" },
                { name: "gRPC", url: "https://cdn.simpleicons.org/grpc/000000" },
                { name: "Prisma", url: "https://cdn.simpleicons.org/prisma/000000" },
                { name: "OpenTelemetry", url: "https://cdn.simpleicons.org/opentelemetry/000000" },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-12 h-12 p-3 rounded-2xl bg-black/[0.02] border border-black/[0.06] transition-all group-hover:bg-white group-hover:border-primary/20 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex items-center justify-center grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 duration-500">
                    <img src={tech.url} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-0.5 mt-[-2px]">
                    <span className="text-[8px] font-black text-black/10 group-hover:text-primary transition-colors uppercase tracking-[0.2em] font-['Anonymous_Pro']">BACKEND_CORE</span>
                    <span className="text-[13px] font-bold text-black/40 group-hover:text-black transition-colors uppercase tracking-[0.1em] font-heading">{tech.name}</span>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* ─── SERVICES INTERACTIVE ────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-b border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 mb-16">
              <div className="max-w-3xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block font-['Anonymous_Pro']">SERVICE_DISCIPLINES</span>
                <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.10em] leading-[1.1] uppercase">
                  Six Core<br /><span className="text-black/20">Engineering Verticals.</span>
                </h2>
              </div>
              <p className="text-[#4B5563] text-lg font-medium max-w-sm uppercase tracking-tight leading-tight border-l border-black/[0.06] pl-8">
                Production-grade, infrastructure-level disciplines engineered for extreme scalability.
              </p>
            </div>

            {/* Tab navigation */}
            <div className="flex flex-wrap gap-3 mb-12 border-b border-black/10 pb-12">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`px-8 py-4 rounded-full text-[10px] font-black font-['Anonymous_Pro'] uppercase tracking-[0.2em] transition-all duration-300 border ${i === activeService ? 'bg-black text-white border-black shadow-none' : 'bg-black/[0.01] text-[#4B5563] border-black/10 hover:bg-black/10 hover:text-black'}`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* Active service panel */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-20 bg-black/[0.01] border border-black/[0.06] rounded-2xl p-12 md:p-20 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
              <div className="lg:col-span-7 relative z-10">
                <div className="flex items-center gap-6 mb-12">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-black/[0.06] flex items-center justify-center text-primary shadow-sm">
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight uppercase mb-2 font-display">{services[activeService].name}</h3>
                    <span className="text-[10px] font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] font-black">{services[activeService].tagline}</span>
                  </div>
                </div>
                <p className="text-black/60 font-medium leading-relaxed text-2xl mb-16 uppercase tracking-tight">
                  {services[activeService].description}
                </p>
                <ShinyButton
                  className="h-11 px-7 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.1em]"
                  onClick={() => { }}
                >
                  <span className="flex items-center gap-2.5 pt-[2px]">
                    INITIALIZE_ARCHITECTURE <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>
              </div>
              <div className="lg:col-span-5 relative z-10">
                <div className="text-[10px] font-black font-['Anonymous_Pro'] text-[#4B5563] uppercase tracking-[0.4em] mb-10 border-b border-black/10 pb-4">CORE_SPECS // DELIVERABLES</div>
                <div className="grid grid-cols-1 gap-4">
                  {services[activeService].specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-6 py-5 border-b border-black/10 last:border-0 group cursor-default">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0 opacity-40 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_rgba(var(--primary-rgb),0.3)]" />
                      <span className="text-lg font-black text-black/80 uppercase tracking-tight group-hover:text-primary transition-colors">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ─── SYSTEM ARCHITECTURE ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-b border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 mb-16">
              <div className="max-w-3xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block font-['Anonymous_Pro']">SYSTEM_DESIGN</span>
                <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.10em] leading-[1.1] uppercase">
                  How We Layer<br /><span className="text-black/20">The Backend Grid.</span>
                </h2>
              </div>
              <p className="text-[#4B5563] text-lg font-medium max-w-sm uppercase tracking-tight leading-tight border-l border-black/[0.06] pl-8">
                Architecting persistence layers for sub-10ms targets under extreme concurrency.
              </p>
            </div>

            {/* Architecture diagram */}
            <div className="relative bg-black/[0.01] rounded-2xl p-12 md:p-24 overflow-hidden border border-black/[0.06]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative bg-white border border-black/[0.06] rounded-2xl p-10 flex flex-col gap-6 hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all group shadow-sm"
                    >
                      <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-2">
                        <span className="text-[10px] font-['Anonymous_Pro'] font-black text-primary uppercase tracking-widest">LAYER_{node.step}</span>
                        <Icon className="w-6 h-6 text-black/20 group-hover:text-primary transition-colors" />
                      </div>
                      <h4 className="text-2xl font-black text-black tracking-tighter uppercase font-display">{node.label}</h4>
                      <p className="text-[11px] font-['Anonymous_Pro'] text-[#4B5563] leading-relaxed font-bold uppercase tracking-[0.1em]">{node.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom annotation */}
              <div className="relative z-10 mt-16 pt-10 border-t border-black/20 flex flex-wrap gap-12 text-[10px] font-['Anonymous_Pro'] text-black/10 uppercase tracking-[0.3em] font-black">
                <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" /> REQUEST_FLOW_SYNC</span>
                <span>HORIZONTAL_SCALE: K8S_HPA // CLUSTER_AUTO</span>
                <span>OBSERVABILITY: OPENTELEMETRY // DISTRIBUTED_TRACING</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ENGINEERING PRINCIPLES ──────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

              {/* Left sticky */}
              <div className="lg:col-span-5">
                <motion.div {...fadeUp} className="sticky top-32">
                  <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block font-['Anonymous_Pro']">CORE_PHILOSOPHY</span>
                  <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.10em] leading-[1.1] uppercase mb-10">
                    Built to<br />survive failure.<br />
                    <span className="text-black/20">Immutable Scale.</span>
                  </h2>
                  <p className="text-[#4B5563] font-medium text-lg leading-relaxed max-w-sm uppercase tracking-tight border-l border-black/[0.06] pl-8">
                    Architected for deterministic performance under extreme concurrency loads.
                  </p>
                </motion.div>
              </div>

              {/* Right: principles */}
              <div className="lg:col-span-7 flex flex-col divide-y divide-border/10">
                {principles.map((p, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.08 }}
                    className="py-16 flex gap-12 group cursor-default"
                  >
                    <span className="text-[10px] font-['Anonymous_Pro'] font-black text-primary uppercase tracking-widest shrink-0 pt-2">{p.n}</span>
                    <div>
                      <h3 className="text-3xl font-black text-black tracking-tighter mb-6 uppercase group-hover:text-primary transition-colors font-display">{p.title}</h3>
                      <p className="text-[15px] text-[#4B5563] font-display group-hover:text-black font-medium leading-relaxed transition-colors uppercase tracking-tight">{p.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ─── METRICS DARK BAND ───────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-black/[0.01] border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-20">
            {[
              { value: "99.99%", label: "UPTIME_SLA", sub: "guaranteed in contract" },
              { value: "< 5ms", label: "LATENCY_TARGET", sub: "measured in production" },
              { value: "10M+", label: "API_CALLS / DAY", sub: "across client systems" },
              { value: "0", label: "DOWNTIME_DEPLOYS", sub: "blue-green by default" },
            ].map((m, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col border-l border-black/[0.06] pl-10"
              >
                <span className="text-6xl font-black text-black tracking-tighter mb-4">{m.value}</span>
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.3em] font-['Anonymous_Pro'] leading-tight mb-2">{m.label}</span>
                <span className="text-[9px] text-[#4B5563] font-['Anonymous_Pro'] font-bold uppercase tracking-widest">{m.sub}</span>
              </motion.div>
            ))}
          </div>
        </section>
        {/* ─── PROCESS STRIP ───────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-b border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12 mb-16">
              <div className="max-w-3xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block font-['Anonymous_Pro']">ENGAGEMENT_PROTOCOL</span>
                <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.10em] leading-[1.1] uppercase">Brief to Production <br /><span className="text-black/20">in 4 Phases.</span></h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border border-black/[0.06] rounded-2xl overflow-hidden bg-black/[0.01]">
              {[
                { n: "01", name: "Discovery", desc: "System audit, architecture review, and requirements mapping. We reverse-engineer your constraints." },
                { n: "02", name: "Blueprint", desc: "ERDs, API contracts, infrastructure diagrams, and ADRs— documented before a single service is written." },
                { n: "03", name: "Build", desc: "Iterative delivery with weekly deployments. Every PR reviewed against performance benchmarks." },
                { n: "04", name: "Handover", desc: "Runbooks, alert playbooks, load test reports, and diagrams. Full ownership transfer to client engineering." },
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ delay: i * 0.07 }}
                  className={`p-12 flex flex-col gap-8 hover:bg-black/[0.01] group transition-all duration-300 border-r border-black/10 last:border-r-0`}
                >
                  <span className="text-[10px] font-['Anonymous_Pro'] font-black text-primary uppercase tracking-[0.3em]">PHASE_{phase.n}</span>
                  <h3 className="text-2xl font-black text-black group-hover:text-primary tracking-tighter uppercase transition-colors font-display">{phase.name}</h3>
                  <p className="text-base text-[#4B5563] group-hover:text-black font-medium leading-relaxed transition-colors uppercase tracking-tight">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* ─── ECOSYSTEM SYNC ─────────────────────────────────────────────────────── */}
        <section className="bg-white border-t border-black/[0.06]">
          <AstraEcosystemSync tools={relatedTools} />
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-white border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-16 py-16 px-12 border border-black/[0.06] rounded-2xl bg-black/[0.01] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
              <div className="relative z-10 max-w-2xl">
                <span className="text-[10px] font-black font-['Anonymous_Pro'] text-primary uppercase tracking-[0.4em] mb-6 block font-['Anonymous_Pro']">SYSTEM_INITIATION</span>
                <h2 className="text-3xl md:text-5xl font-heading font-normal text-black tracking-[0.10em] leading-[1.1] uppercase mb-10">
                  Solidify your<br /><span className="text-black/20">backbone.</span>
                </h2>
                <p className="text-[#4B5563] font-medium text-lg uppercase tracking-tight max-w-md border-l border-black/[0.06] pl-8">
                  Mission-critical backend engineering for products that refuse to fail.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start md:items-center gap-8 shrink-0 relative z-10">
                <ShinyButton
                  className="h-12 px-8 rounded-full font-display font-bold text-[13px] uppercase tracking-[0.12em]"
                  onClick={() => { }}
                >
                  <span className="flex items-center gap-3 pt-[2px]">
                    INITIALIZE_STACK <ArrowRight className="w-4 h-4" />
                  </span>
                </ShinyButton>
                <Link to="/services" className="text-[10px] font-black text-[#4B5563] hover:text-black transition-colors uppercase tracking-[0.3em] font-['Anonymous_Pro'] border-b border-black/[0.06] pb-1">
                  VIEW_ALL_DISCIPLINES
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-12 text-[9px] font-['Anonymous_Pro'] text-black/20 uppercase tracking-[0.25em] font-black">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> SOC2_READY</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> HIPAA_COMPATIBLE</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> MULTI-CLOUD_NATIVE</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary/50" /> IAC_DELIVERED</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default BackendEngineering;
