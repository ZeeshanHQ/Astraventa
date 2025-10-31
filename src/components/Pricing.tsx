import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$999",
    period: "/month",
    description: "Perfect for small teams getting started with AI automation",
    features: [
      "Up to 5 AI chatbots",
      "Basic automation workflows",
      "Email support",
      "Standard integrations",
      "99.9% uptime SLA",
    ],
    cta: "Get Started",
    variant: "glass" as const,
  },
  {
    name: "Professional",
    price: "$2,999",
    period: "/month",
    description: "For growing businesses with advanced automation needs",
    features: [
      "Unlimited AI chatbots",
      "Advanced automation workflows",
      "Priority support",
      "Custom integrations",
      "99.95% uptime SLA",
      "Analytics dashboard",
    ],
    cta: "Contact Sales",
    variant: "hero" as const,
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large-scale automation",
    features: [
      "Custom AI development",
      "Dedicated account manager",
      "24/7 white-glove support",
      "Custom SLA guarantees",
      "99.99% uptime SLA",
      "On-premise deployment",
    ],
    cta: "Schedule Call",
    variant: "glass" as const,
  },
];

export const Pricing = () => {
  return (
    <section className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            AI Automation <span className="gradient-text">Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your automation needs. Scale as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`relative ${plan.featured ? 'md:scale-105' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-primary px-4 py-1 rounded-full text-xs font-semibold shadow-glow">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className={`glass-card p-8 rounded-2xl h-full smooth-transition ${
                plan.featured ? 'neon-border shadow-glow-lg' : 'hover:shadow-glow'
              }`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full mb-8"
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
