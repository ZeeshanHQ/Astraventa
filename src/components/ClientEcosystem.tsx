import { motion } from "framer-motion";
import { Zap, RefreshCw, Layers, ShieldCheck } from "lucide-react";

export const ClientEcosystem = () => {
 return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden section-transition">
      {/* Background Accents - Subtle Technical Haze */}
      <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-foreground/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-foreground/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border mb-6">
            <RefreshCw className="w-3 h-3 text-foreground animate-spin-slow" />
            <span className="text-[10px] font-black text-foreground uppercase tracking-[0.2em]">The Synergy Loop</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold text-foreground tracking-tighter leading-[1.1] mb-8 font-heading uppercase">
            A Complete Tech <br />
            <span className="text-muted-foreground">Ecosystem for You.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            By building our own tools, we create a feedback loop that makes our agency services faster, smarter, and more reliable for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Product Insights",
              desc: "We use data from our own SaaS products to understand what really works for users.",
              icon: Layers,
            },
            {
              title: "Rapid Execution",
              desc: "Our internal tools allow us to build complex projects in half the time.",
              icon: Zap,
            },
            {
              title: "Battle Tested",
              desc: "Every line of code we write for you has been tested in our own production environments.",
              icon: ShieldCheck,
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-black/50 border border-border hover:bg-black/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-foreground" />
              </div>
              <h4 className="text-xl font-black text-foreground mb-4 font-heading tracking-tight">{item.title}</h4>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
 );
};
