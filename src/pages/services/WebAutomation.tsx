import { motion } from "framer-motion";
import { ArrowLeft, Bot, Settings, Zap, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Settings,
    title: "Workflow Automation",
    description: "Automate complex business processes with intelligent workflows",
  },
  {
    icon: Zap,
    title: "API Integrations",
    description: "Connect with 500+ popular tools and platforms",
  },
  {
    icon: Shield,
    title: "Secure Automation",
    description: "Enterprise-grade security for all automated processes",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Collaborate seamlessly with your team on automation projects",
  },
];

export const WebAutomation = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass-card border-b border-border/50"
      >
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold">Web Automation</h1>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Smart <span className="gradient-text">Web Automation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Automate repetitive tasks, streamline workflows, and boost productivity 
              with intelligent web automation solutions that adapt to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Get Started
                <Zap className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold mb-4">Automation Capabilities</h3>
            <p className="text-xl text-muted-foreground">Powerful tools for every business need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Automate Your Workflows?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how web automation can transform your business processes.
            </p>
            <Button size="lg" className="group">
              Start Your Project
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
