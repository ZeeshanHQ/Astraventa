import { motion } from "framer-motion";

const logos = [
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Scikit-Learn", color: "#F7931E" },
  { name: "Hugging Face", color: "#FFD21E" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "LangChain", color: "#1C3C3C" },
];

export const AIStack = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Your <span className="gradient-text">Entire AI Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seamlessly integrate with every tool and framework in your AI workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-12 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className="flex items-center justify-center p-6 rounded-xl bg-card/30 border border-border/50 smooth-transition hover:shadow-glow hover:border-primary/50 group"
                >
                  <div className="text-center">
                    <div 
                      className="w-12 h-12 rounded-lg mb-3 mx-auto glow-pulse"
                      style={{ 
                        background: `linear-gradient(135deg, ${logo.color}40, ${logo.color}20)`,
                        boxShadow: `0 0 20px ${logo.color}40`
                      }}
                    />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground smooth-transition">
                      {logo.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground">
                + hundreds more integrations available through our API
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
