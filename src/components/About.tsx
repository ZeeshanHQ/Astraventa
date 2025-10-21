import { motion } from "framer-motion";
import { Brain, Target, Zap, Users } from "lucide-react";

const visionPoints = [
  {
    icon: Brain,
    title: "Intelligent Automation",
    description: "We believe AI should enhance human capabilities, not replace them. Our solutions amplify your team's potential.",
  },
  {
    icon: Target,
    title: "Precision & Accuracy",
    description: "Every automation is designed with precision. We achieve 99.9% accuracy in our AI-driven processes.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time processing and instant responses. Your automation should be as fast as your business needs.",
  },
  {
    icon: Users,
    title: "Human-Centered",
    description: "Technology that serves people. We build AI that understands context, emotion, and human intent.",
  },
];

export const About = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We envision a future where intelligent automation seamlessly integrates with human creativity, 
            enabling businesses to achieve unprecedented efficiency while maintaining the human touch that makes them unique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
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
                  <h3 className="text-xl font-semibold mb-4 group-hover:gradient-text smooth-transition">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              Empowering the Future of Work
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Astraventa, we're not just building AI tools – we're crafting the future of intelligent automation. 
              Our mission is to democratize advanced AI capabilities, making them accessible to businesses of all sizes 
              while maintaining the highest standards of security, reliability, and human-centered design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
