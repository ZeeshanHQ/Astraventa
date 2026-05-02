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
  Users,
  Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface AdminNotification {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "contact" | "demo" | "newsletter" | "career";
  created_at?: string;
}

interface AdminLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
  notifications?: AdminNotification[];
}

export const AdminLayout = ({ children, onLogout, notifications = [] }: AdminLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/admin", tab: "overview" },
    { icon: Database, label: "Blog", path: "/admin?tab=content", tab: "content" },
    { icon: Users, label: "Careers", path: "/admin?tab=careers", tab: "careers" },
    { icon: Radio, label: "Newsletter", path: "/admin?tab=newsletter", tab: "newsletter" },
    { icon: Cpu, label: "Infrastructure", path: "/admin?tab=infrastructure", tab: "infrastructure" },
    { icon: Mail, label: "Leads", path: "/admin?tab=leads", tab: "leads" },
    { icon: Activity, label: "Status", path: "/admin?tab=health", tab: "health" },
    { icon: ShieldCheck, label: "Security", path: "/admin?tab=security", tab: "security" },
    { icon: Settings, label: "Settings", path: "/admin?tab=settings", tab: "settings" },
  ];

  const currentTab = new URLSearchParams(location.search).get("tab") || "overview";

  return (
    <div className="admin-premium min-h-screen bg-black text-white font-body selection:bg-blue-500/30 selection:text-white overflow-hidden flex">
      <style>{`
        .admin-premium {
          background: #000 !important;
          color: #fff !important;
          letter-spacing: -0.01em;
          font-size: 13px;
        }

        .admin-premium [class*="text-white/"],
        .admin-premium [class*="text-slate-"],
        .admin-premium [class*="text-black/"] {
          color: #fff !important;
        }

        .admin-premium [class*="bg-[#050505]"],
        .admin-premium [class*="bg-slate-"],
        .admin-premium [class*="bg-black/"] {
          background-color: #000 !important;
        }

        .admin-premium [class*="bg-white/"] {
          background-color: rgba(255,255,255,0.035) !important;
        }

        .admin-premium button,
        .admin-premium a,
        .admin-premium input,
        .admin-premium textarea,
        .admin-premium select {
          font-family: inherit !important;
        }

        .admin-premium button {
          min-height: 0 !important;
          letter-spacing: 0.04em !important;
          font-weight: 600 !important;
        }

        .admin-premium input,
        .admin-premium textarea,
        .admin-premium select {
          background: #050505 !important;
          border: 1px solid rgba(255,255,255,0.18) !important;
          color: #fff !important;
          border-radius: 14px !important;
          min-height: 40px !important;
          font-size: 12px !important;
          letter-spacing: 0.01em !important;
          box-shadow: none !important;
        }

        .admin-premium input::placeholder,
        .admin-premium textarea::placeholder {
          color: rgba(255,255,255,0.55) !important;
        }

        .admin-premium [class*="rounded-[3"],
        .admin-premium [class*="rounded-[4"],
        .admin-premium [class*="rounded-[2.5"] {
          border-radius: 22px !important;
        }

        .admin-premium [class*="p-10"],
        .admin-premium [class*="p-12"] {
          padding: 28px !important;
        }

        .admin-premium [class*="p-8"] {
          padding: 22px !important;
        }

        .admin-premium [class*="gap-10"] {
          gap: 24px !important;
        }

        .admin-premium [class*="space-y-12"] > :not([hidden]) ~ :not([hidden]) {
          margin-top: 28px !important;
        }

        .admin-premium [class*="space-y-8"] > :not([hidden]) ~ :not([hidden]) {
          margin-top: 18px !important;
        }

        .admin-premium table th {
          color: #fff !important;
          font-size: 9px !important;
          font-weight: 600 !important;
          letter-spacing: 0.08em !important;
          padding: 14px 18px !important;
        }

        .admin-premium table td {
          color: #fff !important;
          padding: 16px 18px !important;
          font-size: 12px !important;
        }

        .admin-premium h1,
        .admin-premium h2,
        .admin-premium h3,
        .admin-premium h4 {
          color: #fff !important;
          font-style: normal !important;
          letter-spacing: -0.04em !important;
          text-transform: none !important;
          font-weight: 650 !important;
        }

        .admin-premium h2 {
          font-size: clamp(24px, 3vw, 34px) !important;
        }

        .admin-premium h3 {
          font-size: 13px !important;
          letter-spacing: 0.01em !important;
        }

        .admin-premium .font-mono,
        .admin-premium [class*="tracking-[0.3em]"],
        .admin-premium [class*="tracking-[0.4em]"],
        .admin-premium [class*="tracking-[0.5em]"],
        .admin-premium .tracking-widest {
          letter-spacing: 0.06em !important;
          font-family: inherit !important;
        }
      `}</style>
      {/* Dynamic Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[34%] h-[34%] bg-blue-500/[0.06] blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[34%] h-[34%] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-56 bg-black border-r border-white/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:relative lg:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:w-0 lg:opacity-0 lg:pointer-events-none"
        )}
      >
        <div className="h-full flex flex-col p-5">
          {/* Logo Section */}
          <div className="flex items-center gap-3 mb-10 px-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-blue-500/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-9 h-9 rounded-xl bg-black border border-white/15 flex items-center justify-center shadow-2xl">
                <Zap className="w-4.5 h-4.5 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="text-[12px] font-bold text-white tracking-[0.04em] leading-none mb-1 font-display">Astraventa</div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]" />
                <span className="text-[9px] font-semibold text-white tracking-[0.04em] font-body">Admin</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const isActive = currentTab === item.tab;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 rounded-xl text-[10px] font-semibold uppercase tracking-[0.12em] transition-all group relative overflow-hidden",
                    isActive
                      ? "bg-white text-black shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
                      : "text-white hover:text-white hover:bg-white/[0.06]"
                  )}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <item.icon className={cn("w-4 h-4 transition-transform group-hover:scale-110", isActive ? "text-black" : "text-white group-hover:text-blue-400")} />
                    {item.label}
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0" />}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Controls / User */}
          <div className="mt-auto pt-8 border-t border-white/5 space-y-6">
            <div className="flex items-center gap-3 px-4 bg-white/[0.03] p-3 rounded-2xl border border-white/10 hover:border-white/20 transition-all cursor-pointer group">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-black border border-white/15 flex items-center justify-center overflow-hidden">
                  <img src="https://api.dicebear.com/7.x/shapes/svg?seed=Astra" alt="Avatar" className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-black flex items-center justify-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-semibold text-white tracking-[0.04em] group-hover:text-blue-400 transition-colors">Administrator</div>
                <div className="text-[9px] text-white font-medium tracking-[0.04em]">Full access</div>
              </div>
            </div>

            <Button 
              onClick={onLogout}
              variant="ghost" 
              className="w-full h-11 justify-start gap-3 px-4 rounded-xl text-[10px] font-semibold uppercase tracking-[0.18em] text-white hover:text-red-400 hover:bg-red-500/10 transition-all border border-white/10 hover:border-red-500/20 shadow-none"
            >
              <LogOut className="w-4 h-4" /> Sign out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 h-screen overflow-y-auto custom-scrollbar flex flex-col relative z-10 transition-all duration-500">
        {/* Topbar */}
        <header className="h-20 border-b border-white/10 bg-black sticky top-0 z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={cn(
                "w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white hover:text-blue-400 hover:border-primary/40 transition-all shadow-none",
                !isSidebarOpen && "bg-blue-500/10 border-primary/20 text-blue-400"
              )}
            >
              <Menu className={cn("w-5 h-5", isSidebarOpen ? "block" : "hidden")} />
              <X className={cn("w-5 h-5", !isSidebarOpen ? "block" : "hidden")} />
            </button>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-3 text-[10px] font-medium text-white tracking-[0.08em]">
                <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-500" /> Supabase connected</span>
                <span>•</span>
                <span>Admin view</span>
              </div>
              <h1 className="text-lg font-bold text-white tracking-[0.08em] uppercase mt-1 font-display">
                {menuItems.find(i => i.tab === currentTab)?.label || "Dashboard"}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-6">
             <div className="hidden xl:flex items-center gap-5 px-5 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl">
                <div className="flex flex-col items-end">
                   <span className="text-[9px] font-semibold text-white tracking-[0.04em] leading-none mb-1">New activity</span>
                   <span className="text-[12px] font-black text-blue-400 leading-none">{notifications.length}</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex flex-col items-end">
                   <span className="text-[9px] font-semibold text-white tracking-[0.04em] leading-none mb-1">Data source</span>
                   <span className="text-[12px] font-black text-emerald-500 leading-none">Live</span>
                </div>
             </div>

             <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white hover:text-white hover:border-white/40 transition-all relative group shadow-none"
                >
                  <Bell className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-blue-500 rounded-full border-2 border-black text-[10px] font-bold text-white flex items-center justify-center">
                      {notifications.length > 9 ? "9+" : notifications.length}
                    </span>
                  )}
                </button>
                <button className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white hover:text-white hover:border-white/40 transition-all group shadow-none">
                  <Terminal className="w-5 h-5" />
                </button>
             </div>
             <AnimatePresence>
               {isNotificationsOpen && (
                 <motion.div
                   initial={{ opacity: 0, y: 10, scale: 0.98 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, y: 10, scale: 0.98 }}
                   className="absolute right-8 top-16 w-[360px] rounded-2xl border border-white/10 bg-black shadow-2xl p-3 z-50"
                 >
                   <div className="px-3 py-2 border-b border-white/10">
                     <div className="text-sm font-semibold text-white">Notifications</div>
                     <div className="text-[11px] text-white/70">Latest real activity from Supabase</div>
                   </div>
                   <div className="max-h-[360px] overflow-y-auto custom-scrollbar py-2">
                     {notifications.length === 0 ? (
                       <div className="px-3 py-8 text-center text-sm text-white">No new activity yet.</div>
                     ) : (
                       notifications.slice(0, 10).map((item) => (
                         <div key={item.id} className="p-3 rounded-xl hover:bg-white/[0.04] transition-colors">
                           <div className="flex items-center justify-between gap-3 mb-1">
                             <div className="text-[12px] font-semibold text-white">{item.title}</div>
                             <div className="text-[10px] text-white/70 whitespace-nowrap">{item.time}</div>
                           </div>
                           <div className="text-[11px] text-white/80 leading-relaxed">{item.description}</div>
                         </div>
                       ))
                     )}
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-8 lg:p-12 relative">
          <div className="max-w-[1440px] mx-auto">
            {children}
          </div>
        </main>

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
