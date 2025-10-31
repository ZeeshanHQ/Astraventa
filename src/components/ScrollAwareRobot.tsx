import { useState, useEffect } from "react";
import { AdvancedAIRobot } from "./AdvancedAIRobot";

export const ScrollAwareRobot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['hero', 'services', 'portfolio', 'team', 'process', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which section is currently in view
      let activeSection = 'hero';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;
          const elementBottom = elementTop + rect.height;
          
          // Check if section is in viewport
          if (scrollPosition >= elementTop - windowHeight / 2 && scrollPosition < elementBottom - windowHeight / 2) {
            activeSection = section;
          }
        }
      });

      setCurrentSection(activeSection);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <AdvancedAIRobot mousePosition={mousePosition} currentSection={currentSection} />;
};
