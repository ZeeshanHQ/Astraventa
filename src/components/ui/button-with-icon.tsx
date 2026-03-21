import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ButtonWithIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const ButtonWithIcon = ({ children, className, ...props }: ButtonWithIconProps) => {
  return (
    <Button 
      className={`relative text-[11px] uppercase tracking-[0.1em] font-display font-medium rounded-full h-9 p-1 ps-5 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-5 w-fit overflow-hidden cursor-pointer ${className}`}
      {...props}
    >
      <span className="relative z-10 transition-all duration-500">
        {children}
      </span>
      <div className="absolute right-1 w-7 h-7 bg-white text-black rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-32px)] group-hover:rotate-45">
        <ArrowUpRight size={14} />
      </div>
    </Button>
  );
};

export { ButtonWithIcon };
