import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Eye, 
  Save, 
  X, 
  Lock, 
  Database, 
  ChevronRight,
  Zap,
  Activity,
  ShieldCheck,
  Search,
  ArrowRight,
  TrendingUp,
  Cpu,
  Globe,
  HardDrive,
  Terminal,
  Server,
  Network,
  Maximize2,
  RefreshCcw,
  Shield,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { blogService, BlogPost } from "@/lib/blog-service";
import { toast } from "sonner";
import { Link, useSearchParams } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { cn } from "@/lib/utils";

const ADMIN_KEY = "astra2024";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isNewPost, setIsNewPost] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview";

  useEffect(() => {
    if (isAuthenticated) {
      setPosts(blogService.getPosts());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_KEY) {
      setIsAuthenticated(true);
      toast.success("Identity Verified. Welcome Back, Root.");
    } else {
      toast.error("Invalid Authentication Key.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    toast.info("Session Terminated.");
  };

  const handleSave = () => {
    if (editingPost) {
      blogService.savePost(editingPost);
      setPosts(blogService.getPosts());
      setEditingPost(null);
      setIsNewPost(false);
      toast.success("Log synchronized successfully.");
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to purge this record?")) {
      blogService.deletePost(id);
      setPosts(blogService.getPosts());
      toast.info("Record purged.");
    }
  };

  const startNewPost = () => {
    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      title: "",
      excerpt: "",
      content: "",
      author: "Admin",
      date: new Date().toISOString().split('T')[0],
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1518433278981-955039b10c02?q=80&w=1970",
      readTime: "5 min",
      published: true
    };
    setEditingPost(newPost);
    setIsNewPost(true);
  };

  // --- RENDERING HELPERS ---

  // --- RENDERING HELPERS ---

  const renderOverview = () => (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Neural Pipelines", val: "28", icon: Activity, color: "text-primary", trend: "+12.4%", status: "OPTIMAL" },
          { label: "Data Nodes", val: posts.length.toString(), icon: Database, color: "text-blue-400", trend: "Syncing", status: "LIVE" },
          { label: "Core Load", val: "18%", icon: Cpu, color: "text-purple-500", trend: "-4%", status: "STABLE" },
          { label: "Edge Propagation", val: "0.12ms", icon: Globe, color: "text-emerald-500", trend: "Optimum", status: "VERIFIED" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className={cn("w-14 h-14 rounded-2xl bg-black border border-white/5 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className={cn("text-[9px] font-black font-mono px-2 py-0.5 rounded bg-white/5", stat.color)}>
                  {stat.trend}
                </span>
                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">{stat.status}</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="text-4xl font-black text-white tracking-tighter mb-2 group-hover:translate-x-1 transition-transform">{stat.val}</div>
              <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] font-display italic">{stat.label}</div>
            </div>

            {/* Tactical Grid Overlay */}
            <div className="absolute bottom-0 right-0 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_1px,transparent_1px)] bg-[size:8px_8px]" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 opacity-10">
             <TrendingUp className="w-32 h-32 text-primary" />
          </div>
          
          <div className="flex items-center justify-between mb-12 relative z-10">
            <div>
              <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-4 italic font-display">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Neural_Throughput_Index
              </h3>
              <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] mt-2 ml-6">Real-time spectral analysis of core pipelines</p>
            </div>
            <div className="flex gap-3 bg-black/40 p-1.5 rounded-2xl border border-white/5">
              {['1H', '12H', '24H', '7D'].map((t) => (
                <button key={t} className={cn(
                  "px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all",
                  t === '24H' ? "bg-primary text-white shadow-xl" : "text-white/20 hover:text-white hover:bg-white/5"
                )}>{t}</button>
              ))}
            </div>
          </div>

          <div className="h-72 flex items-end gap-3 px-4 relative z-10">
            {[45, 75, 52, 95, 68, 85, 55, 90, 48, 80, 65, 98, 72, 88, 60].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: `${h}%`, opacity: 1 }}
                transition={{ delay: i * 0.04, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 group/bar relative"
              >
                <div className="absolute inset-x-0 bottom-0 top-0 bg-primary/5 rounded-t-xl group-hover/bar:bg-primary/20 transition-colors" />
                <motion.div 
                  className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/40 to-primary rounded-t-xl"
                  style={{ height: '30%' }}
                  animate={{ height: ['20%', '40%', '20%'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-primary/40 text-primary text-[9px] font-black px-2 py-1 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-all translate-y-2 group-hover/bar:translate-y-0 shadow-2xl whitespace-nowrap">
                  LVL_{h}%
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 flex flex-col relative overflow-hidden group">
           <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] mb-12 flex items-center gap-4 italic font-display">
            <ShieldCheck className="w-5 h-5 text-emerald-500" /> Tactical_Feed
          </h3>
          <div className="space-y-8 flex-1">
            {[
              { type: "AUTH", status: "GRANTED", time: "42s ago", id: "ROOT_01", color: "text-emerald-500" },
              { type: "DATA", status: "NODE_SYNC", time: "5m ago", id: "PIPE_H2", color: "text-primary" },
              { type: "CORE", status: "STABLE", time: "12m ago", id: "SYS_KRNL", color: "text-blue-400" },
              { type: "WARN", status: "EDGE_LAT", time: "1h ago", id: "NODE_SEA", color: "text-amber-500" },
            ].map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-5 group/item cursor-default"
              >
                <div className={cn("w-10 h-10 rounded-xl bg-black border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-white/20 transition-colors", log.color)}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shadow-[0_0_8px_currentColor]" />
                </div>
                <div className="flex-1 border-b border-white/5 pb-5 group-hover/item:border-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-black text-white uppercase tracking-widest">{log.type} // {log.status}</span>
                    <span className="text-[9px] text-white/20 font-mono tracking-tighter">{log.time}</span>
                  </div>
                  <div className="text-[9px] text-white/10 uppercase tracking-[0.2em] font-display italic">Triggered_By: <span className="text-white/40">{log.id}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-8 h-12 rounded-2xl bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white hover:bg-white/10 transition-all font-display italic">
            Access_Full_Audit_Log
          </Button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter italic font-display">Node_Repository</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-[9px] font-black text-primary uppercase tracking-widest font-mono">
                {posts.length} ACTIVE_NODES
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">Directory: /root/astra/content/*</p>
          </div>
        </div>
        <Button onClick={startNewPost} className="h-14 px-10 bg-primary hover:bg-primary/80 text-white font-black rounded-2xl uppercase tracking-[0.2em] text-[11px] shadow-[0_8px_30px_rgba(var(--primary-rgb),0.3)] flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98]">
          <Plus className="w-5 h-5" /> Initialize_New_Node
        </Button>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md relative group">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">System_Status</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Node_Identifiers</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono text-right">Ops_Matrix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {posts.map((post) => (
                <tr key={post.id} className="group/row hover:bg-white/[0.02] transition-colors">
                  <td className="px-10 py-8">
                    {post.published ? (
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                         <span className="text-[10px] font-black font-mono text-emerald-500 uppercase tracking-widest">PROPAGATED</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                         <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                         <span className="text-[10px] font-black font-mono text-amber-500 uppercase tracking-widest">LOCAL_CACHE</span>
                      </div>
                    )}
                  </td>
                  <td className="px-10 py-8">
                    <div className="font-black text-[15px] text-white tracking-[0.05em] uppercase mb-2 group-hover/row:text-primary transition-colors italic font-display">{post.title}</div>
                    <div className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em] flex items-center gap-4 font-mono">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/10" />
                      <span className="text-primary/60">{post.category}</span>
                    </div>
                  </td>
                  <td className="px-10 py-8 text-right space-x-4">
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-white hover:border-white/20 transition-all hover:scale-110 shadow-none" asChild title="Preview">
                      <Link to={`/blog/${post.id}`} target="_blank">
                         <Maximize2 className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-primary hover:border-primary/40 transition-all hover:scale-110 shadow-none"
                      onClick={() => setEditingPost(post)}
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-red-500 hover:border-red-500/40 transition-all hover:scale-110 shadow-none"
                      onClick={() => handleDelete(post.id)}
                      title="Purge"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderHealth = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter italic font-display uppercase">Cluster_Vitals</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md text-[9px] font-black text-emerald-500 uppercase tracking-widest font-mono">
                STATUS: ALL_SYSTEMS_OPTIMAL
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">Hardware Abstraction Layer Access: GRANTED</p>
          </div>
        </div>
        <Button className="h-14 px-8 bg-white/5 border border-white/10 hover:border-white/20 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all font-display italic shadow-none">
           Restart_Instance_01 <ArrowRight className="ml-3 w-4 h-4 opacity-20" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-10 group hover:border-white/10 transition-all">
           <div className="flex items-center justify-between">
              <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-4 font-display italic">
                <Cpu className="w-5 h-5 text-primary" /> Compute_Matrix
              </h3>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest font-mono bg-primary/10 px-3 py-1 rounded-lg">LOAD // 12.4%</span>
           </div>
           <div className="space-y-8">
              {[
                { label: "Neural Processing Core", val: 34, color: "bg-primary" },
                { label: "Ingestion Thread Mesh", val: 56, color: "bg-blue-400" },
                { label: "Data Redundancy Pool", val: 12, color: "bg-emerald-500" },
              ].map((bar, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/40 font-mono">
                    <span>{bar.label}</span>
                    <span className="text-white">{bar.val}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${bar.val}%` }}
                      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                      className={cn("h-full rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]", bar.color)}
                    />
                  </div>
                </div>
              ))}
           </div>
        </div>

        <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center space-y-8 relative overflow-hidden group hover:border-white/10 transition-all">
           <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
           <div className="w-32 h-32 rounded-full border-[6px] border-white/5 border-t-primary animate-spin-slow flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(var(--primary-rgb),0.1)]">
              <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-2xl">
                 <Zap className="w-8 h-8 text-primary animate-pulse" />
              </div>
           </div>
           <div className="relative z-10">
              <div className="text-5xl font-black text-white tracking-tighter mb-2 italic font-display">99.98%</div>
              <div className="text-[11px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">Uptime_Metric // NODE_GLOBAL</div>
           </div>
           <p className="text-[10px] text-white/20 font-mono tracking-[0.3em] max-w-[280px] uppercase leading-relaxed relative z-10">Astra Core implements hot-swappable redundancy in <span className="text-primary italic">Autonomous_State</span>.</p>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter italic font-display uppercase">Security_Mesh</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-md text-[9px] font-black text-red-500 uppercase tracking-widest font-mono">
                THREAT_LEVEL: 01_MINIMAL
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">Encrypted Handshake Protocol: AES-256-GCM</p>
          </div>
        </div>
        <div className="flex gap-4">
           <Button className="h-14 px-8 bg-red-500/10 border border-red-500/20 text-red-500 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-red-500/20 transition-all group font-display italic shadow-none">
              <Shield className="w-4 h-4 mr-3 group-hover:animate-pulse" /> Emergency_Lockdown
           </Button>
           <Button className="h-14 px-8 bg-white/5 border border-white/10 hover:border-white/20 text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all font-display italic shadow-none">
              Export_Audit_Logs
           </Button>
        </div>
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden backdrop-blur-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.02] border-b border-white/5">
              <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Timestamp</th>
              <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Handshake_ID</th>
              <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono">Action_Protocol</th>
              <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20 font-mono text-right">Verif_Hash</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { time: "2026-03-21 14:24:55", id: "IPV6 // 2001:0db8:85a3", action: "GATE_AUTH_GRANTED", status: "VERIFIED" },
              { time: "2026-03-21 14:12:01", id: "GEO // SINGAPORE_04", action: "CONTENT_SYNC_START", status: "VERIFIED" },
              { time: "2026-03-21 13:55:33", id: "SYS // CORE_OPTIMIZE", action: "CACHE_PURGE_ALL", status: "MANUAL" },
              { time: "2026-03-21 13:22:12", id: "BOT // SCANNER_01", action: "THREAT_SWEEP_DONE", status: "VERIFIED" },
            ].map((row, i) => (
              <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                <td className="px-10 py-8 text-[10px] font-mono text-white/40">{row.time}</td>
                <td className="px-10 py-8 text-[11px] font-black text-white uppercase tracking-widest">{row.id}</td>
                <td className="px-10 py-8 text-[11px] font-black text-white/20 uppercase tracking-widest font-display italic">{row.action}</td>
                <td className="px-10 py-8 text-right">
                  <span className={cn(
                    "text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border font-mono shadow-none",
                    row.status === 'VERIFIED' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-primary/10 border-primary/20 text-primary'
                  )}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-12 max-w-5xl">
       <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter italic font-display uppercase">Core_Configuration</h2>
          <div className="flex items-center gap-4 mt-4">
             <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-[9px] font-black text-primary uppercase tracking-widest font-mono">
                NODE_01_GLOBAL
             </div>
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <p className="text-white/20 font-mono text-[9px] uppercase tracking-[0.3em]">System Environment Variable Control</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-8 group transition-all hover:border-white/10">
            <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] mb-4 font-display italic">Environment_Flags</h3>
            <div className="space-y-4">
               {[
                 { label: "Maintenance Mode", active: false, icon: Shield },
                 { label: "Alpha API Access", active: true, icon: Network },
                 { label: "Global Edge Caching", active: true, icon: Globe },
                 { label: "Verbose Error Logging", active: false, icon: Terminal },
               ].map((flag, i) => (
                  <label key={i} className="flex items-center justify-between p-5 bg-black border border-white/5 rounded-[2rem] cursor-pointer group/flag hover:border-primary/40 transition-all">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 group-hover/flag:text-primary transition-colors">
                           <flag.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-black text-white/40 uppercase tracking-widest transition-colors group-hover/flag:text-white">{flag.label}</span>
                     </div>
                     <div className={cn(
                        "w-12 h-6 rounded-full relative transition-all duration-500",
                        flag.active ? 'bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)]' : 'bg-white/10'
                     )}>
                        <div className={cn(
                           "absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 shadow-xl",
                           flag.active ? 'left-7' : 'left-1'
                        )} />
                     </div>
                  </label>
               ))}
            </div>
         </div>

         <div className="p-10 rounded-[3.5rem] bg-white/[0.02] border border-white/5 space-y-8 group transition-all hover:border-white/10">
            <h3 className="text-[14px] font-black text-white uppercase tracking-[0.3em] mb-4 font-display italic">System_Operations</h3>
            <div className="space-y-4">
               <Button className="w-full h-20 bg-black border border-white/5 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.25em] hover:bg-white/5 transition-all flex items-center justify-between group/btn px-8 shadow-none font-display italic">
                  Purge Edge Cache <HardDrive className="w-5 h-5 text-white/10 group-hover/btn:text-primary transition-colors" />
               </Button>
               <Button className="w-full h-20 bg-black border border-white/5 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.25em] hover:bg-white/5 transition-all flex items-center justify-between group/btn px-8 shadow-none font-display italic">
                  Force Node Sync <RefreshCcw className="w-5 h-5 text-white/10 group-hover/btn:text-primary transition-colors" />
               </Button>
               <Button className="w-full h-20 bg-primary/5 border border-primary/20 text-primary rounded-[2rem] text-[11px] font-black uppercase tracking-[0.25em] hover:bg-primary/10 transition-all flex items-center justify-between group/btn px-8 shadow-none font-display italic">
                  Cluster_Deploy <Layers className="w-5 h-5 text-primary group-hover/btn:scale-110 transition-transform" />
               </Button>
            </div>
         </div>
      </div>
    </div>
  );

  const renderPlaceholder = (title: string) => (
    <div className="min-h-[500px] flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[4rem] text-center p-12 bg-white/[0.01]">
      <div className="w-24 h-24 rounded-3xl bg-black border border-white/10 flex items-center justify-center mb-8 shadow-2xl relative">
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-20" />
        <Zap className="w-10 h-10 text-primary relative z-10" />
      </div>
      <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em] mb-4 italic font-display">{title}</h2>
      <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em] max-w-sm leading-relaxed">System Module is currently in deep-state development or access is restricted by protocol Root_01.</p>
    </div>
  );

  // --- MAIN LOGIC ---

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 font-sans relative overflow-hidden">
        {/* Deep State Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[200px] pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 blur-[200px] pointer-events-none rounded-full" />
        
        {/* Tactical Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-lg bg-black/40 border border-white/10 rounded-[4rem] p-16 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative z-10 overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
          
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="relative mb-10">
               <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <div className="relative w-24 h-24 rounded-[2.5rem] bg-black border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-primary/40 transition-colors">
                 <Shield className="w-10 h-10 text-primary" />
               </div>
            </div>
            <h1 className="text-3xl font-black text-white tracking-[0.3em] uppercase mb-3 font-display italic">ASTRA_GATE</h1>
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
               <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.4em] font-black">System_Authentication_Required</p>
            </div>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono ml-6 block">Access_Token_Handshake</label>
              <Input 
                type="password" 
                placeholder="••••••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-20 bg-black/40 border-white/10 text-white rounded-[2rem] font-mono text-center tracking-[1.5em] focus:border-primary/40 focus:ring-0 transition-all text-2xl placeholder:opacity-20 shadow-none border"
              />
            </div>
            <Button type="submit" className="w-full h-20 bg-primary hover:bg-primary/80 text-white font-black rounded-[2rem] uppercase tracking-[0.3em] text-[12px] shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)] group/btn transition-all hover:scale-[1.02] active:scale-[0.98] font-display italic">
              Synchronize_Identity <ArrowRight className="ml-4 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
            </Button>
          </form>

          <div className="mt-16 text-center border-t border-white/5 pt-10">
            <p className="text-[9px] font-mono text-white/10 uppercase tracking-[0.5em] font-black">Protocol: OMNI_SECURE // v1.0.0</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, scale: 0.98, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pb-24"
      >
        <div className="px-10 lg:px-16 pt-12">
          {activeTab === "overview" && renderOverview()}
          {activeTab === "content" && renderContent()}
          {activeTab === "health" && renderHealth()}
          {activeTab === "security" && renderSecurity()}
          {activeTab === "settings" && renderSettings()}
        </div>
      </motion.div>

      {/* Modern Slide-over Editor */}
      <AnimatePresence>
        {editingPost && (
          <div className="fixed inset-0 z-[200] flex items-center justify-end bg-black/80 backdrop-blur-2xl">
             <motion.div 
               initial={{ x: "100%", opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               exit={{ x: "200%", opacity: 0 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="w-full max-w-5xl h-full bg-[#050505] border-l border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col overflow-hidden relative"
             >
                {/* Tactical Top Bar */}
                <div className="px-12 py-10 border-b border-white/5 bg-black flex items-center justify-between sticky top-0 z-20">
                   <div className="flex items-center gap-8">
                      <div className="w-16 h-16 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-2xl">
                        {isNewPost ? <Plus className="w-8 h-8" /> : <Layers className="w-8 h-8" />}
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-white italic font-display uppercase tracking-wider">{isNewPost ? "Initialize_Node" : "Modify_Core_Log"}</h2>
                        <div className="flex items-center gap-3 mt-1">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                           <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] font-mono">NODE_UID: <span className="text-white/40">{editingPost.id}</span></span>
                        </div>
                      </div>
                   </div>
                   <Button variant="ghost" className="w-14 h-14 rounded-2xl text-white/20 hover:text-white hover:bg-white/5 border border-white/5 transition-all" onClick={() => { setEditingPost(null); setIsNewPost(false); }}>
                      <X className="w-6 h-6" />
                   </Button>
                </div>

                <div className="p-12 space-y-12 flex-1 overflow-y-auto custom-scrollbar overflow-x-hidden">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Node_Title</label>
                        <Input 
                          value={editingPost.title}
                          onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-black text-xl px-10 focus:border-primary focus:ring-0 transition-all shadow-none border italic font-display"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Category_Logic</label>
                        <div className="relative">
                           <select 
                              value={editingPost.category}
                              onChange={(e) => setEditingPost({...editingPost, category: e.target.value as any})}
                              className="w-full h-20 bg-black border border-white/10 text-white rounded-[2rem] font-black uppercase tracking-[0.3em] text-[11px] px-10 appearance-none focus:border-primary transition-all font-display italic"
                           >
                              <option value="Engineering">Engineering</option>
                              <option value="AI">AI</option>
                              <option value="Design">Design</option>
                              <option value="Strategy">Strategy</option>
                           </select>
                           <ChevronRight className="absolute right-8 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 rotate-90 pointer-events-none" />
                        </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Meta_Spectral_Excerpt</label>
                      <Textarea 
                        value={editingPost.excerpt}
                        onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                        className="min-h-[140px] bg-black border-white/10 text-white/80 rounded-[2.5rem] p-10 focus:border-primary transition-all font-medium leading-relaxed shadow-none border italic"
                      />
                   </div>

                   <div className="space-y-4">
                      <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Binary_Content_Blob (Markdown)</label>
                      <div className="relative bg-black rounded-[3rem] border border-white/5 overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                           <Terminal className="w-32 h-32" />
                        </div>
                        <Textarea 
                           value={editingPost.content}
                           onChange={(e) => setEditingPost({...editingPost, content: e.target.value})}
                           className="min-h-[600px] bg-transparent border-none text-white/60 rounded-none font-mono p-12 focus:ring-0 leading-loose text-sm shadow-none overflow-x-hidden min-w-full"
                           style={{ width: '100%' }}
                        />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Author_Signature</label>
                        <Input 
                          value={editingPost.author}
                          onChange={(e) => setEditingPost({...editingPost, author: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white rounded-[2rem] font-black focus:border-primary transition-all shadow-none border italic font-display text-sm tracking-widest"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[11px] font-black text-white/20 uppercase tracking-[0.5em] font-mono ml-4 block italic">Visual_Asset_Pointer</label>
                        <Input 
                          value={editingPost.image}
                          onChange={(e) => setEditingPost({...editingPost, image: e.target.value})}
                          className="h-20 bg-black border-white/10 text-white/40 rounded-[2rem] font-mono text-xs px-10 focus:border-primary transition-all shadow-none border"
                        />
                      </div>
                   </div>
                </div>

                {/* Status bar */}
                <div className="px-12 py-10 border-t border-white/5 bg-black flex items-center justify-between sticky bottom-0 z-20">
                   <div className="flex items-center gap-10">
                      <label className="flex items-center gap-5 cursor-pointer group">
                        <div className="relative">
                          <input 
                              type="checkbox" 
                              checked={editingPost.published}
                              onChange={(e) => setEditingPost({...editingPost, published: e.target.checked})}
                              className="sr-only"
                          />
                          <div className={cn(
                             "w-12 h-6 rounded-full transition-all duration-500 border border-white/10",
                             editingPost.published ? 'bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]' : 'bg-white/5'
                          )} />
                          <div className={cn(
                             "absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-500 shadow-xl",
                             editingPost.published ? 'left-7' : 'left-1'
                          )} />
                        </div>
                        <span className="text-[11px] font-black text-white/20 group-hover:text-white uppercase tracking-[0.3em] font-display italic transition-colors">Propagate_To_Production</span>
                      </label>
                   </div>
                   <div className="flex gap-6">
                      <button className="h-16 px-10 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] text-white/20 hover:text-white transition-all font-display italic" onClick={() => { setEditingPost(null); setIsNewPost(false); }}>Abort_Mission</button>
                      <Button onClick={handleSave} className="h-16 px-14 bg-primary hover:bg-primary/80 text-white font-black rounded-2xl uppercase tracking-[0.3em] text-[12px] shadow-[0_15px_40px_rgba(var(--primary-rgb),0.3)] flex items-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] font-display italic">
                         <Save className="w-5 h-5" /> Synchronize_Node
                      </Button>
                   </div>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AdminLayout>
  );
};

export default AdminDashboard;
