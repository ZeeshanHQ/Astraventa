import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const codeSnippet = `import nexusai as nai

# Initialize your AI model
model = nai.NeuralNet(
    layers=[512, 256, 128],
    activation='relu',
    optimizer='adam'
)

# Train with one line
model.fit(X_train, y_train, epochs=50)

# Deploy to production instantly
nai.deploy(model, endpoint='production')

# ✨ Model deployed at: api.nexusai.com/v1/predict
`;

export const CodeEditor = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Developer-First <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful APIs and SDKs designed for production-scale ML deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden shadow-depth neon-border">
            {/* Editor Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-border/50 bg-card/30">
              <Terminal className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">train_model.py</span>
              <div className="ml-auto flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-secondary/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
              </div>
            </div>

            {/* Code Content */}
            <div className="p-8 bg-card/20 font-mono text-sm leading-relaxed">
              <pre className="text-foreground/90">
                <code>{codeSnippet}</code>
              </pre>
            </div>

            {/* Footer Status Bar */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-border/50 bg-card/30 text-xs">
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Connected to NexusAI Cloud
                </span>
              </div>
              <span className="text-muted-foreground">Python 3.11.4 • UTF-8</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
