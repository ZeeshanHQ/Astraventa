import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ShinyButton } from "@/components/ui/shiny-button";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

function CTA() {
  const navigate = useNavigate();
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="w-full py-8 lg:py-16 overflow-hidden bg-background">
      <div className="container mx-auto relative px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row text-left bg-[#030303] border border-white/5 rounded-[2rem] p-6 lg:p-12 gap-8 items-center shadow-2xl relative min-h-[400px]">
          
          {/* Subtle minimal glow effect, lowered opacity so it doesn't look like a solid card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--primary))]/5 blur-[120px] rounded-full -mr-32 -mt-32 pointer-events-none" />
          
          <div className="flex flex-col gap-5 relative z-10 lg:w-[50%] pl-2 lg:pl-6">
            <div className="relative z-10 w-fit">
              <Badge className="bg-white/5 text-[10px] font-display font-medium text-white/80 border-white/10 py-1 px-3 mb-1 uppercase tracking-[0.2em] backdrop-blur-md">Get started</Badge>
            </div>
            <h3 className="font-heading font-normal text-white uppercase leading-[1.15] tracking-[0.2em] text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] max-w-xl">
              The Future is<br />Autonomous. <br />
              <span className="text-[hsl(var(--primary))] font-medium">Are You?</span>
            </h3>
            <p className="text-[14px] text-white/60 font-body font-normal leading-[1.6] max-w-md">
              Turn your complex operational bottlenecks into seamless event-driven pipelines today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 pt-2 lg:pt-4">
              <Button className="h-12 px-6 gap-3 border-white/10 text-white/80 bg-white/5 hover:bg-white/10 hover:text-white rounded-full font-display font-semibold text-[12px] uppercase tracking-[0.15em] transition-all shadow-none" variant="outline" asChild>
                <Link to="/contact">Jump on a call <PhoneCall className="w-4 h-4 text-white/60" /></Link>
               </Button>
              <ShinyButton 
                className="h-12 px-8 rounded-full font-display font-semibold text-[12px] uppercase tracking-[0.15em]"
                onClick={() => navigate('/contact')}
              >
                <span className="relative z-10 flex items-center gap-3 pt-[2px]">Contact Us <MoveRight className="w-4 h-4" /></span>
              </ShinyButton>
            </div>
          </div>
          
          <div className="relative z-0 h-[300px] lg:h-[400px] w-full lg:w-[50%] flex justify-end items-center pointer-events-auto shrink-0">
            {/* The outer div bounds the interactive area and clips overflows */}
            <div className="relative w-full max-w-[450px] aspect-square lg:aspect-auto lg:h-[100%] overflow-hidden rounded-[2rem] flex items-center justify-center lg:-mr-4">
                {/* 
                  Make the Spline container larger but scale it down to visually shrink the robot.
                  This pushes the Spline watermark toward the very far bottom-right edge.
                */}
                <div className="absolute w-[180%] h-[180%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.60] origin-center">
                  <InteractiveRobotSpline
                    scene={ROBOT_SCENE_URL}
                    className="w-full h-full object-contain" 
                  />
                  {/* Failsafe patch to impeccably cover the Spline watermark with the exact matching card background */}
                  <div className="absolute bottom-4 right-4 w-[160px] h-[60px] bg-[#030303] z-[99] pointer-events-none rounded-br-[2rem]" />
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export { CTA };
