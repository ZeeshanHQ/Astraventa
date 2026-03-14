import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <div className="w-full py-12 lg:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 backdrop-blur-md border border-slate-200 rounded-[2.5rem] p-8 lg:p-24 gap-12 items-center shadow-[0_40px_100px_rgba(41,16,229,0.08)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full -ml-32 -mb-32" />
          
          <div className="relative z-10">
            <Badge className="bg-primary/10 text-primary border-primary/20 technical-label py-1.5 px-4 mb-2">Get started</Badge>
          </div>
          <div className="flex flex-col gap-6 relative z-10">
            <h3 className="text-4xl md:text-7xl tracking-tighter max-w-3xl font-bold text-slate-900 leading-[1.1]">
              The Future is Autonomous. <br />
              <span className="text-primary">Are You?</span>
            </h3>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-500 max-w-2xl mx-auto font-medium">
              Turn your complex operational bottlenecks into seamless event-driven pipelines today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Button className="h-16 px-8 gap-4 border-slate-200 text-slate-600 bg-white hover:bg-slate-50 hover:border-slate-300 hover:text-[#2910E5] rounded-2xl font-semibold text-lg transition-colors shadow-sm" variant="outline" asChild>
              <Link to="/contact">Jump on a call <PhoneCall className="w-5 h-5" /></Link>
            </Button>
            <Button className="relative h-16 px-10 gap-4 bg-[#2910E5] text-white rounded-2xl font-bold text-lg overflow-hidden group shadow-[0_15px_30px_rgba(41,16,229,0.25)] border border-transparent hover:border-white/20 transition-colors" asChild>
              <Link to="/contact">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[150%] skew-x-[-15deg] group-hover:translate-x-[150%] transition-transform duration-1000" />
                <span className="relative z-10 flex items-center gap-4">Contact Us <MoveRight className="w-5 h-5" /></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
