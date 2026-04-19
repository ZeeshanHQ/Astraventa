import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at NexusFlow",
    content: "Astraventa transformed our legacy infrastructure into a high-performance autonomous engine in under 30 days. Their engineering precision is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "Founder of Outbound.ai",
    content: "The agentic workflows built by Astraventa have automated 70% of our operations. It's not just code; it's high-level architectural intelligence.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Elena Rodriguez",
    role: "Director of Ops at GlobalSync",
    content: "Working with Astraventa felt like having a Tier-1 engineering team on demand. They build what doesn't break, and they do it at record speed.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-black/[0.01] border-y border-black/[0.04]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] mb-8">
            <Quote className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-display font-normal text-black/60 uppercase tracking-[0.2em]">Social_Verification</span>
        </div>
        <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.2em] text-[1.875rem] sm:text-[2.5rem] mb-16">
            Trusted by the architects <br />of the future.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-black/[0.06] shadow-sm flex flex-col items-start text-left group hover:shadow-xl transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-[15px] text-[#4B5563] font-normal leading-relaxed mb-8 flex-1 italic">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border border-black/[0.08]" />
                <div>
                  <div className="text-[13px] font-bold text-black uppercase tracking-wide">{t.name}</div>
                  <div className="text-[11px] text-black/40 font-display">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
