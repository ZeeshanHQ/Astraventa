import { motion } from "framer-motion";

const companies = [
 { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/000000" },
 { name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp/000000" },
 { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/000000" },
 { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000" },
 { name: "DigitalOcean", logo: "https://cdn.simpleicons.org/digitalocean/000000" },
 { name: "Algolia", logo: "https://cdn.simpleicons.org/algolia/000000" },
 { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/000000" },
 { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000" },
 { name: "Snyk", logo: "https://cdn.simpleicons.org/snyk/000000" },
 { name: "HashiCorp", logo: "https://cdn.simpleicons.org/hashicorp/000000" }
];

export const TrustedCompanies = () => {
  return (
    <section className="py-20 bg-white border-y border-black/[0.04]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] mb-6">
                <span className="text-[10px] font-display font-normal text-black/60 uppercase tracking-[0.2em]">Technology_Stack</span>
            </div>
            <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.2em] text-[1.25rem] sm:text-[1.5rem] text-center max-w-2xl">
                Built on enterprise-grade infrastructure trusted by global leaders.
            </h2>
        </div>

        <div className="relative group overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden py-4 gap-12 sm:gap-20">
                {[0, 1].map((copy) => (
                    <div 
                        key={copy}
                        aria-hidden={copy === 1}
                        className="flex shrink-0 items-center gap-12 sm:gap-20 animate-marquee group-hover:[animation-play-state:paused]"
                    >
                        {companies.map((company, index) => (
                            <div key={index} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="h-6 sm:h-8 w-auto object-contain"
                                />
                                <span className="font-display text-[12px] font-bold text-black tracking-tight">{company.name}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};


