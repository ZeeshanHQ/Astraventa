import { motion } from "framer-motion";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const successMetrics = [
  {
    icon: TrendingUp,
    value: "$2.5B+",
    label: "Revenue Generated",
    description: "Driving measurable business outcomes",
  },
  {
    icon: Users,
    value: "500+",
    label: "Enterprise Clients",
    description: "Fortune 500 companies trust us",
  },
  {
    icon: Globe,
    value: "45",
    label: "Countries",
    description: "Global AI infrastructure",
  },
  {
    icon: Award,
    value: "98%",
    label: "Client Retention",
    description: "Industry-leading satisfaction",
  },
];

const testimonials = [
  {
    quote: "This platform transformed our ML operations. We reduced deployment time from weeks to hours.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "Fortune 100 Tech Company",
  },
  {
    quote: "The most robust AI infrastructure we've ever used. Scaled seamlessly from prototype to 10M users.",
    author: "Marcus Williams",
    role: "Chief Data Officer",
    company: "Global Financial Services",
  },
  {
    quote: "Game-changing performance. Our AI models now run 10x faster with 40% cost reduction.",
    author: "Emily Rodriguez",
    role: "Head of AI Research",
    company: "Leading Healthcare Provider",
  },
];

export const ClientSuccess = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering enterprises worldwide to unlock the full potential of AI
          </p>
        </motion.div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-24">
          {successMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="glass-card p-6 rounded-2xl text-center smooth-transition hover:shadow-glow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 glow-pulse">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="glass-card p-8 rounded-2xl h-full smooth-transition hover:shadow-glow">
                <div className="mb-6">
                  <svg className="w-10 h-10 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-foreground/90 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
