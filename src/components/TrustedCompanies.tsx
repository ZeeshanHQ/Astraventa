import { motion } from "framer-motion";

// Medium-level AI/cyber/SaaS brands with reliable logos
const companies = [
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Shopify_logo_2018.svg" },
  { name: "Mailchimp", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Mailchimp_Logo.svg" },
  { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/HubSpot_Logo.svg" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
  { name: "DigitalOcean", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg" },
  { name: "Algolia", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Algolia-logo.svg" },
  { name: "Supabase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Supabase_logo.svg" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/press/logo/vercel/v-logo-dark.svg" },
  { name: "Snyk", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Snyk_logo.svg" },
  { name: "CrowdStrike", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/CrowdStrike_logo.svg" }
];

export const TrustedCompanies = () => {
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
            animate={{
              x: [0, -100 * companies.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
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
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
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
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

