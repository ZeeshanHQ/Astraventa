import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
 Bot, 
 Code2, 
 ShieldCheck, 
 ArrowUpRight,
 ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { HoverSlider, HoverSliderImage, HoverSliderImageWrap, TextStaggerHover } from "@/components/ui/animated-slideshow";

const SLIDES = [
 {
 id: "frontend",
 title: "Frontend Dev",
 imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
 },
 {
 id: "backend",
 title: "Backend Dev",
 imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1974&auto=format&fit=crop",
 },
 {
 id: "design",
 title: "UI UX Design",
 imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
 },
 {
 id: "ai",
 title: "AI Engineering",
 imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
 },
 {
 id: "app",
 title: "App Development",
 imageUrl: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
 },
];

export const ProfessionalServices = () => {
 return (
 <section id="services" className="py-12 md:py-16 bg-white relative overflow-hidden">
 <div className="max-w-[1400px] mx-auto px-6 relative z-10">
 
 {/* Section Header */}
 <div className="mb-10 text-center">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-[#2910E5]" />
 <span className="technical-label !text-slate-700">Capabilities</span>
 </motion.div>
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 >
 Our Engineering <br />
 <span className="text-[#2910E5]">Disciplines.</span>
 </motion.h2>
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 className="text-xl text-slate-500 font-medium max-w-2xl mx-auto font-sans leading-relaxed"
 >
 Strategic engineering disciplines designed to bridge the gap between complex technology and business growth.
 </motion.p>
 </div>

  {/* Interactive Hover Slider */}
  <HoverSlider className="relative min-h-[500px] w-full py-12">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Image Side (Left) */}
  <div className="relative h-[400px] md:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 order-2 lg:order-1">
  <HoverSliderImageWrap className="size-full">
  {SLIDES.map((slide, index) => (
  <HoverSliderImage
  key={slide.id}
  index={index}
  imageUrl={slide.imageUrl}
  src={slide.imageUrl}
  alt={slide.title}
  className="size-full object-cover"
  loading="eager"
  decoding="async"
  />
  ))}
  </HoverSliderImageWrap>
  
  {/* Overlay Gradient for Text Contrast */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
  </div>

  {/* Text Side (Right) */}
  <div className="flex flex-col space-y-6 md:space-y-8 order-1 lg:order-2">
  {SLIDES.map((slide, index) => (
  <div key={slide.id} className="relative group">
  <TextStaggerHover
  index={index}
  className="cursor-pointer text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0F172A] transition-all hover:pl-4"
  text={slide.title}
  />
  <div className="absolute left-0 bottom-0 w-0 h-1 bg-[#2910E5] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
  </div>
  ))}
  </div>
  </div>
  </HoverSlider>

 {/* Explore All CTA */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.4 }}
 className="mt-20 flex justify-center"
 >
 <Link to="/services">
 <Button size="lg" className="btn-primary h-16 px-10 flex items-center gap-4 group">
 Explore Full Capabilities 
 <ArrowRight className="w-5 h-5 transition-transform " />
 </Button>
 </Link>
 </motion.div>
 </div>
 </section>
 );
};
