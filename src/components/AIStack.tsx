import { motion } from "framer-motion";
import { Bot, Brain, Zap, Square, Search, Cloud, Circle, MessageSquare, BarChart3, CreditCard, ShoppingCart } from "lucide-react";

const logos = [
  { name: "OpenAI", color: "#10A37F", icon: Bot },
  { name: "Anthropic", color: "#D97706", icon: Brain },
  { name: "Zapier", color: "#FF4A00", icon: Zap },
  { name: "Microsoft", color: "#0078D4", icon: Square },
  { name: "Google AI", color: "#4285F4", icon: Search },
  { name: "Salesforce", color: "#00A1E0", icon: Cloud },
  { name: "AWS", color: "#FF9900", icon: Cloud },
  { name: "Azure", color: "#0078D4", icon: Circle },
  { name: "Slack", color: "#4A154B", icon: MessageSquare },
  { name: "HubSpot", color: "#FF7A59", icon: BarChart3 },
  { name: "Stripe", color: "#635BFF", icon: CreditCard },
  { name: "Shopify", color: "#96BF48", icon: ShoppingCart },
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
            Seamless <span className="gradient-text">Integrations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with your favorite AI tools and automation platforms.
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
                      className="w-12 h-12 rounded-lg mb-3 mx-auto glow-pulse flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${logo.color}40, ${logo.color}20)`,
                        boxShadow: `0 0 20px ${logo.color}40`
                      }}
                    >
                      <logo.icon className="w-6 h-6" style={{ color: logo.color }} />
                    </div>
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
                + hundreds more AI tools and automation platforms available
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
