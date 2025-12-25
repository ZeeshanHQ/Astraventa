import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Sparkles, Phone, Mail, Calendar, ExternalLink, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
  type?: 'text' | 'action' | 'link';
  actions?: Array<{
    text: string;
    action: string;
    icon?: any;
  }>;
}

const quickQuestions = [
  "What AI services do you offer?",
  "How much does it cost?",
  "What's your process?",
  "Can I see examples?",
  "How long does it take?",
  "Do you offer support?",
  "What's your experience?",
  "Can you build WhatsApp chatbots?",
  "Do you offer web automation?",
  "How do we start a project?"
];

const aiResponses = {
  "services": "We offer comprehensive AI solutions including:\n\n🤖 AI Chatbots & Virtual Assistants\n⚡ Web Automation & RPA\n🧠 Custom AI Integration\n📊 Smart Analytics & Insights\n🛒 E-commerce Development\n🔒 AI Security & Compliance\n\nEach service is tailored to your specific business needs. Would you like details about any specific service?",

  "pricing": "Our pricing is flexible and based on your project requirements:\n\n💰 **Basic Projects**: $5,000 - $15,000\n💼 **Standard Projects**: $15,000 - $50,000\n🚀 **Enterprise Solutions**: $50,000+\n\nWe offer:\n✅ Free consultation\n✅ No hidden fees\n✅ 30-day money-back guarantee\n\nWould you like a custom quote for your project?",

  "process": "Our proven 5-step process:\n\n1️⃣ **Discovery** - Understanding your needs\n2️⃣ **Strategy** - Custom AI roadmap\n3️⃣ **Development** - Building your solution\n4️⃣ **Testing** - Quality assurance\n5️⃣ **Launch** - Go-live with support\n\nWe maintain 95% client satisfaction and deliver on time. Ready to start your AI journey?",

  "examples": "Here are some success stories:\n\n🏢 **E-commerce**: 300% increase in sales with AI chatbots\n🏭 **Manufacturing**: 60% cost reduction with automation\n🏪 **Retail**: 24/7 customer support with AI assistants\n\n📞 **Schedule a demo** to see live examples\n📧 **Get case studies** sent to your email\n\nWhich industry interests you most?",

  "timeline": "Typical project timelines:\n\n⚡ **Quick Solutions**: 1-2 weeks\n🚀 **Standard Projects**: 1-3 months\n🏢 **Enterprise**: 3-6 months\n\nWe can also do:\n✅ Rush projects (ASAP)\n✅ Phased delivery\n✅ Flexible timelines\n\nWhat's your preferred timeline?",

  "support": "We provide comprehensive support:\n\n🕐 **24/7 Technical Support**\n📞 **Dedicated Account Manager**\n📚 **Training & Documentation**\n🔄 **Regular Updates & Maintenance**\n🛡️ **99.9% Uptime Guarantee**\n\nPlus free consultation and ongoing optimization!",

  "experience": "With 5+ years of AI expertise:\n\n✅ **100+ Successful Projects**\n✅ **50+ Enterprise Clients**\n✅ **95% Client Satisfaction**\n✅ **Certified AI Engineers**\n✅ **Industry Recognition**\n\nWe've worked with startups to Fortune 500 companies across various industries."
};

export const ChatbotModal = ({ isOpen, onClose }: ChatbotModalProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm Astraventa AI Assistant. I'm here to help you learn about our AI automation services. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('service') || message.includes('offer') || message.includes('what do you do')) {
      return aiResponses.services;
    } else if (message.includes('cost') || message.includes('price') || message.includes('budget') || message.includes('how much')) {
      return aiResponses.pricing;
    } else if (message.includes('process') || message.includes('how do you work') || message.includes('method')) {
      return aiResponses.process;
    } else if (message.includes('example') || message.includes('portfolio') || message.includes('show me') || message.includes('case study')) {
      return aiResponses.examples;
    } else if (message.includes('time') || message.includes('how long') || message.includes('duration') || message.includes('timeline')) {
      return aiResponses.timeline;
    } else if (message.includes('support') || message.includes('help') || message.includes('maintenance')) {
      return aiResponses.support;
    } else if (message.includes('experience') || message.includes('background') || message.includes('company') || message.includes('team')) {
      return aiResponses.experience;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 Great to meet you! I'm here to help you discover how AI automation can transform your business. What specific area interests you most?";
    } else if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! 😊 I'm here whenever you need help. Is there anything else you'd like to know about our AI services?";
    } else {
      return "That's a great question! 🤔 Let me connect you with our AI experts who can provide detailed answers. Would you like to schedule a free consultation call?";
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const aiResponse = getAIResponse(message);
      const botResponse: Message = {
        id: messages.length + 2,
        text: aiResponse,
        isBot: true,
        timestamp: new Date(),
        type: 'text',
        actions: [
          {
            text: "Schedule Call",
            action: "call",
            icon: Phone
          },
          {
            text: "Get Quote",
            action: "quote",
            icon: Mail
          },
          {
            text: "View Portfolio",
            action: "portfolio",
            icon: ExternalLink
          }
        ]
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleAction = (action: string) => {
    let responseText = "";
    let actionType = 'text';

    switch (action) {
      case 'call':
        responseText = "📞 Perfect! I'll connect you with our AI experts.\n\n**Next Steps:**\n✅ Free 30-minute consultation\n✅ Custom AI strategy\n✅ No-obligation quote\n\n**Available Times:**\n🕐 Today: 2:00 PM - 6:00 PM\n🕐 Tomorrow: 9:00 AM - 5:00 PM\n\nWould you like me to schedule a call?";
        break;
      case 'quote':
        responseText = "💰 Great! Let's get you a custom quote.\n\n**What I need:**\n✅ Project details\n✅ Timeline\n✅ Budget range\n✅ Contact information\n\n**Benefits:**\n🎯 Accurate pricing\n📋 Detailed proposal\n🆓 No hidden fees\n\nReady to get started?";
        break;
      case 'portfolio':
        responseText = "🎨 Here are some amazing examples:\n\n**Recent Projects:**\n🏢 E-commerce AI Chatbot (300% sales increase)\n🏭 Manufacturing Automation (60% cost reduction)\n🏪 Retail AI Assistant (24/7 support)\n\n**View Live Demos:**\n🔗 astraventa.com/portfolio\n📧 Request case studies\n\nWhich industry interests you most?";
        break;
    }

    const actionResponse: Message = {
      id: messages.length + 1,
      text: responseText,
      isBot: true,
      timestamp: new Date(),
      type: actionType
    };

    setMessages(prev => [...prev, actionResponse]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-end p-4 md:p-6"
          style={{ zIndex: 9999 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xs bg-card rounded-2xl shadow-glow-lg border border-border/50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Astraventa AI</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

            {/* Enhanced Messages */}
            <div
              className="h-64 overflow-y-auto p-3 space-y-3 bg-gradient-to-b from-background to-muted/20"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-2.5 rounded-xl ${msg.isBot
                        ? 'bg-muted/50 text-foreground border border-border/30'
                        : 'bg-gradient-to-r from-primary to-secondary text-white'
                      }`}
                  >
                    <p className="text-xs whitespace-pre-line leading-relaxed">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>

                    {/* Action Buttons */}
                    {msg.actions && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {msg.actions.map((action, index) => {
                          const Icon = action.icon;
                          return (
                            <button
                              key={index}
                              onClick={() => handleAction(action.action)}
                              className="flex items-center gap-1 text-xs px-2 py-1 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                            >
                              <Icon className="w-3 h-3" />
                              {action.text}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted/50 text-foreground p-3 rounded-2xl border border-border/30">
                    <div className="flex items-center gap-1">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs ml-2">AI is thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Quick Questions */}
            <div className="p-2.5 border-t border-border/50 bg-muted/20">
              <p className="text-xs text-muted-foreground mb-2 font-medium">Quick questions:</p>
              <div className="flex flex-wrap gap-1 mb-2.5">
                {quickQuestions.slice(0, 4).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="text-xs px-2 py-1 rounded-full bg-card/80 hover:bg-primary/10 hover:text-primary border border-border/30 text-foreground transition-all duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>

              {/* Enhanced Input */}
              <div className="flex gap-1.5 items-end">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-card/50 border-primary/30 focus:border-primary h-9 text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 h-9 w-9 p-0"
                  disabled={!message.trim()}
                >
                  <Send className="w-3.5 h-3.5" />
                </Button>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>We respond within 2 hours</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};