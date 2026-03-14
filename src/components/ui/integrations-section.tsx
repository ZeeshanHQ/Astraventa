import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const techStack = [
 // Row 1
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "Next.js" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", label: "Tailwind CSS" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL" },
 
 // Row 2
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", label: "AWS" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker" },
 { icon: "https://cdn.simpleicons.org/openai/000000", label: "OpenAI" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg", label: "Rust" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", label: "Go" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: "Figma" },
 { icon: "https://cdn.simpleicons.org/supabase/3ECF8E", label: "Supabase" },
 
 // Row 3
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", label: "Firebase" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", label: "Vue.js" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", label: "Angular" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", label: "Laravel" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", label: "GraphQL" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", label: "Redis" },
 { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", label: "Kubernetes" },
];

const MarqueeRow = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
 return (
 <div className="flex overflow-hidden py-2 mask-fade-edges">
 <motion.div
 animate={{
 x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
 }}
 transition={{
 duration: 25 + Math.random() * 10,
 repeat: Infinity,
 ease: "linear",
 }}
 className="flex gap-6 md:gap-8 whitespace-nowrap pl-6 md:pl-8"
 >
 {/* Render items twice for seamless loop */}
 {[...items, ...items].map(({ icon: url, label }, idx) => (
 <div
 key={idx}
 className="group relative w-16 h-16 p-3 bg-white shadow-sm border border-slate-100 transition-all duration-500 hover:border-primary/40 hover:shadow-xl cursor-default flex items-center justify-center overflow-hidden flex-shrink-0"
 title={label}
 style={{
 clipPath:
 "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)",
 }}
 >
 <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
 <img 
 src={url}
 alt={label}
 className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 relative z-10 p-1"
 />
 </div>
 ))}
 </motion.div>
 </div>
 );
};

export default function IntegrationsSection() {
 const row1 = techStack.slice(0, 8);
 const row2 = techStack.slice(8, 16);
 const row3 = techStack.slice(16, 24);

 return (
 <section className="max-w-7xl mx-auto my-10 px-6 grid lg:grid-cols-2 gap-16 items-center border border-slate-200 dark:border-slate-800 p-6 md:p-12 rounded-3xl bg-white/50 backdrop-blur-sm relative z-10 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
 {/* Left Side */}
 <div className="space-y-6">
 <div>
 <p className="technical-label !text-primary mb-4">
 Tech Ecosystem
 </p>
 <h2>
 Seamless Integration.<br />
 <span className="text-primary">Any Stack.</span>
 </h2>
 </div>
 
 <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md">
 Whether you are built on legacy infrastructure or the latest edge-ready frameworks, our agents adapt to your ecosystem perfectly.
 </p>

 <div className="flex flex-wrap gap-4 pt-4">
 <Button asChild className="btn-primary h-14 px-8 text-base group">
 <Link to="/get-in-touch" className="flex items-center">
 Start Integration
 </Link>
 </Button>
 <Button asChild variant="outline" className="btn-ghost h-14 px-8 text-base">
 <Link to="/docs">View Tech Docs &rarr;</Link>
 </Button>
 </div>
 </div>


 {/* Right Side - Marquee Animation */}
 <div className="flex flex-col gap-8 overflow-hidden py-4 h-full justify-center">
 <MarqueeRow items={row1} />
 <MarqueeRow items={row2} reverse />
 <MarqueeRow items={row3} />
 </div>

 <style>{`
 .mask-fade-edges {
 mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
 -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
 }
 `}</style>
 </section>
 );
}
