import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Rocket, Zap, Mail, CheckCircle2 } from "lucide-react";

export const Waitlist = () => {
  const query = new URLSearchParams(useLocation().search);
  const toolName = query.get("tool") || "Astraventa Tool";

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Logic to actually capture email would go here.
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 flex flex-col items-center justify-center py-32 px-6">
        <div className="max-w-2xl w-full mx-auto relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <Link to="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Hub
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 shadow-sm mx-auto">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-700">Currently in Active Development</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-heading font-normal text-slate-900 leading-[1.1] tracking-tight">
                Get Early Access to <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-indigo-600 font-bold drop-shadow-sm">
                  {toolName}
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
                We're engineering the next generation of autonomous enterprise tools.
                Join the exclusive waitlist to secure priority access the moment {toolName} goes live.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 max-w-md mx-auto">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Priority Status Secured</h3>
                  <p className="text-sm text-slate-500 font-medium">
                    You're officially on the list for {toolName}. We'll notify you via email as soon as beta access opens.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">Engineering Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <Input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-11 h-12 bg-slate-50 border-slate-200 rounded-xl focus-visible:ring-fuchsia-500/20 focus-visible:border-fuchsia-500 font-medium"
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 rounded-xl bg-slate-900 hover:bg-fuchsia-600 text-white font-bold tracking-wide shadow-md transition-all group"
                  >
                    Join {toolName} Waitlist 
                    <Rocket className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              )}
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 opacity-50">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-500">High Velocity Engineering</span>
              </div>
            </div>

          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Waitlist;
