'use client';
import React from 'react';
import { WavePath } from "@/components/ui/wave-path";
import { cn } from '@/lib/utils';
import { ShieldCheck, Globe, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandHighlightCard = ({ 
  title, 
  description, 
  icon: Icon, 
  image,
  slug
}: { 
  title: string; 
  description: string; 
  icon: any; 
  image: string;
  slug: string;
}) => (
    <Link to={`/why-astraventa/${slug}`} className="block h-full group">
    <div className="relative overflow-hidden pt-8 pb-6 h-full transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-black/5 group-hover:bg-primary/40 transition-colors duration-300" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex items-center justify-between">
          <div className="text-black/40 group-hover:text-primary transition-colors duration-300">
            <Icon size={22} strokeWidth={1.5} />
          </div>
          <ArrowUpRight className="text-black/15 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" size={16} />
        </div>
        <h3 className="mb-3 text-[14px] font-display font-normal text-black uppercase tracking-[0.12em] group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="mb-6 text-[13px] text-[#4B5563] font-body font-normal leading-[1.7]">{description}</p>
        <div className="mt-auto overflow-hidden rounded-xl opacity-50 group-hover:opacity-90 transition-all duration-700">
          <img 
            src={`${image}?auto=format&fit=crop&w=600&q=80`} 
            alt={title} 
            className="h-32 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      </div>
    </div>
  </Link>
);


export function BrandHighlights() {
	return (
  <section className="relative w-full overflow-hidden bg-white py-20">
  {/* Background Glow */}
			<div
				aria-hidden="true"
				className={cn(
					'pointer-events-none absolute -top-10 left-1/2 -z-10 size-full -translate-x-1/2 rounded-full',
					'bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03),transparent_50%)]',
					'blur-[100px]',
				)}
			/>

			<div className="container mx-auto px-4">
  {/* WavePath and Intro */}
   <div className="mb-10 flex flex-col items-center">
  <WavePath className="mb-10 text-[hsl(var(--primary))] opacity-30 h-0.5 w-[60vw]" />
  <div className="flex w-full max-w-4xl flex-col items-center text-center">
  <h2 className="font-heading font-normal text-black uppercase leading-[1.15] tracking-[0.25em] text-3xl md:text-4xl mb-6">
  Engineering Excellence <br /><span className="text-[hsl(var(--primary))]">Without Compromise</span>
  </h2>
  <p className="max-w-[560px] text-[15px] text-[#4B5563] font-body font-normal leading-[1.7]">
  We don't just write code; we architect experiences. Our philosophy is rooted in building systems that are as dependable as they are innovative.
  </p>
  </div>
  </div>

  {/* Highlight Grid */}
  <div className="grid gap-8 md:grid-cols-3">
      <BrandHighlightCard 
        title="Built to Last"
        description="We build high-speed systems that grow naturally with your business over time, ensuring scalability and performance."
        icon={ShieldCheck}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
        slug="built-to-last"
      />
      <BrandHighlightCard 
        title="Worldwide Ready"
        description="Making a difference for companies and end-users across the global market with localized and optimized solutions."
        icon={Globe}
        image="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
        slug="worldwide-ready"
      />
      <BrandHighlightCard 
        title="User Focused"
        description="Every single piece of code is written with your customers' needs in mind, prioritizing intuitive UX and accessibility."
        icon={Users}
        image="https://images.unsplash.com/photo-1551434678-e076c223a692"
        slug="user-focused"
      />
  </div>
			</div>
		</section>
	);
}
