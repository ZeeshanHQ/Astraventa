import { motion } from "framer-motion";

const companies = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  }
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
            Trusted by Leading Companies
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            We've helped industry leaders transform their operations with AI automation
          </p>
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
                className="flex-shrink-0 flex items-center justify-center p-4 bg-black/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                />
              </div>
            ))}
            
            {/* Second set of logos for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center p-4 bg-black/10 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 filter brightness-0 invert"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
