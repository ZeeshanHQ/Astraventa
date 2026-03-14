import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
 label?: string;
}

export function ButtonColorful({
 className,
 label = "Let's Build",
 ...props
}: ButtonColorfulProps) {
 return (
 <Button
 className={cn(
 "relative h-16 px-10 overflow-hidden rounded-2xl",
 "bg-slate-900 dark:bg-white",
 "transition-all duration-300",
 "group border-0 text-xl font-bold tracking-tight shadow-[0_20px_40px_rgba(41,16,229,0.2)]",
 className
 )}
 {...props}
 >
 {/* Gradient background effect - Astraventa Brand Colors */}
 <div
 className={cn(
 "absolute inset-0",
 "bg-gradient-to-r from-[#2910E5] via-[#4F46E5] to-[#818CF8]",
 "opacity-0 group-hover:opacity-100",
 "transition-opacity duration-500"
 )}
 />

 {/* Content */}
 <div className="relative flex items-center justify-center gap-2 z-10">
 <span className="text-white group-hover:text-white dark:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
 {label}
 </span>
 <ArrowUpRight className="w-6 h-6 text-white group-hover:text-white dark:text-slate-900 dark:group-hover:text-white transition-colors duration-300 .5 group-.5 transition-transform" />
 </div>

 {/* Glow effect on hover */}
 <div className="absolute inset-0 opacity-0 group-hover:opacity-40 bg-[#2910E5] blur-2xl transition-opacity duration-500 -z-10" />
 </Button>
 );
}
