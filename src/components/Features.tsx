import { motion } from "framer-motion";
import { Brain, Zap, Shield, Database, GitBranch, Layers } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Architecture Search",
    description: "Automatically discover optimal model architectures with our advanced AutoML engine.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Inference",
    description: "Deploy models with sub-50ms latency powered by optimized edge computing infrastructure.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II compliant with end-to-end encryption and private cloud options.",
  },
  {
    icon: Database,
    title: "Intelligent Data Pipeline",
    description: "Automated data versioning, validation, and preprocessing at any scale.",
  },
  {
    icon: GitBranch,
    title: "Model Version Control",
    description: "Track, compare, and rollback model versions with Git-like workflow integration.",
  },
  {
    icon: Layers,
    title: "Multi-Cloud Deploy",
    description: "Deploy seamlessly across AWS, GCP, Azure, or your own private infrastructure.",
  },
];

export const Features = () => {
  return (
    <section className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Built for <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to accelerate your AI development lifecycle from prototype to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="glass-card p-8 rounded-2xl h-full smooth-transition hover:shadow-glow">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 glow-pulse">
                    <Icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:gradient-text smooth-transition">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
