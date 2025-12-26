import { motion, useReducedMotion } from "framer-motion";

// Medium-level AI/cyber/SaaS brands with reliable logos
// Use Simple Icons CDN for reliable, lightweight SVG logos
const companies = [
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/ffffff" },
  { name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp/ffffff" },
  { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/ffffff" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion/ffffff" },
  { name: "DigitalOcean", logo: "https://cdn.simpleicons.org/digitalocean/ffffff" },
  { name: "Algolia", logo: "https://cdn.simpleicons.org/algolia/ffffff" },
  { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/ffffff" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/ffffff" },
  { name: "Snyk", logo: "https://cdn.simpleicons.org/snyk/ffffff" },
  { name: "HashiCorp", logo: "https://cdn.simpleicons.org/hashicorp/ffffff" }
];

export const TrustedCompanies = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="py-12 relative overflow-hidden bg-black/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Trusted by Global Industry Leaders
          </h2>
        </motion.div>

        {/* Moving Companies Logos */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={prefersReducedMotion ? undefined : { x: [0, -200 * companies.length] }}
            transition={prefersReducedMotion ? undefined : { x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" } }}
          >
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="w-[200px] flex-shrink-0 flex items-center justify-center px-4"
              >
                <div className="w-full h-24 glass-card-sm border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-2xl flex items-center justify-center group/logo hover:border-primary/20 transition-all duration-500">
                  <img
                    src={company.logo}
                    alt={company.name}
                    loading="lazy"
                    className="h-7 md:h-9 w-auto object-contain opacity-50 grayscale group-hover/logo:opacity-100 group-hover/logo:grayscale-0 group-hover/logo:scale-110 transition-all duration-500 pointer-events-none filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                  />
                </div>
              </div>
            ))}

            {/* Second set of logos for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="w-[200px] flex-shrink-0 flex items-center justify-center px-4"
              >
                <div className="w-full h-24 glass-card-sm border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-2xl flex items-center justify-center group/logo hover:border-primary/20 transition-all duration-500">
                  <img
                    src={company.logo}
                    alt={company.name}
                    loading="lazy"
                    className="h-7 md:h-9 w-auto object-contain opacity-50 grayscale group-hover/logo:opacity-100 group-hover/logo:grayscale-0 group-hover/logo:scale-110 transition-all duration-500 pointer-events-none filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

