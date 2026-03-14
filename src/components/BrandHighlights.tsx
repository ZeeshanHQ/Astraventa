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
  <Link to={`/why-astraventa/${slug}`} className="block h-full">
    <div className="glass-card aura-glow group relative overflow-hidden rounded-2xl p-6 h-full transition-all duration-300">
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-4 flex items-center justify-between">
          <div className="rounded-lg bg-primary/10 p-2 text-primary">
            <Icon size={24} />
          </div>
          <ArrowUpRight className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
        </div>
        <h3 className="mb-2 text-xl font-heading font-bold text-slate-900">{title}</h3>
        <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">{description}</p>
        <div className="mt-auto overflow-hidden rounded-xl">
          <img 
            src={`${image}?auto=format&fit=crop&w=600&q=80`} 
            alt={title} 
            className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  </Link>
);

export function BrandHighlights() {
	return (
		<section className="relative w-full overflow-hidden bg-white py-8 dark:bg-slate-950">
  {/* Background Glow */}
			<div
				aria-hidden="true"
				className={cn(
					'pointer-events-none absolute -top-10 left-1/2 -z-10 size-full -translate-x-1/2 rounded-full',
					'bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-from),transparent_50%)] from-primary/5',
					'blur-[100px]',
				)}
			/>

			<div className="container mx-auto px-4">
  {/* WavePath and Intro */}
  <div className="mb-6 flex flex-col items-center">
  <WavePath className="mb-8 text-primary opacity-50 h-px w-[60vw]" />
  <div className="flex w-full max-w-4xl flex-col items-center text-center">
  <h2>
  Engineering Excellence <span className="text-primary">Without Compromise</span>
  </h2>
  <p className="max-w-xl text-base text-slate-600 dark:text-slate-400">
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
