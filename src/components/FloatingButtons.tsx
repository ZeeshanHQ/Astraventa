import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Phone, Bell, X } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChatbotModal } from "./ChatbotModal";

// Professional Lucid WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

export const FloatingButtons = () => {
  const prefersReducedMotion = useReducedMotion();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showShortcutHint, setShowShortcutHint] = useState(true);

  const notifications = [
    "Need help with AI automation?",
    "Let's discuss your project!",
    "Get a free consultation!",
    "Transform your business today!",
    "Ask about our AI solutions!",
    "See our portfolio!"
  ];

  const whatsappNumber = "+923284529264"; // WhatsApp number

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

  // Restore hint dismissed state
  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('astraventa_chatbot_hint_dismissed');
      if (dismissed === '1') {
        setShowShortcutHint(false);
      }
    } catch { }
  }, []);

  // Global shortcut: Ctrl+K opens chatbot
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setOpen(true);
        setShowShortcutHint(false);
        try { localStorage.setItem('astraventa_chatbot_hint_dismissed', '1'); } catch { }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const dismissHint = () => {
    setShowShortcutHint(false);
    try { localStorage.setItem('astraventa_chatbot_hint_dismissed', '1'); } catch { }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-40">
      {/* Smart Horizontal WhatsApp Popup */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        key={currentNotification}
        className="absolute -top-12 right-0 bg-gradient-to-r from-green-500/90 to-green-600/90 backdrop-blur-sm px-3 py-2 rounded-full border border-green-400/30 shadow-lg text-xs text-white max-w-xs whitespace-nowrap"
      >
        <div className="flex items-center gap-2">
          <WhatsAppIcon className="w-3 h-3 text-white" />
          <span className="font-medium">{notifications[currentNotification]}</span>
        </div>
        <div className="absolute bottom-0 right-4 translate-y-full w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-green-500/90"></div>
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
          title="Chat on WhatsApp"
        >
          {/* Professional Lucid WhatsApp Icon */}
          <WhatsAppIcon className="w-6 h-6" />
          {/* Live indicator */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-background"
          />
        </motion.button>

        {/* Beautiful AI Chatbot Button */}
        <div className="relative">
          <motion.button
            whileHover={prefersReducedMotion ? undefined : { scale: 1.06 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
            onClick={() => { setOpen(true); dismissHint(); }}
            className="w-14 h-14 flex items-center justify-center bg-transparent text-white shadow-none relative ml-2"
            aria-label="AI Chatbot (Ctrl+K)"
            title="Open chatbot (Ctrl+K)"
          >
            {/* Try to render external PNG with transparent background at /chatbot.png. Fallback to SVG if missing. */}
            <img
              src="/chatbot.png"
              alt="Chatbot"
              className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const fallback = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                fallback.setAttribute('width', '40');
                fallback.setAttribute('height', '40');
                fallback.setAttribute('viewBox', '0 0 24 24');
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', 'M4 9a6 6 0 016-6h4a6 6 0 016 6v2a6 6 0 01-6 6h-3l-3.5 2.5c-.8.6-1.5.2-1.5-.8V17A6 6 0 014 11V9z');
                path.setAttribute('fill', 'currentColor');
                fallback.appendChild(path);
                target.parentElement?.appendChild(fallback);
              }}
            />
            {/* AI indicator */}
            {!prefersReducedMotion && (
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full border-2 border-background"
              />
            )}
          </motion.button>

        </div>
      </div>

      {/* Chatbot modal controlled here */}
      <ChatbotModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};
