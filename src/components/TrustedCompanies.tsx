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
            Trusted by 500+ companies worldwide
          </h2>
        </motion.div>

        {/* Moving Companies Logos */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex items-center gap-12 whitespace-nowrap"
            animate={prefersReducedMotion ? undefined : { x: [0, -100 * companies.length] }}
            transition={prefersReducedMotion ? undefined : { x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}
          >
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center mx-8"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  loading="lazy"
                  className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            
            {/* Second set of logos for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center mx-8"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  loading="lazy"
                  className="h-8 md:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

