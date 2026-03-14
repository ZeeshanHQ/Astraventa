import GalleryHoverCarousel from "@/components/ui/gallery-hover-carousel";

const successCases = [
 {
 id: "item-1",
 title: "Advanced Drone Platform",
 summary: "High-performance engineering for autonomous drone delivery systems and real-time navigation software.",
 url: "#",
 image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop",
 },
 {
 id: "item-2",
 title: "Restaurant AI Chatbot",
 summary: "Intelligent customer engagement platform reducing operational costs by 85% through automated ordering.",
 url: "https://astraventa-restaurant-ai.vercel.app/",
 image: "/astraventa-resturant-hero.png",
 },
 {
 id: "item-3",
 title: "E-commerce AI Agent",
 summary: "Large scale AI integration handling over 10k daily queries with personalized product recommendations.",
 url: "#",
 image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
 },
 {
 id: "item-4",
 title: "Blockchain Land Registry",
 summary: "Secure and immutable land management system built on blockchain technology for 100% transparency.",
 url: "https://github.com/Astraventa/BlockChain-Based-Land-Management-System",
 image: "/landimage.png",
 },
 {
 id: "item-5",
 title: "Smart Retail Analytics",
 summary: "Data-driven insights for inventory management reducing waste by 30% using predictive modeling.",
 url: "#",
 image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
 },
 {
 id: "item-6",
 title: "HealthCare Plus Portal",
 summary: "Mission-critical healthcare infrastructure ensuring 99.9% uptime for patient diagnostics and records.",
 url: "#",
 image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
 }
];

export const PortfolioShowcase = () => {
 return (
 <section id="portfolio" className="bg-transparent section-transition">
 <GalleryHoverCarousel 
 heading="Proven Impact. Real Velocity." 
 items={successCases}
 />
 </section>
 );
};
