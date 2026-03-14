import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import { BrainCircuit, Zap, ShieldCheck, Sparkles, Target, BarChart3, Database, Radio } from "lucide-react";

const marqueeData = [
  "How can AI truly deliver measurable ROI?",
  "What is the best architecture for autonomous agents?",
  "How do we migrate legacy tech without downtime?",
  "What risks should we prepare for in AI deployment?",
  "How do we ensure data privacy in public models?",
  "How can we scale our SaaS to 10M+ users?",
  "What business workflows are prime for automation?",
  "How do we protect our intellectual property in AI?",
  "Is our current tech stack future-proof?",
  "How do we build a truly autonomous DevOps flow?",
  "What is the most secure way to host private LLMs?",
  "How do we transition from manual to agentic operations?",
];

const features = [
  {
    description:
      "No jargon, no overcomplication — just high-velocity engineering and clear steps to automate your growth.",
    icon: Sparkles,
    title: "We make things simple",
  },
  {
    description:
      "Every case study we deliver is a testament to real-world performance, increased margins, and technical precision.",
    icon: Target,
    title: "We focus on real results",
  },
  {
    description:
      "With years of hands-on experience in frontier tech, we bring proven strategies and rigorous solutions to the table.",
    icon: BrainCircuit,
    title: "We know what works",
  },
  {
    description:
      "From strategic inception to global distribution, we provide ongoing architectural support, not just a one-time handoff.",
    icon: Zap,
    title: "With you all the way",
  },
];

export function CaseStudyFeatures() {
  const m1 = marqueeData.slice(0, marqueeData.length / 3);
  const m2 = marqueeData.slice(
    marqueeData.length / 3,
    (marqueeData.length / 3) * 2,
  );
  const m3 = marqueeData.slice((marqueeData.length / 3) * 2);

  return (
    <section className="relative bg-white pt-20 pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-6 px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="technical-label !text-slate-700">Strategic Clarity</span>
          </div>
          <h2 className="max-w-4xl font-black text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-slate-900 leading-[1.1]">
            Removing the roadblocks <br className="hidden md:block" /> to your success.
          </h2>
          <p className="max-w-2xl text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
            It's easy to get lost in a sea of advice and endless "must-dos." We filter out the noise, focus on what truly
            matters, and give you the architectural clarity that lets your business dominate the market.
          </p>
          
          <div className="relative mx-auto max-w-5xl overflow-hidden py-10">
            <div className="absolute left-0 z-50 h-full w-40 bg-gradient-to-r from-white pointer-events-none" />
            <div className="absolute right-0 z-50 h-full w-40 bg-gradient-to-l from-white pointer-events-none" />

            <div className="-mx-6 flex flex-col gap-4">
              <Marquee className="[--duration:50s] [--gap:0.75rem]" repeat={4}>
                {m1.map((q) => (
                  <Badge
                    key={q}
                    className="rounded-xl border-slate-200 bg-slate-50 px-6 py-3 text-slate-600 font-bold tracking-tight whitespace-nowrap shadow-sm hover:border-primary/30 transition-colors"
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee
                className="[--duration:60s] [--gap:0.75rem]"
                repeat={4}
                reverse
              >
                {m2.map((q) => (
                  <Badge
                    key={q}
                    className="rounded-xl border-slate-200 bg-slate-50 px-6 py-3 text-slate-600 font-bold tracking-tight whitespace-nowrap shadow-sm hover:border-primary/30 transition-colors"
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>

              <Marquee className="[--duration:45s] [--gap:0.75rem]" repeat={4}>
                {m3.map((q) => (
                  <Badge
                    key={q}
                    className="rounded-xl border-slate-200 bg-slate-50 px-6 py-3 text-slate-600 font-bold tracking-tight whitespace-nowrap shadow-sm hover:border-primary/30 transition-colors"
                    variant="outline"
                  >
                    {q}
                  </Badge>
                ))}
              </Marquee>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 divide-y divide-dashed divide-slate-200 border-slate-200 border-t border-dashed sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                className="flex flex-col gap-5 px-8 py-12 lg:px-10 lg:py-16 hover:bg-slate-50/50 transition-colors group"
                key={feature.title}
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col gap-3 pt-6 lg:pt-12">
                  <h3 className="font-bold text-2xl tracking-tighter text-slate-900 sm:text-3xl leading-tight">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-slate-500 font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
