import React, { useState } from "react";
import { 
  LayoutDashboard, 
  Database, 
  Settings, 
  ShieldCheck, 
  Activity, 
  Menu, 
  X, 
  LogOut, 
  Bell, 
  Search,
  Zap,
  Terminal,
  Cpu,
  Globe,
  Radio,
  Users
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AdminLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

export const AdminLayout = ({ children, onLogout }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/admin", tab: "overview" },
    { icon: Database, label: "Content", path: "/admin?tab=content", tab: "content" },
    { icon: Activity, label: "System Health", path: "/admin?tab=health", tab: "health" },
    { icon: ShieldCheck, label: "Security", path: "/admin?tab=security", tab: "security" },
    { icon: Users, label: "Careers", path: "/admin?tab=careers", tab: "careers" },
    { icon: Settings, label: "Settings", path: "/admin?tab=settings", tab: "settings" },
  ];

  const currentTab = new URLSearchParams(location.search).get("tab") || "overview";

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-primary/30 selection:text-white overflow-hidden flex">
      {/* Dynamic Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-black/40 backdrop-blur-2xl border-r border-white/5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:relative lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:w-0 lg:opacity-0 lg:pointer-events-none"
        )}
      >
        <div className="h-full flex flex-col p-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4 mb-14 px-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-primary/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-2xl">
                <Zap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="text-[14px] font-black text-white uppercase tracking-[0.25em] leading-none mb-1.5 font-display italic">ASTRA_ROOT</div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" />
                <span className="text-[9px] font-black text-primary/60 uppercase tracking-[0.3em] font-mono">v1.0.0 // STABLE</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-6 px-4">Navigation</div>
            {menuItems.map((item) => {
              const isActive = currentTab === item.tab;
              return (
                <Link 
                  key={item.label}
                  to={item.path}
                  className={cn(
                    "flex items-center justify-between px-5 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all group relative overflow-hidden",
                    isActive 
                      ? "bg-primary text-white shadow-[0_8px_30px_rgba(var(--primary-rgb),0.3)]" 
                      : "text-white/40 hover:text-white hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <item.icon className={cn("w-4 h-4 transition-transform group-hover:scale-110", isActive ? "text-white" : "text-white/20 group-hover:text-primary")} />
                    {item.label}
                  </div>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 skew-x-[-20deg] translate-x-[-100%] animate-shimmer"
                    />
                  )}
                  {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0" />}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Controls / User */}
          <div className="mt-auto pt-8 border-t border-white/5 space-y-6">
            <div className="flex items-center gap-4 px-4 bg-white/5 p-4 rounded-3xl border border-white/5 hover:border-white/10 transition-all cursor-pointer group">
              <div className="relative">
                <div className="w-11 h-11 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/shapes/svg?seed=Astra" alt="Avatar" className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary border-2 border-black flex items-center justify-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-black text-white uppercase tracking-wider group-hover:text-primary transition-colors">Root_Administrator</div>
                <div className="text-[9px] text-white/30 font-black uppercase tracking-widest font-mono">Permission: ALL</div>
              </div>
            </div>

            <Button 
              onClick={onLogout}
              variant="ghost" 
              className="w-full h-14 justify-start gap-4 px-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] text-red-500/40 hover:text-red-500 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20 shadow-none font-display italic"
            >
              <LogOut className="w-4 h-4" /> Terminate_Link
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 h-screen overflow-y-auto custom-scrollbar flex flex-col relative z-10 transition-all duration-500">
        {/* Topbar */}
        <header className="h-24 border-b border-white/5 bg-black/20 backdrop-blur-xl sticky top-0 z-40 flex items-center justify-between px-10">
          <div className="flex items-center gap-10">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={cn(
                "w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/40 transition-all shadow-none",
                !isSidebarOpen && "bg-primary/10 border-primary/20 text-primary"
              )}
            >
              <Menu className={cn("w-5 h-5", isSidebarOpen ? "block" : "hidden")} />
              <X className={cn("w-5 h-5", !isSidebarOpen ? "block" : "hidden")} />
            </button>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-4 text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">
                <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> CLUSTER_NORTH_AMERICA</span>
                <span>//</span>
                <span>USER: ROOT_01</span>
              </div>
              <h1 className="text-xl font-black text-white tracking-[0.1em] uppercase mt-1 font-display italic">
                {menuItems.find(i => i.tab === currentTab)?.label || "Dashboard"}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-6">
             <div className="hidden xl:flex items-center gap-6 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl">
                <div className="flex flex-col items-end">
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono leading-none mb-1">NETWORK_LATENCY</span>
                   <span className="text-[12px] font-black text-primary uppercase leading-none">0.24 MS</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex flex-col items-end">
                   <span className="text-[9px] font-black text-white/20 uppercase tracking-widest font-mono leading-none mb-1">UPTIME</span>
                   <span className="text-[12px] font-black text-emerald-500 uppercase leading-none">99.99%</span>
                </div>
             </div>

             <div className="flex items-center gap-3">
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all relative group shadow-none">
                  <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span className="absolute top-3.5 right-3.5 w-2 h-2 bg-primary rounded-full border-2 border-black animate-pulse" />
                </button>
                <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all group shadow-none">
                  <Terminal className="w-5 h-5" />
                </button>
             </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-10 lg:p-14 relative">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>

        {/* Tactical Footer Overlay */}
        <div className="pointer-events-none fixed bottom-0 right-0 p-8 z-50 overflow-hidden">
           <div className="bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-8 shadow-2xl pointer-events-auto">
              <div className="flex items-center gap-3">
                 <Radio className="w-4 h-4 text-primary animate-pulse" />
                 <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] font-mono">LIVE_FEED // ENCRYPTED</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="text-[9px] font-black text-white/40 uppercase tracking-widest font-mono">
                 SYS_TIME: <span className="text-white">{new Date().toLocaleTimeString()}</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const ChevronRight = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
