import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

// Interface for component props remains the same for easy integration.
export interface AnimatedFeatureSpotlightProps extends React.HTMLAttributes<HTMLElement> {
 preheaderIcon?: React.ReactNode;
 preheaderText: string;
 heading: React.ReactNode;
 description: string;
 buttonText: string;
 buttonProps?: ButtonProps;
 imageUrl: string;
 imageAlt?: string;
}

const AnimatedFeatureSpotlight = React.forwardRef<HTMLElement, AnimatedFeatureSpotlightProps>(
 (
 {
 className,
 preheaderIcon,
 preheaderText,
 heading,
 description,
 buttonText,
 buttonProps,
 imageUrl,
 imageAlt = 'Feature illustration',
 ...props
 },
 ref
 ) => {
 return (
 <section
 ref={ref}
 className={cn(
 'w-full max-w-6xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 overflow-hidden shadow-sm relative', // Adjusted for Bright Theme
 className
 )}
 aria-labelledby="feature-spotlight-heading"
 {...props}
 >
 <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]" />
 <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[60px]" />
 
 <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
 {/* Left Column: Animated Text Content */}
 <div className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start">
 <div
 className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm text-sm font-medium text-slate-500 animate-in fade-in slide-in-from-top-4 duration-700"
 >
 {preheaderIcon}
 <span className="text-[11px] font-black uppercase tracking-[0.15em] font-mono">{preheaderText}</span>
 </div>
 <h2
 id="feature-spotlight-heading"
 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-heading animate-in fade-in slide-in-from-top-4 duration-700 delay-150"
 >
 {heading}
 </h2>
 <p className="text-lg text-slate-500 font-medium leading-relaxed animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
 {description}
 </p>
 <div className="animate-in fade-in slide-in-from-top-4 duration-700 delay-500 pt-4">
 <Button size="lg" className="h-14 px-8 bg-[#2910E5] text-white hover:bg-[#2910E5]/90 rounded-full font-bold shadow-lg transition-all " {...buttonProps}>
 {buttonText}
 </Button>
 </div>
 </div>

 {/* Right Column: Animated Visual */}
 <div className="relative w-full min-h-[300px] md:min-h-[400px] flex items-center justify-center animate-in fade-in zoom-in-95 duration-700 delay-200 perspective-1000">
 <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75 transform -translate-y-4" />
 <img
 src={imageUrl}
 alt={imageAlt}
 className="w-full max-w-md object-contain relative z-10 rounded-2xl shadow-2xl transition-transform duration-700 hover:rotate-1 "
 />
 </div>
 </div>
 </section>
 );
 }
);
AnimatedFeatureSpotlight.displayName = 'AnimatedFeatureSpotlight';

export { AnimatedFeatureSpotlight };
