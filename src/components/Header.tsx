import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AstraventaLogo } from "./AstraventaLogo";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-card border-b border-border/50 shadow-glow' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <AstraventaLogo size="md" />
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary smooth-transition font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-muted-foreground hover:text-primary smooth-transition font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-muted-foreground hover:text-primary smooth-transition font-medium"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-muted-foreground hover:text-primary smooth-transition font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary smooth-transition font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection('contact')}
            className="hidden sm:flex bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25 border-0 rounded-lg px-6 py-2 font-semibold transition-all duration-300 hover:scale-105"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
