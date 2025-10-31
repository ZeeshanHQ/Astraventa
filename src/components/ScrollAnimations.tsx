import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ScrollAnimations = () => {
  useEffect(() => {
    // Cinematic wrap transition: next section pushes over previous (pinned)
    const containers = document.querySelectorAll('main > section');
    containers.forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top+=60",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
        },
      });

      tl.fromTo(
        section,
        { clipPath: "inset(0% 0% 0% 0%)", opacity: 0.85 },
        { clipPath: "inset(0% 0% 100% 0%)", opacity: 0.6, ease: "none" }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
};
