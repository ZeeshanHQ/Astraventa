import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Phone, MessageCircle, Bell } from "lucide-react";
import { useState, useEffect } from "react";

export const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    "Need help with AI automation?",
    "Let's discuss your project!",
    "Get a free consultation!",
    "Transform your business today!",
    "Ask about our AI solutions!",
    "See our portfolio!"
  ];

  const whatsappNumber = "+1234567890"; // Replace with your WhatsApp number

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Notification above chatbot */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        key={currentNotification}
        className="absolute -top-20 right-0 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md px-4 py-3 rounded-2xl border border-primary/30 shadow-glow-lg text-sm text-foreground max-w-xs"
      >
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-accent animate-pulse" />
          <span className="font-medium">{notifications[currentNotification]}</span>
        </div>
        <div className="absolute bottom-0 right-6 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/20"></div>
      </motion.div>

      <div className="glass-card rounded-full px-2 py-2 flex items-center gap-2 border border-border/60">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-2 pr-2"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/90 hover:bg-primary text-white"
                aria-label="Contact Us"
              >
                <Phone className="w-5 h-5" />
              </motion.button>

              {showBackToTop && (
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={scrollToTop}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-primary text-white"
                  aria-label="Back to top"
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`, '_blank')}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white shadow-glow relative"
          aria-label="WhatsApp Chat"
        >
          {/* WhatsApp Icon */}
          <MessageCircle className="w-6 h-6" />
          {/* Live indicator */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-background"
          />
        </motion.button>
      </div>
    </div>
  );
};
